<template>
  <header class="pub-header">
    {{headerTitle}}
  </header>
</template>
<script type="text/javascript">
export default {
  props: ['headerTitle']
}
</script>
<style lang="less" scoped>
.pub-header{
  height: 4.5rem;
  line-height: 4.5rem;
  background-color: #f9fafd;
  position: relative;
  text-align: center;
  z-index: 2;
  font-size: 1.4rem;
  font-weight: 700;
}
</style>