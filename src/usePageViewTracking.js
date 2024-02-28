// usePageViewTracking.js
import { useEffect } from "react";

const usePageViewTracking = () => {
  useEffect(() => {
    const uniqueVisitorKey = "page_view_tracker_unique_visitor";
    const pageViewsKey = "page_view_tracker_page_views";

    // Check if the visitor is unique
    const isUniqueVisitor = () => {
      return !sessionStorage.getItem(uniqueVisitorKey);
    };

    // Increment page views
    const incrementPageViews = () => {
      let pageViews = parseInt(sessionStorage.getItem(pageViewsKey), 10) || 0;
      pageViews++;
      sessionStorage.setItem(pageViewsKey, pageViews.toString());
    };

    // Initialize page view tracking
    const init = () => {
      if (isUniqueVisitor()) {
        // Mark the visitor as unique
        sessionStorage.setItem(uniqueVisitorKey, "true");
        // Initialize page views
        sessionStorage.setItem(pageViewsKey, "1");
      } else {
        // Increment page views for returning visitors
        incrementPageViews();
      }
    };

    // Call the init function to initialize page view tracking
    init();
  }, []);

  // No return value as this hook performs a side effect
};

export default usePageViewTracking;
