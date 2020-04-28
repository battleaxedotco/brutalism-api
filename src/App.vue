<template>
  <div id="app">
    <Menus refresh />
		<Panel app="ILST" theme="darkest" :gradient="null">
			<router-view />
		</Panel>
		<Tabs invert emit-to-parent :routes="routes" />
	</div>
</template>

<script>
// Only needed for browser version of panel
import starlette from 'starlette'

export default {
  name: "App",
  data: () => ({
    routes: [
      { label: "Home", name: "home" },
			{ label: "Buttons", name: "buttons" },
			{ label: "Inputs", name: "inputs" },
			{ label: "Form", name: "form" },
		]
  }),

  // Only needed for browser version of panel
  created() {
    if (!window.__adobe_cep__) starlette.initAs('ILST', 'darkest');
    // console.log(this.$route.path)
  },
};
</script>

<style>
</style>
