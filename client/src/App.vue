<template>
  <div id="app">
    <NavHead/>
    <router-view />
  </div>
</template>

<script>
import NavHead from '@/components/NavHead'

export default {
  components: {
    NavHead
  },
  data() {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
