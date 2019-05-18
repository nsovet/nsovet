module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_header_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../css/header.scss */ "./css/header.scss");
/* harmony import */ var _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_header_scss__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "/Users/antonalmosov/Desktop/tax-advisor-reborn/components/Header.js";



var Header =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Header, _React$Component);

  function Header(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));
    _this.state = {
      closed: true
    };
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        closed: !this.state.closed
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default.a.headerWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default.a.headerLogo,
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/logo.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default.a.headerMenuWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default.a.headerMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        // className={css.headerMenuActive}
        href: "/#about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "\u041E \u043D\u0430\u0441"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "/#promises",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "\u041F\u0440\u0438\u0435\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "/#services",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "\u0423\u0441\u043B\u0443\u0433\u0438"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "/#map",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default.a.headerCallWrapper,
        href: "tel:8-499-323-43-95",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/phone.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "8 (499) 323-43-95")))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default.a.mobileHeader,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: this.state.closed ? _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default.a.headerStripe : _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default.a.none,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/hamburger.svg",
        className: _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default.a.hamburger,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/logo.svg",
        className: _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default.a.logo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: this.state.closed ? _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default.a.none : _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default.a.headerMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default.a.heading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/closeMenu.svg",
        className: _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default.a.close,
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/logoWhite.svg",
        className: _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default.a.logo,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default.a.headerContent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default.a.menuLinks,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        // className={css.headerMenuActive}
        href: "/#about",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "\u041E \u043D\u0430\u0441"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "/#promises",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "\u041F\u0440\u0438\u0435\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "/#services",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, "\u0423\u0441\u043B\u0443\u0433\u0438"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        href: "/#map",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("a", {
        className: _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default.a.headerCallWrapper,
        href: "tel:8-499-323-43-95",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/phone.svg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, "8 (499) 323-43-95")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default.a.adress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "\u041C\u043E\u0441\u043A\u0432\u0430, \u041A\u0430\u0448\u0438\u0440\u0441\u043A\u043E\u0435 \u0448\u043E\u0441\u0441\u0435,", react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }), "\u0434\u043E\u043C 44, \u043A\u043E\u0440\u043F. 1 ")))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/services/ServiceHeading.js":
/*!***********************************************!*\
  !*** ./components/services/ServiceHeading.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_services_serviceHeading_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../css/services/serviceHeading.scss */ "./css/services/serviceHeading.scss");
/* harmony import */ var _css_services_serviceHeading_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_services_serviceHeading_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/antonalmosov/Desktop/tax-advisor-reborn/components/services/ServiceHeading.js";



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var heading = _ref.heading;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_services_serviceHeading_scss__WEBPACK_IMPORTED_MODULE_2___default.a.taxesWrapperHeader,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/chevronBack.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, heading));
});

/***/ }),

/***/ "./components/services/ServiceRowAccount.js":
/*!**************************************************!*\
  !*** ./components/services/ServiceRowAccount.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_services_serviceRowAccount_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css/services/serviceRowAccount.scss */ "./css/services/serviceRowAccount.scss");
/* harmony import */ var _css_services_serviceRowAccount_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_services_serviceRowAccount_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/antonalmosov/Desktop/tax-advisor-reborn/components/services/ServiceRowAccount.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_services_serviceRowAccount_scss__WEBPACK_IMPORTED_MODULE_1___default.a.serviceRow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, data.title));
});

/***/ }),

/***/ "./components/services/ServiceRowLegal.js":
/*!************************************************!*\
  !*** ./components/services/ServiceRowLegal.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _serviceRowLegal_ServiceRowLegalHeading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./serviceRowLegal/ServiceRowLegalHeading */ "./components/services/serviceRowLegal/ServiceRowLegalHeading.js");
/* harmony import */ var _serviceRowLegal_ServiceRowLegalContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./serviceRowLegal/ServiceRowLegalContent */ "./components/services/serviceRowLegal/ServiceRowLegalContent.js");
/* harmony import */ var _css_services_serviceRowLegal_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../css/services/serviceRowLegal.scss */ "./css/services/serviceRowLegal.scss");
/* harmony import */ var _css_services_serviceRowLegal_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_css_services_serviceRowLegal_scss__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/antonalmosov/Desktop/tax-advisor-reborn/components/services/ServiceRowLegal.js";





