// useCopyDetection.js
import { useEffect } from "react";

const useCopyDetection = (callback) => {
  useEffect(() => {
    const handleCopy = (event) => {
      const copiedText = window.getSelection().toString();
      callback(copiedText);
    };

    document.addEventListener("copy", handleCopy);

    return () => {
      document.removeEventListener("copy", handleCopy);
    };
  }, [callback]);
};

export default useCopyDetection;
