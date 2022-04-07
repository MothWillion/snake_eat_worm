<template>
	<view class="content">
		<view class="game-field">
			<view class="block" :style="`background-color: ${bgColor(x)};`" v-for="(x, i) in blocks" :key="i">{{x}}
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
		<button block v-show="!timer" @click="go">开始游戏</button>
		<button block v-show="timer" @click="reStart">重新开始</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				blocks: [],
				worms: [6, 29, 82],
				snakes: [0, 1, 2, 3],
				direction: 'right',
				timer: null
			}
		},
		onLoad() {
			this.initGame();
		},
		methods: {
			initGame() {
				this.blocks = new Array(100).fill(0);
				this.worms = [6, 29, 82];
				this.snakes = [0, 1, 2, 3];
				this.direction = 'right';
				this.timer = null;
				this.paint();
			},
			go() {
				this.timer = setInterval(() => {
					this.toWards(this.direction);
				}, 1000)
			},
			reStart() {
				if (this.timer) {
					clearInterval(this.timer);
				}
				this.initGame();
				this.go();
			},
			paint() {
				this.worms.forEach(x => {
					this.blocks[x] = 1;
				});
				this.snakes.forEach(x => {
					this.blocks[x] = 2;
				});
				this.$forceUpdate();
			},
			bgColor(type) {
				let bgcolor = ''
				switch (type) {
					case 0:
						bgcolor = '#fff'
						break;
					case 1:
						bgcolor = '#ff0000';
						break;
					case 2:
						bgcolor = '#00ff7f'
						break;
				}
				return bgcolor;
			},
			toWards(direction) {
				if (this.worms.length === 0) {
					alert('你赢了！');
					clearInterval(this.timer);
					return;
				}
				let head = this.snakes[this.snakes.length - 1];
				let tail = this.snakes[0];
				let next;
				switch (direction) {
					case 'up':
						next = head - 10;
						break;
					case 'down':
						next = head + 10;
						break;
					case 'left':
						next = head - 1;
						break;
					case 'right':
						next = head + 1;
						break;
				}
				let gameover = this.checkGame(direction, next);
				if (gameover) {
					alert('游戏结束');
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
						this.worms = this.worms.filter(x => x !== next);
					}
					this.blocks[tail] = 0;
					this.paint();
				}
			},
			bindUp() {
				this.direction = 'up';
			},
			bindDown() {
				this.direction = 'down';
			},
			bindLeft() {
				this.direction = 'left';
			},
			bindRight() {
				this.direction = 'right';
			},
			checkGame(direction, next) {
				let gameover = false;
				switch (direction) {
					case 'up':
						if (next < 0) {
							gameover = true;
						}
						break;
					case 'down':
						if (next >= 100) {
							gameover = true;
						}
						break;
					case 'left':
						if (next % 10 === 9) {
							gameover = true;
						}
						break;
					case 'right':
						if (next % 10 === 0) {
							gameover = true;
						}
						break;
				}
				return gameover;
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
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
