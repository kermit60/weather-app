/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  padding: 0;\n  margin: 0;\n  /* border: solid 1px red; */\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n}\n\n:root {\n  --header-color: #343a40;\n}\n\nbutton {\n  background-color: white;\n}\n\n.selected {\n  color: rgb(38, 38, 254);\n  font-weight: 600;\n}\n\n#header {\n  height: 90px;\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  justify-content: center;\n  background-color: var(--header-color);\n}\n\n#heading {\n  color: white;\n \n}\n\nform {\n  display: flex;\n}\n\n#input-div {\n  display: flex;\n  flex-direction: column;\n}\n\n#search {\n  width: 250px;\n  height: 26px;\n  border-radius: 3px 0 0 3px;\n  padding-left: 5px;\n  border: none;\n}\n\n#search-button {\n  border: none;\n  background-color: rgb(28, 213, 28);\n  color: white;\n  padding: 5px 10px;\n  border-radius: 0 3px 3px 0;\n  cursor: pointer;\n}\n\n#temp-toggle {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  border: none;\n  min-height: 26px;\n  min-width: 75px;\n  border-radius: 3px;\n  background-color: white;\n}\n\n#error-message {\n  display: flex;\n  justify-content: center;\n  font-size: 13px;\n  color: red;\n  \n}\n\n#main-container {\n  display: flex;\n  padding-top: 20px;\n}\n\n#today-temp {\n  display: flex;\n  flex-direction: column;\n  padding: 0 10vw;\n  text-align: center;\n  justify-content: center;\n}\n\n#city {\n  font-size: 25px;\n}\n\n#today-temp > div {\n  display: flex;\n  justify-content: center;\n  gap: 5px;\n}\n\n#current-temp {\n  font-size: 55px;\n  font-weight: 200;\n}\n\n#temp-display {\n  display: flex;\n  border-top: 1px solid rgb(213, 213, 213);\n  gap: 30px;\n}\n\n#temp-display,\n#additional-temp {\n  overflow-x: scroll;\n}\n\n.display-item {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  gap: 5px;\n  padding: 10px;\n}\n\n.display-img {\n  width: 75px;\n  height: 75px;\n}\n\n#description {\n  text-align: center;\n  padding: 30px 0;\n}\n\n#additional-temp {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(80px, 150px));\n  grid-template-rows: repeat(2, 100px);\n  \n  justify-items: center;\n  align-items: center;\n  justify-content: center;\n  background-color: var(--header-color);\n  color: white;\n  padding: 30px 30px;\n}\n\n.add-temp-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n  height: 70px;\n  width: 70px;\n}\n\n.add-temp-item > p {\ncolor: #6c757d;\n  font-size: 12px;\n  font-weight: 200;\n  width: 100px;\n  text-align: center;\n}\n\n.add-temp-item > div {\n  text-align: center;\n  font-size: 15px;\n  font-weight: 300;\n  min-width: 75px;\n}\n\n#week-temp {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 30px 0;\n}\n\n#week-header,\n.week-temp-item {\n  display: flex;\n  font-size: 11px;\n  font-weight: 300;\n  border-bottom: solid 1px rgb(213, 213, 213);\n  gap: 20px;\n}\n\n#week-header > p,\n.week-temp-item > div {\n  text-align: center;\n  width: clamp(60px, 100px, 120px);\n}\n\n#week-temp-list {\n  display: grid;\n  grid-template-rows: repeat(7, 65px);\n}\n\n.week-temp-item {\n  font-size: 12px;\n}\n\n.week-temp-item > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  \n}\n\n.week-img {\n  width: 65px;\n  \n}\n\n\n\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://template/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://template/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/location */ \"./src/modules/location.js\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ \"./src/modules/handlers.js\");\n\n\n\n\n\n_modules_dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createPage('Canada', true);\n\nconsole.log('RENDERING WORKS');\n\n\n//# sourceURL=webpack://template/./src/index.js?");

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location */ \"./src/modules/location.js\");\n\n\nconst dom = (() => {\n  const iconSetIdentifier = {\n    snow: '13d',\n    'snow-showers-day': '13d',\n    'snow-showers-night': '13n',\n    'thunder-rain': '11d',\n    'thunder-showers-day': '11d',\n    'thunder-showers-night': '11n',\n    rain: '09d',\n    'showers-day': '10d',\n    'showers-night': '10n',\n    fog: '50d',\n    wind: '50d',\n    cloudy: '04d',\n    'partly-cloudy-day': '02d',\n    'partly-cloudy-night': '02n',\n    'clear-day': '01d',\n    'clear-night': '01n'\n  }\n\n  const errorMessage = document.querySelector('#error-message');\n\n  const changeTodaysTemp = (values) => {\n    const city = document.querySelector('#city');\n    const description = document.querySelector('#temp-description');\n    const temperature = document.querySelector('#current-temp');\n    const high = document.querySelector('#curr-high');\n    const low = document.querySelector('#curr-low');\n    city.textContent = values.city;\n    description.textContent = values.condition;\n    temperature.textContent = values.currentTemp;\n    high.textContent = values.high;\n    low.textContent = values.low;\n  }\n\n  const changeDescription = (description) => {\n    const descriptionElement = document.querySelector('#description');\n    descriptionElement.textContent = description;\n  }\n\n  const changeAdditionalInfo = (additionalInfo) => {\n    const sunrise = document.querySelector('#sunrise');\n    const sunset = document.querySelector('#sunset');\n    const chanceOfRain = document.querySelector('#rain-chance');\n    const humidity = document.querySelector('#humidity');\n    const wind = document.querySelector('#wind');\n    const feels = document.querySelector('#feels-like');\n    const precipitation = document.querySelector('#precipitation');\n    const pressure = document.querySelector('#pressure');\n    const visibility = document.querySelector('#visibility');\n    const uv = document.querySelector('#uv-index');\n    sunrise.textContent = additionalInfo.sunrise;\n    sunset.textContent = additionalInfo.sunset;\n    chanceOfRain.textContent = additionalInfo.chanceOfRain;\n    humidity.textContent = additionalInfo.humidity;\n    wind.textContent = additionalInfo.wind;\n    feels.textContent = additionalInfo.feelslike;\n    precipitation.textContent = additionalInfo.precip;\n    pressure.textContent = additionalInfo.pressure;\n    visibility.textContent = additionalInfo.visibility;\n    uv.textContent = additionalInfo.uvIndex;\n  }\n\n  const createHourForecast = (info) => {\n    const displayItem = document.createElement('div');\n    const displayTime = document.createElement('div');\n    const displayRain = document.createElement('div');\n    const icon = new Image();\n    const temp = document.createElement('div');\n\n    displayItem.classList.add('display-item');\n    displayTime.classList.add('display-time');\n    displayRain.classList.add('display-rain');\n    icon.classList.add('display-img');\n    temp.classList.add('display-temp');\n\n    displayTime.textContent = info.dateTime;\n    displayRain.textContent = info.chanceOfRain;\n    icon.src = `https://openweathermap.org/img/wn/${iconSetIdentifier[info.icon]}@2x.png`;\n    temp.textContent = info.temp;\n\n    displayItem.appendChild(displayTime);\n    displayItem.appendChild(displayRain);\n    displayItem.appendChild(icon);\n    displayItem.appendChild(temp);\n\n    return displayItem;\n  }\n\n  const createHourDisplay = (infoArray) => {\n    const display = document.querySelector('#temp-display');\n    display.textContent = '';\n    infoArray.forEach(date => {\n      display.appendChild(createHourForecast(date));\n    })\n  }\n\n  const createWeekItem = (weekInfo) => {\n    const weekItem = document.createElement('div');\n    const weekDay = document.createElement('div');\n    const imgContainer = document.createElement('div');\n    const icon = new Image();\n    const rainChance = document.createElement('div');\n    const humidity = document.createElement('div');\n    const temperature = document.createElement('div');\n\n    weekItem.classList.add('week-temp-item');\n    weekDay.classList.add('week-day');\n    icon.classList.add('week-img');\n    rainChance.classList.add('week-chance');\n    humidity.classList.add(\"week-humidity\");\n    temperature.classList.add(\"week-temperature\");\n\n    // weekDay, icon, chanceOfRain, humidity, temp\n    weekDay.textContent = weekInfo.weekDay;\n    icon.src = `https://openweathermap.org/img/wn/${iconSetIdentifier[weekInfo.icon]}@2x.png`;\n    rainChance.textContent = weekInfo.chanceOfRain;\n    humidity.textContent = weekInfo.humidity;\n    temperature.textContent = weekInfo.temp;\n\n    imgContainer.appendChild(icon);\n    weekItem.appendChild(weekDay);\n    weekItem.appendChild(imgContainer);\n    weekItem.appendChild(rainChance);\n    weekItem.appendChild(humidity);\n    weekItem.appendChild(temperature);\n    return weekItem;\n  }\n\n  const createWeekDisplay = (weekArray) => {\n    const display = document.querySelector('#week-temp-list');\n\n    if (weekArray.length === 0) {\n      return;\n    }\n    display.textContent = '';\n    weekArray.forEach(date => {\n      console.log(date);\n      display.appendChild(createWeekItem(date));\n    });\n  }\n\n  const createPage = (city, units) => {\n    _location__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getLocation(city);\n    const array = _location__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getWeekInfo(city, units);\n    setTimeout(() => {\n      changeDescription(_location__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDescription());\n      changeTodaysTemp(_location__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getTodaysTemp(units));\n      changeAdditionalInfo(_location__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getAdditionalTempInfo(units));\n      createHourDisplay(_location__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDisplayInfo(units));\n      createWeekDisplay(array);\n    }, 500);\n  }\n\n  const displayErrorMessage = (city) => {\n    errorMessage.textContent = `The location (${city}) doesn't exist`;\n    setTimeout(() => {\n      errorMessage.textContent = '';\n    }, 3000);\n  }\n\n  // CELSIUS is true FAHRENHAIT is false\n  const changeUnit = (() => { \n    let unit = true;\n\n    const changeUnitOfMeasure = () => {\n      unit = !unit;\n    }\n\n    const getUnitOfMeasure = () => unit;\n\n    return {\n      changeUnitOfMeasure,\n      getUnitOfMeasure\n    }\n  })();\n\n  return {\n    changeTodaysTemp,\n    changeDescription,\n    changeAdditionalInfo,\n    createHourForecast,\n    createHourDisplay,\n    createWeekItem,\n    createWeekDisplay,\n    createPage,\n    displayErrorMessage,\n    changeUnit\n  }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n//# sourceURL=webpack://template/./src/modules/dom.js?");

