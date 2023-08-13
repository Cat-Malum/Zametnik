import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSignalsStore = defineStore('signalsStore', () => {
  const signalForCalendar = ref(false);
  const signalForDeletBtn = ref(false);

  const changeSignalForCalendar = () => signalForCalendar.value = !signalForCalendar.value;
  const changeSignalForDeleteBtn = () => signalForDeletBtn.value = !signalForDeletBtn.value;

  return {
    signalForCalendar,
    signalForDeletBtn,
    changeSignalForCalendar,
    changeSignalForDeleteBtn
  };
});