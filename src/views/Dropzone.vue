<template>
  <div class="test-page">
  <!-- <Dropzone /> -->
  <Grid height="400px" column>
    <Grid>
      <Dropzone :fullscreen="false" color="red" />
      <Dropzone :fullscreen="false" auto-read />
      <Dropzone :fullscreen="false" single />
    </Grid>
    <Grid>
      <Dropzone :fullscreen="false" :accepts="[ '.jpg' ]" />
      <Dropzone :fullscreen="false" read-folders />
      <Dropzone :fullscreen="false" flatten />
    </Grid>
    <Grid>
      <Dropzone :fullscreen="false" pure-svg />
      <Dropzone :fullscreen="false" auto-parse />
      <Dropzone :fullscreen="false" no-border />
    </Grid>
  </Grid>

  <!-- <div draggable="true" style="max-width:30px;padding:20px;height:20px;background:var(--color-header);">
    Drag me to the above
  </div> -->
    <!-- <Dropzone /> -->
    <div class="grid-1">
    </div>


    <!-- <div class="grid-2">
      <Grid column gap="10px" template="1fr 2fr 1fr .5fr">
        <div style="background: red;"></div>
        <div style="background: green;"></div>
        <div style="background: blue;"></div>
        <div style="background: white;"></div>
      </Grid> -->
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    testRead1(val) {
      console.log('Reading from 1:', val)
    },
    testDrop1(val) {
      console.log('Testing drop 1:', val)
    },
    testRead2(val) {

      console.log('Reading from 2:', val)
    },
    testDrop2(val) {
      console.log('Testing drop 2:', val)
    }
  }
}
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

.placeholder {
  border: 2px solid var(--color-border);
  background: var(--color-header);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}

</style>