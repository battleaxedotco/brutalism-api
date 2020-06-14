<template>
  <Wrapper>
    <File-Input isFolder />
    <File-Picker filled folder label="Choosing folders" />
    <File-Picker auto-read label="auto-read" @read="testRead" />
    <File-Picker filled label="filled" @input="testInput" />
    <File-Picker clearable ref="test" label="clearable" @input="testInput" />
    <File-Picker
      clearable
      multiple
      label="clearable multiple"
      @input="testInput"
    />

    <File-Picker
      auto-read
      multiple
      @drop="testDrop"
      @input="testInput"
      @read="testRead"
    >
      <Dropzone
        :fullscreen="false"
        readFolders
        auto-read
        flatten
        @drop="testDrop"
        @input="testInput"
        @read="testRead"
      >
        <template v-slot:prompt>
          <div class="placeholder">
            Drop files or click here to open file picker
          </div>
        </template>
        <template v-slot:overlay>
          <div class="placeholder">v-slot:overlay while dragging</div>
        </template>
      </Dropzone>
    </File-Picker>
  </Wrapper>
</template>

<script>
export default {
  mounted() {
    let test = ["file/path/file1.json", "file/path/file2.json"];
    this.$refs.test.set(test);
  },
  components: {
    Menu: require("@/components/Menu").default,
    Dragger: require("@/components/Dragger").default,
    "File-Picker": require("@/components/FilePicker").default,
  },
  data: () => ({}),
  methods: {
    testClick(value) {
      console.log(value);
    },
    testInput(value) {
      console.log("Input value:", value);
    },
    testRead(value) {
      console.log("Read value:");
      console.log(value);
    },
    testDrop(value) {
      console.log("Drop value:");
      console.log(value);
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

.clickme {
  width: 100%;
  height: 40px;
  border: 2px solid red;
}
</style>
