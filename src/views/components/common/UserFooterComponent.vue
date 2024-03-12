<template lang="">
   <div>
        <div class="footerPartWithImg">
        <div class="authMobileBottomImg">
            <img src="@/assets/images/user/auth-buttom-img.png" alt="">
        </div>
        <!-- FOOTER -->
        <div class="site-footer">
            <section class="section css-1sefqdm" data-guid="349c532b-2f13-d978-5171-4b35b55195bb">
                <div class="container" id="site-footer">
                    <div class="layout flex flex--12" data-guid="aad8b62e-1d0a-e63d-afbe-086e9e3c6338">
                        <div class="column flex__item--md-12 flex__item--xs-12 css-1b5csnr" data-guid="ecf20179-d41e-a7a8-1f27-323fbe640175">
                            <div class="inner-column css-efs6e5">
                                <div class="row flex flex--12 css-1v1axsl">
                                    <div class="composite flex__item--md-12 flex__item--xs-12 css-8x0d4x">
                                        <div class="inner-composite flex flex--12">
                                            <div class="widget-column flex__item--md-12 flex__item--xs-12">
                                                <div class="widget-row flex flex--12">
                                                    <div class="flex__item--md-12 flex__item--xs-12">
                                                        <div data-widget-id="536e8e5c-4f43-192e-bd3f-8ee63e4d9919" class="widget">
                                                            <div class="lp-share-react w-536e8e5c-4f43-192e-bd3f-8ee63e4d9919 css-nrb69m lp-share-react--huge" data-widget-type="LpShareReact">
                                                                <a class="lp-share-react_item lp-share-react_item--facebook css-zszo4u" target="_blank" rel="noopener noreferrer" data-alternate-url="" data-publish-url="" data-share-type="facebook" href="https://www.facebook.com/sharer/sharer.php?u=https://keithcooper439.lpages.co/solutions/">
                                                                    <span class="css-4e78w1">Share on Facebook</span>
                                                                    <i class="fab fa-facebook-f css-168f5rq"></i>
                                                                </a><a class="lp-share-react_item lp-share-react_item--twitter css-zszo4u" target="_blank" rel="noopener noreferrer" data-alternate-url="" data-publish-url="" data-share-type="twitter" href="https://www.twitter.com/intent/tweet?url=https://keithcooper439.lpages.co/solutions/"><span class="css-4e78w1">Share on Twitter</span><i class="fab fa-twitter css-168f5rq"></i></a><a class="lp-share-react_item lp-share-react_item--linkedin css-zszo4u" target="_blank" rel="noopener noreferrer" data-alternate-url="" data-publish-url="" data-share-type="linkedin" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://keithcooper439.lpages.co/solutions/"><span class="css-4e78w1">Share on LinkedIn</span><i class="fab fa-linkedin-in css-168f5rq"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row flex flex--12 css-1v1axsl">
                                    <div class="composite flex__item--md-12 flex__item--xs-12 css-8x0d4x">
                                        <div class="inner-composite flex flex--12">
                                            <div class="widget-column flex__item--md-12 flex__item--xs-12">
                                                <div class="widget-row flex flex--12">
                                                    <div class="flex__item--md-12 flex__item--xs-12">
                                                        <div data-widget-id="4914fb17-f147-1b24-ec43-3ffc251b4a49" class="widget">
                                                            <div class="lp-text-react lp-headline-react" data-widget-type="LpTextReact">
                                                                <p class="text-align-center font-scale-4 line-height-scale-3 gutter-bottom-1"><span style="color: rgb(255, 255, 255);">© 2022 All Rights Reserved&nbsp;</span></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  mounted() {
    function ownKeys(t, e) {
      var o = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          o.push.apply(o, n);
      }
      return o;
    }

    function _objectSpread(t) {
      for (var e = 1; e < arguments.length; e++) {
        var o = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? ownKeys(o, !0).forEach(function(e) {
              _defineProperty(t, e, o[e]);
            })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
            : ownKeys(o).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(o, e)
                );
              });
      }
      return t;
    }

    function _defineProperty(e, t, o) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = o),
        e
      );
    }

    function _slicedToArray(e, t) {
      return (
        _arrayWithHoles(e) || _iterableToArrayLimit(e, t) || _nonIterableRest()
      );
    }

    function _nonIterableRest() {
      throw new TypeError(
        "Invalid attempt to destructure non-iterable instance"
      );
    }

    function _iterableToArrayLimit(e, t) {
      if (
        Symbol.iterator in Object(e) ||
        "[object Arguments]" === Object.prototype.toString.call(e)
      ) {
        var o = [],
          n = !0,
          r = !1,
          a = void 0;
        try {
          for (
            var i, c = e[Symbol.iterator]();
            !(n = (i = c.next()).done) &&
            (o.push(i.value), !t || o.length !== t);
            n = !0
          );
        } catch (e) {
          (r = !0), (a = e);
        } finally {
          try {
            n || null == c.return || c.return();
          } finally {
            if (r) throw a;
          }
        }
        return o;
      }
    }

    function _arrayWithHoles(e) {
      if (Array.isArray(e)) return e;
    }
    !(function(a, u) {
      function t(e) {
        var t = _slicedToArray(e.match(/(\d+)(px|em)/), 2)[1];
        return parseInt(t, 10);
      }

      function e(e) {
        return 5 * (e - 1);
      }

      function o(e) {
        return 1.2 + 0.2 * (e - 1);
      }

      function n(o) {
        var n =
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : "ease";
        return function(e) {
          var t = " ".concat(e, "s ").concat(n);
          return o
            .map(function(e) {
              return e + t;
            })
            .join(", ");
        };
      }
      var i = n(["font-size"]),
        c = n(["width"]),
        s = n(["padding-top", "padding-bottom"]),
        f = n(["top"], "linear");

      function r(e) {
        return e.getBoundingClientRect().height;
      }

      function l(e) {
        return e.getBoundingClientRect().top;
      }

      function S(o, n) {
        return function(e, t) {
          return o ? Math.max(e, t * n) : e;
        };
      }
      var _,
        d,
        g,
        h,
        m,
        y,
        p,
        v,
        L,
        E = 20,
        O = {
          BODY_NAV_OPEN: "body--nav-open",
          FLEXED_HEADER: "flexed-header",
          FULL_ROW: "flex__item--md-12",
          HALF_ROW: "flex__item--md-6",
          MOBILE_HIDE_COLUMN: "mobile-hide-column",
          MOBILE_HIDE_LAYOUT: "mobile-hide-layout",
          NAV_LINK: "lp-nav__link",
          QUARTER_ROW: "flex__item--md-3",
          SHOW_NAV: "show-side-nav",
          SHOW_NAV_SHIELD: "side-nav-shield--show",
          SHOW_NAV_TRIGGER: "mobile-nav-trigger--show",
          STICKY: "sticky",
          STICKY_NAV_SCROLLED_DOWN: "scrolled-down",
          SUBNAV_TRIGGER: "js-mobile-subnav-trigger",
        },
        b = (function() {
          var e = u.querySelector(".site-nav"),
            t = e.querySelectorAll(".layout"),
            o = t[0],
            n = t[1],
            r = _objectSpread(
              {
                body: u.body,
                hamburger: u.querySelector(".js-mobile-nav-trigger"),
                headerSpacer: u.querySelector(".js-header-spacer"),
                imageLogo: e.querySelector(".js-image-logo"),
                header: u.querySelector(".site-header"),
                siteNavContainer: e.querySelector(".container"),
                siteNavSection: e.querySelector("section"),
                firstRow: o,
                secondRow: n,
                textLogo: e.querySelector(".js-text-logo"),
              },
              n && {
                logoWidgetColumn: o.querySelector(".column:nth-of-type(2)"),
                logoWidget: o.querySelector(".column:nth-of-type(2) .widget"),
              },
              { columnSpacers: [], bar: null }
            );
          (r.siteNavPaddedElement = r.secondRow || r.siteNavContainer),
            r.headerSpacer &&
              (r.headerTrack = r.headerSpacer.querySelector(
                ".js-header-track"
              ));
          for (
            var a = r.header.querySelectorAll(".column"), i = 0;
            i < a.length;
            i += 1
          ) {
            var c = a[i],
              s = c.querySelector('[data-widget-type="LpNavReact"]'),
              l = c.querySelector('[data-widget-type="LpButtonReact"]'),
              d = c.querySelector('[data-widget-type="LpSpaceReact"]');
            s && (r.columnNav = c),
              l && (r.columnCta = c),
              d && r.columnSpacers.push(c);
          }
          return (
            (r.sideNav = r.header.querySelector(".js-side-nav")),
            (r.closeSideNav = r.sideNav.querySelector(".js-close-side-nav")),
            (r.sideNavShield = r.header.querySelector(".js-side-nav-shield")),
            r
          );
        })(),
        R = b.header.dataset,
        N = R && R.scrolling,
        w = e(R && R.minHeight),
        A = e(R && R.maxHeight),
        x = o(R && R.minFontSize),
        I = o(R && R.maxFontSize),
        T = R && R.minLogoWidth,
        C = R && R.maxLogoWidth,
        q = {
          text: 1.4,
          image: Math.max(65, R.minLogoWidth || 100),
          padding: e(1),
        },
        H = a.matchMedia("(min-width: ".concat(960, "px)")),
        W = 0,
        D = 0,
        M = !1,
        j = !1,
        B = 1;

      function k() {
        return H.matches;
      }

      function P(e, t) {
        e && !e.classList.contains(t) && e.classList.add(t);
      }

      function V(e, t) {
        e && e.classList.contains(t) && e.classList.remove(t);
      }

      function F() {
        b.sideNav.classList.toggle(O.SHOW_NAV),
          b.sideNavShield.classList.toggle(O.SHOW_NAV_SHIELD),
          b.body.classList.toggle(O.BODY_NAV_OPEN);
      }

      function U() {
        V(b.sideNav, O.SHOW_NAV),
          V(b.sideNavShield, O.SHOW_NAV_SHIELD),
          V(b.body, O.BODY_NAV_OPEN);
      }

      function Y(e) {
        var t = !!e.target.dataset.widgetLink,
          o = e.target.classList.contains(O.NAV_LINK);
        (t || o) && U();
      }

      function G(e) {
        var t = e.target;
        t.classList.contains(O.SUBNAV_TRIGGER) || (t = t.parentElement);
        for (var o, n = t.parentElement, r = 0; r < n.children.length; r += 1) {
          var a = n.children[r];
          a.classList.contains("lp-subnav") && (o = a);
        }
        o &&
          ("true" === o.getAttribute("data-collapsed")
            ? ((function(t) {
                var e = t.scrollHeight;
                (t.style.height = "".concat(e, "px")),
                  t.addEventListener("transitionend", function e() {
                    t.removeEventListener("transitionend", e),
                      (t.style.height = "auto");
                  }),
                  t.setAttribute("data-collapsed", "false");
              })(o),
              o.setAttribute("data-collapsed", "false"),
              t.setAttribute("data-collapsed", "false"))
            : ((function(e) {
                var t = e.scrollHeight,
                  o = e.style.transition;
                (e.style.transition = ""),
                  requestAnimationFrame(function() {
                    (e.style.height = "".concat(t, "px")),
                      (e.style.transition = o),
                      requestAnimationFrame(function() {
                        e.style.height = "".concat(0, "px");
                      });
                  }),
                  e.setAttribute("data-collapsed", "true");
              })(o),
              t.setAttribute("data-collapsed", "true")));
      }

      function z(e, t) {
        var o = t.text,
          n = t.image,
          r = t.padding;
        "sticky" !== N ||
          b.secondRowLogo ||
          (b.textLogo
            ? (b.textLogo.style.cssText = "font-size: "
                .concat(o, "em; transition: ")
                .concat(i(e), ";"))
            : (b.imageLogo.style.cssText = "width: "
                .concat(n, "px; transition: ")
                .concat(c(e), ";"))),
          (b.siteNavPaddedElement.style.cssText = "padding: "
            .concat(r, "px 0; transition: ")
            .concat(s(e), ";"));
      }

      function K(e) {
        e
          ? (b.imageLogo && (b.imageLogo.style.cssText = ""),
            v && z(0.1, v),
            b.header.classList.contains(O.SHOW_NAV) && U(),
            P(b.siteNavSection, O.FLEXED_HEADER),
            V(b.columnCta, O.MOBILE_HIDE_COLUMN),
            V(b.columnNav, O.MOBILE_HIDE_COLUMN),
            b.columnSpacers.forEach(function(e) {
              return V(e, O.MOBILE_HIDE_COLUMN);
            }),
            V(b.hamburger, O.SHOW_NAV_TRIGGER),
            V(b.secondRow, O.MOBILE_HIDE_LAYOUT))
          : (v || (v = {}),
            b.textLogo &&
              b.textLogo.style &&
              b.textLogo.style.fontSize &&
              (v.text = t(b.textLogo.style.fontSize)),
            b.imageLogo &&
              b.imageLogo.style &&
              b.imageLogo.style.fontSize &&
              (v.image = t(b.imageLogo.style.width)),
            b.siteNavPaddedElement &&
              b.siteNavPaddedElement.style &&
              b.siteNavPaddedElement.style.paddingTop &&
              (v.padding = t(b.siteNavPaddedElement.style.paddingTop)),
            z(0.1, q),
            V(b.siteNavSection, O.FLEXED_HEADER),
            P(b.columnCta, O.MOBILE_HIDE_COLUMN),
            P(b.columnNav, O.MOBILE_HIDE_COLUMN),
            b.columnSpacers.forEach(function(e) {
              return P(e, O.MOBILE_HIDE_COLUMN);
            }),
            P(b.hamburger, O.SHOW_NAV_TRIGGER),
            P(b.secondRow, O.MOBILE_HIDE_LAYOUT));
      }
      var X = function e(t) {
        var o = ["lpages", "googleapis", "localhost"],
          n = u.querySelector('meta[name="leadpages-serving-domain"]');
        if (
          (n && o.push(n.getAttribute("content")),
          o.some(function(e) {
            return -1 !== t.origin.indexOf(e);
          }))
        ) {
          if ("REPOSITION" === t.data.type) _ = t.data.payload.position;
          else if ("LOAD" === t.data.type)
            (_ = t.data.payload.position),
              (b.bar = u.querySelector(".lp-bar__pusher"));
          else if ("CLOSE" === t.data.type)
            return (
              (b.bar = null),
              a.removeEventListener("message", e),
              d && a.cancelAnimationFrame(d),
              void (d = a.requestAnimationFrame(function() {
                (b.header.style.top = j
                  ? "".concat(b.header.getBoundingClientRect().top - W, "px")
                  : 0),
                  (W = 0);
              }))
            );
          d && a.cancelAnimationFrame(d),
            (d = a.requestAnimationFrame(function() {
              j &&
                (function(e) {
                  var t = e.type;
                  ("LOAD" !== t && "RESIZE" !== t && "REPOSITION" !== t) ||
                    ("bottom" === _ && 0 !== W
                      ? ((b.header.style.top = "".concat(
                          l(b.header) - W,
                          "px"
                        )),
                        (W = 0))
                      : "top" === _ &&
                        (g && (clearTimeout(g), (g = null)),
                        (g = setTimeout(function() {
                          if ("top" === _) {
                            var e = r(b.bar);
                            (b.header.style.top = "".concat(
                              l(b.header) + (e - W),
                              "px"
                            )),
                              (W = e),
                              (g = null);
                          }
                        }, 350))));
                })(t.data),
                (d = null);
            }));
        }
      };

      function Q() {
        L && (L.unobserve(b.headerTrack), L.disconnect(), (L = null));
        var e = b.header.getBoundingClientRect().height,
          t = b.headerTrack.getBoundingClientRect().height;
        (b.headerTrack.style.minHeight = "".concat(Math.max(t, e), "px")),
          (L = new IntersectionObserver(te, {
            threshold: (function(e) {
              if (e <= 0) return 0;
              for (var t = [], o = 1; o <= e; o += 1) t.push(o / e);
              return t;
            })(b.headerTrack.getBoundingClientRect().height),
          })).observe(b.headerTrack);
      }

      function Z() {
        k()
          ? (function(e, t) {
              var o = "".concat(I, "em"),
                n = "".concat(A, "px 0"),
                r = "".concat(C, "px"),
                a = e.cloneNode(!0);
              a.querySelectorAll("[id]").forEach(function(e) {
                e.removeAttribute("id");
              });
              var i = a.querySelector(".js-text-logo"),
                c = a.querySelector(".js-image-logo"),
                s = a.querySelector(".site-nav .container"),
                l = a.querySelector(".scrolled-down");
              if (
                (l && l.classList.remove("scrolled-down"),
                (a.style.position = "fixed"),
                (a.style.top = "9999px"),
                i && ((i.style.fontSize = o), (i.style.transition = null)),
                c && ((c.style.width = r), (c.style.transition = null)),
                (s.style.padding = n),
                (s.style.transition = null),
                b.body.appendChild(a),
                b.textLogo)
              ) {
                var d = a.getBoundingClientRect().height;
                b.body.removeChild(a), t(d);
              } else
                (p = function() {
                  setTimeout(function() {
                    var e = a.getBoundingClientRect().height;
                    b.body.removeChild(a), t(e);
                  }, E);
                }),
                  ((m = new Image()).onload = p),
                  (m.onerror = p),
                  (m.src = b.imageLogo.src);
            })(b.header, function(e) {
              (b.headerSpacer.style.height = "".concat(e, "px")), Q();
            })
          : (b.headerSpacer.style.height = "".concat(
              b.header.getBoundingClientRect().height,
              "px"
            ));
      }

      function J() {
        if (
          0 < (a.scrollY || a.pageYOffset) &&
          (b.header.classList.add(O.STICKY),
          b.headerSpacer.classList.add(O.STICKY),
          (j = !0),
          a.removeEventListener("scroll", J),
          b.bar && "top" === _)
        ) {
          var e = r(b.bar);
          (b.header.style.transition = f(0)),
            (b.header.style.top = "".concat(l(b.header) + (e - W), "px")),
            (W = e);
        }
      }
      var $,
        ee,
        te = (($ = function(e) {
          if (0 !== e.length) {
            var t,
              o,
              n,
              r,
              a,
              i = e.reduce(
                function(e, t) {
                  return t.time > e.time ? t : e;
                },
                { time: -1 / 0 }
              ),
              c = i.isIntersecting,
              s = i.boundingClientRect,
              l = i.intersectionRect,
              d = l.height / s.height,
              u = S(c, d),
              g = b.firstRow && b.secondRow,
              h = 0 < s.height ? s.top : s.top - s.height;
            if (g) {
              var m = b.firstRow.getBoundingClientRect().height,
                y = -1 * m;
              (t = S(c, Math.min(1, l.height / (s.height - m)))(w, A)),
                (o = Math.max(y, h)),
                b.bar && "top" === _ && (o = 0 < o ? W : o + W),
                (a = h <= y),
                (n = T),
                (r = x);
            } else
              (t = u(w, A)),
                (o = b.bar && "top" === _ ? W : 0),
                (n = u(T, C)),
                (r = u(x, I));
            var p = (function(e, t) {
                var o =
                    2 < arguments.length && void 0 !== arguments[2]
                      ? arguments[2]
                      : 300,
                  n =
                    3 < arguments.length && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0.3,
                  r = _slicedToArray(
                    [e, t].sort(function(e, t) {
                      return e - t;
                    }),
                    2
                  ),
                  a = r[0],
                  i = r[1];
                return Math.min(1, (i - a) / o) * n;
              })(D, o, 300, 0.25),
              v = (function(e, t) {
                return Math.max(0.07, 0.3 * Math.abs(e - t));
              })(B, d);
            (B = d), (D = o);
            var L = { text: r, image: n, padding: t };
            (b.header.style.transition = f(p)),
              (b.header.style.top = "".concat(o, "px")),
              b.header.classList.toggle(O.STICKY_NAV_SCROLLED_DOWN, h < 0),
              g &&
                (b.secondRowLogo.classList.toggle("fade-in", a),
                b.secondRowLogo.classList.toggle("allow-pointer-events", a)),
              z(v, L),
              M ||
                ((M = !0),
                setTimeout(function() {
                  requestAnimationFrame(function() {
                    Z();
                  });
                }, p + 20));
          }
        }),
        function() {
          for (
            var e = this, t = arguments.length, o = new Array(t), n = 0;
            n < t;
            n++
          )
            o[n] = arguments[n];
          ee && a.cancelAnimationFrame(ee),
            (ee = a.requestAnimationFrame(function() {
              $.apply(e, o);
            }));
        });

      function oe() {
        if (b.secondRow) {
          b.secondRowWidgets = b.secondRow.querySelectorAll(".widget");
          var e = "font-size: ".concat(x, "em;"),
            t = "width: ".concat(T, "px;");
          if (1 < b.secondRowWidgets.length) {
            var o = b.logoWidget.childNodes[0].cloneNode(!0);
            (b.secondRowLogo = b.textLogo
              ? o.querySelector(".js-text-logo")
              : o.querySelector(".js-image-logo")),
              (b.secondRowLogoWidget = b.secondRowWidgets[0]),
              (b.secondRowLogo.style.cssText = b.textLogo ? e : t),
              (b.secondRowLogoWidget.innerHTML = ""),
              b.secondRowLogoWidget.appendChild(o);
          } else {
            var n = b.logoWidgetColumn.cloneNode(!0);
            (b.secondRowLogoWidget = n.querySelector(".widget")),
              (b.secondRowLogo = b.textLogo
                ? n.querySelector(".js-text-logo")
                : n.querySelector(".js-image-logo"));
            var r = b.secondRow.querySelector(".column");
            r.classList.remove(O.FULL_ROW),
              r.classList.add(O.HALF_ROW),
              n.classList.remove(O.HALF_ROW),
              n.classList.add(O.QUARTER_ROW),
              (b.secondRowLogo.style.cssText = b.textLogo ? e : t),
              b.secondRow.prepend(n);
          }
          a.headerNav &&
            b.secondRowLogoWidget
              .querySelector("a")
              .addEventListener("click", a.headerNav.handleNavLinkClick);
        }
        Q();
      }

      function ne(e) {
        e
          ? oe()
          : (L && (L.unobserve(b.headerTrack), L.disconnect(), (L = null)),
            m &&
              (m.removeEventListener("load", p),
              m.removeEventListener("error", p)),
            y &&
              (y.removeEventListener("load", h),
              y.removeEventListener("error", h)),
            (M = !(B = 1)));
      }

      function re(e) {
        var t = e.matches;
        K(t), "sticky" === N && ne(t);
      }
      !(function() {
        H.addListener(re),
          b.closeSideNav.addEventListener("click", U),
          b.hamburger.addEventListener("click", F),
          b.sideNav.addEventListener("click", Y),
          b.sideNavShield.addEventListener("click", U);
        var e = k();
        e ||
          (b.hamburger.classList.add(O.SHOW_NAV_TRIGGER),
          b.columnCta && b.columnCta.classList.add(O.MOBILE_HIDE_COLUMN),
          b.columnSpacers.forEach(function(e) {
            return e.classList.add(O.MOBILE_HIDE_COLUMN);
          }),
          b.columnNav.classList.add(O.MOBILE_HIDE_COLUMN));
        for (
          var t = u.querySelectorAll(".js-mobile-subnav-trigger"), o = 0;
          o < t.length;
          o += 1
        )
          t[o].addEventListener("click", G);
        K(e),
          "sticky" === N &&
            (a.addEventListener(
              "resize",
              (function(r) {
                var a,
                  i =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : 100;
                return function() {
                  for (
                    var e = this, t = arguments.length, o = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    o[n] = arguments[n];
                  clearTimeout(a),
                    (a = setTimeout(function() {
                      r.apply(e, o);
                    }, i));
                };
              })(Z, 200)
            ),
            a.addEventListener("message", X),
            a.addEventListener("scroll", J),
            b.bar || (b.bar = u.querySelector(".lp-bar__pusher")),
            e &&
              (b.textLogo
                ? oe()
                : ((h = function() {
                    setTimeout(function() {
                      oe();
                    }, E);
                  }),
                  ((y = new Image()).onload = h),
                  (y.onerror = h),
                  (y.src = b.imageLogo.src))));
      })();
    })(window, document);
  },
};
</script>
<style lang="">
</style>