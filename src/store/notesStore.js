import { defineStore } from 'pinia';
import { ref, watch } from 'vue';

export const useNotesStore = defineStore('notesStore', () => {
  const notes = ref([]);

  const notesLocalStorage = localStorage.getItem('notes');
  if (notesLocalStorage) {
    notes.value = JSON.parse(notesLocalStorage)._value;
  }

  const addNote = (note) => {
    notes.value.push(note);
  };

  const removeNote = (id) => {
    notes.value = notes.value.filter(item => item.id !== id);
  };

  watch(
    () => notes,
    (state) => {
      localStorage.setItem('notes', JSON.stringify(state));
  }, {deep: true})
  
  return {
    notes,
    addNote,
    removeNote
  };
});