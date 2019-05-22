webpackHotUpdate("static/development/pages/taxes.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ "./components/services/ServiceTableExpandable.js":
/*!*******************************************************!*\
  !*** ./components/services/ServiceTableExpandable.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ "./components/services/serviceRowLegal/ServiceRowLegalContent.js":
/*!***********************************************************************!*\
  !*** ./components/services/serviceRowLegal/ServiceRowLegalContent.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ "./pages/taxes.js":
/*!************************!*\
  !*** ./pages/taxes.js ***!
  \************************/
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next-server/dist/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/lib/anime.es.js");
/* harmony import */ var _taxes_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./taxes.json */ "./pages/taxes.json");
var _taxes_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./taxes.json */ "./pages/taxes.json", 1);
/* harmony import */ var _taxesInd_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./taxesInd.json */ "./pages/taxesInd.json");
var _taxesInd_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./taxesInd.json */ "./pages/taxesInd.json", 1);
/* harmony import */ var _components_services_ServiceSwitchTax__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../components/services/ServiceSwitchTax */ "./components/services/ServiceSwitchTax.js");
/* harmony import */ var _components_services_ServiceHeading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../components/services/ServiceHeading */ "./components/services/ServiceHeading.js");
/* harmony import */ var _components_services_ServiceTableExpandable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../components/services/ServiceTableExpandable */ "./components/services/ServiceTableExpandable.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../components/Header */ "./components/Header.js");
/* harmony import */ var _components_taxes_TaxesWrapper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../components/taxes/TaxesWrapper */ "./components/taxes/TaxesWrapper.js");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../css/style.scss */ "./css/style.scss");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_16__);






var _jsxFileName = "/Users/antonalmosov/Desktop/tax-advisor-reborn/pages/taxes.js";












var Taxes =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Taxes, _React$Component);

  function Taxes(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Taxes);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Taxes).call(this, props));
    _this.state = {
      data: _taxes_json__WEBPACK_IMPORTED_MODULE_9__,
      huyata: _taxesInd_json__WEBPACK_IMPORTED_MODULE_10__,
      account: true
    };
    _this.handleChange = _this.handleChange.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Taxes, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(animejs__WEBPACK_IMPORTED_MODULE_8__["default"])({
        targets: '#callButton',
        background: ['linear-gradient(110deg, rgba(255,199,0,1) 0%, rgba(255,254,151,1) 25%, rgba(255,199,0,1) 100%)', 'linear-gradient(110deg, rgba(255,199,0,1) 0%, rgba(255,254,151,1) 75%, rgba(255,199,0,1) 100%)'],
        duration: 2300,
        direction: 'alternate',
        easing: 'cubicBezier(.1, .05, .1, .3)',
        loop: true
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(content) {
      this.setState({
        account: content
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        style: {
          backgroundColor: '#DCC3A6'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "\u041D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u0441\u043E\u0432\u0435\u0442\u043D\u0438\u043A | 3-\u041D\u0414\u0424\u041B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/static/favicon/apple-touch-icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/static/favicon/favicon-32x32.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/static/favicon/favicon-16x16.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "manifest",
        href: "/static/favicon/site.webmanifest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "mask-icon",
        href: "/static/favicon/safari-pinned-tab.svg",
        color: "#6b4f38",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "/static/favicon/favicon.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "msapplication-TileColor",
        content: "#7b5638",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "msapplication-config",
        content: "/static/favicon/browserconfig.xml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "theme-color",
        content: "#ffffff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("style", {
        JSX: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, "\n                        body{\n                            background-color: #DCC3A6;\n                        }\n                    "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_services_ServiceHeading__WEBPACK_IMPORTED_MODULE_12__["default"], {
        heading: "\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043B\u0438\u0446\u0430",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_services_ServiceSwitchTax__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onClick: this.handleChange,
        account: this.state.account,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_taxes_TaxesWrapper__WEBPACK_IMPORTED_MODULE_15__["default"], {
        services: this.state.data.services,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_services_ServiceTableExpandable__WEBPACK_IMPORTED_MODULE_13__["default"], {
        isAccount: this.state.account,
        data: this.state.data.legal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }));
    }
  }]);

  return Taxes;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Taxes);

/***/ })

})
//# sourceMappingURL=taxes.js.e025c71cd8c718f305a4.hot-update.js.map