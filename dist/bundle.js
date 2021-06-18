// [DozFakeVideoPlayer]  Build version: 1.0.1  
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _doz = __webpack_require__(0);

var _src = __webpack_require__(2);

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// expose component to global scope
function register() {
    if (typeof window !== 'undefined') {
        (0, _doz.define)('doz-fake-video-player', _src2.default);
        // Keep in mind to add a prefix like this: 'dwc-' to the name of the component you are going to define, 
        // this to prevent Doz from processing possible Web Components that have the same name as the Doz Components.
        (0, _doz.defineWebComponent)('dwc-doz-fake-video-player', _src2.default, ['interval', 'images', 'title', 'href', 'target', 'show-fake-play', 'refresh-cache-cycle']);
    }
}

register();

exports.default = _src2.default;


if (false) {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n            <style> \n                .container {\n                    position: relative;\n                    display: block;\n                    cursor: ", ";\n                }\n                \n                .frames {\n                    display: block;\n                }\n                \n                .fake-play {\n                    /*position: absolute;\n                    top: 50%;\n                    left: 50%;*/\n                    width: 20%;\n                    max-width: 160px;\n                    /*margin-left: -25px;\n                    margin-top: -25px;*/\n                    opacity: .8;\n                }\n                \n                .fake-play svg{\n                    fill: #fff\n                }\n                \n                .backdrop {\n                    position: absolute;\n                    width: 100%;\n                    height: 100%;\n                    left: 0;\n                    top: 0;\n                    background: rgba(0, 0, 0, .3);\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                }\n                \n                .frames img {\n                    width: 100%;\n                    display: block;\n                }\n            </style>\n            \n            <a title=\"", "\" alt=\"", "\" href=\"", "\" target=\"", "\" class=\"container\">\n                <div d-show=\"", "\" class=\"backdrop\">\n                    <", " class=\"fake-play\"/>\n                </div>\n                <div class=\"frames\">\n                    ", "\n                </div>\n            </a>\n        "], ["\n            <style> \n                .container {\n                    position: relative;\n                    display: block;\n                    cursor: ", ";\n                }\n                \n                .frames {\n                    display: block;\n                }\n                \n                .fake-play {\n                    /*position: absolute;\n                    top: 50%;\n                    left: 50%;*/\n                    width: 20%;\n                    max-width: 160px;\n                    /*margin-left: -25px;\n                    margin-top: -25px;*/\n                    opacity: .8;\n                }\n                \n                .fake-play svg{\n                    fill: #fff\n                }\n                \n                .backdrop {\n                    position: absolute;\n                    width: 100%;\n                    height: 100%;\n                    left: 0;\n                    top: 0;\n                    background: rgba(0, 0, 0, .3);\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                }\n                \n                .frames img {\n                    width: 100%;\n                    display: block;\n                }\n            </style>\n            \n            <a title=\"", "\" alt=\"", "\" href=\"", "\" target=\"", "\" class=\"container\">\n                <div d-show=\"", "\" class=\"backdrop\">\n                    <", " class=\"fake-play\"/>\n                </div>\n                <div class=\"frames\">\n                    ", "\n                </div>\n            </a>\n        "]),
    _templateObject2 = _taggedTemplateLiteral(["<img d-show=\"", "\" src=\"", "\" />"], ["<img d-show=\"", "\" src=\"", "\" />"]);

var _doz = __webpack_require__(0);

var _playSvg = __webpack_require__(3);

var _playSvg2 = _interopRequireDefault(_playSvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
    _inherits(_class, _Component);

    function _class(o) {
        _classCallCheck(this, _class);

        var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, o));

        _this.propsConvertOnFly = true;

        _this.props = {
            interval: 2000,
            images: [],
            title: '',
            href: 'javascript:void(0)',
            target: '',
            showFakePlay: true,
            refreshCacheCycle: 15,
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

    _createClass(_class, [{
        key: "template",
        value: function template(h) {
            var _this2 = this;

            //language=HTML
            return h(_templateObject, this.props.showFakePlay ? 'pointer' : 'default', this.props.title, this.props.title, this.props.href, this.props.target, this.props.showFakePlay, _playSvg2.default, this.props.images.map(function (url, i) {
                return h(_templateObject2, i === _this2.props._showIndex, _this2.cacheBuster(url));
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
                    _this3.updateCacheBuster();
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

    return _class;
}(_doz.Component);

exports.default = _class;
;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(["\n        <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n        viewBox=\"0 0 58.752 58.752\" style=\"enable-background:new 0 0 58.752 58.752;\" xml:space=\"preserve\">\n            <g>\n                <path d=\"M52.524,23.925L12.507,0.824c-1.907-1.1-4.376-1.097-6.276,0C4.293,1.94,3.088,4.025,3.088,6.264v46.205\n                c0,2.24,1.204,4.325,3.131,5.435c0.953,0.555,2.042,0.848,3.149,0.848c1.104,0,2.192-0.292,3.141-0.843l40.017-23.103\n                c1.936-1.119,3.138-3.203,3.138-5.439C55.663,27.134,54.462,25.05,52.524,23.925z M49.524,29.612L9.504,52.716\n                c-0.082,0.047-0.18,0.052-0.279-0.005c-0.084-0.049-0.137-0.142-0.137-0.242V6.263c0-0.1,0.052-0.192,0.14-0.243\n                c0.042-0.025,0.09-0.038,0.139-0.038c0.051,0,0.099,0.013,0.142,0.038l40.01,23.098c0.089,0.052,0.145,0.147,0.145,0.249\n                C49.663,29.47,49.611,29.561,49.524,29.612z\"/>\n            </g>\n        </svg>\n    "], ["\n        <svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n        viewBox=\"0 0 58.752 58.752\" style=\"enable-background:new 0 0 58.752 58.752;\" xml:space=\"preserve\">\n            <g>\n                <path d=\"M52.524,23.925L12.507,0.824c-1.907-1.1-4.376-1.097-6.276,0C4.293,1.94,3.088,4.025,3.088,6.264v46.205\n                c0,2.24,1.204,4.325,3.131,5.435c0.953,0.555,2.042,0.848,3.149,0.848c1.104,0,2.192-0.292,3.141-0.843l40.017-23.103\n                c1.936-1.119,3.138-3.203,3.138-5.439C55.663,27.134,54.462,25.05,52.524,23.925z M49.524,29.612L9.504,52.716\n                c-0.082,0.047-0.18,0.052-0.279-0.005c-0.084-0.049-0.137-0.142-0.137-0.242V6.263c0-0.1,0.052-0.192,0.14-0.243\n                c0.042-0.025,0.09-0.038,0.139-0.038c0.051,0,0.099,0.013,0.142,0.038l40.01,23.098c0.089,0.052,0.145,0.147,0.145,0.249\n                C49.663,29.47,49.611,29.561,49.524,29.612z\"/>\n            </g>\n        </svg>\n    "]);

exports.default = PlaySVG;

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function PlaySVG(h) {
    return h(_templateObject);
}

/***/ })
/******/ ]);
}); 