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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/views/partials/footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = 'C:\\Users\\\xD6zge Kocao\u011Flu\\Desktop\\Projects\\Eteration\\2020-bootcamp-team-6\\components\\views\\partials\\footer.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
*
* Header
*
*/




var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        // eslint-disable-line react/prefer-stateless-function

        value: function render() {
            var _props = this.props,
                footer = _props.footer,
                contactInfo = _props.contactInfo,
                social = _props.social;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'footer',
                    { id: 'footer', style: { backgroundColor: '#f8f8f8', borderTop: '1px solid #e7e7e7', marginTop: '5%' }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'container', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 18
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'row', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 19
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-sm-8', style: { marginTop: '50px' }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 20
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'label',
                                    { className: 'mb-20', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 21
                                        }
                                    },
                                    'Contact Us'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 22
                                    }
                                }),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 23
                                    }
                                }),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'label',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 24
                                        }
                                    },
                                    'Phone:'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 25
                                    }
                                }),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'p',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 26
                                        }
                                    },
                                    contactInfo.phone
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'label',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 27
                                        }
                                    },
                                    'Email:'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 28
                                    }
                                }),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'p',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 29
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'a',
                                        { href: 'mailto:' + contactInfo.email, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 29
                                            }
                                        },
                                        contactInfo.email
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'label',
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 30
                                        }
                                    },
                                    'Address:'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 30
                                    }
                                }),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { dangerouslySetInnerHTML: { __html: contactInfo.address }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 31
                                    }
                                })
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'col-sm-4', style: { marginTop: '50px' }, __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 33
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'h4',
                                    { className: 'mb-20', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 34
                                        }
                                    },
                                    'Connect'
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'mb-20', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 35
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 36
                                        }
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'a',
                                        { className: 'mr-10', style: { marginRight: '10px' }, href: social.facebook, target: '_blank', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 37
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-facebook', style: { fontSize: '26px' }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 38
                                            }
                                        })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'a',
                                        { className: 'mr-10', style: { marginRight: '10px' }, href: social.twitter, target: '_blank', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 40
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-twitter', style: { fontSize: '26px' }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 41
                                            }
                                        })
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'a',
                                        { className: 'mr-10', style: { marginRight: '10px' }, href: social.google_plus, target: '_blank', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 43
                                            }
                                        },
                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-google-plus', style: { fontSize: '26px' }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 44
                                            }
                                        })
                                    )
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 47
                                    }
                                }),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'div',
                                    { className: 'mb-20', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 48
                                        }
                                    },
                                    ' \xA9 2018 ',
                                    footer.company_title
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 50
                                    }
                                }),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 51
                                    }
                                }),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'a',
                                    { href: 'https://cosmicjs.com', target: '_blank', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 52
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'pull-left mr-15 relative', src: 'https://cosmicjs.com/images/logo.svg', width: '28', height: '28', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 53
                                        }
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'span',
                                        { style: { marginLeft: '10px', color: '#666' }, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 54
                                            }
                                        },
                                        'Proudly powered by Cosmic JS'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/views/partials/header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = 'C:\\Users\\\xD6zge Kocao\u011Flu\\Desktop\\Projects\\Eteration\\2020-bootcamp-team-6\\components\\views\\partials\\header.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
*
* Header
*
*/




var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        // eslint-disable-line react/prefer-stateless-function

        value: function render() {
            var _props = this.props,
                header = _props.header,
                nav = _props.nav;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 16
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'container text-center', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'a',
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 18
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: header.metadata.logo.url, alt: '', height: '60px;', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 18
                            }
                        })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'nav',
                    { className: 'navbar navbar-default', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 20
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'container-fluid', style: { marginLeft: '25%' }, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 21
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'navbar-header', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 22
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'container', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 23
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'button',
                                    { type: 'button', className: 'navbar-toggle', 'data-toggle': 'collapse', 'data-target': '#myNavbar', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 24
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon-bar', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 25
                                        }
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon-bar', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 26
                                        }
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon-bar', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 27
                                        }
                                    })
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'collapse navbar-collapse', id: 'myNavbar', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 31
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'ul',
                                { className: 'nav navbar-nav', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 32
                                    }
                                },
                                !!nav.metafields && nav.metafields.map(function (navElement, index) {
                                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'li',
                                        { key: 'nav_' + index, __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 35
                                            }
                                        },
                                        !navElement.children && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                                            { href: navElement.value, __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 38
                                                }
                                            },
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                'a',
                                                {
                                                    __source: {
                                                        fileName: _jsxFileName,
                                                        lineNumber: 38
                                                    }
                                                },
                                                navElement.title
                                            )
                                        ),
                                        !!navElement.children && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'a',
                                            { className: 'dropdown-toggle', 'data-toggle': 'dropdown', href: '#', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 41
                                                }
                                            },
                                            navElement.title,
                                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'caret', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 41
                                                }
                                            })
                                        ),
                                        !!navElement.children && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                            'ul',
                                            { className: 'dropdown-menu', __source: {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 42
                                                }
                                            },
                                            navElement.children.map(function (child, index) {
                                                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                    'li',
                                                    { key: 'child_' + index, __source: {
                                                            fileName: _jsxFileName,
                                                            lineNumber: 45
                                                        }
                                                    },
                                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                        __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                                                        { href: child.value[0] == '/' ? child.value : '/' + child.value, __source: {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 46
                                                            }
                                                        },
                                                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                                            'a',
                                                            {
                                                                __source: {
                                                                    fileName: _jsxFileName,
                                                                    lineNumber: 46
                                                                }
                                                            },
                                                            child.title
                                                        )
                                                    )
                                                );
                                            })
                                        )
                                    );
                                })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),

