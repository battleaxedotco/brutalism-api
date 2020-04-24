<template>
	<Wrapper style="height: 100%; width: 100%;">
		<Alert
			debug
			:state="hasAlert"
			text="Displayed from the top!"
			dismissable
			@close="hasAlert = false"
		/>
		<Alert :state="slotAlert" @close="slotAlert = false">
			<Button-Group multiselect :active="[0, 1]">
				<Button primary icon="format-bold" />
				<Button primary icon="format-color-text" />
				<Button primary icon="format-color-highlight" />
				<Button primary icon="format-paint" />
				<Button primary icon="format-size" />
				<Button primary icon="format-strikethrough" />
			</Button-Group>
		</Alert>
		<Alert
			text="Bottom"
			bottom
			dismissable
			:state="bottomAlert"
			@close="bottomAlert = false"
		/>
		<Alert
			text="I'm on a timer"
			:timeout="1000"
			:state="timedAlert"
			@close="timedAlert = false"
		/>
		<!-- <Alert
			:state="hasAlert"
			text="Hello world"
			dismissable
			:timeout="200"
			@close="hasAlert = false"
		/> -->
		<div class="centered">
			<Row>
				<Button label="Toggle alert" @click="hasAlert = !hasAlert" />
				<Button label="Slotted alert" @click="slotAlert = !slotAlert" />
				<Button
					label="Bottom alert"
					@click="bottomAlert = !bottomAlert"
				/>
				<Button label="Timed alert" @click="timedAlert = !timedAlert" />
			</Row>
		</div>
	</Wrapper>
</template>

<script>
export default {
	data: () => ({
		hasAlert: false,
		slotAlert: false,
		bottomAlert: false,
		timedAlert: false
	}),
	methods: {}
};
</script>

<style>
.centered {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
}
</style>
