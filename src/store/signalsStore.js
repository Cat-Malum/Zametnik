import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSignalsStore = defineStore('signalsStore', () => {
  const signalForCalendar = ref(false);
  const signalForDeleteBtn = ref(false);

  const changeSignalForCalendar = () => signalForCalendar.value = !signalForCalendar.value;
  const changeSignalForDeleteBtn = () => signalForDeleteBtn.value = !signalForDeleteBtn.value;

  return {
    signalForCalendar,
    signalForDeleteBtn,
    changeSignalForCalendar,
    changeSignalForDeleteBtn
  };
});