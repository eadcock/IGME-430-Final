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

/***/ "./client/helper/helper.js":
/*!*********************************!*\
  !*** ./client/helper/helper.js ***!
  \*********************************/
/***/ ((module) => {

eval("var cachedAccount;\n\nvar handleError = function handleError(message) {\n  $('#errorMessage').text(message);\n  $('#noteMessage').show();\n};\n\nvar redirect = function redirect(response) {\n  $('#noteMessage').hide();\n  window.location = response.redirect;\n};\n\nvar sendAjax = function sendAjax(type, action, data, success) {\n  $.ajax({\n    cache: false,\n    type: type,\n    url: action,\n    data: data,\n    dataType: 'json',\n    success: success,\n    error: function error(xhr, status, _error) {\n      var messageObj = JSON.parse(xhr.responseText);\n      handleError(messageObj.error);\n    }\n  });\n};\n\nvar sessionAccount = function sessionAccount(callback) {\n  sendAjax('GET', '/me', null, function (acc) {\n    cachedAccount = acc;\n    callback(acc);\n  });\n};\n\nmodule.exports.handleError = handleError;\nmodule.exports.sendAjax = sendAjax;\nmodule.exports.redirect = redirect;\nmodule.exports.fetchAccount = sessionAccount;\nmodule.exports.cachedAccount = cachedAccount;\n\n//# sourceURL=webpack://Note-riety/./client/helper/helper.js?");

/***/ }),

/***/ "./client/login/client.js":
/*!********************************!*\
  !*** ./client/login/client.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var helper = __webpack_require__(/*! ./../helper/helper.js */ \"./client/helper/helper.js\");\n\nvar handleLogin = function handleLogin(e) {\n  e.preventDefault();\n  $('#noteMessage').hide();\n\n  if ($('#user').val() == '' || $('#pass').val() == '') {\n    helper.handleError(\"Username or password is empty\");\n    return false;\n  }\n\n  console.log($('input[name=_csrf]').val());\n  helper.sendAjax('POST', $('#loginForm').attr('action'), $('#loginForm').serialize(), function (res) {\n    helper.fetchAccount(function () {});\n    helper.redirect(res);\n  });\n  return false;\n};\n\nvar handleSignup = function handleSignup(e) {\n  e.preventDefault();\n  $('#noteMessage').hide();\n\n  if ($('#user').val() == '' || $('#pass').val() == '' || $('#pass2').val() == '') {\n    helper.handleError('All fields are required');\n    return false;\n  }\n\n  if ($('#pass').val() !== $('#pass2').val()) {\n    helper.handleError('Passwords do not match');\n    return false;\n  }\n\n  helper.sendAjax('POST', $('#signupForm').attr('action'), $('#signupForm').serialize(), helper.redirect);\n  return false;\n};\n\nvar LoginWindow = function LoginWindow(props) {\n  return /*#__PURE__*/React.createElement(\"form\", {\n    id: \"loginForm\",\n    name: \"loginForm\",\n    onSubmit: handleLogin,\n    action: \"/login\",\n    method: \"POST\",\n    className: \"mainForm\"\n  }, /*#__PURE__*/React.createElement(\"label\", {\n    htmlFor: \"username\"\n  }, \"Username: \"), /*#__PURE__*/React.createElement(\"input\", {\n    id: \"user\",\n    type: \"text\",\n    name: \"username\",\n    placeholder: \"username\"\n  }), /*#__PURE__*/React.createElement(\"label\", {\n    htmlFor: \"pass\"\n  }, \"Password: \"), /*#__PURE__*/React.createElement(\"input\", {\n    id: \"pass\",\n    type: \"password\",\n    name: \"pass\",\n    placeholder: \"password\"\n  }), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"hidden\",\n    name: \"_csrf\",\n    value: props.csrf\n  }), /*#__PURE__*/React.createElement(\"input\", {\n    className: \"formSubmit\",\n    type: \"submit\",\n    value: \"Sign in\"\n  }));\n};\n\nvar SignupWindow = function SignupWindow(props) {\n  return /*#__PURE__*/React.createElement(\"form\", {\n    id: \"signupForm\",\n    name: \"signupForm\",\n    onSubmit: handleSignup,\n    action: \"/signup\",\n    method: \"POST\",\n    className: \"mainForm\"\n  }, /*#__PURE__*/React.createElement(\"label\", {\n    htmlFor: \"username\"\n  }, \"Username: \"), /*#__PURE__*/React.createElement(\"input\", {\n    id: \"user\",\n    type: \"text\",\n    name: \"username\",\n    placeholder: \"username\"\n  }), /*#__PURE__*/React.createElement(\"label\", {\n    htmlFor: \"pass\"\n  }, \"Password: \"), /*#__PURE__*/React.createElement(\"input\", {\n    id: \"pass\",\n    type: \"password\",\n    name: \"pass\",\n    placeholder: \"password\"\n  }), /*#__PURE__*/React.createElement(\"label\", {\n    htmlFor: \"pass2\"\n  }, \"Password: \"), /*#__PURE__*/React.createElement(\"input\", {\n    id: \"pass2\",\n    type: \"password\",\n    name: \"pass2\",\n    placeholder: \"retype password\"\n  }), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"hidden\",\n    name: \"_csrf\",\n    value: props.csrf\n  }), /*#__PURE__*/React.createElement(\"input\", {\n    className: \"formSubmit\",\n    type: \"submit\",\n    value: \"Sign in\"\n  }));\n};\n\nvar createLoginWindow = function createLoginWindow(csrf) {\n  ReactDOM.render( /*#__PURE__*/React.createElement(LoginWindow, {\n    csrf: csrf\n  }), document.querySelector('#content'));\n};\n\nvar createSignupWindow = function createSignupWindow(csrf) {\n  ReactDOM.render( /*#__PURE__*/React.createElement(SignupWindow, {\n    csrf: csrf\n  }), document.querySelector('#content'));\n};\n\nvar setup = function setup(csrf) {\n  var loginButton = document.querySelector('#loginButton');\n  var signupButton = document.querySelector('#signupButton');\n  signupButton.addEventListener('click', function (e) {\n    e.preventDefault();\n    $('#noteMessage').hide();\n    createSignupWindow(csrf);\n    return false;\n  });\n  loginButton.addEventListener('click', function (e) {\n    e.preventDefault();\n    $('#noteMessage').hide();\n    createLoginWindow(csrf);\n    return false;\n  });\n  createLoginWindow(csrf);\n};\n\nvar getToken = function getToken() {\n  helper.sendAjax('GET', '/getToken', null, function (result) {\n    setup(result.csrfToken);\n  });\n};\n\n$(document).ready(function () {\n  getToken();\n});\n\n//# sourceURL=webpack://Note-riety/./client/login/client.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./client/helper/helper.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./client/login/client.js");
/******/ 	
/******/ })()
;