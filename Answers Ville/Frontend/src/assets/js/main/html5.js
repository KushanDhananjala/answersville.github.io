!function (e, t) {
  function n(e, t) {
    var n = e.createElement("p"), i = e.getElementsByTagName("head")[0] || e.documentElement;
    return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild)
  }

  function i() {
    var e = u.elements;
    return "string" == typeof e ? e.split(" ") : e
  }

  function o(e) {
    var t = {}, n = e.createElement, o = (0, e.createDocumentFragment)();
    e.createElement = function (e) {
      if (!u.shivMethods) return n(e);
      var i;
      return i = t[e] ? t[e].cloneNode() : s.test(e) ? (t[e] = n(e)).cloneNode() : n(e), i.canHaveChildren && !d.test(e) ? o.appendChild(i) : i
    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/\w+/g, function (e) {
      return n(e), o.createElement(e), 'c("' + e + '")'
    }) + ");return n}")(u, o)
  }

  function r(e) {
    var t;
    return e.documentShived ? e : (u.shivCSS && !a && (t = !!n(e, "article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")), l || (t = !o(e)), t && (e.documentShived = t), e)
  }

  var a, l, c = e.html5 || {}, d = /^<|^(?:button|form|map|select|textarea|object|iframe|option|optgroup)$/i,
    s = /^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i;
  !function () {
    var n = t.createElement("a");
    n.innerHTML = "<xyz></xyz>", (a = "hidden" in n) && "function" == typeof injectElementWithStyles && injectElementWithStyles("#modernizr{}", function (t) {
      t.hidden = !0, a = "none" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).display
    }), l = 1 == n.childNodes.length || function () {
      try {
        t.createElement("a")
      } catch (e) {
        return !0
      }
      var e = t.createDocumentFragment();
      return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
    }()
  }();
  var u = {
    elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
    shivCSS: !1 !== c.shivCSS,
    shivMethods: !1 !== c.shivMethods,
    type: "default",
    shivDocument: r
  };
  e.html5 = u, r(t)
}(this, document);
