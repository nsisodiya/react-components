(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-css-modules"), require("react-bootstrap"), require("uuid"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-css-modules", "react-bootstrap", "uuid"], factory);
	else if(typeof exports === 'object')
		exports["ReactComponents"] = factory(require("react"), require("react-css-modules"), require("react-bootstrap"), require("uuid"));
	else
		root["ReactComponents"] = factory(root["react"], root["react-css-modules"], root["react-bootstrap"], root["uuid"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _Icon = __webpack_require__(1);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  Icon: _Icon2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _util = __webpack_require__(3);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _Icon = __webpack_require__(4);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	var _reactCssModules = __webpack_require__(5);
	
	var _reactCssModules2 = _interopRequireDefault(_reactCssModules);
	
	var _reactBootstrap = __webpack_require__(6);
	
	var _uuid = __webpack_require__(7);
	
	var _uuid2 = _interopRequireDefault(_uuid);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Icon = function Icon(props) {
	  var style = _util2.default.clone(props.style);
	  if (props.fast === true) {
	    style.animationDuration = "0.5s";
	  }
	  var mainContent = _react2.default.createElement("i", {
	    style: style,
	    onClick: props.onClick,
	    className: "fa fa-fw fa-" + props.icon + " fa-" + props.size + " " + _util2.default.iff(props.spin, " fa-spin", "") + "\n      " + _util2.default.iff(props.className === undefined, "", props.className) });
	
	  if (props.tooltip !== "") {
	    return _react2.default.createElement(
	      _reactBootstrap.OverlayTrigger,
	      { placement: props.tooltipPlacement, overlay: _react2.default.createElement(
	          _reactBootstrap.Tooltip,
	          { id: "Icon_" + _uuid2.default.v4() },
	          props.tooltip
	        ) },
	      mainContent
	    );
	  } else {
	    return mainContent;
	  }
	};
	
	Icon.propTypes = {
	  style: _react2.default.PropTypes.object,
	  spin: _react2.default.PropTypes.bool,
	  fast: _react2.default.PropTypes.bool,
	  icon: _react2.default.PropTypes.string.isRequired,
	  tooltip: _react2.default.PropTypes.any,
	  size: _react2.default.PropTypes.string,
	  onClick: _react2.default.PropTypes.func,
	  tooltipPlacement: _react2.default.PropTypes.string
	};
	
	Icon.defaultProps = {
	  style: {},
	  spin: false,
	  fast: false,
	  icon: "",
	  tooltip: "",
	  tooltipPlacement: "right",
	  size: "normal",
	  onClick: function onClick() {
	    //TODO
	  }
	};
	
	exports.default = (0, _reactCssModules2.default)(Icon, _Icon2.default);

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Created by narendrasisodiya on 11/03/16.
	 */
	
	module.exports = {
	  clone: function clone(obj) {
	    return JSON.parse(JSON.stringify(obj));
	  },
	  iff: function iff(condition, trueRet, falseRet) {
	    if (condition === true) {
	      return trueRet;
	    } else {
	      return falseRet;
	    }
	  },
	  if_: function if_(condition, trueRet, falseRet) {
	    if (condition === true) {
	      if (typeof trueRet === "function") {
	        return trueRet();
	      }
	      return trueRet;
	    } else {
	      if (typeof falseRet === "function") {
	        return falseRet();
	      }
	      return falseRet;
	    }
	  },
	  mapObject: function mapObject(obj, cb) {
	    var a = [];
	    Object.keys(obj).map(function (key) {
	      a.push(cb(obj[key], key));
	    });
	    return a;
	  }
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"RC_Icon__container"};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=ReactComponents.js.map