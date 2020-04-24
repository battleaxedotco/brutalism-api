<template>
  <div class="hello">{{msg}}</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style >
.hello {
  width: 100%;
  display: flex;
  justify-content: center;
  color: var(--color-default);
}
</style>
