<template>
  <div class="menu-container">
    <div
      class="menu-wrapper"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
    >
      <div class="menu-content">
        <div class="menu-up-down" v-if="numeric"></div>
        <div class="menu-value">
          <div v-if="!input" class="menu-value-default"></div>
          <input class="menu-value-input" />
        </div>
        <div class="menu-expand">
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    offset: {
      type: Boolean,
      default: false,
    },
    numeric: {
      type: Boolean,
      default: false,
    },
    input: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: function() {
        return [
          {
            label: "Test 1",
            value: 0,
          },
          {
            label: "Test 2",
            value: 1,
          },
        ];
      },
    },
  },
  data: () => ({
    type: "menu",
    realItems: [],
    hover: false,
    activeValue: "Test 2",
  }),
};
</script>

<style>
.menu-wrapper {
  position: relative;
}

.menu-expand {
  box-sizing: border-box;
  fill: var(--color-icon);
  border-style: solid;
  border-color: var(--color-dropdown-border);
  border-width: 0px 0px 0px 1.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 22px; */
}

.menu-value {
  width: 100%;
  /* padding-left: 6px; */
  /* height: calc(100% - 3px); */
  box-sizing: border-box;
  height: 20px;
  position: relative;
  top: 0.5px;
  left: 0px;
}

.menu-content {
  box-sizing: border-box;
  /* position: absolute; */
  top: 0px;
  left: 0px;
  border: 1.5px solid var(--color-dropdown-border);
  border-radius: 3px;
  height: 22px;
  min-width: 100px;
  width: fit-content;
  padding: 0px 0px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;
}

.menu-value-input {
  box-sizing: border-box;
  height: calc(100% - 1px);
  width: 100%;
  margin: 0px;
  padding: 2px 0px 2px 4px;
  overflow: visible;
  background: transparent;
  outline: none;
  border: none !important;
  border-style: solid;
  border-radius: 1.5px 0px 0px 1.5px;
  color: var(--default-color);
  background: var(--color-dropdown);
  /* border-radius: 2px 2px 0px 0px; */
}

.menu-value-input:focus-within {
  background: var(--color-input-focus);
  color: var(--color-input-focus-text);
}

.menu-content:focus-within {
  border-color: var(--color-selection);
}
</style>
