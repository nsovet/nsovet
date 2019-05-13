webpackHotUpdate("styles",{

/***/ "./css/taxes/taxesWrapper.scss":
/*!*************************************!*\
  !*** ./css/taxes/taxesWrapper.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"taxesWrapper":"_2izmYIB1xldhc4LZxzBMJM","taxesWrapperHeader":"_3JynlvfOZnP2LD1Wb15aJ5","taxesCardsWrapper":"q293GYz91Xiq7FNzPkLTv"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1557754112735");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.0791be55ef98e84e2cb1.hot-update.js.map