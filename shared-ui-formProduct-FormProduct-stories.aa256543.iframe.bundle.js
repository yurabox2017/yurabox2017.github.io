"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[483],{"./src/shared/ui/formProduct/FormProduct.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FormProduct_stories});__webpack_require__("./node_modules/react/index.js");var index_esm=__webpack_require__("./node_modules/react-hook-form/dist/index.esm.mjs"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var FormProduct=function FormProduct(){var _useForm=(0,index_esm.cI)({mode:"onChange"}),register=_useForm.register,handleSubmit=_useForm.handleSubmit,reset=_useForm.reset,errors=_useForm.formState.errors;return(0,jsx_runtime.jsxs)("form",{className:"container needs-validation",onSubmit:handleSubmit((function onSubmit(data){console.log(data),reset()})),noValidate:!0,children:[(0,jsx_runtime.jsxs)("div",{className:"mb-3",children:[(0,jsx_runtime.jsx)("label",{className:"form-label",children:"Category"}),(0,jsx_runtime.jsx)("input",_objectSpread(_objectSpread({type:"text",className:(0,clsx_m.Z)(["form-control",errors.category&&"is-invalid"])},register("category",{required:!0,minLength:3})),{},{required:!0}))]}),(0,jsx_runtime.jsxs)("div",{className:"mb-3",children:[(0,jsx_runtime.jsx)("label",{className:"form-label",children:"Title"}),(0,jsx_runtime.jsx)("input",_objectSpread(_objectSpread({type:"text",className:(0,clsx_m.Z)(["form-control",errors.title&&"is-invalid"])},register("title",{required:!0,minLength:3})),{},{required:!0}))]}),(0,jsx_runtime.jsxs)("div",{className:"mb-3",children:[(0,jsx_runtime.jsx)("label",{className:"form-label",children:"Title"}),(0,jsx_runtime.jsx)("input",_objectSpread(_objectSpread({type:"text",className:(0,clsx_m.Z)(["form-control",errors.description&&"is-invalid"])},register("description",{required:!0,minLength:3})),{},{required:!0}))]}),(0,jsx_runtime.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})};FormProduct.displayName="FormProduct";const FormProduct_stories={title:"Homework2/FormProduct",component:FormProduct,tags:["autodocs"]};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);