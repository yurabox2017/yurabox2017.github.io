/*! For license information please see stories-Homework2-Operation-stories.41988f9b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[447],{"./src/stories/Homework2/Operation.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PrimaryOperation:()=>PrimaryOperation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Operation_stories});var TrashButton=__webpack_require__("./src/stories/Homework2/buttons/TrashButton.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Operation(_ref){var price=_ref.price,images=_ref.images,category=_ref.category,title=_ref.title,description=_ref.description;return(0,jsx_runtime.jsxs)("div",{className:"card text-center",style:{width:"300px"},children:[images.map((function(x,i){return(0,jsx_runtime.jsx)("img",{src:x,className:"card-img-top img-thumbnail",alt:"...",style:{objectFit:"none"}})})),(0,jsx_runtime.jsxs)("div",{className:"card-body",children:[(0,jsx_runtime.jsx)("h5",{className:"card-title",children:title}),(0,jsx_runtime.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:category}),(0,jsx_runtime.jsx)("p",{className:"card-text",children:description}),(0,jsx_runtime.jsxs)("p",{className:"card-text",children:["цена: ",price,"р"]}),(0,jsx_runtime.jsx)(TrashButton.Z,{counter:0})]})]})}Operation.displayName="Operation";const Homework2_Operation=Operation;Operation.__docgenInfo={description:"",methods:[],displayName:"Operation"};const Operation_stories={title:"Homework2/Operation",component:Homework2_Operation,tags:["autodocs"]};var PrimaryOperation={args:{images:["/free-icon-cleaning-9012135.png","/free-icon-cleaning-9717764.png"],price:1e4,title:"Веник",description:"Веник с длиной ручкой",category:"товары для дома"}};PrimaryOperation.parameters={...PrimaryOperation.parameters,docs:{...PrimaryOperation.parameters?.docs,source:{originalSource:"{\n  args: {\n    images: ['/free-icon-cleaning-9012135.png', '/free-icon-cleaning-9717764.png'],\n    price: 10000,\n    title: 'Веник',\n    description: 'Веник с длиной ручкой',\n    category: 'товары для дома'\n  }\n}",...PrimaryOperation.parameters?.docs?.source}}};const __namedExportsOrder=["PrimaryOperation"]},"./src/stories/Homework2/buttons/TrashButton.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function TrashButton(_ref){var counter=_ref.counter;return 0==counter?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{disabled:!0,className:"btn btn-primary",children:"в корзину"}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{class:"input-group mb-3",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{class:"input-group-text",children:"-"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"text",class:"form-control",value:counter}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{class:"input-group-text",children:"+"})]})}const __WEBPACK_DEFAULT_EXPORT__=TrashButton;TrashButton.__docgenInfo={description:"",methods:[],displayName:"TrashButton"}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);