var ServiceRowLegal =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ServiceRowLegal, _React$Component);

  function ServiceRowLegal(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ServiceRowLegal);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ServiceRowLegal).call(this, props));
    _this.state = {
      isExpanded: false
    };
    _this.expandHandler = _this.expandHandler.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ServiceRowLegal, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: _css_services_serviceRowLegal_scss__WEBPACK_IMPORTED_MODULE_9___default.a.serviceRow,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_serviceRowLegal_ServiceRowLegalHeading__WEBPACK_IMPORTED_MODULE_7__["default"], {
        expand: this.expandHandler,
        title: this.props.data.title,
        isExpanded: this.state.isExpanded,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_serviceRowLegal_ServiceRowLegalContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
        isExpanded: this.state.isExpanded,
        data: this.props.data,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }));
    }
  }, {
    key: "expandHandler",
    value: function expandHandler() {
      this.setState({
        isExpanded: !this.state.isExpanded
      });
    }
  }]);

  return ServiceRowLegal;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ServiceRowLegal);

/***/ }),

/***/ "./components/services/ServiceSwitch.js":
/*!**********************************************!*\
  !*** ./components/services/ServiceSwitch.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_services_serviceSwitch_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../css/services/serviceSwitch.scss */ "./css/services/serviceSwitch.scss");
/* harmony import */ var _css_services_serviceSwitch_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_services_serviceSwitch_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/antonalmosov/Desktop/tax-advisor-reborn/components/services/ServiceSwitch.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var onClick = _ref.onClick,
      account = _ref.account;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_services_serviceSwitch_scss__WEBPACK_IMPORTED_MODULE_1___default.a.serviceSwitchWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: onClick.bind(null, true),
    className: _css_services_serviceSwitch_scss__WEBPACK_IMPORTED_MODULE_1___default.a.serviceSwitchItem,
    id: account ? '' : _css_services_serviceSwitch_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "\u0411\u0443\u0445\u0433\u0430\u043B\u0442\u0435\u0440\u0438\u044F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: onClick.bind(null, false),
    className: _css_services_serviceSwitch_scss__WEBPACK_IMPORTED_MODULE_1___default.a.serviceSwitchItem,
    id: account ? _css_services_serviceSwitch_scss__WEBPACK_IMPORTED_MODULE_1___default.a.active : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u0443\u0441\u043B\u0443\u0433\u0438"));
});

/***/ }),

/***/ "./components/services/ServiceTableExpandable.js":
/*!*******************************************************!*\
  !*** ./components/services/ServiceTableExpandable.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ServiceRowLegal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceRowLegal */ "./components/services/ServiceRowLegal.js");
/* harmony import */ var _css_services_serviceTableExpandable_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/services/serviceTableExpandable.scss */ "./css/services/serviceTableExpandable.scss");
/* harmony import */ var _css_services_serviceTableExpandable_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_services_serviceTableExpandable_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/antonalmosov/Desktop/tax-advisor-reborn/components/services/ServiceTableExpandable.js";



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var isAccount = _ref.isAccount,
      data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: isAccount ? _css_services_serviceTableExpandable_scss__WEBPACK_IMPORTED_MODULE_2___default.a.none : _css_services_serviceTableExpandable_scss__WEBPACK_IMPORTED_MODULE_2___default.a.serviceTableWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, data.map(function (el) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ServiceRowLegal__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: el,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }));
});

/***/ }),

/***/ "./components/services/ServiceTableNormal.js":
/*!***************************************************!*\
  !*** ./components/services/ServiceTableNormal.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ServiceRowAccount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceRowAccount */ "./components/services/ServiceRowAccount.js");
