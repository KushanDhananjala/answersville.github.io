!function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function (e) {
  function t(t) {
    var r = t || window.event, l = s.call(arguments, 1), c = 0, u = 0, h = 0, f = 0, m = 0, p = 0;
    if (t = e.event.fix(r), t.type = "mousewheel", "detail" in r && (h = -1 * r.detail), "wheelDelta" in r && (h = r.wheelDelta), "wheelDeltaY" in r && (h = r.wheelDeltaY), "wheelDeltaX" in r && (u = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (u = -1 * h, h = 0), c = 0 === h ? u : h, "deltaY" in r && (h = -1 * r.deltaY, c = h), "deltaX" in r && (u = r.deltaX, 0 === h && (c = -1 * u)), 0 !== h || 0 !== u) {
      if (1 === r.deltaMode) {
        var g = e.data(this, "mousewheel-line-height");
        c *= g, h *= g, u *= g
      } else if (2 === r.deltaMode) {
        var v = e.data(this, "mousewheel-page-height");
        c *= v, h *= v, u *= v
      }
      if (f = Math.max(Math.abs(h), Math.abs(u)), (!i || i > f) && (i = f, n(r, f) && (i /= 40)), n(r, f) && (c /= 40, u /= 40, h /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / i), u = Math[u >= 1 ? "floor" : "ceil"](u / i), h = Math[h >= 1 ? "floor" : "ceil"](h / i), d.settings.normalizeOffset && this.getBoundingClientRect) {
        var x = this.getBoundingClientRect();
        m = t.clientX - x.left, p = t.clientY - x.top
      }
      return t.deltaX = u, t.deltaY = h, t.deltaFactor = i, t.offsetX = m, t.offsetY = p, t.deltaMode = 0, l.unshift(t, c, u, h), a && clearTimeout(a), a = setTimeout(o, 200), (e.event.dispatch || e.event.handle).apply(this, l)
    }
  }

  function o() {
    i = null
  }

  function n(e, t) {
    return d.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
  }

  var a, i, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    l = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
    s = Array.prototype.slice;
  if (e.event.fixHooks) for (var c = r.length; c;) e.event.fixHooks[r[--c]] = e.event.mouseHooks;
  var d = e.event.special.mousewheel = {
    version: "3.1.12", setup: function () {
      if (this.addEventListener) for (var o = l.length; o;) this.addEventListener(l[--o], t, !1); else this.onmousewheel = t;
      e.data(this, "mousewheel-line-height", d.getLineHeight(this)), e.data(this, "mousewheel-page-height", d.getPageHeight(this))
    }, teardown: function () {
      if (this.removeEventListener) for (var o = l.length; o;) this.removeEventListener(l[--o], t, !1); else this.onmousewheel = null;
      e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
    }, getLineHeight: function (t) {
      var o = e(t), n = o["offsetParent" in e.fn ? "offsetParent" : "parent"]();
      return n.length || (n = e("body")), parseInt(n.css("fontSize"), 10) || parseInt(o.css("fontSize"), 10) || 16
    }, getPageHeight: function (t) {
      return e(t).height()
    }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
  };
  e.fn.extend({
    mousewheel: function (e) {
      return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
    }, unmousewheel: function (e) {
      return this.unbind("mousewheel", e)
    }
  })
}), function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e : e(jQuery)
}(function (e) {
  function t(t) {
    var r = t || window.event, l = s.call(arguments, 1), c = 0, u = 0, h = 0, f = 0, m = 0, p = 0;
    if (t = e.event.fix(r), t.type = "mousewheel", "detail" in r && (h = -1 * r.detail), "wheelDelta" in r && (h = r.wheelDelta), "wheelDeltaY" in r && (h = r.wheelDeltaY), "wheelDeltaX" in r && (u = -1 * r.wheelDeltaX), "axis" in r && r.axis === r.HORIZONTAL_AXIS && (u = -1 * h, h = 0), c = 0 === h ? u : h, "deltaY" in r && (h = -1 * r.deltaY, c = h), "deltaX" in r && (u = r.deltaX, 0 === h && (c = -1 * u)), 0 !== h || 0 !== u) {
      if (1 === r.deltaMode) {
        var g = e.data(this, "mousewheel-line-height");
        c *= g, h *= g, u *= g
      } else if (2 === r.deltaMode) {
        var v = e.data(this, "mousewheel-page-height");
        c *= v, h *= v, u *= v
      }
      if (f = Math.max(Math.abs(h), Math.abs(u)), (!i || i > f) && (i = f, n(r, f) && (i /= 40)), n(r, f) && (c /= 40, u /= 40, h /= 40), c = Math[c >= 1 ? "floor" : "ceil"](c / i), u = Math[u >= 1 ? "floor" : "ceil"](u / i), h = Math[h >= 1 ? "floor" : "ceil"](h / i), d.settings.normalizeOffset && this.getBoundingClientRect) {
        var x = this.getBoundingClientRect();
        m = t.clientX - x.left, p = t.clientY - x.top
      }
      return t.deltaX = u, t.deltaY = h, t.deltaFactor = i, t.offsetX = m, t.offsetY = p, t.deltaMode = 0, l.unshift(t, c, u, h), a && clearTimeout(a), a = setTimeout(o, 200), (e.event.dispatch || e.event.handle).apply(this, l)
    }
  }

  function o() {
    i = null
  }

  function n(e, t) {
    return d.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 == 0
  }

  var a, i, r = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
    l = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
    s = Array.prototype.slice;
  if (e.event.fixHooks) for (var c = r.length; c;) e.event.fixHooks[r[--c]] = e.event.mouseHooks;
  var d = e.event.special.mousewheel = {
    version: "3.1.12", setup: function () {
      if (this.addEventListener) for (var o = l.length; o;) this.addEventListener(l[--o], t, !1); else this.onmousewheel = t;
      e.data(this, "mousewheel-line-height", d.getLineHeight(this)), e.data(this, "mousewheel-page-height", d.getPageHeight(this))
    }, teardown: function () {
      if (this.removeEventListener) for (var o = l.length; o;) this.removeEventListener(l[--o], t, !1); else this.onmousewheel = null;
      e.removeData(this, "mousewheel-line-height"), e.removeData(this, "mousewheel-page-height")
    }, getLineHeight: function (t) {
      var o = e(t), n = o["offsetParent" in e.fn ? "offsetParent" : "parent"]();
      return n.length || (n = e("body")), parseInt(n.css("fontSize"), 10) || parseInt(o.css("fontSize"), 10) || 16
    }, getPageHeight: function (t) {
      return e(t).height()
    }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
  };
  e.fn.extend({
    mousewheel: function (e) {
      return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
    }, unmousewheel: function (e) {
      return this.unbind("mousewheel", e)
    }
  })
}), function (e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document)
}(function (e) {
  !function (t) {
    var o = "function" == typeof define && define.amd, n = "undefined" != typeof module && module.exports,
      a = "https:" == document.location.protocol ? "https:" : "http:";
    o || (n ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + a + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))), t()
  }(function () {
    var t, o = "mCustomScrollbar", n = "mCS", a = ".mCustomScrollbar", i = {
        setTop: 0,
        setLeft: 0,
        axis: "y",
        scrollbarPosition: "inside",
        scrollInertia: 950,
        autoDraggerLength: !0,
        alwaysShowScrollbar: 0,
        snapOffset: 0,
        mouseWheel: {
          enable: !0,
          scrollAmount: "auto",
          axis: "y",
          deltaFactor: "auto",
          disableOver: ["select", "option", "keygen", "datalist", "textarea"]
        },
        scrollButtons: {scrollType: "stepless", scrollAmount: "auto"},
        keyboard: {enable: !0, scrollType: "stepless", scrollAmount: "auto"},
        contentTouchScroll: 25,
        documentTouchScroll: !0,
        advanced: {
          autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
          updateOnContentResize: !0,
          updateOnImageLoad: "auto",
          autoUpdateTimeout: 60
        },
        theme: "light",
        callbacks: {onTotalScrollOffset: 0, onTotalScrollBackOffset: 0, alwaysTriggerOffsets: !0}
      }, r = 0, l = {}, s = window.attachEvent && !window.addEventListener ? 1 : 0, c = !1,
      d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
      u = {
        init: function (t) {
          var t = e.extend(!0, {}, i, t), o = h.call(this);
          if (t.live) {
            var s = t.liveSelector || this.selector || a, c = e(s);
            if ("off" === t.live) return void m(s);
            l[s] = setTimeout(function () {
              c.mCustomScrollbar(t), "once" === t.live && c.length && m(s)
            }, 500)
          } else m(s);
          return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = {
            enable: !0,
            scrollAmount: "auto",
            axis: "y",
            preventDefault: !1,
            deltaFactor: "auto",
            normalizeDelta: !1,
            invert: !1
          }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), f(t), e(o).each(function () {
            var o = e(this);
            if (!o.data(n)) {
              o.data(n, {
                idx: ++r,
                opt: t,
                scrollRatio: {y: null, x: null},
                overflowed: null,
                contentReset: {y: null, x: null},
                bindEvents: !1,
                tweenRunning: !1,
                sequential: {},
                langDir: o.css("direction"),
                cbOffsets: null,
                trigger: null,
                poll: {size: {o: 0, n: 0}, img: {o: 0, n: 0}, change: {o: 0, n: 0}}
              });
              var a = o.data(n), i = a.opt, l = o.data("mcs-axis"), s = o.data("mcs-scrollbar-position"),
                c = o.data("mcs-theme");
              l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, f(i)), v.call(this), a && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), e("#mCSB_" + a.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o)
            }
          })
        }, update: function (t, o) {
          var a = t || h.call(this);
          return e(a).each(function () {
            var t = e(this);
            if (t.data(n)) {
              var a = t.data(n), i = a.opt, r = e("#mCSB_" + a.idx + "_container"), l = e("#mCSB_" + a.idx),
                s = [e("#mCSB_" + a.idx + "_dragger_vertical"), e("#mCSB_" + a.idx + "_dragger_horizontal")];
              if (!r.length) return;
              a.tweenRunning && Q(t), o && a && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), l.css("max-height", "none"), l.height() !== t.height() && l.css("max-height", t.height()), w.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)), a.overflowed = y.call(this), k.call(this), i.autoDraggerLength && S.call(this), b.call(this), T.call(this);
              var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)];
              "x" !== i.axis && (a.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (Z(t, c[0].toString(), {
                dir: "y",
                dur: 0,
                overwrite: "none"
              }), a.contentReset.y = null) : (B.call(this), "y" === i.axis ? M.call(this) : "yx" === i.axis && a.overflowed[1] && Z(t, c[1].toString(), {
                dir: "x",
                dur: 0,
                overwrite: "none"
              }))), "y" !== i.axis && (a.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (Z(t, c[1].toString(), {
                dir: "x",
                dur: 0,
                overwrite: "none"
              }), a.contentReset.x = null) : (B.call(this), "x" === i.axis ? M.call(this) : "yx" === i.axis && a.overflowed[0] && Z(t, c[0].toString(), {
                dir: "y",
                dur: 0,
                overwrite: "none"
              }))), o && a && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), N.call(this)
            }
          })
        }, scrollTo: function (t, o) {
          if (void 0 !== t && null != t) {
            var a = h.call(this);
            return e(a).each(function () {
              var a = e(this);
              if (a.data(n)) {
                var i = a.data(n), r = i.opt, l = {
                    trigger: "external",
                    scrollInertia: r.scrollInertia,
                    scrollEasing: "mcsEaseInOut",
                    moveDragger: !1,
                    timeout: 60,
                    callbacks: !0,
                    onStart: !0,
                    onUpdate: !0,
                    onComplete: !0
                  }, s = e.extend(!0, {}, l, o), c = F.call(this, t),
                  d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                c[0] = q.call(this, c[0], "y"), c[1] = q.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, c[1] *= i.scrollRatio.x), s.dur = ae() ? 0 : d, setTimeout(function () {
                  null !== c[0] && void 0 !== c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", s.overwrite = "all", Z(a, c[0].toString(), s)), null !== c[1] && void 0 !== c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", s.overwrite = "none", Z(a, c[1].toString(), s))
                }, s.timeout)
              }
            })
          }
        }, stop: function () {
          var t = h.call(this);
          return e(t).each(function () {
            var t = e(this);
            t.data(n) && Q(t)
          })
        }, disable: function (t) {
          var o = h.call(this);
          return e(o).each(function () {
            var o = e(this);
            o.data(n) && (o.data(n), N.call(this, "remove"), M.call(this), t && B.call(this), k.call(this, !0), o.addClass(d[3]))
          })
        }, destroy: function () {
          var t = h.call(this);
          return e(t).each(function () {
            var a = e(this);
            if (a.data(n)) {
              var i = a.data(n), r = i.opt, l = e("#mCSB_" + i.idx), s = e("#mCSB_" + i.idx + "_container"),
                c = e(".mCSB_" + i.idx + "_scrollbar");
              r.live && m(r.liveSelector || e(t).selector), N.call(this, "remove"), M.call(this), B.call(this), a.removeData(n), $(this, "mcs"), c.remove(), s.find("img." + d[2]).removeClass(d[2]), l.replaceWith(s.contents()), a.removeClass(o + " _" + n + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4])
            }
          })
        }
      }, h = function () {
        return "object" != typeof e(this) || e(this).length < 1 ? a : this
      }, f = function (t) {
        var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
          n = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
          a = ["minimal", "minimal-dark"], i = ["minimal", "minimal-dark"], r = ["minimal", "minimal-dark"];
        t.autoDraggerLength = !(e.inArray(t.theme, o) > -1) && t.autoDraggerLength, t.autoExpandScrollbar = !(e.inArray(t.theme, n) > -1) && t.autoExpandScrollbar, t.scrollButtons.enable = !(e.inArray(t.theme, a) > -1) && t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 || t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition
      }, m = function (e) {
        l[e] && (clearTimeout(l[e]), $(l, e))
      }, p = function (e) {
        return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y"
      }, g = function (e) {
        return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless"
      }, v = function () {
        var t = e(this), a = t.data(n), i = a.opt, r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
          l = ["<div id='mCSB_" + a.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + a.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + a.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + a.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + a.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + a.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
          s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
          c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
          u = "yx" === i.axis ? "<div id='mCSB_" + a.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
          h = i.autoHideScrollbar ? " " + d[6] : "", f = "x" !== i.axis && "rtl" === a.langDir ? " " + d[7] : "";
        i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && "rtl" === a.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + n + "_" + a.idx + h + f).wrapInner("<div id='mCSB_" + a.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + a.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + a.langDir + "' /></div>");
        var m = e("#mCSB_" + a.idx), p = e("#mCSB_" + a.idx + "_container");
        "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)), "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(u)), _.call(this);
        var g = [e("#mCSB_" + a.idx + "_dragger_vertical"), e("#mCSB_" + a.idx + "_dragger_horizontal")];
        g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width())
      }, x = function (t) {
        var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function () {
          return e(this).outerWidth(!0)
        }).get())], n = t.parent().width();
        return o[0] > n ? o[0] : o[1] > n ? o[1] : "100%"
      }, w = function () {
        var t = e(this).data(n), o = t.opt, a = e("#mCSB_" + t.idx + "_container");
        if (o.advanced.autoExpandHorizontalScroll && "y" !== o.axis) {
          a.css({width: "auto", "min-width": 0, "overflow-x": "scroll"});
          var i = Math.ceil(a[0].scrollWidth);
          3 === o.advanced.autoExpandHorizontalScroll || 2 !== o.advanced.autoExpandHorizontalScroll && i > a.parent().width() ? a.css({
            width: i,
            "min-width": "100%",
            "overflow-x": "inherit"
          }) : a.css({
            "overflow-x": "inherit",
            position: "absolute"
          }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
            width: Math.ceil(a[0].getBoundingClientRect().right + .4) - Math.floor(a[0].getBoundingClientRect().left),
            "min-width": "100%",
            position: "relative"
          }).unwrap()
        }
      }, _ = function () {
        var t = e(this).data(n), o = t.opt, a = e(".mCSB_" + t.idx + "_scrollbar:first"),
          i = oe(o.scrollButtons.tabindex) ? "tabindex='" + o.scrollButtons.tabindex + "'" : "",
          r = ["<a href='#' class='" + d[13] + "' " + i + " />", "<a href='#' class='" + d[14] + "' " + i + " />", "<a href='#' class='" + d[15] + "' " + i + " />", "<a href='#' class='" + d[16] + "' " + i + " />"],
          l = ["x" === o.axis ? r[2] : r[0], "x" === o.axis ? r[3] : r[1], r[2], r[3]];
        o.scrollButtons.enable && a.prepend(l[0]).append(l[1]).next(".mCSB_scrollTools").prepend(l[2]).append(l[3])
      }, S = function () {
        var t = e(this).data(n), o = e("#mCSB_" + t.idx), a = e("#mCSB_" + t.idx + "_container"),
          i = [e("#mCSB_" + t.idx + "_dragger_vertical"), e("#mCSB_" + t.idx + "_dragger_horizontal")],
          r = [o.height() / a.outerHeight(!1), o.width() / a.outerWidth(!1)],
          l = [parseInt(i[0].css("min-height")), Math.round(r[0] * i[0].parent().height()), parseInt(i[1].css("min-width")), Math.round(r[1] * i[1].parent().width())],
          c = s && l[1] < l[0] ? l[0] : l[1], d = s && l[3] < l[2] ? l[2] : l[3];
        i[0].css({
          height: c,
          "max-height": i[0].parent().height() - 10
        }).find(".mCSB_dragger_bar").css({"line-height": l[0] + "px"}), i[1].css({
          width: d,
          "max-width": i[1].parent().width() - 10
        })
      }, b = function () {
        var t = e(this).data(n), o = e("#mCSB_" + t.idx), a = e("#mCSB_" + t.idx + "_container"),
          i = [e("#mCSB_" + t.idx + "_dragger_vertical"), e("#mCSB_" + t.idx + "_dragger_horizontal")],
          r = [a.outerHeight(!1) - o.height(), a.outerWidth(!1) - o.width()],
          l = [r[0] / (i[0].parent().height() - i[0].height()), r[1] / (i[1].parent().width() - i[1].width())];
        t.scrollRatio = {y: l[0], x: l[1]}
      }, C = function (e, t, o) {
        var n = o ? d[0] + "_expanded" : "", a = e.closest(".mCSB_scrollTools");
        "active" === t ? (e.toggleClass(d[0] + " " + n), a.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), a.removeClass(d[1])) : (e.addClass(d[0]), a.addClass(d[1])))
      }, y = function () {
        var t = e(this).data(n), o = e("#mCSB_" + t.idx), a = e("#mCSB_" + t.idx + "_container"),
          i = null == t.overflowed ? a.height() : a.outerHeight(!1),
          r = null == t.overflowed ? a.width() : a.outerWidth(!1), l = a[0].scrollHeight, s = a[0].scrollWidth;
        return l > i && (i = l), s > r && (r = s), [i > o.height(), r > o.width()]
      }, B = function () {
        var t = e(this), o = t.data(n), a = o.opt, i = e("#mCSB_" + o.idx), r = e("#mCSB_" + o.idx + "_container"),
          l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")];
        if (Q(t), ("x" !== a.axis && !o.overflowed[0] || "y" === a.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), Z(t, "_resetY")), "y" !== a.axis && !o.overflowed[1] || "x" === a.axis && o.overflowed[1]) {
          var s = dx = 0;
          "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), r.css("left", s), l[1].css("left", dx), Z(t, "_resetX")
        }
      }, T = function () {
        function t() {
          r = setTimeout(function () {
            e.event.special.mousewheel ? (clearTimeout(r), L.call(o[0])) : t()
          }, 100)
        }

        var o = e(this), a = o.data(n), i = a.opt;
        if (!a.bindEvents) {
          if (O.call(this), i.contentTouchScroll && I.call(this), E.call(this), i.mouseWheel.enable) {
            var r;
            t()
          }
          H.call(this), X.call(this), i.advanced.autoScrollOnFocus && P.call(this), i.scrollButtons.enable && Y.call(this), i.keyboard.enable && j.call(this), a.bindEvents = !0
        }
      }, M = function () {
        var t = e(this), o = t.data(n), a = o.opt, i = n + "_" + o.idx, r = ".mCSB_" + o.idx + "_scrollbar",
          l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"),
          s = e("#mCSB_" + o.idx + "_container");
        a.advanced.releaseDraggableSelectors && l.add(e(a.advanced.releaseDraggableSelectors)), a.advanced.extraDraggableSelectors && l.add(e(a.advanced.extraDraggableSelectors)), o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i), l.each(function () {
          e(this).unbind("." + i)
        }), clearTimeout(t[0]._focusTimeout), $(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), $(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), $(s[0], "onCompleteTimeout"), o.bindEvents = !1)
      }, k = function (t) {
        var o = e(this), a = o.data(n), i = a.opt, r = e("#mCSB_" + a.idx + "_container_wrapper"),
          l = r.length ? r : e("#mCSB_" + a.idx + "_container"),
          s = [e("#mCSB_" + a.idx + "_scrollbar_vertical"), e("#mCSB_" + a.idx + "_scrollbar_horizontal")],
          c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
        "x" !== i.axis && (a.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))), "y" !== i.axis && (a.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))), a.overflowed[0] || a.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5])
      }, D = function (t) {
        var o = t.type,
          n = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
          a = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0];
        switch (o) {
          case"pointerdown":
          case"MSPointerDown":
          case"pointermove":
          case"MSPointerMove":
          case"pointerup":
          case"MSPointerUp":
            return n ? [t.originalEvent.pageY - n[0] + a[0], t.originalEvent.pageX - n[1] + a[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
          case"touchstart":
          case"touchmove":
          case"touchend":
            var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
              r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length;
            return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];
          default:
            return n ? [t.pageY - n[0] + a[0], t.pageX - n[1] + a[1], !1] : [t.pageY, t.pageX, !1]
        }
      }, O = function () {
        function t(e, t, n, a) {
          if (f[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, o.attr("id") === h[1]) var i = "x",
            s = (o[0].offsetLeft - t + a) * l.scrollRatio.x; else var i = "y",
            s = (o[0].offsetTop - e + n) * l.scrollRatio.y;
          Z(r, s.toString(), {dir: i, drag: !0})
        }

        var o, a, i, r = e(this), l = r.data(n), d = l.opt, u = n + "_" + l.idx,
          h = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"],
          f = e("#mCSB_" + l.idx + "_container"), m = e("#" + h[0] + ",#" + h[1]),
          p = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m,
          g = d.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!A() || top.document);
        m.bind("contextmenu." + u, function (e) {
          e.preventDefault()
        }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function (t) {
          if (t.stopImmediatePropagation(), t.preventDefault(), ee(t)) {
            c = !0, s && (document.onselectstart = function () {
              return !1
            }), W.call(f, !1), Q(r);
            var n = (o = e(this)).offset(), l = D(t)[0] - n.top, u = D(t)[1] - n.left, h = o.height() + n.top,
              m = o.width() + n.left;
            h > l && l > 0 && m > u && u > 0 && (a = l, i = u), C(o, "active", d.autoExpandScrollbar)
          }
        }).bind("touchmove." + u, function (e) {
          e.stopImmediatePropagation(), e.preventDefault();
          var n = o.offset(), r = D(e)[0] - n.top, l = D(e)[1] - n.left;
          t(a, i, r, l)
        }), e(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function (e) {
          if (o) {
            var n = o.offset(), r = D(e)[0] - n.top, l = D(e)[1] - n.left;
            if (a === r && i === l) return;
            t(a, i, r, l)
          }
        }).add(p).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function () {
          o && (C(o, "active", d.autoExpandScrollbar), o = null), c = !1, s && (document.onselectstart = null), W.call(f, !0)
        })
      }, I = function () {
        function o(e) {
          if (!te(e) || c || D(e)[2]) t = 0; else {
            t = 1, b = 0, C = 0, d = 1, y.removeClass("mCS_touch_action");
            var o = O.offset();
            u = D(e)[0] - o.top, h = D(e)[1] - o.left, z = [D(e)[0], D(e)[1]]
          }
        }

        function a(e) {
          if (te(e) && !c && !D(e)[2] && (T.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!C || b) && d)) {
            g = J();
            var t = k.offset(), o = D(e)[0] - t.top, n = D(e)[1] - t.left, a = "mcsLinearOut";
            if (E.push(o), L.push(n), z[2] = Math.abs(D(e)[0] - z[0]), z[3] = Math.abs(D(e)[1] - z[1]), B.overflowed[0]) var i = I[0].parent().height() - I[0].height(),
              r = u - o > 0 && o - u > -i * B.scrollRatio.y && (2 * z[3] < z[2] || "yx" === T.axis);
            if (B.overflowed[1]) var l = I[1].parent().width() - I[1].width(),
              f = h - n > 0 && n - h > -l * B.scrollRatio.x && (2 * z[2] < z[3] || "yx" === T.axis);
            r || f ? (X || e.preventDefault(), b = 1) : (C = 1, y.addClass("mCS_touch_action")), X && e.preventDefault(), _ = "yx" === T.axis ? [u - o, h - n] : "x" === T.axis ? [null, h - n] : [u - o, null], O[0].idleTimer = 250, B.overflowed[0] && s(_[0], R, a, "y", "all", !0), B.overflowed[1] && s(_[1], R, a, "x", W, !0)
          }
        }

        function i(e) {
          if (!te(e) || c || D(e)[2]) t = 0; else {
            t = 1, e.stopImmediatePropagation(), Q(y), p = J();
            var o = k.offset();
            f = D(e)[0] - o.top, m = D(e)[1] - o.left, E = [], L = []
          }
        }

        function r(e) {
          if (te(e) && !c && !D(e)[2]) {
            d = 0, e.stopImmediatePropagation(), b = 0, C = 0, v = J();
            var t = k.offset(), o = D(e)[0] - t.top, n = D(e)[1] - t.left;
            if (!(v - g > 30)) {
              var a = "mcsEaseOut", i = 2.5 > (w = 1e3 / (v - p)), r = i ? [E[E.length - 2], L[L.length - 2]] : [0, 0];
              x = i ? [o - r[0], n - r[1]] : [o - f, n - m];
              var u = [Math.abs(x[0]), Math.abs(x[1])];
              w = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [w, w];
              var h = [Math.abs(O[0].offsetTop) - x[0] * l(u[0] / w[0], w[0]), Math.abs(O[0].offsetLeft) - x[1] * l(u[1] / w[1], w[1])];
              _ = "yx" === T.axis ? [h[0], h[1]] : "x" === T.axis ? [null, h[1]] : [h[0], null], S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia];
              var y = parseInt(T.contentTouchScroll) || 0;
              _[0] = u[0] > y ? _[0] : 0, _[1] = u[1] > y ? _[1] : 0, B.overflowed[0] && s(_[0], S[0], a, "y", W, !1), B.overflowed[1] && s(_[1], S[1], a, "x", W, !1)
            }
          }
        }

        function l(e, t) {
          var o = [1.5 * t, 2 * t, t / 1.5, t / 2];
          return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3]
        }

        function s(e, t, o, n, a, i) {
          e && Z(y, e.toString(), {dur: t, scrollEasing: o, dir: n, overwrite: a, drag: i})
        }

        var d, u, h, f, m, p, g, v, x, w, _, S, b, C, y = e(this), B = y.data(n), T = B.opt, M = n + "_" + B.idx,
          k = e("#mCSB_" + B.idx), O = e("#mCSB_" + B.idx + "_container"),
          I = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")], E = [], L = [],
          R = 0, W = "yx" === T.axis ? "none" : "all", z = [], H = O.find("iframe"),
          P = ["touchstart." + M + " pointerdown." + M + " MSPointerDown." + M, "touchmove." + M + " pointermove." + M + " MSPointerMove." + M, "touchend." + M + " pointerup." + M + " MSPointerUp." + M],
          X = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
        O.bind(P[0], function (e) {
          o(e)
        }).bind(P[1], function (e) {
          a(e)
        }), k.bind(P[0], function (e) {
          i(e)
        }).bind(P[2], function (e) {
          r(e)
        }), H.length && H.each(function () {
          e(this).bind("load", function () {
            A(this) && e(this.contentDocument || this.contentWindow.document).bind(P[0], function (e) {
              o(e), i(e)
            }).bind(P[1], function (e) {
              a(e)
            }).bind(P[2], function (e) {
              r(e)
            })
          })
        })
      }, E = function () {
        function o() {
          return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0
        }

        function a(e, t, o) {
          d.type = o && i ? "stepped" : "stepless", d.scrollAmount = 10, U(r, e, t, "mcsLinearOut", o ? 60 : null)
        }

        var i, r = e(this), l = r.data(n), s = l.opt, d = l.sequential, u = n + "_" + l.idx,
          h = e("#mCSB_" + l.idx + "_container"), f = h.parent();
        h.bind("mousedown." + u, function () {
          t || i || (i = 1, c = !0)
        }).add(document).bind("mousemove." + u, function (e) {
          if (!t && i && o()) {
            var n = h.offset(), r = D(e)[0] - n.top + h[0].offsetTop, c = D(e)[1] - n.left + h[0].offsetLeft;
            r > 0 && r < f.height() && c > 0 && c < f.width() ? d.step && a("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? a("on", 38) : r > f.height() && a("on", 40)), "y" !== s.axis && l.overflowed[1] && (0 > c ? a("on", 37) : c > f.width() && a("on", 39)))
          }
        }).bind("mouseup." + u + " dragend." + u, function () {
          t || (i && (i = 0, a("off", null)), c = !1)
        })
      }, L = function () {
        function t(t, n) {
          if (Q(o), !z(o, t.target)) {
            var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
              d = i.scrollInertia;
            if ("x" === i.axis || "x" === i.mouseWheel.axis) var u = "x",
              h = [Math.round(r * a.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)],
              f = "auto" !== i.mouseWheel.scrollAmount ? h[1] : h[0] >= l.width() ? .9 * l.width() : h[0],
              m = Math.abs(e("#mCSB_" + a.idx + "_container")[0].offsetLeft), p = c[1][0].offsetLeft,
              g = c[1].parent().width() - c[1].width(),
              v = "y" === i.mouseWheel.axis ? t.deltaY || n : t.deltaX; else var u = "y",
              h = [Math.round(r * a.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)],
              f = "auto" !== i.mouseWheel.scrollAmount ? h[1] : h[0] >= l.height() ? .9 * l.height() : h[0],
              m = Math.abs(e("#mCSB_" + a.idx + "_container")[0].offsetTop), p = c[0][0].offsetTop,
              g = c[0].parent().height() - c[0].height(), v = t.deltaY || n;
            "y" === u && !a.overflowed[0] || "x" === u && !a.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v), i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== p || 0 > v && p !== g || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (f = t.deltaFactor, d = 17), Z(o, (m - v * f).toString(), {
              dir: u,
              dur: d
            }))
          }
        }

        if (e(this).data(n)) {
          var o = e(this), a = o.data(n), i = a.opt, r = n + "_" + a.idx, l = e("#mCSB_" + a.idx),
            c = [e("#mCSB_" + a.idx + "_dragger_vertical"), e("#mCSB_" + a.idx + "_dragger_horizontal")],
            d = e("#mCSB_" + a.idx + "_container").find("iframe");
          d.length && d.each(function () {
            e(this).bind("load", function () {
              A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function (e, o) {
                t(e, o)
              })
            })
          }), l.bind("mousewheel." + r, function (e, o) {
            t(e, o)
          })
        }
      }, R = new Object, A = function (t) {
        var o = !1, n = !1, a = null;
        if (void 0 === t ? n = "#empty" : void 0 !== e(t).attr("id") && (n = e(t).attr("id")), !1 !== n && void 0 !== R[n]) return R[n];
        if (t) {
          try {
            a = (i = t.contentDocument || t.contentWindow.document).body.innerHTML
          } catch (e) {
          }
          o = null !== a
        } else {
          try {
            var i = top.document;
            a = i.body.innerHTML
          } catch (e) {
          }
          o = null !== a
        }
        return !1 !== n && (R[n] = o), o
      }, W = function (e) {
        var t = this.find("iframe");
        if (t.length) {
          var o = e ? "auto" : "none";
          t.css("pointer-events", o)
        }
      }, z = function (t, o) {
        var a = o.nodeName.toLowerCase(), i = t.data(n).opt.mouseWheel.disableOver, r = ["select", "textarea"];
        return e.inArray(a, i) > -1 && !(e.inArray(a, r) > -1 && !e(o).is(":focus"))
      }, H = function () {
        var t, o = e(this), a = o.data(n), i = n + "_" + a.idx, r = e("#mCSB_" + a.idx + "_container"), l = r.parent();
        e(".mCSB_" + a.idx + "_scrollbar ." + d[12]).bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function (o) {
          c = !0, e(o.target).hasClass("mCSB_dragger") || (t = 1)
        }).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function () {
          c = !1
        }).bind("click." + i, function (n) {
          if (t && (t = 0, e(n.target).hasClass(d[12]) || e(n.target).hasClass("mCSB_draggerRail"))) {
            Q(o);
            var i = e(this), s = i.find(".mCSB_dragger");
            if (i.parent(".mCSB_scrollTools_horizontal").length > 0) {
              if (!a.overflowed[1]) return;
              var c = "x", u = n.pageX > s.offset().left ? -1 : 1, h = Math.abs(r[0].offsetLeft) - u * (.9 * l.width())
            } else {
              if (!a.overflowed[0]) return;
              var c = "y", u = n.pageY > s.offset().top ? -1 : 1, h = Math.abs(r[0].offsetTop) - u * (.9 * l.height())
            }
            Z(o, h.toString(), {dir: c, scrollEasing: "mcsEaseInOut"})
          }
        })
      }, P = function () {
        var t = e(this), o = t.data(n), a = o.opt, i = n + "_" + o.idx, r = e("#mCSB_" + o.idx + "_container"),
          l = r.parent();
        r.bind("focusin." + i, function () {
          var o = e(document.activeElement), n = r.find(".mCustomScrollBox").length;
          o.is(a.advanced.autoScrollOnFocus) && (Q(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = n ? 17 * n : 0, t[0]._focusTimeout = setTimeout(function () {
            var e = [ne(o)[0], ne(o)[1]], n = [r[0].offsetTop, r[0].offsetLeft],
              i = [n[0] + e[0] >= 0 && n[0] + e[0] < l.height() - o.outerHeight(!1), n[1] + e[1] >= 0 && n[0] + e[1] < l.width() - o.outerWidth(!1)],
              s = "yx" !== a.axis || i[0] || i[1] ? "all" : "none";
            "x" === a.axis || i[0] || Z(t, e[0].toString(), {
              dir: "y",
              scrollEasing: "mcsEaseInOut",
              overwrite: s,
              dur: 0
            }), "y" === a.axis || i[1] || Z(t, e[1].toString(), {
              dir: "x",
              scrollEasing: "mcsEaseInOut",
              overwrite: s,
              dur: 0
            })
          }, t[0]._focusTimer))
        })
      }, X = function () {
        var t = e(this).data(n), o = n + "_" + t.idx, a = e("#mCSB_" + t.idx + "_container").parent();
        a.bind("scroll." + o, function () {
          0 === a.scrollTop() && 0 === a.scrollLeft() || e(".mCSB_" + t.idx + "_scrollbar").css("visibility", "hidden")
        })
      }, Y = function () {
        var t = e(this), o = t.data(n), a = o.opt, i = o.sequential, r = n + "_" + o.idx,
          l = ".mCSB_" + o.idx + "_scrollbar";
        e(l + ">a").bind("contextmenu." + r, function (e) {
          e.preventDefault()
        }).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function (n) {
          function r(e, o) {
            i.scrollAmount = a.scrollButtons.scrollAmount, U(t, e, o)
          }

          if (n.preventDefault(), ee(n)) {
            var l = e(this).attr("class");
            switch (i.type = a.scrollButtons.scrollType, n.type) {
              case"mousedown":
              case"touchstart":
              case"pointerdown":
              case"MSPointerDown":
                if ("stepped" === i.type) return;
                c = !0, o.tweenRunning = !1, r("on", l);
                break;
              case"mouseup":
              case"touchend":
              case"pointerup":
              case"MSPointerUp":
              case"mouseout":
              case"pointerout":
              case"MSPointerOut":
                if ("stepped" === i.type) return;
                c = !1, i.dir && r("off", l);
                break;
              case"click":
                if ("stepped" !== i.type || o.tweenRunning) return;
                r("on", l)
            }
          }
        })
      }, j = function () {
        function t(t) {
          function n(e, t) {
            r.type = i.keyboard.scrollType, r.scrollAmount = i.keyboard.scrollAmount, "stepped" === r.type && a.tweenRunning || U(o, e, t)
          }

          switch (t.type) {
            case"blur":
              a.tweenRunning && r.dir && n("off", null);
              break;
            case"keydown":
            case"keyup":
              var l = t.keyCode ? t.keyCode : t.which, s = "on";
              if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) {
                if ((38 === l || 40 === l) && !a.overflowed[0] || (37 === l || 39 === l) && !a.overflowed[1]) return;
                "keyup" === t.type && (s = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), n(s, l))
              } else if (33 === l || 34 === l) {
                if ((a.overflowed[0] || a.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) {
                  Q(o);
                  var h = 34 === l ? -1 : 1;
                  if ("x" === i.axis || "yx" === i.axis && a.overflowed[1] && !a.overflowed[0]) var f = "x",
                    m = Math.abs(c[0].offsetLeft) - h * (.9 * d.width()); else var f = "y",
                    m = Math.abs(c[0].offsetTop) - h * (.9 * d.height());
                  Z(o, m.toString(), {dir: f, scrollEasing: "mcsEaseInOut"})
                }
              } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((a.overflowed[0] || a.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) {
                if ("x" === i.axis || "yx" === i.axis && a.overflowed[1] && !a.overflowed[0]) var f = "x",
                  m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0; else var f = "y",
                  m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                Z(o, m.toString(), {dir: f, scrollEasing: "mcsEaseInOut"})
              }
          }
        }

        var o = e(this), a = o.data(n), i = a.opt, r = a.sequential, l = n + "_" + a.idx, s = e("#mCSB_" + a.idx),
          c = e("#mCSB_" + a.idx + "_container"), d = c.parent(),
          u = "input,textarea,select,datalist,keygen,[contenteditable='true']", h = c.find("iframe"),
          f = ["blur." + l + " keydown." + l + " keyup." + l];
        h.length && h.each(function () {
          e(this).bind("load", function () {
            A(this) && e(this.contentDocument || this.contentWindow.document).bind(f[0], function (e) {
              t(e)
            })
          })
        }), s.attr("tabindex", "0").bind(f[0], function (e) {
          t(e)
        })
      }, U = function (t, o, a, i, r) {
        function l(e) {
          c.snapAmount && (u.scrollAmount = c.snapAmount instanceof Array ? "x" === u.dir[0] ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount);
          var o = "stepped" !== u.type, n = r || (e ? o ? m / 1.5 : p : 1e3 / 60), a = e ? o ? 7.5 : 40 : 2.5,
            d = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
            f = [s.scrollRatio.y > 10 ? 10 : s.scrollRatio.y, s.scrollRatio.x > 10 ? 10 : s.scrollRatio.x],
            g = "x" === u.dir[0] ? d[1] + u.dir[1] * (f[1] * a) : d[0] + u.dir[1] * (f[0] * a),
            v = "x" === u.dir[0] ? d[1] + u.dir[1] * parseInt(u.scrollAmount) : d[0] + u.dir[1] * parseInt(u.scrollAmount),
            x = "auto" !== u.scrollAmount ? v : g, w = i || (e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear"),
            _ = !!e;
          return e && 17 > n && (x = "x" === u.dir[0] ? d[1] : d[0]), Z(t, x.toString(), {
            dir: u.dir[0],
            scrollEasing: w,
            dur: n,
            onComplete: _
          }), e ? void(u.dir = !1) : (clearTimeout(u.step), void(u.step = setTimeout(function () {
            l()
          }, n)))
        }

        var s = t.data(n), c = s.opt, u = s.sequential, h = e("#mCSB_" + s.idx + "_container"), f = "stepped" === u.type,
          m = c.scrollInertia < 26 ? 26 : c.scrollInertia, p = c.scrollInertia < 1 ? 17 : c.scrollInertia;
        switch (o) {
          case"on":
            if (u.dir = [a === d[16] || a === d[15] || 39 === a || 37 === a ? "x" : "y", a === d[13] || a === d[15] || 38 === a || 37 === a ? -1 : 1], Q(t), oe(a) && "stepped" === u.type) return;
            l(f);
            break;
          case"off":
            clearTimeout(u.step), $(u, "step"), Q(t), (f || s.tweenRunning && u.dir) && l(!0)
        }
      }, F = function (t) {
        var o = e(this).data(n).opt, a = [];
        return "function" == typeof t && (t = t()), t instanceof Array ? a = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (a[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, a[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof a[0] && (a[0] = a[0]()), "function" == typeof a[1] && (a[1] = a[1]()), a
      }, q = function (t, o) {
        if (null != t && void 0 !== t) {
          var a = e(this), i = a.data(n), r = i.opt, l = e("#mCSB_" + i.idx + "_container"), s = l.parent(), c = typeof t;
          o || (o = "x" === r.axis ? "x" : "y");
          var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height(),
            h = "x" === o ? l[0].offsetLeft : l[0].offsetTop, f = "x" === o ? "left" : "top";
          switch (c) {
            case"function":
              return t();
            case"object":
              if (!(p = t.jquery ? t : e(t)).length) return;
              return "x" === o ? ne(p)[1] : ne(p)[0];
            case"string":
            case"number":
              if (oe(t)) return Math.abs(t);
              if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100);
              if (-1 !== t.indexOf("-=")) return Math.abs(h - parseInt(t.split("-=")[1]));
              if (-1 !== t.indexOf("+=")) {
                var m = h + parseInt(t.split("+=")[1]);
                return m >= 0 ? 0 : Math.abs(m)
              }
              if (-1 !== t.indexOf("px") && oe(t.split("px")[0])) return Math.abs(t.split("px")[0]);
              if ("top" === t || "left" === t) return 0;
              if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1));
              if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1));
              if ("first" === t || "last" === t) {
                var p = l.find(":" + t);
                return "x" === o ? ne(p)[1] : ne(p)[0]
              }
              return e(t).length ? "x" === o ? ne(e(t))[1] : ne(e(t))[0] : (l.css(f, t), void u.update.call(null, a[0]))
          }
        }
      }, N = function (t) {
        function o() {
          return clearTimeout(h[0].autoUpdate), 0 === l.parents("html").length ? void(l = null) : void(h[0].autoUpdate = setTimeout(function () {
            return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(), s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n, void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + h[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth, s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n, void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = h.find("img").length, s.poll.img.n === s.poll.img.o) ? void((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n, void h.find("img").each(function () {
              a(this)
            }))
          }, c.advanced.autoUpdateTimeout))
        }

        function a(t) {
          if (e(t).hasClass(d[2])) r(); else {
            var o = new Image;
            o.onload = function (e, t) {
              return function () {
                return t.apply(e, arguments)
              }
            }(o, function () {
              this.onload = null, e(t).addClass(d[2]), r(2)
            }), o.src = t.src
          }
        }

        function i() {
          !0 === c.advanced.updateOnSelectorChange && (c.advanced.updateOnSelectorChange = "*");
          var e = 0, t = h.find(c.advanced.updateOnSelectorChange);
          return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function () {
            e += this.offsetHeight + this.offsetWidth
          }), e
        }

        function r(e) {
          clearTimeout(h[0].autoUpdate), u.update.call(null, l[0], e)
        }

        var l = e(this), s = l.data(n), c = s.opt, h = e("#mCSB_" + s.idx + "_container");
        return t ? (clearTimeout(h[0].autoUpdate), void $(h[0], "autoUpdate")) : void o()
      }, V = function (e, t, o) {
        return Math.round(e / t) * t - o
      }, Q = function (t) {
        var o = t.data(n);
        e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal").each(function () {
          K.call(this)
        })
      }, Z = function (t, o, a) {
        function i(e) {
          return s && c.callbacks[e] && "function" == typeof c.callbacks[e]
        }

        function r() {
          return [c.callbacks.alwaysTriggerOffsets || _ >= S[0] + y, c.callbacks.alwaysTriggerOffsets || -B >= _]
        }

        function l() {
          var e = [f[0].offsetTop, f[0].offsetLeft], o = [x[0].offsetTop, x[0].offsetLeft],
            n = [f.outerHeight(!1), f.outerWidth(!1)], i = [h.height(), h.width()];
          t[0].mcs = {
            content: f,
            top: e[0],
            left: e[1],
            draggerTop: o[0],
            draggerLeft: o[1],
            topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(n[0]) - i[0])),
            leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(n[1]) - i[1])),
            direction: a.dir
          }
        }

        var s = t.data(n), c = s.opt, d = {
            trigger: "internal",
            dir: "y",
            scrollEasing: "mcsEaseOut",
            drag: !1,
            dur: c.scrollInertia,
            overwrite: "all",
            callbacks: !0,
            onStart: !0,
            onUpdate: !0,
            onComplete: !0
          }, u = [(a = e.extend(d, a)).dur, a.drag ? 0 : a.dur], h = e("#mCSB_" + s.idx),
          f = e("#mCSB_" + s.idx + "_container"), m = f.parent(),
          p = c.callbacks.onTotalScrollOffset ? F.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
          g = c.callbacks.onTotalScrollBackOffset ? F.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0];
        if (s.trigger = a.trigger, 0 === m.scrollTop() && 0 === m.scrollLeft() || (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), s.contentReset.y = 1), "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), s.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) {
          if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), s.contentReset.x = null), c.snapAmount) {
            var v = c.snapAmount instanceof Array ? "x" === a.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
            o = V(o, v, c.snapOffset)
          }
          switch (a.dir) {
            case"x":
              var x = e("#mCSB_" + s.idx + "_dragger_horizontal"), w = "left", _ = f[0].offsetLeft,
                S = [h.width() - f.outerWidth(!1), x.parent().width() - x.width()],
                b = [o, 0 === o ? 0 : o / s.scrollRatio.x], y = p[1], B = g[1], T = y > 0 ? y / s.scrollRatio.x : 0,
                M = B > 0 ? B / s.scrollRatio.x : 0;
              break;
            case"y":
              var x = e("#mCSB_" + s.idx + "_dragger_vertical"), w = "top", _ = f[0].offsetTop,
                S = [h.height() - f.outerHeight(!1), x.parent().height() - x.height()],
                b = [o, 0 === o ? 0 : o / s.scrollRatio.y], y = p[0], B = g[0], T = y > 0 ? y / s.scrollRatio.y : 0,
                M = B > 0 ? B / s.scrollRatio.y : 0
          }
          b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0], t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(f[0].onCompleteTimeout), G(x[0], w, Math.round(b[1]), u[1], a.scrollEasing), !s.tweenRunning && (0 === _ && b[0] >= 0 || _ === S[0] && b[0] <= S[0]) || G(f[0], w, Math.round(b[0]), u[0], a.scrollEasing, a.overwrite, {
            onStart: function () {
              a.callbacks && a.onStart && !s.tweenRunning && (i("onScrollStart") && (l(), c.callbacks.onScrollStart.call(t[0])), s.tweenRunning = !0, C(x), s.cbOffsets = r())
            }, onUpdate: function () {
              a.callbacks && a.onUpdate && i("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0]))
            }, onComplete: function () {
              if (a.callbacks && a.onComplete) {
                "yx" === c.axis && clearTimeout(f[0].onCompleteTimeout);
                var e = f[0].idleTimer || 0;
                f[0].onCompleteTimeout = setTimeout(function () {
                  i("onScroll") && (l(), c.callbacks.onScroll.call(t[0])), i("onTotalScroll") && b[1] >= S[1] - T && s.cbOffsets[0] && (l(), c.callbacks.onTotalScroll.call(t[0])), i("onTotalScrollBack") && b[1] <= M && s.cbOffsets[1] && (l(), c.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, f[0].idleTimer = 0, C(x, "hide")
                }, e)
              }
            }
          })
        }
      }, G = function (e, t, o, n, a, i, r) {
        function l() {
          w.stop || (g || h.call(), g = J() - p, s(), g >= w.time && (w.time = g > w.time ? g + d - (g - w.time) : g + d - 1, w.time < g + 1 && (w.time = g + 1)), w.time < n ? w.id = u(l) : m.call())
        }

        function s() {
          n > 0 ? (w.currVal = c(w.time, v, _, n, a), x[t] = Math.round(w.currVal) + "px") : x[t] = o + "px", f.call()
        }

        function c(e, t, o, n, a) {
          switch (a) {
            case"linear":
            case"mcsLinear":
              return o * e / n + t;
            case"mcsLinearOut":
              return e /= n, e--, o * Math.sqrt(1 - e * e) + t;
            case"easeInOutSmooth":
              return e /= n / 2, 1 > e ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t);
            case"easeInOutStrong":
              return e /= n / 2, 1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (2 - Math.pow(2, -10 * e)) + t);
            case"easeInOut":
            case"mcsEaseInOut":
              return e /= n / 2, 1 > e ? o / 2 * e * e * e + t : (e -= 2, o / 2 * (e * e * e + 2) + t);
            case"easeOutSmooth":
              return e /= n, e--, -o * (e * e * e * e - 1) + t;
            case"easeOutStrong":
              return o * (1 - Math.pow(2, -10 * e / n)) + t;
            case"easeOut":
            case"mcsEaseOut":
            default:
              var i = (e /= n) * e, r = i * e;
              return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e)
          }
        }

        e._mTween || (e._mTween = {top: {}, left: {}});
        var d, u, h = (r = r || {}).onStart || function () {
        }, f = r.onUpdate || function () {
        }, m = r.onComplete || function () {
        }, p = J(), g = 0, v = e.offsetTop, x = e.style, w = e._mTween[t];
        "left" === t && (v = e.offsetLeft);
        var _ = o - v;
        w.stop = 0, "none" !== i && null != w.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(w.id) : clearTimeout(w.id), w.id = null), d = 1e3 / 60, w.time = g + d, u = window.requestAnimationFrame ? window.requestAnimationFrame : function (e) {
          return s(), setTimeout(e, .01)
        }, w.id = u(l)
      }, J = function () {
        return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
      }, K = function () {
        var e = this;
        e._mTween || (e._mTween = {top: {}, left: {}});
        for (var t = ["top", "left"], o = 0; o < t.length; o++) {
          var n = t[o];
          e._mTween[n].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[n].id) : clearTimeout(e._mTween[n].id), e._mTween[n].id = null, e._mTween[n].stop = 1)
        }
      }, $ = function (e, t) {
        try {
          delete e[t]
        } catch (o) {
          e[t] = null
        }
      }, ee = function (e) {
        return !(e.which && 1 !== e.which)
      }, te = function (e) {
        var t = e.originalEvent.pointerType;
        return !(t && "touch" !== t && 2 !== t)
      }, oe = function (e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
      }, ne = function (e) {
        var t = e.parents(".mCSB_container");
        return [e.offset().top - t.offset().top, e.offset().left - t.offset().left]
      }, ae = function () {
        var e = function () {
          var e = ["webkit", "moz", "ms", "o"];
          if ("hidden" in document) return "hidden";
          for (var t = 0; t < e.length; t++) if (e[t] + "Hidden" in document) return e[t] + "Hidden";
          return null
        }();
        return !!e && document[e]
      };
    e.fn[o] = function (t) {
      return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
    }, e[o] = function (t) {
      return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments)
    }, e[o].defaults = i, window[o] = !0, e(window).bind("load", function () {
      e(a)[o](), e.extend(e.expr[":"], {
        mcsInView: e.expr[":"].mcsInView || function (t) {
          var o, n, a = e(t), i = a.parents(".mCSB_container");
          if (i.length) return o = i.parent(), (n = [i[0].offsetTop, i[0].offsetLeft])[0] + ne(a)[0] >= 0 && n[0] + ne(a)[0] < o.height() - a.outerHeight(!1) && n[1] + ne(a)[1] >= 0 && n[1] + ne(a)[1] < o.width() - a.outerWidth(!1)
        }, mcsInSight: e.expr[":"].mcsInSight || function (t, o, n) {
          var a, i, r, l, s = e(t), c = s.parents(".mCSB_container"),
            d = "exact" === n[3] ? [[1, 0], [1, 0]] : [[.9, .1], [.6, .4]];
          if (c.length) return a = [s.outerHeight(!1), s.outerWidth(!1)], r = [c[0].offsetTop + ne(s)[0], c[0].offsetLeft + ne(s)[1]], i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], l = [a[0] < i[0] ? d[0] : d[1], a[1] < i[1] ? d[0] : d[1]], r[0] - i[0] * l[0][0] < 0 && r[0] + a[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + a[1] - i[1] * l[1][1] >= 0
        }, mcsOverflow: e.expr[":"].mcsOverflow || function (t) {
          var o = e(t).data(n);
          if (o) return o.overflowed[0] || o.overflowed[1]
        }
      })
    })
  })
});
