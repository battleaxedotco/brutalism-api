import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: 'home',
      component: () => import("./views/AEUX.vue")
    },
    {
      path: "/buttons/:parent?/:child?",
      name: 'buttons',
      component: () => import("./views/Buttons.vue")
    },
    {
      path: "/inputs/:parent?/:child?",
      name: 'inputs',
      component: () => import("./views/Inputs.vue")
    },
    {
      path: "/form/:parent?/:child?",
      name: 'form',
      component: () => import("./views/Form.vue")
    },
  ]
});