/* harmony import */ var _css_services_serviceTableNormal_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../css/services/serviceTableNormal.scss */ "./css/services/serviceTableNormal.scss");
/* harmony import */ var _css_services_serviceTableNormal_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_services_serviceTableNormal_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/antonalmosov/Desktop/tax-advisor-reborn/components/services/ServiceTableNormal.js";



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var isAccount = _ref.isAccount,
      data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: isAccount ? _css_services_serviceTableNormal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.servicesTableWrapper : _css_services_serviceTableNormal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.none,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, data.map(function (e) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ServiceRowAccount__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: e,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: _css_services_serviceTableNormal_scss__WEBPACK_IMPORTED_MODULE_2___default.a.servicesCall,
    href: "tel:8-499-323-43-95",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/phoneWhite.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "\u0423\u0437\u043D\u0430\u0442\u044C \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C")));
});

/***/ }),

/***/ "./components/services/serviceRowLegal/ServiceRowLegalContent.js":
/*!***********************************************************************!*\
  !*** ./components/services/serviceRowLegal/ServiceRowLegalContent.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ServiceRowLegalContentTableRow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ServiceRowLegalContentTableRow */ "./components/services/serviceRowLegal/ServiceRowLegalContentTableRow.js");
/* harmony import */ var _css_services_serviceRowLegalContent_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../css/services/serviceRowLegalContent.scss */ "./css/services/serviceRowLegalContent.scss");
/* harmony import */ var _css_services_serviceRowLegalContent_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_services_serviceRowLegalContent_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/antonalmosov/Desktop/tax-advisor-reborn/components/services/serviceRowLegal/ServiceRowLegalContent.js";



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var isExpanded = _ref.isExpanded,
      data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: isExpanded ? _css_services_serviceRowLegalContent_scss__WEBPACK_IMPORTED_MODULE_2___default.a.serviceRowContent : _css_services_serviceRowLegalContent_scss__WEBPACK_IMPORTED_MODULE_2___default.a.none,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_services_serviceRowLegalContent_scss__WEBPACK_IMPORTED_MODULE_2___default.a.serviceRowDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/info.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, data.description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_services_serviceRowLegalContent_scss__WEBPACK_IMPORTED_MODULE_2___default.a.serviceRowTable,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_services_serviceRowLegalContent_scss__WEBPACK_IMPORTED_MODULE_2___default.a.serviceRowTableHeading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_services_serviceRowLegalContent_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rowTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "\u0423\u0441\u043B\u0443\u0433\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_services_serviceRowLegalContent_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rowPrice,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0441\u043B\u0443\u0433"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_services_serviceRowLegalContent_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rowTax,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "\u0413\u043E\u0441. \u043F\u043E\u0448\u043B\u0438\u043D\u0430"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_services_serviceRowLegalContent_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rowFee,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "\u041D\u043E\u0442\u0430\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0430\u0441\u0445\u043E\u0434\u044B")), data.servicesArray.map(function (el) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ServiceRowLegalContentTableRow__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: el,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    });
  })));
});

/***/ }),

/***/ "./components/services/serviceRowLegal/ServiceRowLegalContentTableRow.js":
/*!*******************************************************************************!*\
  !*** ./components/services/serviceRowLegal/ServiceRowLegalContentTableRow.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_services_serviceRowLegalContentTableRow_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css/services/serviceRowLegalContentTableRow.scss */ "./css/services/serviceRowLegalContentTableRow.scss");
/* harmony import */ var _css_services_serviceRowLegalContentTableRow_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_services_serviceRowLegalContentTableRow_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/antonalmosov/Desktop/tax-advisor-reborn/components/services/serviceRowLegal/ServiceRowLegalContentTableRow.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var data = _ref.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_services_serviceRowLegalContentTableRow_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tableRowWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_services_serviceRowLegalContentTableRow_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rowTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, data.serviceTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_services_serviceRowLegalContentTableRow_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rowPrice,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, data.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_services_serviceRowLegalContentTableRow_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rowTax,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, data.tax), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_services_serviceRowLegalContentTableRow_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rowFee,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, data.fee));
});

/***/ }),

/***/ "./components/services/serviceRowLegal/ServiceRowLegalHeading.js":
/*!***********************************************************************!*\
  !*** ./components/services/serviceRowLegal/ServiceRowLegalHeading.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_services_serviceRowLegalHeading_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css/services/serviceRowLegalHeading.scss */ "./css/services/serviceRowLegalHeading.scss");
