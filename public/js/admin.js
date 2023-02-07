"use strict";(self.webpackChunkPluginFileName=self.webpackChunkPluginFileName||[]).push([[467],{2277:function(e,t,n){var o=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"X",{value:!0});var r=n(311),a=o(n(5097));t.Z=(0,r.defineComponent)({mounted:function(){var e=(0,r.inject)("pluginConfig",{});(0,a.default)(e.prefix||"vue-app")}})},2976:function(e,t,n){t.s=void 0;var o=n(311),r={class:"main-wrapper"};t.s=function(e,t,n,a,l,i){var s=(0,o.resolveComponent)("router-view");return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[((0,o.openBlock)(),(0,o.createBlock)(s,{key:e.$route.path}))])}},81:function(e,t,n){var o=function(e){return e&&e.__esModule?e:{default:e}};var r=n(311),a=o(n(5703)),l=o(n(5915)),i=n(1905),s=n(5123),c=o(n(4498)),u=(0,r.createApp)(a.default);u.use(l.default),(0,i.registerScrollSpy)(u);u.use(s.variantJS,{TButton:{fixedClasses:"block px-4 py-2 transition duration-100 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed",classes:"text-white bg-blue-500 border border-transparent shadow-sm rounded hover:bg-blue-600",variants:{secondary:{classes:"text-gray-800 bg-white border border-gray-300 shadow-sm rounded hover:text-gray-600"},error:{classes:"text-white bg-red-500 border border-transparent rounded shadow-sm hover:bg-red-600"},success:{classes:"text-white bg-green-500 border border-transparent rounded shadow-sm hover:bg-green-600"},link:{classes:"text-blue-500 underline hover:text-blue-600"}}}}),setTimeout((function(){(0,c.default)(u,"vue_wp_plugin_config_admin"),u.mount("#vue-admin-app")}),200)},5915:function(e,t,n){var o=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(2119),a=o(n(1204)),l=o(n(951)),i=[{path:"/",component:a.default},{path:"/settings",component:l.default}],s=(0,r.createRouter)({history:(0,r.createWebHashHistory)(),routes:i});t.default=s},5525:function(e,t,n){var o=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(5859),a=o(n(3714));t.default=function(e){var t=(0,r.createGettext)({availableLanguages:{en:"English",vi:"Vietnamese","zh-CN":"中文"},defaultLanguage:"en",translations:a.default});e.use(t)}},4498:function(e,t,n){var o=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(9669)),a=o(n(3279)),l=o(n(5525)),i=o(n(2346)),s=o(n(6455));t.default=function(e,t){(0,l.default)(e);var n=window;n.$appConfig={},n.$appConfig.axios=r.default,n.$appConfig.debounce=a.default,e.config.globalProperties.$win=n,e.config.globalProperties.axios=n.$appConfig.axios,e.config.globalProperties.$swal=s.default,e.provide("win",n),e.provide("pluginConfig",n[t]),e.use(i.default,n.$appConfig.axios)}},6505:function(e,t,n){Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var o=(0,n(311).defineComponent)({name:"Dashboard",props:{msg:{type:String,required:!1,default:"Welcome to Your Vue.js Backend App"}}});t.Z=o},4561:function(e,t,n){n(2526),n(7327),n(5003),n(9337);var o=n(5318);Object.defineProperty(t,"X",{value:!0}),t.Z=void 0;var r=o(n(7757));n(1539),n(4747),n(7941);var a=o(n(8926)),l=o(n(9713)),i=n(311),s=n(5123),c=n(6138),u=o(n(5303));function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,l.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}o(n(3239)).default.config.set("basePath","https://cdn.jsdelivr.net/npm/ace-builds@"+n(3239).version+"/src-noconflict/");var f=(0,i.defineComponent)({components:{TToggle:s.TToggle,TButton:s.TButton,TRichSelect:s.TRichSelect,TTextarea:s.TTextarea,TInput:s.TInput,TSelect:s.TSelect,VAceEditor:c.VAceEditor,ColorInput:u.default},name:"Settings",setup:function(){var e={},t=(0,i.reactive)(p({},e)),n=(0,i.reactive)({actionKey:0,loaded:!1}),o=(0,i.reactive)({sections:{},options:{}}),r=(0,i.ref)(!1),a=(0,i.computed)((function(){var o=JSON.stringify(t),r=JSON.stringify(e);return n.actionKey=n.actionKey+1,o===r}));return{settings:t,oldSettings:e,hasChanged:a,endpoints:{settings:""},ui:n,structure:o,hasLoaded:r}},methods:{doSave:function(){var e=this;return(0,a.default)(r.default.mark((function t(){var n,o,a,l,s;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=(0,i.toRaw)(e.settings),t.next=4,e.axios.post(e.endpoints.settings,n);case 4:200==(o=t.sent).status?(e.$swal.fire({position:"top-end",icon:"success",title:"Your settings has been saved.",showConfirmButton:!1,timer:1500}),a=e.$win.vue_wp_plugin_config_admin,l=a.settings||{},s=p({},e.settings),Object.keys(s).forEach((function(t){e.oldSettings[t]=s[t],l[t]=s[t]})),e.ui.actionKey=e.ui.actionKey+1):e.$swal.fire({icon:"error",title:"Oops...",text:"Wordpress response with error.",footer:'<div class="overflow-footer w-full">'+JSON.stringify(o,null,2)+"</div>"}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),e.$swal.fire({icon:"error",title:"Oops...",text:"Server response with error.",footer:'<div class="overflow-footer w-full">'+t.t0.message+"</div>"});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},getOptions:function(e){var t=p({},this.structure.options),n=[];return Object.keys(t).forEach((function(o){var r=t[o];r.section===e&&(r.id=o,n.push(r))})),n},doCancel:function(){var e=this,t=this.oldSettings;Object.keys(t).forEach((function(n){e.oldSettings[n]=t[n],e.settings[n]=t[n]}))},doLoad:function(){var e=this;return(0,a.default)(r.default.mark((function t(){var n,o,a;return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.nextTick)();case 2:n=e.$win.vue_wp_plugin_config_admin,e.$win.$appConfig.nonce||(e.$win.$appConfig.nonce=n.rest.nonce),o=n.settingStructure,e.structure.sections=o.sections,e.structure.options=o.options,a=n.settings||{},e.endpoints=n.rest.endpoints,Object.keys(a).forEach((function(t){e.oldSettings[t]=a[t],e.settings[t]=a[t]})),e.hasLoaded=!0,e.$forceUpdate();case 12:case"end":return t.stop()}}),t)})))()}},beforeMount:function(){var e=this,t=this;t.$win&&t.$win.vue_wp_plugin_config_admin?t.doLoad():document.onreadystatechange=(0,a.default)(r.default.mark((function t(){return r.default.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:"complete"==document.readyState&&e.doLoad();case 1:case"end":return t.stop()}}),t)})))}});t.Z=f},7109:function(e,t,n){t.s=function(e,t,n,l,i,s){return(0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("section",a,(0,o.toDisplayString)(e.msg),1)])};var o=n(311),r={class:"app-dashboard"},a={class:"w-full text-center"}},1365:function(e,t,n){t.s=function(e,t,n,j,P,T){var $=(0,o.resolveComponent)("t-button"),L=(0,o.resolveComponent)("t-toggle"),D=(0,o.resolveComponent)("t-rich-select"),U=(0,o.resolveComponent)("t-select"),M=(0,o.resolveComponent)("t-textarea"),Z=(0,o.resolveComponent)("v-ace-editor"),K=(0,o.resolveComponent)("color-input"),q=(0,o.resolveComponent)("t-input"),A=(0,o.resolveDirective)("scroll-spy-active"),X=(0,o.resolveDirective)("scroll-spy-link"),F=(0,o.resolveDirective)("scroll-spy");return e.hasLoaded?((0,o.openBlock)(),(0,o.createElementBlock)("div",r,[(0,o.createElementVNode)("aside",a,[(0,o.createElementVNode)("div",l,[(0,o.createElementVNode)("div",i,[(0,o.createVNode)($,{onClick:t[0]||(t[0]=function(t){return e.doSave()}),style:{width:"100px"},disabled:e.hasChanged,"data-rerendered":e.ui.actionKey},{default:(0,o.withCtx)((function(){return[s]})),_:1},8,["disabled","data-rerendered"]),(0,o.createVNode)($,{onClick:t[1]||(t[1]=function(t){return e.doCancel()}),variant:"secondary",style:{width:"100px"},disabled:e.hasChanged,"data-rerendered":e.ui.actionKey},{default:(0,o.withCtx)((function(){return[c]})),_:1},8,["disabled","data-rerendered"])]),(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("ul",u,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.structure.sections,(function(e,t){return(0,o.openBlock)(),(0,o.createElementBlock)("li",d,[(0,o.createElementVNode)("a",p,[(0,o.createElementVNode)("span",f,(0,o.toDisplayString)(e),1)])])})),256))])),[[A,{selector:"li",class:"active"}],[X]])])]),(0,o.createElementVNode)("section",m,[(0,o.withDirectives)(((0,o.openBlock)(),(0,o.createElementBlock)("div",v,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.structure.sections,(function(t,n){return(0,o.openBlock)(),(0,o.createElementBlock)("div",g,[(0,o.createElementVNode)("h2",h,(0,o.toDisplayString)(t),1),(0,o.createElementVNode)("div",y,[((0,o.openBlock)(!0),(0,o.createElementBlock)(o.Fragment,null,(0,o.renderList)(e.getOptions(n),(function(t){return(0,o.openBlock)(),(0,o.createElementBlock)("div",b,[(0,o.createElementVNode)("div",w,[(0,o.createElementVNode)("label",k,(0,o.toDisplayString)(t.name),1),(0,o.createElementVNode)("p",x,(0,o.toDisplayString)(t.description),1)]),(0,o.createElementVNode)("div",V,["toggle"===t.type?((0,o.openBlock)(),(0,o.createElementBlock)("div",_,[(0,o.createVNode)(L,{modelValue:e.settings[t.id],"onUpdate:modelValue":function(n){return e.settings[t.id]=n}},null,8,["modelValue","onUpdate:modelValue"])])):"dropdownMultiselect"===t.type?((0,o.openBlock)(),(0,o.createElementBlock)("div",E,[(0,o.createVNode)(D,{modelValue:e.settings[t.id],"onUpdate:modelValue":function(n){return e.settings[t.id]=n},options:t.options,multiple:"",tags:""},null,8,["modelValue","onUpdate:modelValue","options"])])):"dropdown"===t.type?((0,o.openBlock)(),(0,o.createElementBlock)("div",B,[(0,o.createVNode)(U,{modelValue:e.settings[t.id],"onUpdate:modelValue":function(n){return e.settings[t.id]=n},options:t.options},null,8,["modelValue","onUpdate:modelValue","options"])])):["textarea"].indexOf(t.type)>-1?((0,o.openBlock)(),(0,o.createElementBlock)("div",O,[(0,o.createVNode)(M,{modelValue:e.settings[t.id],"onUpdate:modelValue":function(n){return e.settings[t.id]=n}},null,8,["modelValue","onUpdate:modelValue"])])):"code"===t.type?((0,o.openBlock)(),(0,o.createElementBlock)("div",C,[(0,o.createVNode)(Z,{modelValue:e.settings[t.id],"onUpdate:modelValue":function(n){return e.settings[t.id]=n},lang:"html",theme:"chrome",style:{height:"300px"}},null,8,["modelValue","onUpdate:modelValue"])])):"color"===t.type?((0,o.openBlock)(),(0,o.createElementBlock)("div",S,[(0,o.createVNode)(K,{modelValue:e.settings[t.id],"onUpdate:modelValue":function(n){return e.settings[t.id]=n},format:"hex"},null,8,["modelValue","onUpdate:modelValue"])])):((0,o.openBlock)(),(0,o.createElementBlock)("div",N,[(0,o.createVNode)(q,{modelValue:e.settings[t.id],"onUpdate:modelValue":function(n){return e.settings[t.id]=n},type:t.type},null,8,["modelValue","onUpdate:modelValue","type"])]))])])})),256))])])})),256))])),[[F]])])])):(0,o.createCommentVNode)("",!0)},n(8309),n(2526),n(1817);var o=n(311),r={key:0,class:"app-settings w-full flex flex-wrap mx-auto"},a={class:"w-full md:w-1/5"},l={class:"w-full sticky inset-0 max-h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 my-2 lg:my-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20"},i={class:"space-x-3 flex justify-end pr-4 pt-2"},s=(0,o.createTextVNode)("Save"),c=(0,o.createTextVNode)("Cancel"),u={class:"list-reset py-2 md:py-0 mt-4"},d={class:"py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent"},p={href:"javascript:void(0)",class:"block pl-4 align-middle text-gray-700 no-underline hover:text-yellow-600"},f={class:"pb-1 md:pb-0 text-sm"},m={class:"w-full md:w-4/5 min-h-screen"},v={class:"ml-3"},g={class:"pt-4"},h={class:"font-sans font-bold break-normal text-gray-700 px-2 pb-1 text-xl w-full text-center"},y={class:"p-8 mt-6 lg:mt-0 rounded shadow bg-white"},b={class:"md:flex mb-6"},w={class:"md:w-3/5"},k={class:"block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4",for:"my-checkbox"},x={class:"py-2 text-sm text-gray-600"},V={class:"md:w-2/5"},_={key:0},E={key:1},B={key:2},O={key:3},C={key:4},S={key:5},N={key:6}},5097:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n(7852);var o=function(e){var t=window.location.href,n=t.indexOf("admin.html")>0,o=document.querySelector(n?".wp-menu-open":"#toplevel_page_".concat(e)),r=t.substr(t.indexOf(n?"#/":"admin.php"));if(o){o.addEventListener("click",(function(e){for(var t=e.target,n=this.querySelectorAll("li"),o=0;o<n.length;o++){var r=n[o];r!==e.target.parentElement?r.classList.remove("current"):t.parentElement.classList.add("current")}}));for(var a=o.querySelectorAll(".current"),l=0;l<a.length;l++){a[l].classList.remove("current")}var i=o.querySelector('.wp-submenu a[href="'.concat(r,'"'));!n&&r.endsWith("#/")&&(i=o.querySelector(".wp-submenu a.wp-first-item")),i&&(console.log(i),i.parentElement.classList.add("current"))}};t.default=o},277:function(){},1974:function(){},267:function(){},5703:function(e,t,n){n.r(t),n.d(t,{__esModule:function(){return r.X},default:function(){return a}});var o=n(2976),r=n(2277);var a=(0,n(3744).Z)(r.Z,[["render",o.s]])},1204:function(e,t,n){n.r(t),n.d(t,{__esModule:function(){return r.X},default:function(){return a}});var o=n(7109),r=n(6505);var a=(0,n(3744).Z)(r.Z,[["render",o.s]])},951:function(e,t,n){n.r(t),n.d(t,{__esModule:function(){return r.X},default:function(){return a}});var o=n(1365),r=n(4561);var a=(0,n(3744).Z)(r.Z,[["render",o.s],["__scopeId","data-v-1d1b0462"]])},311:function(e){e.exports=Vue},3714:function(e){e.exports=JSON.parse('{"en":{},"zh-CN":{},"vi":{}}')}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[0,582,703,898],(function(){return t(81),t(277),t(1974),t(267)}));e.O()}]);
//# sourceMappingURL=admin.js.map