<template>
    <div id="note-editor">
        <textarea v-model="activeNote.text"></textarea>
    </div>
</template>

<script>
  export default {
    computed:{
        activeNote () {
            return this.$store.state.activeNote
        }
    }
  }
</script>
<style type="text/css">
    #note-editor {
        height: 100%;
        margin-left: 380px;
    }

    #note-editor textarea {
        width: 100%;
        height: 100%;
        border: 0;
        border-radius: 0;
    }
</style>

