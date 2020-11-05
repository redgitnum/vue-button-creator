<template>
  <Card class="button-settings-container p-mr-0 p-mr-lg-3 p-shadow-8">
    <template v-slot:title>
      Button Settings {{ activeTab ? (activeTab === 1 ? ":Hover" : ":Active") : null }}
    </template>
    <template v-slot:content>
      <Message severity="info">
        <span style="font-size: 0.9rem">
          If the tabs are unlocked(default) then each tab will affect all tabs on their right side
          (changing base will affect all, but changing hover affects only hover and active). Lock
          the tabs to keep them from applying changes to tabs on their right side.
        </span>
      </Message>
      <TabView v-model:activeIndex="activeTab">
        <TabPanel>
          <template #header>
            <div class="p-d-flex p-ai-center">
              <span class="p-pr-1">Base</span>
              <div class="p-d-flex" style="width: 2rem; height: 2rem">
                <ToggleButton
                  v-model="checkedBaseCopy"
                  @change="$emit('change-check', 'base')"
                  onIcon="pi pi-lock"
                  offIcon="pi pi-lock"
                />
              </div>
            </div>
          </template>
          <ButtonTag :btn="btn" :boxShadow="btnShadows" />
        </TabPanel>
        <TabPanel>
          <template #header>
            <div class="p-d-flex p-ai-center">
              <span class="p-pr-2">Hover</span>
              <div class="p-d-flex" style="width: 2rem; height: 2rem">
                <ToggleButton
                  v-model="checkedHoverCopy"
                  @change="$emit('change-check')"
                  onIcon="pi pi-lock"
                  offIcon="pi pi-lock"
                />
              </div>
            </div>
          </template>
          <ButtonTag :btn="btnHover" :boxShadow="btnHoverShadows" />
        </TabPanel>
        <TabPanel>
          <template #header>
            <div class="p-d-flex p-ai-center">
              <span class="p-pr-2">Active</span>
              <!-- div block to keep all tabs in the same line because of the lack of button here -->
              <div style="height: 2rem"></div>
            </div>
          </template>
          <ButtonTag :btn="btnActive" :boxShadow="btnActiveShadows" />
        </TabPanel>
      </TabView>
    </template>
  </Card>
</template>

<script>
import { computed, ref, watch } from "vue";
import ButtonTag from "./ButtonTag";

export default {
  props: {
    btn: Object,
    btnHover: Object,
    btnActive: Object,
    btnShadows: Object,
    btnHoverShadows: Object,
    btnActiveShadows: Object,
    checkedBase: Boolean,
    checkedHover: Boolean,
  },
  components: {
    ButtonTag,
  },

  setup(props) {
    const checkedBaseComputed = computed(() => props.checkedBase);
    const checkedBaseCopy = ref(props.checkedBase);
    const checkedHoverComputed = computed(() => props.checkedHover);
    const checkedHoverCopy = ref(props.checkedHover);
    const activeTab = ref(0);

    watch(checkedBaseComputed, () => (checkedBaseCopy.value = checkedBaseComputed.value));
    watch(checkedHoverComputed, () => (checkedHoverCopy.value = checkedHoverComputed.value));
    return {
      checkedBaseComputed,
      checkedBaseCopy,
      checkedHoverComputed,
      checkedHoverCopy,
      activeTab,
    };
  },
};
</script>
