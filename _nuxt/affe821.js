(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{741:function(e,l,n){"use strict";n.r(l);var t={name:"MazInputTagsDoc",data:function(){return{exampleValue:["maz-ui","input","tags"],codeExample:'<template>\n  <p class="mb-2">\n    v-model: {{ exampleValue }}\n  </p>\n  <MazInputTags\n    v-model="exampleValue"\n    placeholder="Add tags"\n    clearable\n    size="lg"\n    class="maz-mb-3"\n  />\n  <MazInputTags\n    v-model="exampleValue"\n    placeholder="Add tags"\n    clearable\n    color="secondary"\n    class="maz-mb-3"\n  />\n  <MazInputTags\n    v-model="exampleValue"\n    placeholder="Add tags"\n    clearable\n    color="third"\n    size="sm"\n  />\n</template>\n\nexport default {\n  data () {\n    return {\n      exampleValue: [\'maz-ui\', \'input\', \'tags\']\n    }\n  }\n}'}}},o=n(1),component=Object(o.a)(t,(function(){var e=this,l=e.$createElement,n=e._self._c||l;return n("div",{staticClass:"maz-input-tags-doc"},[n("ComponentContainer",{attrs:{code:e.codeExample}},[n("p",{staticClass:"maz-mb-2"},[e._v("\n        v-model: "+e._s(e.exampleValue)+"\n      ")]),e._v(" "),n("MazInputTags",{staticClass:"maz-mb-3",attrs:{placeholder:"Add tags",clearable:"",size:"lg"},model:{value:e.exampleValue,callback:function(l){e.exampleValue=l},expression:"exampleValue"}}),e._v(" "),n("MazInputTags",{staticClass:"maz-mb-3",attrs:{placeholder:"Add tags",clearable:"",color:"secondary"},model:{value:e.exampleValue,callback:function(l){e.exampleValue=l},expression:"exampleValue"}}),e._v(" "),n("MazInputTags",{attrs:{placeholder:"Add tags",clearable:"",color:"third",size:"sm"},model:{value:e.exampleValue,callback:function(l){e.exampleValue=l},expression:"exampleValue"}})],1),e._v(" "),n("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5",attrs:{id:"howToUseIt"}}),e._v(" "),n("h4",[e._v("\n      How to use it ?\n    ")]),e._v(" "),n("CodeContainer",{attrs:{language:"html",code:"<template>\n  <MazInputTags\n    v-model=\"exampleValue\"\n  />\n</template>\n\n<script>\n  import { MazInputTags } from 'maz-ui'\n  export default {\n    components: { MazInputTags }\n    data () {\n      return {\n        exampleValue: null\n      }\n    }\n  }\n<\/script>"}})],1)}),[],!1,null,null,null);l.default=component.exports}}]);