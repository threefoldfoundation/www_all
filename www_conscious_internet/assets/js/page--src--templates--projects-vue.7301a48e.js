(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/8Du":function(t,e,a){"use strict";a("QWBl"),a("FZtP"),a("yq1k");var s={props:{record:{},showtags:!1,pathPrefix:"",border:{type:Boolean,default:!0}},computed:{path:function(){return this.pathPrefix?this.pathPrefix+"/"+this.record.id:this.record.path},memberships:function(){var t=[],e=this.record.memberships;return e?(e.forEach((function(e){["foundation","tech","aci"].includes(e.title)&&t.push(e)})),t):[]}},methods:{displaytags:function(){return this.showtags},img:function(t){return t?t.src?t.src:t:""}}},r=(a("EelD"),a("KHd+")),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-post px-0 sm:px-4 pb-8 mb-8",class:{"no-border":!t.border}},[a("g-link",{staticClass:"post-card-image-link",attrs:{to:t.path}},[a("g-image",{staticClass:"post-card-image",attrs:{src:t.img(t.record.image),alt:t.record.title}})],1),a("div",[a("g-link",{attrs:{to:t.path}},[a("h2",{staticClass:"post-card-title mt-3"},[t._v(t._s(t.record.title||t.record.name))]),a("p",{staticClass:"post-card-excerpt text-gray-700"},[t._v(t._s(t.record.excerpt))])]),a("div",{staticClass:"w-full post-card-meta pt-2"},[a("div",{staticClass:"avatars"},[a("div",{staticClass:"flex items-center"},[a("div",{staticClass:"flex justify-between items-center"},[a("ul",{staticClass:"list-none flex author-list m-0"},t._l(t.record.authors,(function(e){return a("li",{key:e.id,staticClass:"author-list-item"},[a("g-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:e.name,expression:"author.name"}],attrs:{to:e.path}},[a("g-image",{staticClass:"w-8 h-8 rounded-full bg-gray-200 border-2 border-white",attrs:{src:t.img(e.image),alt:e.name}})],1)],1)})),0)]),a("div",{staticClass:"flex flex-col text-xs leading-none uppercase"},[a("p",[a("g-link",{attrs:{to:t.path}},[a("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.humanTime))])])],1),a("p",[a("g-link",{attrs:{to:t.path}},[a("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.startDate))])]),t._v("\n              "+t._s(t.record.status)+"\n            ")],1)])]),t.displaytags()?a("section",{staticClass:"post-tags container mx-auto relative py-3"},t._l(t.record.tags,(function(e){return a("g-link",{key:e.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full",attrs:{to:e.path}},[t._v(t._s(e.title))])})),1):t._e()])])],1)],1)}),[],!1,null,"cdbeda54",null);e.a=i.exports},"/ftz":function(t,e,a){},"3kyM":function(t,e,a){},EelD:function(t,e,a){"use strict";a("3kyM")},HgpQ:function(t,e,a){"use strict";a("qePV"),a("ma9I");var s={props:{baseUrl:String,currentPage:Number,totalPages:Number,maxVisibleButtons:{type:Number,required:!1,default:3}},methods:{isFirstPage:function(t,e){return 1==t},isLastPage:function(t,e){return t==e},isCurrentPage:function(t,e){return t==e},nextPage:function(t,e){return"".concat(this.baseUrl,"/").concat(t+1)},previousPage:function(t,e){return 2===t?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(t-1)}},computed:{startPage:function(){return 1===this.currentPage?1:(this.currentPage,this.totalPages,this.currentPage-1)},pages:function(){for(var t=[],e=this.startPage;e<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);e+=1)t.push({name:e,isDisabled:e===this.currentPage,link:1===e?"".concat(this.baseUrl,"/"):"".concat(this.baseUrl,"/").concat(e)});return t}}},r=a("KHd+"),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"flex pl-0 list-none rounded my-2"},[t.isFirstPage(t.currentPage,t.totalPages)?t._e():a("li",{staticClass:"w-10 relative block text-center py-2 leading-tight bg-white border border-gray-300 text-black ml-0 mr-1 rounded hover:bg-gray-300"},[a("g-link",{staticClass:"page-link",attrs:{to:t.previousPage(t.currentPage,t.totalPages),tabindex:"-1"}},[t._v("«")])],1),t._l(t.pages,(function(e){return a("li",{key:e.name,staticClass:"w-10 relative block py-2 text-center leading-tight bg-white border border-gray-300 text-black rounded hover:bg-gray-300 ml-1 mr-1",class:[t.isCurrentPage(t.currentPage,e.name)?"border-l-2 border-l-black":""]},[a("g-link",{staticClass:"page-link",attrs:{to:e.link,"aria-label":e.name,"aria-current":e.name}},[t._v(t._s(e.name))])],1)})),t.isLastPage(t.currentPage,t.totalPages)?t._e():a("li",{staticClass:"w-10 relative block py-2 text-center leading-tight bg-white border border-gray-300 text-black ml-1 rounded hover:bg-gray-300"},[a("g-link",{staticClass:"page-link",attrs:{to:t.nextPage(t.currentPage,t.totalPages),tabindex:"-1"}},[t._v("»")])],1)],2)}),[],!1,null,null,null);e.a=i.exports},TA6u:function(t,e,a){"use strict";a.r(e);a("QWBl"),a("FZtP"),a("+2oP");var s=a("/8Du"),r=a("davN"),i=a("HgpQ"),n={components:{PostListItem:s.a,TagFilterHeader:r.a,Pagination:i.a},metaInfo:function(){return{title:this.pageName}},data:function(){return{selected:"All"}},methods:{resetAll:function(){this.selected="All"}},computed:{tags:function(){var t=[{title:"All",path:"/projects"}];return this.$page.tags.edges.forEach((function(e){return t.push({title:e.node.title,path:e.node.path})})),t},pageName:function(){var t=this.$route.path.substring(1);return t[0].toUpperCase()+t.slice(1)},baseurl:function(){return"/projects/"}}},l=a("KHd+"),o=null,c=Object(l.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",[a("div",{staticClass:"container mt-8 sm:pxi-0 mx-auto overflow-x-hidden"},[a("div",{staticClass:"flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4"},t._l(t.$page.entries.edges,(function(t){return a("PostListItem",{key:t.id,attrs:{showtags:!1,record:t.node,pathPrefix:"/projects"}})})),1),0==t.$page.entries.edges.length?a("div",{staticClass:"text-center"},[a("h2",{staticClass:"inlibe-flex mx-auto text-gray-700 w-3/4"},[t._v("No results")])]):t._e()]),a("div",{staticClass:"pagination flex justify-center mb-8"},[t.$page.entries.pageInfo.totalPages>1&&t.$page.entries.edges.length>0?a("Pagination",{attrs:{baseUrl:t.baseurl,currentPage:t.$page.entries.pageInfo.currentPage,totalPages:t.$page.entries.pageInfo.totalPages,maxVisibleButtons:5}}):t._e()],1)])}),[],!1,null,null,null);"function"==typeof o&&o(c);e.default=c.exports},VGuU:function(t,e,a){"use strict";a("/ftz")},davN:function(t,e,a){"use strict";var s={props:["tags","selected"],data:function(){return{tag:"All",isOpen:!1,open:!1,active:null}},methods:{setActive:function(t){this.active=t,this.open=!this.open},close:function(t){this.$el.contains(t.target)||(this.open=!1)},resetAll:function(){this.$emit("resetAll",!0)}},mounted:function(){document.addEventListener("click",this.close)},beforeDestroy:function(){document.removeEventListener("click",this.close)}},r=(a("VGuU"),a("KHd+")),i=Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fixed top-16 left-0 z-50 mb-5 h-16 bg-gray-100 w-full"},[a("header",{staticClass:"flex items-center flex-wrap container mx-auto pt-1 pb-0 sm:px-0 transition-all transition-500"},[a("div",{staticClass:"flex items-center justify-between px-4 sm:p-0"},[t._m(0),a("div",{staticClass:"sm:block md:hidden"},[a("ul",{staticClass:"list-none inline-flex justify-center md:justify-end"},[a("li",{staticClass:"py-1 mx-5 cursor-pointer",on:{click:function(e){return t.resetAll()}}},[t._v("Reset")])])])]),a("nav",{staticClass:"inline-flex md:order-2 px-2 pt-2 pb-4 sm:flex sm:p-0 bg-transparent"},[a("ul",{staticClass:"list-none sm:flex justify-left capitalize transition-all transition-500"},[a("li",{staticClass:"pt-2 mx-5"},[a("div",{staticClass:"relative",attrs:{"x-data":"{ open: false }"}},[a("button",{staticClass:"flex flex-row items-center w-full md:w-auto md:inline md:mt-0 md:ml-4 animated-link",on:{click:function(e){return t.setActive(0)}}},[a("span",{staticClass:"capitalize"},[t._v(t._s(t.selected))]),a("svg",{staticClass:"inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1",class:{"rotate-180":0==t.active,"rotate-0":0==!t.active},attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[a("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])]),0==t.active?a("div",{staticClass:"absolute w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48 z-30",attrs:{"x-show":"open","x-transition:enter":"transition ease-out duration-100","x-transition:enter-start":"transform opacity-0 scale-95","x-transition:enter-end":"transform opacity-100 scale-100","x-transition:leave":"transition ease-in duration-75","x-transition:leave-start":"transform opacity-100 scale-100","x-transition:leave-end":"transform opacity-0 scale-95"}},[t.open?a("div",{staticClass:"w-64 max-h-10 px-2 py-2 bg-white rounded-md shadow dark:bg-gray-700"},t._l(t.tags,(function(e){return a("a",{key:e.path,staticClass:"cursor-pointer block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark:bg-transparent dark:hover:bg-gray-600 dark-:focus:bg-gray-600 dark:focus:text-white dark:hover:text-white dark:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline",attrs:{href:t.$url(e.path)},on:{click:function(e){if(e.target!==e.currentTarget)return null;t.open=!1}}},[t._v(t._s(e.title))])})),0):t._e()]):t._e()])])])]),a("div",{staticClass:"hidden md:ml-auto md:inline-block md:order-last"},[a("ul",{staticClass:"list-none inline-flex justify-center md:justify-end"},[a("li",{staticClass:"py-1 mx-5 cursor-pointer",on:{click:function(e){return t.resetAll()}}},[t._v("Reset")])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"inline-flex items-center flex-shrink-0"},[e("span",{staticClass:"flex text-xl p-3 capitalize tracking-tight"},[this._v("filter:")])])}],!1,null,"8b43d0d2",null);e.a=i.exports}}]);