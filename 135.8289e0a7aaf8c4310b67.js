(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{qNiG:function(e,t,o){"use strict";o.r(t),o.d(t,"IonPopover",function(){return b}),o.d(t,"IonPopoverController",function(){return v});var n=o("B5Ai"),r=o("cBjU"),i=o("6Fnk"),a=o("PkGC"),s=o("jaT/"),p=o("gGfD");function l(e,t,o){var n="top",r="left",i=t.querySelector(".popover-content"),a=i.getBoundingClientRect(),s=a.width,p=a.height,l=window.innerWidth,d=window.innerHeight,m=o&&o.target&&o.target.getBoundingClientRect(),u=null!=m&&"top"in m?m.top:d/2-p/2,f=null!=m&&"left"in m?m.left:l/2,b=m&&m.width||0,h=m&&m.height||0,v=t.querySelector(".popover-arrow"),y=v.getBoundingClientRect(),g=y.width,w=y.height;null==m&&(v.style.display="none");var x={top:u+h,left:f+b/2-g/2},P={top:u+h+(w-1),left:f+b/2-s/2},D=!1,k=!1;P.left<c+25?(D=!0,P.left=c):s+c+P.left+25>l&&(k=!0,P.left=l-s-c,r="right"),u+h+p>d&&u-p>0?(x.top=u-(w+1),P.top=u-p-(w-1),t.className=t.className+" popover-bottom",n="bottom"):u+h+p>d&&(i.style.bottom=c+"%"),v.style.top=x.top+"px",v.style.left=x.left+"px",i.style.top=P.top+"px",i.style.left=P.left+"px",D&&(i.style.left="calc("+P.left+"px + var(--ion-safe-area-left, 0px))"),k&&(i.style.left="calc("+P.left+"px - var(--ion-safe-area-right, 0px))"),i.style.transformOrigin=n+" "+r;var j=new e,O=new e;O.addElement(t.querySelector("ion-backdrop")),O.fromTo("opacity",.01,.08);var E=new e;return E.addElement(t.querySelector(".popover-wrapper")),E.fromTo("opacity",.01,1),Promise.resolve(j.addElement(t).easing("ease").duration(100).add(O).add(E))}o("1D03");var c=5;function d(e,t){var o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),n.fromTo("opacity",.08,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(n).add(r))}function m(e,t,o){var n="top",r="left",i=t.querySelector(".popover-content"),a=i.getBoundingClientRect(),s=a.width,p=a.height,l=window.innerWidth,c=window.innerHeight,d=o&&o.target&&o.target.getBoundingClientRect(),m=null!=d&&"top"in d?d.top:c/2-p/2,f=d&&d.height||0,b={top:m,left:null!=d&&"left"in d?d.left:l/2-s/2};b.left<u?b.left=u:s+u+b.left>l&&(b.left=l-s-u,r="right"),m+f+p>c&&m-p>0?(b.top=m-p,t.className=t.className+" popover-bottom",n="bottom"):m+f+p>c&&(i.style.bottom=u+"px"),i.style.top=b.top+"px",i.style.left=b.left+"px",i.style.transformOrigin=n+" "+r;var h=new e,v=new e;v.addElement(t.querySelector("ion-backdrop")),v.fromTo("opacity",.01,.32);var y=new e;y.addElement(t.querySelector(".popover-wrapper")),y.fromTo("opacity",.01,1);var g=new e;g.addElement(t.querySelector(".popover-content")),g.fromTo("scale",.001,1);var w=new e;return w.addElement(t.querySelector(".popover-viewport")),w.fromTo("opacity",.01,1),Promise.resolve(h.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(v).add(y).add(g).add(w))}var u=12;function f(e,t){var o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),n.fromTo("opacity",.32,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(n).add(r))}var b=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0}return e.prototype.componentDidLoad=function(){this.ionPopoverDidLoad.emit()},e.prototype.componentDidUnload=function(){this.ionPopoverDidUnload.emit()},e.prototype.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,i.a)},e.prototype.lifecycle=function(e){var t=this.usersElement,o=h[e.type];if(t&&o){var n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(n)}},e.prototype.present=function(){return n.a(this,void 0,void 0,function(){var e,t,o;return n.c(this,function(n){switch(n.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return t=Object.assign({},this.componentProps,{popover:this.el}),o=this,[4,Object(s.a)(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:return o.usersElement=n.sent(),[4,Object(p.a)(this.usersElement)];case 2:return n.sent(),[2,Object(i.e)(this,"popoverEnter",l,m,this.event)]}})})},e.prototype.dismiss=function(e,t){return n.a(this,void 0,void 0,function(){var o;return n.c(this,function(n){switch(n.label){case 0:return[4,Object(i.b)(this,e,t,"popoverLeave",d,f,this.event)];case 1:return(o=n.sent())?[4,Object(s.b)(this.delegate,this.usersElement)]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2,o]}})})},e.prototype.onDidDismiss=function(){return Object(i.c)(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(i.c)(this.el,"ionPopoverWillDismiss")},e.prototype.hostData=function(){return{style:{zIndex:2e4+this.overlayIndex},"no-router":!0,class:Object.assign({},Object(a.a)(this.cssClass),{"popover-translucent":this.translucent})}},e.prototype.render=function(){return[Object(r.b)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(r.b)("div",{class:"popover-wrapper"},Object(r.b)("div",{class:"popover-arrow"}),Object(r.b)("div",{class:"popover-content"}))]},Object.defineProperty(e,"is",{get:function(){return"ion-popover"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationCtrl:{connect:"ion-animation-controller"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},delegate:{type:"Any",attr:"delegate"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},event:{type:"Any",attr:"event"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionPopoverDidLoad",method:"ionPopoverDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidUnload",method:"ionPopoverDidUnload",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionDismiss",method:"onDismiss"},{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionPopoverDidPresent",method:"lifecycle"},{name:"ionPopoverWillPresent",method:"lifecycle"},{name:"ionPopoverWillDismiss",method:"lifecycle"},{name:"ionPopoverDidDismiss",method:"lifecycle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-popover-md-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1000}.popover-wrapper.sc-ion-popover-md{opacity:0;z-index:10}.popover-content.sc-ion-popover-md{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-md{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-md-h{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0,0,0,0.2),0 8px 10px 1px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12)}.popover-content.sc-ion-popover-md{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}.popover-viewport.sc-ion-popover-md{-webkit-transition-delay:.1s;transition-delay:.1s}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),h={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"},v=function(){function e(){}return e.prototype.create=function(e){return Object(i.f)(this.doc.createElement("ion-popover"),e)},e.prototype.dismiss=function(e,t,o){return Object(i.g)(this.doc,e,t,"ion-popover",o)},e.prototype.getTop=function(){return n.a(this,void 0,void 0,function(){return n.c(this,function(e){return[2,Object(i.h)(this.doc,"ion-popover")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-popover-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}()}}]);