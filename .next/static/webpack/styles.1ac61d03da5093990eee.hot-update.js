webpackHotUpdate("styles",{

/***/ "./css/index/recomendations.scss":
/*!***************************************!*\
  !*** ./css/index/recomendations.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"recomendationsWrapper":"_3wDPAyxiZWl22uP4rgW7DJ","recomnedations":"_1s08-mC-u35DqhL3Vl6WCo","recomnedationsCarousel":"ibNZeDB9RlYTsRNvgzery","recomendationsCall":"_1BV58QkCHEqqyhu3BQlsIO"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1557496343533");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.1ac61d03da5093990eee.hot-update.js.map