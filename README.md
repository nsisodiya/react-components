# sample-react-component-lib
How to build this repo

```
npm install
npm run server
```

# Purpose and Problem with current code
This repo is working fine. It is meant for a small collections of Reusable React Components. like React-Bootstrap.
Repo include 2 main section. 
1. Actual Code
2. Code to Showing Demo of Components.

But there is a minor problem.
In order to make demo page working, I have to include some variable like this

```
import React from "react";
import ReactDOM from "react-dom";
import ReactCSSModules from "react-css-modules";
import {
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import uuid from "uuid";

window.React = React;
window.ReactDOM = ReactDOM;
window.ReactCSSModules = ReactCSSModules;
window.UUID = uuid;
window.ReactBootstrap = {
  OverlayTrigger,
  Tooltip
};
```


This is the problem which I am facing. I want to remove this hack. If you know the solution then fork and send me pull request !!

