// useErrorTracking.js
import { useEffect } from "react";

const useErrorTracking = () => {
  useEffect(() => {
    const trackError = (message, source, lineno, colno, error) => {
      console.error(
        "Error:",
        message,
        "at",
        source,
        "line",
        lineno,
        "column",
        colno
      );
      // You can send the error details to a server for further analysis or reporting
    };

    const init = () => {
      window.onerror = trackError;
    };

    init();

    return () => {
      window.onerror = null; // Remove the error event handler on unmount
    };
  }, []); // Empty dependency array to ensure this effect runs only once

  // No return value as this hook performs a side effect
};

export default useErrorTracking;
