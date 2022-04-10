<template>
	<view class="content">
		<view class="game-field">
			<view class="block" :class="x === 2 ? computedWorm(i) : '' " :style="`background: ${bgColor(x)};transform: ${computedRotate(x)}`" v-for="(x, i) in blocks" :key="i">
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
	import plotImg from '../../static/images/地块.png';
	import wormImg from '../../static/images/虫子_idle_1.png';
	import wormBodyImg from '../../static/images/蛇身.png';
	export default {
		data() {
			return {
				blocks: [],
				worms: [6, 29, 82],
				snakes: [0, 1, 2, 3],
				direction: 'right',
				timer: null,
				rotate:90
			}
		},
		onLoad() {
			this.initGame();
		},
		methods: {
			computedRotate(index) {
				console.log(index)
				if(index === 2) {
					return `rotate(${this.rotate}deg)`
				}
			},
			initGame() {
				this.blocks = new Array(100).fill(0);
				this.worms = [6, 29, 82];
				this.snakes = [0, 1,2,3];
				this.direction = this.direction || 'right';
				this.timer = null;
				this.paint();
			},
			go() {
				this.timer = setInterval(() => {
					this.toWards(this.direction);
				}, 1000)
			},
			computedWorm(index) {
				// console.log(index,this.snakes,this.snakes[this.snakes.length - 1])
				if(this.direction === 'left') {
					// if(this.snakes[this.snakes.length - 1] >= Math.min(...this.snakes)) {
					// 	switch (index){
					// 		case Math.max(...this.snakes):
					// 			return 'wormTail'
					// 			break;
					// 		case Math.min(...this.snakes):
					// 			return 'wormHead'
					// 			break;
					// 	}
					// } else {
					// }
					switch (index){
						case Math.max(...this.snakes):
							return 'wormHead'
							break;
						case Math.min(...this.snakes):
							return 'wormTail'
							break;
					}
				} else {
					switch (index){
						case Math.min(...this.snakes):
							return 'wormTail'
							break;
						case Math.max(...this.snakes):
							return 'wormHead'
							break;
					}
				}
				
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
					case 0: // 地板
						bgcolor = `url(${plotImg})`
						break;
					case 1: // 虫子
						bgcolor = `url(${wormImg})`
						break;
					case 2: // 蛇
						bgcolor = `url(${wormBodyImg})`
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
				if(this.direction === 'down') return;
				this.timer && (this.direction = 'up');
				this.rotate = 0;
			},
			bindDown() {
				if(this.direction === 'up') return;
				this.timer && (this.direction = 'down');
				this.rotate = 180;
			},
			bindLeft() {
				if(this.direction === 'right') return;
				this.timer && (this.direction = 'left');
				this.rotate = 270;
			},
			bindRight() {
				if(this.direction === 'left') return;
				this.timer && (this.direction = 'right');
				this.rotate = 90;
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
		background-position: center !important;
		background-size: 100% !important;
		outline: 1px solid;
	}
	.wormTail {
		background: url('../../static/images/蛇尾.png') !important;
		background-position: center !important;
		background-size: 100% !important;
	}
	.wormHead{
		background: url('../../static/images/蛇头.png') !important;
		background-position: center !important;
		background-size: 100% !important;
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
