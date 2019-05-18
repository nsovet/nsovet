webpackHotUpdate("styles",{

/***/ "./css/header.scss":
/*!*************************!*\
  !*** ./css/header.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"headerWrapper":"_1GsOjDqIVfQzE0PTy144LV","header":"_2J3Hrr6CpxaPXf0KNc2Yb_","mobileHeader":"_27XSZfM8hq3bfsy_wmHHc0","headerStripe":"_1WSkknde_TQTDUo4zzcdcE","hamburger":"_1drhagZhZDtpEV__wAElLr","logo":"_2F0hSm7UK4RVqSNDpQD67z","headerMenu":"_1q2MbpR-8YiDZIqs2_NqPg","heading":"_2fGisjzxCoGR4IpR1Nkbcf","close":"_1-SwywMgzSa_lHJ7qyA-xp","none":"u1eenh5-KeXB1ZPk47oYa","headerLogo":"_34WC-nn-NHbgcZE5Wgg821","headerMenuWrapper":"BUJipB3UbF7PpbXU__Gxg","headerMenuActive":"_1D8pUt6lpRWrfu1aFyYIvi","headerCallWrapper":"_1HqPX6mfLOiEyutI66LNku"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1558098134038");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.10b707d0fef99750a967.hot-update.js.map