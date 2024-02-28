import React from "react";
import { useState, useEffect } from "react";
import useCopyDetection from "./useCopyDetection";
import useErrorTracking from "./useErrorTracking";
import usePrintDetection from "./usePrintDetection";
import usePageViewTracking from "./usePageViewTracking";
import useTimeSpentOnPage from "./useTimeSpentOnPage";

export function App(props) {
  // Use the useCopyDetection hook with the callback function

  const handleCopy = (copiedText) => {
    console.log("Copied text:", copiedText);
    // Perform actions with the copied text
  };
  useCopyDetection(handleCopy);
  // error hook
  useErrorTracking();
  // Simulate an error
  const throwError = () => {
    throw new Error("This is a test error");
  };

  // Use the usePrintDetection hook
  const [isPrinting, setIsPrinting] = useState(false);
  const [pageViews, setpageViews] = useState(0);
  usePrintDetection(setIsPrinting);

  // Use the usePageViewTracking hook
  usePageViewTracking();
  useEffect(() => {
    const pageViews = parseInt(
      sessionStorage.getItem("page_view_tracker_page_views"),
      10
    );
    setpageViews(pageViews);
    console.log("Page Views:", pageViews);
  }, []);

  //Time spent hook code
  const timeSpent = useTimeSpentOnPage();

  return (
    <div className="App">
      <h1>Hello Reac sdat.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <h1>Error Tracking Test</h1>
        <button onClick={throwError}>Throw Error</button>
      </div>
      <div>
        <h1>Print Detection Test</h1>
        <p>Is Printing: {isPrinting ? "Yes" : "No"}</p>
      </div>

      <div>
        <h1>Page View Tracking Test</h1>
        <p>Check the console for page view tracking results.</p>
        <p> page Views : {pageViews} </p>
      </div>

      <div>
        <h1>Time Spent On Page Test</h1>
        <p>Time Spent On Page: {timeSpent} seconds</p>
      </div>
    </div>
  );
}

export default App;
