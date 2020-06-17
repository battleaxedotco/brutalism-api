<template>
  <div id="app">
    <Menus refresh debug />
    <Panel app="ILST" theme="darkest" :gradient="null">
      <router-view />
    </Panel>
    <Tabs invert emit-to-parent :routes="routes" />
  </div>
</template>

<script>
// Only needed for browser version of panel
import starlette from "starlette";

export default {
  name: "App",
  data: () => ({
    routes: [
      { label: "Home", name: "home" },
      { label: "Buttons", name: "buttons" },
      { label: "Inputs", name: "inputs" },
      { label: "Form", name: "form" },
      // { label: "Sandbox", name: "sandbox", disabled: false },
    ],
  }),
  computed: {},
  methods: {
    flipRoutes() {
      console.log(this.routeIndex);
      this.routeIndex = +!this.routeIndex;
      console.log(this.routeIndex);
    },
    testCallback(v, i, a) {
      console.log("Context click:");
      console.log(v, i, a);
    },
    doSomething(v, i, a) {
      console.log("Do Something");
      console.log(v, i, a);
    },
    doSomethingElse(v, i, a) {
      console.log("Do Something Else");
      console.log(v, i, a);
    },
    doSomethingAgain(v, i, a) {
      console.log("Do Something Again");
      console.log(v, i, a);
    },
  },
  // Only needed for browser version of panel
  created() {
    if (!window.__adobe_cep__) starlette.initAs("ILST", "darkest");
  },
};
</script>

<style></style>
