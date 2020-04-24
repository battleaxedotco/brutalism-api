import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Buttons.vue")
    },
    {
      path: "/form",
      name: "form",
      component: () => import("./views/Form.vue")
    },
    // {
    //   path: "/dropper",
    //   name: "dropper",
    //   component: () => import("./views/Dropper.vue")
    // },
    {
      path: "/aeux",
      name: "aeux",
      component: () => import("./views/AEUX.vue")
    },
    // {
    //   path: "/pan",
    //   name: "pan",
    //   component: () => import("./views/Pan.vue")
    // },
    {
      path: "/inputs",
      name: "inputs",
      component: () => import("./views/Inputs.vue")
    },
    {
      path: "/sandbox",
      name: "sandbox",
      component: () => import("./views/Sandbox.vue")
    }
  ]
});
