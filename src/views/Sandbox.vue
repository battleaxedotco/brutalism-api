<template>
  <Wrapper>
    <Menu offset numeric input />
    <Divider />
    <Menu />
    <Divider />
    <Dragger>
      <Icon name="home" />
    </Dragger>
    <Divider />
    <Grid height="200px">
      <Dropzone :fullscreen="false" html @drop="testDrop" />
    </Grid>
  </Wrapper>
</template>

<script>
export default {
  mounted() {},
  components: {
    Menu: require("@/components/Menu").default,
    Dragger: require("@/components/Dragger").default,
  },
  data: () => ({}),
  methods: {
    testClick(value) {
      console.log(value);
    },
    testDrop(value) {
      console.log("Dropped:", value);
    },
  },
};
</script>

<style>
.placeholder {
  border: 2px solid var(--color-border);
  background: var(--color-header);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  height: 200px;
}
</style>
