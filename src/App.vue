<template>
  <div class="p-d-flex p-flex-column p-flex-lg-row p-m-6 p-jc-center p-ai-center p-ai-lg-stretch">
    <ButtonSettings
      :btn="btnProperties"
      :btnShadows="btnShadows"
      :btnHoverShadows="btnHoverShadows"
      :btnActiveShadows="btnActiveShadows"
      :btnHover="btnHoverProperties"
      :btnActive="btnActiveProperties"
      :checkedBase="checkedBase"
      :checkedHover="checkedHover"
      @changeCheck="changeCheck"
    />
    <ButtonPreview
      :btn="btnProperties"
      :btnShadows="btnShadows"
      :btnHoverShadows="btnHoverShadows"
      :btnActiveShadows="btnActiveShadows"
      :btnHover="btnHoverProperties"
      :btnActive="btnActiveProperties"
      @preset="loadPreset"
    />
  </div>
</template>

<script>
import { reactive, watch, ref } from "vue";
import ButtonPreview from "./components/ButtonPreview";
import ButtonSettings from "./components/ButtonSettings";
import { simple, bordered, rounded, round } from "./modules/presets";

export default {
  components: {
    ButtonPreview,
    ButtonSettings,
  },
  setup() {
    const btnProperties = reactive({ s: { outline: "none" } });
    const btnHoverProperties = reactive({ s: { outline: "none" } });
    const btnActiveProperties = reactive({ s: { outline: "none" } });
    const btnShadows = reactive({ s: [0, 0, 0, 0, { r: 0, g: 0, b: 0 }, 100] });
    const btnHoverShadows = reactive({ s: [0, 0, 0, 0, { r: 0, g: 0, b: 0 }, 100] });
    const btnActiveShadows = reactive({ s: [0, 0, 0, 0, { r: 0, g: 0, b: 0 }, 100] });

    const checkedBase = ref(false);
    const checkedHover = ref(false);

    function changeCheck(value) {
      value ? (checkedBase.value = !checkedBase.value) : (checkedHover.value = !checkedHover.value);
    }

    async function loadPreset(presetName) {
      checkedBase.value = true;
      checkedHover.value = true;
      let newStyle;
      switch (presetName) {
        case "simple":
          newStyle = JSON.parse(JSON.stringify(simple));
          break;
        case "bordered":
          newStyle = JSON.parse(JSON.stringify(bordered));
          break;
        case "rounded":
          newStyle = JSON.parse(JSON.stringify(rounded));
          break;
        case "round":
          newStyle = JSON.parse(JSON.stringify(round));
          break;
        default:
          newStyle = JSON.parse(JSON.stringify(simple));
      }
      btnProperties.s = newStyle.basic;
      btnHoverProperties.s = newStyle.hover;
      btnActiveProperties.s = newStyle.active;
      btnShadows.s = newStyle.basicShadows;
      btnHoverShadows.s = newStyle.hoverShadows;
      btnActiveShadows.s = newStyle.activeShadows;
    }

    watch(
      () => btnProperties.s,
      (base) => {
        if (!checkedBase.value) {
          for (let index in base) {
            btnHoverProperties.s[index] = base[index];
            btnActiveProperties.s[index] = base[index];
          }
        }
      },
      { deep: true }
    );

    watch(
      () => btnHoverProperties.s,
      (base) => {
        if (!checkedHover.value) {
          for (let index in base) {
            btnActiveProperties.s[index] = base[index];
          }
        }
      },
      { deep: true }
    );

    watch(
      () => btnShadows.s,
      (base) => {
        if (!checkedBase.value) {
          for (let index in base) {
            btnHoverShadows.s[index] = base[index];
            btnActiveShadows.s[index] = base[index];
          }
        }
      },
      { deep: true }
    );

    watch(
      () => btnHoverShadows.s,
      (base) => {
        if (!checkedBase.value) {
          for (let index in base) {
            btnActiveShadows.s[index] = base[index];
          }
        }
      },
      { deep: true }
    );

    return {
      btnProperties,
      btnHoverProperties,
      btnActiveProperties,
      btnShadows,
      btnHoverShadows,
      btnActiveShadows,
      checkedBase,
      checkedHover,
      changeCheck,
      loadPreset,
    };
  },
};
</script>

<style>
html {
  font-size: 16px;
  background-color: rgba(163, 181, 202, 0.534);
}

.button-preview-container,
.button-settings-container {
  width: 100%;
  max-width: 600px;
  min-width: 350px;
  margin-top: 15px;
}
.button-preview-container {
  display: flex;
  flex-direction: column;
  position: sticky;
  min-width: 250px;

  top: 15px;
}
</style>
