<template>
  <Card class="p-shadow-2">
    <template v-slot:title>
      <div class="small-title">Box Shadow</div>
    </template>
    <template v-slot:content>
      <div class="p-d-flex p-jc-around">
        <div class="p-field">
          <label class="p-text-nowrap p-text-center" style="display: block; font-size: 0.75rem"
            >Offset X</label
          >
          <InputNumber
            v-model="boxShadowComputed[0]"
            :min="-50"
            :max="50"
            mode="decimal"
            showButtons
            buttonLayout="vertical"
            style="width:3rem"
            decrementButtonClass="p-button-secondary"
            incrementButtonClass="p-button-secondary"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
          />
        </div>
        <div class="p-field">
          <label class="p-text-nowrap p-text-center" style="display: block; font-size: 0.75rem"
            >Offset Y</label
          >
          <InputNumber
            v-model="boxShadowComputed[1]"
            :min="-50"
            :max="50"
            mode="decimal"
            showButtons
            buttonLayout="vertical"
            style="width:3rem"
            decrementButtonClass="p-button-secondary"
            incrementButtonClass="p-button-secondary"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
          />
        </div>
        <div class="p-field">
          <label class="p-text-nowrap p-text-center" style="display: block; font-size: 0.75rem"
            >Blur</label
          >
          <InputNumber
            v-model="boxShadowComputed[2]"
            :min="0"
            :max="100"
            mode="decimal"
            showButtons
            buttonLayout="vertical"
            style="width:3rem"
            decrementButtonClass="p-button-secondary"
            incrementButtonClass="p-button-secondary"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
          />
        </div>
        <div class="p-field">
          <label class="p-text-nowrap  p-text-center" style="display: block; font-size: 0.75rem"
            >Spread</label
          >
          <InputNumber
            v-model="boxShadowComputed[3]"
            :min="0"
            :max="100"
            mode="decimal"
            showButtons
            buttonLayout="vertical"
            style="width:3rem"
            decrementButtonClass="p-button-secondary"
            incrementButtonClass="p-button-secondary"
            incrementButtonIcon="pi pi-plus"
            decrementButtonIcon="pi pi-minus"
          />
        </div>
      </div>
      <div class="p-d-flex p-jc-center">
        <div class="p-mr-2">
          <h3>Shadow Color</h3>
          <ColorPicker format="rgb" v-model="boxShadowComputed[4]" :inline="true" />
        </div>
        <div style="width: 8rem">
          <h3>Opacity: {{ boxShadowComputed[5] / 100 }}</h3>
          <Slider
            :min="0"
            :max="100"
            v-model="boxShadowComputed[5]"
            orientation="vertical"
            style="height: 10.4rem"
            class="p-ml-auto p-mr-auto"
          />
        </div>
      </div>
    </template>
  </Card>
</template>

<script>
import { computed } from "vue";
export default {
  props: {
    boxShadow: Object,
  },
  setup(props) {
    const boxShadowComputed = computed(() => props.boxShadow.s);
    return {
      boxShadowComputed,
    };
  },
};
</script>
