webpackHotUpdate("static/development/pages/organisations.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
        src: "/static/headerClose.svg",
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
        className: _css_header_scss__WEBPACK_IMPORTED_MODULE_7___default.a.headerMenu,
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

/***/ })

})
//# sourceMappingURL=organisations.js.f43217d4a08849b960b8.hot-update.js.map