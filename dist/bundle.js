// [DozFakeVideoPlayer]  Build version: 1.0.6  
 (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("doz"));
	else if(typeof define === 'function' && define.amd)
		define("DozFakeVideoPlayer", ["doz"], factory);
	else if(typeof exports === 'object')
		exports["DozFakeVideoPlayer"] = factory(require("doz"));
	else
		root["DozFakeVideoPlayer"] = factory(root["Doz"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"commonjs":"doz","commonjs2":"doz","amd":"doz","root":"Doz"}
var external_commonjs_doz_commonjs2_doz_amd_doz_root_Doz_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/play-svg.js
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function PlaySVG(h) {
  return h(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n        viewBox=\"0 0 58.752 58.752\" style=\"enable-background:new 0 0 58.752 58.752;\" xml:space=\"preserve\">\n            <g>\n                <path d=\"M52.524,23.925L12.507,0.824c-1.907-1.1-4.376-1.097-6.276,0C4.293,1.94,3.088,4.025,3.088,6.264v46.205\n                c0,2.24,1.204,4.325,3.131,5.435c0.953,0.555,2.042,0.848,3.149,0.848c1.104,0,2.192-0.292,3.141-0.843l40.017-23.103\n                c1.936-1.119,3.138-3.203,3.138-5.439C55.663,27.134,54.462,25.05,52.524,23.925z M49.524,29.612L9.504,52.716\n                c-0.082,0.047-0.18,0.052-0.279-0.005c-0.084-0.049-0.137-0.142-0.137-0.242V6.263c0-0.1,0.052-0.192,0.14-0.243\n                c0.042-0.025,0.09-0.038,0.139-0.038c0.051,0,0.099,0.013,0.142,0.038l40.01,23.098c0.089,0.052,0.145,0.147,0.145,0.249\n                C49.663,29.47,49.611,29.561,49.524,29.612z\"/>\n            </g>\n        </svg>\n    "])));
}
// CONCATENATED MODULE: ./src/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var src_templateObject, _templateObject2;

function src_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var src_FakeVideoPlayer = /*#__PURE__*/function (_Component) {
  _inherits(FakeVideoPlayer, _Component);

  var _super = _createSuper(FakeVideoPlayer);

  function FakeVideoPlayer(o) {
    var _this;

    _classCallCheck(this, FakeVideoPlayer);

    _this = _super.call(this, o);
    _this.propsConvertOnFly = true;
    _this.props = {
      interval: 2000,
      images: [],
      title: '',
      href: 'javascript:void(0)',
      target: '',
      showFakePlay: true,
      refreshCacheCycle: 15,
      stopDownload: false,
      _showIndex: 0,
      _lastCacheBuster: new Date().getTime()
    };
    _this._cycle = 0;
    _this.propsConvert = {
      images: function images(v) {
        if (typeof v === 'string') {
          if (v[0] === '[') {
            var tmpV = v.replace(/'|&apos;/g, '"');
            tmpV = JSON.parse(tmpV);
            v = tmpV;
          }
        }

        return v;
      }
    };
    return _this;
  }

  _createClass(FakeVideoPlayer, [{
    key: "template",
    value: function template(h) {
      var _this2 = this;

      //language=HTML
      return h(src_templateObject || (src_templateObject = src_taggedTemplateLiteral(["\n            <style> \n                .container {\n                    position: relative;\n                    display: block;\n                    cursor: ", ";\n                    background: #000;\n                    padding-bottom: 56.25%; \n                    height:0;\n                    overflow: hidden;\n                }\n                \n                .frames {\n                    display: block;\n                }\n                \n                .fake-play {\n                    width: 20%;\n                    max-width: 160px;\n                    opacity: .8;\n                    transition: all 300ms;\n                }\n                \n                .fake-play svg{\n                    fill: #fff\n                }\n                \n                .backdrop {\n                    position: absolute;\n                    width: 100%;\n                    height: 100%;\n                    left: 0;\n                    top: 0;\n                    background: rgba(0, 0, 0, .3);\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                }\n                \n                .backdrop:hover .fake-play {\n                    opacity: 1;\n                    width: 25%;\n                    max-width: 180px;\n                }\n                \n                .frames img {\n                    width: 100%;\n                    display: block;\n                }\n            </style>\n            \n            <a title=\"", "\" alt=\"", "\" href=\"", "\" target=\"", "\" class=\"container\">\n                <div d-show=\"", "\" class=\"backdrop\">\n                    <", " class=\"fake-play\"/>\n                </div>\n                <div class=\"frames\">\n                    ", "\n                </div>\n            </a>\n        "])), this.props.showFakePlay ? 'pointer' : 'default', this.props.title, this.props.title, this.props.href, this.props.target, this.props.showFakePlay, PlaySVG, this.props.images.map(function (url, i) {
        return h(_templateObject2 || (_templateObject2 = src_taggedTemplateLiteral(["<img d-show=\"", "\" src=\"", "\" />"])), i === _this2.props._showIndex, _this2.cacheBuster(url));
      }));
    }
  }, {
    key: "onMount",
    value: function onMount() {
      var _this3 = this;

      setInterval(function () {
        _this3.props._showIndex = ++_this3.props._showIndex % _this3.props.images.length;

        if (_this3._cycle === _this3.props.refreshCacheCycle) {
          _this3._cycle = 0;
          if (!_this3.props.stopDownload) _this3.updateCacheBuster();
        } else {
          _this3._cycle++;
        }
      }, this.props.interval);
    }
  }, {
    key: "cacheBuster",
    value: function cacheBuster(url) {
      return url + '?_cb=' + this.props._lastCacheBuster;
    }
  }, {
    key: "updateCacheBuster",
    value: function updateCacheBuster() {
      this.props._lastCacheBuster = new Date().getTime();
    }
  }]);

  return FakeVideoPlayer;
}(external_commonjs_doz_commonjs2_doz_amd_doz_root_Doz_["Component"]);


;
// CONCATENATED MODULE: ./index.js

 // expose component to global scope

function register() {
  if (typeof window !== 'undefined') {
    Object(external_commonjs_doz_commonjs2_doz_amd_doz_root_Doz_["define"])('doz-fake-video-player', src_FakeVideoPlayer); // Keep in mind to add a prefix like this: 'dwc-' to the name of the component you are going to define, 
    // this to prevent Doz from processing possible Web Components that have the same name as the Doz Components.

    Object(external_commonjs_doz_commonjs2_doz_amd_doz_root_Doz_["defineWebComponent"])('dwc-doz-fake-video-player', src_FakeVideoPlayer, ['interval', 'images', 'title', 'href', 'target', 'show-fake-play', 'refresh-cache-cycle', 'stop-download']);
  }
}

register();
/* harmony default export */ var index = __webpack_exports__["default"] = (src_FakeVideoPlayer);

if (false) {}

/***/ })
/******/ ]);
}); 