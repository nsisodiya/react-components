/**
 * Created by narendrasisodiya on 17/05/16.
 */

import React from "react";
import ReactDOM from "react-dom";
import HotelsoftUtils from "@hotelsoft/utils";
import ReactFlux from "@nsisodiya/flux";
import ReactCSSModules from "react-css-modules";
import {
  Breadcrumb,
  Button,
  OverlayTrigger,
  Tooltip,
  FormControl,
  DropdownButton,
  MenuItem,
  Table,
  Popover,
  Input,
  FormGroup,
  ControlLabel,
  Tabs,
  Tab,
  Modal,
  Radio
} from "react-bootstrap";
import screenfull from "screenfull/dist/screenfull";
import ReactJsonViewer from "react-json-viewer";
import ReactSyntaxHighlight from "react-syntax-highlight";
import JQuery from "jquery";
import ReactSelect2Wrapper from "react-select2-wrapper";
import moment from "moment";
import DatePicker from "react-datepicker";
import ES6Mixins from "@nsisodiya/es6-mixins";
import langEngine from "lang-engine";
import ReactC3js from "react-c3js";
import uuid from "uuid";

window.React = React;
window.ReactDOM = ReactDOM;
window.HotelsoftUtils = HotelsoftUtils;
window.ReactFlux = ReactFlux;
window.ReactCSSModules = ReactCSSModules;
window.ES6Mixins = ES6Mixins;
window.langEngine = langEngine;
window.UUID = uuid;
import Draggabilly from "draggabilly";
window.ReactBootstrap = {
  Breadcrumb,
  Button,
  DropdownButton,
  MenuItem,
  OverlayTrigger,
  Table,
  Tooltip,
  FormControl,
  Popover,
  Input,
  FormGroup,
  ControlLabel,
  Tabs,
  Tab,
  Modal,
  Radio
};
window.screenfull = screenfull;
window.ReactJsonViewer = ReactJsonViewer;
window.ReactSyntaxHighlight = ReactSyntaxHighlight;
window.JQuery = JQuery;
window.ReactSelect2Wrapper = ReactSelect2Wrapper;
window.moment = moment;
window.DatePicker = DatePicker;
window.ReactC3js = ReactC3js;
window.Draggabilly = Draggabilly;

import "normalize.css/normalize.css";
import "box-sizing.css/box-sizing.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "highlight.js/styles/default.css";
import "highlight.js/styles/dark.css";
import "react-select2-wrapper/css/select2.css";
import "react-datepicker/dist/react-datepicker.css";
import "c3/c3.css";
