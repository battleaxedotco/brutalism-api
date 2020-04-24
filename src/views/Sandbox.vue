<template>
	<Wrapper style="height: 100%; width: 100%; display: block;">
		<Fold label="Local fonts">
			<div class="text-test">
				<span class="text-test-item" style="font-weight: 300;">300</span>
				<span class="text-test-item" style="font-weight: 300; font-style: italic;">300 italic</span>
				<span class="text-test-item" style="font-weight: 400;">400</span>
				<span class="text-test-item" style="font-weight: 400; font-style: italic;">400 italic</span>
				<span class="text-test-item" style="font-weight: 600;">600</span>
				<span class="text-test-item" style="font-weight: 600; font-style: italic;">600 italic</span>
				<span class="text-test-item" style="font-weight: 700;">700</span>
				<span class="text-test-item" style="font-weight: 700; font-style: italic;">700 italic</span>
				<span class="text-test-item" style="font-weight: 800;">800</span>
				<span class="text-test-item" style="font-weight: 800; font-style: italic;">800 italic</span>
			</div>
		</Fold>
		<Fold label="Inputs" :open="true">
			<Input value="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead." label="Truncated" truncate />
			<Input value="value" label="with auto-select prop" auto-select />
			<Input value="I show up in console!" label="With button click event" append-outer-icon="find-replace" @append-outer-click="testClick" />
		</Fold>
	</Wrapper>
</template>

<script>
export default {
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
