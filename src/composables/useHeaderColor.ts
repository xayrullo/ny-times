import { ref } from "vue";

const color = ref("#000000");
export const useHeaderColor = () => {
  function setColor(code: string) {
    color.value = code;
  }

  return {
    setColor,
    color,
  };
};
