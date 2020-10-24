/*!
floating-scroll v3.0.4
https://amphiluke.github.io/floating-scroll/
(c) 2018 Amphiluke
*/
!function(i,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],t):t(i.jQuery)}(this,function(i){"use strict";var t={init:function(i){var t=i.closest(".fl-scrolls-body");t.length&&(this.scrollBody=t),this.container=i[0],this.visible=!0,this.initWidget(),this.updateAPI(),this.syncWidget(),this.addEventHandlers()},initWidget:function(){var t=this.widget=i("<div class='fl-scrolls'></div>");i("<div></div>").appendTo(t).css({width:this.container.scrollWidth+"px"}),t.appendTo(this.container)},addEventHandlers:function(){var t=this;(t.eventHandlers=[{$el:t.scrollBody||i(window),handlers:{scroll:function(){t.checkVisibility()},resize:function(){t.updateAPI()}}},{$el:t.widget,handlers:{scroll:function(){t.visible&&t.syncContainer(!0)}}},{$el:i(t.container),handlers:{scroll:function(){t.syncWidget(!0)},focusin:function(){setTimeout(function(){return t.syncWidget()},0)},"update.fscroll":function(i){"fscroll"===i.namespace&&t.updateAPI()},"destroy.fscroll":function(i){"fscroll"===i.namespace&&t.destroyAPI()}}}]).forEach(function(i){var t=i.$el,n=i.handlers;return t.bind(n)})},checkVisibility:function(){var i=this.widget,t=this.container,n=this.scrollBody,e=i[0].scrollWidth<=i[0].offsetWidth;if(!e){var s=t.getBoundingClientRect(),o=n?n[0].getBoundingClientRect().bottom:window.innerHeight||document.documentElement.clientHeight;e=s.bottom<=o||s.top>o}this.visible===e&&(this.visible=!e,i.toggleClass("fl-scrolls-hidden"))},syncContainer:function(i){void 0===i&&(i=!1);!0!==this.skipSyncContainer?(this.skipSyncWidget=i,this.container.scrollLeft=this.widget[0].scrollLeft):this.skipSyncContainer=!1},syncWidget:function(i){void 0===i&&(i=!1);!0!==this.skipSyncWidget?(this.skipSyncContainer=i,this.widget[0].scrollLeft=this.container.scrollLeft):this.skipSyncWidget=!1},updateAPI:function(){var t=this.widget,n=this.container,e=this.scrollBody;t.width(n.clientWidth),e||t.css("left",n.getBoundingClientRect().left+"px"),i("div",t).width(n.scrollWidth),this.syncWidget(),this.checkVisibility()},destroyAPI:function(){this.eventHandlers.forEach(function(i){var t=i.$el,n=i.handlers;return t.unbind(n)}),this.widget.remove(),this.eventHandlers=this.widget=this.container=this.scrollBody=null}};i.fn.floatingScroll=function(n){return void 0===n&&(n="init"),"init"===n?this.each(function(n,e){return Object.create(t).init(i(e))}):t.hasOwnProperty(n+"API")&&this.trigger(n+".fscroll"),this},i(document).ready(function(){i("body [data-fl-scrolls]").floatingScroll()})});
