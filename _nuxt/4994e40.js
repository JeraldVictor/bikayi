(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{472:function(t,e,n){"use strict";n.r(e);n(31),n(67);var r={props:{person:{type:Object,required:!0}},filters:{trimSentence:function(t){if(t){var e=t;return(e=e.replace(/\"/g,"")).substr(0,50).substr(0,Math.min(e.length,e.lastIndexOf(" ")))+"..."}return""}}},c=n(43),l=n(44),o=n.n(l),v=n(191),d=n(87),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{elevation:"16","min-width":"250","max-width":"344"}},[n("v-card-text",[n("div",{staticClass:"primary--text font-weight-bold text-capitalize"},[t._v("\n      "+t._s(t.person.surname+", "+t.person.firstname)+"\n    ")]),t._v(" "),n("div",{staticClass:"d-flex justify-space-between"},[n("div",{staticClass:"white--text overline text-left"},[t._v(t._s(t.person.year))]),t._v(" "),n("div",{staticClass:"heading--text overline text-right"},[t._v("\n        "+t._s(t.person.category)+"\n      ")])]),t._v(" "),n("div",{staticClass:"accent--text text-capitalize"},[t._v("\n      "+t._s(t._f("trimSentence")(t.person.motivation))+"\n    ")])])],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VCard:v.a,VCardText:d.b})}}]);