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

/***/ "./client/premium/premium.js":
/*!***********************************!*\
  !*** ./client/premium/premium.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var helper = __webpack_require__(/*! ./../helper/helper.js */ \"./client/helper/helper.js\");\n\nvar downgrade = function downgrade(csrf) {\n  helper.sendAjax('POST', '/premium', {\n    upgrade: false,\n    _csrf: csrf\n  }, function () {\n    setup(csrf);\n    helper.fetchAccount(function (account) {\n      return console.log(account);\n    });\n  });\n};\n\nvar upgrade = function upgrade(csrf) {\n  helper.sendAjax('POST', '/premium', {\n    upgrade: true,\n    _csrf: csrf\n  }, function (account) {\n    setup(csrf);\n    console.log(account);\n    helper.fetchAccount(function (account) {\n      return console.log(account);\n    });\n  });\n};\n\nvar PremiumOffers = function PremiumOffers(props) {\n  var user = props.user;\n  console.log(user);\n  var freeSec = /*#__PURE__*/React.createElement(\"div\", {\n    id: \"free\"\n  }, /*#__PURE__*/React.createElement(\"h3\", null, \"Free\"), /*#__PURE__*/React.createElement(\"p\", null, \"Yup, this is the free tier. You get all base functionality, plus some ads for your enjoyment :)\"), user.premium ? /*#__PURE__*/React.createElement(\"button\", {\n    id: \"freeSubmit\",\n    onClick: function onClick(e) {\n      downgrade(props.csrf);\n    }\n  }, \"Downgrade\") : /*#__PURE__*/React.createElement(\"button\", {\n    id: \"freeSubmit\",\n    onClick: function onClick(e) {\n      downgrade(props.csrf);\n    },\n    disabled: true\n  }, \"Currently activated!\"));\n  var premiumSec = /*#__PURE__*/React.createElement(\"div\", {\n    id: \"premium\"\n  }, /*#__PURE__*/React.createElement(\"h3\", null, \"Premium\"), /*#__PURE__*/React.createElement(\"p\", null, \"Here's the premium plan that costs.... nothing. :) Just click the button.\"), user.premium ? /*#__PURE__*/React.createElement(\"button\", {\n    id: \"premiumSubmit\",\n    onClick: function onClick(e) {\n      upgrade(props.csrf);\n    },\n    disabled: true\n  }, \"Currently activated!\") : /*#__PURE__*/React.createElement(\"button\", {\n    id: \"premiumSubmit\",\n    onClick: function onClick(e) {\n      upgrade(props.csrf);\n    }\n  }, \"Upgrade\"));\n  return /*#__PURE__*/React.createElement(\"div\", {\n    id: \"offersWrapper\"\n  }, /*#__PURE__*/React.createElement(\"h2\", null, \"Wow! Look at all of your plans! Pick your favorite:\"), /*#__PURE__*/React.createElement(\"div\", {\n    id: \"offers\"\n  }, freeSec, premiumSec));\n};\n\nvar setup = function setup(csrf) {\n  helper.fetchAccount(function (data) {\n    ReactDOM.render( /*#__PURE__*/React.createElement(PremiumOffers, {\n      user: data.account,\n      csrf: csrf\n    }), document.querySelector('#content'));\n  });\n};\n\nvar getToken = function getToken() {\n  helper.sendAjax('GET', '/getToken', null, function (result) {\n    setup(result.csrfToken);\n  });\n};\n\n$(function () {\n  getToken();\n});\n\n//# sourceURL=webpack://Note-riety/./client/premium/premium.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./client/premium/premium.js");
/******/ 	
/******/ })()
;