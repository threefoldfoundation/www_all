(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"4OIv":function(t,e,a){},"9obZ":function(t,e,a){"use strict";a("4OIv")},IGkE:function(t,e,a){"use strict";var s={props:["header"]},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-12 px-4 text-center"},[a("div",{staticClass:"w-full max-w-2xl mx-auto"},[a("span",{staticClass:"text-sm font-semibold"},[t._v(t._s(t.header.title))]),a("h2",{staticClass:"text-4xl mt-2 mb-6 leading-tight font-heading"},[t._v("\n      "+t._s(t.header.subtitle)+"\n    ")]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mb-8 text-gray-700 leading-relaxed",domProps:{innerHTML:t._s(t.header.content)}}),a("div",[t.header.btn1?a("g-link",{staticClass:"bg-gray-900 learn-button hover:bg-gray-700 text-gray-100 px-5 py-3 mr-3 font-semibold rounded shadow",attrs:{to:t.header.link1}},[t._v(t._s(t.header.btn1))]):t._e(),t.header.btn2?a("g-link",{staticClass:"text-gray-900 bg-transparent hover:underline",attrs:{to:t.header.link2}},[t._v(t._s(t.header.btn2))]):t._e()],1)])])}),[],!1,null,null,null);e.a=i.exports},RRjm:function(t,e,a){"use strict";var s={props:["cta"]},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-12 px-4 text-center"},[a("div",{staticClass:"w-full max-w-2xl mx-auto"},[a("h2",{staticClass:"text-4xl leading-tight font-semibold font-heading"},[t._v("\n      "+t._s(t.cta.title)+"\n    ")]),a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"mt-6 mb-8 text-gray-700 leading-relaxed",domProps:{innerHTML:t._s(t.cta.content)}}),t.cta.button?a("g-link",{staticClass:"bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-12 py-2 mr-5 rounded shadow rounded-full",attrs:{to:t.cta.link}},[t._v(t._s(t.cta.button))]):t._e()],1)])}),[],!1,null,null,null);e.a=i.exports},bHRK:function(t,e,a){"use strict";a.r(e);a("QWBl"),a("FZtP");var s=a("phRe"),n=a("IGkE"),i=a("RRjm"),r={props:["products","main"],methods:{img:function(t){return t?t.src?t.src:t:""},appPath:function(t){return"apps/"+t}}},l=(a("9obZ"),a("KHd+")),o=Object(l.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"py-2 mb-5"},[a("div",{staticClass:"w-full text-center"},[null!==t.main?a("p",{staticClass:"text-sm tracking-widest text-gray-700"},[t._v("\n      "+t._s(t.main.subtitle)+"\n    ")]):t._e(),null!==t.main?a("h1",{staticClass:"text-4xl mt-2 mb-6 leading-tight font-heading"},[t._v("\n      "+t._s(t.main.title)+"\n    ")]):t._e()]),a("div",{staticClass:"grid grid-cols-1 gap-4 sm:grid-cols-4"},t._l(t.products,(function(e,s){return a("div",{key:s,staticClass:"p-2 sm:p-0 text-center cursor-pointer"},[a("g-link",{attrs:{to:t.appPath(e.id)}},[a("div",{staticClass:"px-2 py-2"},[a("g-image",{staticClass:"py-4",attrs:{src:t.img(e.image)}}),e.content?a("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text-gray-700 text-base",domProps:{innerHTML:t._s(e.content)}}):t._e()],1)])],1)})),0)])}),[],!1,null,"6471fa8f",null).exports,c=a("davN"),d={components:{CallToAction:i.a,SignUp:s.a,SolutionsHeader:n.a,ShowcaseProducts:o,TagFilterHeader:c.a},metaInfo:function(){return{title:"Apps"}},computed:{appsTag:function(){var t=[{title:"All",path:"/apps"}];return this.$page.topics.edges.forEach((function(e){return t.push({title:e.node.title,path:e.node.path})})),t}}},u=null,p=Object(l.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{attrs:{hideHeader:!0,disableScroll:!0}},[t.$page.markdownPage.signup?a("SignUp",{attrs:{signup:t.$page.markdownPage.signup}}):t._e(),t.$page.markdownPage.header?a("SolutionsHeader",{attrs:{header:t.$page.markdownPage.header}}):t._e(),t.$page.topics.edges.length>1?a("TagFilterHeader",{attrs:{tags:t.appsTag,selected:"all"}}):t._e(),t.$page.markdownPage.apps&&t.$page.markdownPage.apps.length>0?a("ShowcaseProducts",{attrs:{main:t.$page.markdownPage.appsMain,products:t.$page.markdownPage.apps}}):t._e(),t.$page.markdownPage.cta?a("CallToAction",{attrs:{cta:t.$page.markdownPage.cta}}):t._e()],1)}),[],!1,null,null,null);"function"==typeof u&&u(p);e.default=p.exports},davN:function(t,e,a){"use strict";var s={props:["tags","selected"],data:function(){return{tag:"All",isOpen:!1,open:!1,active:null}},methods:{setActive:function(t){this.active=!this.active,this.open=!this.open},close:function(t){this.$el.contains(t.target)||(this.open=!1,this.active=!this.active)},resetAll:function(){this.$emit("resetAll",!0)}},mounted:function(){document.addEventListener("click",this.close)},beforeDestroy:function(){document.removeEventListener("click",this.close)}},n=(a("t9eT"),a("KHd+")),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"left-0 z-50 mb-5 h-16 bg-gray-200 w-full rounded shadow"},[a("header",{staticClass:"flex items-center flex-wrap container mx-auto pt-1 pb-0 sm:px-0 transition-all transition-500"},[t._m(0),a("nav",{staticClass:"inline-flex md:order-2 px-2 pt-2 pb-4 sm:flex sm:p-0 bg-transparent",class:t.isOpen?"block":"hidden"},[a("ul",{staticClass:"list-none sm:flex justify-left capitalize transition-all transition-500"},[a("li",{staticClass:"pt-2 mx-5"},[a("div",{staticClass:"relative",attrs:{"x-data":"{ open: false }"}},[a("button",{staticClass:"flex flex-row items-center w-full md:w-auto md:inline md:mt-0 md:ml-4 animated-link",on:{click:function(e){return t.setActive(0)}}},[a("span",{staticClass:"capitalize"},[t._v(t._s(t.selected.replace("_"," ")))]),a("svg",{staticClass:"inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1",class:{"rotate-180":0==t.active,"rotate-0":1==t.active},attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]),t.open?a("div",{staticClass:"absolute w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-30",attrs:{"x-show":"open","x-transition:enter":"transition ease-out duration-100","x-transition:enter-start":"transform opacity-0 scale-95","x-transition:enter-end":"transform opacity-100 scale-100","x-transition:leave":"transition ease-in duration-75","x-transition:leave-start":"transform opacity-100 scale-100","x-transition:leave-end":"transform opacity-0 scale-95"}},[t.open?a("div",{staticClass:"w-64 max-h-10 px-2 py-2 bg-white rounded-md shadow dark:bg-gray-700"},t._l(t.tags,(function(e){return a("a",{key:e.path,staticClass:"cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark-:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",attrs:{href:t.$url(e.path)},on:{click:function(e){t.open=!1}}},[t._v(t._s(e.title.replace("_"," ")))])})),0):t._e()]):t._e()])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center justify-between px-4 sm:p-0"},[e("div",{staticClass:"inline-flex items-center flex-shrink-0"},[e("span",{staticClass:"flex text-xl p-3 capitalize tracking-tight"},[this._v("filter:")])])])}],!1,null,"5cea2126",null);e.a=i.exports},phRe:function(t,e,a){"use strict";var s={props:["signup"]},n=a("KHd+"),i=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"py-8 px-4"},[a("div",{staticClass:"flex flex-wrap items-center -mx-4"},[a("div",{staticClass:"w-full lg:w-4/6 px-4 mb-8 lg:mb-0 text-center lg:text-left"},[a("h2",{staticClass:"text-xl font-semibold font-heading"},[t._v("\n        "+t._s(t.signup.title)+"\n      ")])]),a("div",{staticClass:"w-full lg:w-2/6 px-4 text-right"},[a("g-link",{staticClass:"bg-blue-900 text-sm learn-button hover:bg-blue-800 text-gray-100 px-12 py-2 mr-5 rounded shadow rounded-full",attrs:{to:t.signup.link1}},[t._v(t._s(t.signup.button1))]),a("g-link",{staticClass:"text-gray-900 bg-transparent hover:underline",attrs:{to:t.signup.link2}},[t._v(t._s(t.signup.button2))])],1)])])}),[],!1,null,null,null);e.a=i.exports},sY2N:function(t,e,a){},t9eT:function(t,e,a){"use strict";a("sY2N")}}]);