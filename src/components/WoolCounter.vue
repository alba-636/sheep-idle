<script lang="ts" setup>
import BigIntDisplay from '@/components/helpers/BigIntDisplay.vue'
import { useWoolCounterStore } from '@/stores/woolCounter'

const store = useWoolCounterStore()
</script>

<template>
  <div class="woolCounter_overlay">
    <div class="woolCounter_container">
      <BigIntDisplay :value="store.woolCount" animated />
      Wool
      <p class="woolProductionRate">{{ store.woolProductionRate }} wool/s</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.woolCounter_overlay {
  width: 100vw;
  height: 60px;

  position: absolute;
  display: flex;
  justify-content: center;

  .woolCounter_container {
    width: 30%;
    height: 100%;
    z-index: 99999;

    font-size: 20px;
    line-height: 30px;
    text-align: center;

    border-left: solid 4px #000000;
    border-bottom: solid 4px #000000;
    border-right: solid 4px #000000;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    background-color: #ffffff;

    .woolProductionRate {
      font-size: 16px;
      margin: 0px;
      margin-top: -4px;
    }
  }
}
</style>
