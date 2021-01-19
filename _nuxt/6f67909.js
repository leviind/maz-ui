(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{733:function(n,t,e){"use strict";e.r(t);var l={name:"MazDialogDoc",data:function(){return{hasDialogOpen:!1,hasDialogOpenDanger:!1,hasDialogOpenSuccess:!1,hasDialogOpenDark:!1,hasDialogOpenFullSize:!1,codeExample:'<template>\n  <MazBtn\n    class="maz-mr-2 maz-mb-2"\n    @click.stop="hasDialogOpen = true"\n  >\n    Open Basic Dialog\n  </MazBtn>\n  <MazDialog\n    v-model="hasDialogOpen"\n    :max-width="800"\n    title="Basic Dialog"\n  >\n    Dialog Content basic\n  </MazDialog>\n  <MazBtn\n    color="success"\n    class="maz-mr-2 maz-mb-2"\n    @click="hasDialogOpenSuccess = true"\n  >\n    Open Success Dialog\n  </MazBtn>\n  <MazDialog\n    v-model="hasDialogOpenSuccess"\n    success\n    title="Success Dialog"\n  >\n    Dialog Content Success\n  </MazDialog>\n  <MazBtn\n    color="danger"\n    class="maz-mr-2 maz-mb-2"\n    @click="hasDialogOpenDanger = true"\n  >\n    Open Danger Dialog\n  </MazBtn>\n  <MazDialog\n    v-model="hasDialogOpenDanger"\n    danger\n    title="Danger Dialog"\n  >\n    Dialog Content Danger\n  </MazDialog>\n  <MazBtn\n    class="maz-mr-2 maz-mb-2"\n    color="dark"\n    @click="hasDialogOpenDark = true"\n  >\n    Open Dark Dialog with excluded classes\n  </MazBtn>\n  <MazDialog\n    v-model="hasDialogOpenDark"\n    dark\n    title="Dark Dialog"\n    :excluded-classes="[\'dz-hidden-input\']"\n  >\n    <p class="maz-mb-3">\n      Dark dialog content\n    </p>\n    <MazDropzone\n      ref="mazDropzone"\n      url="/test"\n    />\n  </MazDialog>\n  <MazBtn\n    @click="hasDialogOpenFullSize = true"\n  >\n    Open Fullsize Dialog\n  </MazBtn>\n  <MazDialog\n    v-model="hasDialogOpenFullSize"\n    fullsize\n    title="Full size dialog"\n  >\n\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n    <h3 class="maz-my-6 maz-text-center">\n      Full size dialog content\n    </h3>\n  </MazDialog>\n</template>\n\nexport default {\n  data () {\n    return {\n      hasDialogOpen: false,\n        hasDialogOpenDanger: false,\n        hasDialogOpenSuccess: false,\n        hasDialogOpenDark: false\n    }\n  }\n}'}}},c=e(1),component=Object(c.a)(l,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"maz-dialog-doc"},[e("ComponentContainer",{attrs:{code:n.codeExample}},[e("div",{staticClass:"maz-flex maz-flex-wrap maz-align-start"},[e("MazBtn",{staticClass:"maz-mr-2 maz-mb-2",on:{click:function(t){t.stopPropagation(),n.hasDialogOpen=!0}}},[n._v("\n          Open Basic Dialog\n        ")]),n._v(" "),e("MazDialog",{attrs:{title:"Basic Dialog"},model:{value:n.hasDialogOpen,callback:function(t){n.hasDialogOpen=t},expression:"hasDialogOpen"}},[n._v("\n          Dialog Basic Dialog\n        ")]),n._v(" "),e("MazBtn",{staticClass:"maz-mr-2 maz-mb-2",attrs:{color:"success"},on:{click:function(t){n.hasDialogOpenSuccess=!0}}},[n._v("\n          Open Success Dialog\n        ")]),n._v(" "),e("MazDialog",{attrs:{success:"",title:"Success Dialog"},model:{value:n.hasDialogOpenSuccess,callback:function(t){n.hasDialogOpenSuccess=t},expression:"hasDialogOpenSuccess"}},[n._v("\n          Dialog Content Success\n        ")]),n._v(" "),e("MazBtn",{staticClass:"maz-mr-2 maz-mb-2",attrs:{color:"danger"},on:{click:function(t){n.hasDialogOpenDanger=!0}}},[n._v("\n          Open Danger Dialog\n        ")]),n._v(" "),e("MazBtn",{staticClass:"maz-mr-2 maz-mb-2",attrs:{color:"dark"},on:{click:function(t){n.hasDialogOpenDark=!0}}},[n._v("\n          Open Dark Dialog with excluded classes\n        ")]),n._v(" "),e("MazDialog",{attrs:{dark:"",title:"Dark Dialog","excluded-classes":["dz-hidden-input"]},model:{value:n.hasDialogOpenDark,callback:function(t){n.hasDialogOpenDark=t},expression:"hasDialogOpenDark"}},[e("p",{staticClass:"maz-mb-3"},[n._v("\n            Dark dialog content\n          ")]),n._v(" "),e("MazDropzone",{ref:"mazDropzone",attrs:{url:"/test"}})],1),n._v(" "),e("MazBtn",{on:{click:function(t){n.hasDialogOpenFullSize=!0}}},[n._v("\n          Open Fullsize Dialog\n        ")]),n._v(" "),e("MazDialog",{attrs:{danger:"",title:"Danger Dialog"},model:{value:n.hasDialogOpenDanger,callback:function(t){n.hasDialogOpenDanger=t},expression:"hasDialogOpenDanger"}},[n._v("\n          Dialog Content Danger\n        ")]),n._v(" "),e("MazDialog",{attrs:{fullsize:"",title:"Full size dialog"},model:{value:n.hasDialogOpenFullSize,callback:function(t){n.hasDialogOpenFullSize=t},expression:"hasDialogOpenFullSize"}},[e("h5",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Full size dialog content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")]),n._v(" "),e("p",{staticClass:"maz-my-6 maz-text-center"},[n._v("\n            Scroll content\n          ")])])],1)]),n._v(" "),e("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-6",attrs:{id:"howToUseIt"}}),n._v(" "),e("h4",[n._v("\n      How to use it ?\n    ")]),n._v(" "),e("CodeContainer",{attrs:{language:"html",code:'<template>\n  <MazDialog\n    v-model="hasDialogOpen"\n  >\n    <div slot="title">\n      Basic Dialog\n    </div>\n    Dialog Content basic\n  </MazDialog>\n</template>\n\n<script>\n  import { MazDialog } from \'maz-ui\'\n  export default {\n    components: { MazDialog },\n    data () {\n      return {\n        hasDialogOpen: false\n      }\n    }\n  }\n<\/script>'}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);