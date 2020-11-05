<template>
  <Accordion>
    <AccordionTab header="Basic">
      <Basic :btn="btn" />
    </AccordionTab>
    <AccordionTab header="Border">
      <Border :btn="btn" />
    </AccordionTab>
    <AccordionTab header="Extra">
      <Extra :boxShadow="boxShadow" />
    </AccordionTab>
    <AccordionTab header="Transition">
      <Transitions :btn="btn" />
    </AccordionTab>
  </Accordion>
</template>

<script>
import Basic from "./ButtonTags/Basic";
import Border from "./ButtonTags/Border";
import Extra from "./ButtonTags/Extra";
import Transitions from "./ButtonTags/Transitions";

export default {
  props: {
    btn: Object,
    boxShadow: Object,
  },
  components: {
    Basic,
    Border,
    Extra,
    Transitions,
  },
};
</script>
