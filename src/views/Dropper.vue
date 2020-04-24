<template>
	<Wrapper width="100%" height="100%">
		

		<Dropzone pure-svg @read="testDrop" overlay />
		<Button
			v-if="!value"
			height="90vh"
			width="100vw"
			label="Drop Illustrator objects here"
		/>
		<div v-else class="preview">{{value}}</div>
	</Wrapper>
</template>

<script>

export default {
	data: () => ({
		value: null,
		checkPan: true
	}),
	methods: {
		testDrop(evt) {
			// this.value = pretty(evt, { ocd: true });
			console.log(evt)
		}
	}
};
</script>

<style>
.preview {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}

.preview > svg {
	width: 100% !important;
	height: 100% !important;
}

#preview {
	width: 60px;
	height: 60px;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid var(--color-btn-border);
}

.code {
	white-space: pre-wrap;
	font-family: monospace;
	margin-top: 30px;
	width: 100%;
	font-size: 10px;
}
</style>
