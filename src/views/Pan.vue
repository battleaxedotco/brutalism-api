<template>
	<Wrapper width="100%" height="100%">
		<div class="grid-wrapper">
			<div class="pan-tester">
				<div>
					<span class="pan-title">Input horizontal drag</span>
					<div class="pan-wrapper" v-pan="panHandle1">
						<Icon name="chevron-left" />
						<div class="pan-text">{{ panNum }}</div>
						<Icon name="chevron-right" />
					</div>
				</div>
			</div>
			<div class="pan-tester">
				<div>
					<span class="pan-title">Rotation control</span>
					<div
						class="pan-wrapper"
						style="margin: 10px auto;"
						v-pan="panHandle2"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 22 22"
							class="rotation-control"
							:style="`transform: rotate(${delta}deg)`"
						>
							<circle class="st0" cx="11" cy="11" r="10" />
							<line class="st0" x1="11" y1="11" x2="11" y2="1" />
						</svg>
					</div>
					<span
						class="pan-title"
						style="width: 100%; display: flex; justify-content: center; align-items: baseline;"
					>
						<span style="font-size: 20px">{{ revolutions }}</span>
						<span><strong>x</strong></span>
						<span style="font-size: 20px">{{ delta }}</span>
						<span style="font-size: 20px">°</span>
					</span>
				</div>
			</div>
			<div class="pan-tester output" v-pan="panHandle3">
				<span class="pan-title">{{
					pan3 ? "Output" : "Click and drag here"
				}}</span>
				<div class="pan-wrapper" style="margin: 10px auto;">
					<code
						ref="pre"
						class="pre-block"
						style="display: flex; justify-content: flex-start; width: 300px;"
					>
						{{ pan3 }}
					</code>
				</div>
			</div>
		</div>
	</Wrapper>
</template>

<script>
export default {
	data: () => ({
		panNum: 0,
		originNum: 0,
		panRotator: 0,
		pan3: null
	}),
	mounted() {
		this.panNum = this.originNum;
	},
	computed: {
		delta() {
			return this.panRotator % 360;
		},
		revolutions() {
			return Math.floor(this.panRotator / 360);
		}
	},
	methods: {
		getKeys(importantKeys, evt) {
			let keys = Object.keys(evt).filter(item =>
				importantKeys.includes(item)
			);
			let clone = {};
			keys.forEach(key => {
				clone[key] = evt[key];
			});
			return clone;
		},
		panHandle1(evt) {
			let result = this.getKeys(["deltaX", "direction", "distance"], evt);
			this.panNum = result.deltaX + this.originNum;
		},
		panHandle2(evt) {
			this.panRotator = evt.deltaX * 2;
		},
		panHandle3(evt) {
			let result = this.getKeys(
				[
					"deltaX",
					"center",
					"timestamp",
					"angle",
					"scale",
					"rotation",
					"deltaY",
					"direction",
					"distance"
				],
				evt
			);
			this.pan3 = result;
		}
	}
};
</script>

<style>
.pan-tester {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	user-select: none;
}

.pan-tester span {
	cursor: default;
}

.pre-block {
	white-space: pre;
}

.rotation-result {
	display: flex;
	justify-content: flex-start;
	align-items: baseline;
	width: 100px;
	/* border: 2px solid red; */
}

.pan-tester svg {
	width: 30px;
}

.rotation-control {
	fill: none;
	stroke: var(--color-default);
	stroke-width: 1.5;
	stroke-miterlimit: 10;
}

[class*="title"] {
	text-transform: uppercase;
	letter-spacing: 0.5ch;
	text-align: center;
}

.pan-wrapper {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: ew-resize;
	letter-spacing: 0.5ch;
}

.pan-text {
	width: 60px;
	text-align: center;
	border-radius: 4px;
	margin: 10px;
	font-size: 20px;
}

.pan-tester:first-of-type {
	background: rgba(255, 60, 60, 0.1);
}
.pan-tester:nth-child(2) {
	background: rgba(60, 255, 60, 0.1);
}
.pan-tester:last-of-type {
	background: rgba(60, 60, 255, 0.1);
	position: relative;
}

.output .pan-title {
	position: absolute;
	top: 20px;
}

.grid-wrapper {
	display: grid;
	grid-template-rows: repeat(3, 1fr);
	width: 100%;
	height: 100%;
}
</style>
