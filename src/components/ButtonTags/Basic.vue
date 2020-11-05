<template>
  <h4>Width: {{ (btnOpt.width && btnOpt.width + "px") || "auto" }}</h4>
  <Slider v-model="btnOpt.width" :max="200" />
  <h4>Height: {{ (btnOpt.height && btnOpt.height + "px") || "auto" }}</h4>
  <Slider v-model="btnOpt.height" :max="200" />
  <h4>Padding: {{ (btnOpt.padding && btnOpt.padding + "px") || "default" }}</h4>
  <Slider v-model="btnOpt.padding" />
  <h4>Font Size: {{ (btnOpt["font-size"] && btnOpt["font-size"] + "px") || "default" }}</h4>
  <Slider v-model="btnOpt['font-size']" :max="64" />
  <h4>Font Weight: {{ btnOpt["font-weight"] || "default" }}</h4>
  <SelectButton v-model="btnOpt['font-weight']" :options="['lighter', 'normal', 'bold']" />
  <div class="p-d-flex p-jc-center">
    <div class="p-d-flex p-flex-column p-ai-center p-mr-3">
      <h5 class="p-mb-2">Text Color</h5>
      <ColorPicker defaultColor="#000000" v-model="btnOpt['color']" />
    </div>
    <div class="p-d-flex p-flex-column p-ai-center">
      <h5 class="p-mb-2">Button Color</h5>
      <ColorPicker defaultColor="#dddddd" v-model="btnOpt['background-color']" />
    </div>
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