/***/ "./components/views/search.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = 'C:\\Users\\\xD6zge Kocao\u011Flu\\Desktop\\Projects\\Eteration\\2020-bootcamp-team-6\\components\\views\\search.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Search = function (_React$Component) {
    _inherits(Search, _React$Component);

    function Search() {
        _classCallCheck(this, Search);

        return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).apply(this, arguments));
    }

    _createClass(Search, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                searchResult = _props.searchResult,
                searchField = _props.searchField,
                handleChange = _props.handleChange;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 7
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'container', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 8
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { id: 'imaginary_container', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 9
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'h1',
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 10
                                }
                            },
                            'Search'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'form-group', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 11
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', value: searchField, className: 'form-control', onChange: handleChange, placeholder: 'Search', style: { height: '44px' }, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 12
                                }
                            })
                        )
                    ),
                    !!searchResult && searchResult.map(function (s, index) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { key: 'search_' + index, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 17
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'h2',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 18
                                    }
                                },
                                s.title
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'p',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 21
                                    }
                                },
                                s.teaser
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 24
                                    }
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    __WEBPACK_IMPORTED_MODULE_1_next_link___default.a,
                                    { href: s.permalink, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 25
                                        }
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'a',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 25
                                            }
                                        },
                                        'Read more'
                                    )
                                )
                            )
                        );
                    })
                )
            );
        }
    }]);

    return Search;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Search);

/***/ }),

/***/ "./components/widgets/Meta/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nprogress__ = __webpack_require__("nprogress");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_router__);
var _jsxFileName = 'C:\\Users\\\xD6zge Kocao\u011Flu\\Desktop\\Projects\\Eteration\\2020-bootcamp-team-6\\components\\widgets\\Meta\\index.js';




__WEBPACK_IMPORTED_MODULE_2_next_router___default.a.onRouteChangeStart = function () {
  return __WEBPACK_IMPORTED_MODULE_1_nprogress___default.a.start();
};
__WEBPACK_IMPORTED_MODULE_2_next_router___default.a.onRouteChangeComplete = function () {
  return __WEBPACK_IMPORTED_MODULE_1_nprogress___default.a.done();
};
__WEBPACK_IMPORTED_MODULE_2_next_router___default.a.onRouteChangeError = function () {
  return __WEBPACK_IMPORTED_MODULE_1_nprogress___default.a.done();
};

/* harmony default export */ __webpack_exports__["a"] = (function (props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    },
    props.children
  );
});

/***/ }),

/***/ "./config/index.js":
/***/ (function(module, exports) {

module.exports = {
  bucket: {
    slug: process && process.env && process.env.COSMIC_BUCKET || undefined || 'nextjs-medical-website',
    read_key: process && process.env && process.env.COSMIC_READ_KEY || undefined,
    write_key: process && process.env && process.env.COSMIC_WRITE_KEY || undefined
  },
  env: {
    SENDGRID_FUNCTION_ENDPOINT: process && process.env && process.env.SENDGRID_FUNCTION_ENDPOINT || undefined || 'https://xmzcgubnyi.execute-api.us-east-1.amazonaws.com/dev/send-email'
  }
};

/***/ }),

