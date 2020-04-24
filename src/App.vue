<template>
  <div id="app">
    <Menus debug refresh />
		<Panel>
			<router-view />
		</Panel>
		<Tabs :breakpoint="80" invert :routes="routes" />
	</div>
</template>

<script>
// Only needed for browser version of panel
import starlette from 'starlette'

export default {
  name: "App",
  data: () => ({
    routes: [
			{ label: "Buttons", path: "/" },
			{ label: "Inputs", path: "/inputs" },
			{ label: "Form", path: "/form" },
			// { label: "AEUX", path: "/aeux" },
			// { label: "Sandbox", path: "/sandbox" }
		]
  }),

  // Only needed for browser version of panel
  created() {
    if (this.$router.params) {
      // 
    } else if (!window.__adobe_cep__) {
      starlette.initAs('ILST', 'darkest')
    }
  }
};
</script>

<style>
</style>
