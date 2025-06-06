<script setup lang="ts">
import UpgradeList from '@/components/Upgrades/UpgradeList.vue'
</script>

<template>
  <div class="upgradesContainer">
    <div class="upgrades_container">
      <UpgradeList />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.upgradesContainer {
  height: 100%;

  border-left: solid 2px #000000;

  .upgrades_container {
    margin-top: 60px;
    height: calc(100% - 60px);
  }
}
</style>
