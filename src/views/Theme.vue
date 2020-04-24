<template>
	<div class="centered">
		<Menus debug refresh :context="contextMenu.default" />
		<div class="centered" style="height: 60px;">
			<span style="font-size: 30px; text-transform: uppercase;">
				{{ themeName }}
			</span>
			<span
				class="centered"
				style="font-size: 30px; text-transform: uppercase; width: 100%;"
				>{{ panelBG }}</span
			>
			<span
				class="centered"
				style="font-size: 30px; text-transform: uppercase; width: 100%;"
				>{{ changeCount }}</span
			>
		</div>
	</div>
</template>

<script>
import starlette from "../brutalism/starlette";
import spy from "cep-spy";

export default {
	data() {
		return {
			activeTheme: null,
			changeCount: 0,
			themeName: null,
			panelBG: null,
			contextMenu: {
				default: [
					{
						label: "Switch theme",
						enabled: true,
						items: ["hello", "goodbye"],
						callback: this.switchTheme
					}
				]
			},
			themes: [
				{
					name: "darkest",
					values: ["#1f1f1f", "#1e1e1e", "#1a1a1a"]
				},
				{
					name: "dark",
					values: ["#323232", "#2e2e2e"]
				},
				{
					name: "light",
					values: ["#f5f5f5"]
				},
				{
					name: "lightest",
					values: ["#ffffff"]
				}
			]
		};
	},
	computed: {
		active: {
			get() {
				return this.getThemeName();
			},
			set(val) {
				this.activeTheme = val;
			}
		}
	},
	mounted() {
		window.__adobe_cep__.addEventListener(
			"com.adobe.csxs.events.ThemeColorChanged",
			this.appThemeChanged
		);

		this.panelBG = this.getPanelBG();
		this.themeName = this.getThemeName();
	},
	watch: {
		activeTheme(sibling) {
			console.log(`Switching to ${sibling}`);
			if (spy.appName !== "FLPR") return null;
			// Manually initialize starlette as that sibling theme, rewriting all CSS values
			starlette.initAs("FLPR", sibling);
			// Save the sibling to localStorage so the panel remembers which theme it should use
			window.localStorage.setItem("activeTheme", sibling);
		}
	},
	methods: {
		appThemeChanged(evt) {
			console.log(evt);
			this.themeName = this.getThemeName();
			this.changeCount = this.changeCount + 1;
			this.compareBG();
		},
		getPanelBG() {
			return window
				.getComputedStyle(document.documentElement)
				.getPropertyValue("--color-bg");
		},
		rgbToHex(val) {
			return `#${val
				.map(c => {
					c = c <= 255 ? Math.abs(Math.floor(c)).toString(16) : 0;
					return c.length < 2 ? `0${c}` : c;
				})
				.join("")}`;
		},
		compareBG() {
			const alpha = JSON.parse(window.__adobe_cep__.getHostEnvironment())
				.appSkinInfo.panelBackgroundColor.color;

			let target = [alpha.red, alpha.green, alpha.blue].map(col => {
				return col - 35;
			});

			const isDark = alpha.red < 200;

			if (isDark && /dark/.test(this.themeName)) {
				console.log("Dark switch");

				this.switchTheme();
			} else if (!isDark && /light/.test(this.themeName)) {
				console.log("Light switch");
				this.switchTheme();
			} else {
				console.log("Normal switch");
				this.getThemeName();
			}
		},
		getThemeName() {
			let currentBG = this.getPanelBG();

			return this.themes.find(color => {
				let found = false;
				color.values.forEach(value => {
					if (value == currentBG) found = value;
				});
				return found;
			}).name;
		},
		switchTheme() {
			this.active = this.getThemeName();
			let sibling = this.themes.find(color => {
				return (
					new RegExp(`${this.active.match(/\w/)[0]}`).test(
						color.name
					) && color.name !== this.active
				);
			});
			console.log(sibling);

			// see watch parameter for rest of function
			if (sibling) this.activeTheme = sibling.name;
			this.panelBG = this.getPanelBG();
			this.themeName = sibling.name;
		}
	}
};
</script>

<style>
.centered {
	width: 100%;
	height: 99%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}
</style>
