<template>
	<Wrapper>
		<Fold label="Toggle" :open="checkFoldParent('toggle')">
			<Fold label="Styles" :open="getFoldData('toggle', 'styles').open">
				<Toggle label="Checkbox (default)" :state="true" checkbox />
				<Toggle label="Radio" :state="true" radio />
				<Toggle label="Switch" :state="false" size="18px" switch />
				<Toggle
					label="Custom"
					:state="false"
					on-icon="eye"
					off-icon="eye-off"
				/>
				<Toggle @update="val => slotState = val" style="padding-top: 6px">
					<div v-if="slotState">Click me! Slot content if true</div>
					<div v-else>Click me! Slot content if false</div>
				</Toggle>
			</Fold>
			<Fold label="Props" :open="getFoldData('toggle', 'props').open">
				<Row>
					<Toggle on-icon="lock" off-icon="lock-open-variant" />
					<Toggle on-icon="bell" off-icon="bell-off" />
					<Toggle on-icon="account" off-icon="account-off" />
					<Toggle on-icon="video-check" off-icon="video-minus" />
				</Row>
				<Toggle :label='dynamicState' :state="realState" @update="val => realState = val"/>
				<Toggle label='color="#46a0f2"' color="#46a0f2" />
				<Toggle label="disabled" :state="true" disabled />
				<Toggle label='on-icon="alarm" off-icon="alarm-off"' on-icon="alarm" off-icon="alarm-off"/>
				<Toggle label='size="32px"' size="32px" />
			</Fold>
			<Fold label="Events" :open="getFoldData('toggle', 'events').open">
				<Toggle label="@click" @click="showClick"/>
				<Toggle label='@mouseEnter/@mouseExit' @mouseenter="showEnter" @mouseleave="showExit" />
				<Toggle label='@update' @update="showState" />
			</Fold>
		</Fold>

		<Fold label="Dropdown" :open="checkFoldParent('dropdown')">
			<Fold label="Styles" :open="getFoldData('dropdown', 'styles').open">
				<Dropdown label="Default style" :items="dropdown1" :active="0" />
			</Fold>
			<Fold label="Props" :open="getFoldData('dropdown', 'props').open">
				<Dropdown label='label-to-left' :items="dropdown2" :active="1" label-to-left />
				<Dropdown label='label-to-right' :items="dropdown2" :active="2" label-to-right />
				<Dropdown label='active="ILST" (targeting item.value)' :items="dropdown2" active="ILST" />
				<Dropdown label='active="Item 3" (targeting item as string value)' :items="dropdown1" active="Item 3" />
				<Dropdown label=':active="2" (targeting index)' :items="dropdown2" :active="2" />
				<div style="display: flex; flex-wrap: nowrap; justify-content: flex-start; width: 100%">
					<Dropdown label='width="200px"' :items="dropdown2" active="Illustrator" width="200px" />
					<Dropdown label='width="fit-content"' :items="dropdown1" active="Item 3" width="fit-content" />
				</div>
			</Fold>
			<Fold label="Events" :open="getFoldData('dropdown', 'events').open">
				<div style="display: flex; flex-wrap: nowrap; justify-content: flex-start; width: 100%">
					<Dropdown label='@update' :items="dropdown1" :active="0" @update="showUpdate" />
					<Dropdown label='@focus/@blur' :items="dropdown1" :active="1" @focus="showFocus" @blur="showBlur" />
				</div>
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
		realState: false,
		slotState: false,
		dropdown1: [
			'Item 1',
			'Item 2',
			'Item 3',
			'Item 4',
			'Item 5',
			'Item 6',
		],
		dropdown2: [
			{
				label: 'Illustrator',
				value: 'ILST'
			},
			{
				label: 'After Effects',
				value: 'AEFT'
			},
			{
				label: 'Photoshop',
				value: 'PHXS'
			},
			{
				label: 'Premiere Pro',
				value: 'PPRO'
			},
			{
				label: 'Audition',
				value: 'AUDT'
			},
			{
				label: 'InDesign',
				value: 'IDSN'
			},
			{
				label: 'Animate',
				value: 'FLPR'
			},
		]
	}),
	computed: {
		dynamicState() {
			return `:state="${this.realState}"`
		}
	},
	methods: {
		showClick() {
			console.log('Toggle was clicked')
		},
		showState(val) {
			console.log('State of toggle is:', val);
		},
		showEnter() {
			console.log('Mouse enter!');
		},
		showExit() {
			console.log('Mouse exit!');
		},
		showUpdate(value) {
			console.log('Active value is currently:', value)
		},
		showFocus() {
			console.log('Dropdown is focused!')
		},
		showBlur() {
			console.log('Dropdown is blurred!')
		}
	}
};
</script>

<style></style>
