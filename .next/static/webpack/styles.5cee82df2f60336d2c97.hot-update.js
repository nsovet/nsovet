webpackHotUpdate("styles",{

/***/ "./css/index/promises.scss":
/*!*********************************!*\
  !*** ./css/index/promises.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"promisesWrapper":"_1nBNq0CpJCBE2e5XdeAb8G","anchor":"TQmPXzylsmgsmUeSI4w8r","promises":"_2gKXSglENg-RdbqAAX377-","promisesItems":"_221H0vscTTYbVi9_b2eEnr","promisesItem":"_3OIxEF_XFLaebL1hJm60bG","promisesCall":"TfcVh56c78_77iXY7W5GE"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1557836416322");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.5cee82df2f60336d2c97.hot-update.js.map