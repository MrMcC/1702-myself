<template>
  <div id="app">
    <store-header></store-header>
    <router-view></router-view>
  </div>
</template>

<script>
import storeHeader from './components/header'

export default {
  name: 'app',
  components: {
    storeHeader
  },
  created () {
    this.$store.dispatch('getCart')
  }
}
</script>

<style>

</style>
