webpackHotUpdate("styles",{

/***/ "./css/index/factoids.scss":
/*!*********************************!*\
  !*** ./css/index/factoids.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"factoidsWrapper":"_1kU9lyierBqlNdYh83wAWu","factoids":"_1PdhGz_dV4gk0xUkYsk5oa","factoidsItems":"_217_TtfXEUx-W0PiMa11bt","factoidsItem":"_2hMI762Tmlp3Br-aLxxLTN"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1557922041006");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.23283528b39d3f5e1ead.hot-update.js.map