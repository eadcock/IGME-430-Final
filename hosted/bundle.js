/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/ScriptLoader.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/ScriptLoader.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ScriptLoader\": () => (/* binding */ ScriptLoader)\n/* harmony export */ });\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ \"./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/Utils.js\");\n/**\n * Copyright (c) 2017-present, Ephox, Inc.\n *\n * This source code is licensed under the Apache 2 license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\nvar createState = function () { return ({\n    listeners: [],\n    scriptId: (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.uuid)('tiny-script'),\n    scriptLoading: false,\n    scriptLoaded: false\n}); };\nvar CreateScriptLoader = function () {\n    var state = createState();\n    var injectScriptTag = function (scriptId, doc, url, async, defer, callback) {\n        var scriptTag = doc.createElement('script');\n        scriptTag.referrerPolicy = 'origin';\n        scriptTag.type = 'application/javascript';\n        scriptTag.id = scriptId;\n        scriptTag.src = url;\n        scriptTag.async = async;\n        scriptTag.defer = defer;\n        var handler = function () {\n            scriptTag.removeEventListener('load', handler);\n            callback();\n        };\n        scriptTag.addEventListener('load', handler);\n        if (doc.head) {\n            doc.head.appendChild(scriptTag);\n        }\n    };\n    var load = function (doc, url, async, defer, delay, callback) {\n        var scriptTagInjection = function () { return injectScriptTag(state.scriptId, doc, url, async, defer, function () {\n            state.listeners.forEach(function (fn) { return fn(); });\n            state.scriptLoaded = true;\n        }); };\n        if (state.scriptLoaded) {\n            callback();\n        }\n        else {\n            state.listeners.push(callback);\n            if (!state.scriptLoading) {\n                state.scriptLoading = true;\n                if (delay > 0) {\n                    setTimeout(scriptTagInjection, delay);\n                }\n                else {\n                    scriptTagInjection();\n                }\n            }\n        }\n    };\n    // Only to be used by tests.\n    var reinitialize = function () {\n        state = createState();\n    };\n    return {\n        load: load,\n        reinitialize: reinitialize\n    };\n};\nvar ScriptLoader = CreateScriptLoader();\n\n\n\n//# sourceURL=webpack://Note-riety/./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/ScriptLoader.js?");

/***/ }),

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/TinyMCE.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/TinyMCE.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTinymce\": () => (/* binding */ getTinymce)\n/* harmony export */ });\n/**\n * Copyright (c) 2017-present, Ephox, Inc.\n *\n * This source code is licensed under the Apache 2 license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\nvar getGlobal = function () { return (typeof window !== 'undefined' ? window : global); };\nvar getTinymce = function () {\n    var global = getGlobal();\n    return global && global.tinymce ? global.tinymce : null;\n};\n\n\n\n//# sourceURL=webpack://Note-riety/./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/TinyMCE.js?");

/***/ }),

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/Utils.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/Utils.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isFunction\": () => (/* binding */ isFunction),\n/* harmony export */   \"configHandlers2\": () => (/* binding */ configHandlers2),\n/* harmony export */   \"configHandlers\": () => (/* binding */ configHandlers),\n/* harmony export */   \"uuid\": () => (/* binding */ uuid),\n/* harmony export */   \"isTextareaOrInput\": () => (/* binding */ isTextareaOrInput),\n/* harmony export */   \"mergePlugins\": () => (/* binding */ mergePlugins),\n/* harmony export */   \"isBeforeInputEventAvailable\": () => (/* binding */ isBeforeInputEventAvailable)\n/* harmony export */ });\n/* harmony import */ var _components_EditorPropTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/EditorPropTypes */ \"./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/EditorPropTypes.js\");\n/**\n * Copyright (c) 2017-present, Ephox, Inc.\n *\n * This source code is licensed under the Apache 2 license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\nvar isFunction = function (x) { return typeof x === 'function'; };\nvar isEventProp = function (name) { return name in _components_EditorPropTypes__WEBPACK_IMPORTED_MODULE_0__.eventPropTypes; };\nvar eventAttrToEventName = function (attrName) { return attrName.substr(2); };\nvar configHandlers2 = function (handlerLookup, on, off, adapter, prevProps, props, boundHandlers) {\n    var prevEventKeys = Object.keys(prevProps).filter(isEventProp);\n    var currEventKeys = Object.keys(props).filter(isEventProp);\n    var removedKeys = prevEventKeys.filter(function (key) { return props[key] === undefined; });\n    var addedKeys = currEventKeys.filter(function (key) { return prevProps[key] === undefined; });\n    removedKeys.forEach(function (key) {\n        // remove event handler\n        var eventName = eventAttrToEventName(key);\n        var wrappedHandler = boundHandlers[eventName];\n        off(eventName, wrappedHandler);\n        delete boundHandlers[eventName];\n    });\n    addedKeys.forEach(function (key) {\n        var wrappedHandler = adapter(handlerLookup, key);\n        var eventName = eventAttrToEventName(key);\n        boundHandlers[eventName] = wrappedHandler;\n        on(eventName, wrappedHandler);\n    });\n};\nvar configHandlers = function (editor, prevProps, props, boundHandlers, lookup) {\n    return configHandlers2(lookup, editor.on.bind(editor), editor.off.bind(editor), function (handlerLookup, key) { return function (e) { var _a; return (_a = handlerLookup(key)) === null || _a === void 0 ? void 0 : _a(e, editor); }; }, prevProps, props, boundHandlers);\n};\nvar unique = 0;\nvar uuid = function (prefix) {\n    var time = Date.now();\n    var random = Math.floor(Math.random() * 1000000000);\n    unique++;\n    return prefix + '_' + random + unique + String(time);\n};\nvar isTextareaOrInput = function (element) {\n    return element !== null && (element.tagName.toLowerCase() === 'textarea' || element.tagName.toLowerCase() === 'input');\n};\nvar normalizePluginArray = function (plugins) {\n    if (typeof plugins === 'undefined' || plugins === '') {\n        return [];\n    }\n    return Array.isArray(plugins) ? plugins : plugins.split(' ');\n};\n// eslint-disable-next-line max-len\nvar mergePlugins = function (initPlugins, inputPlugins) { return normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins)); };\nvar isBeforeInputEventAvailable = function () { return window.InputEvent && typeof InputEvent.prototype.getTargetRanges === 'function'; };\n\n\n//# sourceURL=webpack://Note-riety/./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/Utils.js?");

/***/ }),

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/Editor.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/Editor.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Editor\": () => (/* binding */ Editor)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _ScriptLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ScriptLoader */ \"./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/ScriptLoader.js\");\n/* harmony import */ var _TinyMCE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../TinyMCE */ \"./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/TinyMCE.js\");\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils */ \"./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/Utils.js\");\n/* harmony import */ var _EditorPropTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EditorPropTypes */ \"./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/EditorPropTypes.js\");\n/**\n * Copyright (c) 2017-present, Ephox, Inc.\n *\n * This source code is licensed under the Apache 2 license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n\n\nvar changeEvents = function () { var _a, _b, _c; return ((_c = (_b = (_a = (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_2__.getTinymce)()) === null || _a === void 0 ? void 0 : _a.Env) === null || _b === void 0 ? void 0 : _b.browser) === null || _c === void 0 ? void 0 : _c.isIE()) ? 'change keyup compositionend setcontent' : 'change input compositionend setcontent'; };\nvar beforeInputEvent = function () { return (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.isBeforeInputEventAvailable)() ? 'beforeinput SelectionChange' : 'SelectionChange'; };\nvar Editor = /** @class */ (function (_super) {\n    __extends(Editor, _super);\n    function Editor(props) {\n        var _a, _b, _c;\n        var _this = _super.call(this, props) || this;\n        _this.rollbackTimer = undefined;\n        _this.valueCursor = undefined;\n        _this.rollbackChange = function () {\n            var editor = _this.editor;\n            var value = _this.props.value;\n            if (editor && value && value !== _this.currentContent) {\n                editor.undoManager.ignore(function () {\n                    editor.setContent(value);\n                    // only restore cursor on inline editors when they are focused\n                    // as otherwise it will cause a focus grab\n                    if (_this.valueCursor && (!_this.inline || editor.hasFocus())) {\n                        try {\n                            editor.selection.moveToBookmark(_this.valueCursor);\n                        }\n                        catch (e) { /* ignore */ }\n                    }\n                });\n            }\n            _this.rollbackTimer = undefined;\n        };\n        _this.handleBeforeInput = function (_evt) {\n            if (_this.props.value !== undefined && _this.props.value === _this.currentContent && _this.editor) {\n                if (!_this.inline || _this.editor.hasFocus) {\n                    try {\n                        // getBookmark throws exceptions when the editor has not been focused\n                        // possibly only in inline mode but I'm not taking chances\n                        _this.valueCursor = _this.editor.selection.getBookmark(3);\n                    }\n                    catch (e) { /* ignore */ }\n                }\n            }\n        };\n        _this.handleBeforeInputSpecial = function (evt) {\n            if (evt.key === 'Enter' || evt.key === 'Backspace' || evt.key === 'Delete') {\n                _this.handleBeforeInput(evt);\n            }\n        };\n        _this.handleEditorChange = function (_evt) {\n            var editor = _this.editor;\n            if (editor && editor.initialized) {\n                var newContent = editor.getContent();\n                if (_this.props.value !== undefined && _this.props.value !== newContent) {\n                    // start a timer and revert to the value if not applied in time\n                    if (!_this.rollbackTimer) {\n                        _this.rollbackTimer = window.setTimeout(_this.rollbackChange, 200);\n                    }\n                }\n                if (newContent !== _this.currentContent) {\n                    _this.currentContent = newContent;\n                    if ((0,_Utils__WEBPACK_IMPORTED_MODULE_3__.isFunction)(_this.props.onEditorChange)) {\n                        var format = _this.props.outputFormat;\n                        var out = format === 'html' ? newContent : editor.getContent({ format: format });\n                        _this.props.onEditorChange(out, editor);\n                    }\n                }\n            }\n        };\n        _this.handleEditorChangeSpecial = function (evt) {\n            if (evt.key === 'Backspace' || evt.key === 'Delete') {\n                _this.handleEditorChange(evt);\n            }\n        };\n        _this.initialise = function () {\n            var target = _this.elementRef.current;\n            if (!target) {\n                return; // Editor has been unmounted\n            }\n            var tinymce = (0,_TinyMCE__WEBPACK_IMPORTED_MODULE_2__.getTinymce)();\n            if (!tinymce) {\n                throw new Error('tinymce should have been loaded into global scope');\n            }\n            var finalInit = __assign(__assign({}, _this.props.init), { selector: undefined, target: target, readonly: _this.props.disabled, inline: _this.inline, plugins: (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.mergePlugins)(_this.props.init && _this.props.init.plugins, _this.props.plugins), toolbar: _this.props.toolbar || (_this.props.init && _this.props.init.toolbar), setup: function (editor) {\n                    _this.editor = editor;\n                    _this.bindHandlers({});\n                    // When running in inline mode the editor gets the initial value\n                    // from the innerHTML of the element it is initialized on.\n                    // However we don't want to take on the responsibility of sanitizing\n                    // to remove XSS in the react integration so we have a chicken and egg\n                    // problem... We avoid it by sneaking in a set content before the first\n                    // \"official\" setContent and using TinyMCE to do the sanitization.\n                    if (_this.inline && !(0,_Utils__WEBPACK_IMPORTED_MODULE_3__.isTextareaOrInput)(target)) {\n                        editor.once('PostRender', function (_evt) {\n                            editor.setContent(_this.getInitialValue(), { no_events: true });\n                        });\n                    }\n                    if (_this.props.init && (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.isFunction)(_this.props.init.setup)) {\n                        _this.props.init.setup(editor);\n                    }\n                }, init_instance_callback: function (editor) {\n                    var _a, _b;\n                    // check for changes that happened since tinymce.init() was called\n                    var initialValue = _this.getInitialValue();\n                    _this.currentContent = (_a = _this.currentContent) !== null && _a !== void 0 ? _a : editor.getContent();\n                    if (_this.currentContent !== initialValue) {\n                        _this.currentContent = initialValue;\n                        // same as resetContent in TinyMCE 5\n                        editor.setContent(initialValue);\n                        editor.undoManager.clear();\n                        editor.undoManager.add();\n                        editor.setDirty(false);\n                    }\n                    var disabled = (_b = _this.props.disabled) !== null && _b !== void 0 ? _b : false;\n                    editor.setMode(disabled ? 'readonly' : 'design');\n                    // ensure existing init_instance_callback is called\n                    if (_this.props.init && (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.isFunction)(_this.props.init.init_instance_callback)) {\n                        _this.props.init.init_instance_callback(editor);\n                    }\n                } });\n            if (!_this.inline) {\n                target.style.visibility = '';\n            }\n            if ((0,_Utils__WEBPACK_IMPORTED_MODULE_3__.isTextareaOrInput)(target)) {\n                target.value = _this.getInitialValue();\n            }\n            tinymce.init(finalInit);\n        };\n        _this.id = _this.props.id || (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.uuid)('tiny-react');\n        _this.elementRef = react__WEBPACK_IMPORTED_MODULE_0__.createRef();\n        _this.inline = (_c = (_a = _this.props.inline) !== null && _a !== void 0 ? _a : (_b = _this.props.init) === null || _b === void 0 ? void 0 : _b.inline) !== null && _c !== void 0 ? _c : false;\n        _this.boundHandlers = {};\n        return _this;\n    }\n    Editor.prototype.componentDidUpdate = function (prevProps) {\n        var _this = this;\n        var _a, _b;\n        if (this.rollbackTimer) {\n            clearTimeout(this.rollbackTimer);\n            this.rollbackTimer = undefined;\n        }\n        if (this.editor) {\n            this.bindHandlers(prevProps);\n            if (this.editor.initialized) {\n                this.currentContent = (_a = this.currentContent) !== null && _a !== void 0 ? _a : this.editor.getContent();\n                if (typeof this.props.initialValue === 'string' && this.props.initialValue !== prevProps.initialValue) {\n                    // same as resetContent in TinyMCE 5\n                    this.editor.setContent(this.props.initialValue);\n                    this.editor.undoManager.clear();\n                    this.editor.undoManager.add();\n                    this.editor.setDirty(false);\n                }\n                else if (typeof this.props.value === 'string' && this.props.value !== this.currentContent) {\n                    var localEditor_1 = this.editor;\n                    localEditor_1.undoManager.transact(function () {\n                        // inline editors grab focus when restoring selection\n                        // so we don't try to keep their selection unless they are currently focused\n                        var cursor;\n                        if (!_this.inline || localEditor_1.hasFocus()) {\n                            try {\n                                // getBookmark throws exceptions when the editor has not been focused\n                                // possibly only in inline mode but I'm not taking chances\n                                cursor = localEditor_1.selection.getBookmark(3);\n                            }\n                            catch (e) { /* ignore */ }\n                        }\n                        var valueCursor = _this.valueCursor;\n                        localEditor_1.setContent(_this.props.value);\n                        if (!_this.inline || localEditor_1.hasFocus()) {\n                            for (var _i = 0, _a = [cursor, valueCursor]; _i < _a.length; _i++) {\n                                var bookmark = _a[_i];\n                                if (bookmark) {\n                                    try {\n                                        localEditor_1.selection.moveToBookmark(bookmark);\n                                        _this.valueCursor = bookmark;\n                                        break;\n                                    }\n                                    catch (e) { /* ignore */ }\n                                }\n                            }\n                        }\n                    });\n                }\n                if (this.props.disabled !== prevProps.disabled) {\n                    var disabled = (_b = this.props.disabled) !== null && _b !== void 0 ? _b : false;\n                    this.editor.setMode(disabled ? 'readonly' : 'design');\n                }\n            }\n        }\n    };\n    Editor.prototype.componentDidMount = function () {\n        var _a, _b, _c, _d, _e, _f;\n        if ((0,_TinyMCE__WEBPACK_IMPORTED_MODULE_2__.getTinymce)() !== null) {\n            this.initialise();\n        }\n        else if (this.elementRef.current && this.elementRef.current.ownerDocument) {\n            _ScriptLoader__WEBPACK_IMPORTED_MODULE_1__.ScriptLoader.load(this.elementRef.current.ownerDocument, this.getScriptSrc(), (_b = (_a = this.props.scriptLoading) === null || _a === void 0 ? void 0 : _a.async) !== null && _b !== void 0 ? _b : false, (_d = (_c = this.props.scriptLoading) === null || _c === void 0 ? void 0 : _c.defer) !== null && _d !== void 0 ? _d : false, (_f = (_e = this.props.scriptLoading) === null || _e === void 0 ? void 0 : _e.delay) !== null && _f !== void 0 ? _f : 0, this.initialise);\n        }\n    };\n    Editor.prototype.componentWillUnmount = function () {\n        var _this = this;\n        var editor = this.editor;\n        if (editor) {\n            editor.off(changeEvents(), this.handleEditorChange);\n            editor.off(beforeInputEvent(), this.handleBeforeInput);\n            editor.off('keypress', this.handleEditorChangeSpecial);\n            editor.off('keydown', this.handleBeforeInputSpecial);\n            editor.off('NewBlock', this.handleEditorChange);\n            Object.keys(this.boundHandlers).forEach(function (eventName) {\n                editor.off(eventName, _this.boundHandlers[eventName]);\n            });\n            this.boundHandlers = {};\n            editor.remove();\n            this.editor = undefined;\n        }\n    };\n    Editor.prototype.render = function () {\n        return this.inline ? this.renderInline() : this.renderIframe();\n    };\n    Editor.prototype.renderInline = function () {\n        var _a = this.props.tagName, tagName = _a === void 0 ? 'div' : _a;\n        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(tagName, {\n            ref: this.elementRef,\n            id: this.id\n        });\n    };\n    Editor.prototype.renderIframe = function () {\n        return react__WEBPACK_IMPORTED_MODULE_0__.createElement('textarea', {\n            ref: this.elementRef,\n            style: { visibility: 'hidden' },\n            name: this.props.textareaName,\n            id: this.id\n        });\n    };\n    Editor.prototype.getScriptSrc = function () {\n        if (typeof this.props.tinymceScriptSrc === 'string') {\n            return this.props.tinymceScriptSrc;\n        }\n        else {\n            var channel = this.props.cloudChannel;\n            var apiKey = this.props.apiKey ? this.props.apiKey : 'no-api-key';\n            return \"https://cdn.tiny.cloud/1/\" + apiKey + \"/tinymce/\" + channel + \"/tinymce.min.js\";\n        }\n    };\n    Editor.prototype.getInitialValue = function () {\n        if (typeof this.props.initialValue === 'string') {\n            return this.props.initialValue;\n        }\n        else if (typeof this.props.value === 'string') {\n            return this.props.value;\n        }\n        else {\n            return '';\n        }\n    };\n    Editor.prototype.bindHandlers = function (prevProps) {\n        var _this = this;\n        if (this.editor !== undefined) {\n            // typescript chokes trying to understand the type of the lookup function\n            (0,_Utils__WEBPACK_IMPORTED_MODULE_3__.configHandlers)(this.editor, prevProps, this.props, this.boundHandlers, function (key) { return _this.props[key]; });\n            // check if we should monitor editor changes\n            var isValueControlled = function (p) { return p.onEditorChange !== undefined || p.value !== undefined; };\n            var wasControlled = isValueControlled(prevProps);\n            var nowControlled = isValueControlled(this.props);\n            if (!wasControlled && nowControlled) {\n                this.editor.on(changeEvents(), this.handleEditorChange);\n                this.editor.on(beforeInputEvent(), this.handleBeforeInput);\n                this.editor.on('keydown', this.handleBeforeInputSpecial);\n                this.editor.on('keyup', this.handleEditorChangeSpecial);\n                this.editor.on('NewBlock', this.handleEditorChange);\n            }\n            else if (wasControlled && !nowControlled) {\n                this.editor.off(changeEvents(), this.handleEditorChange);\n                this.editor.off(beforeInputEvent(), this.handleBeforeInput);\n                this.editor.off('keydown', this.handleBeforeInputSpecial);\n                this.editor.off('keyup', this.handleEditorChangeSpecial);\n                this.editor.off('NewBlock', this.handleEditorChange);\n            }\n        }\n    };\n    Editor.propTypes = _EditorPropTypes__WEBPACK_IMPORTED_MODULE_4__.EditorPropTypes;\n    Editor.defaultProps = {\n        cloudChannel: '5'\n    };\n    return Editor;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component));\n\n\n\n//# sourceURL=webpack://Note-riety/./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/Editor.js?");

