(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{677:function(t,e,r){var content=r(715);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("01da1422",content,!0,{sourceMap:!1})},710:function(t,e,r){t.exports=r.p+"img/loicmazuel.647762b.png"},711:function(t,e,r){t.exports=r.p+"img/jellynote.56a5989.jpg"},712:function(t,e,r){t.exports=r.p+"img/whitebird.648cc7d.jpg"},713:function(t,e,r){t.exports=r.p+"img/vue-smart-list-ui.08d5f70.png"},714:function(t,e,r){"use strict";r(677)},715:function(t,e,r){(e=r(27)(!1)).push([t.i,".made-with-maz-ui[data-v-65388a38]{color:var(--maz-text-color)}@media only screen and (max-width:1024px){.made-with-maz-ui__main[data-v-65388a38]{flex-direction:column-reverse}}.made-with-maz-ui__projects-list[data-v-65388a38]{display:grid;grid-template-columns:repeat(2,1fr);grid-gap:40px}@media only screen and (max-width:1024px){.made-with-maz-ui__projects-list[data-v-65388a38]{grid-template-columns:repeat(1,1fr)}}",""]),t.exports=e},720:function(t,e,r){"use strict";r.r(e);var o=r(143),n=(r(35),r(22),r(12),r(7),r(20),r(34)),c=r(26);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var m={name:"ProjectPreviewFooter",props:{project:{type:Object,required:!0}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)(["hasDarkTheme"]))},d=r(1),h={name:"ProjectPreview",components:{ProjectPreviewFooter:Object(d.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"project-preview-footer maz-flex maz-justify-end"},[t.project.githubUrl?r("MazBtn",{staticClass:"maz-mr-2",attrs:{href:t.project.githubUrl,color:t.hasDarkTheme?"white":"dark",target:"_blank"}},[t._v("\n    GITHUB\n  ")]):t._e(),t._v(" "),t.project.npmUrl?r("MazBtn",{staticClass:"maz-mr-2",attrs:{href:t.project.npmUrl,color:"danger",target:"_blank"}},[r("svg",{attrs:{viewBox:"0 0 780 250"}},[r("path",{attrs:{fill:"#231F20",d:"M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"}})])]):t._e(),t._v(" "),t.project.demoUrl?r("MazBtn",{attrs:{href:t.project.demoUrl,color:"primary",target:"_blank"}},[t._v("\n    SHOW PROJECT\n  ")]):t._e()],1)}),[],!1,null,null,null).exports},props:{project:{type:Object,required:!0}}},f=Object(d.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("MazCard",{staticClass:"project-preview",attrs:{images:[{slug:t.project.imgUrl,alt:"image illustration "+t.project.name}],zoom:"",width:"100%","gallery-height":300},scopedSlots:t._u([{key:"title",fn:function(){return[r("p",{staticClass:"maz-mb-2"},[t._v("\n      "+t._s(t.project.name)+"\n    ")])]},proxy:!0},{key:"content",fn:function(){return[r("p",{staticClass:"maz-mb-2"},[t._v("\n      "+t._s(t.project.description)+"\n    ")])]},proxy:!0},{key:"footer",fn:function(){return[r("ProjectPreviewFooter",{attrs:{project:t.project}})]},proxy:!0}])})}),[],!1,null,null,null).exports,meta=r(144),j={name:"MadeWithMazUi",components:{NavFooter:o.a,ProjectPreview:f},head:function(){return{title:"Made with Maz UI",meta:Object(meta.a)({description:"Discover some projects realized with the Maz UI components for Vue.JS and Nuxt.JS",title:"Made with Maz UI | Maz UI"})}},asyncData:function(){return{projects:[{name:"Freelance Personnal Website",imgUrl:r(710),demoUrl:"https://www.loicmazuel.com/"},{name:"Jellynote.com",description:"French startup: Help you to learn music easier",imgUrl:r(711),demoUrl:"https://www.jellynote.com/"},{name:"Whitebird.immo",description:"French startup: Property manager and trustee",imgUrl:r(712),demoUrl:"https://www.whitebird.immo/"},{name:"Vue Smart List UI",description:"An intelligent interface for displaying a list of data and performing filters, sorting and searching on it. Also to display the details of the data.",githubUrl:"https://github.com/LouisMazel/vue-smart-list-ui",imgUrl:r(713),demoUrl:"https://louismazel.github.io/vue-smart-list-ui/"}]}}},v=(r(714),Object(d.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return e("MazFlex",{staticClass:"made-with-maz-ui",attrs:{flex:"","direction-column":"",flex1:""}},[e("MazFlex",{attrs:{flex1:"","direction-column":""}},[e("h2",{staticClass:"maz-text-center maz-mt-6"},[this._v("\n      Projects Made With Mazel UI\n    ")]),this._v(" "),e("div",{staticClass:"maz-container made-with-maz-ui__projects-list maz-py-6"},this._l(this.projects,(function(t,i){return e("ProjectPreview",{key:"project-"+i,staticClass:"made-with-maz-ui__projects-list__item",attrs:{project:t}})})),1)]),this._v(" "),e("NavFooter")],1)}),[],!1,null,"65388a38",null));e.default=v.exports}}]);