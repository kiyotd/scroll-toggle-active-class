!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["kiyotd/scroll-toggle-active-class"]=t():e["kiyotd/scroll-toggle-active-class"]=t()}("undefined"!=typeof self?self:this,(()=>(()=>{"use strict";var e={201:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ScrollToggleActiveClass=void 0;var o=function(){function e(e){if(this.options=e,!this.options.selectors)throw new Error("targets is required.");this.options.offset||(this.options.offset=0),this.options.activeClassName||(this.options.activeClassName="active"),this.options.once||(this.options.once=!1),this.init()}return e.prototype.init=function(){var e=this,t=new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting?t.target.classList.add(e.options.activeClassName):e.options.once||t.target.classList.remove(e.options.activeClassName)}))}),{rootMargin:"-".concat(this.options.offset,"px 0px 0px 0px")});this.options.selectors.map((function(e){var o=document.querySelectorAll(e);0!==o.length?Array.from(o).forEach((function(e){t.observe(e)})):console.log("There is no target(".concat(e,")."))}))},e}();t.ScrollToggleActiveClass=o}},t={};function o(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,o),r.exports}var s={};return(()=>{var e=s;Object.defineProperty(e,"__esModule",{value:!0}),e.ScrollToggleActiveClass=void 0;var t=o(201);Object.defineProperty(e,"ScrollToggleActiveClass",{enumerable:!0,get:function(){return t.ScrollToggleActiveClass}}),window.ScrollToggleActiveClass=t.ScrollToggleActiveClass})(),s})()));