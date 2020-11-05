<template>
  <h4 class="p-d-inline p-mr-2">Transition curve:</h4>
  <Dropdown
    v-model="btnOpt['transition-timing-function']"
    placeholder="ease"
    :options="['ease', 'linear', 'ease-in', 'ease-out', 'ease-in-out']"
  />
  <h4>
    Transition Duration:
    {{ (btnOpt["transition-duration"] && btnOpt["transition-duration"] / 10 + "s") || "none" }}
  </h4>
  <Slider v-model="btnOpt['transition-duration']" :max="50" />
  <h4>
    Transition Delay:
    {{ (btnOpt["transition-delay"] && btnOpt["transition-delay"] / 10 + "s") || "none" }}
  </h4>
  <Slider v-model="btnOpt['transition-delay']" :max="50" />
  <br />
  <div class="p-text-light" style="fontSize: 1rem">
    <i class="pi pi-exclamation-circle p-pr-1" />The transition will not work for width or height if
    the base value is set to auto(default)
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