/***/ }),

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/EditorPropTypes.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/EditorPropTypes.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"eventPropTypes\": () => (/* binding */ eventPropTypes),\n/* harmony export */   \"EditorPropTypes\": () => (/* binding */ EditorPropTypes)\n/* harmony export */ });\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Copyright (c) 2017-present, Ephox, Inc.\n *\n * This source code is licensed under the Apache 2 license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\nvar eventPropTypes = {\n    onActivate: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onAddUndo: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onBeforeAddUndo: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onBeforeExecCommand: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onBeforeGetContent: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onBeforeRenderUI: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onBeforeSetContent: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onBeforePaste: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onBlur: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onChange: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onClearUndos: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onClick: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onContextMenu: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onCopy: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onCut: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onDblclick: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onDeactivate: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onDirty: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onDrag: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onDragDrop: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onDragEnd: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onDragGesture: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onDragOver: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onDrop: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onExecCommand: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onFocus: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onFocusIn: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onFocusOut: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onGetContent: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onHide: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onInit: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onKeyPress: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onKeyUp: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onLoadContent: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onMouseLeave: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onMouseMove: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onMouseOut: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onMouseOver: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onMouseUp: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onNodeChange: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onObjectResizeStart: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onObjectResized: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onObjectSelected: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onPaste: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onPostProcess: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onPostRender: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onPreProcess: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onProgressState: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onRedo: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onRemove: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onReset: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onSaveContent: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onSelectionChange: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onSetAttrib: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onSetContent: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onShow: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onUndo: prop_types__WEBPACK_IMPORTED_MODULE_0__.func,\n    onVisualAid: prop_types__WEBPACK_IMPORTED_MODULE_0__.func\n};\nvar EditorPropTypes = __assign({ apiKey: prop_types__WEBPACK_IMPORTED_MODULE_0__.string, id: prop_types__WEBPACK_IMPORTED_MODULE_0__.string, inline: prop_types__WEBPACK_IMPORTED_MODULE_0__.bool, init: prop_types__WEBPACK_IMPORTED_MODULE_0__.object, initialValue: prop_types__WEBPACK_IMPORTED_MODULE_0__.string, onEditorChange: prop_types__WEBPACK_IMPORTED_MODULE_0__.func, outputFormat: prop_types__WEBPACK_IMPORTED_MODULE_0__.oneOf(['html', 'text']), value: prop_types__WEBPACK_IMPORTED_MODULE_0__.string, tagName: prop_types__WEBPACK_IMPORTED_MODULE_0__.string, cloudChannel: prop_types__WEBPACK_IMPORTED_MODULE_0__.string, plugins: prop_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0__.string, prop_types__WEBPACK_IMPORTED_MODULE_0__.array]), toolbar: prop_types__WEBPACK_IMPORTED_MODULE_0__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0__.string, prop_types__WEBPACK_IMPORTED_MODULE_0__.array]), disabled: prop_types__WEBPACK_IMPORTED_MODULE_0__.bool, textareaName: prop_types__WEBPACK_IMPORTED_MODULE_0__.string, tinymceScriptSrc: prop_types__WEBPACK_IMPORTED_MODULE_0__.string, scriptLoading: prop_types__WEBPACK_IMPORTED_MODULE_0__.shape({\n        async: prop_types__WEBPACK_IMPORTED_MODULE_0__.bool,\n        defer: prop_types__WEBPACK_IMPORTED_MODULE_0__.bool,\n        delay: prop_types__WEBPACK_IMPORTED_MODULE_0__.number\n    }) }, eventPropTypes);\n\n\n//# sourceURL=webpack://Note-riety/./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/EditorPropTypes.js?");

/***/ }),

/***/ "./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Editor\": () => (/* reexport safe */ _components_Editor__WEBPACK_IMPORTED_MODULE_0__.Editor)\n/* harmony export */ });\n/* harmony import */ var _components_Editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Editor */ \"./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/components/Editor.js\");\n/**\n * Copyright (c) 2017-present, Ephox, Inc.\n *\n * This source code is licensed under the Apache 2 license found in the\n * LICENSE file in the root directory of this source tree.\n *\n */\n\n\n\n\n//# sourceURL=webpack://Note-riety/./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js?");

/***/ }),

/***/ "./client/app/maker.js":
/*!*****************************!*\
  !*** ./client/app/maker.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var _templateObject, _templateObject2, _templateObject3, _templateObject4;\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nvar _require = __webpack_require__(/*! @tinymce/tinymce-react */ \"./node_modules/@tinymce/tinymce-react/lib/es2015/main/ts/index.js\"),\n    Editor = _require.Editor;\n\nvar helper = __webpack_require__(/*! ./../helper/helper.js */ \"./client/helper/helper.js\");\n\nvar showingCreateForm = false;\nvar cacheAccount = {};\n\nvar handleNote = function handleNote(e) {\n  e.preventDefault();\n\n  if ($('#noteTitle').val() == '' || $('textarea').val() == '') {\n    helper.handleError('All fields are required');\n    return false;\n  }\n\n  helper.sendAjax('POST', $('#noteForm').attr('action'), $('#noteForm').serialize(), function () {\n    loadNotesFromServer();\n    $('#noteForm').hide();\n  });\n  return false;\n};\n\nvar handleExitNote = function handleExitNote(e) {\n  loadNotesFromServer();\n};\n\nvar NoteExpanded = function NoteExpanded(props) {\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"noteExpanded\"\n  }, /*#__PURE__*/React.createElement(\"h2\", null, props.note.title), /*#__PURE__*/React.createElement(\"img\", {\n    id: \"expandedExitHover\",\n    src: \"./assets/img/cross-hover.svg\",\n    alt: \"exit cross when hovered over\",\n    onClick: handleExitNote\n  }), /*#__PURE__*/React.createElement(\"img\", {\n    id: \"expandedExit\",\n    src: \"./assets/img/cross.svg\",\n    alt: \"exit cross\"\n  }), /*#__PURE__*/React.createElement(\"p\", {\n    className: \"noteContent\",\n    dangerouslySetInnerHTML: {\n      __html: props.note.content\n    }\n  }), /*#__PURE__*/React.createElement(\"span\", null, /*#__PURE__*/React.createElement(\"p\", {\n    className: \"noteAuthor\"\n  }, \"Author: \", props.account.username), /*#__PURE__*/React.createElement(\"p\", {\n    className: \"noteDate\"\n  }, \"Posted on: \", new Date(props.note.createdData).toLocaleDateString(\"en-US\"))));\n}; //\n\n\nvar NoteForm = function NoteForm(props) {\n  return /*#__PURE__*/React.createElement(\"form\", {\n    id: \"noteForm\",\n    onSubmit: handleNote,\n    name: \"noteForm\",\n    action: \"/maker\",\n    method: \"POST\",\n    className: \"mainForm\"\n  }, /*#__PURE__*/React.createElement(\"label\", {\n    htmlFor: \"noteTitle\"\n  }, \"Title: \"), /*#__PURE__*/React.createElement(\"input\", {\n    id: \"noteTitle\",\n    type: \"text\",\n    name: \"title\",\n    placeholder: \"Note Title\"\n  }), /*#__PURE__*/React.createElement(\"label\", {\n    htmlFor: \"content\"\n  }, \"Content: \"), /*#__PURE__*/React.createElement(Editor, {\n    textareaName: \"content\",\n    apiKey: \"fudiy8fe4dx3fx3nl9nzj5rype6w5qxyddbeept35rjkwkx1\",\n    initialValue: \"<p>Initial content</p>\",\n    init: {\n      setup: function setup(e) {\n        e.on('change', function (inst) {\n          inst.getBody().innerHTML = inst.getBody().innerHTML.replace(\"/<\\/?script>/\", \"\");\n          e.save();\n        });\n      },\n      height: 500,\n      width: 900,\n      menubar: false,\n      plugins: ['advlist autolink lists link image', 'charmap print preview anchor help', 'searchreplace visualblocks code', 'insertdatetime media table paste wordcount'],\n      toolbar: 'undo redo | formatselect | bold italic | \\\r\n            alignleft aligncenter alignright | \\\r\n            bullist numlist outdent indent | help'\n    }\n  }), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"hidden\",\n    name: \"_csrf\",\n    value: props.csrf\n  }), /*#__PURE__*/React.createElement(\"input\", {\n    className: \"formSubmit\",\n    type: \"submit\",\n    value: \"Make Note\"\n  }));\n};\n\nvar getAuthor = function getAuthor(id, callback) {\n  helper.sendAjax('GET', '/getUser', {\n    id: encodeURI(id)\n  }, function (res) {\n    callback(res);\n  });\n};\n\nvar DisplayNote = function DisplayNote(note) {\n  if (_typeof(note) === Array) note = note[0];\n  getAuthor(note.owner, function (res) {\n    ReactDOM.render( /*#__PURE__*/React.createElement(NoteExpanded, {\n      note: note,\n      account: res[note.owner]\n    }), document.querySelector('#content'));\n  });\n};\n\nvar NoteList = function NoteList(props) {\n  if (props.notes.length === 0) {\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"noteList\"\n    }, /*#__PURE__*/React.createElement(\"h3\", {\n      className: \"emptyNote\"\n    }, \"No Notes yet\"));\n  }\n\n  var noteNodes = props.notes.map(function (note) {\n    var preview = note.content;\n\n    if (new RegExp('<[^>]*>').test(preview)) {\n      preview = $(preview).text();\n    }\n\n    preview = preview.length > 60 ? preview.slice(0, 61) + '...' : preview;\n    return /*#__PURE__*/React.createElement(\"div\", {\n      key: note._id,\n      className: \"note\",\n      onClick: function onClick(e) {\n        return DisplayNote(note);\n      }\n    }, /*#__PURE__*/React.createElement(\"img\", {\n      src: \"/assets/img/moleskine.svg\",\n      alt: \"notebook\",\n      className: \"notebook\"\n    }), /*#__PURE__*/React.createElement(\"h3\", {\n      className: \"noteTitle\"\n    }, \" Title: \", note.title, \" \"), /*#__PURE__*/React.createElement(\"h3\", {\n      className: \"noteContent\"\n    }, \" Preview: \", preview, \" \"), /*#__PURE__*/React.createElement(\"h3\", {\n      className: \"noteDate\"\n    }, \" Created: \", new Date(note.createdData).toLocaleDateString(\"en-US\")));\n  });\n\n  if (!props.user.account.premium) {\n    if (noteNodes.length < 5) {\n      noteNodes.push( /*#__PURE__*/React.createElement(\"div\", {\n        key: $(_templateObject || (_templateObject = _taggedTemplateLiteral([\"ad{i}\"]))),\n        className: \"ad\"\n      }, /*#__PURE__*/React.createElement(\"h2\", null, \"THIS COULD BE YOUR AD\")));\n    } else {\n      for (var i = 1; i < noteNodes.length; i++) {\n        if (i % 5 === 0) {\n          noteNodes.splice(i, 0, /*#__PURE__*/React.createElement(\"div\", {\n            key: $(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"ad{i}\"]))),\n            className: \"ad\"\n          }, /*#__PURE__*/React.createElement(\"h2\", null, \"THIS COULD BE YOUR AD\")));\n        }\n      }\n    }\n  }\n\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"noteList\"\n  }, noteNodes);\n};\n\nvar PublicNoteList = function PublicNoteList(props) {\n  if (props.notes.length === 0) {\n    return /*#__PURE__*/React.createElement(\"div\", {\n      className: \"noteList\"\n    }, /*#__PURE__*/React.createElement(\"h3\", {\n      className: \"emptyNote\"\n    }, \"No Notes yet\"));\n  }\n\n  var noteNodes = props.notes.map(function (note, i) {\n    var preview = note.content;\n\n    if (new RegExp('<[^>]*>').test(preview)) {\n      preview = $(preview).text();\n    }\n\n    preview = preview.length > 60 ? preview.slice(0, 61) + '...' : preview;\n    var content = /*#__PURE__*/React.createElement(\"div\", {\n      key: note._id,\n      className: \"note\",\n      onClick: function onClick(e) {\n        return DisplayNote(note);\n      }\n    }, /*#__PURE__*/React.createElement(\"img\", {\n      src: \"/assets/img/moleskine.svg\",\n      alt: \"notebook\",\n      className: \"notebook\"\n    }), /*#__PURE__*/React.createElement(\"h3\", {\n      className: \"noteTitle\"\n    }, \" Title: \", note.title, \" \"), /*#__PURE__*/React.createElement(\"h3\", {\n      className: \"noteContent\"\n    }, \" Preview: \", preview, \" \"), /*#__PURE__*/React.createElement(\"h3\", {\n      className: \"author\"\n    }, \" Author: \", props.authors[note.owner].username, \" \"));\n    return content;\n  });\n\n  if (!props.user.account.premium) {\n    if (noteNodes.length < 5) {\n      noteNodes.push( /*#__PURE__*/React.createElement(\"div\", {\n        key: $(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"ad{i}\"]))),\n        className: \"ad\"\n      }, /*#__PURE__*/React.createElement(\"h2\", null, \"THIS COULD BE YOUR AD\")));\n    } else {\n      for (var i = 1; i < noteNodes.length; i++) {\n        if (i % 5 === 0) {\n          noteNodes.splice(i, 0, /*#__PURE__*/React.createElement(\"div\", {\n            key: $(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([\"ad{i}\"]))),\n            className: \"ad\"\n          }, /*#__PURE__*/React.createElement(\"h2\", null, \"THIS COULD BE YOUR AD\")));\n        }\n      }\n    }\n  }\n\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"noteList\"\n  }, noteNodes);\n};\n\nvar loadNotesFromServer = function loadNotesFromServer(callback) {\n  helper.sendAjax('GET', '/getNotes', null, function (data) {\n    console.log(cacheAccount);\n    ReactDOM.render( /*#__PURE__*/React.createElement(NoteList, {\n      notes: data.notes,\n      user: cacheAccount\n    }), document.querySelector('#content'));\n    if (callback) callback(data);\n  });\n};\n\nvar loadNotefromServer = function loadNotefromServer(callback, id) {\n  if (id) {\n    id = {\n      id: encodeURI(id)\n    };\n  }\n\n  helper.sendAjax('GET', '/note', id, function (data) {\n    DisplayNote(data.notes);\n    if (callback) callback(data);\n  });\n};\n\nvar loadNotesFromServerByUser = function loadNotesFromServerByUser(callback, author) {\n  helper.sendAjax('GET', '/user', {\n    author: encodeUIR(author)\n  }, function (data) {\n    ReactDOM.render( /*#__PURE__*/React.createElement(NoteList, {\n      notes: data.notes,\n      user: cacheAccount\n    }), document.querySelector('#content'));\n    if (callback) callback(data);\n  });\n};\n\nvar setup = function setup(csrf) {\n  helper.fetchAccount(function (data) {\n    cacheAccount = data;\n    ReactDOM.render( /*#__PURE__*/React.createElement(\"a\", {\n      href: \"/premium\"\n    }, data.account.premium ? 'Manage Premium' : 'Get Premium'), document.querySelector('#premium'));\n    ReactDOM.render( /*#__PURE__*/React.createElement(NoteList, {\n      notes: [],\n      user: data.account\n    }), document.querySelector('#content'));\n    var params = new URLSearchParams(window.location.search);\n\n    if (params.has('note')) {\n      loadNotefromServer(function () {}, params.get('note'));\n    } else if (params.has('author')) {\n      loadNotesFromServerByUser(function () {}, params.get('author'));\n    } else {\n      loadNotesFromServer(function () {});\n    }\n  });\n  $('#noteExpanded').hide();\n  $('#noteForm').hide();\n  $('#add').on('click', function () {\n    if (showingCreateForm) {\n      loadNotesFromServer(function (_) {\n        $('#privateLink').hide();\n        $('#publicLink').show();\n        showingCreateForm = !showingCreateForm;\n      });\n    } else {\n      ReactDOM.render( /*#__PURE__*/React.createElement(NoteForm, {\n        csrf: csrf\n      }), document.querySelector('#content'));\n      $('#privateLink').show();\n      $('#publicLink').show();\n      showingCreateForm = !showingCreateForm;\n    }\n  });\n  $('#publicLink').on('click', function () {\n    showingCreateForm = false;\n    helper.sendAjax('GET', '/getPublicNotes', null, function (data) {\n      getAuthor(_toConsumableArray(new Set(data.notes.map(function (e) {\n        return e.owner;\n      }))).concat().join(','), function (authors) {\n        ReactDOM.render( /*#__PURE__*/React.createElement(PublicNoteList, {\n          notes: data.notes,\n          user: cacheAccount,\n          authors: authors\n        }), document.querySelector('#content'));\n      });\n      $('#privateLink').show();\n      $('#publicLink').hide();\n    });\n  });\n  $('#privateLink').on('click', function () {\n    showingCreateForm = false;\n    loadNotesFromServer(function (_) {\n      $('#privateLink').hide();\n      $('#publicLink').show();\n    });\n  });\n  $('#privateLink').hide();\n};\n\nvar getToken = function getToken() {\n  helper.sendAjax('GET', '/getToken', null, function (result) {\n    setup(result.csrfToken);\n  });\n};\n\n$(function () {\n  getToken();\n});\n\n//# sourceURL=webpack://Note-riety/./client/app/maker.js?");

