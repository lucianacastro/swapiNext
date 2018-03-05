module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
var _jsxFileName = '/Users/luciana/Applications/Projects/swapiNext/components/Header.js';




var Header = function Header() {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'header',
        {
            className: 'jsx-2369532243',
            __source: {
                fileName: _jsxFileName,
                lineNumber: 4
            }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 5
                }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'ul',
                {
                    className: 'jsx-2369532243',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 6
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'li',
                    {
                        className: 'jsx-2369532243',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 7
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'a',
                        {
                            className: 'jsx-2369532243',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 8
                            }
                        },
                        'People'
                    )
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'ul',
                {
                    className: 'jsx-2369532243',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 13
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'li',
                    {
                        className: 'jsx-2369532243',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 14
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'a',
                        {
                            className: 'jsx-2369532243',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 15
                            }
                        },
                        'Starships'
                    )
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'ul',
                {
                    className: 'jsx-2369532243',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'li',
                    {
                        className: 'jsx-2369532243',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'a',
                        {
                            className: 'jsx-2369532243',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 22
                            }
                        },
                        'Species'
                    )
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_next_link___default.a,
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'ul',
                {
                    className: 'jsx-2369532243',
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'li',
                    {
                        className: 'jsx-2369532243',
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 28
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                        'a',
                        {
                            className: 'jsx-2369532243',
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 29
                            }
                        },
                        'Planets'
                    )
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
            styleId: '2369532243',
            css: 'header.jsx-2369532243{display:block;width:100%;height:100px;background-color:#000;}ul.jsx-2369532243{display:inline-block;list-style-type:none;}a.jsx-2369532243{color:#fff;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDcUIsQUFHK0IsQUFNTyxBQVNWLFdBQ1UsR0FmVixPQU1VLElBTFIsT0FlakIsTUFkMEIsSUFLMUIsa0JBSkEiLCJmaWxlIjoiY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2x1Y2lhbmEvQXBwbGljYXRpb25zL1Byb2plY3RzL3N3YXBpTmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICAgIDxoZWFkZXI+XG4gICAgICAgIDxMaW5rPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGE+UGVvcGxlPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGE+U3RhcnNoaXBzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxMaW5rPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGE+U3BlY2llczwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluaz5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxhPlBsYW5ldHM8L2E+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD4ge2BcbiAgICAgICAgICAgIGhlYWRlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lOyBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG5cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2hlYWRlcj5cbilcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdfQ== */\n/*@ sourceURL=components/Header.js */'
        })
    );
};
/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);

var _jsxFileName = '/Users/luciana/Applications/Projects/swapiNext/pages/index.js';


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var Index = function Index(props) {
    return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Header__["a" /* default */], {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h1',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 7
                }
            },
            'People'
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'ul',
            {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            },
            props.people.map(function (person) {
                return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                    'li',
                    { key: person.name, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 10
                        }
                    },
                    person.name
                );
            })
        )
    );
};

Index.getInitialProps = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
    var counter, basicUrl, res, data, people;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    counter = 0;
                    basicUrl = 'https://swapi.co/api/people/';
                    _context.next = 4;
                    return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()('https://swapi.co/api/people/');

                case 4:
                    res = _context.sent;
                    _context.next = 7;
                    return res.json();

                case 7:
                    data = _context.sent;
                    people = [];

                    people.push(data.results);

                case 10:
                    if (!(data.result != null)) {
                        _context.next = 19;
                        break;
                    }

                    counter++;
                    _context.next = 14;
                    return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()(basicUrl + '?page=' + counter);

                case 14:
                    res = _context.sent;

                    console.log('esta es la url:' + res);
                    people.push(data.results);
                    _context.next = 10;
                    break;

                case 19:
                    console.log('Show data fetched. Count: ' + data.results.length);
                    console.log('esta es al lista:' + people);
                    return _context.abrupt('return', {
                        people: people
                    });

                case 22:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
}));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map