"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.useStore=useStore;var _react=require("react"),_context=require("./context");function useStore(a){var b=(0,_react.useContext)(_context.Context),c=b.state,d=b.changeState,e=d(a);return[a?c[a]:c,e]}