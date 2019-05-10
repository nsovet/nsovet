webpackHotUpdate("styles",{

/***/ "./css/index/recomendations.scss":
/*!***************************************!*\
  !*** ./css/index/recomendations.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"recomendationsWrapper":"_3wDPAyxiZWl22uP4rgW7DJ","recomendations":"_3-voqUoYXNR7H5-XgE4bkT","recomendationsCarousel":"_84i7yd9LdiXaCfroeZxCQ","recomendationsCall":"_1BV58QkCHEqqyhu3BQlsIO"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1557496404786");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.29361be731133f5a366c.hot-update.js.map