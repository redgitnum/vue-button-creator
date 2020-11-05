<template>
  <div class="button-preview-container p-as-lg-start">
    <Card class="p-mb-3 p-shadow-8" :style="{ backgroundColor: '#' + previewBgColor }">
      <template v-slot:title>
        Button Preview
      </template>
      <template v-slot:content>
        <div class="p-d-flex p-jc-center p-ai-center" style="minHeight: 80px;">
          <div>
            <!-- emulating :hover and :active button styles with @mouse-actions -->
            <button
              :style="!style ? buttonStyle : style === 2 ? buttonActiveStyle : buttonHoverStyle"
              @mouseover="style = 1"
              @mouseleave="style = 0"
              @mousedown="style = 2"
              @mouseup="style = 1"
            >
              Click me
            </button>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="p-d-flex p-jc-between p-ai-center">
          <div>
            <span>
              Background Color:
            </span>
            <ColorPicker v-model="previewBgColor" />
          </div>
          <div class="p-d-flex p-ai-center p-flex-wrap">
            <span class="p-mr-2">Presets:</span>
            <div>
              <Button
                @click="$emit('preset', 'simple')"
                label="Simple"
                class="p-button-sm p-mr-1 p-mb-1"
              />
              <Button
                @click="$emit('preset', 'bordered')"
                label="Bordered"
                class="p-button-sm p-mr-1 p-mb-1"
              />
              <Button
                @click="$emit('preset', 'rounded')"
                label="Rounded"
                class="p-button-sm p-mr-1 p-mb-1"
              />
              <Button @click="$emit('preset', 'round')" label="Round" class="p-button-sm p-mb-1" />
            </div>
          </div>
        </div>
      </template>
    </Card>
    <Card class="p-shadow-8">
      <template v-slot:title>
        <div class="p-d-flex p-jc-between p-text-nowrap">
          <span>
            CSS Code
          </span>
          <button class="p-ml-3 p-text-truncate copyBtn" @click="copyToClipboard">
            Copy to clipboard
          </button>
        </div>
        <!-- show popout message after copying via button -->
        <div>
          <Message v-if="success" severity="success" :sticky="false" :closable="false">
            Style copied successfully!
          </Message>
        </div>
      </template>
      <template v-slot:content>
        <CssBlock :btnStyles="[buttonStyle, buttonHoverStyleText, buttonActiveStyleText]" />
      </template>
    </Card>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import useStyle from "../modules/useStyle";
import CssBlock from "./CssBlock";

export default {
  props: {
    btn: Object,
    btnHover: Object,
    btnActive: Object,
    btnShadows: Object,
    btnHoverShadows: Object,
    btnActiveShadows: Object,
  },
  components: {
    CssBlock,
  },
  setup(props) {
    const previewBgColor = ref("#FFFFFF");
    const style = ref(0);
    const success = ref(false);
    const fnRunning = ref(false);

    const buttonStyle = useStyle(props.btn, props.btnShadows);
    const buttonHoverStyle = useStyle(props.btnHover, props.btnHoverShadows);
    const buttonHoverStyleText = computed(() => {
      let styleCopy = buttonHoverStyle.value;
      return styleCopy.filter((item, i) => styleCopy[i] !== buttonStyle.value[i]);
    });
    const buttonActiveStyle = useStyle(props.btnActive, props.btnActiveShadows);
    const buttonActiveStyleText = computed(() => {
      let styleCopy = buttonActiveStyle.value;
      return styleCopy.filter((item, i) => styleCopy[i] !== buttonStyle.value[i]);
    });

    function copyToClipboard() {
      success.value = true;
      let textField = document.querySelector(".css-block");
      let selection = window.getSelection();
      let range = document.createRange();
      range.selectNodeContents(textField);
      selection.removeAllRanges();
      selection.addRange(range);
      document.execCommand("copy");
      selection.removeAllRanges();
      //check if the function is already working to keep nice transition of message popout
      if (!fnRunning.value) {
        fnRunning.value = true;
        setTimeout(() => {
          success.value = false;
          fnRunning.value = false;
        }, 3200);
      }
    }

    return {
      buttonStyle,
      buttonHoverStyle,
      buttonActiveStyle,
      previewBgColor,
      style,
      success,
      fnRunning,
      buttonHoverStyleText,
      buttonActiveStyleText,
      copyToClipboard,
    };
  },
};
</script>

<style scoped>
.copyBtn {
  outline: none;
  font-size: 13px;
  font-weight: bold;
  color: #000000;
  background-color: #85d6ff;
  padding: 7px;
  border-radius: 4px;
  border-style: none;
  transition-duration: 0.2s;
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.32);
}

.copyBtn:hover {
  background-color: #a1e0ff;
  box-shadow: 0px 1px 6px 3px rgba(0, 0, 0, 0.23);
}

.copyBtn:active {
  background-color: #4ac3ff;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.23);
}
</style>