/***/ }),

/***/ "./src/modules/handlers.js":
/*!*********************************!*\
  !*** ./src/modules/handlers.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location */ \"./src/modules/location.js\");\n\n\n\nconst handlers = (() => {\n  const searchButton = document.querySelector('#search-button');\n  const input = document.querySelector('#search');\n  searchButton.addEventListener('click', (e) => {\n    e.preventDefault();\n    console.log(input.value);\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createPage(input.value, _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeUnit.getUnitOfMeasure());\n    input.value = ''\n  })\n\n  const toggle = document.querySelector('#temp-toggle');\n  const celsius = document.querySelector('#celsius');\n  const fahr = document.querySelector('#fahrenheit');\n  toggle.addEventListener('click', () =>{\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeUnit.changeUnitOfMeasure();\n    celsius.classList.remove('selected');\n    fahr.classList.remove('selected');\n    const unit = _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeUnit.getUnitOfMeasure();\n    if (unit) {\n      celsius.classList.add('selected')\n    } else {\n      fahr.classList.add('selected');\n    }\n\n    console.log(_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeUnit.getUnitOfMeasure());\n    _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createPage(_location__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPlace(), unit);\n  })\n\n})()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handlers);\n\n//# sourceURL=webpack://template/./src/modules/handlers.js?");