/***/ "./pages/search.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_helperFuncs__ = __webpack_require__("./utils/helperFuncs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_widgets_Meta__ = __webpack_require__("./components/widgets/Meta/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_views_search__ = __webpack_require__("./components/views/search.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_views_partials_header__ = __webpack_require__("./components/views/partials/header.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_views_partials_footer__ = __webpack_require__("./components/views/partials/footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_request__ = __webpack_require__("./utils/request.js");

var _jsxFileName = 'C:\\Users\\\xD6zge Kocao\u011Flu\\Desktop\\Projects\\Eteration\\2020-bootcamp-team-6\\pages\\search.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var SearchPage = function (_React$Component) {
  _inherits(SearchPage, _React$Component);

  _createClass(SearchPage, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var req = _ref.req,
            query = _ref.query;
        var Response, bucketResponse, searchResponse, bucket, search, globals;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return __WEBPACK_IMPORTED_MODULE_8__utils_request__["a" /* default */].getGlobals();

              case 2:
                Response = _context.sent;
                _context.next = 5;
                return __WEBPACK_IMPORTED_MODULE_8__utils_request__["a" /* default */].getObjects();

              case 5:
                bucketResponse = _context.sent;
                _context.next = 8;
                return __WEBPACK_IMPORTED_MODULE_8__utils_request__["a" /* default */].getObject('search');

              case 8:
                searchResponse = _context.sent;
                bucket = bucketResponse.objects;
                search = searchResponse.object;
                globals = Object(__WEBPACK_IMPORTED_MODULE_2__utils_helperFuncs__["a" /* mapGlobals */])(Response.objects);
                return _context.abrupt('return', { globals: globals, bucket: bucket, search: search });

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref2.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function SearchPage(props) {
    _classCallCheck(this, SearchPage);

    var _this = _possibleConstructorReturn(this, (SearchPage.__proto__ || Object.getPrototypeOf(SearchPage)).call(this, props));

    _this.handleChange = function (event) {
      var value = event.target.value;
      var searchField = _this.state.searchField;
      searchField = value;
      _this.setState({ searchField: searchField });
      var objects = _this.state.bucket;
      var searchResult = _this.state.searchResult;
      var search_results = [];
      var query = value;
      if (!!query) {
        objects.forEach(function (object) {
          if (object.title.toLowerCase().indexOf(query) !== -1 || object.content.toLowerCase().indexOf(query) !== -1) {
            object.teaser = object.content.replace(/(<([^>]+)>)/ig, "").substring(0, 300);
            if (object.type_slug === 'blogs') object.permalink = '/blog/' + object.slug;else object.permalink = '/' + object.slug;
            search_results.push(object);
          }
          if (!_.find(search_results, { _id: object._id })) {
            object.metafields.forEach(function (metafield) {
              if (metafield.value.toLowerCase().indexOf(query) !== -1 && !_.find(search_results, { _id: object._id })) {
                object.teaser = object.content.replace(/(<([^>]+)>)/ig, "").substring(0, 300);
                if (object.type_slug === 'blogs') object.permalink = '/blog/' + object.slug;else object.permalink = '/' + object.slug;
                search_results.push(object);
              }
            });
          }
        });
      }
      searchResult = search_results;
      _this.setState({ searchResult: searchResult });
    };

    _this.state = {
      header: props.globals.header,
      contact_form: props.globals.contact_form,
      nav: props.globals.nav,
      social: props.globals.social,
      contactInfo: props.globals.contact_info.metadata,
      footer: props.globals.footer,
      bucket: props.bucket,
      searchResult: '',
      searchField: '',
      search: props.search
    };
    return _this;
  }

  _createClass(SearchPage, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4__components_widgets_Meta__["a" /* default */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'title',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 80
              }
            },
            'Medical Professional ~ Cosmic JS Next Js App'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('meta', { name: 'description', content: this.state.search.metadata.seo_description.value, __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'icon', type: 'image/png', href: this.state.header.metadata.favicon.imgix_url + '?w=32', sizes: '32x32', __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'icon', type: 'image/png', href: this.state.header.metadata.favicon.imgix_url + '?w=16', sizes: '16x16', __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_views_partials_header__["a" /* default */], { header: this.state.header, nav: this.state.nav, __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_views_search__["a" /* default */], { handleChange: this.handleChange, searchField: this.state.searchField, searchResult: this.state.searchResult, __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_views_partials_footer__["a" /* default */], { footer: this.state.footer, social: this.state.social, contactInfo: this.state.contactInfo, __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          }
        })
      );
    }
  }]);

  return SearchPage;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SearchPage);

/***/ }),

