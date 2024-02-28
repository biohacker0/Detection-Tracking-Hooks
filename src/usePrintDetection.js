// usePrintDetection.js
import { useEffect } from "react";

const usePrintDetection = (callback) => {
  useEffect(() => {
    const handleBeforePrint = () => {
      callback(true);
    };

    const handleAfterPrint = () => {
      callback(false);
    };

    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);

    return () => {
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, [callback]);
};

export default usePrintDetection;
