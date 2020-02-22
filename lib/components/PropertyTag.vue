<template>
  <div class="property-tag">
    <b>{{ tagKey }}</b>: {{ tagValue }}
  </div>
</template>

<script>
export default {
  name: 'property-tag',
  props: {
    tagKey: [String, Number],
    tagValue: [String, Number]
  }
}
</script>

<style scoped>
.property-tag {
  font-size: 0.9rem;
  border: 1px solid rgb(100, 100, 100);
  background-color: var(--property-tag-color);
  width: fit-content;
  padding: 5px 10px;
  display: inline-block;
  margin-right: 5px;
  margin-top: 5px;
}
</style>