/***/ "./utils/helperFuncs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapGlobals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapHome; });
/* unused harmony export mapFaqs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);



var mapGlobals = function mapGlobals(globals) {
  var response = {};
  globals.map(function (global) {
    switch (global.slug) {
      case 'contact-form':
        response.contact_form = global;
        break;
      case 'header':
        response.header = global;
        break;
      case 'nav':
        response.nav = global;
        break;
      case 'social':
        response.social = global;
        break;
      case 'contact-info':
        response.contact_info = global;
        break;
      case 'footer':
        response.footer = global;
        break;
    }
  });
  return response;
};

var mapHome = function mapHome(data) {
  var home = {};
  data.metafields.map(function (obj) {
    if (obj.key == 'carousel' || obj.key == 'blurbs') {
      home[obj.key] = obj.children;
    } else home[obj.key] = obj;
  });
  return home;
};

var mapFaqs = function mapFaqs(data) {
  var faqs = {};
  faqs.title = 'FAQs';
  data.metafields.map(function (obj) {
    faqs[obj.key] = obj.children;
  });
  return faqs;
};

/***/ }),

/***/ "./utils/request.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cosmicjs__ = __webpack_require__("cosmicjs");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cosmicjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_cosmicjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__("./config/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);


var contactForm = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(data, contact) {
    var saveForm = function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(data) {
        var params, response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                //Send to Cosmic
                params = {
                  type_slug: 'form-submissions',
                  title: data.name,
                  content: data.message,

                  metafields: [{
                    title: 'Email',
                    key: 'email',
                    type: 'text',
                    value: data.email
                  }, {
                    title: 'Phone',
                    key: 'phone',
                    type: 'text',
                    value: data.phone
                  }]
                  // Write to Cosmic Bucket (Optional)
                };
                _context.next = 3;
                return bucket.addObject(params);

              case 3:
                response = _context.sent;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function saveForm(_x3) {
        return _ref2.apply(this, arguments);
      };
    }();

    var message, email_data, url;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (__WEBPACK_IMPORTED_MODULE_2__config___default.a.env.SENDGRID_FUNCTION_ENDPOINT) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt('return', {
              status: false,
              message: "You must add a SendGrid Function Endpoint URL.  Contact your developer to add this value."
            });

          case 4:
            _context2.prev = 4;
            message = 'Name:<br>' + data.name + '<br><br>' + 'Subject:<br>' + contact.metadata.subject + '<br><br>' + 'Message:<br>' + data.message + '<br><br>';
            email_data = {
              from: data.email,
              to: contact.metadata.to,
              subject: data.name + ' sent you a new message',
              text_body: message,
              html_body: message
            };
            url = __WEBPACK_IMPORTED_MODULE_2__config___default.a.env.SENDGRID_FUNCTION_ENDPOINT;
            _context2.next = 10;
            return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post(url, email_data);

          case 10:
            saveForm(data);
            return _context2.abrupt('return', {
              status: true,
              message: 'Success.'
            });

          case 14:
            _context2.prev = 14;
            _context2.t0 = _context2['catch'](4);
            return _context2.abrupt('return', {
              status: false,
              message: "You must add a SendGrid Function Endpoint URL.  Contact your developer to add this value."
            });

          case 17:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[4, 14]]);
  }));

  return function contactForm(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





var api = __WEBPACK_IMPORTED_MODULE_1_cosmicjs___default()();
var bucket = api.bucket({
  slug: __WEBPACK_IMPORTED_MODULE_2__config___default.a.bucket.slug,
  read_key: __WEBPACK_IMPORTED_MODULE_2__config___default.a.bucket.read_key,
  write_key: __WEBPACK_IMPORTED_MODULE_2__config___default.a.bucket.write_key
});

function getGlobals() {
  var params = {
    type_slug: 'globals'
  };
  return bucket.getObjectsByType(params);
}

function getPages() {
  var params = {
    type_slug: 'pages'
  };
  return bucket.getObjectsByType(params);
}

function getObject(slug) {
  var params = {
    slug: slug
  };
  return bucket.getObject(params);
}

function getObjects() {
  var params = {};
  return bucket.getObjects(params);
}

function getBlogs() {
  var params = {
    type_slug: 'blogs'
  };
  return bucket.getObjectsByType(params);
}

/* harmony default export */ __webpack_exports__["a"] = ({
  getGlobals: getGlobals,
  getPages: getPages,
  getBlogs: getBlogs,
  getObject: getObject,
  contactForm: contactForm,
  getObjects: getObjects
});

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/search.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "cosmicjs":
/***/ (function(module, exports) {

module.exports = require("cosmicjs");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=search.js.map