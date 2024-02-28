This repository contains custom React hooks designed to enhance your application's functionality in various aspects including copy detection, error tracking, print detection, page view tracking, and measuring time spent on a page.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
    - [useCopyDetection](#usecopydetection)
    - [useErrorTracking](#useerrortracking)
    - [usePrintDetection](#useprintdetection)
    - [usePageViewTracking](#usepageviewtracking)
    - [useTimeSpentOnPage](#usetimespentonpage)

## Introduction

This collection of custom hooks provides convenient solutions to common problems faced in web development when working with React applications. Each hook serves a specific purpose and can be easily integrated into your project to enhance user experience and developer productivity.

## Installation

To use these custom hooks in your React project, you can simply copy the hook files (`useCopyDetection.js`, `useErrorTracking.js`, `usePrintDetection.js`, `usePageViewTracking.js`, `useTimeSpentOnPage.js`) into your project's directory. Make sure to adjust the import paths according to your project structure.

## Usage

### useCopyDetection

This hook detects when text is copied on the webpage and invokes a callback function with the copied text as a parameter.

```javascript
import { useState } from 'react';
import useCopyDetection from './useCopyDetection';

const App = () => {
  const handleCopy = (copiedText) => {
    console.log("Copied text:", copiedText);
    // Perform actions with the copied text
  };
  useCopyDetection(handleCopy);

  return (
    // Your JSX components
  );
};

```

### useErrorTracking

This hook tracks errors that occur within your application and sends them to a designated error tracking service.

```javascript
import useErrorTracking from './useErrorTracking';

const App = () => {
   useErrorTracking();
  // Simulate an error
  const throwError = () => {
    throw new Error("This is a test error");
  };

  return (
         <div>
        <h1>Error Tracking Test</h1>
        <button onClick={throwError}>Throw Error</button>
      </div>
  );
};

```

### usePrintDetection

This hook detects when the user initiates a print action on the webpage.

```javascript
import { useState } from 'react';
import usePrintDetection from './usePrintDetection';

const App = () => {
  const [isPrinting, setIsPrinting] = useState(false);
  usePrintDetection(setIsPrinting);

  return (
        <div>
        <h1>Print Detection Test</h1>
        <p>Is Printing: {isPrinting ? "Yes" : "No"}</p>
      </div>
  );
}

```

### usePageViewTracking

This hook tracks the number of page views using session storage.

```javascript
import { useEffect, useState } from 'react';
import usePageViewTracking from './usePageViewTracking';

const App = () => {
  const [pageViews, setPageViews] = useState(0);

  useEffect(() => {
    const pageViews = parseInt(sessionStorage.getItem("page_view_tracker_page_views"), 10) || 0;
    setPageViews(pageViews);
    console.log("Page Views:", pageViews);
  }, []);

  usePageViewTracking(); // Make sure to call usePageViewTracking after initializing the state

  return (
    // Your JSX components
  );
};

```

### useTimeSpentOnPage

This hook measures the time spent by the user on the current page.

```javascript
import useTimeSpentOnPage from './useTimeSpentOnPage';

const App = () => {
  const timeSpent = useTimeSpentOnPage();

  return (
        <div>
        <h1>Time Spent On Page Test</h1>
        <p>Time Spent On Page: {timeSpent} seconds</p>
      </div>
  );
};


```
