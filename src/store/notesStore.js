import { defineStore } from 'pinia';

export const useNotesStore = defineStore('notesStore', {
  state: () => ({
    notes: []
  }),
  actions: {
    addNote(note) {
      this.notes.push(note);
    },
    removeNote(id) {
      this.notes = this.notes.filter(item => item.id !== id);
    }
  }
});