<template>
    <div id="notes-list">
        <div id="list-header">
            <h2>Notes</h2>
            <div class="btn-group btn-group-justified" role="group">
                <!-- All Notes button -->
                <div class="btn-group" role="group" @click="show=true">
                    <button type="button" class="btn btn-default">
                        All Notes
                    </button>
                </div>
                <!-- Favorites Button -->
                <div class="btn-group" role="group" @click="show=false">
                    <button type="button" class="btn btn-default">
                        Favorites
                    </button>
                </div>
            </div>
        </div>
        <!-- render notes in a list -->
        <div class="container">
            <div class="list-group">
                <a class="list-group-item" href="#" v-for="(item,index) in notes" :class="{active: item === activeNote}" @click="upDateactiveNote(item)">
                    <h4 class="list-group-item-heading">
                        {{item.text}}
                    </h4>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
           show: true
        }
      },
      computed: {
          // 计算属性定义了一个notes方法,在点击toolbar加号时添加
          // 用计算属性获取mutations里的state数据
          notes () {
            if (this.show) {
                return this.$store.state.notes
            } else {
                return this.$store.state.notes.filter(item => item.bol)
            }
          },
          activeNote () {
            return this.$store.state.activeNote
          }
      },
      methods: {
          upDateactiveNote (item) {
            this.$store.dispatch('upDateactiveNote', item)
          }
      }
    }
</script>
<style type="text/css">
    #notes-list {
        float: left;
        width: 300px;
        height: 100%;
        background-color: #F5F5F5;
        font-family: 'Raleway', sans-serif;
        font-weight: 400;
    }

    #list-header {
        padding: 5px 25px 25px 25px;
    }

    #list-header h2 {
        font-weight: 300;
        text-transform: uppercase;
        text-align: center;
        font-size: 22px;
        padding-bottom: 8px;
    }

    #notes-list .container {
        height: calc(100% - 137px);
        max-height: calc(100% - 137px);
        overflow: auto;
        width: 100%;
        padding: 0;
    }

    #notes-list .container .list-group-item {
        border: 0;
        border-radius: 0;
    }
</style>

