webpackHotUpdate("styles",{

/***/ "./css/services/serviceSwitch.scss":
/*!*****************************************!*\
  !*** ./css/services/serviceSwitch.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"serviceSwitchWrapper":"uGE2IlIOaK3g_mdjYLIbi","serviceSwitchItem":"_2Kgm7c5laEwLC5031f8W-O","active":"_3-C_ilEiVucM_lrVQ_k-j0"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1558105031810");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.083554dec8ae6e91025f.hot-update.js.map