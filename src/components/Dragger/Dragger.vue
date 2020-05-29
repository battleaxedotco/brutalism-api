<template>
  <div class="dragger" draggable="true" @dragstart="onDragStart">
    <slot />
  </div>
</template>

<script>
export default {
  methods: {
    onDragStart(evt) {
      console.log(evt);
      let targVueUID;
      console.log(this.$slots.default[0]);

      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("text/html", targVueUID);
    },
  },
};
</script>

<style>
.dragger {
  border: 2px solid red;
}
</style>
