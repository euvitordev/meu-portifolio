"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/header/header.tsx":
/*!******************************************!*\
  !*** ./src/components/header/header.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Coffee_PanelLeft_Settings_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Coffee,PanelLeft,Settings!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/coffee.js\");\n/* harmony import */ var _barrel_optimize_names_Coffee_PanelLeft_Settings_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Coffee,PanelLeft,Settings!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/settings.js\");\n/* harmony import */ var _barrel_optimize_names_Coffee_PanelLeft_Settings_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Coffee,PanelLeft,Settings!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/panel-left.js\");\n/* harmony import */ var _components_ui_dropdown_menu_demo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components-ui/dropdown-menu-demo */ \"(app-pages-browser)/./src/components/components-ui/dropdown-menu-demo.tsx\");\n/* harmony import */ var _components_ui_header_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components-ui/header-sheet */ \"(app-pages-browser)/./src/components/components-ui/header-sheet.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Header() {\n    _s();\n    const [currentPath, setCurrentPath] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [isHeaderFixed, setIsHeaderFixed] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        setCurrentPath(window.location.pathname);\n        const handleScroll = ()=>{\n            if (window.scrollY > 0) {\n                setIsHeaderFixed(true);\n            } else {\n                setIsHeaderFixed(false);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    const isProjectsPage = (path)=>{\n        return path.includes(\"/projetos\");\n    };\n    const navLinks = [\n        {\n            name: \"In\\xedcio\",\n            link: \"/\"\n        },\n        {\n            name: \"Sobre\",\n            link: \"#\"\n        },\n        {\n            name: \"Projetos\",\n            link: \"/projetos\"\n        },\n        {\n            name: \"Tecnologias\",\n            link: \"/tecnologias-e-ferramentas\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex w-full max-w-5xl items-center justify-between gap-2 max-md:w-full \".concat(isHeaderFixed ? \"left-50 right-50 fixed top-0 z-50 w-full max-w-6xl bg-white px-16 py-4 max-lg:px-8 dark:bg-zinc-900\" : \"\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: \"/\",\n                    className: \"flex cursor-pointer items-center gap-4 text-xl font-bold underline-offset-8 opacity-50 transition-all delay-75 duration-300 ease-in-out hover:underline hover:opacity-100\",\n                    children: [\n                        \"Vitor\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Coffee_PanelLeft_Settings_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            size: 16,\n                            className: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\devvi\\\\Downloads\\\\meu-portifolio-master\\\\meu-portifolio-master\\\\src\\\\components\\\\header\\\\header.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\devvi\\\\Downloads\\\\meu-portifolio-master\\\\meu-portifolio-master\\\\src\\\\components\\\\header\\\\header.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center justify-between gap-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"flex items-center gap-6 max-lg:hidden\",\n                            children: navLinks.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    href: item.link,\n                                    className: \"cursor-pointer font-bold underline-offset-8 transition-all delay-75 duration-300 ease-in-out hover:underline hover:opacity-100 \".concat(isProjectsPage(currentPath) && item.name === \"Projetos\" ? \"underline underline-offset-8 opacity-100\" : currentPath === item.link ? \"underline underline-offset-8 opacity-100\" : \"opacity-50 hover:underline hover:opacity-100\"),\n                                    children: item.name\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\devvi\\\\Downloads\\\\meu-portifolio-master\\\\meu-portifolio-master\\\\src\\\\components\\\\header\\\\header.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\devvi\\\\Downloads\\\\meu-portifolio-master\\\\meu-portifolio-master\\\\src\\\\components\\\\header\\\\header.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center gap-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_dropdown_menu_demo__WEBPACK_IMPORTED_MODULE_2__.DropdownMenuDemo, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Coffee_PanelLeft_Settings_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        size: 18,\n                                        className: \"transition-all delay-100 duration-500 ease-in-out group-hover:-rotate-180\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\devvi\\\\Downloads\\\\meu-portifolio-master\\\\meu-portifolio-master\\\\src\\\\components\\\\header\\\\header.tsx\",\n                                        lineNumber: 94,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\devvi\\\\Downloads\\\\meu-portifolio-master\\\\meu-portifolio-master\\\\src\\\\components\\\\header\\\\header.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_header_sheet__WEBPACK_IMPORTED_MODULE_3__.HeaderSheet, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Coffee_PanelLeft_Settings_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        size: 18\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\devvi\\\\Downloads\\\\meu-portifolio-master\\\\meu-portifolio-master\\\\src\\\\components\\\\header\\\\header.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\devvi\\\\Downloads\\\\meu-portifolio-master\\\\meu-portifolio-master\\\\src\\\\components\\\\header\\\\header.tsx\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\devvi\\\\Downloads\\\\meu-portifolio-master\\\\meu-portifolio-master\\\\src\\\\components\\\\header\\\\header.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\devvi\\\\Downloads\\\\meu-portifolio-master\\\\meu-portifolio-master\\\\src\\\\components\\\\header\\\\header.tsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\devvi\\\\Downloads\\\\meu-portifolio-master\\\\meu-portifolio-master\\\\src\\\\components\\\\header\\\\header.tsx\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Header, \"YxAiUStigcdIxbJDWKMtP6AU4Ys=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFDOEI7QUFDWTtBQUNYO0FBQ2hCO0FBRTdCLFNBQVNROztJQUN0QixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0osK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDSyxlQUFlQyxpQkFBaUIsR0FBR04sK0NBQVFBLENBQUM7SUFFbkRDLGdEQUFTQSxDQUFDO1FBQ1JHLGVBQWVHLE9BQU9DLFFBQVEsQ0FBQ0MsUUFBUTtRQUV2QyxNQUFNQyxlQUFlO1lBQ25CLElBQUlILE9BQU9JLE9BQU8sR0FBRyxHQUFHO2dCQUN0QkwsaUJBQWlCO1lBQ25CLE9BQU87Z0JBQ0xBLGlCQUFpQjtZQUNuQjtRQUNGO1FBQ0FDLE9BQU9LLGdCQUFnQixDQUFDLFVBQVVGO1FBQ2xDLE9BQU87WUFDTEgsT0FBT00sbUJBQW1CLENBQUMsVUFBVUg7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNSSxpQkFBaUIsQ0FBQ0M7UUFDdEIsT0FBT0EsS0FBS0MsUUFBUSxDQUFDO0lBQ3ZCO0lBRUEsTUFBTUMsV0FBVztRQUNmO1lBQ0VDLE1BQU07WUFDTkMsTUFBTTtRQUNSO1FBQ0E7WUFDRUQsTUFBTTtZQUNOQyxNQUFNO1FBQ1I7UUFDQTtZQUNFRCxNQUFNO1lBQ05DLE1BQU07UUFDUjtRQUNBO1lBQ0VELE1BQU07WUFDTkMsTUFBTTtRQUNSO0tBU0Q7SUFDRCxxQkFDRTtrQkFDRSw0RUFBQ0M7WUFDQ0MsV0FBVywwRUFJVixPQUhDaEIsZ0JBQ0ksd0dBQ0E7OzhCQUdOLDhEQUFDWCxrREFBSUE7b0JBQ0g0QixNQUFLO29CQUNMRCxXQUFVOzt3QkFDWDtzQ0FFQyw4REFBQzFCLHFHQUFNQTs0QkFBQzRCLE1BQU07NEJBQUlGLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFFOUIsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQUlILFdBQVU7c0NBQ1pKLFNBQVNRLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDbkIsOERBQUNqQyxrREFBSUE7b0NBRUg0QixNQUFNSSxLQUFLUCxJQUFJO29DQUNmRSxXQUFXLGtJQU1WLE9BTENQLGVBQWVYLGdCQUFnQnVCLEtBQUtSLElBQUksS0FBSyxhQUN6Qyw2Q0FDQWYsZ0JBQWdCdUIsS0FBS1AsSUFBSSxHQUN2Qiw2Q0FDQTs4Q0FHUE8sS0FBS1IsSUFBSTttQ0FWTFM7Ozs7Ozs7Ozs7c0NBY1gsOERBQUNQOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ3ZCLCtFQUFnQkE7OENBQ2YsNEVBQUNELHFHQUFRQTt3Q0FDUDBCLE1BQU07d0NBQ05GLFdBQVU7Ozs7Ozs7Ozs7OzhDQUdkLDhEQUFDdEIsb0VBQVdBOzhDQUNWLDRFQUFDSCxxR0FBU0E7d0NBQUMyQixNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPL0I7R0FuR3dCckI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci50c3g/MDg2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IENvZmZlZSwgUGFuZWxMZWZ0LCBTZXR0aW5ncyB9IGZyb20gXCJsdWNpZGUtcmVhY3RcIjtcbmltcG9ydCB7IERyb3Bkb3duTWVudURlbW8gfSBmcm9tIFwiLi4vY29tcG9uZW50cy11aS9kcm9wZG93bi1tZW51LWRlbW9cIjtcbmltcG9ydCB7IEhlYWRlclNoZWV0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMtdWkvaGVhZGVyLXNoZWV0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgW2N1cnJlbnRQYXRoLCBzZXRDdXJyZW50UGF0aF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzSGVhZGVyRml4ZWQsIHNldElzSGVhZGVyRml4ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0Q3VycmVudFBhdGgod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcblxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDApIHtcbiAgICAgICAgc2V0SXNIZWFkZXJGaXhlZCh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldElzSGVhZGVyRml4ZWQoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaXNQcm9qZWN0c1BhZ2UgPSAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIHBhdGguaW5jbHVkZXMoXCIvcHJvamV0b3NcIik7XG4gIH07XG5cbiAgY29uc3QgbmF2TGlua3MgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJJbsOtY2lvXCIsXG4gICAgICBsaW5rOiBcIi9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiU29icmVcIixcbiAgICAgIGxpbms6IFwiI1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJQcm9qZXRvc1wiLFxuICAgICAgbGluazogXCIvcHJvamV0b3NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiVGVjbm9sb2dpYXNcIixcbiAgICAgIGxpbms6IFwiL3RlY25vbG9naWFzLWUtZmVycmFtZW50YXNcIixcbiAgICB9LFxuICAgIC8vIHtcbiAgICAvLyAgIG5hbWU6IFwiU2V0dXBcIixcbiAgICAvLyAgIGxpbms6IFwiI1wiLFxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgbmFtZTogXCJXYWxscGFwZXJzXCIsXG4gICAgLy8gICBsaW5rOiBcIiNcIixcbiAgICAvLyB9LFxuICBdO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGZsZXggdy1mdWxsIG1heC13LTV4bCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGdhcC0yIG1heC1tZDp3LWZ1bGwgJHtcbiAgICAgICAgICBpc0hlYWRlckZpeGVkXG4gICAgICAgICAgICA/IFwibGVmdC01MCByaWdodC01MCBmaXhlZCB0b3AtMCB6LTUwIHctZnVsbCBtYXgtdy02eGwgYmctd2hpdGUgcHgtMTYgcHktNCBtYXgtbGc6cHgtOCBkYXJrOmJnLXppbmMtOTAwXCJcbiAgICAgICAgICAgIDogXCJcIlxuICAgICAgICB9YH1cbiAgICAgID5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPVwiL1wiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTQgdGV4dC14bCBmb250LWJvbGQgdW5kZXJsaW5lLW9mZnNldC04IG9wYWNpdHktNTAgdHJhbnNpdGlvbi1hbGwgZGVsYXktNzUgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IGhvdmVyOnVuZGVybGluZSBob3ZlcjpvcGFjaXR5LTEwMFwiXG4gICAgICAgID5cbiAgICAgICAgICBWaXRvclxuICAgICAgICAgIDxDb2ZmZWUgc2l6ZT17MTZ9IGNsYXNzTmFtZT1cIlwiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZ2FwLThcIj5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC02IG1heC1sZzpoaWRkZW5cIj5cbiAgICAgICAgICAgIHtuYXZMaW5rcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBocmVmPXtpdGVtLmxpbmt9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY3Vyc29yLXBvaW50ZXIgZm9udC1ib2xkIHVuZGVybGluZS1vZmZzZXQtOCB0cmFuc2l0aW9uLWFsbCBkZWxheS03NSBkdXJhdGlvbi0zMDAgZWFzZS1pbi1vdXQgaG92ZXI6dW5kZXJsaW5lIGhvdmVyOm9wYWNpdHktMTAwICR7XG4gICAgICAgICAgICAgICAgICBpc1Byb2plY3RzUGFnZShjdXJyZW50UGF0aCkgJiYgaXRlbS5uYW1lID09PSBcIlByb2pldG9zXCJcbiAgICAgICAgICAgICAgICAgICAgPyBcInVuZGVybGluZSB1bmRlcmxpbmUtb2Zmc2V0LTggb3BhY2l0eS0xMDBcIlxuICAgICAgICAgICAgICAgICAgICA6IGN1cnJlbnRQYXRoID09PSBpdGVtLmxpbmtcbiAgICAgICAgICAgICAgICAgICAgICA/IFwidW5kZXJsaW5lIHVuZGVybGluZS1vZmZzZXQtOCBvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIm9wYWNpdHktNTAgaG92ZXI6dW5kZXJsaW5lIGhvdmVyOm9wYWNpdHktMTAwXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnVEZW1vPlxuICAgICAgICAgICAgICA8U2V0dGluZ3NcbiAgICAgICAgICAgICAgICBzaXplPXsxOH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWFsbCBkZWxheS0xMDAgZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IGdyb3VwLWhvdmVyOi1yb3RhdGUtMTgwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRHJvcGRvd25NZW51RGVtbz5cbiAgICAgICAgICAgIDxIZWFkZXJTaGVldD5cbiAgICAgICAgICAgICAgPFBhbmVsTGVmdCBzaXplPXsxOH0gLz5cbiAgICAgICAgICAgIDwvSGVhZGVyU2hlZXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiTGluayIsIkNvZmZlZSIsIlBhbmVsTGVmdCIsIlNldHRpbmdzIiwiRHJvcGRvd25NZW51RGVtbyIsIkhlYWRlclNoZWV0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJjdXJyZW50UGF0aCIsInNldEN1cnJlbnRQYXRoIiwiaXNIZWFkZXJGaXhlZCIsInNldElzSGVhZGVyRml4ZWQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiaGFuZGxlU2Nyb2xsIiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXNQcm9qZWN0c1BhZ2UiLCJwYXRoIiwiaW5jbHVkZXMiLCJuYXZMaW5rcyIsIm5hbWUiLCJsaW5rIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInNpemUiLCJuYXYiLCJtYXAiLCJpdGVtIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/header/header.tsx\n"));

/***/ })

});