/***/ }),

/***/ "./src/modules/location.js":
/*!*********************************!*\
  !*** ./src/modules/location.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/modules/dom.js\");\n\n\nconst location = (() => {\n  let targetLocation = '';\n  // yyyy-MM-ddTHH:mm:ss 2020-10-19T13:00:00\n  const formatDate = () => {\n    const date = new Date();\n    const month = (Number(date.getMonth()) + 1).toString().padStart(2, '0');\n    const year = date.getFullYear();\n    const day = date.getDate().toString().padStart(2, '0');\n    const hour = date.getHours().toString().padStart(2, '0');\n    const minute = date.getMinutes().toString().padStart(2, '0');\n    const second = date.getSeconds().toString().padStart(2, '0');\n\n    return `${year}-${month}-${day}T${hour}:${minute}:${second}`;\n  };\n\n  const getPlace = () => targetLocation.address;\n\n  const getLocation = async (city) => {\n    try {\n      // fetching the city's information                                                                                            \n      const cityFetch = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${formatDate()}?key=NZL55SGLRPM9G77WWV7GLSNPP&unitGroup=metric`)\n      const cityInfo = await cityFetch.json();\n      targetLocation = cityInfo\n      console.log('Current Location', targetLocation.resolvedAddress);\n    } catch (error) {\n      _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].displayErrorMessage(city);\n      console.log(`The city/country ${city} doesn't exist`);\n      console.log('Current location', targetLocation.resolvedAddress);\n    }\n  }\n\n  const getDescription = () => `Today: ${targetLocation.days[0].description}`;\n\n  const getTodaysTemp = (units) => {\n    const city = targetLocation.resolvedAddress.split(', ')[0];\n    const today = targetLocation.days[0];\n    const condition = today.conditions;\n    const currentTemp = `${Math.round(targetLocation.currentConditions ? (units ? targetLocation.currentConditions.temp : (targetLocation.currentConditions.temp * 9/5) + 32 )\n                                                                       : (units ? targetLocation.days[0].temp : (targetLocation.days[0].temp * 9/5) + 32))}°`;\n    const high = `H:${units ? Math.round(today.tempmax) : Math.round((today.tempmax * 9/5) + 32)}°`;\n    const low = `L:${units ? Math.round(today.tempmin) : Math.round((today.tempmin * 9/5) + 32)}°`;\n\n    return {\n      city,\n      condition,\n      currentTemp,\n      high,\n      low\n    }\n  }\n\n  const getDisplayInfo = (units) => {\n    const array = [];\n    const displayArray = targetLocation.days[0].hours;\n    array.push({\n      dateTime: 'Now',\n      chanceOfRain: `${targetLocation.currentConditions ? targetLocation.currentConditions.precipprob : targetLocation.days[0].precipprob}%`,\n      icon: targetLocation.currentConditions ? targetLocation.currentConditions.icon : targetLocation.days[0].icon,\n      temp: `${targetLocation.currentConditions ? (units ? Math.round(targetLocation.currentConditions.temp) : Math.round((targetLocation.currentConditions.temp * 9/5) + 32)) \n                                                : (units ? Math.round(targetLocation.days[0].temp) : Math.round((targetLocation.days[0].temp * 9/5) + 32))}°`\n    })\n    displayArray.forEach(element => {\n      const dateTime = element.datetime.substring(0, 5);\n      const chanceOfRain = `${element.precipprob}%`;\n      const icon = element.icon;\n      const temp = `${units ? Math.round(element.temp) : Math.round((element.temp * 9/5) + 32)}°`;\n      array.push({dateTime, chanceOfRain, icon, temp});\n    })\n    return array;\n  }\n\n  const getAdditionalTempInfo = (units) => {\n    const today = targetLocation.days[0];\n    const sunrise = today.sunrise.substring(0, 5);\n    const sunset = today.sunset.substring(0, 5);\n    const chanceOfRain = `${today.precipprob}%`;\n    const humidity = `${Math.round(today.humidity)}%`;\n    const wind = `${today.windspeed} km/hr`;\n    const feelslike =`${units ? Math.round(today.feelslike) : Math.round((today.feelslike * 9/5) + 32)}°`;\n    const precip = `${Math.round(today.precip)} mL`;\n    const pressure = `${String(today.pressure).split('.')[0]} hPa`\n    const visibility = `${today.visibility} km`;\n    const uvIndex = today.uvindex;\n\n    return {\n      sunrise,\n      sunset,\n      chanceOfRain,\n      humidity,\n      wind,\n      feelslike,\n      precip,\n      pressure,\n      visibility,\n      uvIndex\n    }\n  }\n\n  const getWeekInfo = (city, units) => {\n    const infoArray = [];\n    const weekdays = {\n      0: 'Sunday',\n      1: 'Monday',\n      2: 'Tuesday',\n      3: 'Wednesday',\n      4: 'Thursday',\n      5: 'Friday',\n      6: 'Saturday',\n    }\n    \n    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next8days?key=NZL55SGLRPM9G77WWV7GLSNPP&unitGroup=metric`)\n      .then(response => {\n        return response.json();\n      })\n      .then(response => {\n        console.log(response);\n        response.days.splice(2).forEach(day => {\n          const weekDay = weekdays[(new Date(day.datetime)).getDay()];\n          const icon = day.icon;\n          const chanceOfRain = `${day.precipprob}%`;\n          const humidity = `${Math.round(day.humidity)}%`;\n          const temp = `${units ? Math.round(day.tempmax) : Math.round((day.tempmax * 9/5) + 32)}° ${units ? Math.round(day.tempmin) : Math.round((day.tempmin * 9/5) + 32)}°`;\n          infoArray.push({weekDay, icon, chanceOfRain, humidity, temp});\n        })\n      })\n      .catch(error => {\n        console.log(error);\n        return;\n      });\n    console.log(infoArray);\n    return infoArray;\n  }\n\n  return {\n    getLocation,\n    getDescription,\n    getTodaysTemp,\n    getAdditionalTempInfo,\n    getDisplayInfo,\n    getWeekInfo,\n    formatDate,\n    getPlace\n  }\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (location);\n\n//# sourceURL=webpack://template/./src/modules/location.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;