webpackHotUpdate("static/development/pages/taxes.js",{

/***/ "./components/services/ServiceHeading.js":
/*!***********************************************!*\
  !*** ./components/services/ServiceHeading.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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

/***/ "./components/services/ServiceSwitchTax.js":
/*!*************************************************!*\
  !*** ./components/services/ServiceSwitchTax.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_services_serviceSwitch_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../css/services/serviceSwitch.scss */ "./css/services/serviceSwitch.scss");
/* harmony import */ var _css_services_serviceSwitch_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_services_serviceSwitch_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/antonalmosov/Desktop/tax-advisor-reborn/components/services/ServiceSwitchTax.js";


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
  }, "\u0417\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u0434\u0435\u043A\u043B\u0430\u0440\u0430\u0446\u0438\u0439"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
/* harmony import */ var _taxesInd_json__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./taxesInd.json */ "./pages/taxesInd.json");
var _taxesInd_json__WEBPACK_IMPORTED_MODULE_16___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./taxesInd.json */ "./pages/taxesInd.json", 1);
/* harmony import */ var _components_services_ServiceSwitchTax__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../components/services/ServiceSwitchTax */ "./components/services/ServiceSwitchTax.js");
/* harmony import */ var _components_services_ServiceHeading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../components/services/ServiceHeading */ "./components/services/ServiceHeading.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../components/Header */ "./components/Header.js");
/* harmony import */ var _components_taxes_TaxesWrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../components/taxes/TaxesWrapper */ "./components/taxes/TaxesWrapper.js");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../css/style.scss */ "./css/style.scss");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_css_style_scss__WEBPACK_IMPORTED_MODULE_15__);






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
      hyata: hyata,
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
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "\u041D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0439 \u0441\u043E\u0432\u0435\u0442\u043D\u0438\u043A | 3-\u041D\u0414\u0424\u041B"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/static/favicon/apple-touch-icon.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/static/favicon/favicon-32x32.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/static/favicon/favicon-16x16.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "manifest",
        href: "/static/favicon/site.webmanifest",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "mask-icon",
        href: "/static/favicon/safari-pinned-tab.svg",
        color: "#6b4f38",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("link", {
        rel: "shortcut icon",
        href: "/static/favicon/favicon.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "msapplication-TileColor",
        content: "#7b5638",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "msapplication-config",
        content: "/static/favicon/browserconfig.xml",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("meta", {
        name: "theme-color",
        content: "#ffffff",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("style", {
        JSX: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "\n                        body{\n                            background-color: #DCC3A6;\n                        }\n                    "), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_services_ServiceHeading__WEBPACK_IMPORTED_MODULE_12__["default"], {
        heading: "\u0424\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043B\u0438\u0446\u0430",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_services_ServiceSwitchTax__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onClick: this.handleChange,
        account: this.state.account,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_taxes_TaxesWrapper__WEBPACK_IMPORTED_MODULE_14__["default"], {
        services: this.state.data.services,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ServiceTableExpandable, {
        isAccount: this.state.account,
        data: this.state.data.legal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }));
    }
  }]);

  return Taxes;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Taxes);

/***/ }),

/***/ "./pages/taxesInd.json":
/*!*****************************!*\
  !*** ./pages/taxesInd.json ***!
  \*****************************/
/*! exports provided: legal, default */
/***/ (function(module) {

module.exports = {"legal":[{"title":"Представительство в судах общей юрисдикции","description":"Специалисты нашей компании помогут Вам: взыскать долги по любым видам договоров. Разрешить в суде трудовые споры, семейные споры, жилищные споры, споры о наследстве и другие споры.","servicesArray":[{"serviceTitle":"Подготовка иска с участием в деле","price":"От 30000₽","tax":"0"},{"serviceTitle":"Подготовка иска","price":"От 15000₽","tax":"0"},{"serviceTitle":"Подготовка и подача иска  при заочном рассмотрении","price":"От 10000₽","tax":"0"},{"serviceTitle":"Участие в деле на стороне ответчика","price":"От 30000₽","tax":"0"},{"serviceTitle":"Подготовка отзыва на иск ","price":"От 15000₽","tax":"0"}]},{"title":"Банкротство физических лиц","description":"Представление интересов должника и кредитора в арбитражном суде в любой стадии процесса.","servicesArray":[{"serviceTitle":"Заявление должника, физического лица, о банкротстве","price":"От 15000₽","tax":"0"},{"serviceTitle":"Подготовка иска","price":"От 25000₽","tax":"0"}]}]};

/***/ })

})
//# sourceMappingURL=taxes.js.c68fa0195aafb0d79740.hot-update.js.map