/* harmony import */ var _css_services_serviceRowLegalHeading_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_services_serviceRowLegalHeading_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/antonalmosov/Desktop/tax-advisor-reborn/components/services/serviceRowLegal/ServiceRowLegalHeading.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var title = _ref.title,
      expand = _ref.expand,
      isExpanded = _ref.isExpanded;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _css_services_serviceRowLegalHeading_scss__WEBPACK_IMPORTED_MODULE_1___default.a.serviceRowHeading,
    onClick: expand,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: isExpanded ? _css_services_serviceRowLegalHeading_scss__WEBPACK_IMPORTED_MODULE_1___default.a.rotate : '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "+"));
});

/***/ }),

/***/ "./css/header.scss":
/*!*************************!*\
  !*** ./css/header.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"headerWrapper": "_1GsOjDqIVfQzE0PTy144LV",
	"header": "_2J3Hrr6CpxaPXf0KNc2Yb_",
	"mobileHeader": "_27XSZfM8hq3bfsy_wmHHc0",
	"headerStripe": "_1WSkknde_TQTDUo4zzcdcE",
	"hamburger": "_1drhagZhZDtpEV__wAElLr",
	"logo": "_2F0hSm7UK4RVqSNDpQD67z",
	"headerMenu": "_1q2MbpR-8YiDZIqs2_NqPg",
	"heading": "_2fGisjzxCoGR4IpR1Nkbcf",
	"close": "_1-SwywMgzSa_lHJ7qyA-xp",
	"headerContent": "gOC6d5AKJqCnV2e_ZgtZE",
	"menuLinks": "_1MCkXUIyCXSeDmtvVSls1o",
	"headerCallWrapper": "_1HqPX6mfLOiEyutI66LNku",
	"adress": "cqDompS4suTbCftLrRhBJ",
	"none": "u1eenh5-KeXB1ZPk47oYa",
	"headerLogo": "_34WC-nn-NHbgcZE5Wgg821",
	"headerMenuWrapper": "BUJipB3UbF7PpbXU__Gxg",
	"headerMenuActive": "_1D8pUt6lpRWrfu1aFyYIvi"
};

/***/ }),

/***/ "./css/services/serviceHeading.scss":
/*!******************************************!*\
  !*** ./css/services/serviceHeading.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"taxesWrapperHeader": "_2OgTja8k__TNLY1yeY7MqM"
};

/***/ }),

/***/ "./css/services/serviceRowAccount.scss":
/*!*********************************************!*\
  !*** ./css/services/serviceRowAccount.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"serviceRow": "_1zAOdYmqtk3VjbRbw2vgHW"
};

/***/ }),

/***/ "./css/services/serviceRowLegal.scss":
/*!*******************************************!*\
  !*** ./css/services/serviceRowLegal.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"serviceRow": "yD1aSexfM3oC3lJ1-SW_n"
};

/***/ }),

/***/ "./css/services/serviceRowLegalContent.scss":
/*!**************************************************!*\
  !*** ./css/services/serviceRowLegalContent.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"none": "_20tJkfsA8g4AgPVJJ_wOtF",
	"serviceRowContent": "O5pJdJVv8vu1-h1npp_NV",
	"serviceRowDescription": "_3mOBXTzrFrFF2aFUPh_2Ix",
	"serviceRowTable": "_3wXHFPpDILSKJF_RNmi54D",
	"serviceRowTableHeading": "cG1bhICISyU_JRrPXAyaN",
	"rowTitle": "_3-2o6i0vwYe8jfX5hOXef",
	"rowPrice": "_3mf3-mBaOl-UhqOQeiRoXG",
	"rowTax": "aaFVhgWw_IQ9D0sORUSSW",
	"rowFee": "_2j_u_IUeHxlAaa2myX_zXm"
};

/***/ }),

