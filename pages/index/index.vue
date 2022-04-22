<template>
	<view ref="body" class="content" @keyup.left="bindLeft" @keyup.right="bindRight" @keyup.down="bindDown"
		@keyup.up="bindUp" @touchstart="handleTouchStart" @touchmove="handleTouchMove">
		<view>蛇蛇目前：{{snakes.length}}米长</view>
		<view class="boom-countdown" v-show="boom">
			虫虫还有<text class="num">{{boomCount}}</text>秒爆炸！<text class="tip">（请在爆炸前吃掉它）</text>
		</view>
		<view class="game-field">
			<view class="block" :style="{'background-image': bg(x, i), transform: `rotate(${calcRotate(x,i)}deg)`}"
				v-for="(x, i) in blocks" :key="i">
			</view>
		</view>
		<view v-show="!started || ended" class="game-board-wrap">
			<view v-show="!started" class="game-board">
				<view class="title">选择游戏难度</view>
				<radio-group name="radio" @change="bindLevelChange">
					<label class="label">
						<radio value="1" :checked="level==1" /><text>简单模式</text>
					</label>
					<label class="label">
						<radio value="2" :checked="level==2" /><text>正常模式</text>
					</label>
					<label class="label">
						<radio value="3" :checked="level==3" /><text>困难模式</text>
					</label>
					<label class="label">
						<radio value="4" :checked="level==4" /><text>地狱模式</text>
					</label>
				</radio-group>
				<button type="primary" @click="start">开始游戏</button>
			</view>
			<view v-show="ended" class="settle-board">
				<view class="title">游戏结束</view>
				<view class="result">您的蛇蛇达到了{{snakes.length}}米</view>
				<view class="btns">
					<button type="primary" @click="reStart">再次挑战</button>
					<button type="primary" plain @click="rePick">重选难度</button>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import worm from "../../static/images/worm.png";
	import snakeBody from "../../static/images/snake_body.png";
	import snakeHead from "../../static/images/snake_head.png";
	import snakeTail from "../../static/images/snake_tail.png";
	import polluteBlock from "../../static/images/pollute.png";
	import wormBoom from "../../static/images/worm_4.png";
	import explodeVoice from "../../static/audio/explode.mp3";
	import eatVoice from "../../static/audio/eat.mp3";
	import bgm from '../../static/audio/bgm.mp3';
	import click from '../../static/audio/click.mp3';
	import clock from '../../static/audio/clock.mp3';
	import die from '../../static/audio/die.mp3';
	export default {
		data() {
			return {
				blocks: [],
				worms: [],
				snakes: [0, 1, 2, 3],
				direction: "right",
				timer: null,
				level: 1, // 游戏难度
				boom: false, // 是否生成会爆炸的虫子
				boomCount: 10,
				pollutes: [],
				started: false, // 游戏开始了
				ended: false, // 游戏结束了
				lastX: 0,
				lastY: 0,
				bgmInnerAudioContext: null,
				clockInnerAudioContext: null,
				counldChangeDirection: false
			};
		},
		onLoad() {
			this.initGame();
			// 绑定键盘事件
			document.onkeydown = (e) => {
				switch (e.keyCode) { // 获取当前按下键盘键的编码
					case 8: // 按下退格键
						this.rePick();
						break;
					case 13: // 按下回车键
						this.reStart();
						break;
					case 37: // 按下左箭头键
						this.bindLeft();
						break;
					case 39: // 按下右箭头键
						this.bindRight();
						break;
					case 38: // 按下上箭头键
						if (!this.started) {
							this.level--;
						} else {
							this.bindUp();
						}
						break;
					case 40: // 按下下箭头键
						if (!this.started) {
							this.level++;
						} else {
							this.bindDown();
						}
						break;
				}
			}
		},
		watch: {
			boomCount(val) {
				if (val === 0) {
					// 超过爆炸时间还没吃到,则将虫子格子变成被污染的土地,并且重置爆炸状态,同时生成一只新的虫子:
					this.handleExplodeVoice()
					this.clockInnerAudioContext.stop()
					const boomWorm = this.worms.pop();
					this.pollutes.push(boomWorm);
					this.blocks[boomWorm] = 3; // 被污染的地方我们用3表示
					this.boom = false;
					this.worms.push(this.createWorm());
				}
			}
		},
		methods: {
			initGame() {
				this.blocks = new Array(100).fill(0);
				this.worms = [Math.floor(Math.random() * 96) + 4];
				this.snakes = [0, 1, 2, 3];
				this.pollutes = [];
				this.direction = "right";
				this.timer = null;
				this.boomTimer = null;
				this.paint();
			},
			handleTouchStart(e) {
				// 手指开始位置
				this.lastX = e.touches[0].pageX;
				this.lastY = e.touches[0].pageY;
			},
			handleTouchMove(e) {
				let lastX = e.touches[0].pageX; // 移动的x轴坐标
				let lastY = e.touches[0].pageY; // 移动的y轴坐标

				let touchX = lastX - this.lastX;
				let touchY = lastY - this.lastY
				if (Math.abs(touchX) > Math.abs(touchY)) {
					if (touchX < 0) {
						if (this.direction === "right") return;
						if (this.counldChangeDirection) {
							this.direction = 'left';
							this.counldChangeDirection = false;
						}
					} else if (touchX > 0) {
						if (this.direction === "left") return;
						if (this.counldChangeDirection) {
							this.direction = 'right';
							this.counldChangeDirection = false;
						}
					}
				} else {
					if (touchY < 0) {
						if (this.direction === "down") return;
						if (this.counldChangeDirection) {
							this.direction = 'up';
							this.counldChangeDirection = false;
						}
					} else if (touchY > 0) {
						if (this.direction === "up") return;
						if (this.counldChangeDirection) {
							this.direction = 'down';
							this.counldChangeDirection = false;
						}
					}
				}
				this.lastX = lastX;
				this.lastY = lastY;
			},
			// 难度选择
			bindLevelChange(e) {
				this.level = e.detail.value;
				this.handleClickVoice();
			},
			rePick() {
				this.started = false;
				this.ended = false;
			},
			start() {
				this.started = true;
				this.initGame();
				this.handleClickVoice()
				this.handleBgmVoice()
				this.timer = setInterval(() => {
					this.toWards(this.direction);
				}, 1000 / this.level);
			},
			reStart() {
				this.ended = false;
				if (this.timer) {
					clearInterval(this.timer);
				}
				this.start();
			},
			paint() {
				this.worms.forEach((x) => {
					this.blocks[x] = 1;
				});
				this.snakes.forEach((x) => {
					this.blocks[x] = 2;
				});
				this.$forceUpdate();
			},
			bg(type, index) {
				let bg = "";
				switch (type) {
					case 0: // 地板
						bg = "unset";
						break;
					case 1: // 虫子
						if (this.boom) {
							bg = `url(${wormBoom})`;
						} else {
							bg = `url(${worm})`;
						}
						break;
					case 2: // 蛇
						let head = this.snakes[this.snakes.length - 1];
						let tail = this.snakes[0];
						if (index === head) {
							bg = `url(${snakeHead})`;
						} else if (index === tail) {
							bg = `url(${snakeTail})`;
						} else {
							bg = `url(${snakeBody})`;
						}
						break;
					case 3: // 污染的地块
						bg = `url(${polluteBlock})`;
						break;
				}
				return bg;
			},
			calcRotate(type, index) {
				let rotate = 0;
				switch (type) {
					case 0: // 地板
						rotate = 0;
						break;
					case 1: // 虫子
						rotate = 0;
						break;
					case 2: // 蛇
						let length = this.snakes.length;
						let head = this.snakes[length - 1];
						let tail = this.snakes[0];
						let tailPre = this.snakes[1];
						let bodyPre = this.snakes[this.snakes.indexOf(index) + 1];
						if (index === head) {
							if (this.direction === "right") {
								rotate = 90;
							} else if (this.direction === "down") {
								rotate = 180;
							} else if (this.direction === "left") {
								rotate = 270;
							} else {
								rotate = 0;
							}
						} else if (index === tail) {
							if (tailPre - 1 === tail) {
								// 向右走的
								rotate = 90;
							} else if (tailPre - 10 === tail) {
								// 向下走的
								rotate = 180;
							} else if (tailPre + 1 === tail) {
								// 向左走的
								rotate = 270;
							} else {
								// 向上走的
								rotate = 0;
							}
						} else {
							if (bodyPre - 1 === index) {
								// 向右走的
								rotate = 90;
							} else if (bodyPre - 10 === index) {
								// 向下走的
								rotate = 180;
							} else if (bodyPre + 1 === index) {
								// 向左走的
								rotate = 270;
							} else {
								// 向上走的
								rotate = 0;
							}
						}
						break;
				}
				return rotate;
			},
			handleEatVoice() {
				const innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.autoplay = true;
				innerAudioContext.src = eatVoice;
			},
			handleExplodeVoice() {
				const innerAudioContext = uni.createInnerAudioContext();
				innerAudioContext.autoplay = true;
				innerAudioContext.src = explodeVoice;
			},
			handleBgmVoice() {
				// 背景音乐
				this.bgmInnerAudioContext = uni.createInnerAudioContext()
				this.bgmInnerAudioContext.autoplay = true;
				this.bgmInnerAudioContext.src = bgm;
				this.bgmInnerAudioContext.loop = true;
			},
			handleClickVoice() {
				// 按钮点击的声音
				const innerAudioContext = uni.createInnerAudioContext()
				innerAudioContext.autoplay = true;
				innerAudioContext.src = click;
			},
			// 爆炸倒计时的声音
			handleClockVoice() {
				this.clockInnerAudioContext = uni.createInnerAudioContext()
				this.clockInnerAudioContext.autoplay = true;
				this.clockInnerAudioContext.src = clock;
			},
			// 蛇挂掉了
			handleDieVoice() {
				const innerAudioContext = uni.createInnerAudioContext()
				innerAudioContext.autoplay = true;
				innerAudioContext.src = die;
			},
			toWards(direction) {
				this.counldChangeDirection = true;
				if (this.snakes.length === 100) {
					clearInterval(this.timer);
					return;
				}
				let head = this.snakes[this.snakes.length - 1];
				let tail = this.snakes[0];
				let next;
				switch (direction) {
					case "up":
						next = head - 10;
						break;
					case "down":
						next = head + 10;
						break;
					case "left":
						next = head - 1;
						break;
					case "right":
						next = head + 1;
						break;
				}
				let gameover = this.checkGame(direction, next);
				if (gameover) {
					this.ended = true;
					this.handleDieVoice()
					this.bgmInnerAudioContext.pause()
					this.clockInnerAudioContext && this.clockInnerAudioContext.stop()
					clearInterval(this.timer);
					clearInterval(this.boomTimer);
				} else {
					// 游戏没结束
					this.snakes.push(next);
					let nextType = this.blocks[next];
					this.blocks[next] = 2;
					// 如果是空白格
					if (nextType === 0) {
						this.snakes.shift();
					} else {
						// 如果是虫子格
						this.handleEatVoice()
						this.worms = this.worms.filter((x) => x !== next);
						let nextWorm = this.createWorm();
						this.worms.push(nextWorm);
					}
					this.blocks[tail] = 0;
					this.paint();
				}
			},
			// 生成下一只虫子
			createWorm() {
				this.boom = false;
				let blocks = Array.from({
					length: 100
				}, (v, k) => k);
				// 在不是蛇和被污染的地方生成虫子
				let restBlocks = blocks.filter(x => this.snakes.indexOf(x) < 0 && this.pollutes.indexOf(x) < 0);
				let worm = restBlocks[Math.floor(Math.random() * restBlocks.length)];
				// 根据游戏难度,概率产出会爆炸的虫子:
				this.boom = Math.random() / this.level < 0.05;
				// 生成了新虫子说明吃到了那个爆炸的虫子，重置下爆炸
				if (this.boom) {
					this.boomCount = 10;
					this.boomTimer && clearInterval(this.boomTimer);
					this.handleClockVoice()
					this.boomTimer = setInterval(() => {
						this.boomCount--;
					}, 1000)
				} else {
					this.clockInnerAudioContext && this.clockInnerAudioContext.stop()
					clearInterval(this.boomTimer);
				}
				return worm;
			},
			bindUp() {
				if (this.direction === "down") return;
				if (this.counldChangeDirection) {
					this.direction = "up";
					this.counldChangeDirection = false;
				}
			},
			bindDown() {
				if (this.direction === "up") return;
				if (this.counldChangeDirection) {
					this.direction = "down";
					this.counldChangeDirection = false;
				}
			},
			bindLeft() {
				if (this.direction === "right") return;
				if (this.counldChangeDirection) {
					this.direction = "left";
					this.counldChangeDirection = false;
				}
			},
			bindRight() {
				if (this.direction === "left") return;
				if (this.counldChangeDirection) {
					this.direction = "right";
					this.counldChangeDirection = false;
				}
			},
			checkGame(direction, next) {
				let gameover = false;
				let isSnake = this.snakes.indexOf(next) > -1;
				let isPollute = this.pollutes.indexOf(next) > -1;
				// 撞到蛇和被污染的地块游戏结束
				if (isSnake || isPollute) {
					gameover = true;
				}
				// 撞到边界游戏结束
				switch (direction) {
					case "up":
						if (next < 0) {
							gameover = true;
						}
						break;
					case "down":
						if (next >= 100) {
							gameover = true;
						}
						break;
					case "left":
						if (next % 10 === 9) {
							gameover = true;
						}
						break;
					case "right":
						if (next % 10 === 0) {
							gameover = true;
						}
						break;
				}
				return gameover;
			},
		},
	};
