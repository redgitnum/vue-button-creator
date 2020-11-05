<template>
  <pre class="css-block">
.btn {&#10;{{ btnStyles[0].join(`&#10;`) }} &#10;}&#10;
{{ btnStyles[1].length ? `.btn:hover {&#10;${btnStyles[1].join(`&#10;`)} &#10;}` : null }}&#10;
{{ btnStyles[2].length ? `.btn:active {&#10;${btnStyles[2].join(`&#10;`)} &#10;}` : null }}
</pre
  >
</template>
<script>
export default {
  props: {
    btnStyles: Object,
  },
};
</script>

<style scoped>
.css-block {
  font-family: monospace;
  font-size: 0.8rem;
  min-height: 60px;
  max-height: 300px;
  background-color: #eee;
  padding: 5px 10px;
  overflow: auto;
}
</style>
