<template>
  <div id="toolbar">
    <i class="glyphicon glyphicon-plus" @click="addOne()"></i>
    <i class="glyphicon glyphicon-star" @click="favorite()" :class="{starred: activeNote.bol}"></i>
    <i class="glyphicon glyphicon-remove" @click="remove()"></i>
  </div>
</template>
<script>
    export default {
      methods: {
        addOne () {
          // mutations完后,在这里调用action方法
          this.$store.dispatch('addNote')
        },
        favorite () {
          this.$store.dispatch('toggleFavorite')
        },
        remove () {
          this.$store.dispatch('remove')
        }
      },
      computed: {
        activeNote () {
          return this.$store.state.activeNote
        }
      }
    }
</script>
<style>
  #toolbar {
    float: left;
      width: 80px;
      height: 100%;
      background-color: #30414D;
      color: #767676;
      padding: 35px 25px 25px 25px;
    }
  #toolbar i {
    font-size: 30px;
    margin-bottom: 35px;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.5s ease;
  }

  #toolbar i:hover {
    opacity: 1;
  }
  .starred {
    color: #F7AE4F;
  }

</style>