</script>

<style>
	.content {
		height: calc(100vh - 150upx);
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 30upx 0;
	}

	.game-field {
		display: flex;
		flex-wrap: wrap;
		margin-top: 100upx;
	}

	.block {
		width: 10vw;
		height: 10vw;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgb(232, 235, 178);
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		box-sizing: border-box;
	}

	.flex {
		display: flex;
		width: 50%;
		justify-content: space-between;
	}

	.action-field {
		display: flex;
		flex-direction: column;
		width: 100%;
		align-items: center;
	}

	.game-board-wrap {
		position: fixed;
		width: 100%;
		height: 100vh;
		background-color: rgba(0, 0, 0, .5);
		top: 0;
		left: 0;
		z-index: 999;
	}

	.game-board {
		width: 600upx;
		height: 600upx;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -300upx;
		margin-left: -300upx;
		background-color: #fff;
		border-radius: 30upx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.settle-board {
		width: 600upx;
		height: 400upx;
		position: absolute;
		top: 50%;
		left: 50%;
		margin-top: -300upx;
		margin-left: -300upx;
		background-color: #fff;
		border-radius: 30upx;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.title {
		font-size: 50upx;
		font-weight: bold;
		margin-top: 40upx;
	}

	.label {
		display: block;
		margin: 30upx;
	}

	.result {
		margin: 40upx 0;
	}

	.btns {
		display: flex;
		width: 500upx;
	}

	.boom-countdown {
		position: absolute;
		width: 100%;
		text-align: center;
		top: 60upx;
	}

	.num {
		font-size: 60upx;
		color: #007AFF;
	}

	.tip {
		font-size: 20upx;
		color: #f8b62a;
	}
</style>
