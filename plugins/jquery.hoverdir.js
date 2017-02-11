/**
 * jquery.hoverdir.js v1.1.2
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
(function (n) { "use strict"; typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports != "undefined" ? module.exports = n(require("jquery")) : n(jQuery) })(function (n) { "use strict"; function t(t, i) { this.$el = n(t); this.options = n.extend(!0, {}, this.defaults, i); this.isVisible = !1; this.$hoverElem = this.$el.find(this.options.hoverElem); this.transitionProp = "all " + this.options.speed + "ms " + this.options.easing; this.support = this._supportsTransitions(); this._loadEvents() } t.prototype = { defaults: { speed: 300, easing: "ease", hoverDelay: 0, inverse: !1, hoverElem: "div" }, constructor: t, _supportsTransitions: function () { var i, t; if (typeof Modernizr != "undefined") return Modernizr.csstransitions; var u = document.body || document.documentElement, r = u.style, n = "transition"; if (typeof r[n] == "string") return !0; for (i = ["Moz", "webkit", "Webkit", "Khtml", "O", "ms"], n = n.charAt(0).toUpperCase() + n.substr(1), t = 0; t < i.length; t++) if (typeof r[i[t] + n] == "string") return !0; return !1 }, _loadEvents: function () { this.$el.on("mouseenter.hoverdir mouseleave.hoverdir", n.proxy(function (n) { this.direction = this._getDir({ x: n.pageX, y: n.pageY }); n.type === "mouseenter" ? this._showHover() : this._hideHover() }, this)) }, _showHover: function () { var t = this._getStyle(this.direction); this.support && this.$hoverElem.css("transition", ""); this.$hoverElem.hide().css(t.from); clearTimeout(this.tmhover); this.tmhover = setTimeout(n.proxy(function () { this.$hoverElem.show(0, n.proxy(function () { this.support && this.$hoverElem.css("transition", this.transitionProp); this._applyAnimation(t.to) }, this)) }, this), this.options.hoverDelay); this.isVisible = !0 }, _hideHover: function () { var n = this._getStyle(this.direction); this.support && this.$hoverElem.css("transition", this.transitionProp); clearTimeout(this.tmhover); this._applyAnimation(n.from); this.isVisible = !1 }, _getDir: function (n) { var t = this.$el.width(), i = this.$el.height(), r = (n.x - this.$el.offset().left - t / 2) * (t > i ? i / t : 1), u = (n.y - this.$el.offset().top - i / 2) * (i > t ? t / i : 1); return Math.round((Math.atan2(u, r) * (180 / Math.PI) + 180) / 90 + 3) % 4 }, _getStyle: function (n) { var t, i, r = { left: "0", top: "-100%" }, u = { left: "0", top: "100%" }, f = { left: "-100%", top: "0" }, e = { left: "100%", top: "0" }, o = { top: "0" }, s = { left: "0" }; switch (n) { case 0: case "top": t = this.options.inverse ? u : r; i = o; break; case 1: case "right": t = this.options.inverse ? f : e; i = s; break; case 2: case "bottom": t = this.options.inverse ? r : u; i = o; break; case 3: case "left": t = this.options.inverse ? e : f; i = s } return { from: t, to: i } }, _applyAnimation: function (t) { n.fn.applyStyle = this.support ? n.fn.css : n.fn.animate; this.$hoverElem.stop().applyStyle(t, n.extend(!0, [], { duration: this.options.speed })) }, show: function (n) { this.$el.off("mouseenter.hoverdir mouseleave.hoverdir"); this.isVisible || (this.direction = n || "top", this._showHover()) }, hide: function (n) { this.rebuild(); this.isVisible && (this.direction = n || "bottom", this._hideHover()) }, setOptions: function (t) { this.options = n.extend(!0, {}, this.defaults, this.options, t) }, destroy: function () { this.$el.off("mouseenter.hoverdir mouseleave.hoverdir"); this.$el.data("hoverdir", null) }, rebuild: function (n) { typeof n == "object" && this.setOptions(n); this._loadEvents() } }; n.fn.hoverdir = function (i, r) { return this.each(function () { var u = n(this).data("hoverdir"), f = typeof i == "object" && i; u || (u = new t(this, f), n(this).data("hoverdir", u)); typeof i == "string" && (u[i](r), i === "destroy" && n(this).data("hoverdir", !1)) }) }; n.fn.hoverdir.Constructor = t });

/*
* Pixor - Copyright (c) 2015 Federico Schiocchet - Pixor (www.pixor.it)
*/


$(document).ready(function () {

    $('.nav > li > a').hoverdir();
});
