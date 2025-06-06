<script lang="ts" setup>
defineProps({
  value: {
    type: Number,
    required: true,
  },

  disabledAnimation: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<template>
  <span v-if="disabledAnimation">{{ value }}</span>
  <span v-else :style="'--value: ' + value + ';'" class="number"></span>
</template>

<style lang="scss">
@property --value {
  syntax: '<number>';
  initial-value: 0;
  inherits: false;
}

.number {
  transition: --value 1s linear;
  counter-reset: valueAnimated max(var(--value), 0);

  &::before {
    content: counter(valueAnimated);
  }
}
</style>
