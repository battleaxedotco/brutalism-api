<template>
	<Wrapper>
		<Divider color="red" />
		<Divider thickness="5px" />
		<Divider padding="5px" />
	</Wrapper>
</template>

<script>
export default {
	mounted() {
		console.log('Hello?')
	},
	methods: {
		testClick(value) {
			console.log(value)
		}
	}
};
</script>

<style>
.text-test {
	display: flex;
	flex-direction: column;
}
.text-test-item {
	padding: 3px 10px;
	font-size: 12px;
}
</style>
