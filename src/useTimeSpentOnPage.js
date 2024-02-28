// useTimeSpentOnPage.js
import { useEffect, useState } from "react";

const useTimeSpentOnPage = () => {
  const [timeSpent, setTimeSpent] = useState(0);
  const pageKey = "time_spent_on_page";

  useEffect(() => {
    const startTime =
      parseFloat(sessionStorage.getItem(pageKey)) || performance.now();

    const calculateTimeSpentOnPage = () => {
      const endTime = performance.now();
      const timeSpent = endTime - startTime;
      // Convert time from milliseconds to seconds
      return Math.round(timeSpent / 1000);
    };

    // Update time spent on page every second
    const intervalId = setInterval(() => {
      setTimeSpent(calculateTimeSpentOnPage());
    }, 10000);

    // Cleanup function
    return () => {
      clearInterval(intervalId);
      sessionStorage.setItem(pageKey, startTime.toString()); // Save start time to session storage
    };
  }, [pageKey]);

  return timeSpent;
};

export default useTimeSpentOnPage;
