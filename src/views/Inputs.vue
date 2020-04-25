<template>
	<Wrapper>
		<Fold label="Input-Scroll (numbers)" :open="true">
			<Fold label="Styles" :open="getFoldData('input-scroll', 'styles').open">
				<Input-Scroll label="default" :value="100" />
				<Input-Scroll label="flat" flat :value="100" />
				<Input-Scroll label="filled" filled :value="100" />
				<Input-Scroll
					label="underline-size"
					underline-size="2px"
					:value="100"
				/>
				<Input-Scroll
					label="left"
					flat
					underline-size="3px"
					left
					:value="100"
				/>
			</Fold>
			<Fold label="Props" :open="getFoldData('input-scroll', 'props').open">
				<Input-Scroll label="default" />
				<Input-Scroll
					label=':min="0" :max="200"'
					:value="100"
					:min="0"
					:max="200"
				/>
				<Input-Scroll
					label=':modifier=".125"'
					:value="205"
					:modifier="0.125"
				/>
				<Input-Scroll
					label=':modifier="5"'
					:value="5000"
					:modifier="5"
				/>
				<Input-Scroll
					label=':steps="[0.25, 5, 25]"'
					:steps="[0.25, 5, 25]"
					:value="50"
					:toFixed="2"
				/>
				<Input-Scroll label=':step="2"' :step="2" />
				<Input-Scroll
					label='color="#ff0000"'
					:value="800"
					color="red"
				/>
				<Input-Scroll
					label=':toFixed="3"'
					:value="100.125"
					:toFixed="3"
					:modifier="0.125"
				/>
				<Input-Scroll
					label='suffix="px"'
					suffix="px"
					:min="0"
					:max="100"
				/>
				<Input-Scroll
					label=':reset-value="100"'
					:value="446"
					:reset-value="100"
				/>
				<Input-Scroll label="lazy" lazy :value="29.97" suffix="fps" />
				<Input-Scroll label="disabled" :value="20" disabled />
			</Fold>

			<Fold label="Events" :open="getFoldData('input-scroll', 'events').open">
				<Input-Scroll
					label="Change/Update"
					@change="changeVal"
					@update="updateVal"
					:min="-100"
					:max="100"
				/>
				<Input-Scroll
					label="Focus/Blur"
					@focus="message('Focus!')"
					@blur="message('Blur!')"
				/>
				<Input-Scroll label="debug" debug />
			</Fold>
		</Fold>
		<Fold label="Input (single line text)" :open="true">
			<Fold label="Styles" :open="getFoldData('input', 'styles').open">
				<Input value="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead." label="Default" truncate />
				<Input value="value" flat label="Flat" auto-select />
				<Input value="value" filled label="Filled" />
			</Fold>
			<Fold label="Props">
				<Input
					label='placeholder="Display if no value"'
					placeholder="Display if no value"
				/>
				<Input value="This text is automatically selected on focus" label="auto-select" auto-select />
				<Input value="This text is always uppercase" label="uppercase" uppercase />
				<Input placeholder="disabled" disabled />
				<Input
					placeholder='underline-size="2px" left'
					underline-size="2px"
					flat
					left
				/>
				<Input
					filled
					margin="0px 0px 4px 0px"
					prepend-icon="magnify"
					placeholder='prepend-icon="magnify"'
				/>
				<Input
					filled
					append-icon="find-replace"
					placeholder='prepend-icon="find-replace"'
					margin="0px"
				/>
				<Input
					filled
					margin="0px"
					prepend-outer-icon="magnify"
					placeholder='prepend-outer-icon="magnify"'
				/>
				<Input
					filled
					margin="0px"
					append-outer-icon="find-replace"
					placeholder='append-outer-icon="find-replace"'
				/>
			</Fold>

			<Fold label="Events" :open="getFoldData('input', 'events').open">
				<Input value="@change" @change="message" />
				<Input value="@update" @update="message" />
				<Input value="@submit" @submit="message" />
				<Input
					placeholder="@focus/blur"
					@focus="message('Focused!')"
					@blur="message('Blur!')"
				/>
				<Input value="@append-outer-click content" append-outer-icon="find-replace" @append-outer-click="message" />
			</Fold>
		</Fold>
		<Fold label="TextArea" :open="true">
			<Fold label="Styles" :open="getFoldData('textarea', 'styles').open">
				<TextArea
					value="Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris."
					label="default"
				/>
				<TextArea
					value="Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus."
					prepend-icon="tools"
					flat
					label="flat"
				/>
				<TextArea
					filled
					:rows="5"
					prepend-icon="magnify"
					value="The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."
				/>
			</Fold>
			<Fold label="Props" :open="getFoldData('textarea', 'props').open">
				<TextArea
					label='placeholder="Display if no value"'
					placeholder="Display if no value"
				/>
				<TextArea placeholder="disabled" disabled />
				<TextArea
					placeholder='underline-size="2px" left'
					underline-size="2px"
					flat
					left
				/>
				<TextArea
					filled
					prepend-icon="magnify"
					placeholder='prepend-icon="magnify"'
				/>
				<TextArea placeholder=':rows="5"' :rows="5" />
			</Fold>
			<Fold label="Events" :open="getFoldData('textarea', 'events').open">
				<TextArea value="@change" @change="message" />
				<TextArea value="@update" @update="message" />
				<TextArea value="@submit" @submit="message" />
				<TextArea
					placeholder="@focus/blur"
					@focus="message('Focused!')"
					@blur="message('Blur!')"
				/>
			</Fold>
		</Fold>
	</Wrapper>
</template>

<script>
// Adding browser route matching
import routeMatcher from '../mixins/routeMatching'

export default {
	mixins: [routeMatcher],
	data: () => ({
		fakeVal: 10
	}),
	methods: {
		changeVal(val) {
			console.log(`Changed: ${val}`);
		},
		updateVal(val) {
			console.log(`===> Updated: ${val}`);
		},
		message(msg) {
			console.log(msg);
		}
	}
};
</script>

<style></style>
