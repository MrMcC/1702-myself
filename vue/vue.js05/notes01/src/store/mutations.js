export default {
  ADD_NOTE (state) {
    var noteObj = {
        text: 'new Text',
        bol: false
    }
    state.notes.push(noteObj)
    state.activeNote = noteObj
  },
  UPDATA_CTIVE_NOTE (state, item) {
    state.activeNote = item
  },
  TOGGLE_FAVORITE (state) {
    state.activeNote.bol = !state.activeNote.bol
  },
  REMOVE (state) {
    state.notes.splice(state.notes.indexOf(state.activeNote), 1)
    state.activeNote = state.notes[0]
  }
}
