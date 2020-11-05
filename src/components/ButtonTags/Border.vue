<template>
  <h4 class="p-d-inline p-mr-2">Border style:</h4>
  <Dropdown
    v-model="btnOpt['border-style']"
    placeholder="Select style"
    :options="['none', 'solid', 'dotted', 'inset', 'outset', 'dashed', 'double']"
  />
  <h4>
    Border radius:
    {{ (btnOpt["border-radius"] && btnOpt["border-radius"] + "px") || "auto" }}
  </h4>
  <Slider v-model="btnOpt['border-radius']" :max="50" />
  <h4>
    Border width:
    {{ btnOpt["border-width"] || "default" }}
  </h4>
  <Slider v-model="btnOpt['border-width']" :max="50" />
  <div class="p-d-flex p-flex-column p-ai-center p-mr-3">
    <h5 class="p-mb-2">Border Color</h5>
    <ColorPicker defaultColor="#000000" v-model="btnOpt['border-color']" />
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    btn: Object,
  },
  setup(props) {
    const btnOpt = computed(() => props.btn.s);
    return {
      btnOpt,
    };
  },
};
</script>
