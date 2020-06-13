<template>
  <div class="file-picker-wrapper">
    <input
      style="display:none;"
      ref="filepicker"
      type="file"
      name="testing 1 2 3"
      @change="fileHandler"
      :multiple="multiple"
      :accept="realAccepts"
    />
    <div @click="clickOnSlot" v-if="$slots.default">
      <slot />
    </div>
    <div v-else>
      <Input
        @focus="clickOnSlot"
        v-if="!multiple"
        :pseudo="true"
        :label="realLabel"
        ref="pseudoinput"
        :flat="flat"
        :filled="filled"
        v-model="text"
        :append-outer-icon="realIcon"
      />
      <TextArea
        v-else
        @focus="clickOnSlot"
        ref="pseudotextarea"
        :pseudo="true"
        :label="realLabel"
        :flat="flat"
        :filled="filled"
        v-model="text"
        :append-outer-icon="realIcon"
      />
    </div>
  </div>
</template>

<script>
import { openDialog, evalScript } from "cluecumber";
import fspath from "path";
import fs from "fs";

export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    folder: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    filled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    multiple: {
      type: Boolean,
      default: false
    },
    accepts: {
      type: [String, Array],
      default: () => {
        return ["*"];
      }
    },
    autoParse: {
      type: Boolean,
      default: true
    },
    flatten: {
      type: Boolean,
      default: true
    },
    readFolders: {
      type: Boolean,
      default: false
    },
    encoding: {
      type: String,
      default: "UTF-8"
    },
    autoRead: {
      type: Boolean,
      default: false
    },
    debug: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    contents: [],
    readContents: [],
    text: "No file selected"
  }),
  computed: {
    realAccepts() {
      return !/string/.test(typeof this.accepts)
        ? this.accepts.join(", ")
        : this.accepts;
    },
    realIcon() {
      if (this.icon.length) return this.icon;
      else return this.folder ? "folder-outline" : "file-outline";
    },
    realLabel() {
      if (this.label.length) return this.label;
      else
        return `Choose ${this.folder ? "Folder" : "File"}${
          this.multiple ? "s" : ""
        }`;
    },
    realTitle() {
      if (this.title.length) return this.title;
      else
        return `Choose ${this.folder ? "Folder" : "File"}${
          this.multiple ? "s" : ""
        }`;
    }
  },
  methods: {
    // Opens a native open dialog and returns the target folder/file path as obj.path
    openDialog(title, isFolder = false) {
      if (!window.__adobe_cep__) return null;
      let menu = cep.fs.showOpenDialogEx(true, isFolder, title);
      let result;
      if (menu.err) result = { error: menu.err };
      else if (!menu.data.length) result = { error: "Canceled" };
      else result = menu.data;
      return result;
    },
    async clickOnSlot() {
      const self = this;
      try {
        if (!this.multiple && this.$refs.pseudoinput)
          this.$refs.pseudoinput.blur();
        else if (this.multiple && this.$refs.pseudotextarea)
          this.$refs.pseudotextarea.blur();
      } catch (err) {
        //
      }
      if (!this.folder) await this.openFilePicker();
      else await this.openFolderPicker();
    },
    async openFilePicker() {
      console.log(this.realAccepts);
      this.$refs.filepicker.click();
    },
    async openFolderPicker() {
      let result = await this.openDialog(this.realTitle, true);
      console.log("PREVIEW FOLDERS:");
      console.log(result);
    },
    async fileHandler(e) {
      this.reset();
      let fileList = e.target.files;
      let temp = [];
      if (this.autoRead)
        for (let file of fileList)
          this.readContents.push(await this.getAsText(file));
      this.contents = this.makeIterable(fileList).map(item => {
        return item.path;
      });
      if (this.debug) {
        if (this.autoRead) console.log(this.readContents);
        else console.log(this.contents);
      }
      this.$emit("input", this.multiple ? this.contents : this.contents[0]);
      this.$emit(
        "read",
        this.multiple ? this.readContents : this.readContents[0]
      );
      console.log("Done");
      console.log(this.readContents);
    },
    makeIterable(list) {
      let result = [];
      for (var i = 0; i < list.length; i++) result.push(list[i]);
      return result;
    },
    getAsText(readFile) {
      return new Promise((resolve, reject) => {
        if (!readFile)
          reject(
            this.createError("Unsupported file type for Read event", readFile)
          );
        var reader = new FileReader();
        reader.readAsText(readFile, this.encoding);
        reader.onload = () => {
          let result = reader.result;
          result = this.isJSON(result)
            ? this.autoParse
              ? JSON.parse(result)
              : result
            : result;
          resolve(result);
        };
        reader.onerror = this.errorHandler;
      });
    },
    async loaded(evt) {
      let result = evt.target.result;
      result = this.isJSON(result)
        ? this.autoParse
          ? JSON.parse(result)
          : result
        : result;
      return result;
    },
    isJSON(data) {
      try {
        JSON.parse(data);
        return true;
      } catch (e) {
        return false;
      }
    },
    async expandFolderData(data) {
      let origin = data;
      for (let i = 0; i < data.length; i++) {
        let originalpath = data[i].path;
        data[i] = !/(\\|\/)\w*\.\w*/.test(data[i].path)
          ? await this.readDir(data[i].path)
          : data[i];
        data[i] = data[i].length
          ? data[i].map(file => {
              let child = new File([""], `${file}`, {});
              let clone = {};
              let keys = [
                "name",
                "lastModified",
                "lastModifiedDate",
                "path",
                "size",
                "type",
                "webkitRelativePath"
              ];
              keys.forEach(key => {
                clone[key] = child[key];
              });
              clone.path = `${originalpath.replace(
                /(\\|\/)$/,
                ""
              )}/${file}`.replace(/\\/gm, "/");
              return clone;
            })
          : data[i];
      }
      return this.flatten ? data.flat() : data;
    },
    async readDir(thispath) {
      return new Promise((resolve, reject) => {
        fs.readdir(
          path.resolve(thispath),
          { encoding: "utf-8" },
          (err, files) => {
            if (err) reject(err);
            resolve(files);
          }
        );
      });
    },
    createError(message, evt) {
      this.errorHandler({
        target: { error: message }
      });
      console.log("HTML not yet supported! Files only.");
    },
    errorHandler(evt) {
      this.reset();
      if (evt.target.error.name == "NotReadableError") console.error(evt);
      else console.error(evt.target.error);
    },
    reset() {
      this.contents = [];
      this.readContents = [];
      this.text = "No file selected";
    },
    //
    async confirmHandler(data) {
      if (this.readFolders)
        data = window.__adobe_cep__
          ? await this.expandFolderData(data)
          : this.createError(`Cannot read folders in browser!`);
      data.length
        ? this.$emit("input", data)
        : this.createError("Unsupported file type for Drop event");
    }
    //
  }
};
</script>

<style>
.brutalism-filepicker {
}
</style>
