webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Header__ = __webpack_require__("./components/Header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);

var _jsxFileName = '/Users/luciana/Applications/Projects/swapiNext/pages/index.js';


(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

    enterModule && enterModule(module);
})();

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

var _default = Index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Index, 'Index', '/Users/luciana/Applications/Projects/swapiNext/pages/index.js');
    reactHotLoader.register(_default, 'default', '/Users/luciana/Applications/Projects/swapiNext/pages/index.js');
    leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.1c78898817127cea0a5b.hot-update.js.map