/***/ "./css/services/serviceRowLegalContentTableRow.scss":
/*!**********************************************************!*\
  !*** ./css/services/serviceRowLegalContentTableRow.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"tableRowWrapper": "_2LuN9Tuvjz56o2f9SQ1SKW",
	"rowTitle": "_1zJAEh7Znn5vSyRqiRIELh",
	"rowPrice": "_1CLHtyU17WbYVmJBMjQTSD",
	"rowTax": "_391qQCldH9ZNIczDUUFVSX",
	"rowFee": "rA55_pLxYhzQjuqVM8mdV"
};

/***/ }),

/***/ "./css/services/serviceRowLegalHeading.scss":
/*!**************************************************!*\
  !*** ./css/services/serviceRowLegalHeading.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"serviceRowHeading": "_1YkKW2IGimGV-_c4iYBGhW",
	"rotate": "_1c23ZdQsy_bdu8Absj4EQ4"
};

/***/ }),

/***/ "./css/services/serviceSwitch.scss":
/*!*****************************************!*\
  !*** ./css/services/serviceSwitch.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"serviceSwitchWrapper": "uGE2IlIOaK3g_mdjYLIbi",
	"serviceSwitchItem": "_2Kgm7c5laEwLC5031f8W-O",
	"active": "_3-C_ilEiVucM_lrVQ_k-j0"
};

/***/ }),

/***/ "./css/services/serviceTableExpandable.scss":
/*!**************************************************!*\
  !*** ./css/services/serviceTableExpandable.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"none": "_3dhjlg8jBHdWaaKrBsfJ7u",
	"serviceTableWrapper": "Yc6eTrSe18WnGet_jqXg0"
};

/***/ }),

/***/ "./css/services/serviceTableNormal.scss":
/*!**********************************************!*\
  !*** ./css/services/serviceTableNormal.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"servicesTableWrapper": "_2jVXPCcd1gYmEbjft47s1H",
	"servicesCall": "_1rnasSgcUjYbLwlBY_b6Qn",
	"none": "BNh2wcYNpbJFfx537TC66"
};

/***/ }),

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/individuals.js":
/*!******************************!*\
  !*** ./pages/individuals.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_services_ServiceSwitch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/services/ServiceSwitch */ "./components/services/ServiceSwitch.js");
/* harmony import */ var _components_services_ServiceHeading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/services/ServiceHeading */ "./components/services/ServiceHeading.js");
/* harmony import */ var _components_services_ServiceTableNormal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/services/ServiceTableNormal */ "./components/services/ServiceTableNormal.js");
/* harmony import */ var _components_services_ServiceTableExpandable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/services/ServiceTableExpandable */ "./components/services/ServiceTableExpandable.js");
/* harmony import */ var _individuals_json__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./individuals.json */ "./pages/individuals.json");
var _individuals_json__WEBPACK_IMPORTED_MODULE_13___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./individuals.json */ "./pages/individuals.json", 1);
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../css/style.scss */ "./css/style.scss");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_14__);






var _jsxFileName = "/Users/antonalmosov/Desktop/tax-advisor-reborn/pages/individuals.js";


 // import ServiceTable from '../components/services/ServiceTable'