/***/ }),

/***/ "./client/helper/helper.js":
/*!*********************************!*\
  !*** ./client/helper/helper.js ***!
  \*********************************/
/***/ ((module) => {

eval("var cachedAccount;\n\nvar handleError = function handleError(message) {\n  $('#errorMessage').text(message);\n  $('#noteMessage').show();\n};\n\nvar redirect = function redirect(response) {\n  $('#noteMessage').hide();\n  window.location = response.redirect;\n};\n\nvar sendAjax = function sendAjax(type, action, data, success) {\n  $.ajax({\n    cache: false,\n    type: type,\n    url: action,\n    data: data,\n    dataType: 'json',\n    success: success,\n    error: function error(xhr, status, _error) {\n      var messageObj = JSON.parse(xhr.responseText);\n      handleError(messageObj.error);\n    }\n  });\n};\n\nvar sessionAccount = function sessionAccount(callback) {\n  sendAjax('GET', '/me', null, function (acc) {\n    cachedAccount = acc;\n    callback(acc);\n  });\n};\n\nmodule.exports.handleError = handleError;\nmodule.exports.sendAjax = sendAjax;\nmodule.exports.redirect = redirect;\nmodule.exports.fetchAccount = sessionAccount;\nmodule.exports.cachedAccount = cachedAccount;\n\n//# sourceURL=webpack://Note-riety/./client/helper/helper.js?");

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/\n\n\n/* eslint-disable no-unused-vars */\nvar getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nfunction toObject(val) {\n\tif (val === null || val === undefined) {\n\t\tthrow new TypeError('Object.assign cannot be called with null or undefined');\n\t}\n\n\treturn Object(val);\n}\n\nfunction shouldUseNative() {\n\ttry {\n\t\tif (!Object.assign) {\n\t\t\treturn false;\n\t\t}\n\n\t\t// Detect buggy property enumeration order in older V8 versions.\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=4118\n\t\tvar test1 = new String('abc');  // eslint-disable-line no-new-wrappers\n\t\ttest1[5] = 'de';\n\t\tif (Object.getOwnPropertyNames(test1)[0] === '5') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test2 = {};\n\t\tfor (var i = 0; i < 10; i++) {\n\t\t\ttest2['_' + String.fromCharCode(i)] = i;\n\t\t}\n\t\tvar order2 = Object.getOwnPropertyNames(test2).map(function (n) {\n\t\t\treturn test2[n];\n\t\t});\n\t\tif (order2.join('') !== '0123456789') {\n\t\t\treturn false;\n\t\t}\n\n\t\t// https://bugs.chromium.org/p/v8/issues/detail?id=3056\n\t\tvar test3 = {};\n\t\t'abcdefghijklmnopqrst'.split('').forEach(function (letter) {\n\t\t\ttest3[letter] = letter;\n\t\t});\n\t\tif (Object.keys(Object.assign({}, test3)).join('') !==\n\t\t\t\t'abcdefghijklmnopqrst') {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn true;\n\t} catch (err) {\n\t\t// We don't expect any of the above to throw, but better to be safe.\n\t\treturn false;\n\t}\n}\n\nmodule.exports = shouldUseNative() ? Object.assign : function (target, source) {\n\tvar from;\n\tvar to = toObject(target);\n\tvar symbols;\n\n\tfor (var s = 1; s < arguments.length; s++) {\n\t\tfrom = Object(arguments[s]);\n\n\t\tfor (var key in from) {\n\t\t\tif (hasOwnProperty.call(from, key)) {\n\t\t\t\tto[key] = from[key];\n\t\t\t}\n\t\t}\n\n\t\tif (getOwnPropertySymbols) {\n\t\t\tsymbols = getOwnPropertySymbols(from);\n\t\t\tfor (var i = 0; i < symbols.length; i++) {\n\t\t\t\tif (propIsEnumerable.call(from, symbols[i])) {\n\t\t\t\t\tto[symbols[i]] = from[symbols[i]];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\treturn to;\n};\n\n\n//# sourceURL=webpack://Note-riety/./node_modules/object-assign/index.js?");

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar printWarning = function() {};\n\nif (true) {\n  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ \"./node_modules/prop-types/lib/ReactPropTypesSecret.js\");\n  var loggedTypeFailures = {};\n  var has = Function.call.bind(Object.prototype.hasOwnProperty);\n\n  printWarning = function(text) {\n    var message = 'Warning: ' + text;\n    if (typeof console !== 'undefined') {\n      console.error(message);\n    }\n    try {\n      // --- Welcome to debugging React ---\n      // This error was thrown as a convenience so that you can use this stack\n      // to find the callsite that caused this warning to fire.\n      throw new Error(message);\n    } catch (x) {}\n  };\n}\n\n/**\n * Assert that the values match with the type specs.\n * Error messages are memorized and will only be shown once.\n *\n * @param {object} typeSpecs Map of name to a ReactPropType\n * @param {object} values Runtime values that need to be type-checked\n * @param {string} location e.g. \"prop\", \"context\", \"child context\"\n * @param {string} componentName Name of the component for error messages.\n * @param {?Function} getStack Returns the component stack.\n * @private\n */\nfunction checkPropTypes(typeSpecs, values, location, componentName, getStack) {\n  if (true) {\n    for (var typeSpecName in typeSpecs) {\n      if (has(typeSpecs, typeSpecName)) {\n        var error;\n        // Prop type validation may throw. In case they do, we don't want to\n        // fail the render phase where it didn't fail before. So we log it.\n        // After these have been cleaned up, we'll let them throw.\n        try {\n          // This is intentionally an invariant that gets caught. It's the same\n          // behavior as without this statement except with a better message.\n          if (typeof typeSpecs[typeSpecName] !== 'function') {\n            var err = Error(\n              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +\n              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'\n            );\n            err.name = 'Invariant Violation';\n            throw err;\n          }\n          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);\n        } catch (ex) {\n          error = ex;\n        }\n        if (error && !(error instanceof Error)) {\n          printWarning(\n            (componentName || 'React class') + ': type specification of ' +\n            location + ' `' + typeSpecName + '` is invalid; the type checker ' +\n            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +\n            'You may have forgotten to pass an argument to the type checker ' +\n            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +\n            'shape all require an argument).'\n          );\n        }\n        if (error instanceof Error && !(error.message in loggedTypeFailures)) {\n          // Only monitor this failure once because there tends to be a lot of the\n          // same error.\n          loggedTypeFailures[error.message] = true;\n\n          var stack = getStack ? getStack() : '';\n\n          printWarning(\n            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')\n          );\n        }\n      }\n    }\n  }\n}\n\n/**\n * Resets warning cache when testing.\n *\n * @private\n */\ncheckPropTypes.resetWarningCache = function() {\n  if (true) {\n    loggedTypeFailures = {};\n  }\n}\n\nmodule.exports = checkPropTypes;\n\n\n//# sourceURL=webpack://Note-riety/./node_modules/prop-types/checkPropTypes.js?");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar ReactIs = __webpack_require__(/*! react-is */ \"./node_modules/react-is/index.js\");\nvar assign = __webpack_require__(/*! object-assign */ \"./node_modules/object-assign/index.js\");\n\nvar ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ \"./node_modules/prop-types/lib/ReactPropTypesSecret.js\");\nvar checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ \"./node_modules/prop-types/checkPropTypes.js\");\n\nvar has = Function.call.bind(Object.prototype.hasOwnProperty);\nvar printWarning = function() {};\n\nif (true) {\n  printWarning = function(text) {\n    var message = 'Warning: ' + text;\n    if (typeof console !== 'undefined') {\n      console.error(message);\n    }\n    try {\n      // --- Welcome to debugging React ---\n      // This error was thrown as a convenience so that you can use this stack\n      // to find the callsite that caused this warning to fire.\n      throw new Error(message);\n    } catch (x) {}\n  };\n}\n\nfunction emptyFunctionThatReturnsNull() {\n  return null;\n}\n\nmodule.exports = function(isValidElement, throwOnDirectAccess) {\n  /* global Symbol */\n  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;\n  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.\n\n  /**\n   * Returns the iterator method function contained on the iterable object.\n   *\n   * Be sure to invoke the function with the iterable as context:\n   *\n   *     var iteratorFn = getIteratorFn(myIterable);\n   *     if (iteratorFn) {\n   *       var iterator = iteratorFn.call(myIterable);\n   *       ...\n   *     }\n   *\n   * @param {?object} maybeIterable\n   * @return {?function}\n   */\n  function getIteratorFn(maybeIterable) {\n    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);\n    if (typeof iteratorFn === 'function') {\n      return iteratorFn;\n    }\n  }\n\n  /**\n   * Collection of methods that allow declaration and validation of props that are\n   * supplied to React components. Example usage:\n   *\n   *   var Props = require('ReactPropTypes');\n   *   var MyArticle = React.createClass({\n   *     propTypes: {\n   *       // An optional string prop named \"description\".\n   *       description: Props.string,\n   *\n   *       // A required enum prop named \"category\".\n   *       category: Props.oneOf(['News','Photos']).isRequired,\n   *\n   *       // A prop named \"dialog\" that requires an instance of Dialog.\n   *       dialog: Props.instanceOf(Dialog).isRequired\n   *     },\n   *     render: function() { ... }\n   *   });\n   *\n   * A more formal specification of how these methods are used:\n   *\n   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)\n   *   decl := ReactPropTypes.{type}(.isRequired)?\n   *\n   * Each and every declaration produces a function with the same signature. This\n   * allows the creation of custom validation functions. For example:\n   *\n   *  var MyLink = React.createClass({\n   *    propTypes: {\n   *      // An optional string or URI prop named \"href\".\n   *      href: function(props, propName, componentName) {\n   *        var propValue = props[propName];\n   *        if (propValue != null && typeof propValue !== 'string' &&\n   *            !(propValue instanceof URI)) {\n   *          return new Error(\n   *            'Expected a string or an URI for ' + propName + ' in ' +\n   *            componentName\n   *          );\n   *        }\n   *      }\n   *    },\n   *    render: function() {...}\n   *  });\n   *\n   * @internal\n   */\n\n  var ANONYMOUS = '<<anonymous>>';\n\n  // Important!\n  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.\n  var ReactPropTypes = {\n    array: createPrimitiveTypeChecker('array'),\n    bool: createPrimitiveTypeChecker('boolean'),\n    func: createPrimitiveTypeChecker('function'),\n    number: createPrimitiveTypeChecker('number'),\n    object: createPrimitiveTypeChecker('object'),\n    string: createPrimitiveTypeChecker('string'),\n    symbol: createPrimitiveTypeChecker('symbol'),\n\n    any: createAnyTypeChecker(),\n    arrayOf: createArrayOfTypeChecker,\n    element: createElementTypeChecker(),\n    elementType: createElementTypeTypeChecker(),\n    instanceOf: createInstanceTypeChecker,\n    node: createNodeChecker(),\n    objectOf: createObjectOfTypeChecker,\n    oneOf: createEnumTypeChecker,\n    oneOfType: createUnionTypeChecker,\n    shape: createShapeTypeChecker,\n    exact: createStrictShapeTypeChecker,\n  };\n\n  /**\n   * inlined Object.is polyfill to avoid requiring consumers ship their own\n   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is\n   */\n  /*eslint-disable no-self-compare*/\n  function is(x, y) {\n    // SameValue algorithm\n    if (x === y) {\n      // Steps 1-5, 7-10\n      // Steps 6.b-6.e: +0 != -0\n      return x !== 0 || 1 / x === 1 / y;\n    } else {\n      // Step 6.a: NaN == NaN\n      return x !== x && y !== y;\n    }\n  }\n  /*eslint-enable no-self-compare*/\n\n  /**\n   * We use an Error-like object for backward compatibility as people may call\n   * PropTypes directly and inspect their output. However, we don't use real\n   * Errors anymore. We don't inspect their stack anyway, and creating them\n   * is prohibitively expensive if they are created too often, such as what\n   * happens in oneOfType() for any type before the one that matched.\n   */\n  function PropTypeError(message) {\n    this.message = message;\n    this.stack = '';\n  }\n  // Make `instanceof Error` still work for returned errors.\n  PropTypeError.prototype = Error.prototype;\n\n  function createChainableTypeChecker(validate) {\n    if (true) {\n      var manualPropTypeCallCache = {};\n      var manualPropTypeWarningCount = 0;\n    }\n    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {\n      componentName = componentName || ANONYMOUS;\n      propFullName = propFullName || propName;\n\n      if (secret !== ReactPropTypesSecret) {\n        if (throwOnDirectAccess) {\n          // New behavior only for users of `prop-types` package\n          var err = new Error(\n            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +\n            'Use `PropTypes.checkPropTypes()` to call them. ' +\n            'Read more at http://fb.me/use-check-prop-types'\n          );\n          err.name = 'Invariant Violation';\n          throw err;\n        } else if ( true && typeof console !== 'undefined') {\n          // Old behavior for people using React.PropTypes\n          var cacheKey = componentName + ':' + propName;\n          if (\n            !manualPropTypeCallCache[cacheKey] &&\n            // Avoid spamming the console because they are often not actionable except for lib authors\n            manualPropTypeWarningCount < 3\n          ) {\n            printWarning(\n              'You are manually calling a React.PropTypes validation ' +\n              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +\n              'and will throw in the standalone `prop-types` package. ' +\n              'You may be seeing this warning due to a third-party PropTypes ' +\n              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'\n            );\n            manualPropTypeCallCache[cacheKey] = true;\n            manualPropTypeWarningCount++;\n          }\n        }\n      }\n      if (props[propName] == null) {\n        if (isRequired) {\n          if (props[propName] === null) {\n            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));\n          }\n          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));\n        }\n        return null;\n      } else {\n        return validate(props, propName, componentName, location, propFullName);\n      }\n    }\n\n    var chainedCheckType = checkType.bind(null, false);\n    chainedCheckType.isRequired = checkType.bind(null, true);\n\n    return chainedCheckType;\n  }\n\n  function createPrimitiveTypeChecker(expectedType) {\n    function validate(props, propName, componentName, location, propFullName, secret) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== expectedType) {\n        // `propValue` being instance of, say, date/regexp, pass the 'object'\n        // check, but we can offer a more precise error message here rather than\n        // 'of type `object`'.\n        var preciseType = getPreciseType(propValue);\n\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createAnyTypeChecker() {\n    return createChainableTypeChecker(emptyFunctionThatReturnsNull);\n  }\n\n  function createArrayOfTypeChecker(typeChecker) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (typeof typeChecker !== 'function') {\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');\n      }\n      var propValue = props[propName];\n      if (!Array.isArray(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));\n      }\n      for (var i = 0; i < propValue.length; i++) {\n        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);\n        if (error instanceof Error) {\n          return error;\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createElementTypeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      if (!isValidElement(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createElementTypeTypeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      if (!ReactIs.isValidElementType(propValue)) {\n        var propType = getPropType(propValue);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createInstanceTypeChecker(expectedClass) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (!(props[propName] instanceof expectedClass)) {\n        var expectedClassName = expectedClass.name || ANONYMOUS;\n        var actualClassName = getClassName(props[propName]);\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createEnumTypeChecker(expectedValues) {\n    if (!Array.isArray(expectedValues)) {\n      if (true) {\n        if (arguments.length > 1) {\n          printWarning(\n            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +\n            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'\n          );\n        } else {\n          printWarning('Invalid argument supplied to oneOf, expected an array.');\n        }\n      }\n      return emptyFunctionThatReturnsNull;\n    }\n\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      for (var i = 0; i < expectedValues.length; i++) {\n        if (is(propValue, expectedValues[i])) {\n          return null;\n        }\n      }\n\n      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {\n        var type = getPreciseType(value);\n        if (type === 'symbol') {\n          return String(value);\n        }\n        return value;\n      });\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createObjectOfTypeChecker(typeChecker) {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (typeof typeChecker !== 'function') {\n        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');\n      }\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));\n      }\n      for (var key in propValue) {\n        if (has(propValue, key)) {\n          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n          if (error instanceof Error) {\n            return error;\n          }\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createUnionTypeChecker(arrayOfTypeCheckers) {\n    if (!Array.isArray(arrayOfTypeCheckers)) {\n       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;\n      return emptyFunctionThatReturnsNull;\n    }\n\n    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\n      var checker = arrayOfTypeCheckers[i];\n      if (typeof checker !== 'function') {\n        printWarning(\n          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +\n          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'\n        );\n        return emptyFunctionThatReturnsNull;\n      }\n    }\n\n    function validate(props, propName, componentName, location, propFullName) {\n      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {\n        var checker = arrayOfTypeCheckers[i];\n        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {\n          return null;\n        }\n      }\n\n      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createNodeChecker() {\n    function validate(props, propName, componentName, location, propFullName) {\n      if (!isNode(props[propName])) {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createShapeTypeChecker(shapeTypes) {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\n      }\n      for (var key in shapeTypes) {\n        var checker = shapeTypes[key];\n        if (!checker) {\n          continue;\n        }\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n        if (error) {\n          return error;\n        }\n      }\n      return null;\n    }\n    return createChainableTypeChecker(validate);\n  }\n\n  function createStrictShapeTypeChecker(shapeTypes) {\n    function validate(props, propName, componentName, location, propFullName) {\n      var propValue = props[propName];\n      var propType = getPropType(propValue);\n      if (propType !== 'object') {\n        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));\n      }\n      // We need to check all keys in case some are required but missing from\n      // props.\n      var allKeys = assign({}, props[propName], shapeTypes);\n      for (var key in allKeys) {\n        var checker = shapeTypes[key];\n        if (!checker) {\n          return new PropTypeError(\n            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +\n            '\\nBad object: ' + JSON.stringify(props[propName], null, '  ') +\n            '\\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')\n          );\n        }\n        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);\n        if (error) {\n          return error;\n        }\n      }\n      return null;\n    }\n\n    return createChainableTypeChecker(validate);\n  }\n\n  function isNode(propValue) {\n    switch (typeof propValue) {\n      case 'number':\n      case 'string':\n      case 'undefined':\n        return true;\n      case 'boolean':\n        return !propValue;\n      case 'object':\n        if (Array.isArray(propValue)) {\n          return propValue.every(isNode);\n        }\n        if (propValue === null || isValidElement(propValue)) {\n          return true;\n        }\n\n        var iteratorFn = getIteratorFn(propValue);\n        if (iteratorFn) {\n          var iterator = iteratorFn.call(propValue);\n          var step;\n          if (iteratorFn !== propValue.entries) {\n            while (!(step = iterator.next()).done) {\n              if (!isNode(step.value)) {\n                return false;\n              }\n            }\n          } else {\n            // Iterator will provide entry [k,v] tuples rather than values.\n            while (!(step = iterator.next()).done) {\n              var entry = step.value;\n              if (entry) {\n                if (!isNode(entry[1])) {\n                  return false;\n                }\n              }\n            }\n          }\n        } else {\n          return false;\n        }\n\n        return true;\n      default:\n        return false;\n    }\n  }\n\n  function isSymbol(propType, propValue) {\n    // Native Symbol.\n    if (propType === 'symbol') {\n      return true;\n    }\n\n    // falsy value can't be a Symbol\n    if (!propValue) {\n      return false;\n    }\n\n    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'\n    if (propValue['@@toStringTag'] === 'Symbol') {\n      return true;\n    }\n\n    // Fallback for non-spec compliant Symbols which are polyfilled.\n    if (typeof Symbol === 'function' && propValue instanceof Symbol) {\n      return true;\n    }\n\n    return false;\n  }\n\n  // Equivalent of `typeof` but with special handling for array and regexp.\n  function getPropType(propValue) {\n    var propType = typeof propValue;\n    if (Array.isArray(propValue)) {\n      return 'array';\n    }\n    if (propValue instanceof RegExp) {\n      // Old webkits (at least until Android 4.0) return 'function' rather than\n      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/\n      // passes PropTypes.object.\n      return 'object';\n    }\n    if (isSymbol(propType, propValue)) {\n      return 'symbol';\n    }\n    return propType;\n  }\n\n  // This handles more types than `getPropType`. Only used for error messages.\n  // See `createPrimitiveTypeChecker`.\n  function getPreciseType(propValue) {\n    if (typeof propValue === 'undefined' || propValue === null) {\n      return '' + propValue;\n    }\n    var propType = getPropType(propValue);\n    if (propType === 'object') {\n      if (propValue instanceof Date) {\n        return 'date';\n      } else if (propValue instanceof RegExp) {\n        return 'regexp';\n      }\n    }\n    return propType;\n  }\n\n  // Returns a string that is postfixed to a warning about an invalid type.\n  // For example, \"undefined\" or \"of type array\"\n  function getPostfixForTypeWarning(value) {\n    var type = getPreciseType(value);\n    switch (type) {\n      case 'array':\n      case 'object':\n        return 'an ' + type;\n      case 'boolean':\n      case 'date':\n      case 'regexp':\n        return 'a ' + type;\n      default:\n        return type;\n    }\n  }\n\n  // Returns class name of the object, if any.\n  function getClassName(propValue) {\n    if (!propValue.constructor || !propValue.constructor.name) {\n      return ANONYMOUS;\n    }\n    return propValue.constructor.name;\n  }\n\n  ReactPropTypes.checkPropTypes = checkPropTypes;\n  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;\n  ReactPropTypes.PropTypes = ReactPropTypes;\n\n  return ReactPropTypes;\n};\n\n\n//# sourceURL=webpack://Note-riety/./node_modules/prop-types/factoryWithTypeCheckers.js?");

/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nif (true) {\n  var ReactIs = __webpack_require__(/*! react-is */ \"./node_modules/react-is/index.js\");\n\n  // By explicitly using `prop-types` you are opting into new development behavior.\n  // http://fb.me/prop-types-in-prod\n  var throwOnDirectAccess = true;\n  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ \"./node_modules/prop-types/factoryWithTypeCheckers.js\")(ReactIs.isElement, throwOnDirectAccess);\n} else {}\n\n\n//# sourceURL=webpack://Note-riety/./node_modules/prop-types/index.js?");

/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
eval("/**\n * Copyright (c) 2013-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nvar ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';\n\nmodule.exports = ReactPropTypesSecret;\n\n\n//# sourceURL=webpack://Note-riety/./node_modules/prop-types/lib/ReactPropTypesSecret.js?");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("/** @license React v16.13.1\n * react-is.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\n\n\nif (true) {\n  (function() {\n'use strict';\n\n// The Symbol used to tag the ReactElement-like types. If there is no native Symbol\n// nor polyfill, then a plain number is used for performance.\nvar hasSymbol = typeof Symbol === 'function' && Symbol.for;\nvar REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;\nvar REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;\nvar REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;\nvar REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;\nvar REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;\nvar REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;\nvar REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary\n// (unstable) APIs that have been removed. Can we remove the symbols?\n\nvar REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;\nvar REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;\nvar REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;\nvar REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;\nvar REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;\nvar REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;\nvar REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;\nvar REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;\nvar REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;\nvar REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;\nvar REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;\n\nfunction isValidElementType(type) {\n  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.\n  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);\n}\n\nfunction typeOf(object) {\n  if (typeof object === 'object' && object !== null) {\n    var $$typeof = object.$$typeof;\n\n    switch ($$typeof) {\n      case REACT_ELEMENT_TYPE:\n        var type = object.type;\n\n        switch (type) {\n          case REACT_ASYNC_MODE_TYPE:\n          case REACT_CONCURRENT_MODE_TYPE:\n          case REACT_FRAGMENT_TYPE:\n          case REACT_PROFILER_TYPE:\n          case REACT_STRICT_MODE_TYPE:\n          case REACT_SUSPENSE_TYPE:\n            return type;\n\n          default:\n            var $$typeofType = type && type.$$typeof;\n\n            switch ($$typeofType) {\n              case REACT_CONTEXT_TYPE:\n              case REACT_FORWARD_REF_TYPE:\n              case REACT_LAZY_TYPE:\n              case REACT_MEMO_TYPE:\n              case REACT_PROVIDER_TYPE:\n                return $$typeofType;\n\n              default:\n                return $$typeof;\n            }\n\n        }\n\n      case REACT_PORTAL_TYPE:\n        return $$typeof;\n    }\n  }\n\n  return undefined;\n} // AsyncMode is deprecated along with isAsyncMode\n\nvar AsyncMode = REACT_ASYNC_MODE_TYPE;\nvar ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;\nvar ContextConsumer = REACT_CONTEXT_TYPE;\nvar ContextProvider = REACT_PROVIDER_TYPE;\nvar Element = REACT_ELEMENT_TYPE;\nvar ForwardRef = REACT_FORWARD_REF_TYPE;\nvar Fragment = REACT_FRAGMENT_TYPE;\nvar Lazy = REACT_LAZY_TYPE;\nvar Memo = REACT_MEMO_TYPE;\nvar Portal = REACT_PORTAL_TYPE;\nvar Profiler = REACT_PROFILER_TYPE;\nvar StrictMode = REACT_STRICT_MODE_TYPE;\nvar Suspense = REACT_SUSPENSE_TYPE;\nvar hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated\n\nfunction isAsyncMode(object) {\n  {\n    if (!hasWarnedAboutDeprecatedIsAsyncMode) {\n      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint\n\n      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');\n    }\n  }\n\n  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;\n}\nfunction isConcurrentMode(object) {\n  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;\n}\nfunction isContextConsumer(object) {\n  return typeOf(object) === REACT_CONTEXT_TYPE;\n}\nfunction isContextProvider(object) {\n  return typeOf(object) === REACT_PROVIDER_TYPE;\n}\nfunction isElement(object) {\n  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;\n}\nfunction isForwardRef(object) {\n  return typeOf(object) === REACT_FORWARD_REF_TYPE;\n}\nfunction isFragment(object) {\n  return typeOf(object) === REACT_FRAGMENT_TYPE;\n}\nfunction isLazy(object) {\n  return typeOf(object) === REACT_LAZY_TYPE;\n}\nfunction isMemo(object) {\n  return typeOf(object) === REACT_MEMO_TYPE;\n}\nfunction isPortal(object) {\n  return typeOf(object) === REACT_PORTAL_TYPE;\n}\nfunction isProfiler(object) {\n  return typeOf(object) === REACT_PROFILER_TYPE;\n}\nfunction isStrictMode(object) {\n  return typeOf(object) === REACT_STRICT_MODE_TYPE;\n}\nfunction isSuspense(object) {\n  return typeOf(object) === REACT_SUSPENSE_TYPE;\n}\n\nexports.AsyncMode = AsyncMode;\nexports.ConcurrentMode = ConcurrentMode;\nexports.ContextConsumer = ContextConsumer;\nexports.ContextProvider = ContextProvider;\nexports.Element = Element;\nexports.ForwardRef = ForwardRef;\nexports.Fragment = Fragment;\nexports.Lazy = Lazy;\nexports.Memo = Memo;\nexports.Portal = Portal;\nexports.Profiler = Profiler;\nexports.StrictMode = StrictMode;\nexports.Suspense = Suspense;\nexports.isAsyncMode = isAsyncMode;\nexports.isConcurrentMode = isConcurrentMode;\nexports.isContextConsumer = isContextConsumer;\nexports.isContextProvider = isContextProvider;\nexports.isElement = isElement;\nexports.isForwardRef = isForwardRef;\nexports.isFragment = isFragment;\nexports.isLazy = isLazy;\nexports.isMemo = isMemo;\nexports.isPortal = isPortal;\nexports.isProfiler = isProfiler;\nexports.isStrictMode = isStrictMode;\nexports.isSuspense = isSuspense;\nexports.isValidElementType = isValidElementType;\nexports.typeOf = typeOf;\n  })();\n}\n\n\n//# sourceURL=webpack://Note-riety/./node_modules/react-is/cjs/react-is.development.js?");

/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ \"./node_modules/react-is/cjs/react-is.development.js\");\n}\n\n\n//# sourceURL=webpack://Note-riety/./node_modules/react-is/index.js?");

/***/ }),

/***/ "./node_modules/react/cjs/react.development.js":
/*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("/** @license React v17.0.2\n * react.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n\n\nif (true) {\n  (function() {\n'use strict';\n\nvar _assign = __webpack_require__(/*! object-assign */ \"./node_modules/object-assign/index.js\");\n\n// TODO: this is special because it gets imported during build.\nvar ReactVersion = '17.0.2';\n\n// ATTENTION\n// When adding new symbols to this file,\n// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'\n// The Symbol used to tag the ReactElement-like types. If there is no native Symbol\n// nor polyfill, then a plain number is used for performance.\nvar REACT_ELEMENT_TYPE = 0xeac7;\nvar REACT_PORTAL_TYPE = 0xeaca;\nexports.Fragment = 0xeacb;\nexports.StrictMode = 0xeacc;\nexports.Profiler = 0xead2;\nvar REACT_PROVIDER_TYPE = 0xeacd;\nvar REACT_CONTEXT_TYPE = 0xeace;\nvar REACT_FORWARD_REF_TYPE = 0xead0;\nexports.Suspense = 0xead1;\nvar REACT_SUSPENSE_LIST_TYPE = 0xead8;\nvar REACT_MEMO_TYPE = 0xead3;\nvar REACT_LAZY_TYPE = 0xead4;\nvar REACT_BLOCK_TYPE = 0xead9;\nvar REACT_SERVER_BLOCK_TYPE = 0xeada;\nvar REACT_FUNDAMENTAL_TYPE = 0xead5;\nvar REACT_SCOPE_TYPE = 0xead7;\nvar REACT_OPAQUE_ID_TYPE = 0xeae0;\nvar REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;\nvar REACT_OFFSCREEN_TYPE = 0xeae2;\nvar REACT_LEGACY_HIDDEN_TYPE = 0xeae3;\n\nif (typeof Symbol === 'function' && Symbol.for) {\n  var symbolFor = Symbol.for;\n  REACT_ELEMENT_TYPE = symbolFor('react.element');\n  REACT_PORTAL_TYPE = symbolFor('react.portal');\n  exports.Fragment = symbolFor('react.fragment');\n  exports.StrictMode = symbolFor('react.strict_mode');\n  exports.Profiler = symbolFor('react.profiler');\n  REACT_PROVIDER_TYPE = symbolFor('react.provider');\n  REACT_CONTEXT_TYPE = symbolFor('react.context');\n  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');\n  exports.Suspense = symbolFor('react.suspense');\n  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');\n  REACT_MEMO_TYPE = symbolFor('react.memo');\n  REACT_LAZY_TYPE = symbolFor('react.lazy');\n  REACT_BLOCK_TYPE = symbolFor('react.block');\n  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');\n  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');\n  REACT_SCOPE_TYPE = symbolFor('react.scope');\n  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');\n  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');\n  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');\n  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');\n}\n\nvar MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;\nvar FAUX_ITERATOR_SYMBOL = '@@iterator';\nfunction getIteratorFn(maybeIterable) {\n  if (maybeIterable === null || typeof maybeIterable !== 'object') {\n    return null;\n  }\n\n  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];\n\n  if (typeof maybeIterator === 'function') {\n    return maybeIterator;\n  }\n\n  return null;\n}\n\n/**\n * Keeps track of the current dispatcher.\n */\nvar ReactCurrentDispatcher = {\n  /**\n   * @internal\n   * @type {ReactComponent}\n   */\n  current: null\n};\n\n/**\n * Keeps track of the current batch's configuration such as how long an update\n * should suspend for if it needs to.\n */\nvar ReactCurrentBatchConfig = {\n  transition: 0\n};\n\n/**\n * Keeps track of the current owner.\n *\n * The current owner is the component who should own any components that are\n * currently being constructed.\n */\nvar ReactCurrentOwner = {\n  /**\n   * @internal\n   * @type {ReactComponent}\n   */\n  current: null\n};\n\nvar ReactDebugCurrentFrame = {};\nvar currentExtraStackFrame = null;\nfunction setExtraStackFrame(stack) {\n  {\n    currentExtraStackFrame = stack;\n  }\n}\n\n{\n  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {\n    {\n      currentExtraStackFrame = stack;\n    }\n  }; // Stack implementation injected by the current renderer.\n\n\n  ReactDebugCurrentFrame.getCurrentStack = null;\n\n  ReactDebugCurrentFrame.getStackAddendum = function () {\n    var stack = ''; // Add an extra top frame while an element is being validated\n\n    if (currentExtraStackFrame) {\n      stack += currentExtraStackFrame;\n    } // Delegate to the injected renderer-specific implementation\n\n\n    var impl = ReactDebugCurrentFrame.getCurrentStack;\n\n    if (impl) {\n      stack += impl() || '';\n    }\n\n    return stack;\n  };\n}\n\n/**\n * Used by act() to track whether you're inside an act() scope.\n */\nvar IsSomeRendererActing = {\n  current: false\n};\n\nvar ReactSharedInternals = {\n  ReactCurrentDispatcher: ReactCurrentDispatcher,\n  ReactCurrentBatchConfig: ReactCurrentBatchConfig,\n  ReactCurrentOwner: ReactCurrentOwner,\n  IsSomeRendererActing: IsSomeRendererActing,\n  // Used by renderers to avoid bundling object-assign twice in UMD bundles:\n  assign: _assign\n};\n\n{\n  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;\n}\n\n// by calls to these methods by a Babel plugin.\n//\n// In PROD (or in packages without access to React internals),\n// they are left as they are instead.\n\nfunction warn(format) {\n  {\n    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      args[_key - 1] = arguments[_key];\n    }\n\n    printWarning('warn', format, args);\n  }\n}\nfunction error(format) {\n  {\n    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {\n      args[_key2 - 1] = arguments[_key2];\n    }\n\n    printWarning('error', format, args);\n  }\n}\n\nfunction printWarning(level, format, args) {\n  // When changing this logic, you might want to also\n  // update consoleWithStackDev.www.js as well.\n  {\n    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;\n    var stack = ReactDebugCurrentFrame.getStackAddendum();\n\n    if (stack !== '') {\n      format += '%s';\n      args = args.concat([stack]);\n    }\n\n    var argsWithFormat = args.map(function (item) {\n      return '' + item;\n    }); // Careful: RN currently depends on this prefix\n\n    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it\n    // breaks IE9: https://github.com/facebook/react/issues/13610\n    // eslint-disable-next-line react-internal/no-production-logging\n\n    Function.prototype.apply.call(console[level], console, argsWithFormat);\n  }\n}\n\nvar didWarnStateUpdateForUnmountedComponent = {};\n\nfunction warnNoop(publicInstance, callerName) {\n  {\n    var _constructor = publicInstance.constructor;\n    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';\n    var warningKey = componentName + \".\" + callerName;\n\n    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {\n      return;\n    }\n\n    error(\"Can't call %s on a component that is not yet mounted. \" + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);\n\n    didWarnStateUpdateForUnmountedComponent[warningKey] = true;\n  }\n}\n/**\n * This is the abstract API for an update queue.\n */\n\n\nvar ReactNoopUpdateQueue = {\n  /**\n   * Checks whether or not this composite component is mounted.\n   * @param {ReactClass} publicInstance The instance we want to test.\n   * @return {boolean} True if mounted, false otherwise.\n   * @protected\n   * @final\n   */\n  isMounted: function (publicInstance) {\n    return false;\n  },\n\n  /**\n   * Forces an update. This should only be invoked when it is known with\n   * certainty that we are **not** in a DOM transaction.\n   *\n   * You may want to call this when you know that some deeper aspect of the\n   * component's state has changed but `setState` was not called.\n   *\n   * This will not invoke `shouldComponentUpdate`, but it will invoke\n   * `componentWillUpdate` and `componentDidUpdate`.\n   *\n   * @param {ReactClass} publicInstance The instance that should rerender.\n   * @param {?function} callback Called after component is updated.\n   * @param {?string} callerName name of the calling function in the public API.\n   * @internal\n   */\n  enqueueForceUpdate: function (publicInstance, callback, callerName) {\n    warnNoop(publicInstance, 'forceUpdate');\n  },\n\n  /**\n   * Replaces all of the state. Always use this or `setState` to mutate state.\n   * You should treat `this.state` as immutable.\n   *\n   * There is no guarantee that `this.state` will be immediately updated, so\n   * accessing `this.state` after calling this method may return the old value.\n   *\n   * @param {ReactClass} publicInstance The instance that should rerender.\n   * @param {object} completeState Next state.\n   * @param {?function} callback Called after component is updated.\n   * @param {?string} callerName name of the calling function in the public API.\n   * @internal\n   */\n  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {\n    warnNoop(publicInstance, 'replaceState');\n  },\n\n  /**\n   * Sets a subset of the state. This only exists because _pendingState is\n   * internal. This provides a merging strategy that is not available to deep\n   * properties which is confusing. TODO: Expose pendingState or don't use it\n   * during the merge.\n   *\n   * @param {ReactClass} publicInstance The instance that should rerender.\n   * @param {object} partialState Next partial state to be merged with state.\n   * @param {?function} callback Called after component is updated.\n   * @param {?string} Name of the calling function in the public API.\n   * @internal\n   */\n  enqueueSetState: function (publicInstance, partialState, callback, callerName) {\n    warnNoop(publicInstance, 'setState');\n  }\n};\n\nvar emptyObject = {};\n\n{\n  Object.freeze(emptyObject);\n}\n/**\n * Base class helpers for the updating state of a component.\n */\n\n\nfunction Component(props, context, updater) {\n  this.props = props;\n  this.context = context; // If a component has string refs, we will assign a different object later.\n\n  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the\n  // renderer.\n\n  this.updater = updater || ReactNoopUpdateQueue;\n}\n\nComponent.prototype.isReactComponent = {};\n/**\n * Sets a subset of the state. Always use this to mutate\n * state. You should treat `this.state` as immutable.\n *\n * There is no guarantee that `this.state` will be immediately updated, so\n * accessing `this.state` after calling this method may return the old value.\n *\n * There is no guarantee that calls to `setState` will run synchronously,\n * as they may eventually be batched together.  You can provide an optional\n * callback that will be executed when the call to setState is actually\n * completed.\n *\n * When a function is provided to setState, it will be called at some point in\n * the future (not synchronously). It will be called with the up to date\n * component arguments (state, props, context). These values can be different\n * from this.* because your function may be called after receiveProps but before\n * shouldComponentUpdate, and this new state, props, and context will not yet be\n * assigned to this.\n *\n * @param {object|function} partialState Next partial state or function to\n *        produce next partial state to be merged with current state.\n * @param {?function} callback Called after state is updated.\n * @final\n * @protected\n */\n\nComponent.prototype.setState = function (partialState, callback) {\n  if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {\n    {\n      throw Error( \"setState(...): takes an object of state variables to update or a function which returns an object of state variables.\" );\n    }\n  }\n\n  this.updater.enqueueSetState(this, partialState, callback, 'setState');\n};\n/**\n * Forces an update. This should only be invoked when it is known with\n * certainty that we are **not** in a DOM transaction.\n *\n * You may want to call this when you know that some deeper aspect of the\n * component's state has changed but `setState` was not called.\n *\n * This will not invoke `shouldComponentUpdate`, but it will invoke\n * `componentWillUpdate` and `componentDidUpdate`.\n *\n * @param {?function} callback Called after update is complete.\n * @final\n * @protected\n */\n\n\nComponent.prototype.forceUpdate = function (callback) {\n  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');\n};\n/**\n * Deprecated APIs. These APIs used to exist on classic React classes but since\n * we would like to deprecate them, we're not going to move them over to this\n * modern base class. Instead, we define a getter that warns if it's accessed.\n */\n\n\n{\n  var deprecatedAPIs = {\n    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],\n    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']\n  };\n\n  var defineDeprecationWarning = function (methodName, info) {\n    Object.defineProperty(Component.prototype, methodName, {\n      get: function () {\n        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);\n\n        return undefined;\n      }\n    });\n  };\n\n  for (var fnName in deprecatedAPIs) {\n    if (deprecatedAPIs.hasOwnProperty(fnName)) {\n      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);\n    }\n  }\n}\n\nfunction ComponentDummy() {}\n\nComponentDummy.prototype = Component.prototype;\n/**\n * Convenience component with default shallow equality check for sCU.\n */\n\nfunction PureComponent(props, context, updater) {\n  this.props = props;\n  this.context = context; // If a component has string refs, we will assign a different object later.\n\n  this.refs = emptyObject;\n  this.updater = updater || ReactNoopUpdateQueue;\n}\n\nvar pureComponentPrototype = PureComponent.prototype = new ComponentDummy();\npureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.\n\n_assign(pureComponentPrototype, Component.prototype);\n\npureComponentPrototype.isPureReactComponent = true;\n\n// an immutable object with a single mutable value\nfunction createRef() {\n  var refObject = {\n    current: null\n  };\n\n  {\n    Object.seal(refObject);\n  }\n\n  return refObject;\n}\n\nfunction getWrappedName(outerType, innerType, wrapperName) {\n  var functionName = innerType.displayName || innerType.name || '';\n  return outerType.displayName || (functionName !== '' ? wrapperName + \"(\" + functionName + \")\" : wrapperName);\n}\n\nfunction getContextName(type) {\n  return type.displayName || 'Context';\n}\n\nfunction getComponentName(type) {\n  if (type == null) {\n    // Host root, text node or just invalid type.\n    return null;\n  }\n\n  {\n    if (typeof type.tag === 'number') {\n      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');\n    }\n  }\n\n  if (typeof type === 'function') {\n    return type.displayName || type.name || null;\n  }\n\n  if (typeof type === 'string') {\n    return type;\n  }\n\n  switch (type) {\n    case exports.Fragment:\n      return 'Fragment';\n\n    case REACT_PORTAL_TYPE:\n      return 'Portal';\n\n    case exports.Profiler:\n      return 'Profiler';\n\n    case exports.StrictMode:\n      return 'StrictMode';\n\n    case exports.Suspense:\n      return 'Suspense';\n\n    case REACT_SUSPENSE_LIST_TYPE:\n      return 'SuspenseList';\n  }\n\n  if (typeof type === 'object') {\n    switch (type.$$typeof) {\n      case REACT_CONTEXT_TYPE:\n        var context = type;\n        return getContextName(context) + '.Consumer';\n\n      case REACT_PROVIDER_TYPE:\n        var provider = type;\n        return getContextName(provider._context) + '.Provider';\n\n      case REACT_FORWARD_REF_TYPE:\n        return getWrappedName(type, type.render, 'ForwardRef');\n\n      case REACT_MEMO_TYPE:\n        return getComponentName(type.type);\n\n      case REACT_BLOCK_TYPE:\n        return getComponentName(type._render);\n\n      case REACT_LAZY_TYPE:\n        {\n          var lazyComponent = type;\n          var payload = lazyComponent._payload;\n          var init = lazyComponent._init;\n\n          try {\n            return getComponentName(init(payload));\n          } catch (x) {\n            return null;\n          }\n        }\n    }\n  }\n\n  return null;\n}\n\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar RESERVED_PROPS = {\n  key: true,\n  ref: true,\n  __self: true,\n  __source: true\n};\nvar specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;\n\n{\n  didWarnAboutStringRefs = {};\n}\n\nfunction hasValidRef(config) {\n  {\n    if (hasOwnProperty.call(config, 'ref')) {\n      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;\n\n      if (getter && getter.isReactWarning) {\n        return false;\n      }\n    }\n  }\n\n  return config.ref !== undefined;\n}\n\nfunction hasValidKey(config) {\n  {\n    if (hasOwnProperty.call(config, 'key')) {\n      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;\n\n      if (getter && getter.isReactWarning) {\n        return false;\n      }\n    }\n  }\n\n  return config.key !== undefined;\n}\n\nfunction defineKeyPropWarningGetter(props, displayName) {\n  var warnAboutAccessingKey = function () {\n    {\n      if (!specialPropKeyWarningShown) {\n        specialPropKeyWarningShown = true;\n\n        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);\n      }\n    }\n  };\n\n  warnAboutAccessingKey.isReactWarning = true;\n  Object.defineProperty(props, 'key', {\n    get: warnAboutAccessingKey,\n    configurable: true\n  });\n}\n\nfunction defineRefPropWarningGetter(props, displayName) {\n  var warnAboutAccessingRef = function () {\n    {\n      if (!specialPropRefWarningShown) {\n        specialPropRefWarningShown = true;\n\n        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);\n      }\n    }\n  };\n\n  warnAboutAccessingRef.isReactWarning = true;\n  Object.defineProperty(props, 'ref', {\n    get: warnAboutAccessingRef,\n    configurable: true\n  });\n}\n\nfunction warnIfStringRefCannotBeAutoConverted(config) {\n  {\n    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {\n      var componentName = getComponentName(ReactCurrentOwner.current.type);\n\n      if (!didWarnAboutStringRefs[componentName]) {\n        error('Component \"%s\" contains the string ref \"%s\". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);\n\n        didWarnAboutStringRefs[componentName] = true;\n      }\n    }\n  }\n}\n/**\n * Factory method to create a new React element. This no longer adheres to\n * the class pattern, so do not use new to call it. Also, instanceof check\n * will not work. Instead test $$typeof field against Symbol.for('react.element') to check\n * if something is a React Element.\n *\n * @param {*} type\n * @param {*} props\n * @param {*} key\n * @param {string|object} ref\n * @param {*} owner\n * @param {*} self A *temporary* helper to detect places where `this` is\n * different from the `owner` when React.createElement is called, so that we\n * can warn. We want to get rid of owner and replace string `ref`s with arrow\n * functions, and as long as `this` and owner are the same, there will be no\n * change in behavior.\n * @param {*} source An annotation object (added by a transpiler or otherwise)\n * indicating filename, line number, and/or other information.\n * @internal\n */\n\n\nvar ReactElement = function (type, key, ref, self, source, owner, props) {\n  var element = {\n    // This tag allows us to uniquely identify this as a React Element\n    $$typeof: REACT_ELEMENT_TYPE,\n    // Built-in properties that belong on the element\n    type: type,\n    key: key,\n    ref: ref,\n    props: props,\n    // Record the component responsible for creating this element.\n    _owner: owner\n  };\n\n  {\n    // The validation flag is currently mutative. We put it on\n    // an external backing store so that we can freeze the whole object.\n    // This can be replaced with a WeakMap once they are implemented in\n    // commonly used development environments.\n    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make\n    // the validation flag non-enumerable (where possible, which should\n    // include every environment we run tests in), so the test framework\n    // ignores it.\n\n    Object.defineProperty(element._store, 'validated', {\n      configurable: false,\n      enumerable: false,\n      writable: true,\n      value: false\n    }); // self and source are DEV only properties.\n\n    Object.defineProperty(element, '_self', {\n      configurable: false,\n      enumerable: false,\n      writable: false,\n      value: self\n    }); // Two elements created in two different places should be considered\n    // equal for testing purposes and therefore we hide it from enumeration.\n\n    Object.defineProperty(element, '_source', {\n      configurable: false,\n      enumerable: false,\n      writable: false,\n      value: source\n    });\n\n    if (Object.freeze) {\n      Object.freeze(element.props);\n      Object.freeze(element);\n    }\n  }\n\n  return element;\n};\n/**\n * Create and return a new ReactElement of the given type.\n * See https://reactjs.org/docs/react-api.html#createelement\n */\n\nfunction createElement(type, config, children) {\n  var propName; // Reserved names are extracted\n\n  var props = {};\n  var key = null;\n  var ref = null;\n  var self = null;\n  var source = null;\n\n  if (config != null) {\n    if (hasValidRef(config)) {\n      ref = config.ref;\n\n      {\n        warnIfStringRefCannotBeAutoConverted(config);\n      }\n    }\n\n    if (hasValidKey(config)) {\n      key = '' + config.key;\n    }\n\n    self = config.__self === undefined ? null : config.__self;\n    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object\n\n    for (propName in config) {\n      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {\n        props[propName] = config[propName];\n      }\n    }\n  } // Children can be more than one argument, and those are transferred onto\n  // the newly allocated props object.\n\n\n  var childrenLength = arguments.length - 2;\n\n  if (childrenLength === 1) {\n    props.children = children;\n  } else if (childrenLength > 1) {\n    var childArray = Array(childrenLength);\n\n    for (var i = 0; i < childrenLength; i++) {\n      childArray[i] = arguments[i + 2];\n    }\n\n    {\n      if (Object.freeze) {\n        Object.freeze(childArray);\n      }\n    }\n\n    props.children = childArray;\n  } // Resolve default props\n\n\n  if (type && type.defaultProps) {\n    var defaultProps = type.defaultProps;\n\n    for (propName in defaultProps) {\n      if (props[propName] === undefined) {\n        props[propName] = defaultProps[propName];\n      }\n    }\n  }\n\n  {\n    if (key || ref) {\n      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;\n\n      if (key) {\n        defineKeyPropWarningGetter(props, displayName);\n      }\n\n      if (ref) {\n        defineRefPropWarningGetter(props, displayName);\n      }\n    }\n  }\n\n  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);\n}\nfunction cloneAndReplaceKey(oldElement, newKey) {\n  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);\n  return newElement;\n}\n/**\n * Clone and return a new ReactElement using element as the starting point.\n * See https://reactjs.org/docs/react-api.html#cloneelement\n */\n\nfunction cloneElement(element, config, children) {\n  if (!!(element === null || element === undefined)) {\n    {\n      throw Error( \"React.cloneElement(...): The argument must be a React element, but you passed \" + element + \".\" );\n    }\n  }\n\n  var propName; // Original props are copied\n\n  var props = _assign({}, element.props); // Reserved names are extracted\n\n\n  var key = element.key;\n  var ref = element.ref; // Self is preserved since the owner is preserved.\n\n  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a\n  // transpiler, and the original source is probably a better indicator of the\n  // true owner.\n\n  var source = element._source; // Owner will be preserved, unless ref is overridden\n\n  var owner = element._owner;\n\n  if (config != null) {\n    if (hasValidRef(config)) {\n      // Silently steal the ref from the parent.\n      ref = config.ref;\n      owner = ReactCurrentOwner.current;\n    }\n\n    if (hasValidKey(config)) {\n      key = '' + config.key;\n    } // Remaining properties override existing props\n\n\n    var defaultProps;\n\n    if (element.type && element.type.defaultProps) {\n      defaultProps = element.type.defaultProps;\n    }\n\n    for (propName in config) {\n      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {\n        if (config[propName] === undefined && defaultProps !== undefined) {\n          // Resolve default props\n          props[propName] = defaultProps[propName];\n        } else {\n          props[propName] = config[propName];\n        }\n      }\n    }\n  } // Children can be more than one argument, and those are transferred onto\n  // the newly allocated props object.\n\n\n  var childrenLength = arguments.length - 2;\n\n  if (childrenLength === 1) {\n    props.children = children;\n  } else if (childrenLength > 1) {\n    var childArray = Array(childrenLength);\n\n    for (var i = 0; i < childrenLength; i++) {\n      childArray[i] = arguments[i + 2];\n    }\n\n    props.children = childArray;\n  }\n\n  return ReactElement(element.type, key, ref, self, source, owner, props);\n}\n/**\n * Verifies the object is a ReactElement.\n * See https://reactjs.org/docs/react-api.html#isvalidelement\n * @param {?object} object\n * @return {boolean} True if `object` is a ReactElement.\n * @final\n */\n\nfunction isValidElement(object) {\n  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;\n}\n\nvar SEPARATOR = '.';\nvar SUBSEPARATOR = ':';\n/**\n * Escape and wrap key so it is safe to use as a reactid\n *\n * @param {string} key to be escaped.\n * @return {string} the escaped key.\n */\n\nfunction escape(key) {\n  var escapeRegex = /[=:]/g;\n  var escaperLookup = {\n    '=': '=0',\n    ':': '=2'\n  };\n  var escapedString = key.replace(escapeRegex, function (match) {\n    return escaperLookup[match];\n  });\n  return '$' + escapedString;\n}\n/**\n * TODO: Test that a single child and an array with one item have the same key\n * pattern.\n */\n\n\nvar didWarnAboutMaps = false;\nvar userProvidedKeyEscapeRegex = /\\/+/g;\n\nfunction escapeUserProvidedKey(text) {\n  return text.replace(userProvidedKeyEscapeRegex, '$&/');\n}\n/**\n * Generate a key string that identifies a element within a set.\n *\n * @param {*} element A element that could contain a manual key.\n * @param {number} index Index that is used if a manual key is not provided.\n * @return {string}\n */\n\n\nfunction getElementKey(element, index) {\n  // Do some typechecking here since we call this blindly. We want to ensure\n  // that we don't block potential future ES APIs.\n  if (typeof element === 'object' && element !== null && element.key != null) {\n    // Explicit key\n    return escape('' + element.key);\n  } // Implicit key determined by the index in the set\n\n\n  return index.toString(36);\n}\n\nfunction mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {\n  var type = typeof children;\n\n  if (type === 'undefined' || type === 'boolean') {\n    // All of the above are perceived as null.\n    children = null;\n  }\n\n  var invokeCallback = false;\n\n  if (children === null) {\n    invokeCallback = true;\n  } else {\n    switch (type) {\n      case 'string':\n      case 'number':\n        invokeCallback = true;\n        break;\n\n      case 'object':\n        switch (children.$$typeof) {\n          case REACT_ELEMENT_TYPE:\n          case REACT_PORTAL_TYPE:\n            invokeCallback = true;\n        }\n\n    }\n  }\n\n  if (invokeCallback) {\n    var _child = children;\n    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array\n    // so that it's consistent if the number of children grows:\n\n    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;\n\n    if (Array.isArray(mappedChild)) {\n      var escapedChildKey = '';\n\n      if (childKey != null) {\n        escapedChildKey = escapeUserProvidedKey(childKey) + '/';\n      }\n\n      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {\n        return c;\n      });\n    } else if (mappedChild != null) {\n      if (isValidElement(mappedChild)) {\n        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as\n        // traverseAllChildren used to do for objects as children\n        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key\n        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number\n        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);\n      }\n\n      array.push(mappedChild);\n    }\n\n    return 1;\n  }\n\n  var child;\n  var nextName;\n  var subtreeCount = 0; // Count of children found in the current subtree.\n\n  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;\n\n  if (Array.isArray(children)) {\n    for (var i = 0; i < children.length; i++) {\n      child = children[i];\n      nextName = nextNamePrefix + getElementKey(child, i);\n      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);\n    }\n  } else {\n    var iteratorFn = getIteratorFn(children);\n\n    if (typeof iteratorFn === 'function') {\n      var iterableChildren = children;\n\n      {\n        // Warn about using Maps as children\n        if (iteratorFn === iterableChildren.entries) {\n          if (!didWarnAboutMaps) {\n            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');\n          }\n\n          didWarnAboutMaps = true;\n        }\n      }\n\n      var iterator = iteratorFn.call(iterableChildren);\n      var step;\n      var ii = 0;\n\n      while (!(step = iterator.next()).done) {\n        child = step.value;\n        nextName = nextNamePrefix + getElementKey(child, ii++);\n        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);\n      }\n    } else if (type === 'object') {\n      var childrenString = '' + children;\n\n      {\n        {\n          throw Error( \"Objects are not valid as a React child (found: \" + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + \"). If you meant to render a collection of children, use an array instead.\" );\n        }\n      }\n    }\n  }\n\n  return subtreeCount;\n}\n\n/**\n * Maps children that are typically specified as `props.children`.\n *\n * See https://reactjs.org/docs/react-api.html#reactchildrenmap\n *\n * The provided mapFunction(child, index) will be called for each\n * leaf child.\n *\n * @param {?*} children Children tree container.\n * @param {function(*, int)} func The map function.\n * @param {*} context Context for mapFunction.\n * @return {object} Object containing the ordered map of results.\n */\nfunction mapChildren(children, func, context) {\n  if (children == null) {\n    return children;\n  }\n\n  var result = [];\n  var count = 0;\n  mapIntoArray(children, result, '', '', function (child) {\n    return func.call(context, child, count++);\n  });\n  return result;\n}\n/**\n * Count the number of children that are typically specified as\n * `props.children`.\n *\n * See https://reactjs.org/docs/react-api.html#reactchildrencount\n *\n * @param {?*} children Children tree container.\n * @return {number} The number of children.\n */\n\n\nfunction countChildren(children) {\n  var n = 0;\n  mapChildren(children, function () {\n    n++; // Don't return anything\n  });\n  return n;\n}\n\n/**\n * Iterates through children that are typically specified as `props.children`.\n *\n * See https://reactjs.org/docs/react-api.html#reactchildrenforeach\n *\n * The provided forEachFunc(child, index) will be called for each\n * leaf child.\n *\n * @param {?*} children Children tree container.\n * @param {function(*, int)} forEachFunc\n * @param {*} forEachContext Context for forEachContext.\n */\nfunction forEachChildren(children, forEachFunc, forEachContext) {\n  mapChildren(children, function () {\n    forEachFunc.apply(this, arguments); // Don't return anything.\n  }, forEachContext);\n}\n/**\n * Flatten a children object (typically specified as `props.children`) and\n * return an array with appropriately re-keyed children.\n *\n * See https://reactjs.org/docs/react-api.html#reactchildrentoarray\n */\n\n\nfunction toArray(children) {\n  return mapChildren(children, function (child) {\n    return child;\n  }) || [];\n}\n/**\n * Returns the first child in a collection of children and verifies that there\n * is only one child in the collection.\n *\n * See https://reactjs.org/docs/react-api.html#reactchildrenonly\n *\n * The current implementation of this function assumes that a single child gets\n * passed without a wrapper, but the purpose of this helper function is to\n * abstract away the particular structure of children.\n *\n * @param {?object} children Child collection structure.\n * @return {ReactElement} The first and only `ReactElement` contained in the\n * structure.\n */\n\n\nfunction onlyChild(children) {\n  if (!isValidElement(children)) {\n    {\n      throw Error( \"React.Children.only expected to receive a single React element child.\" );\n    }\n  }\n\n  return children;\n}\n\nfunction createContext(defaultValue, calculateChangedBits) {\n  if (calculateChangedBits === undefined) {\n    calculateChangedBits = null;\n  } else {\n    {\n      if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {\n        error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);\n      }\n    }\n  }\n\n  var context = {\n    $$typeof: REACT_CONTEXT_TYPE,\n    _calculateChangedBits: calculateChangedBits,\n    // As a workaround to support multiple concurrent renderers, we categorize\n    // some renderers as primary and others as secondary. We only expect\n    // there to be two concurrent renderers at most: React Native (primary) and\n    // Fabric (secondary); React DOM (primary) and React ART (secondary).\n    // Secondary renderers store their context values on separate fields.\n    _currentValue: defaultValue,\n    _currentValue2: defaultValue,\n    // Used to track how many concurrent renderers this context currently\n    // supports within in a single renderer. Such as parallel server rendering.\n    _threadCount: 0,\n    // These are circular\n    Provider: null,\n    Consumer: null\n  };\n  context.Provider = {\n    $$typeof: REACT_PROVIDER_TYPE,\n    _context: context\n  };\n  var hasWarnedAboutUsingNestedContextConsumers = false;\n  var hasWarnedAboutUsingConsumerProvider = false;\n  var hasWarnedAboutDisplayNameOnConsumer = false;\n\n  {\n    // A separate object, but proxies back to the original context object for\n    // backwards compatibility. It has a different $$typeof, so we can properly\n    // warn for the incorrect usage of Context as a Consumer.\n    var Consumer = {\n      $$typeof: REACT_CONTEXT_TYPE,\n      _context: context,\n      _calculateChangedBits: context._calculateChangedBits\n    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here\n\n    Object.defineProperties(Consumer, {\n      Provider: {\n        get: function () {\n          if (!hasWarnedAboutUsingConsumerProvider) {\n            hasWarnedAboutUsingConsumerProvider = true;\n\n            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');\n          }\n\n          return context.Provider;\n        },\n        set: function (_Provider) {\n          context.Provider = _Provider;\n        }\n      },\n      _currentValue: {\n        get: function () {\n          return context._currentValue;\n        },\n        set: function (_currentValue) {\n          context._currentValue = _currentValue;\n        }\n      },\n      _currentValue2: {\n        get: function () {\n          return context._currentValue2;\n        },\n        set: function (_currentValue2) {\n          context._currentValue2 = _currentValue2;\n        }\n      },\n      _threadCount: {\n        get: function () {\n          return context._threadCount;\n        },\n        set: function (_threadCount) {\n          context._threadCount = _threadCount;\n        }\n      },\n      Consumer: {\n        get: function () {\n          if (!hasWarnedAboutUsingNestedContextConsumers) {\n            hasWarnedAboutUsingNestedContextConsumers = true;\n\n            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');\n          }\n\n          return context.Consumer;\n        }\n      },\n      displayName: {\n        get: function () {\n          return context.displayName;\n        },\n        set: function (displayName) {\n          if (!hasWarnedAboutDisplayNameOnConsumer) {\n            warn('Setting `displayName` on Context.Consumer has no effect. ' + \"You should set it directly on the context with Context.displayName = '%s'.\", displayName);\n\n            hasWarnedAboutDisplayNameOnConsumer = true;\n          }\n        }\n      }\n    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty\n\n    context.Consumer = Consumer;\n  }\n\n  {\n    context._currentRenderer = null;\n    context._currentRenderer2 = null;\n  }\n\n  return context;\n}\n\nvar Uninitialized = -1;\nvar Pending = 0;\nvar Resolved = 1;\nvar Rejected = 2;\n\nfunction lazyInitializer(payload) {\n  if (payload._status === Uninitialized) {\n    var ctor = payload._result;\n    var thenable = ctor(); // Transition to the next state.\n\n    var pending = payload;\n    pending._status = Pending;\n    pending._result = thenable;\n    thenable.then(function (moduleObject) {\n      if (payload._status === Pending) {\n        var defaultExport = moduleObject.default;\n\n        {\n          if (defaultExport === undefined) {\n            error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\\n\\nYour code should look like: \\n  ' + // Break up imports to avoid accidentally parsing them as dependencies.\n            'const MyComponent = lazy(() => imp' + \"ort('./MyComponent'))\", moduleObject);\n          }\n        } // Transition to the next state.\n\n\n        var resolved = payload;\n        resolved._status = Resolved;\n        resolved._result = defaultExport;\n      }\n    }, function (error) {\n      if (payload._status === Pending) {\n        // Transition to the next state.\n        var rejected = payload;\n        rejected._status = Rejected;\n        rejected._result = error;\n      }\n    });\n  }\n\n  if (payload._status === Resolved) {\n    return payload._result;\n  } else {\n    throw payload._result;\n  }\n}\n\nfunction lazy(ctor) {\n  var payload = {\n    // We use these fields to store the result.\n    _status: -1,\n    _result: ctor\n  };\n  var lazyType = {\n    $$typeof: REACT_LAZY_TYPE,\n    _payload: payload,\n    _init: lazyInitializer\n  };\n\n  {\n    // In production, this would just set it on the object.\n    var defaultProps;\n    var propTypes; // $FlowFixMe\n\n    Object.defineProperties(lazyType, {\n      defaultProps: {\n        configurable: true,\n        get: function () {\n          return defaultProps;\n        },\n        set: function (newDefaultProps) {\n          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');\n\n          defaultProps = newDefaultProps; // Match production behavior more closely:\n          // $FlowFixMe\n\n          Object.defineProperty(lazyType, 'defaultProps', {\n            enumerable: true\n          });\n        }\n      },\n      propTypes: {\n        configurable: true,\n        get: function () {\n          return propTypes;\n        },\n        set: function (newPropTypes) {\n          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');\n\n          propTypes = newPropTypes; // Match production behavior more closely:\n          // $FlowFixMe\n\n          Object.defineProperty(lazyType, 'propTypes', {\n            enumerable: true\n          });\n        }\n      }\n    });\n  }\n\n  return lazyType;\n}\n\nfunction forwardRef(render) {\n  {\n    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {\n      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');\n    } else if (typeof render !== 'function') {\n      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);\n    } else {\n      if (render.length !== 0 && render.length !== 2) {\n        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');\n      }\n    }\n\n    if (render != null) {\n      if (render.defaultProps != null || render.propTypes != null) {\n        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');\n      }\n    }\n  }\n\n  var elementType = {\n    $$typeof: REACT_FORWARD_REF_TYPE,\n    render: render\n  };\n\n  {\n    var ownName;\n    Object.defineProperty(elementType, 'displayName', {\n      enumerable: false,\n      configurable: true,\n      get: function () {\n        return ownName;\n      },\n      set: function (name) {\n        ownName = name;\n\n        if (render.displayName == null) {\n          render.displayName = name;\n        }\n      }\n    });\n  }\n\n  return elementType;\n}\n\n// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.\n\nvar enableScopeAPI = false; // Experimental Create Event Handle API.\n\nfunction isValidElementType(type) {\n  if (typeof type === 'string' || typeof type === 'function') {\n    return true;\n  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).\n\n\n  if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {\n    return true;\n  }\n\n  if (typeof type === 'object' && type !== null) {\n    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {\n      return true;\n    }\n  }\n\n  return false;\n}\n\nfunction memo(type, compare) {\n  {\n    if (!isValidElementType(type)) {\n      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);\n    }\n  }\n\n  var elementType = {\n    $$typeof: REACT_MEMO_TYPE,\n    type: type,\n    compare: compare === undefined ? null : compare\n  };\n\n  {\n    var ownName;\n    Object.defineProperty(elementType, 'displayName', {\n      enumerable: false,\n      configurable: true,\n      get: function () {\n        return ownName;\n      },\n      set: function (name) {\n        ownName = name;\n\n        if (type.displayName == null) {\n          type.displayName = name;\n        }\n      }\n    });\n  }\n\n  return elementType;\n}\n\nfunction resolveDispatcher() {\n  var dispatcher = ReactCurrentDispatcher.current;\n\n  if (!(dispatcher !== null)) {\n    {\n      throw Error( \"Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\\n1. You might have mismatching versions of React and the renderer (such as React DOM)\\n2. You might be breaking the Rules of Hooks\\n3. You might have more than one copy of React in the same app\\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.\" );\n    }\n  }\n\n  return dispatcher;\n}\n\nfunction useContext(Context, unstable_observedBits) {\n  var dispatcher = resolveDispatcher();\n\n  {\n    if (unstable_observedBits !== undefined) {\n      error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\\n\\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');\n    } // TODO: add a more generic warning for invalid values.\n\n\n    if (Context._context !== undefined) {\n      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs\n      // and nobody should be using this in existing code.\n\n      if (realContext.Consumer === Context) {\n        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');\n      } else if (realContext.Provider === Context) {\n        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');\n      }\n    }\n  }\n\n  return dispatcher.useContext(Context, unstable_observedBits);\n}\nfunction useState(initialState) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useState(initialState);\n}\nfunction useReducer(reducer, initialArg, init) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useReducer(reducer, initialArg, init);\n}\nfunction useRef(initialValue) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useRef(initialValue);\n}\nfunction useEffect(create, deps) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useEffect(create, deps);\n}\nfunction useLayoutEffect(create, deps) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useLayoutEffect(create, deps);\n}\nfunction useCallback(callback, deps) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useCallback(callback, deps);\n}\nfunction useMemo(create, deps) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useMemo(create, deps);\n}\nfunction useImperativeHandle(ref, create, deps) {\n  var dispatcher = resolveDispatcher();\n  return dispatcher.useImperativeHandle(ref, create, deps);\n}\nfunction useDebugValue(value, formatterFn) {\n  {\n    var dispatcher = resolveDispatcher();\n    return dispatcher.useDebugValue(value, formatterFn);\n  }\n}\n\n// Helpers to patch console.logs to avoid logging during side-effect free\n// replaying on render function. This currently only patches the object\n// lazily which won't cover if the log function was extracted eagerly.\n// We could also eagerly patch the method.\nvar disabledDepth = 0;\nvar prevLog;\nvar prevInfo;\nvar prevWarn;\nvar prevError;\nvar prevGroup;\nvar prevGroupCollapsed;\nvar prevGroupEnd;\n\nfunction disabledLog() {}\n\ndisabledLog.__reactDisabledLog = true;\nfunction disableLogs() {\n  {\n    if (disabledDepth === 0) {\n      /* eslint-disable react-internal/no-production-logging */\n      prevLog = console.log;\n      prevInfo = console.info;\n      prevWarn = console.warn;\n      prevError = console.error;\n      prevGroup = console.group;\n      prevGroupCollapsed = console.groupCollapsed;\n      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099\n\n      var props = {\n        configurable: true,\n        enumerable: true,\n        value: disabledLog,\n        writable: true\n      }; // $FlowFixMe Flow thinks console is immutable.\n\n      Object.defineProperties(console, {\n        info: props,\n        log: props,\n        warn: props,\n        error: props,\n        group: props,\n        groupCollapsed: props,\n        groupEnd: props\n      });\n      /* eslint-enable react-internal/no-production-logging */\n    }\n\n    disabledDepth++;\n  }\n}\nfunction reenableLogs() {\n  {\n    disabledDepth--;\n\n    if (disabledDepth === 0) {\n      /* eslint-disable react-internal/no-production-logging */\n      var props = {\n        configurable: true,\n        enumerable: true,\n        writable: true\n      }; // $FlowFixMe Flow thinks console is immutable.\n\n      Object.defineProperties(console, {\n        log: _assign({}, props, {\n          value: prevLog\n        }),\n        info: _assign({}, props, {\n          value: prevInfo\n        }),\n        warn: _assign({}, props, {\n          value: prevWarn\n        }),\n        error: _assign({}, props, {\n          value: prevError\n        }),\n        group: _assign({}, props, {\n          value: prevGroup\n        }),\n        groupCollapsed: _assign({}, props, {\n          value: prevGroupCollapsed\n        }),\n        groupEnd: _assign({}, props, {\n          value: prevGroupEnd\n        })\n      });\n      /* eslint-enable react-internal/no-production-logging */\n    }\n\n    if (disabledDepth < 0) {\n      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');\n    }\n  }\n}\n\nvar ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;\nvar prefix;\nfunction describeBuiltInComponentFrame(name, source, ownerFn) {\n  {\n    if (prefix === undefined) {\n      // Extract the VM specific prefix used by each line.\n      try {\n        throw Error();\n      } catch (x) {\n        var match = x.stack.trim().match(/\\n( *(at )?)/);\n        prefix = match && match[1] || '';\n      }\n    } // We use the prefix to ensure our stacks line up with native stack frames.\n\n\n    return '\\n' + prefix + name;\n  }\n}\nvar reentry = false;\nvar componentFrameCache;\n\n{\n  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;\n  componentFrameCache = new PossiblyWeakMap();\n}\n\nfunction describeNativeComponentFrame(fn, construct) {\n  // If something asked for a stack inside a fake render, it should get ignored.\n  if (!fn || reentry) {\n    return '';\n  }\n\n  {\n    var frame = componentFrameCache.get(fn);\n\n    if (frame !== undefined) {\n      return frame;\n    }\n  }\n\n  var control;\n  reentry = true;\n  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.\n\n  Error.prepareStackTrace = undefined;\n  var previousDispatcher;\n\n  {\n    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function\n    // for warnings.\n\n    ReactCurrentDispatcher$1.current = null;\n    disableLogs();\n  }\n\n  try {\n    // This should throw.\n    if (construct) {\n      // Something should be setting the props in the constructor.\n      var Fake = function () {\n        throw Error();\n      }; // $FlowFixMe\n\n\n      Object.defineProperty(Fake.prototype, 'props', {\n        set: function () {\n          // We use a throwing setter instead of frozen or non-writable props\n          // because that won't throw in a non-strict mode function.\n          throw Error();\n        }\n      });\n\n      if (typeof Reflect === 'object' && Reflect.construct) {\n        // We construct a different control for this case to include any extra\n        // frames added by the construct call.\n        try {\n          Reflect.construct(Fake, []);\n        } catch (x) {\n          control = x;\n        }\n\n        Reflect.construct(fn, [], Fake);\n      } else {\n        try {\n          Fake.call();\n        } catch (x) {\n          control = x;\n        }\n\n        fn.call(Fake.prototype);\n      }\n    } else {\n      try {\n        throw Error();\n      } catch (x) {\n        control = x;\n      }\n\n      fn();\n    }\n  } catch (sample) {\n    // This is inlined manually because closure doesn't do it for us.\n    if (sample && control && typeof sample.stack === 'string') {\n      // This extracts the first frame from the sample that isn't also in the control.\n      // Skipping one frame that we assume is the frame that calls the two.\n      var sampleLines = sample.stack.split('\\n');\n      var controlLines = control.stack.split('\\n');\n      var s = sampleLines.length - 1;\n      var c = controlLines.length - 1;\n\n      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {\n        // We expect at least one stack frame to be shared.\n        // Typically this will be the root most one. However, stack frames may be\n        // cut off due to maximum stack limits. In this case, one maybe cut off\n        // earlier than the other. We assume that the sample is longer or the same\n        // and there for cut off earlier. So we should find the root most frame in\n        // the sample somewhere in the control.\n        c--;\n      }\n\n      for (; s >= 1 && c >= 0; s--, c--) {\n        // Next we find the first one that isn't the same which should be the\n        // frame that called our sample function and the control.\n        if (sampleLines[s] !== controlLines[c]) {\n          // In V8, the first line is describing the message but other VMs don't.\n          // If we're about to return the first line, and the control is also on the same\n          // line, that's a pretty good indicator that our sample threw at same line as\n          // the control. I.e. before we entered the sample frame. So we ignore this result.\n          // This can happen if you passed a class to function component, or non-function.\n          if (s !== 1 || c !== 1) {\n            do {\n              s--;\n              c--; // We may still have similar intermediate frames from the construct call.\n              // The next one that isn't the same should be our match though.\n\n              if (c < 0 || sampleLines[s] !== controlLines[c]) {\n                // V8 adds a \"new\" prefix for native classes. Let's remove it to make it prettier.\n                var _frame = '\\n' + sampleLines[s].replace(' at new ', ' at ');\n\n                {\n                  if (typeof fn === 'function') {\n                    componentFrameCache.set(fn, _frame);\n                  }\n                } // Return the line we found.\n\n\n                return _frame;\n              }\n            } while (s >= 1 && c >= 0);\n          }\n\n          break;\n        }\n      }\n    }\n  } finally {\n    reentry = false;\n\n    {\n      ReactCurrentDispatcher$1.current = previousDispatcher;\n      reenableLogs();\n    }\n\n    Error.prepareStackTrace = previousPrepareStackTrace;\n  } // Fallback to just using the name if we couldn't make it throw.\n\n\n  var name = fn ? fn.displayName || fn.name : '';\n  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';\n\n  {\n    if (typeof fn === 'function') {\n      componentFrameCache.set(fn, syntheticFrame);\n    }\n  }\n\n  return syntheticFrame;\n}\nfunction describeFunctionComponentFrame(fn, source, ownerFn) {\n  {\n    return describeNativeComponentFrame(fn, false);\n  }\n}\n\nfunction shouldConstruct(Component) {\n  var prototype = Component.prototype;\n  return !!(prototype && prototype.isReactComponent);\n}\n\nfunction describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {\n\n  if (type == null) {\n    return '';\n  }\n\n  if (typeof type === 'function') {\n    {\n      return describeNativeComponentFrame(type, shouldConstruct(type));\n    }\n  }\n\n  if (typeof type === 'string') {\n    return describeBuiltInComponentFrame(type);\n  }\n\n  switch (type) {\n    case exports.Suspense:\n      return describeBuiltInComponentFrame('Suspense');\n\n    case REACT_SUSPENSE_LIST_TYPE:\n      return describeBuiltInComponentFrame('SuspenseList');\n  }\n\n  if (typeof type === 'object') {\n    switch (type.$$typeof) {\n      case REACT_FORWARD_REF_TYPE:\n        return describeFunctionComponentFrame(type.render);\n\n      case REACT_MEMO_TYPE:\n        // Memo may contain any component type so we recursively resolve it.\n        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);\n\n      case REACT_BLOCK_TYPE:\n        return describeFunctionComponentFrame(type._render);\n\n      case REACT_LAZY_TYPE:\n        {\n          var lazyComponent = type;\n          var payload = lazyComponent._payload;\n          var init = lazyComponent._init;\n\n          try {\n            // Lazy may contain any component type so we recursively resolve it.\n            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);\n          } catch (x) {}\n        }\n    }\n  }\n\n  return '';\n}\n\nvar loggedTypeFailures = {};\nvar ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;\n\nfunction setCurrentlyValidatingElement(element) {\n  {\n    if (element) {\n      var owner = element._owner;\n      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);\n      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);\n    } else {\n      ReactDebugCurrentFrame$1.setExtraStackFrame(null);\n    }\n  }\n}\n\nfunction checkPropTypes(typeSpecs, values, location, componentName, element) {\n  {\n    // $FlowFixMe This is okay but Flow doesn't know it.\n    var has = Function.call.bind(Object.prototype.hasOwnProperty);\n\n    for (var typeSpecName in typeSpecs) {\n      if (has(typeSpecs, typeSpecName)) {\n        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to\n        // fail the render phase where it didn't fail before. So we log it.\n        // After these have been cleaned up, we'll let them throw.\n\n        try {\n          // This is intentionally an invariant that gets caught. It's the same\n          // behavior as without this statement except with a better message.\n          if (typeof typeSpecs[typeSpecName] !== 'function') {\n            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');\n            err.name = 'Invariant Violation';\n            throw err;\n          }\n\n          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');\n        } catch (ex) {\n          error$1 = ex;\n        }\n\n        if (error$1 && !(error$1 instanceof Error)) {\n          setCurrentlyValidatingElement(element);\n\n          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);\n\n          setCurrentlyValidatingElement(null);\n        }\n\n        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {\n          // Only monitor this failure once because there tends to be a lot of the\n          // same error.\n          loggedTypeFailures[error$1.message] = true;\n          setCurrentlyValidatingElement(element);\n\n          error('Failed %s type: %s', location, error$1.message);\n\n          setCurrentlyValidatingElement(null);\n        }\n      }\n    }\n  }\n}\n\nfunction setCurrentlyValidatingElement$1(element) {\n  {\n    if (element) {\n      var owner = element._owner;\n      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);\n      setExtraStackFrame(stack);\n    } else {\n      setExtraStackFrame(null);\n    }\n  }\n}\n\nvar propTypesMisspellWarningShown;\n\n{\n  propTypesMisspellWarningShown = false;\n}\n\nfunction getDeclarationErrorAddendum() {\n  if (ReactCurrentOwner.current) {\n    var name = getComponentName(ReactCurrentOwner.current.type);\n\n    if (name) {\n      return '\\n\\nCheck the render method of `' + name + '`.';\n    }\n  }\n\n  return '';\n}\n\nfunction getSourceInfoErrorAddendum(source) {\n  if (source !== undefined) {\n    var fileName = source.fileName.replace(/^.*[\\\\\\/]/, '');\n    var lineNumber = source.lineNumber;\n    return '\\n\\nCheck your code at ' + fileName + ':' + lineNumber + '.';\n  }\n\n  return '';\n}\n\nfunction getSourceInfoErrorAddendumForProps(elementProps) {\n  if (elementProps !== null && elementProps !== undefined) {\n    return getSourceInfoErrorAddendum(elementProps.__source);\n  }\n\n  return '';\n}\n/**\n * Warn if there's no key explicitly set on dynamic arrays of children or\n * object keys are not valid. This allows us to keep track of children between\n * updates.\n */\n\n\nvar ownerHasKeyUseWarning = {};\n\nfunction getCurrentComponentErrorInfo(parentType) {\n  var info = getDeclarationErrorAddendum();\n\n  if (!info) {\n    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;\n\n    if (parentName) {\n      info = \"\\n\\nCheck the top-level render call using <\" + parentName + \">.\";\n    }\n  }\n\n  return info;\n}\n/**\n * Warn if the element doesn't have an explicit key assigned to it.\n * This element is in an array. The array could grow and shrink or be\n * reordered. All children that haven't already been validated are required to\n * have a \"key\" property assigned to it. Error statuses are cached so a warning\n * will only be shown once.\n *\n * @internal\n * @param {ReactElement} element Element that requires a key.\n * @param {*} parentType element's parent's type.\n */\n\n\nfunction validateExplicitKey(element, parentType) {\n  if (!element._store || element._store.validated || element.key != null) {\n    return;\n  }\n\n  element._store.validated = true;\n  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);\n\n  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {\n    return;\n  }\n\n  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a\n  // property, it may be the creator of the child that's responsible for\n  // assigning it a key.\n\n  var childOwner = '';\n\n  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {\n    // Give the component that originally created this child.\n    childOwner = \" It was passed a child from \" + getComponentName(element._owner.type) + \".\";\n  }\n\n  {\n    setCurrentlyValidatingElement$1(element);\n\n    error('Each child in a list should have a unique \"key\" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);\n\n    setCurrentlyValidatingElement$1(null);\n  }\n}\n/**\n * Ensure that every element either is passed in a static location, in an\n * array with an explicit keys property defined, or in an object literal\n * with valid key property.\n *\n * @internal\n * @param {ReactNode} node Statically passed child of any type.\n * @param {*} parentType node's parent's type.\n */\n\n\nfunction validateChildKeys(node, parentType) {\n  if (typeof node !== 'object') {\n    return;\n  }\n\n  if (Array.isArray(node)) {\n    for (var i = 0; i < node.length; i++) {\n      var child = node[i];\n\n      if (isValidElement(child)) {\n        validateExplicitKey(child, parentType);\n      }\n    }\n  } else if (isValidElement(node)) {\n    // This element was passed in a valid location.\n    if (node._store) {\n      node._store.validated = true;\n    }\n  } else if (node) {\n    var iteratorFn = getIteratorFn(node);\n\n    if (typeof iteratorFn === 'function') {\n      // Entry iterators used to provide implicit keys,\n      // but now we print a separate warning for them later.\n      if (iteratorFn !== node.entries) {\n        var iterator = iteratorFn.call(node);\n        var step;\n\n        while (!(step = iterator.next()).done) {\n          if (isValidElement(step.value)) {\n            validateExplicitKey(step.value, parentType);\n          }\n        }\n      }\n    }\n  }\n}\n/**\n * Given an element, validate that its props follow the propTypes definition,\n * provided by the type.\n *\n * @param {ReactElement} element\n */\n\n\nfunction validatePropTypes(element) {\n  {\n    var type = element.type;\n\n    if (type === null || type === undefined || typeof type === 'string') {\n      return;\n    }\n\n    var propTypes;\n\n    if (typeof type === 'function') {\n      propTypes = type.propTypes;\n    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.\n    // Inner props are checked in the reconciler.\n    type.$$typeof === REACT_MEMO_TYPE)) {\n      propTypes = type.propTypes;\n    } else {\n      return;\n    }\n\n    if (propTypes) {\n      // Intentionally inside to avoid triggering lazy initializers:\n      var name = getComponentName(type);\n      checkPropTypes(propTypes, element.props, 'prop', name, element);\n    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {\n      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:\n\n      var _name = getComponentName(type);\n\n      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');\n    }\n\n    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {\n      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');\n    }\n  }\n}\n/**\n * Given a fragment, validate that it can only be provided with fragment props\n * @param {ReactElement} fragment\n */\n\n\nfunction validateFragmentProps(fragment) {\n  {\n    var keys = Object.keys(fragment.props);\n\n    for (var i = 0; i < keys.length; i++) {\n      var key = keys[i];\n\n      if (key !== 'children' && key !== 'key') {\n        setCurrentlyValidatingElement$1(fragment);\n\n        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);\n\n        setCurrentlyValidatingElement$1(null);\n        break;\n      }\n    }\n\n    if (fragment.ref !== null) {\n      setCurrentlyValidatingElement$1(fragment);\n\n      error('Invalid attribute `ref` supplied to `React.Fragment`.');\n\n      setCurrentlyValidatingElement$1(null);\n    }\n  }\n}\nfunction createElementWithValidation(type, props, children) {\n  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to\n  // succeed and there will likely be errors in render.\n\n  if (!validType) {\n    var info = '';\n\n    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {\n      info += ' You likely forgot to export your component from the file ' + \"it's defined in, or you might have mixed up default and named imports.\";\n    }\n\n    var sourceInfo = getSourceInfoErrorAddendumForProps(props);\n\n    if (sourceInfo) {\n      info += sourceInfo;\n    } else {\n      info += getDeclarationErrorAddendum();\n    }\n\n    var typeString;\n\n    if (type === null) {\n      typeString = 'null';\n    } else if (Array.isArray(type)) {\n      typeString = 'array';\n    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {\n      typeString = \"<\" + (getComponentName(type.type) || 'Unknown') + \" />\";\n      info = ' Did you accidentally export a JSX literal instead of a component?';\n    } else {\n      typeString = typeof type;\n    }\n\n    {\n      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);\n    }\n  }\n\n  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.\n  // TODO: Drop this when these are no longer allowed as the type argument.\n\n  if (element == null) {\n    return element;\n  } // Skip key warning if the type isn't valid since our key validation logic\n  // doesn't expect a non-string/function type and can throw confusing errors.\n  // We don't want exception behavior to differ between dev and prod.\n  // (Rendering will throw with a helpful message and as soon as the type is\n  // fixed, the key warnings will appear.)\n\n\n  if (validType) {\n    for (var i = 2; i < arguments.length; i++) {\n      validateChildKeys(arguments[i], type);\n    }\n  }\n\n  if (type === exports.Fragment) {\n    validateFragmentProps(element);\n  } else {\n    validatePropTypes(element);\n  }\n\n  return element;\n}\nvar didWarnAboutDeprecatedCreateFactory = false;\nfunction createFactoryWithValidation(type) {\n  var validatedFactory = createElementWithValidation.bind(null, type);\n  validatedFactory.type = type;\n\n  {\n    if (!didWarnAboutDeprecatedCreateFactory) {\n      didWarnAboutDeprecatedCreateFactory = true;\n\n      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');\n    } // Legacy hook: remove it\n\n\n    Object.defineProperty(validatedFactory, 'type', {\n      enumerable: false,\n      get: function () {\n        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');\n\n        Object.defineProperty(this, 'type', {\n          value: type\n        });\n        return type;\n      }\n    });\n  }\n\n  return validatedFactory;\n}\nfunction cloneElementWithValidation(element, props, children) {\n  var newElement = cloneElement.apply(this, arguments);\n\n  for (var i = 2; i < arguments.length; i++) {\n    validateChildKeys(arguments[i], newElement.type);\n  }\n\n  validatePropTypes(newElement);\n  return newElement;\n}\n\n{\n\n  try {\n    var frozenObject = Object.freeze({});\n    /* eslint-disable no-new */\n\n    new Map([[frozenObject, null]]);\n    new Set([frozenObject]);\n    /* eslint-enable no-new */\n  } catch (e) {\n  }\n}\n\nvar createElement$1 =  createElementWithValidation ;\nvar cloneElement$1 =  cloneElementWithValidation ;\nvar createFactory =  createFactoryWithValidation ;\nvar Children = {\n  map: mapChildren,\n  forEach: forEachChildren,\n  count: countChildren,\n  toArray: toArray,\n  only: onlyChild\n};\n\nexports.Children = Children;\nexports.Component = Component;\nexports.PureComponent = PureComponent;\nexports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;\nexports.cloneElement = cloneElement$1;\nexports.createContext = createContext;\nexports.createElement = createElement$1;\nexports.createFactory = createFactory;\nexports.createRef = createRef;\nexports.forwardRef = forwardRef;\nexports.isValidElement = isValidElement;\nexports.lazy = lazy;\nexports.memo = memo;\nexports.useCallback = useCallback;\nexports.useContext = useContext;\nexports.useDebugValue = useDebugValue;\nexports.useEffect = useEffect;\nexports.useImperativeHandle = useImperativeHandle;\nexports.useLayoutEffect = useLayoutEffect;\nexports.useMemo = useMemo;\nexports.useReducer = useReducer;\nexports.useRef = useRef;\nexports.useState = useState;\nexports.version = ReactVersion;\n  })();\n}\n\n\n//# sourceURL=webpack://Note-riety/./node_modules/react/cjs/react.development.js?");

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nif (false) {} else {\n  module.exports = __webpack_require__(/*! ./cjs/react.development.js */ \"./node_modules/react/cjs/react.development.js\");\n}\n\n\n//# sourceURL=webpack://Note-riety/./node_modules/react/index.js?");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("910e1bb7b5b8508b5343")
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			}).catch(function(err) { if(err.code !== "MODULE_NOT_FOUND") throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./client/app/maker.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./client/helper/helper.js");
/******/ 	
/******/ })()
;