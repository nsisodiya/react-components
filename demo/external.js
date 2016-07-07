/**
 * Created by narendrasisodiya on 17/05/16.
 */

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

import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
