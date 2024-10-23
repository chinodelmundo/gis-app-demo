import{a as G,b as q}from"./chunk-SJMB2IGG.js";import"./chunk-PA3Z3CTK.js";import{c as ne,d as K,f as R,g as z,h as Q}from"./chunk-NJC4F6AZ.js";import{b as ie,g as ae,i as oe,j as re,l as g}from"./chunk-NJVFZK2L.js";import{$ as U,$a as v,$b as J,Ca as F,Cb as l,Da as C,Db as d,Eb as f,Fb as I,Gb as T,Hb as L,Jc as j,Kb as O,Lb as h,Lc as Z,Mb as P,Mc as N,Nb as S,Nc as ee,Ob as E,Pc as te,Qb as w,Rb as D,Tb as p,Vb as X,_a as s,ba as $,bc as y,ka as b,la as _,ma as V,nb as H,rb as m,sb as u,sc as M,tb as a,uc as x,vb as k,vc as Y,xb as A}from"./chunk-WFWAJT23.js";var de=["*",[["p-header"]]],pe=["*","p-header"],he=i=>({$implicit:i}),se=i=>({transitionParams:i}),ue=i=>({value:"visible",params:i}),me=i=>({value:"hidden",params:i});function ge(i,o){if(i&1&&f(0,"span",11),i&2){let e=h(3);A(e.accordion.collapseIcon),a("ngClass",e.iconClass),u("aria-hidden",!0)}}function fe(i,o){if(i&1&&f(0,"ChevronDownIcon",11),i&2){let e=h(3);a("ngClass",e.iconClass),u("aria-hidden",!0)}}function be(i,o){if(i&1&&(I(0),m(1,ge,1,4,"span",9)(2,fe,1,2,"ChevronDownIcon",10),T()),i&2){let e=h(2);s(),a("ngIf",e.accordion.collapseIcon),s(),a("ngIf",!e.accordion.collapseIcon)}}function ve(i,o){if(i&1&&f(0,"span",11),i&2){let e=h(3);A(e.accordion.expandIcon),a("ngClass",e.iconClass),u("aria-hidden",!0)}}function ye(i,o){if(i&1&&f(0,"ChevronRightIcon",11),i&2){let e=h(3);a("ngClass",e.iconClass),u("aria-hidden",!0)}}function _e(i,o){if(i&1&&(I(0),m(1,ve,1,4,"span",9)(2,ye,1,2,"ChevronRightIcon",10),T()),i&2){let e=h(2);s(),a("ngIf",e.accordion.expandIcon),s(),a("ngIf",!e.accordion.expandIcon)}}function Ce(i,o){if(i&1&&(I(0),m(1,be,3,2,"ng-container",3)(2,_e,3,2,"ng-container",3),T()),i&2){let e=h();s(),a("ngIf",e.selected),s(),a("ngIf",!e.selected)}}function Ie(i,o){}function Te(i,o){i&1&&m(0,Ie,0,0,"ng-template")}function xe(i,o){if(i&1&&(l(0,"span",12),p(1),d()),i&2){let e=h();s(),X(" ",e.header," ")}}function Ae(i,o){i&1&&L(0)}function Se(i,o){i&1&&S(0,1,["*ngIf","hasHeaderFacet"])}function Ee(i,o){i&1&&L(0)}function we(i,o){if(i&1&&(I(0),m(1,Ee,1,0,"ng-container",6),T()),i&2){let e=h();s(),a("ngTemplateOutlet",e.contentTemplate)}}var De=["*"],W=(()=>{class i{el;changeDetector;id;header;headerStyle;tabStyle;contentStyle;tabStyleClass;headerStyleClass;contentStyleClass;disabled;cache=!0;transitionOptions="400ms cubic-bezier(0.86, 0, 0.07, 1)";iconPos="start";get selected(){return this._selected}set selected(e){this._selected=e,this.loaded||(this._selected&&this.cache&&(this.loaded=!0),this.changeDetector.detectChanges())}headerAriaLevel=2;selectedChange=new C;headerFacet;templates;_selected=!1;get iconClass(){return this.iconPos==="end"?"p-accordion-toggle-icon-end":"p-accordion-toggle-icon"}contentTemplate;headerTemplate;iconTemplate;loaded=!1;accordion;constructor(e,n,t){this.el=n,this.changeDetector=t,this.accordion=e,this.id=ie()}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"header":this.headerTemplate=e.template;break;case"icon":this.iconTemplate=e.template;break;default:this.contentTemplate=e.template;break}})}toggle(e){if(this.disabled)return!1;let n=this.findTabIndex();if(this.selected)this.selected=!1,this.accordion.onClose.emit({originalEvent:e,index:n});else{if(!this.accordion.multiple)for(var t=0;t<this.accordion.tabs.length;t++)this.accordion.tabs[t].selected&&(this.accordion.tabs[t].selected=!1,this.accordion.tabs[t].selectedChange.emit(!1),this.accordion.tabs[t].changeDetector.markForCheck());this.selected=!0,this.loaded=!0,this.accordion.onOpen.emit({originalEvent:e,index:n})}this.selectedChange.emit(this.selected),this.accordion.updateActiveIndex(),this.changeDetector.markForCheck(),e?.preventDefault()}findTabIndex(){let e=-1;for(var n=0;n<this.accordion.tabs.length;n++)if(this.accordion.tabs[n]==this){e=n;break}return e}get hasHeaderFacet(){return this.headerFacet&&this.headerFacet.length>0}onKeydown(e){switch(e.code){case"Enter":case"Space":this.toggle(e),e.preventDefault();break;default:break}}getTabHeaderActionId(e){return`${e}_header_action`}getTabContentId(e){return`${e}_content`}ngOnDestroy(){this.accordion.tabs.splice(this.findTabIndex(),1)}static \u0275fac=function(n){return new(n||i)(v(U(()=>B)),v(F),v(M))};static \u0275cmp=_({type:i,selectors:[["p-accordionTab"]],contentQueries:function(n,t,r){if(n&1&&(E(r,ae,4),E(r,oe,4)),n&2){let c;w(c=D())&&(t.headerFacet=c),w(c=D())&&(t.templates=c)}},hostAttrs:[1,"p-element"],inputs:{id:"id",header:"header",headerStyle:"headerStyle",tabStyle:"tabStyle",contentStyle:"contentStyle",tabStyleClass:"tabStyleClass",headerStyleClass:"headerStyleClass",contentStyleClass:"contentStyleClass",disabled:[b.HasDecoratorInputTransform,"disabled","disabled",x],cache:[b.HasDecoratorInputTransform,"cache","cache",x],transitionOptions:"transitionOptions",iconPos:"iconPos",selected:"selected",headerAriaLevel:[b.HasDecoratorInputTransform,"headerAriaLevel","headerAriaLevel",Y]},outputs:{selectedChange:"selectedChange"},features:[H],ngContentSelectors:pe,decls:12,vars:44,consts:[[1,"p-accordion-tab",3,"ngClass","ngStyle"],["role","heading",1,"p-accordion-header"],["role","button",1,"p-accordion-header-link",3,"click","keydown","ngClass","ngStyle"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["class","p-accordion-header-text",4,"ngIf"],[4,"ngTemplateOutlet"],["role","region",1,"p-toggleable-content"],[1,"p-accordion-content",3,"ngClass","ngStyle"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-accordion-header-text"]],template:function(n,t){n&1&&(P(de),l(0,"div",0)(1,"div",1)(2,"a",2),O("click",function(c){return t.toggle(c)})("keydown",function(c){return t.onKeydown(c)}),m(3,Ce,3,2,"ng-container",3)(4,Te,1,0,null,4)(5,xe,2,1,"span",5)(6,Ae,1,0,"ng-container",6)(7,Se,1,0,"ng-content",3),d()(),l(8,"div",7)(9,"div",8),S(10),m(11,we,2,1,"ng-container",3),d()()()),n&2&&(k("p-accordion-tab-active",t.selected),a("ngClass",t.tabStyleClass)("ngStyle",t.tabStyle),u("data-pc-name","accordiontab"),s(),k("p-highlight",t.selected)("p-disabled",t.disabled),u("aria-level",t.headerAriaLevel)("data-p-disabled",t.disabled)("data-pc-section","header"),s(),a("ngClass",t.headerStyleClass)("ngStyle",t.headerStyle),u("tabindex",t.disabled?null:0)("id",t.getTabHeaderActionId(t.id))("aria-controls",t.getTabContentId(t.id))("aria-expanded",t.selected)("aria-disabled",t.disabled)("data-pc-section","headeraction"),s(),a("ngIf",!t.iconTemplate),s(),a("ngTemplateOutlet",t.iconTemplate)("ngTemplateOutletContext",y(34,he,t.selected)),s(),a("ngIf",!t.hasHeaderFacet),s(),a("ngTemplateOutlet",t.headerTemplate),s(),a("ngIf",t.hasHeaderFacet),s(),a("@tabContent",t.selected?y(38,ue,y(36,se,t.transitionOptions)):y(42,me,y(40,se,t.transitionOptions))),u("id",t.getTabContentId(t.id))("aria-hidden",!t.selected)("aria-labelledby",t.getTabHeaderActionId(t.id))("data-pc-section","toggleablecontent"),s(),a("ngClass",t.contentStyleClass)("ngStyle",t.contentStyle),s(2),a("ngIf",t.contentTemplate&&(t.cache?t.loaded:t.selected)))},dependencies:()=>[j,Z,ee,N,q,G],styles:[`@layer primeng{.p-accordion-header-link{cursor:pointer;display:flex;align-items:center;-webkit-user-select:none;user-select:none;position:relative;text-decoration:none}.p-accordion-header-link:focus{z-index:1}.p-accordion-header-text{line-height:1}.p-accordion .p-toggleable-content{overflow:hidden}.p-accordion .p-accordion-tab-active>.p-toggleable-content:not(.ng-animating){overflow:inherit}.p-accordion-toggle-icon-end{order:1;margin-left:auto}.p-accordion-toggle-icon{order:0}}
`],encapsulation:2,data:{animation:[ne("tabContent",[z("hidden",R({height:"0",visibility:"hidden"})),z("visible",R({height:"*",visibility:"visible"})),Q("visible <=> hidden",[K("{{transitionParams}}")]),Q("void => *",K(0))])]},changeDetection:0})}return i})(),B=(()=>{class i{el;changeDetector;multiple=!1;style;styleClass;expandIcon;collapseIcon;get activeIndex(){return this._activeIndex}set activeIndex(e){if(this._activeIndex=e,this.preventActiveIndexPropagation){this.preventActiveIndexPropagation=!1;return}this.updateSelectionState()}selectOnFocus=!1;get headerAriaLevel(){return this._headerAriaLevel}set headerAriaLevel(e){typeof e=="number"&&e>0?this._headerAriaLevel=e:this._headerAriaLevel!==2&&(this._headerAriaLevel=2)}onClose=new C;onOpen=new C;activeIndexChange=new C;tabList;tabListSubscription=null;_activeIndex;_headerAriaLevel=2;preventActiveIndexPropagation=!1;tabs=[];constructor(e,n){this.el=e,this.changeDetector=n}onKeydown(e){switch(e.code){case"ArrowDown":this.onTabArrowDownKey(e);break;case"ArrowUp":this.onTabArrowUpKey(e);break;case"Home":e.shiftKey||this.onTabHomeKey(e);break;case"End":e.shiftKey||this.onTabEndKey(e);break}}focusedElementIsAccordionHeader(){return document.activeElement.tagName.toLowerCase()==="a"&&document.activeElement.classList.contains("p-accordion-header-link")}onTabArrowDownKey(e){if(this.focusedElementIsAccordionHeader()){let n=this.findNextHeaderAction(e.target.parentElement.parentElement.parentElement);n?this.changeFocusedTab(n):this.onTabHomeKey(e),e.preventDefault()}}onTabArrowUpKey(e){if(this.focusedElementIsAccordionHeader()){let n=this.findPrevHeaderAction(e.target.parentElement.parentElement.parentElement);n?this.changeFocusedTab(n):this.onTabEndKey(e),e.preventDefault()}}onTabHomeKey(e){let n=this.findFirstHeaderAction();this.changeFocusedTab(n),e.preventDefault()}changeFocusedTab(e){e&&(g.focus(e),this.selectOnFocus&&this.tabs.forEach((n,t)=>{let r=this.multiple?this._activeIndex.includes(t):t===this._activeIndex;this.multiple?(this._activeIndex||(this._activeIndex=[]),n.id==e.id&&(n.selected=!n.selected,this._activeIndex.includes(t)?this._activeIndex=this._activeIndex.filter(c=>c!==t):this._activeIndex.push(t))):n.id==e.id?(n.selected=!n.selected,this._activeIndex=t):n.selected=!1,n.selectedChange.emit(r),this.activeIndexChange.emit(this._activeIndex),n.changeDetector.markForCheck()}))}findNextHeaderAction(e,n=!1){let t=n?e:e.nextElementSibling,r=g.findSingle(t,'[data-pc-section="header"]');return r?g.getAttribute(r,"data-p-disabled")?this.findNextHeaderAction(r.parentElement.parentElement):g.findSingle(r,'[data-pc-section="headeraction"]'):null}findPrevHeaderAction(e,n=!1){let t=n?e:e.previousElementSibling,r=g.findSingle(t,'[data-pc-section="header"]');return r?g.getAttribute(r,"data-p-disabled")?this.findPrevHeaderAction(r.parentElement.parentElement):g.findSingle(r,'[data-pc-section="headeraction"]'):null}findFirstHeaderAction(){let e=this.el.nativeElement.firstElementChild.childNodes[0];return this.findNextHeaderAction(e,!0)}findLastHeaderAction(){let e=this.el.nativeElement.firstElementChild.childNodes,n=e[e.length-1];return this.findPrevHeaderAction(n,!0)}onTabEndKey(e){let n=this.findLastHeaderAction();this.changeFocusedTab(n),e.preventDefault()}ngAfterContentInit(){this.initTabs(),this.tabListSubscription=this.tabList.changes.subscribe(e=>{this.initTabs()})}initTabs(){this.tabs=this.tabList.toArray(),this.tabs.forEach(e=>{e.headerAriaLevel=this._headerAriaLevel}),this.updateSelectionState(),this.changeDetector.markForCheck()}getBlockableElement(){return this.el.nativeElement.children[0]}updateSelectionState(){if(this.tabs&&this.tabs.length&&this._activeIndex!=null)for(let e=0;e<this.tabs.length;e++){let n=this.multiple?this._activeIndex.includes(e):e===this._activeIndex;n!==this.tabs[e].selected&&(this.tabs[e].selected=n,this.tabs[e].selectedChange.emit(n),this.tabs[e].changeDetector.markForCheck())}}isTabActive(e){return this.multiple?this._activeIndex&&this._activeIndex.includes(e):this._activeIndex===e}getTabProp(e,n){return e.props?e.props[n]:void 0}updateActiveIndex(){let e=this.multiple?[]:null;this.tabs.forEach((n,t)=>{if(n.selected)if(this.multiple)e.push(t);else{e=t;return}}),this.preventActiveIndexPropagation=!0,this._activeIndex=e,this.activeIndexChange.emit(e)}ngOnDestroy(){this.tabListSubscription&&this.tabListSubscription.unsubscribe()}static \u0275fac=function(n){return new(n||i)(v(F),v(M))};static \u0275cmp=_({type:i,selectors:[["p-accordion"]],contentQueries:function(n,t,r){if(n&1&&E(r,W,5),n&2){let c;w(c=D())&&(t.tabList=c)}},hostAttrs:[1,"p-element"],hostBindings:function(n,t){n&1&&O("keydown",function(c){return t.onKeydown(c)})},inputs:{multiple:[b.HasDecoratorInputTransform,"multiple","multiple",x],style:"style",styleClass:"styleClass",expandIcon:"expandIcon",collapseIcon:"collapseIcon",activeIndex:"activeIndex",selectOnFocus:[b.HasDecoratorInputTransform,"selectOnFocus","selectOnFocus",x],headerAriaLevel:"headerAriaLevel"},outputs:{onClose:"onClose",onOpen:"onOpen",activeIndexChange:"activeIndexChange"},features:[H],ngContentSelectors:De,decls:2,vars:4,consts:[[3,"ngClass","ngStyle"]],template:function(n,t){n&1&&(P(),l(0,"div",0),S(1),d()),n&2&&(A(t.styleClass),a("ngClass","p-accordion p-component")("ngStyle",t.style))},dependencies:[j,N],encapsulation:2,changeDetection:0})}return i})(),ce=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=V({type:i});static \u0275inj=$({imports:[te,q,G,re]})}return i})();var Xe=(()=>{let o=class o{};o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=_({type:o,selectors:[["app-home"]],standalone:!0,features:[J],decls:25,vars:0,consts:[[1,"flex","align-items-center","pt-2"],["src","assets/images/map_icon.png","width","100rem","alt","Map Icon"],[1,"card","flex","justify-content-center"],["header","Description"],["header","Projection"],[1,"text-xs"],["href","https://epsg.io/4326"],["header","Information Technology and Software Deployment (Server)"]],template:function(t,r){t&1&&(l(0,"div",0),f(1,"img",1),l(2,"p"),p(3," The Parcellary Tax-Web Visualization project of the City of Ibaan, this program is organized and initiated as part of Executive Order No. 104, S. 2023 with the purpose to support web-mapping in Ibaan, for open sourced layer map and in return serving all offices, Ibaan Smart City and all parcellary in barangay level. "),d()(),l(4,"div",2)(5,"p-accordion")(6,"p-accordionTab",3)(7,"p"),p(8," This application contains data gathered using aerial photography that captures high-resolution images applied in boundary delineation, road networks and street evaluation. The high-resolution visuals serve as the foundation for accurate mapping and spatial analysis. It also includes tax values, names, lot details provided \u201CAs Is\u201D and \u201CAs Available\u201D basis. This visualization tool offers to assist the municipal office of Ibaan, Batangas for viewing and informational searches in identifying tax values and monitoring property tax payments. The data provided in this online lookup is connected to an existing database and is being updated periodically by the municipal office. Information can be queried by owner name, lot number and property type. Aside from the aerial photography, third-party resources (Google Earth and OSM) were also used as the base map for additional visualization experience. Although, some data may be in conflict with some municipal information. "),d()(),l(9,"p-accordionTab",4)(10,"p"),p(11," The Geodetic CRS adopted is the World Geodetic System (WGS) 84 and its data source is the European Petroleum Survey Group (EPSG) 4326. This is the commonly utilized projection in the Philippines. The scope of this projection is a horizontal component of a 3D system and its area of use is the world. "),d(),l(12,"p",5),p(13," Reference: "),l(14,"a",6),p(15,"https://epsg.io/4326"),d()()(),l(16,"p-accordionTab",7)(17,"p")(18,"b"),p(19,"GitHub"),d(),p(20," - Open source community and fundamental build software. Git software, providing the distributed version for the access and control, bug tracking, software feature request, task management, continuous integration. "),d(),l(21,"p")(22,"b"),p(23,"QGIS"),d(),p(24," - Open source software for spatial visualization and decision-making tools. For creating, editing, visualizing, analyzing and publishing geospatial information. Geojson- open stardard format designed for representing simple geographical features, along with their non-spatial attributes. XML-Extensible Markup Language, create common information formats and share both the format data World Wide Web "),d()()()())},dependencies:[ce,B,W]});let i=o;return i})();export{Xe as HomeComponent};