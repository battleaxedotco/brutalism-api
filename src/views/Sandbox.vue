<template>
  <Wrapper>
    <File-Picker label="default file" @input="testInput" />
    <File-Picker folder label="default folder" @input="testInput" />
    <File-Picker
      multiple
      label="Multiple switches to TextArea"
      @input="testInput"
      ref="filepick"
    />
    <File-Picker auto-read @drop="testDrop" @input="testInput" @read="testRead">
      <Dropzone
        :fullscreen="false"
        auto-read
        @drop="testDrop"
        @input="testInput"
        @read="testRead"
      >
        <template v-slot:prompt>
          <div class="placeholder">
            Fully featured hybrid Dropzone/File-Picker
          </div>
        </template>
        <template v-slot:overlay>
          <div class="placeholder">v-slot:overlay while dragging</div>
        </template>
      </Dropzone>
    </File-Picker>
    <Divider />
    <Color-Picker label="Prefs id" prefs-id="example" @update="showColor" />
    <Anno size="12px">Below has editable Input component:</Anno>
    <Color-Picker editable @update="showColor" />
    <Color-Picker
      label="two-way v-model bind"
      v-model="test"
      @update="showColor"
      ref="colorpick"
    />
    <Anno size="12px">{{ `v-model sync: ${test}` }}</Anno>
    <Color-Picker label="Disabled" disabled />
    <Color-Picker @update="showColor">
      <Button>I'm a slot also used as a color picker</Button>
    </Color-Picker>
  </Wrapper>
</template>

<script>
const fs = require("fs");

export default {
  mounted() {
    if (!fs) {
    }
    this.$refs.filepick.set(["file/path/file1.json", "file/path/file2.json"]);
    this.$refs.colorpick.realValue = "#00aaff";
  },
  components: {
    Menu: require("@/components/Menu").default,
    Dragger: require("@/components/Dragger").default,
    // "Color-Picker": require("@/components/Color-Picker").default,
  },
  data: () => ({
    test: "#fff",
    color: "",
  }),
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
    showColor(value) {
      console.log(`Color value is:`, value);
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
