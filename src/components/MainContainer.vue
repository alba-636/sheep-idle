<script setup lang="ts">
import VisualContainer from '@/components/VisualContainer.vue'
import UpgradesContainer from '@/components/UpgradesContainer.vue'
import WoolCounter from '@/components/WoolCounter.vue'
</script>

<template>
  <div class="mainContainer">
    <WoolCounter />

    <VisualContainer />
    <UpgradesContainer />
  </div>
</template>

<style lang="scss" scoped>
.mainContainer {
  width: 100%;
  height: 100%;
  display: flex;

  &:deep(.visualContainer) {
    flex-grow: 2;
  }

  &:deep(.upgradesContainer) {
    flex-grow: 1;
  }
}
</style>
