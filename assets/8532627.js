(window.webpackJsonp=window.webpackJsonp||[]).push([[22,4,6,7,8,12,15,16,17,19],{256:function(t,e,n){var content=n(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("62f8c877",content,!0,{sourceMap:!1})},257:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(258);var r=n(19);function o(t){return(t*r.snipcart.factor).toFixed(2)}},258:function(t,e,n){"use strict";var r=n(5),o=n(1),c=n(3),l=n(56),d=n(193),f=n(192),v=n(4),m=o.RangeError,h=o.String,x=Math.floor,_=c(f),C=c("".slice),y=c(1..toFixed),w=function(t,e,n){return 0===e?n:e%2==1?w(t,e-1,n*t):w(t*t,e/2,n)},k=function(data,t,e){for(var n=-1,r=e;++n<6;)r+=t*data[n],data[n]=r%1e7,r=x(r/1e7)},P=function(data,t){for(var e=6,n=0;--e>=0;)n+=data[e],data[e]=x(n/t),n=n%t*1e7},T=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=h(data[t]);s=""===s?e:s+_("0",7-e.length)+e}return s};r({target:"Number",proto:!0,forced:v((function(){return"0.000"!==y(8e-5,3)||"1"!==y(.9,0)||"1.25"!==y(1.255,2)||"1000000000000000128"!==y(0xde0b6b3a7640080,0)}))||!v((function(){y({})}))},{toFixed:function(t){var e,n,r,o,c=d(this),f=l(t),data=[0,0,0,0,0,0],v="",x="0";if(f<0||f>20)throw m("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return h(c);if(c<0&&(v="-",c=-c),c>1e-21)if(n=(e=function(t){for(var e=0,n=t;n>=4096;)e+=12,n/=4096;for(;n>=2;)e+=1,n/=2;return e}(c*w(2,69,1))-69)<0?c*w(2,-e,1):c/w(2,e,1),n*=4503599627370496,(e=52-e)>0){for(k(data,0,n),r=f;r>=7;)k(data,1e7,0),r-=7;for(k(data,w(10,r,1),0),r=e-1;r>=23;)P(data,1<<23),r-=23;P(data,1<<r),k(data,1,1),P(data,2),x=T(data)}else k(data,0,n),k(data,1<<-e,0),x=T(data)+_("0",f);return x=f>0?v+((o=x.length)<=f?"0."+_("0",f-o)+x:C(x,0,o-f)+"."+C(x,o-f)):v+x}})},259:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(19);function r(t){var e="/assets/images/"+(t.localThumbs&&t.localThumbs[0]?t.localThumbs[0]:t.localThumb?t.localThumb:""),n=e.lastIndexOf(".");return-1===n?e:e.substr(0,n)+".webp"}},260:function(t,e,n){"use strict";n.r(e);n(141),n(10),n(30);var r=n(19),o=n(68),c=n(140),l=n(257),d=n(259),f=n(263),v={name:"productItem",props:{product:Object},data:function(){return{config:r}},computed:{calculatedPrice:function(){return Object(l.a)(this.product.price)},productThumbnail:function(){return Object(d.a)(this.product)},categoryData:function(){var t=this.product.category||this.product.categories[this.product.categories.length-2];return o.find((function(e){return e.name===t||e.subCategories.find((function(e){return e.name===t}))}))},brandData:function(){var t=this;return c.find((function(e){return e.name===t.product.brand}))}},methods:{decode:function(t){return f.decode(t)}}},m=(n(261),n(18)),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"course-item bg-light"},[n("div",{staticClass:"position-relative overflow-hidden"},[n("NuxtLink",{attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[n("nuxt-img",{staticClass:"img-fluid",attrs:{preset:"productThumbnail",src:t.productThumbnail,alt:t.product.linkTitle}})],1),t._v(" "),n("div",{staticClass:"w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"},[n("NuxtLink",{staticClass:"flex-shrink-0 btn btn-sm btn-primary px-3",staticStyle:{"border-radius":"30px"},attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.linkTitle}},[t._v("Testbericht")])],1)],1),t._v(" "),n("div",{staticClass:"text-center p-4 pb-0"},[n("div",{staticClass:"mb-0 h3"},[t._v(t._s(t.calculatedPrice)+" €")]),t._v(" "),n("div",{staticClass:"mb-3"},[t._l(t.product.stars,(function(t){return n("small",{key:t,staticClass:"pl-3 fa fa-star text-primary"})})),t._v(" "),t._l(5-t.product.stars,(function(t){return n("small",{key:t,staticClass:"fa fa-star text-default"})})),t._v(" "),n("small",[t._v("("+t._s(t.product.reviewCount)+")")])],2),t._v(" "),n("div",{staticClass:"mb-4 h5"},[n("nuxt-link",{staticClass:"noLinkStyle",attrs:{to:"/produkt/"+t.product.slug+"/",title:t.product.name}},[t._v("\n          "+t._s(t.product.name)+"\n        ")])],1)]),t._v(" "),n("div",{staticClass:"d-flex border-top"},[n("small",{staticClass:"flex-fill text-center border-end py-2"},[n("i",{staticClass:"fa fa-toilet text-primary me-2"}),n("NuxtLink",{attrs:{to:"/marken/"+t.brandData.slug+"/",title:t.decode(t.product.brand)},domProps:{innerHTML:t._s(t.product.brand)}})],1),t._v(" "),n("small",{staticClass:"flex-fill text-center border-end py-2"},[n("i",{staticClass:"fa text-primary me-2"}),n("NuxtLink",{attrs:{to:"/kategorie/"+t.categoryData.slug+"/",title:t.categoryData.name}},[t._v("\n          "+t._s(t.categoryData.name))])],1)])])])}),[],!1,null,"630a0660",null);e.default=component.exports},261:function(t,e,n){"use strict";n(256)},262:function(t,e,n){var r=n(69)(!1);r.push([t.i,".course-item[data-v-630a0660]{min-height:450px;display:flex;flex-direction:column}.course-item .text-center[data-v-630a0660]{flex-grow:1;display:flex;flex-direction:column;justify-content:space-between}.mb-4 h5[data-v-630a0660]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;-webkit-hyphens:auto;-ms-hyphens:auto;hyphens:auto}",""]),t.exports=r},264:function(t,e,n){"use strict";n.r(e);var r={name:"products",props:{products:Array}},o=n(18),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},t._l(t.products,(function(t,e){return n("div",{key:e,staticClass:"col-lg-2 col-md-4 col-sm-6 col-xs-12 fadeInUp"},[n("ProductItem",{staticClass:"mt-5",attrs:{product:t}})],1)})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:n(260).default})},265:function(t,e,n){"use strict";n.r(e);var r=n(19),o={data:function(){return{config:r}}},c=n(18),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row gy-2 gx-4 mb-4 mt-5"},t._l(t.config.checklist,(function(e,r){return n("div",{key:r,staticClass:"col-sm-6"},[n("p",{staticClass:"mb-0"},[n("i",{staticClass:"fa fa-arrow-right text-primary me-2"}),t._v(t._s(e)+"\n    ")])])})),0)}),[],!1,null,null,null);e.default=component.exports},269:function(t,e,n){var content=n(272);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("3d80f2a4",content,!0,{sourceMap:!1})},270:function(t,e,n){"use strict";n.r(e);var r={name:"seoText",props:{seoData:Object}},o=n(18),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row g-5"},[n("div",{staticClass:"col-lg-8 fadeInUp",staticStyle:{"min-height":"400px"}},["content"in t.seoData.seotext?n("div",t._l(t.seoData.seotext.content,(function(text,e){return n("div",{key:e},[n("div",{staticClass:"mb-3 mt-5 h2",domProps:{innerHTML:t._s(text.title)}}),t._v(" "),n("p",{staticClass:"mb-4",domProps:{innerHTML:t._s(text.text)}})])})),0):t._e()])])])}),[],!1,null,null,null);e.default=component.exports},271:function(t,e,n){"use strict";n(269)},272:function(t,e,n){var r=n(69)(!1);r.push([t.i,"h1[data-v-2e3e5140]{color:#fff}.bg-image[data-v-2e3e5140]{min-height:400px;background-image:url(/assets/images/featureHeader/outdoorhosen.webp);height:100%;background-repeat:no-repeat;background-size:cover}",""]),t.exports=r},275:function(t,e,n){"use strict";n.r(e);var r={name:"featureHeaderTwo",props:{headline:String,subline:String}},o=(n(271),n(18)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"bg-dark py-5 bg-image"},[n("div",{staticClass:"container px-4 px-lg-5 my-5"},[n("div",{staticClass:"text-center text-white"},[n("h1",{staticClass:"display-4 fw-bolder"},[t._v(t._s(t.headline))]),t._v(" "),n("p",{staticClass:"lead fw-normal text-white mb-0"},[t._v("\n        "+t._s(t.subline)+"\n      ")])])])])}),[],!1,null,"2e3e5140",null);e.default=component.exports;installComponents(component,{Header:n(195).default})},276:function(t,e,n){"use strict";n.r(e);var r=n(19),o={data:function(){return{config:r}}},c=n(18),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container-xxl py-5"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row g-5"},[n("div",{staticClass:"col-lg-6 fadeInUp",staticStyle:{"min-height":"400px"}},[n("div",{staticClass:"position-relative h-100"},[n("nuxt-img",{staticClass:"img-fluid position-absolute w-100 h-100",staticStyle:{"object-fit":"cover","object-position":"center bottom"},attrs:{preset:"default",src:"/assets/images/featureHeader/outdoorhose.jpg",alt:t.config.seo.mainKeyword,width:"612",height:"514"}})],1)]),t._v(" "),n("div",{staticClass:"col-lg-6 fadeInUp"},[n("div",{staticClass:"section-title bg-white text-start text-primary pe-3"},[t._v("\n            Damen und Herren\n          ")]),t._v(" "),n("div",{staticClass:"mb-4 h1"},[t._v(t._s(t.config.seo.mainKeyword))]),t._v(" "),n("div",{domProps:{innerHTML:t._s(t.config.seo.featureText)}}),t._v(" "),n("Checklist"),t._v(" "),n("nuxt-link",{staticClass:"btn btn-primary btn-lg py-3 px-5 mt-2",attrs:{to:"/shop/",title:t.config.seo.mainKeyword+" Shop"}},[t._v("zum "+t._s(t.config.seo.mainKeyword)+" Shop")])],1)])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Checklist:n(265).default})},277:function(t,e,n){"use strict";n.r(e);n(43);var r=n(19),o=n(140),c=n(109),l={name:"brandsComponent",data:function(){var t=c.a.seo.getSeoForPage("shop");return{config:r,seoData:t,brands:o.slice(0,20)}}},d=n(18),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row py-5"},[n("div",{staticClass:"text-center fadeInUp"},[n("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n        "+t._s(t.config.seo.mainKeyword)+"\n      ")]),t._v(" "),n("div",{staticClass:"mb-5 h2"},[t._v("Marken")])]),t._v(" "),t._l(t.brands,(function(e,r){return n("div",{key:r,staticClass:"col-2 h4 w-50"},[n("nuxt-link",{attrs:{to:"/marken/"+e.slug+"/",title:t.config.seo.mainKeyword+" von "+e.name},domProps:{innerHTML:t._s(e.name)}})],1)})),t._v(" "),n("div",{staticClass:"text-center pt-5"},[n("nuxt-link",{staticClass:"btn btn-primary btn-lg",attrs:{to:"/marken/",title:t.seoData.title}},[t._v("Alle Marken")])],1)],2)])}),[],!1,null,null,null);e.default=component.exports},278:function(t,e,n){"use strict";n.r(e);n(20),n(10),n(44),n(57);var r=n(19),o=n(51).filter((function(t){return r.winnerProducts.includes(t.sku)})),c={name:"testsieger",data:function(){return{featured:o,config:r}}},l=n(18),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-xxl py-5",attrs:{id:"testsieger"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"text-center fadeInUp"},[n("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n        "+t._s(t.config.seo.mainKeyword)+"\n      ")]),t._v(" "),n("div",{staticClass:"mb-5 h2"},[t._v("Testsieger")])]),t._v(" "),n("div",{staticClass:"row g-4 justify-content-center"},t._l(t.featured,(function(t){return n("div",{key:t.name,staticClass:"col-lg-4 col-md-6 col-sm-8 col-xs-12 fadeInUp"},[n("ProductItem",{attrs:{product:t}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:n(260).default})},279:function(t,e,n){"use strict";n.r(e);var r=n(19),o=n(109).a.products.getFeaturedProducts(),c={name:"popularProducts",data:function(){return{config:r,products:o}}},l=n(18),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-xxl py-5",attrs:{id:"testsieger"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"text-center fadeInUp"},[n("div",{staticClass:"section-title bg-white text-center text-primary px-3 h6"},[t._v("\n        "+t._s(t.config.seo.mainKeyword)+"\n      ")]),t._v(" "),n("div",{staticClass:"mb-5 h2"},[t._v("Beliebte Produkte")])]),t._v(" "),n("div",{staticClass:"row g-4 justify-content-center"},t._l(t.products,(function(t){return n("div",{key:t.name,staticClass:"col-lg-4 col-md-6 col-sm-8 col-xs-12 fadeInUp"},[n("ProductItem",{attrs:{product:t}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductItem:n(260).default})},291:function(t,e,n){"use strict";n.r(e);n(43);var r=n(19),o=n(51),c=r.seo.index,l={name:"IndexPage",head:{title:c.title,meta:[{hid:"description",name:"description",content:c.metaDescription},{hid:"robots",name:"robots",content:c.robots}]},data:function(){return{seoData:c,config:r,products:o.slice(0,r.numberOfProductsOnStartpage)}}},d=n(18),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("FeatureHeaderTwo",{attrs:{headline:t.config.seo.mainKeyword,subline:t.config.subline}}),t._v(" "),n("FeaturedHeader"),t._v(" "),n("Brands"),t._v(" "),n("WinnerProducts"),t._v(" "),n("div",{staticClass:"container"},[n("Products",{attrs:{products:t.products}})],1),t._v(" "),n("PopularProducts"),t._v(" "),n("SeoText",{attrs:{seoData:t.seoData}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FeatureHeaderTwo:n(275).default,FeaturedHeader:n(276).default,Brands:n(277).default,WinnerProducts:n(278).default,Products:n(264).default,PopularProducts:n(279).default,SeoText:n(270).default})}}]);