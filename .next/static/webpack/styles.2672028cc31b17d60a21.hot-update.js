webpackHotUpdate("styles",{

/***/ "./css/index/services.scss":
/*!*********************************!*\
  !*** ./css/index/services.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"servicesWrapper":"_2rHGVqq8zdq_rfL1-j3stL","services":"_2hqb4R157uTBjkcXJNOIqk","servicesItems":"BMkYUbNqRZ4IhMA1X2K8K"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1557495205371");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.2672028cc31b17d60a21.hot-update.js.map