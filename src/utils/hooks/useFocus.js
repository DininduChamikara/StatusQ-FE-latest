import { useRef } from "react";

const useFocus = () => {
  const HTMLInputRef = useRef(null);

  const setFocus = () => {
    HTMLInputRef.current && HTMLInputRef.current.focus();
  };

  return [HTMLInputRef, setFocus];
};

export default useFocus;
