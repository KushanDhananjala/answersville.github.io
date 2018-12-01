!function (e) {
  function t(e) {
    return "object" == typeof e ? e : {top: e, left: e}
  }

  var o = e.scrollTo = function (t, o, n) {
    e(window).scrollTo(t, o, n)
  };
  o.defaults = {axis: "xy", duration: parseFloat(e.fn.jquery) >= 1.3 ? 0 : 1, limit: !0}, o.window = function (t) {
    return e(window)._scrollable()
  }, e.fn._scrollable = function () {
    return this.map(function () {
      var t = this;
      if (!(!t.nodeName || -1 != e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]))) return t;
      var o = (t.contentWindow || t).document || t.ownerDocument || t;
      return /webkit/i.test(navigator.userAgent) || "BackCompat" == o.compatMode ? o.body : o.documentElement
    })
  }, e.fn.scrollTo = function (n, r, i) {
    return "object" == typeof r && (i = r, r = 0), "function" == typeof i && (i = {onAfter: i}), "max" == n && (n = 9e9), i = e.extend({}, o.defaults, i), r = r || i.duration, i.queue = i.queue && i.axis.length > 1, i.queue && (r /= 2), i.offset = t(i.offset), i.over = t(i.over), this._scrollable().each(function () {
      function a(e) {
        u.animate(l, r, i.easing, e && function () {
          e.call(this, n, i)
        })
      }

      if (n) {
        var s, c = this, u = e(c), f = n, l = {}, d = u.is("html,body");
        switch (typeof f) {
          case"number":
          case"string":
            if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)) {
              f = t(f);
              break
            }
            if (!(f = e(f, this)).length) return;
          case"object":
            (f.is || f.style) && (s = (f = e(f)).offset())
        }
        e.each(i.axis.split(""), function (e, t) {
          var n = "x" == t ? "Left" : "Top", r = n.toLowerCase(), m = "scroll" + n, h = c[m], w = o.max(c, t);
          if (s) l[m] = s[r] + (d ? 0 : h - u.offset()[r]), i.margin && (l[m] -= parseInt(f.css("margin" + n)) || 0, l[m] -= parseInt(f.css("border" + n + "Width")) || 0), l[m] += i.offset[r] || 0, i.over[r] && (l[m] += f["x" == t ? "width" : "height"]() * i.over[r]); else {
            var b = f[r];
            l[m] = b.slice && "%" == b.slice(-1) ? parseFloat(b) / 100 * w : b
          }
          i.limit && /^\d+$/.test(l[m]) && (l[m] = l[m] <= 0 ? 0 : Math.min(l[m], w)), !e && i.queue && (h != l[m] && a(i.onAfterFirst), delete l[m])
        }), a(i.onAfter)
      }
    }).end()
  }, o.max = function (t, o) {
    var n = "x" == o ? "Width" : "Height", r = "scroll" + n;
    if (!e(t).is("html,body")) return t[r] - e(t)[n.toLowerCase()]();
    var i = "client" + n, a = t.ownerDocument.documentElement, s = t.ownerDocument.body;
    return Math.max(a[r], s[r]) - Math.min(a[i], s[i])
  }
}(jQuery);
