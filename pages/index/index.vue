<template>
	<view class="content">
		<view>蛇蛇目前：{{snakes.length}}米长</view>
		<view class="game-field">
			<view class="block" :style="`background-image: ${bg(x, i)};transform: rotate(${calcRotate(
          x,
          i
        )}deg)`" v-for="(x, i) in blocks" :key="i">
			</view>
		</view>
		<view class="action-field">
			<button @click="bindUp">上</button>
			<view class="flex">
				<button @click="bindLeft">左</button>
				<button @click="bindRight">右</button>
			</view>
			<button @click="bindDown">下</button>
		</view>
		<view class="play">
			<button block v-show="!timer" @click="start">开始游戏</button>
			<button block v-show="timer" @click="reStart">重新开始</button>
		</view>
	</view>
</template>
<script>
	import worm from "../../static/images/worm.png";
	import snakeBody from "../../static/images/snake_body.png";
	import snakeHead from "../../static/images/snake_head.png";
	import snakeTail from "../../static/images/snake_tail.png";
	export default {
		data() {
			return {
				blocks: [],
				worms: [6],
				snakes: [0, 1, 2, 3],
				direction: "right",
				timer: null,
				speed: 2,
			};
		},
		onLoad() {
			this.initGame();
		},
		methods: {
			initGame() {
				this.blocks = new Array(100).fill(0);
				this.worms = [6];
				this.snakes = [0, 1, 2, 3];
				this.direction = "right";
				this.timer = null;
				this.paint();
			},
			start() {
				this.timer = setInterval(() => {
					this.toWards(this.direction);
				}, 1000 / this.speed);
			},
			reStart() {
				if (this.timer) {
					clearInterval(this.timer);
				}
				this.initGame();
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
						bg = `url(${worm})`;
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
			toWards(direction) {
				if (this.snakes.length === 100) {
					alert("你赢了！");
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
					alert("游戏结束");
					clearInterval(this.timer);
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
				let blocks = Array.from({
					length: 100
				}, (v, k) => k);
				let restBlocks = blocks.filter(x => this.snakes.indexOf(x) < 0);
				let worm = restBlocks[Math.floor(Math.random() * restBlocks.length)];
				return worm;
			},
			bindUp() {
				if (this.direction === "down") return;
				this.direction = "up";
			},
			bindDown() {
				if (this.direction === "up") return;
				this.direction = "down";
			},
			bindLeft() {
				if (this.direction === "right") return;
				this.direction = "left";
			},
			bindRight() {
				if (this.direction === "left") return;
				this.direction = "right";
			},
			checkGame(direction, next) {
				let gameover = false;
				let isSnake = this.snakes.indexOf(next) > -1;
				if (isSnake) {
					gameover = true;
				}
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
		height: calc(100vh - 90upx);
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	.play {
		margin-bottom: 40upx;
	}

	.game-field {
		display: flex;
		flex-wrap: wrap;
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
		outline: 2upx solid;
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
</style>
