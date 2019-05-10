webpackHotUpdate("styles",{

/***/ "./css/index/starter.scss":
/*!********************************!*\
  !*** ./css/index/starter.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"starterWrapper":"_1BDeTWFB710CNfQQ32IuZf","starter":"_2rpBUzv5hsNNCITeeMW1BQ","starterAdress":"GotsD5-A5Ixa_MiZxCbzo","starterInfo":"_4cddlZ6efLmaurqIRoL95","starterButton":"_1gj_guhHLVXibyIgaSmRFN"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1557489529219");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.1b668924dff9726d4f25.hot-update.js.map