<template>
	<Wrapper>
		<Fold label="Button" :open="true">
			<Fold label="Styles">
				<!-- 
					Row is used here to give buttons a natural flexbox and wrapping layout
					Without it, buttons fill available space unless block prop is set
				-->
				<Row>
					<Button label="Normal" />
					<Button primary>Primary</Button>
					<Button flat label="Flat" />
					<Button filled label="Filled" />
					<Button disabled>Disabled</Button>
					<Button>
						<svg fill="none" viewBox="0 0 24 24">
							<path
								d="M2 7h5v2H2zM2 11h2v2H2zM12 11h10v2H12zM5 11h2v2H5zM2 15h5v2H2zM12 15h2v2h-2zM12 7h3v2h-3zM16 7h2v2h-2zM8 3h2v18H8z"
							/>
							<path d="M7 3V2h4v1L9.667 5H8.333L7 3z" />
							<path
								fill-rule="evenodd"
								d="M20 16h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"
								clip-rule="evenodd"
							/>
						</svg>
						<div>With Slot content</div>
					</Button>
					<Button label="Tall" tall />
					<Button toolbar>
						<svg fill="none" viewBox="0 0 24 24">
							<path
								d="M2 7h5v2H2zM2 11h2v2H2zM12 11h10v2H12zM5 11h2v2H5zM2 15h5v2H2zM12 15h2v2h-2zM12 7h3v2h-3zM16 7h2v2h-2zM8 3h2v18H8z"
							/>
							<path d="M7 3V2h4v1L9.667 5H8.333L7 3z" />
							<path
								fill-rule="evenodd"
								d="M20 16h-2v2h-2v2h2v2h2v-2h2v-2h-2v-2z"
								clip-rule="evenodd"
							/>
						</svg>
					</Button>
				</Row>
				<Button block label="Block button (fill horizontal space)"/>
			</Fold>

			<Fold label="Props">
				<Row>
					<Button label="Button label" />
					<Button bg="#389672">bg="#389672"</Button>
					<Button color="#46a0f2" label='color="#46a0f2"' />
					<Button label='icon="mdi-account"' icon="mdi-account" />
					<Button label='prefix-icon="mdi-account"' prefix-icon="mdi-account" />
					<Button icon="mdi-settings" icon-size="10px" label='icon-size="10px"' />
					<Button tooltip="I'm a tooltip">tooltip="I'm a tooltip"</Button>
					<Button uppercase label="uppercase" />
					<Button goto="https://battleaxe.co" label='goto="https://battleaxe.co"'/>
					<!-- <Button to="/tooltips" label='to="/tooltips"'/> -->
					<Button margin="10px">margin="10px"</Button>
					<Button height="30px">height="30px"</Button>
					<Button block left>block left</Button>
					<Button block right>block right</Button>				
				</Row>
			</Fold>

			<Fold label="Events">
				<Button @click="testClick" label='@click="testClick"' />
			</Fold>
		</Fold>

		<Fold label="Button-Group" :open="true">
			<Fold label="Styles">
				<Button-Group label="default">
					<Button icon="github-circle" />
					<Button icon="slack" />
					<Button icon="twitter" />
					<Button icon="facebook" />
				</Button-Group>
				<Button-Group grid label="grid">
					<Button block>block default</Button>
					<Button block left>block left</Button>
					<Button block right>block right</Button>
				</Button-Group>
				<Button-Group exclusive label="exclusive" :active="3">
					<Button v-for="index in 7" :key="index" :icon="`brightness-${index}`" />
				</Button-Group>
				<Button-Group multiselect :active="[0, 1]" label="multiselect">
					<Button primary icon="format-bold" />
					<Button primary icon="format-color-text" />
					<Button primary icon="format-color-highlight" />
					<Button primary icon="format-paint" />
					<Button primary icon="format-size" />
					<Button primary icon="format-strikethrough" />
				</Button-Group>
			</Fold>

			<Fold label="Props">
				<div style="display: flex; flex-wrap: nowrap">
					<Button-Group label='left (default)' left width="33vw">
						<Button icon="github-circle" />
						<Button icon="slack" />
					</Button-Group>
					<Button-Group label='center' center grid width="33vw">
						<Button icon="github-circle" />
						<Button icon="slack" />
					</Button-Group>
					<Button-Group label='right' right width="33vw">
						<Button icon="github-circle" />
						<Button icon="slack" />
					</Button-Group>
				</div>
				<Button-Group label='grid template="1fr 4fr"' grid template="1fr 4fr">
					<Button icon="github-circle" />
					<Button icon="slack" />
				</Button-Group>
				<Button-Group label='grid gap="50px"' grid gap="50px">
					<Button icon="github-circle" />
					<Button icon="slack" />
				</Button-Group>
				<Button-Group label='column' grid column width="60px">
					<Button icon="github-circle" />
					<Button icon="slack" />
					<Button icon="facebook" />
				</Button-Group>
				<Button-Group label='exclusive :active="1"' exclusive :active="[1]" >
					<Button icon="vector-point" />
					<Button icon="vector-line" />
					<Button icon="vector-rectangle" />
					<Button icon="vector-circle" />
					<Button icon="vector-triangle" />
					<Button icon="vector-polygon" />
				</Button-Group>
				<Button-Group label='multiselect :active="[0, 1]"' multiselect :active="[0, 1]" >
					<Button icon="chess-king" />
					<Button icon="chess-queen" />
					<Button icon="chess-bishop" />
					<Button icon="chess-knight" />
					<Button icon="chess-rook" />
					<Button icon="chess-pawn" />
				</Button-Group>
			</Fold>

			<Fold label="Events">
				<Button-Group label='exclusive @update' exclusive :active="tool" @update="reportActive">
					<Button icon="vector-point"/>
					<Button icon="vector-line"/>
					<Button icon="vector-rectangle"/>
					<Button icon="vector-circle"/>
					<Button icon="vector-triangle"/>
					<Button icon="vector-polygon"/>
				</Button-Group>
				<Button-Group label='multiselect @update' multiselect :active="[0, 1]" @update="reportActive">
					<Button icon="chess-king" />
					<Button icon="chess-queen" />
					<Button icon="chess-bishop" />
					<Button icon="chess-knight" />
					<Button icon="chess-rook" />
					<Button icon="chess-pawn" />
				</Button-Group>
				<Button-Group label='exclusive @update' exclusive :active="tool" @update="val => tool = val">
					<Button icon="vector-point" :color="`${tool == 0 ? 'color-selection' : 'color-icon'}`" />
					<Button icon="vector-line" :color="`${tool == 1 ? 'color-selection' : 'color-icon'}`" />
					<Button icon="vector-rectangle" :color="`${tool == 2 ? 'color-selection' : 'color-icon'}`" />
					<Button icon="vector-circle" :color="`${tool == 3 ? 'color-selection' : 'color-icon'}`" />
					<Button icon="vector-triangle" :color="`${tool == 4 ? 'color-selection' : 'color-icon'}`" />
					<Button icon="vector-polygon" :color="`${tool == 5 ? 'color-selection' : 'color-icon'}`" />
				</Button-Group>
				<Button-Group label="default should use @click or :goto on children">
					<Button icon="github-circle" goto="https://www.github.com" />
					<Button icon="slack" goto="https://www.slack.com" />
					<Button icon="twitter" goto="https://www.twitter.com" />
					<Button icon="facebook" goto="https://www.facebook.com" />
				</Button-Group>
			</Fold>
		</Fold>

		<Fold label="Tooltips" :open="true">
			<Fold label="Positioning">
				<Button-Group grid>
					<Button block tooltip="Default">Default tooltip</Button>
					<Button block no-bold tooltip="Default">No bold tooltip</Button>
					<Button block tooltip="Only opacity transition" no-slide
						>Adding no-slide prop</Button
					>
				</Button-Group>
				<Button-Group grid>
					<Button block left tooltip="Aligned to left"
						>Left prop on button also aligns tooltip</Button
					>
					<Button block right tooltip="Adding the top prop" top
						>Right and top props</Button
					>
				</Button-Group>
				<Button-Group>
					<Button
						v-for="index in 10"
						tooltip="Testing long text on centered"
						:key="index"
						:icon="index < 10 ? `battery-${index}0` : 'battery'"
					/>
				</Button-Group>
			</Fold>
			<Fold label="Timing">
				<Row>
					<Button-Group grid>
						<Button
							block
							left
							tooltip="cubic-bezier(0.48, 0.04, 0.52, 0.96)"
							timing="var(--quad)"
							>timing="var(--quad)"</Button
						>
						<Button
							block
							tooltip="cubic-bezier(0.76, 0, 0.24, 1)"
							timing="var(--quart)"
							>timing="var(--quart)"</Button
						>
						<Button
							block
							right
							tooltip="cubic-bezier(0.84, 0, 0.16, 1)"
							timing="var(--quint)"
							>timing="var(--quint)"</Button
						>
					</Button-Group>
					<Button-Group grid>
						<Button
							block
							left
							tooltip="I'm slow to animate"
							duration="1000ms"
							>duration="1000ms"</Button
						>
						<Button block tooltip="I'm slow to respond" delay="1000ms"
							>delay="1000ms"</Button
						>
					</Button-Group>
				</Row>
			</Fold>
		</Fold>
	</Wrapper>
</template>

<script>
export default {
	data: () => ({
		brightness: 0,
		tool: 0,
	}),
	methods: {
		testClick() {
			console.log("Clicked button!");
		},
		reportActive(data) {
			console.log(data)
		}
	}
};
</script>

<style></style>
