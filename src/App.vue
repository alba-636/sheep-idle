<script setup lang="ts">
import MainContainer from '@/components/MainContainer.vue'
import GameHandler from './features/GameHandler'

// Initialize and start the game.
GameHandler.instance.start()
</script>

<template>
  <MainContainer />
</template>

<style>
html,
body,
#app {
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
}
</style>
