<template>
  <div class="app-icons">
    <app-icon v-for="app in apps" :key="app.name" :app="app.name" :active="app.active" />
  </div>
</template>

<script>
const spy = window.__adobe_cep__ ? require('cep-spy').default : { appName: 'ILST' }
export default {
  data: () => ({
    apps: [
      {
        name: 'AEFT',
        active: spy.appName == 'AEFT'
      },
      {
        name: 'ILST',
        active: spy.appName == 'ILST'
      },
      {
        name: 'PHXS',
        active: spy.appName == 'PHXS'
      },
      {
        name: 'PPRO',
        active: spy.appName == 'PPRO'
      },
      {
        name: 'FLPR',
        active: spy.appName == 'FLPR'
      },
      {
        name: 'IDSN',
        active: spy.appName == 'IDSN'
      },
      {
        name: 'AUDT',
        active: spy.appName == 'AUDT'
      }
    ]
  }),
  components: {
    "app-icon": require('./appIcon.vue').default
  }
}
</script>

<style>
.app-icons {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 16px;
}
</style>