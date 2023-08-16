import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSignalsStore = defineStore('signalsStore', () => {
  const signalForCalendar = ref(false);
  const signalForDeleteBtn = ref(false);
  const signalForAlertWindow = ref(false);

  const changeSignalForCalendar = () => signalForCalendar.value = !signalForCalendar.value;
  const changeSignalForDeleteBtn = () => signalForDeleteBtn.value = !signalForDeleteBtn.value;
  const changeSignalForAlertWindow = () => signalForAlertWindow.value = !signalForAlertWindow.value;

  return {
    signalForCalendar,
    signalForDeleteBtn,
    signalForAlertWindow,
    changeSignalForCalendar,
    changeSignalForDeleteBtn,
    changeSignalForAlertWindow
  };
});