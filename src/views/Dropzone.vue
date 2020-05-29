<template>
  <div class="test-page">
    <Grid height="100%" column class>
      <!-- <div class="placeholder"> -->
      <Dropzone :fullscreen="false" html auto-read @drop="testDrop1" />
      <!-- </div> -->
      <div class="placeholder">
        <div class="draggable-elt" draggable="true">DRAG ME</div>
      </div>
    </Grid>
  </div>
</template>

<script>
export default {
  methods: {
    testRead1(val) {
      console.log("Reading from 1:", val);
    },
    testDrop1(val) {
      console.log("Testing drop 1:", val);
    },
    testRead2(val) {
      console.log("Reading from 2:", val);
    },
    testDrop2(val) {
      console.log("Testing drop 2:", val);
    }
  }
};
</script>

<style>
.test-page {
  width: 100%;
  height: 100%;
  /* border: 2px solid red; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

[class^="grid-"] {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
}

.draggable-elt {
  padding: 10px 20px;
  background: var(--divider-dark);
  cursor: grab;
}

.draggable-elt:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}

.placeholder {
  border: 2px solid var(--color-border);
  background: var(--color-header);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}

.placeholder:last-of-type {
  background: var(--color-bg);
}
</style>