var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Index, _React$Component);

  function Index() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this));
    _this.state = {
      account: true,
      data: _individuals_json__WEBPACK_IMPORTED_MODULE_13__
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, "\u041D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u0441\u043E\u0432\u0435\u0442\u043D\u0438\u043A | \u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u0438")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("style", {
        JSX: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "\n                    body{\n                        background-color: #DCC3A6;\n                    }\n                "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_services_ServiceHeading__WEBPACK_IMPORTED_MODULE_10__["default"], {
        heading: "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u0438",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_services_ServiceSwitch__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onClick: this.handleChange,
        account: this.state.account,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_services_ServiceTableNormal__WEBPACK_IMPORTED_MODULE_11__["default"], {
        isAccount: this.state.account,
        data: this.state.data.account,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_services_ServiceTableExpandable__WEBPACK_IMPORTED_MODULE_12__["default"], {
        isAccount: this.state.account,
        data: this.state.data.legal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }));
    }
  }, {
    key: "handleChange",
    value: function handleChange(content) {
      this.setState({
        account: content
      });
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./pages/individuals.json":
/*!********************************!*\
  !*** ./pages/individuals.json ***!
  \********************************/
/*! exports provided: account, legal, default */
/***/ (function(module) {

module.exports = {"account":[{"title":"Постановка бухгалтерского учета с нуля"},{"title":"Бухгалтерское сопровождение"},{"title":"Помощь в подготовке технической документации"},{"title":"Расчет заработной платы, зачисление налогов и взносов c заработной платы"}],"legal":[{"title":"Консультация","description":"Подготовка пакета документов для государственной регистрации юридических лиц в Едином государственном реестре юридических лиц является не простой задачей. Наши специалисты, имея соответствующий опыт и ежедневную практику быстро и качественно подготовят необходимые документы, помогут оформить их в соответствие с требованиями законодательства, подадут и получат готовые документы в регистрирующем органе","servicesArray":[{"serviceTitle":"Создание  ООО, ПАО, АО","price":"7700₽","tax":"4000₽","fee":"3400₽"},{"serviceTitle":"Создание  ООО, ПАО, АО","price":"7700₽","tax":"4000₽","fee":"3400₽"}]},{"title":"Разработка договора","description":"Подготовка пакета документов для государственной регистрации юридических лиц в Едином государственном реестре юридических лиц является не простой задачей. Наши специалисты, имея соответствующий опыт и ежедневную практику быстро и качественно подготовят необходимые документы, помогут оформить их в соответствие с требованиями законодательства, подадут и получат готовые документы в регистрирующем органе","servicesArray":[{"serviceTitle":"Создание  ООО, ПАО, АО","price":"7700₽","tax":"4000₽","fee":"3400₽"},{"serviceTitle":"Создание  ООО, ПАО, АО","price":"7700₽","tax":"4000₽","fee":"3400₽"}]},{"title":"Согласование договора","description":"Подготовка пакета документов для государственной регистрации юридических лиц в Едином государственном реестре юридических лиц является не простой задачей. Наши специалисты, имея соответствующий опыт и ежедневную практику быстро и качественно подготовят необходимые документы, помогут оформить их в соответствие с требованиями законодательства, подадут и получат готовые документы в регистрирующем органе","servicesArray":[{"serviceTitle":"Создание  ООО, ПАО, АО","price":"7700₽","tax":"4000₽","fee":"3400₽"},{"serviceTitle":"Создание  ООО, ПАО, АО","price":"7700₽","tax":"4000₽","fee":"3400₽"}]},{"title":"Претензия","description":"Подготовка пакета документов для государственной регистрации юридических лиц в Едином государственном реестре юридических лиц является не простой задачей. Наши специалисты, имея соответствующий опыт и ежедневную практику быстро и качественно подготовят необходимые документы, помогут оформить их в соответствие с требованиями законодательства, подадут и получат готовые документы в регистрирующем органе","servicesArray":[{"serviceTitle":"Создание  ООО, ПАО, АО","price":"7700₽","tax":"4000₽","fee":"3400₽"},{"serviceTitle":"Создание  ООО, ПАО, АО","price":"7700₽","tax":"4000₽","fee":"3400₽"}]},{"title":"Подготовка иска и участие в деле ","description":"Подготовка пакета документов для государственной регистрации юридических лиц в Едином государственном реестре юридических лиц является не простой задачей. Наши специалисты, имея соответствующий опыт и ежедневную практику быстро и качественно подготовят необходимые документы, помогут оформить их в соответствие с требованиями законодательства, подадут и получат готовые документы в регистрирующем органе","servicesArray":[{"serviceTitle":"Создание  ООО, ПАО, АО","price":"7700₽","tax":"4000₽","fee":"3400₽"},{"serviceTitle":"Создание  ООО, ПАО, АО","price":"7700₽","tax":"4000₽","fee":"3400₽"}]}]};

/***/ }),

/***/ 6:
/*!************************************!*\
  !*** multi ./pages/individuals.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/antonalmosov/Desktop/tax-advisor-reborn/pages/individuals.js */"./pages/individuals.js");


/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=individuals.js.map