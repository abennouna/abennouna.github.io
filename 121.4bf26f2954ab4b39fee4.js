(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{Jz7x:function(t,e,i){"use strict";i.r(e),i.d(e,"IonAnimationController",function(){return a});var s=/(^-?\d*\.?\d*)(.*)/,r={translateX:1,translateY:1,translateZ:1,scale:1,scaleX:1,scaleY:1,scaleZ:1,rotate:1,rotateX:1,rotateY:1,rotateZ:1,skewX:1,skewY:1,perspective:1},n=window.requestAnimationFrame||function(t){return t(Date.now())},o=function(){function t(){this._hasDur=!1,this._hasTweenEffect=!1,this._isAsync=!1,this._isReverse=!1,this._destroyed=!1,this.hasChildren=!1,this.isPlaying=!1,this.hasCompleted=!1}return t.prototype.addElement=function(t){if(t)if(t.length)for(var e=0;e<t.length;e++)this._addEl(t[e]);else this._addEl(t);return this},t.prototype._addEl=function(t){1===t.nodeType&&(this._elements=this._elements||[]).push(t)},t.prototype.add=function(t){return t.parent=this,this.hasChildren=!0,(this._childAnimations=this._childAnimations||[]).push(t),this},t.prototype.getDuration=function(t){return t&&null!=t.duration?t.duration:null!=this._duration?this._duration:this.parent?this.parent.getDuration():0},t.prototype.isRoot=function(){return!this.parent},t.prototype.duration=function(t){return this._duration=t,this},t.prototype.getEasing=function(){return this._isReverse&&this._reversedEasingName?this._reversedEasingName:null!=this._easingName?this._easingName:this.parent&&this.parent.getEasing()||null},t.prototype.easing=function(t){return this._easingName=t,this},t.prototype.easingReverse=function(t){return this._reversedEasingName=t,this},t.prototype.from=function(t,e){return this._addProp("from",t,e),this},t.prototype.to=function(t,e,i){var s=this._addProp("to",t,e);return i&&this.afterClearStyles([s.trans?"transform":t]),this},t.prototype.fromTo=function(t,e,i,s){return this.from(t,e).to(t,i,s)},t.prototype._getProp=function(t){if(this._fxProperties)return this._fxProperties.find(function(e){return e.effectName===t})},t.prototype._addProp=function(t,e,i){var n=this._getProp(e);if(!n){var o=1===r[e];n={effectName:e,trans:o,wc:o?"transform":e},(this._fxProperties=this._fxProperties||[]).push(n)}var a={val:i,num:0,effectUnit:""};if(n[t]=a,"string"==typeof i&&i.indexOf(" ")<0){var h=i.match(s);if(h){var l=parseFloat(h[1]);isNaN(l)||(a.num=l),a.effectUnit=h[0]!==h[2]?h[2]:""}}else"number"==typeof i&&(a.num=i);return n},t.prototype.beforeAddClass=function(t){return(this._beforeAddClasses=this._beforeAddClasses||[]).push(t),this},t.prototype.beforeRemoveClass=function(t){return(this._beforeRemoveClasses=this._beforeRemoveClasses||[]).push(t),this},t.prototype.beforeStyles=function(t){return this._beforeStyles=t,this},t.prototype.beforeClearStyles=function(t){this._beforeStyles=this._beforeStyles||{};for(var e=0,i=t;e<i.length;e++)this._beforeStyles[i[e]]="";return this},t.prototype.beforeAddRead=function(t){return(this._readCallbacks=this._readCallbacks||[]).push(t),this},t.prototype.beforeAddWrite=function(t){return(this._writeCallbacks=this._writeCallbacks||[]).push(t),this},t.prototype.afterAddClass=function(t){return(this._afterAddClasses=this._afterAddClasses||[]).push(t),this},t.prototype.afterRemoveClass=function(t){return(this._afterRemoveClasses=this._afterRemoveClasses||[]).push(t),this},t.prototype.afterStyles=function(t){return this._afterStyles=t,this},t.prototype.afterClearStyles=function(t){this._afterStyles=this._afterStyles||{};for(var e=0,i=t;e<i.length;e++)this._afterStyles[i[e]]="";return this},t.prototype.play=function(t){var e=this;this._destroyed||(this._isAsync=this._hasDuration(t),this._clearAsync(),this._playInit(t),n(function(){n(function(){e._playDomInspect(t)})}))},t.prototype.playAsync=function(t){var e=this;return new Promise(function(i){return e.onFinish(i,{oneTimeCallback:!0,clearExistingCallacks:!0}),e.play(t),e})},t.prototype.playSync=function(){if(!this._destroyed){var t={duration:0};this._isAsync=!1,this._clearAsync(),this._playInit(t),this._playDomInspect(t)}},t.prototype._playInit=function(t){this._hasTweenEffect=!1,this.isPlaying=!0,this.hasCompleted=!1,this._hasDur=this.getDuration(t)>32;var e=this._childAnimations;if(e)for(var i=0,s=e;i<s.length;i++)s[i]._playInit(t);this._hasDur&&(this._progress(0),this._willChange(!0))},t.prototype._playDomInspect=function(t){var e=this;this._beforeAnimation();var i=this.getDuration(t);this._isAsync&&this._asyncEnd(i,!0),this._playProgress(t),this._isAsync&&!this._destroyed&&n(function(){e._playToStep(1)})},t.prototype._playProgress=function(t){var e=this._childAnimations;if(e)for(var i=0,s=e;i<s.length;i++)s[i]._playProgress(t);this._hasDur?this._setTrans(this.getDuration(t),!1):(this._progress(1),this._setAfterStyles(),this._didFinish(!0))},t.prototype._playToStep=function(t){if(!this._destroyed){var e=this._childAnimations;if(e)for(var i=0,s=e;i<s.length;i++)s[i]._playToStep(t);this._hasDur&&this._progress(t)}},t.prototype._asyncEnd=function(t,e){var i=this;i._unregisterTrnsEnd=function(t,e){var i,s={passive:!0};function r(){i&&i()}function n(i){t===i.target&&(r(),e(i))}return t&&(t.addEventListener("webkitTransitionEnd",n,s),t.addEventListener("transitionend",n,s),i=function(){t.removeEventListener("webkitTransitionEnd",n,s),t.removeEventListener("transitionend",n,s)}),r}(i._transEl(),function(){i._clearAsync(),i._playEnd(),i._didFinishAll(e,!0,!1)}),i._timerId=setTimeout(function(){i._timerId=void 0,i._clearAsync(),i._playEnd(e?1:0),i._didFinishAll(e,!0,!1)},t+400)},t.prototype._playEnd=function(t){var e=this._childAnimations;if(e)for(var i=0,s=e;i<s.length;i++)s[i]._playEnd(t);this._hasDur&&(null!=t&&(this._setTrans(0,!0),this._progress(t)),this._setAfterStyles(),this._willChange(!1))},t.prototype._hasDuration=function(t){if(this.getDuration(t)>32)return!0;var e=this._childAnimations;if(e)for(var i=0,s=e;i<s.length;i++)if(s[i]._hasDuration(t))return!0;return!1},t.prototype._hasDomReads=function(){if(this._readCallbacks&&this._readCallbacks.length>0)return!0;var t=this._childAnimations;if(t)for(var e=0,i=t;e<i.length;e++)if(i[e]._hasDomReads())return!0;return!1},t.prototype.stop=function(t){void 0===t&&(t=1),this._clearAsync(),this._hasDur=!0,this._playEnd(t)},t.prototype._clearAsync=function(){this._unregisterTrnsEnd&&this._unregisterTrnsEnd(),this._timerId&&clearTimeout(this._timerId),this._timerId=this._unregisterTrnsEnd=void 0},t.prototype._progress=function(t){var e,i=this._elements,s=this._fxProperties;if(i&&0!==i.length&&s&&!this._destroyed){this._isReverse&&(t=1-t);var r,n=0,o=0,a="";for(n=0;n<s.length;n++)if((r=s[n]).from&&r.to){var h=r.from.num,l=r.to.num,f=h!==l;if(f&&(this._hasTweenEffect=!0),0===t?e=r.from.val:1===t?e=r.to.val:f&&(e=(l-h)*t+h+r.to.effectUnit),null!==e){var _=r.effectName;if(r.trans)a+=_+"("+e+") ";else for(o=0;o<i.length;o++)i[o].style.setProperty(_,e)}}if(a.length)for((!this._isReverse&&1!==t||this._isReverse&&0!==t)&&(a+="translateZ(0px)"),n=0;n<i.length;n++)i[n].style.setProperty("transform",a)}},t.prototype._setTrans=function(t,e){var i=this._elements;if(i&&0!==i.length&&this._fxProperties)for(var s=e?"linear":this.getEasing(),r=t+"ms",n=0,o=i;n<o.length;n++){var a=o[n].style;t>0?(a.transitionDuration=r,s&&(a.transitionTimingFunction=s)):a.transitionDuration="0"}},t.prototype._beforeAnimation=function(){this._fireBeforeReadFunc(),this._fireBeforeWriteFunc(),this._setBeforeStyles()},t.prototype._setBeforeStyles=function(){var t=this._childAnimations;if(t)for(var e=0,i=t;e<i.length;e++)i[e]._setBeforeStyles();var s=this._elements;if(s&&0!==s.length&&!this._isReverse)for(var r=this._beforeAddClasses,n=this._beforeRemoveClasses,o=0,a=s;o<a.length;o++){var h=a[o],l=h.classList;if(r)for(var f=0,_=r;f<_.length;f++){var p=_[f];l.add(p)}if(n)for(var c=0,u=n;c<u.length;c++)l.remove(p=u[c]);if(this._beforeStyles)for(var d=0,y=Object.entries(this._beforeStyles);d<y.length;d++){var v=y[d];h.style.setProperty(v[0],v[1])}}},t.prototype._fireBeforeReadFunc=function(){var t=this._childAnimations;if(t)for(var e=0,i=t;e<i.length;e++)i[e]._fireBeforeReadFunc();var s=this._readCallbacks;if(s)for(var r=0,n=s;r<n.length;r++)(0,n[r])()},t.prototype._fireBeforeWriteFunc=function(){var t=this._childAnimations;if(t)for(var e=0,i=t;e<i.length;e++)i[e]._fireBeforeWriteFunc();var s=this._writeCallbacks;if(s)for(var r=0,n=s;r<n.length;r++)(0,n[r])()},t.prototype._setAfterStyles=function(){var t=this._elements;if(t)for(var e=0,i=t;e<i.length;e++){var s=i[e],r=s.classList;if(s.style.transitionDuration=s.style.transitionTimingFunction="",this._isReverse){var n=this._beforeAddClasses;if(n)for(var o=0,a=n;o<a.length;o++){var h=a[o];r.remove(h)}var l=this._beforeRemoveClasses;if(l)for(var f=0,_=l;f<_.length;f++)r.add(h=_[f]);var p=this._beforeStyles;if(p)for(var c=0,u=Object.keys(p);c<u.length;c++)s.style.removeProperty(u[c])}else{var d=this._afterAddClasses;if(d)for(var y=0,v=d;y<v.length;y++)r.add(h=v[y]);var g=this._afterRemoveClasses;if(g)for(var m=0,b=g;m<b.length;m++)r.remove(h=b[m]);var C=this._afterStyles;if(C)for(var A=0,k=Object.entries(C);A<k.length;A++){var E=k[A];s.style.setProperty(E[0],E[1])}}}},t.prototype._willChange=function(t){var e,i,s=this._fxProperties;if(t&&s){e=[];for(var r=0,n=s;r<n.length;r++){var o=n[r].wc;"webkitTransform"===o?e.push("transform","-webkit-transform"):o&&e.push(o)}i=e.join(",")}else i="";var a=this._elements;if(a)for(var h=0,l=a;h<l.length;h++)l[h].style.setProperty("will-change",i)},t.prototype.progressStart=function(){this._clearAsync(),this._beforeAnimation(),this._progressStart()},t.prototype._progressStart=function(){var t=this._childAnimations;if(t)for(var e=0,i=t;e<i.length;e++)i[e]._progressStart();this._setTrans(0,!0),this._willChange(!0)},t.prototype.progressStep=function(t){t=Math.min(1,Math.max(0,t));var e=this._childAnimations;if(e)for(var i=0,s=e;i<s.length;i++)s[i].progressStep(t);this._progress(t)},t.prototype.progressEnd=function(t,e,i){var s=this;this._isReverse&&(e=1-e);var r=t?1:0,o=Math.abs(e-r);void 0===i&&(i=-1),i<0?i=this._duration||0:o<.05&&(i=0),this._isAsync=i>30,this._progressEnd(t,r,i,this._isAsync),this._isAsync&&(this._asyncEnd(i,t),this._destroyed||n(function(){s._playToStep(r)}))},t.prototype._progressEnd=function(t,e,i,s){var r=this._childAnimations;if(r)for(var n=0,o=r;n<o.length;n++)o[n]._progressEnd(t,e,i,s);s?(this.isPlaying=!0,this.hasCompleted=!1,this._hasDur=!0,this._willChange(!0),this._setTrans(i,!1)):(this._progress(e),this._willChange(!1),this._setAfterStyles(),this._didFinish(t))},t.prototype.onFinish=function(t,e){return e&&e.clearExistingCallacks&&(this._onFinishCallbacks=this._onFinishOneTimeCallbacks=void 0),e&&e.oneTimeCallback?(this._onFinishOneTimeCallbacks=this._onFinishOneTimeCallbacks||[],this._onFinishOneTimeCallbacks.push(t)):(this._onFinishCallbacks=this._onFinishCallbacks||[],this._onFinishCallbacks.push(t)),this},t.prototype._didFinishAll=function(t,e,i){var s=this._childAnimations;if(s)for(var r=0,n=s;r<n.length;r++)n[r]._didFinishAll(t,e,i);(e&&this._isAsync||i&&!this._isAsync)&&this._didFinish(t)},t.prototype._didFinish=function(t){if(this.isPlaying=!1,this.hasCompleted=t,this._onFinishCallbacks)for(var e=0,i=this._onFinishCallbacks;e<i.length;e++)(0,i[e])(this);if(this._onFinishOneTimeCallbacks){for(var s=0,r=this._onFinishOneTimeCallbacks;s<r.length;s++)(0,r[s])(this);this._onFinishOneTimeCallbacks.length=0}},t.prototype.reverse=function(t){void 0===t&&(t=!0);var e=this._childAnimations;if(e)for(var i=0,s=e;i<s.length;i++)s[i].reverse(t);return this._isReverse=!!t,this},t.prototype.destroy=function(){this._destroyed=!0;var t=this._childAnimations;if(t)for(var e=0,i=t;e<i.length;e++)i[e].destroy();this._clearAsync(),this._elements&&(this._elements.length=0),this._readCallbacks&&(this._readCallbacks.length=0),this._writeCallbacks&&(this._writeCallbacks.length=0),this.parent=void 0,this._childAnimations&&(this._childAnimations.length=0),this._onFinishCallbacks&&(this._onFinishCallbacks.length=0),this._onFinishOneTimeCallbacks&&(this._onFinishOneTimeCallbacks.length=0)},t.prototype._transEl=function(){var t=this._childAnimations;if(t)for(var e=0,i=t;e<i.length;e++){var s=i[e]._transEl();if(s)return s}return this._hasTweenEffect&&this._hasDur&&this._elements&&this._elements.length>0?this._elements[0]:null},t}(),a=function(){function t(){}return t.prototype.create=function(t,e,i){return t?t(o,e,i):Promise.resolve(new o)},Object.defineProperty(t,"is",{get:function(){return"ion-animation-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0}}},enumerable:!0,configurable:!0}),t}()}}]);