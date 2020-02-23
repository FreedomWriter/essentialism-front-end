(this["webpackJsonpfront-end"] = this["webpackJsonpfront-end"] || []).push([
  ["main"],
  {
    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
      /*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        )(false);
        // Module
        exports.push([
          module.i,
          ".App {\n  text-align: center;\n}\n\n.App-logo {\n  height: 40vmin;\n  pointer-events: none;\n}\n\n@media (prefers-reduced-motion: no-preference) {\n  .App-logo {\n    animation: App-logo-spin infinite 20s linear;\n  }\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n@keyframes App-logo-spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n",
          ""
        ]);

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globals/form.styles.css":
      /*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/globals/form.styles.css ***!
  \****************************************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(
          /*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
        )(false);
        // Module
        exports.push([
          module.i,
          '/* mainColor: "#3d4566",\noffWhite: "#eaeaea",\nmainLight: "#6b79b3",\nmainBlack: "#222" */\n\n.form-container {\n  margin: 0 auto;\n  padding: 20vh auto 0;\n  width: 50%;\n  min-height: 700px;\n  height: 60vh;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  color: #eaeaea;\n  position: absolute;\n  top: 20vh;\n  right: 25%;\n  background-color: rgb(61, 69, 102, 0.975);\n}\n\n@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {\n  .form-container {\n    width: 90vw;\n    top: 5%;\n    right: 5%;\n  }\n}\n\n.form {\n  padding: 8%;\n  width: 85%;\n}\n\n.input {\n  background-color: rgb(107, 121, 179, 0.4);\n  padding: 0.8rem 0.8rem 0.8rem 0.4rem;\n  display: block;\n  width: 100%;\n  min-height: 35px;\n  border: none;\n  border-bottom: 1px solid rgb(0, 0, 0, 0.9);\n  margin: 25px 0;\n  font-size: 1.2rem;\n}\n\n.input:active {\n  background-color: rgb(107, 121, 179, 0.4);\n  padding: 0.8rem 0.8rem 0.8rem 0.4rem;\n  display: block;\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid rgb(0, 0, 0, 0.9);\n  margin: 25px 0;\n}\n\n/* label {\n  margin: 5%;\n} */\n\n.terms {\n  font-size: 13px;\n}\n.terms-text button {\n  cursor: pointer;\n  /* font */\n  text-decoration: none;\n  /* font-size: ${props => (props.fontSize ? props.fontSize : "700")}; */\n  font-weight: 700;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  border: none;\n  /* width */\n  width: 120px;\n  /* height */\n  height: 30px;\n  /* color */\n  color: #eaeaea;\n  background-color: rgb(61, 69, 102, 0.95);\n  /* margin */\n  margin: 1rem;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n  align-content: center;\n}\n\nbutton:hover {\n  background-color: #eaeaea;\n  color: rgb(61, 69, 102, 0.95);\n}\n',
          ""
        ]);

        /***/
      },

    /***/ "./src/App.css":
      /*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css"
        );

        if (typeof content === "string") {
          content = [[module.i, content, ""]];
        }

        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = __webpack_require__(
          /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        )(content, options);

        if (content.locals) {
          module.exports = content.locals;
        }

        if (true) {
          if (!content.locals) {
            module.hot.accept(
              /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css",
              function() {
                var newContent = __webpack_require__(
                  /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css"
                );

                if (typeof newContent === "string") {
                  newContent = [[module.i, newContent, ""]];
                }

                update(newContent);
              }
            );
          }

          module.hot.dispose(function() {
            update();
          });
        }

        /***/
      },

    /***/ "./src/App.js":
      /*!********************!*\
  !*** ./src/App.js ***!
  \********************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js"
        );
        /* harmony import */ var _PrivateRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ./PrivateRoute */ "./src/PrivateRoute.js"
        );
        /* harmony import */ var _components_header_Header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./components/header/Header.component */ "./src/components/header/Header.component.js"
        );
        /* harmony import */ var _pages_homepage_HomePage_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./pages/homepage/HomePage.page */ "./src/pages/homepage/HomePage.page.js"
        );
        /* harmony import */ var _pages_values_selection_ValuesSelectionPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./pages/values-selection/ValuesSelectionPage */ "./src/pages/values-selection/ValuesSelectionPage.js"
        );
        /* harmony import */ var _globals_GlobalStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./globals/GlobalStyles */ "./src/globals/GlobalStyles.jsx"
        );
        /* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./App.css */ "./src/App.css"
        );
        /* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/ __webpack_require__.n(
          _App_css__WEBPACK_IMPORTED_MODULE_7__
        );
        /* harmony import */ var _pages_sign_in_and_up_SignInAndUpPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          /*! ./pages/sign-in-and-up/SignInAndUpPage */ "./src/pages/sign-in-and-up/SignInAndUpPage.js"
        );
        var _jsxFileName =
          "/Users/queendavis/Documents/LambdaSchool/essentialism-build-week/front-end/src/App.js";

        function App() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              },
              __self: this
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _globals_GlobalStyles__WEBPACK_IMPORTED_MODULE_6__["Globals"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 18
                },
                __self: this
              }
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                },
                __self: this
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _PrivateRoute__WEBPACK_IMPORTED_MODULE_2__["default"],
                {
                  path: "/home",
                  component:
                    _pages_homepage_HomePage_page__WEBPACK_IMPORTED_MODULE_4__[
                      "default"
                    ],
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                  },
                  __self: this
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _PrivateRoute__WEBPACK_IMPORTED_MODULE_2__["default"],
                {
                  path: "/values-selection",
                  component:
                    _pages_values_selection_ValuesSelectionPage__WEBPACK_IMPORTED_MODULE_5__[
                      "default"
                    ],
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                  },
                  __self: this
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _PrivateRoute__WEBPACK_IMPORTED_MODULE_2__["default"],
                {
                  path: "/",
                  component:
                    _components_header_Header_component__WEBPACK_IMPORTED_MODULE_3__[
                      "default"
                    ],
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  },
                  __self: this
                }
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"],
                {
                  path: "/",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: this
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _pages_sign_in_and_up_SignInAndUpPage__WEBPACK_IMPORTED_MODULE_8__[
                    "default"
                  ],
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27
                    },
                    __self: this
                  }
                )
              )
            )
          );
        }

        /* harmony default export */ __webpack_exports__["default"] = App;

        /***/
      },

    /***/ "./src/PrivateRoute.js":
      /*!*****************************!*\
  !*** ./src/PrivateRoute.js ***!
  \*****************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Users_queendavis_Documents_LambdaSchool_essentialism_build_week_front_end_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js"
        );

        var _jsxFileName =
          "/Users/queendavis/Documents/LambdaSchool/essentialism-build-week/front-end/src/PrivateRoute.js";

        const PrivateRoute = _ref => {
          let Component = _ref.component,
            theRest = Object(
              _Users_queendavis_Documents_LambdaSchool_essentialism_build_week_front_end_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]
            )(_ref, ["component"]);

          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"],
            Object.assign({}, theRest, {
              render: props => {
                if (localStorage.getItem("token")) {
                  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    Component,
                    {
                      isLoading: props.isLoading,
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 10
                      },
                      __self: undefined
                    }
                  );
                } else {
                  console.log(
                    "Privateroute.js: Privateroute: Route.render: redirecting!"
                  );
                  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"],
                    {
                      to: "/sign",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15
                      },
                      __self: undefined
                    }
                  );
                }
              },
              __source: {
                fileName: _jsxFileName,
                lineNumber: 6
              },
              __self: undefined
            })
          );
        };

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = PrivateRoute;

        /***/
      },

    /***/ "./src/axiosWithAuth.js":
      /*!******************************!*\
  !*** ./src/axiosWithAuth.js ***!
  \******************************/
      /*! exports provided: axiosWithAuth */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "axiosWithAuth",
          function() {
            return axiosWithAuth;
          }
        );
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! axios */ "./node_modules/axios/index.js"
        );
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          axios__WEBPACK_IMPORTED_MODULE_0__
        );

        const axiosWithAuth = () => {
          const token = localStorage.getItem("token");
          return axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
            baseURL: "",
            headers: {
              Authorization: token
            }
          });
        };

        /***/
      },

    /***/ "./src/components/banner/Banner.component.js":
      /*!***************************************************!*\
  !*** ./src/components/banner/Banner.component.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react-redux */ "./node_modules/react-redux/es/index.js"
        );
        /* harmony import */ var _store_actions_zen_quotes_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../store/actions/zen.quotes.actions */ "./src/store/actions/zen.quotes.actions.js"
        );
        /* harmony import */ var _components_sign_up_form_SignUpForm_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../components/sign-up-form/SignUpForm.styles */ "./src/components/sign-up-form/SignUpForm.styles.jsx"
        );
        /* harmony import */ var _components_login_form_LoginForm_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../components/login-form/LoginForm.styles */ "./src/components/login-form/LoginForm.styles.jsx"
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        );
        /* harmony import */ var _globals_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../globals/styles */ "./src/globals/styles.jsx"
        );
        var _jsxFileName =
          "/Users/queendavis/Documents/LambdaSchool/essentialism-build-week/front-end/src/components/banner/Banner.component.js";

        const Banner = ({ className, quote, getZen }) => {
          Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
            getZen();
          }, []);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            {
              className: className,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: undefined
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_sign_up_form_SignUpForm_styles__WEBPACK_IMPORTED_MODULE_3__[
                "SignUpButtonContainer"
              ],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                },
                __self: undefined
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_sign_up_form_SignUpForm_styles__WEBPACK_IMPORTED_MODULE_3__[
                  "SignUpLinkLogin"
                ],
                {
                  to: "/in",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                  },
                  __self: undefined
                },
                "Log In"
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _components_login_form_LoginForm_styles__WEBPACK_IMPORTED_MODULE_4__[
                  "LoginLinkSignUp"
                ],
                {
                  to: "/up",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                  },
                  __self: undefined
                },
                "Sign Up"
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "h3",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 31
                },
                __self: undefined
              },
              "Remember ",
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  },
                  __self: undefined
                },
                quote
              ),
              " "
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "info",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              },
              __self: undefined
            })
          );
        };

        const BannerWrapper = Object(
          styled_components__WEBPACK_IMPORTED_MODULE_5__["default"]
        )(Banner)`
  background: ${
    _globals_styles__WEBPACK_IMPORTED_MODULE_6__["setColor"].mainLight
  };
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  margin-top: 500px;
  padding: ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_6__["setRem"])(
    10
  )} ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_6__["setRem"])(10)};
  ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_6__["setLetterSpacing"])(3)}
  h3 {
    text-transform: uppercase;
    font-size: ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_6__["setRem"])(
      48
    )};
    span {
      text-transform: capitalize;
      color: ${
        _globals_styles__WEBPACK_IMPORTED_MODULE_6__["setColor"].offWhite
      };
    }
  }
  p {
    width: 85%;
    margin: 0 auto;
  }
  ${_globals_styles__WEBPACK_IMPORTED_MODULE_6__["media"].tablet` width: 70vw;
    ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_6__["setBorder"])({
      width: "6px",
      color: _globals_styles__WEBPACK_IMPORTED_MODULE_6__["setColor"].mainColor
    })};
    p {
      width: 75%;
    }`}

  h3 {
    ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_6__["fadeIn"])(
      "100%",
      "-10%",
      "0"
    )}
  }
  .info {
    ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_6__["fadeIn"])(
      "-100%",
      "10%",
      "0"
    )}
  }
`;

        const mapStateToProps = state => {
          console.log(
            `BannerWrapper.component.js: mapStateToProps: state.zen: `,
            state.zen
          );
          return {
            quote: state.zen.quote,
            isLoading: state.zen.isLoading
          };
        };

        /* harmony default export */ __webpack_exports__["default"] = Object(
          react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"]
        )(mapStateToProps, {
          getZen:
            _store_actions_zen_quotes_actions__WEBPACK_IMPORTED_MODULE_2__[
              "getZen"
            ]
        })(BannerWrapper);

        /***/
      },

    /***/ "./src/components/custom-button/CustomButton.jsx":
      /*!*******************************************************!*\
  !*** ./src/components/custom-button/CustomButton.jsx ***!
  \*******************************************************/
      /*! exports provided: CustomButton, CustomButtonContainer */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CustomButton",
          function() {
            return CustomButton;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CustomButtonContainer",
          function() {
            return CustomButtonContainer;
          }
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        );
        /* harmony import */ var _globals_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../globals/styles */ "./src/globals/styles.jsx"
        );

        const bkgrndColor = `${_globals_styles__WEBPACK_IMPORTED_MODULE_1__["setColor"].mainColor}`;
        const fntColor = `${_globals_styles__WEBPACK_IMPORTED_MODULE_1__["setColor"].offWhite}`; //below works if you simply add <-- ${border()} --> with no key name, but it won't work for passing props
        // const border = (size = "1px", style = "solid", color = "hotpink") => {
        //   return `border:${size} ${style} ${color}`;
        // };
        //can extend CustomButton like this export const NewCustomButton = styled(CustomButton)`//some updates here`;

        const CustomButton = styled_components__WEBPACK_IMPORTED_MODULE_0__[
          "default"
        ].button`
  cursor: ${props => (props.cursor ? props.cursor : "pointer")};
  /* font */
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : "none"};
  font-size: ${props => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${props => props.fontWeight && props.fontWeight};
  letter-spacing: ${props =>
    props.letterSpacing ? props.fontWeight : "1.5px"};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : "uppercase"};
  /* width */
  width: ${props => (props.width ? props.width : "120px")};
  min-width: ${props => props.minWidth && props.minWidth};
  max-width: ${props => props.maxWidth && props.maxWidth};
  /* height */
  height: ${props => (props.height ? props.height : "30px")};
  min-height: ${props => props.minHeight && props.minHeight};
  max-height: ${props => props.maxHeight && props.maxHeight};
  /* color */
  color: ${props => (props.color ? props.color : fntColor)};
  background-color: ${props =>
    props.bkgrndColor ? props.bkgrndColor : bkgrndColor};
  /* margin */
  margin: ${props => (props.margin ? props.margin : "1rem")};
  margin-top: ${props => props.margintop && props.margintop};
  margin-bottom: ${props => props.marginBottom && props.marginBottom};
  margin-right: ${props => props.marginRight && props.marginRight};
  margin-left: ${props => props.marginLeft && props.marginLeft};
  /* padding */
  padding: ${props => props.paddingAll && props.paddingAll};
  padding-top: ${props => props.paddingTop && props.paddingTop};
  padding-bottom: ${props => props.paddingBottom && props.paddingBottom};
  padding-right: ${props => props.paddingRight && props.paddingRight};
  padding-left: ${props => props.paddingLeft && props.paddingLeft};
  /* borders */
  border: ${props => props.border && props.border};
  border-top: ${props => props.borderTop && props.borderTop};
  border-bottom: ${props => props.borderBottom && props.borderBottom};
  border-right: ${props => props.borderRight && props.borderRight};
  border-left: ${props => props.borderLeft && props.borderLeft};
  border-radius: ${props =>
    props.borderRadius ? props.borderRadius : "0.5rem"};
  /* flexbox */
  display: ${props => (props.display ? props.display : "flex")};
  flex: ${props => props.flex && props.flex};
  flex-direction: ${props => props.flexDirection && props.flexDirection};
  flex-wrap: ${props => props.flexWrap && props.flexWrap};
  flex-flow: ${props => (props.flexFlow ? props.flexFlow : "column nowrap")};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${props => (props.alignItems ? props.alignItems : "center")};
  align-content: ${props =>
    props.alignContent ? props.alignContent : "center"};
  align-self: ${props => props.alignSelf && props.alignSelf};
  order: ${props => props.order && props.order};
  flex-grow: ${props => props.flexGrow && props.flexGrow};
  flex-shrink: ${props => props.flexShrink && props.flexShrink};
  flex-basis: ${props => props.flexBasis && props.flexBasis};
  /* animations */
  transition: ${props => props.transition && props.transition};
  &:hover {
    background-color: ${props => (props.color ? props.color : fntColor)};
    color: ${props => (props.background ? props.background : bkgrndColor)};
  }
`;
        const CustomButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[
          "default"
        ].div`
  cursor: ${props => (props.cursor ? props.cursor : "pointer")};
  margin: ${props => (props.margin ? props.margin : "0")};
  margin-top: ${props => props.margintop && props.margintop};
  min-width: ${props => (props.minWidth ? props.minWidth : "150px")};
  min-height: ${props => props.minHeight && props.minWidth};
  height: ${props => props.height && props.height};
  width: ${props => (props.width ? props.width : "auto")};
  display: ${props => (props.display ? props.display : "flex")};
  flex-flow: ${props => (props.flexFlow ? props.flexFlow : "column nowrap")};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "center"};
  @media screen and (max-width: 800px) {
  }
`;

        /***/
      },

    /***/ "./src/components/custom-link/CustomLink.styles.jsx":
      /*!**********************************************************!*\
  !*** ./src/components/custom-link/CustomLink.styles.jsx ***!
  \**********************************************************/
      /*! exports provided: CustomLink, CustomLinkContainer */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CustomLink",
          function() {
            return CustomLink;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "CustomLinkContainer",
          function() {
            return CustomLinkContainer;
          }
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js"
        );
        /* harmony import */ var _globals_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../globals/styles */ "./src/globals/styles.jsx"
        );

        const bkgrndColor = `${_globals_styles__WEBPACK_IMPORTED_MODULE_2__["setColor"].mainColor}`;
        const fntColor = `${_globals_styles__WEBPACK_IMPORTED_MODULE_2__["setColor"].offWhite}`; //below works if you simply add <-- ${border()} --> with no key name, but it won't work for passing props
        // const border = (size = "1px", style = "solid", color = "hotpink") => {
        //   return `border:${size} ${style} ${color}`;
        // };
        //can extend CustomLink like this export const NewCustomLink = styled(CustomLink)`//some updates here`;

        const CustomLink = Object(
          styled_components__WEBPACK_IMPORTED_MODULE_0__["default"]
        )(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"])`
  cursor: ${props => (props.cursor ? props.cursor : "pointer")};
  /* font */
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : "none"};
  font-size: ${props => (props.fontSize ? props.fontSize : "1rem")};
  font-weight: ${props => props.fontWeight && props.fontWeight};
  letter-spacing: ${props =>
    props.letterSpacing ? props.fontWeight : "1.5px"};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : "uppercase"};
  /* width */
  width: ${props => (props.width ? props.width : "120px")};
  min-width: ${props => props.minWidth && props.minWidth};
  max-width: ${props => props.maxWidth && props.maxWidth};
  /* height */
  height: ${props => (props.height ? props.height : "30px")};
  min-height: ${props => props.minHeight && props.minHeight};
  max-height: ${props => props.maxHeight && props.maxHeight};
  /* color */
  color: ${props => (props.color ? props.color : fntColor)};
  background-color: ${props =>
    props.background ? props.background : bkgrndColor};
  /* margin */
  margin: ${props => (props.margin ? props.margin : "1rem")};
  margin-top: ${props => props.margintop && props.margintop};
  margin-bottom: ${props => props.marginBottom && props.marginBottom};
  margin-right: ${props => props.marginRight && props.marginRight};
  margin-left: ${props => props.marginLeft && props.marginLeft};
  /* padding */
  padding: ${props => props.paddingAll && props.paddingAll};
  padding-top: ${props => props.paddingTop && props.paddingTop};
  padding-bottom: ${props => props.paddingBottom && props.paddingBottom};
  padding-right: ${props => props.paddingRight && props.paddingRight};
  padding-left: ${props => props.paddingLeft && props.paddingLeft};
  /* borders */
  border: ${props => props.border && props.border};
  border-top: ${props => props.borderTop && props.borderTop};
  border-bottom: ${props => props.borderBottom && props.borderBottom};
  border-right: ${props => props.borderRight && props.borderRight};
  border-left: ${props => props.borderLeft && props.borderLeft};
  border-radius: ${props =>
    props.borderRadius ? props.borderRadius : "0.5rem"};
  /* flexbox */
  display: ${props => (props.display ? props.display : "flex")};
  flex: ${props => props.flex && props.flex};
  flex-direction: ${props => props.flexDirection && props.flexDirection};
  flex-wrap: ${props => props.flexWrap && props.flexWrap};
  flex-flow: ${props => (props.flexFlow ? props.flexFlow : "column nowrap")};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${props => (props.alignItems ? props.alignItems : "center")};
  align-content: ${props =>
    props.alignContent ? props.alignContent : "center"};
  align-self: ${props => props.alignSelf && props.alignSelf};
  order: ${props => props.order && props.order};
  flex-grow: ${props => props.flexGrow && props.flexGrow};
  flex-shrink: ${props => props.flexShrink && props.flexShrink};
  flex-basis: ${props => props.flexBasis && props.flexBasis};
  /* animations */
  transition: ${props => props.transition && props.transition};
  &:hover {
    background-color: ${props => (props.color ? props.color : fntColor)};
    color: ${props => (props.background ? props.background : bkgrndColor)};
  }
`;
        const CustomLinkContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[
          "default"
        ].div`
  cursor: ${props => (props.cursor ? props.cursor : "pointer")};
  margin: ${props => (props.margin ? props.margin : "0")};
  margin-top: ${props => props.margintop && props.margintop};
  min-width: ${props => (props.minWidth ? props.minWidth : "150px")};
  min-height: ${props => props.minHeight && props.minWidth};
  height: ${props => props.height && props.height};
  width: ${props => (props.width ? props.width : "auto")};
  display: ${props => (props.display ? props.display : "flex")};
  flex-flow: ${props => (props.flexFlow ? props.flexFlow : "column nowrap")};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "center"};
  @media screen and (max-width: 800px) {
  }
`;

        /***/
      },

    /***/ "./src/components/header/Header.component.js":
      /*!***************************************************!*\
  !*** ./src/components/header/Header.component.js ***!
  \***************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        var _jsxFileName =
          "/Users/queendavis/Documents/LambdaSchool/essentialism-build-week/front-end/src/components/header/Header.component.js";

        function Header() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 4
              },
              __self: this
            },
            "Hello from the header"
          );
        }

        /* harmony default export */ __webpack_exports__["default"] = Header;

        /***/
      },

    /***/ "./src/components/hero/Hero.component.jsx":
      /*!************************************************!*\
  !*** ./src/components/hero/Hero.component.jsx ***!
  \************************************************/
      /*! exports provided: default, BottomImg */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "BottomImg",
          function() {
            return BottomImg;
          }
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        );
        /* harmony import */ var _globals_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../globals/styles */ "./src/globals/styles.jsx"
        );

        const Hero = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"]
          .header`
  height: 500px;
  min-height: 300px;
  ${props =>
    Object(_globals_styles__WEBPACK_IMPORTED_MODULE_1__["setBackground"])({
      img: props.img,
      color: "rgba(0,0,0,.2)"
    })};
  ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_1__["setFlex"])()};
  border-bottom: 6px solid ${
    _globals_styles__WEBPACK_IMPORTED_MODULE_1__["setColor"].mainColor
  };
`;
        /* harmony default export */ __webpack_exports__["default"] = Hero;
        const BottomImg = styled_components__WEBPACK_IMPORTED_MODULE_0__[
          "default"
        ].header`
  height: 60vh;
  min-height: 300px;
  ${props =>
    Object(_globals_styles__WEBPACK_IMPORTED_MODULE_1__["setBackground"])({
      img: props.img,
      color: "rgba(255, 255, 255, 0.17)"
    })};
  ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_1__["setFlex"])()};
`; //change setColor to this to reveal stones "rgba(255, 255, 255,.175)"

        /***/
      },

    /***/ "./src/components/login-form/LoginForm.component.js":
      /*!**********************************************************!*\
  !*** ./src/components/login-form/LoginForm.component.js ***!
  \**********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! formik */ "./node_modules/formik/dist/formik.esm.js"
        );
        /* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! yup */ "./node_modules/yup/lib/index.js"
        );
        /* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          yup__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _LoginForm_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./LoginForm.styles */ "./src/components/login-form/LoginForm.styles.jsx"
        );
        /* harmony import */ var _sign_up_form_SignUpForm_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../sign-up-form/SignUpForm.styles */ "./src/components/sign-up-form/SignUpForm.styles.jsx"
        );
        var _jsxFileName =
          "/Users/queendavis/Documents/LambdaSchool/essentialism-build-week/front-end/src/components/login-form/LoginForm.component.js";

        const LoginForm = ({
          errors,
          touched,
          isSubmitting,
          isValidating,
          values
        }) => {
          //   console.log(props);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            {
              className: "form-container",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              },
              __self: undefined
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              formik__WEBPACK_IMPORTED_MODULE_1__["Form"],
              {
                className: "form",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                },
                __self: undefined
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "h4",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                  },
                  __self: undefined
                },
                "Welcome back"
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                formik__WEBPACK_IMPORTED_MODULE_1__["Field"],
                {
                  className: "input",
                  component: "input",
                  type: "text",
                  name: "username",
                  placeholder: "username",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                  },
                  __self: undefined
                }
              ),
              touched.username &&
                errors.username &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "p",
                  {
                    className: "errors",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 22
                    },
                    __self: undefined
                  },
                  errors.username
                ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                formik__WEBPACK_IMPORTED_MODULE_1__["Field"],
                {
                  className: "input",
                  component: "input",
                  type: "password",
                  name: "password",
                  placeholder: "Password",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                  },
                  __self: undefined
                }
              ),
              touched.password &&
                errors.password &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "p",
                  {
                    className: "errors",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32
                    },
                    __self: undefined
                  },
                  errors.password
                ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _sign_up_form_SignUpForm_styles__WEBPACK_IMPORTED_MODULE_4__[
                  "SignUpButtonContainer"
                ],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  },
                  __self: undefined
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _LoginForm_styles__WEBPACK_IMPORTED_MODULE_3__["LoginButton"],
                  {
                    type: "submit",
                    disabled: isSubmitting,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35
                    },
                    __self: undefined
                  },
                  "Log In"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _LoginForm_styles__WEBPACK_IMPORTED_MODULE_3__[
                    "LoginLinkSignUp"
                  ],
                  {
                    to: "/up",
                    disabled: isSubmitting,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 38
                    },
                    __self: undefined
                  },
                  "Sign Up"
                )
              )
            )
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Object(
          formik__WEBPACK_IMPORTED_MODULE_1__["withFormik"]
        )({
          mapPropsToValues({ password, username }) {
            return {
              username: username || "",
              password: password || ""
            };
          },

          validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
            username: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required(),
            password: yup__WEBPACK_IMPORTED_MODULE_2__["string"]()
              .min(8, "Password must be 8 characters or longer")
              .required("Required")
          }),

          handleSubmit(values, { resetForm, setSubmitting }) {
            // console.log(`LoginForm.js: handleSubmit: values: `, values);
            localStorage.setItem("token", "temp_token");
            resetForm();
            window.location.href = "/home";
          }
        })(LoginForm);

        /***/
      },

    /***/ "./src/components/login-form/LoginForm.styles.jsx":
      /*!********************************************************!*\
  !*** ./src/components/login-form/LoginForm.styles.jsx ***!
  \********************************************************/
      /*! exports provided: LoginButton, LoginLinkSignUp */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "LoginButton",
          function() {
            return LoginButton;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "LoginLinkSignUp",
          function() {
            return LoginLinkSignUp;
          }
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        );
        /* harmony import */ var _custom_button_CustomButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../custom-button/CustomButton */ "./src/components/custom-button/CustomButton.jsx"
        );
        /* harmony import */ var _custom_link_CustomLink_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../custom-link/CustomLink.styles */ "./src/components/custom-link/CustomLink.styles.jsx"
        );

        const LoginButton = Object(
          styled_components__WEBPACK_IMPORTED_MODULE_0__["default"]
        )(
          _custom_button_CustomButton__WEBPACK_IMPORTED_MODULE_1__[
            "CustomButton"
          ]
        )`
  background: transparent;
  margin: 10% auto 0;
  border: none;
`;
        const LoginLinkSignUp = Object(
          styled_components__WEBPACK_IMPORTED_MODULE_0__["default"]
        )(
          _custom_link_CustomLink_styles__WEBPACK_IMPORTED_MODULE_2__[
            "CustomLink"
          ]
        )`
  background: transparent;
  margin: 10% auto 0;
  border: none;
`;

        /***/
      },

    /***/ "./src/components/sign-up-form/SignUpForm.component.js":
      /*!*************************************************************!*\
  !*** ./src/components/sign-up-form/SignUpForm.component.js ***!
  \*************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! formik */ "./node_modules/formik/dist/formik.esm.js"
        );
        /* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! yup */ "./node_modules/yup/lib/index.js"
        );
        /* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          yup__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _SignUpForm_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./SignUpForm.styles */ "./src/components/sign-up-form/SignUpForm.styles.jsx"
        );
        /* harmony import */ var _globals_form_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../globals/form.styles.css */ "./src/globals/form.styles.css"
        );
        /* harmony import */ var _globals_form_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
          _globals_form_styles_css__WEBPACK_IMPORTED_MODULE_4__
        );
        var _jsxFileName =
          "/Users/queendavis/Documents/LambdaSchool/essentialism-build-week/front-end/src/components/sign-up-form/SignUpForm.component.js";

        const SignUpForm = ({
          errors,
          touched,
          isSubmitting,
          isValidating,
          values
        }) => {
          //   console.log(props);
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            {
              className: "form-container",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              },
              __self: undefined
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              formik__WEBPACK_IMPORTED_MODULE_1__["Form"],
              {
                className: "form",
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: undefined
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                formik__WEBPACK_IMPORTED_MODULE_1__["Field"],
                {
                  className: "input",
                  component: "input",
                  type: "text",
                  name: "name",
                  placeholder: "Full Name",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                  },
                  __self: undefined
                }
              ),
              touched.name &&
                errors.name &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "p",
                  {
                    className: "errors",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32
                    },
                    __self: undefined
                  },
                  errors.name
                ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                formik__WEBPACK_IMPORTED_MODULE_1__["Field"],
                {
                  className: "input",
                  component: "input",
                  type: "email",
                  name: "email",
                  placeholder: "email@example.com",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                  },
                  __self: undefined
                }
              ),
              touched.email &&
                errors.email &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "p",
                  {
                    className: "errors",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 41
                    },
                    __self: undefined
                  },
                  errors.email
                ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                formik__WEBPACK_IMPORTED_MODULE_1__["Field"],
                {
                  className: "input",
                  component: "input",
                  type: "text",
                  name: "username",
                  placeholder: "username",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  },
                  __self: undefined
                }
              ),
              touched.username &&
                errors.username &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "p",
                  {
                    className: "errors",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 51
                    },
                    __self: undefined
                  },
                  errors.username
                ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                formik__WEBPACK_IMPORTED_MODULE_1__["Field"],
                {
                  className: "input",
                  component: "input",
                  type: "password",
                  name: "password",
                  placeholder: "Password",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                  },
                  __self: undefined
                }
              ),
              touched.password &&
                errors.password &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "p",
                  {
                    className: "errors",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
                    },
                    __self: undefined
                  },
                  errors.password
                ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                formik__WEBPACK_IMPORTED_MODULE_1__["Field"],
                {
                  className: "input",
                  component: "input",
                  type: "password",
                  name: "verifyPassword",
                  placeholder: "Verify Password",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                  },
                  __self: undefined
                }
              ),
              touched.verifyPassword &&
                errors.verifyPassword &&
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "p",
                  {
                    className: "errors",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 71
                    },
                    __self: undefined
                  },
                  errors.verifyPassword
                ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                {
                  className: "terms",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  },
                  __self: undefined
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "label",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 75
                    },
                    __self: undefined
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    formik__WEBPACK_IMPORTED_MODULE_1__["Field"],
                    {
                      className: "checkbox",
                      component: "input",
                      type: "checkbox",
                      checked: values.terms,
                      name: "terms",
                      placeholder: "Full Name",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 76
                      },
                      __self: undefined
                    }
                  ),
                  touched.terms &&
                    errors.terms &&
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "p",
                      {
                        className: "errors",
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 85
                        },
                        __self: undefined
                      },
                      errors.terms
                    ),
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "span",
                    {
                      className: "terms-text",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 87
                      },
                      __self: undefined
                    },
                    "Terms and Conditions"
                  )
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _SignUpForm_styles__WEBPACK_IMPORTED_MODULE_3__[
                  "SignUpButtonContainer"
                ],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                  },
                  __self: undefined
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _SignUpForm_styles__WEBPACK_IMPORTED_MODULE_3__[
                    "SignUpLinkLogin"
                  ],
                  {
                    to: "/in",
                    disabled: isSubmitting,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 91
                    },
                    __self: undefined
                  },
                  "Log In"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _SignUpForm_styles__WEBPACK_IMPORTED_MODULE_3__[
                    "SignUpButton"
                  ],
                  {
                    type: "submit",
                    disabled: isSubmitting,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 94
                    },
                    __self: undefined
                  },
                  "SignUp"
                )
              )
            )
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Object(
          formik__WEBPACK_IMPORTED_MODULE_1__["withFormik"]
        )({
          mapPropsToValues({
            name,
            email,
            password,
            verifyPassword,
            terms,
            username
          }) {
            return {
              name: name || "",
              email: email || "",
              password: password || "",
              verifyPassword: verifyPassword || "",
              terms: terms || false,
              username: username || ""
            };
          },

          validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]().shape({
            email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email(
              "Please Enter A Valid Email"
            ),
            password: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(
              8,
              "Password must be 8 characters or longer"
            ),
            verifyPassword: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(
              8,
              "Password must be 8 characters or longer and should match"
            ),
            name: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required(
              "Required"
            ),
            terms: yup__WEBPACK_IMPORTED_MODULE_2__["boolean"]()
              .required("Required")
              .oneOf([true], "Must Accept Terms and Conditions"),
            username: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().required()
          }),

          handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
            if (values.password !== values.verifyPassword) {
              setErrors({
                verifyPassword: "Passwords do not match"
              });
              setSubmitting(false);
            } else {
              // console.log(`SignUpForm.js: handleSubmit: values: `, values);
              localStorage.setItem("token", "temp_token");
              resetForm();
              window.location.href = "/values-selection";
            }
          }
        })(SignUpForm);

        /***/
      },

    /***/ "./src/components/sign-up-form/SignUpForm.styles.jsx":
      /*!***********************************************************!*\
  !*** ./src/components/sign-up-form/SignUpForm.styles.jsx ***!
  \***********************************************************/
      /*! exports provided: SignUpButton, SignUpLinkLogin, SignUpButtonContainer */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SignUpButton",
          function() {
            return SignUpButton;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SignUpLinkLogin",
          function() {
            return SignUpLinkLogin;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "SignUpButtonContainer",
          function() {
            return SignUpButtonContainer;
          }
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        );
        /* harmony import */ var _custom_button_CustomButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../custom-button/CustomButton */ "./src/components/custom-button/CustomButton.jsx"
        );
        /* harmony import */ var _custom_link_CustomLink_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../custom-link/CustomLink.styles */ "./src/components/custom-link/CustomLink.styles.jsx"
        );

        const SignUpButton = Object(
          styled_components__WEBPACK_IMPORTED_MODULE_0__["default"]
        )(
          _custom_button_CustomButton__WEBPACK_IMPORTED_MODULE_1__[
            "CustomButton"
          ]
        )`
  background: transparent;
  margin: 10% auto 0;
  border: none;
`;
        const SignUpLinkLogin = Object(
          styled_components__WEBPACK_IMPORTED_MODULE_0__["default"]
        )(
          _custom_link_CustomLink_styles__WEBPACK_IMPORTED_MODULE_2__[
            "CustomLink"
          ]
        )`
  background: transparent;
  margin: 10% auto 0;
  border: none;
`;
        const SignUpButtonContainer = Object(
          styled_components__WEBPACK_IMPORTED_MODULE_0__["default"]
        )(
          _custom_button_CustomButton__WEBPACK_IMPORTED_MODULE_1__[
            "CustomButtonContainer"
          ]
        )`
  flex-flow: row nowrap;
  margin-bottom: 10%;
`;

        /***/
      },

    /***/ "./src/components/user-selected-values/UsersTopValues.component.js":
      /*!*************************************************************************!*\
  !*** ./src/components/user-selected-values/UsersTopValues.component.js ***!
  \*************************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react-redux */ "./node_modules/react-redux/es/index.js"
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        );
        /* harmony import */ var _globals_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../globals/styles */ "./src/globals/styles.jsx"
        );
        var _jsxFileName =
          "/Users/queendavis/Documents/LambdaSchool/essentialism-build-week/front-end/src/components/user-selected-values/UsersTopValues.component.js";

        function UsersTopValues({ usersList, className, endOfList }) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
            null,
            usersList.length > 0 &&
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "section",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                  },
                  __self: this
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "article",
                  {
                    className: className,
                    key: Date.now(),
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 19
                    },
                    __self: this
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    {
                      className: "card-info",
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                      },
                      __self: this
                    },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                      "h4",
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 21
                        },
                        __self: this
                      },
                      "my values"
                    ),
                    usersList.map(val => {
                      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "p",
                        {
                          key: val.id,
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                          },
                          __self: this
                        },
                        " - ",
                        val.value.toLowerCase()
                      );
                    })
                  )
                )
              )
          );
        }

        const mapPropsToState = state => {
          console.log(
            `UsersTopValues.component: mapPropsToState: state: `,
            state.values.usersList
          );
          return {
            usersList: state.values.usersList
          };
        }; // export default connect(mapPropsToState)(UsersTopValues);

        /* harmony default export */ __webpack_exports__["default"] = Object(
          react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"]
        )(mapPropsToState)(Object(
          styled_components__WEBPACK_IMPORTED_MODULE_2__["default"]
        )(UsersTopValues)`
background: ${
          _globals_styles__WEBPACK_IMPORTED_MODULE_3__["setColor"].mainLight
        };
margin: ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_3__["setRem"])(
          32
        )} auto;
min-width: 500px;
max-width: 50%;
color: ${_globals_styles__WEBPACK_IMPORTED_MODULE_3__["setColor"].offWhite};
text-align: center;
margin-top: 5%;
${props =>
  props.index === props.activeIndex ? "display: block" : "display: none"}

p {
  ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_3__["fadeIn"])(
    "100%",
    "-10%",
    "0"
  )}
}


}
.card-info {
  padding: ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_3__["setRem"])()};
  h4 {
    text-transform: capitalize;
    ${Object(
      _globals_styles__WEBPACK_IMPORTED_MODULE_3__["setLetterSpacing"]
    )()};
  }
  p {
    ${Object(
      _globals_styles__WEBPACK_IMPORTED_MODULE_3__["setLetterSpacing"]
    )()};
  }
}
${_globals_styles__WEBPACK_IMPORTED_MODULE_3__["setShadow"].light};
${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_3__["setTransition"])()};
&:hover {
  ${_globals_styles__WEBPACK_IMPORTED_MODULE_3__["setShadow"].dark};
}
`);

        /***/
      },

    /***/ "./src/components/user-selected-values/UsersTopValues.styles.jsx":
      /*!***********************************************************************!*\
  !*** ./src/components/user-selected-values/UsersTopValues.styles.jsx ***!
  \***********************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        );
        /* harmony import */ var _globals_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../globals/styles */ "./src/globals/styles.jsx"
        );
        var _jsxFileName =
          "/Users/queendavis/Documents/LambdaSchool/essentialism-build-week/front-end/src/components/user-selected-values/UsersTopValues.styles.jsx";

        const ValuesBanner = ({ className }) => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            {
              className: className,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              },
              __self: undefined
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "h2",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 17
                },
                __self: undefined
              },
              "Now:",
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "span",
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                  },
                  __self: undefined
                },
                "take some time to reflect on the values you've selected. Which ones really mean the most to you? Narrow your selection down to your essential three."
              ),
              " "
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: "info",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: undefined
            })
          );
        };

        const ValuesBannerWrapper = Object(
          styled_components__WEBPACK_IMPORTED_MODULE_1__["default"]
        )(ValuesBanner)`
  background: ${
    _globals_styles__WEBPACK_IMPORTED_MODULE_2__["setColor"].mainLight
  };
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  margin-top: -33%;
  margin-bottom: 35%;
  color: ${_globals_styles__WEBPACK_IMPORTED_MODULE_2__["setColor"].mainColor};
  padding: ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_2__["setRem"])(
    10
  )} ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_2__["setRem"])(10)};
  ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_2__["setLetterSpacing"])(3)}
  ${props => (props.endOfList === true ? "display: flex" : "display: none")}
  
  h2 {
    text-transform: uppercase;
    font-size: ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_2__["setRem"])(
      28
    )};
    span {
      text-transform: capitalize;
      color: ${
        _globals_styles__WEBPACK_IMPORTED_MODULE_2__["setColor"].offWhite
      };
      ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_2__["fadeIn"])(
        "100%",
        "-10%",
        "0"
      )}
      ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_2__["setTransition"])(
        "all",
        "1s",
        "ease-in-out"
      )}
    }
  }
  p {
    width: 85%;
    margin: 0 auto;
  }
  ${_globals_styles__WEBPACK_IMPORTED_MODULE_2__["media"].tablet` width: 70vw;
    ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_2__["setBorder"])({
      width: "6px",
      color: _globals_styles__WEBPACK_IMPORTED_MODULE_2__["setColor"].mainColor
    })};
    p {
      width: 75%;
    }`}

  /* h2 {
    ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_2__["fadeIn"])(
      "100%",
      "-10%",
      "0"
    )}
  }
  .info {
    ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_2__["fadeIn"])(
      "-100%",
      "10%",
      "0"
    )}
  } */
`;
        /* harmony default export */ __webpack_exports__[
          "default"
        ] = ValuesBannerWrapper;

        /***/
      },

    /***/ "./src/components/value/Value.component.js":
      /*!*************************************************!*\
  !*** ./src/components/value/Value.component.js ***!
  \*************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react-redux */ "./node_modules/react-redux/es/index.js"
        );
        /* harmony import */ var _store_actions_values_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../store/actions/values.actions */ "./src/store/actions/values.actions.js"
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        );
        /* harmony import */ var _globals_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../globals/styles */ "./src/globals/styles.jsx"
        );
        /* harmony import */ var _Value_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./Value.styles */ "./src/components/value/Value.styles.jsx"
        );
        var _jsxFileName =
          "/Users/queendavis/Documents/LambdaSchool/essentialism-build-week/front-end/src/components/value/Value.component.js";

        const Value = ({
          className,
          info,
          values,
          id,
          goToNextCard,
          topList
        }) => {
          //   console.log(`Value.js: topList: `, topList);
          const handleYes = e => {
            console.log(`Value.js: handleClick: e.target.value: `, e.target);
            values.map(val => {
              return val.id === id && topList(val);
            });
            goToNextCard();
          };

          const handleNo = e => {
            console.log(`Value.js: handleClick: e.target.value: `, e.target);
            values.map(val => {
              return (
                val.id === id &&
                console.log(`Value.js: handleNo: values.map: val: `, val)
              );
            });
            goToNextCard();
          };

          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "section",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              },
              __self: undefined
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "article",
              {
                className: className,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 43
                },
                __self: undefined
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                  className: "card-info",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                  },
                  __self: undefined
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "h4",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 45
                    },
                    __self: undefined
                  },
                  "do you value"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  "p",
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 46
                    },
                    __self: undefined
                  },
                  info,
                  "?"
                )
              ),
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _Value_styles__WEBPACK_IMPORTED_MODULE_5__[
                  "ValueButtonContainer"
                ],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  },
                  __self: undefined
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Value_styles__WEBPACK_IMPORTED_MODULE_5__["ValueButton"],
                  {
                    onClick: handleNo,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 49
                    },
                    __self: undefined
                  },
                  "no"
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _Value_styles__WEBPACK_IMPORTED_MODULE_5__["ValueButton"],
                  {
                    onClick: handleYes,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 50
                    },
                    __self: undefined
                  },
                  "yes"
                )
              )
            )
          );
        };

        const mapStateToProps = state => {
          //   console.log(`ValuesList.js: mapStateToProps: state.values: `, state.values);
          return {
            values: state.values.values,
            isLoading: state.isLoading
          };
        };

        /* harmony default export */ __webpack_exports__["default"] = Object(
          react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"]
        )(mapStateToProps, {
          topList:
            _store_actions_values_actions__WEBPACK_IMPORTED_MODULE_2__[
              "topList"
            ]
        })(Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(
          Value
        )`
background: ${
          _globals_styles__WEBPACK_IMPORTED_MODULE_4__["setColor"].mainLight
        };
margin: ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_4__["setRem"])(
          32
        )} auto;
min-width: 500px;
max-width: 50%;
color: ${_globals_styles__WEBPACK_IMPORTED_MODULE_4__["setColor"].offWhite};
text-align: center;
margin-top: -125px;
${props =>
  props.index === props.activeIndex ? "display: block" : "display: none"}
  ${props => props.endOfList && "display: none"}

p {
  ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_4__["fadeIn"])(
    "100%",
    "-10%",
    "0"
  )}
}


}
.card-info {
  padding: ${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_4__["setRem"])()};
  h4 {
    text-transform: capitalize;
    ${Object(
      _globals_styles__WEBPACK_IMPORTED_MODULE_4__["setLetterSpacing"]
    )()};
  }
  p {
    ${Object(
      _globals_styles__WEBPACK_IMPORTED_MODULE_4__["setLetterSpacing"]
    )()};
  }
}
${_globals_styles__WEBPACK_IMPORTED_MODULE_4__["setShadow"].light};
${Object(_globals_styles__WEBPACK_IMPORTED_MODULE_4__["setTransition"])()};
&:hover {
  ${_globals_styles__WEBPACK_IMPORTED_MODULE_4__["setShadow"].dark};
}
`);

        /***/
      },

    /***/ "./src/components/value/Value.styles.jsx":
      /*!***********************************************!*\
  !*** ./src/components/value/Value.styles.jsx ***!
  \***********************************************/
      /*! exports provided: ValueButton, ValueButtonContainer */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ValueButton",
          function() {
            return ValueButton;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ValueButtonContainer",
          function() {
            return ValueButtonContainer;
          }
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        );
        /* harmony import */ var _custom_button_CustomButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../custom-button/CustomButton */ "./src/components/custom-button/CustomButton.jsx"
        );

        const ValueButton = Object(
          styled_components__WEBPACK_IMPORTED_MODULE_0__["default"]
        )(
          _custom_button_CustomButton__WEBPACK_IMPORTED_MODULE_1__[
            "CustomButton"
          ]
        )`
  border: none;
`;
        const ValueButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[
          "default"
        ].div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  margin: 2% 0;
`;

        /***/
      },

    /***/ "./src/components/values-list/ValuesList.component.js":
      /*!************************************************************!*\
  !*** ./src/components/values-list/ValuesList.component.js ***!
  \************************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Users_queendavis_Documents_LambdaSchool_essentialism_build_week_front_end_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react-redux */ "./node_modules/react-redux/es/index.js"
        );
        /* harmony import */ var _value_Value_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../value/Value.component */ "./src/components/value/Value.component.js"
        );
        /* harmony import */ var _user_selected_values_UsersTopValues_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../user-selected-values/UsersTopValues.component */ "./src/components/user-selected-values/UsersTopValues.component.js"
        );
        /* harmony import */ var _user_selected_values_UsersTopValues_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../user-selected-values/UsersTopValues.styles */ "./src/components/user-selected-values/UsersTopValues.styles.jsx"
        );

        var _jsxFileName =
          "/Users/queendavis/Documents/LambdaSchool/essentialism-build-week/front-end/src/components/values-list/ValuesList.component.js";

        function ValuesList({ values, usersList }) {
          const _useState = Object(
              react__WEBPACK_IMPORTED_MODULE_1__["useState"]
            )(0),
            _useState2 = Object(
              _Users_queendavis_Documents_LambdaSchool_essentialism_build_week_front_end_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]
            )(_useState, 2),
            activeIndex = _useState2[0],
            setActiveIndex = _useState2[1];

          const _useState3 = Object(
              react__WEBPACK_IMPORTED_MODULE_1__["useState"]
            )(null),
            _useState4 = Object(
              _Users_queendavis_Documents_LambdaSchool_essentialism_build_week_front_end_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[
                "default"
              ]
            )(_useState3, 2),
            endOfList = _useState4[0],
            setEndOfList = _useState4[1]; // const [rerenderList, setRerenderList] = useState(null);
          // const goToPrevSlide = e => {
          //   e.preventDefault();
          //   let index = activeIndex;
          //   let slidesLength = values.length;
          //   if (index < 1) {
          //     index = slidesLength;
          //   }
          //   --index;
          //   setActiveIndex(index);
          // };
          // let endOfList = "";

          const goToNextCard = () => {
            let index = activeIndex;
            let slidesLength = values.length - 1;

            if (index === slidesLength) {
              // index = -1;
              setEndOfList(true);
            }

            ++index;
            setActiveIndex(index);
          }; //filters the values array to remove options user has already selected - not currently being used

          const valuesArr = values;
          const usersListArr = usersList;
          const filteredValuesArr = valuesArr.filter(
            val => !usersListArr.includes(val)
          ); // console.log(`ValuesList.js: filterdValuesArr: `, filteredValuesArr);
          // console.log(`ValuesList.js: rerenderList: `, rerenderList);

          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment,
            null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              _user_selected_values_UsersTopValues_styles__WEBPACK_IMPORTED_MODULE_5__[
                "default"
              ],
              {
                endOfList: endOfList,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                },
                __self: this
              }
            ),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              "h4",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                },
                __self: this
              },
              values.map((val, index) => {
                return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _value_Value_component__WEBPACK_IMPORTED_MODULE_3__[
                    "default"
                  ],
                  {
                    key: val.id,
                    info: val.value.toLowerCase(),
                    id: val.id,
                    index: index,
                    activeIndex: activeIndex, // goToPrevSlide={goToPrevSlide}
                    goToNextCard: goToNextCard,
                    endOfList: endOfList,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 50
                    },
                    __self: this
                  }
                );
              }),
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                _user_selected_values_UsersTopValues_component__WEBPACK_IMPORTED_MODULE_4__[
                  "default"
                ],
                {
                  endOfList: endOfList,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                  },
                  __self: this
                }
              )
            )
          );
        }

        const mapPropsToState = state => {
          console.log(
            `ValuesList.js: mapPropsToState: state.values: `,
            state.values.usersList
          );
          return {
            values: state.values.values,
            isLoading: state.isLoading,
            usersList: state.values.usersList
          };
        };

        /* harmony default export */ __webpack_exports__["default"] = Object(
          react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"]
        )(mapPropsToState)(ValuesList); //getValues

        /***/
      },

    /***/ "./src/dummy-data.js":
      /*!***************************!*\
  !*** ./src/dummy-data.js ***!
  \***************************/
      /*! exports provided: userData, values, valueChoice, projects */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "userData",
          function() {
            return userData;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "values",
          function() {
            return values;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "valueChoice",
          function() {
            return valueChoice;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "projects",
          function() {
            return projects;
          }
        );
        const userData = {
          name: "Marie Kondo",
          username: "bringsJoy",
          password: "password",
          email: "email@email.com"
        };
        let valID = Date.now();
        const values = [
          {
            value: "Athletic ability",
            id: valID + Math.random()
          },
          {
            value: "Art and literature",
            id: valID + Math.random()
          },
          {
            value: "Creativity",
            id: valID + Math.random()
          },
          {
            value:
              "discovering, or inventing things to make a difference in the world",
            id: valID + Math.random()
          },
          {
            value: "Independence",
            id: valID + Math.random()
          },
          {
            value: "Kindness and generosity",
            id: valID + Math.random()
          },
          {
            value: "Living in the moment",
            id: valID + Math.random()
          },
          {
            value:
              "Membership in a social group (such as your community, racial group, or school club)",
            id: valID + Math.random()
          },
          {
            value: "Music",
            id: valID + Math.random()
          },
          {
            value: "My community",
            id: valID + Math.random()
          },
          {
            value: "My moral principles",
            id: valID + Math.random()
          },
          {
            value: "Nature and the environment",
            id: valID + Math.random()
          },
          {
            value: "Relationships with friends and family",
            id: valID + Math.random()
          },
          {
            value: "Sense of humor",
            id: valID + Math.random()
          },
          {
            value: "Success in my career",
            id: valID + Math.random()
          }
        ];
        const valueChoice = {
          value1: {
            value: "",
            explanation: "",
            id: ""
          },
          value2: {
            value: "",
            explanation: "",
            id: ""
          },
          value3: {
            value: "",
            explanation: "",
            id: ""
          }
        };
        const projects = [
          {
            project: "project1",
            id: valID + Math.random()
          },
          {
            project: "project2",
            id: valID + Math.random()
          },
          {
            project: "project3",
            id: valID + Math.random()
          }
        ];

        /***/
      },

    /***/ "./src/globals/GlobalStyles.jsx":
      /*!**************************************!*\
  !*** ./src/globals/GlobalStyles.jsx ***!
  \**************************************/
      /*! exports provided: Globals */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "Globals",
          function() {
            return Globals;
          }
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        );
        /* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ./styles */ "./src/globals/styles.jsx"
        );

        const Globals = styled_components__WEBPACK_IMPORTED_MODULE_0__[
          "createGlobalStyle"
        ]`

@import url('https://fonts.googleapis.com/css?family=Lato|Open+Sans&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 100%;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}


body {
  ${_styles__WEBPACK_IMPORTED_MODULE_1__["setFont"].main};
  color: ${_styles__WEBPACK_IMPORTED_MODULE_1__["setColor"].mainBlack};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 2em;
  text-rendering: optimizeLegibility;
}

h1 {
  font-size: 3em;
  line-height: 1.2;
  margin-bottom: 0.5em;
}

h2 {
  font-size: 2em;
  margin-bottom: 0.75em;
}

h3 {
  font-size: 1.5em;
  line-height: 1;
  margin-bottom: 1em;
}

h4{
  font-size: 1.2em;
  line-height: 1.2;
  margin-bottom: 01.25em;
  font-weight:bold;
}

h5 {
  font-size: 1em;
  margin-bottom: 1.5em;
  font-weight:bold;
}

h6 {
  font-size: 1em;
  font-weight:bold;
}

p {
  line-height: 1.5;
  margin: 0 0 1.5 0;
}

.clearfix {
  zoom: 1;
}
.clearfix:after {
  content: "_";
  clear: both;
  display: block;
  height: 0;
  visibility: hidden;
}

`;

        /***/
      },

    /***/ "./src/globals/form.styles.css":
      /*!*************************************!*\
  !*** ./src/globals/form.styles.css ***!
  \*************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        var content = __webpack_require__(
          /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./form.styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globals/form.styles.css"
        );

        if (typeof content === "string") {
          content = [[module.i, content, ""]];
        }

        var options = {};

        options.insert = "head";
        options.singleton = false;

        var update = __webpack_require__(
          /*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
        )(content, options);

        if (content.locals) {
          module.exports = content.locals;
        }

        if (true) {
          if (!content.locals) {
            module.hot.accept(
              /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./form.styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globals/form.styles.css",
              function() {
                var newContent = __webpack_require__(
                  /*! !../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../../node_modules/postcss-loader/src??postcss!./form.styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/globals/form.styles.css"
                );

                if (typeof newContent === "string") {
                  newContent = [[module.i, newContent, ""]];
                }

                update(newContent);
              }
            );
          }

          module.hot.dispose(function() {
            update();
          });
        }

        /***/
      },

    /***/ "./src/globals/styles.jsx":
      /*!********************************!*\
  !*** ./src/globals/styles.jsx ***!
  \********************************/
      /*! exports provided: setFlex, setBackground, setColor, setFont, setRem, setLetterSpacing, setShadow, setBorder, media, setTransition, fadeIn */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "setFlex",
          function() {
            return setFlex;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "setBackground",
          function() {
            return setBackground;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "setColor",
          function() {
            return setColor;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "setFont",
          function() {
            return setFont;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "setRem",
          function() {
            return setRem;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "setLetterSpacing",
          function() {
            return setLetterSpacing;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "setShadow",
          function() {
            return setShadow;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "setBorder",
          function() {
            return setBorder;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "media",
          function() {
            return media;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "setTransition",
          function() {
            return setTransition;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "fadeIn",
          function() {
            return fadeIn;
          }
        );
        /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js"
        );

        const setFlex = ({ x = "center", y = "center" } = {}) => {
          return `display:flex;align-items:${y};justify-content:${x}`;
        };
        const setBackground = ({
          img = "https://images.pexels.com/photos/1628086/pexels-photo-1628086.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          color = "rgba(0,0,0,0)"
        } = {}) => {
          return `background: linear-gradient(${color}, ${color}),
    url(${img}) center/cover fixed no-repeat`;
        };
        const setColor = {
          mainColor: "#3d4566",
          offWhite: "#eaeaea",
          mainLight: "#6b79b3",
          mainBlack: "#222"
        };
        const setFont = {
          main: "font-family: 'Lato', open-sans;"
        };
        const setRem = (number = 16) => {
          return `${number / 16}rem`;
        };
        const setLetterSpacing = (number = 2) => {
          return `letter-spacing:${number}px`;
        };
        const setShadow = {
          light: "box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)",
          dark: "box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);",
          darkest: "box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);"
        };
        const setBorder = ({
          width = "1px",
          style = "solid",
          color = "black"
        } = {}) => {
          return `border:${width} ${style} ${color}`;
        };
        const sizes = {
          large: 1200,
          desktop: 990,
          tablet: 800,
          phone: 500
        };
        const media = Object.keys(sizes).reduce((acc, label) => {
          acc[label] = (
            ...args
          ) => styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    @media (min-width: ${sizes[label] / 16}em) {
      ${Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(...args)}
    }
  `;

          return acc;
        }, {});
        const setTransition = ({
          property = "all",
          time = "0.3s",
          timing = "ease-in-out"
        } = {}) => {
          return `transition:${property} ${time} ${timing}`;
        };
        const fadeIn = (start, point, end) => {
          const animation = styled_components__WEBPACK_IMPORTED_MODULE_0__[
            "keyframes"
          ]`
0%{
 opacity:0;
 transform:translateY(${start})
}
50%{
 opacity:0.5;
 transform:translateY(${point})
}
100%{
 opacity:1;
 transform:translateY(${end})
}
`;
          return styled_components__WEBPACK_IMPORTED_MODULE_0__["css"]`
    animation: ${animation} 3s ease-in-out;
  `;
        };

        /***/
      },

    /***/ "./src/images/hero.JPG":
      /*!*****************************!*\
  !*** ./src/images/hero.JPG ***!
  \*****************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + "static/media/hero.df5b544f.JPG";

        /***/
      },

    /***/ "./src/images/stones.jpeg":
      /*!********************************!*\
  !*** ./src/images/stones.jpeg ***!
  \********************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        module.exports =
          __webpack_require__.p + "static/media/stones.522ad82b.jpeg";

        /***/
      },

    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /*! no exports provided */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react-dom */ "./node_modules/react-dom/index.js"
        );
        /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
          react_dom__WEBPACK_IMPORTED_MODULE_1__
        );
        /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! react-redux */ "./node_modules/react-redux/es/index.js"
        );
        /* harmony import */ var redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! redux-persist/integration/react */ "./node_modules/redux-persist/es/integration/react.js"
        );
        /* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./store */ "./src/store/index.js"
        );
        /* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./App */ "./src/App.js"
        );
        /* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./serviceWorker */ "./src/serviceWorker.js"
        );
        var _jsxFileName =
          "/Users/queendavis/Documents/LambdaSchool/essentialism-build-week/front-end/src/index.js";

        // import "./index.css";

        react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"],
            {
              store: _store__WEBPACK_IMPORTED_MODULE_4__["store"],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              },
              __self: undefined
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              redux_persist_integration_react__WEBPACK_IMPORTED_MODULE_3__[
                "PersistGate"
              ],
              {
                persistor: _store__WEBPACK_IMPORTED_MODULE_4__["persistor"],
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                },
                __self: undefined
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _App__WEBPACK_IMPORTED_MODULE_5__["default"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                  },
                  __self: undefined
                }
              )
            )
          ),
          document.getElementById("root")
        ); // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: https://bit.ly/CRA-PWA

        _serviceWorker__WEBPACK_IMPORTED_MODULE_6__["unregister"]();

        /***/
      },

    /***/ "./src/pages/homepage/HomePage.page.js":
      /*!*********************************************!*\
  !*** ./src/pages/homepage/HomePage.page.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        var _jsxFileName =
          "/Users/queendavis/Documents/LambdaSchool/essentialism-build-week/front-end/src/pages/homepage/HomePage.page.js";

        function HomePage() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "h2",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 4
              },
              __self: this
            },
            "Hello from Home Page"
          );
        }

        /* harmony default export */ __webpack_exports__["default"] = HomePage;

        /***/
      },

    /***/ "./src/pages/sign-in-and-up/SignInAndUpPage.js":
      /*!*****************************************************!*\
  !*** ./src/pages/sign-in-and-up/SignInAndUpPage.js ***!
  \*****************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js"
        );
        /* harmony import */ var _components_login_form_LoginForm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../components/login-form/LoginForm.component */ "./src/components/login-form/LoginForm.component.js"
        );
        /* harmony import */ var _components_sign_up_form_SignUpForm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../components/sign-up-form/SignUpForm.component */ "./src/components/sign-up-form/SignUpForm.component.js"
        );
        /* harmony import */ var _components_hero_Hero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ../../components/hero/Hero.component */ "./src/components/hero/Hero.component.jsx"
        );
        /* harmony import */ var _images_hero_JPG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ../../images/hero.JPG */ "./src/images/hero.JPG"
        );
        /* harmony import */ var _images_hero_JPG__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
          _images_hero_JPG__WEBPACK_IMPORTED_MODULE_5__
        );
        /* harmony import */ var _images_stones_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ../../images/stones.jpeg */ "./src/images/stones.jpeg"
        );
        /* harmony import */ var _images_stones_jpeg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(
          _images_stones_jpeg__WEBPACK_IMPORTED_MODULE_6__
        );
        /* harmony import */ var _components_banner_Banner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ../../components/banner/Banner.component */ "./src/components/banner/Banner.component.js"
        );
        var _jsxFileName =
          "/Users/queendavis/Documents/LambdaSchool/essentialism-build-week/front-end/src/pages/sign-in-and-up/SignInAndUpPage.js";

        function SignInAndUpPage() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "div",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              },
              __self: this
            },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_hero_Hero_component__WEBPACK_IMPORTED_MODULE_4__[
                "default"
              ],
              {
                img: _images_hero_JPG__WEBPACK_IMPORTED_MODULE_5___default.a,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                },
                __self: this
              },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"],
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                  },
                  __self: this
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"],
                  {
                    path: `/in`,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17
                    },
                    __self: this
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_login_form_LoginForm_component__WEBPACK_IMPORTED_MODULE_2__[
                      "default"
                    ],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                      },
                      __self: this
                    }
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"],
                  {
                    path: "/up",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 20
                    },
                    __self: this
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_sign_up_form_SignUpForm_component__WEBPACK_IMPORTED_MODULE_3__[
                      "default"
                    ],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                      },
                      __self: this
                    }
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"],
                  {
                    path: "/",
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 23
                    },
                    __self: this
                  },
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    _components_banner_Banner_component__WEBPACK_IMPORTED_MODULE_7__[
                      "default"
                    ],
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                      },
                      __self: this
                    }
                  )
                )
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_hero_Hero_component__WEBPACK_IMPORTED_MODULE_4__[
                "BottomImg"
              ],
              {
                img: _images_stones_jpeg__WEBPACK_IMPORTED_MODULE_6___default.a,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 28
                },
                __self: this
              }
            )
          );
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = SignInAndUpPage;

        /***/
      },

    /***/ "./src/pages/values-selection/ValuesSelectionPage.js":
      /*!***********************************************************!*\
  !*** ./src/pages/values-selection/ValuesSelectionPage.js ***!
  \***********************************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! react */ "./node_modules/react/index.js"
        );
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        /* harmony import */ var _components_hero_Hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../../components/hero/Hero.component */ "./src/components/hero/Hero.component.jsx"
        );
        /* harmony import */ var _images_hero_JPG__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../images/hero.JPG */ "./src/images/hero.JPG"
        );
        /* harmony import */ var _images_hero_JPG__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          _images_hero_JPG__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _components_values_list_ValuesList_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ../../components/values-list/ValuesList.component */ "./src/components/values-list/ValuesList.component.js"
        );
        var _jsxFileName =
          "/Users/queendavis/Documents/LambdaSchool/essentialism-build-week/front-end/src/pages/values-selection/ValuesSelectionPage.js";

        function ValuesSelectionPage() {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              "h2",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 10
                },
                __self: this
              },
              "Hello from Values Selection Page"
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_hero_Hero_component__WEBPACK_IMPORTED_MODULE_1__[
                "default"
              ],
              {
                img: _images_hero_JPG__WEBPACK_IMPORTED_MODULE_2___default.a,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 11
                },
                __self: this
              }
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              _components_values_list_ValuesList_component__WEBPACK_IMPORTED_MODULE_3__[
                "default"
              ],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 12
                },
                __self: this
              }
            )
          );
        }

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = ValuesSelectionPage;

        /***/
      },

    /***/ "./src/serviceWorker.js":
      /*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
      /*! exports provided: register, unregister */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "register",
          function() {
            return register;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "unregister",
          function() {
            return unregister;
          }
        );
        // This optional code is used to register a service worker.
        // register() is not called by default.
        // This lets the app load faster on subsequent visits in production, and gives
        // it offline capabilities. However, it also means that developers (and users)
        // will only see deployed updates on subsequent visits to a page, after all the
        // existing tabs open on the page have been closed, since previously cached
        // resources are updated in the background.
        // To learn more about the benefits of this model and instructions on how to
        // opt-in, read https://bit.ly/CRA-PWA
        const isLocalhost = Boolean(
          window.location.hostname === "localhost" || // [::1] is the IPv6 localhost address.
          window.location.hostname === "[::1]" || // 127.0.0.0/8 are considered localhost for IPv4.
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
        function register(config) {
          if (false) {
          }
        }

        function registerValidSW(swUrl, config) {
          navigator.serviceWorker
            .register(swUrl)
            .then(registration => {
              registration.onupdatefound = () => {
                const installingWorker = registration.installing;

                if (installingWorker == null) {
                  return;
                }

                installingWorker.onstatechange = () => {
                  if (installingWorker.state === "installed") {
                    if (navigator.serviceWorker.controller) {
                      // At this point, the updated precached content has been fetched,
                      // but the previous service worker will still serve the older
                      // content until all client tabs are closed.
                      console.log(
                        "New content is available and will be used when all " +
                          "tabs for this page are closed. See https://bit.ly/CRA-PWA."
                      ); // Execute callback

                      if (config && config.onUpdate) {
                        config.onUpdate(registration);
                      }
                    } else {
                      // At this point, everything has been precached.
                      // It's the perfect time to display a
                      // "Content is cached for offline use." message.
                      console.log("Content is cached for offline use."); // Execute callback

                      if (config && config.onSuccess) {
                        config.onSuccess(registration);
                      }
                    }
                  }
                };
              };
            })
            .catch(error => {
              console.error("Error during service worker registration:", error);
            });
        }

        function checkValidServiceWorker(swUrl, config) {
          // Check if the service worker can be found. If it can't reload the page.
          fetch(swUrl, {
            headers: {
              "Service-Worker": "script"
            }
          })
            .then(response => {
              // Ensure service worker exists, and that we really are getting a JS file.
              const contentType = response.headers.get("content-type");

              if (
                response.status === 404 ||
                (contentType != null &&
                  contentType.indexOf("javascript") === -1)
              ) {
                // No service worker found. Probably a different app. Reload the page.
                navigator.serviceWorker.ready.then(registration => {
                  registration.unregister().then(() => {
                    window.location.reload();
                  });
                });
              } else {
                // Service worker found. Proceed as normal.
                registerValidSW(swUrl, config);
              }
            })
            .catch(() => {
              console.log(
                "No internet connection found. App is running in offline mode."
              );
            });
        }

        function unregister() {
          if ("serviceWorker" in navigator) {
            navigator.serviceWorker.ready.then(registration => {
              registration.unregister();
            });
          }
        }

        /***/
      },

    /***/ "./src/store/actions/values.actions.js":
      /*!*********************************************!*\
  !*** ./src/store/actions/values.actions.js ***!
  \*********************************************/
      /*! exports provided: VALUES_LOAD_START, VALUES_LOAD_SUCCESS, VALUES_LOAD_FAILURE, VALUES_POST_START, VALUES_POST_SUCCESS, VALUES_POST_FAILURE, VALUES_PUT_START, VALUES_PUT_SUCCESS, VALUES_PUT_FAILURE, VALUES_DELETE_START, VALUES_DELETE_SUCCESS, VALUES_DELETE_FAILURE, ADD_TO_TOP_LIST, getValues, postValues, putValues, deleteValues, topList */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "VALUES_LOAD_START",
          function() {
            return VALUES_LOAD_START;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "VALUES_LOAD_SUCCESS",
          function() {
            return VALUES_LOAD_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "VALUES_LOAD_FAILURE",
          function() {
            return VALUES_LOAD_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "VALUES_POST_START",
          function() {
            return VALUES_POST_START;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "VALUES_POST_SUCCESS",
          function() {
            return VALUES_POST_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "VALUES_POST_FAILURE",
          function() {
            return VALUES_POST_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "VALUES_PUT_START",
          function() {
            return VALUES_PUT_START;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "VALUES_PUT_SUCCESS",
          function() {
            return VALUES_PUT_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "VALUES_PUT_FAILURE",
          function() {
            return VALUES_PUT_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "VALUES_DELETE_START",
          function() {
            return VALUES_DELETE_START;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "VALUES_DELETE_SUCCESS",
          function() {
            return VALUES_DELETE_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "VALUES_DELETE_FAILURE",
          function() {
            return VALUES_DELETE_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ADD_TO_TOP_LIST",
          function() {
            return ADD_TO_TOP_LIST;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getValues",
          function() {
            return getValues;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "postValues",
          function() {
            return postValues;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "putValues",
          function() {
            return putValues;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "deleteValues",
          function() {
            return deleteValues;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "topList",
          function() {
            return topList;
          }
        );
        /* harmony import */ var _axiosWithAuth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../axiosWithAuth */ "./src/axiosWithAuth.js"
        );

        const VALUES_LOAD_START = "VALUES_LOAD_START";
        const VALUES_LOAD_SUCCESS = "VALUES_LOAD_SUCCESS";
        const VALUES_LOAD_FAILURE = "VALUES_LOAD_FAILURE";
        const VALUES_POST_START = "VALUES_POST_START";
        const VALUES_POST_SUCCESS = "VALUES_POST_SUCCESS";
        const VALUES_POST_FAILURE = "VALUES_POST_FAILURE";
        const VALUES_PUT_START = "VALUES_PUT_START";
        const VALUES_PUT_SUCCESS = "VALUES_PUT_SUCCESS";
        const VALUES_PUT_FAILURE = "VALUES_PUT_FAILURE";
        const VALUES_DELETE_START = "VALUES_DELETE_START";
        const VALUES_DELETE_SUCCESS = "VALUES_DELETE_SUCCESS";
        const VALUES_DELETE_FAILURE = "VALUES_DELETE_FAILURE";
        const ADD_TO_TOP_LIST = "ADD_TO_TOP_LIST";
        const getValues = () => dispatch => {
          dispatch({
            type: VALUES_LOAD_START
          });
          Object(_axiosWithAuth__WEBPACK_IMPORTED_MODULE_0__["axiosWithAuth"])()
            .get(`/values`)
            .then(res => {
              dispatch({
                type: VALUES_LOAD_SUCCESS,
                payload: res.data
              });
            })
            .catch(err => {
              dispatch({
                type: VALUES_LOAD_FAILURE,
                payload: "error loading values"
              });
            });
        };
        const postValues = value => dispatch => {
          dispatch({
            type: VALUES_POST_START,
            payload: value
          });
          Object(_axiosWithAuth__WEBPACK_IMPORTED_MODULE_0__["axiosWithAuth"])()
            .post(`/values`, value)
            .then(res => {
              dispatch({
                type: VALUES_POST_SUCCESS,
                payload: res.data
              });
            })
            .then(() => (window.location.href = "/home"))
            .catch(err => {
              dispatch({
                type: VALUES_POST_FAILURE,
                payload: "error posting data"
              });
            });
        };
        const putValues = (value, id) => dispatch => {
          dispatch({
            type: VALUES_PUT_START,
            payload: value
          });
          Object(_axiosWithAuth__WEBPACK_IMPORTED_MODULE_0__["axiosWithAuth"])()
            .put(`/values/${id}`, value)
            .then(res => {
              dispatch({
                type: VALUES_PUT_SUCCESS,
                payload: res.data
              });
            })
            .then(() => (window.location.href = "/home"))
            .catch(err => {
              dispatch({
                type: VALUES_PUT_FAILURE,
                payload: "error putting values data"
              });
            });
        };
        const deleteValues = id => dispatch => {
          dispatch({
            type: VALUES_DELETE_START
          });
          Object(_axiosWithAuth__WEBPACK_IMPORTED_MODULE_0__["axiosWithAuth"])()
            .delete(`/values/${id}`)
            .then(res => {
              dispatch({
                type: VALUES_DELETE_SUCCESS,
                payload: res.data
              });
            })
            .then(() => (window.location.href = "/home"))
            .catch(err => {
              dispatch({
                type: VALUES_DELETE_FAILURE,
                payload: "error deleting values data"
              });
            });
        };
        const topList = value => dispatch => {
          console.log(`values.actions: topLst: value: `, value);
          dispatch({
            type: ADD_TO_TOP_LIST,
            payload: value
          });
        };

        /***/
      },

    /***/ "./src/store/actions/zen.quotes.actions.js":
      /*!*************************************************!*\
  !*** ./src/store/actions/zen.quotes.actions.js ***!
  \*************************************************/
      /*! exports provided: ZEN_LOAD_START, ZEN_LOAD_SUCCESS, ZEN_LOAD_FAILURE, getZen */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ZEN_LOAD_START",
          function() {
            return ZEN_LOAD_START;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ZEN_LOAD_SUCCESS",
          function() {
            return ZEN_LOAD_SUCCESS;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "ZEN_LOAD_FAILURE",
          function() {
            return ZEN_LOAD_FAILURE;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "getZen",
          function() {
            return getZen;
          }
        );
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! axios */ "./node_modules/axios/index.js"
        );
        /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
          axios__WEBPACK_IMPORTED_MODULE_0__
        );

        const ZEN_LOAD_START = "ZEN_LOAD_START";
        const ZEN_LOAD_SUCCESS = "ZEN_LOAD_SUCCESS";
        const ZEN_LOAD_FAILURE = "ZEN_LOAD_FAILURE";
        const getZen = () => dispatch => {
          dispatch({
            type: ZEN_LOAD_START
          });
          axios__WEBPACK_IMPORTED_MODULE_0___default.a
            .get(`https://api.github.com/zen`)
            .then(res => {
              console.log(`zen.quotes.actions: .then: res.data: `, res.data);
              dispatch({
                type: ZEN_LOAD_SUCCESS,
                payload: res.data
              });
            })
            .catch(err => {
              console.log(`zen.quotes.actions: .catch: err: `, err);
              dispatch({
                type: ZEN_LOAD_FAILURE,
                payload: err
              });
            });
        }; // dispatch({ type: FRIENDS_LOAD_START });
        // axiosWithAuth()
        //   .get(`/friends`)
        //   .then(res => {
        //     dispatch({
        //       type: FRIENDS_LOAD_SUCCESS,
        //       payload: res.data
        //     });
        //   })
        //   .catch(err => {
        //     dispatch({
        //       type: FRIENDS_LOAD_FAILURE,
        //       payload: "error loading friends"
        //     });
        //   });

        /***/
      },

    /***/ "./src/store/index.js":
      /*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
      /*! exports provided: store, persistor */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "store",
          function() {
            return store;
          }
        );
        /* harmony export (binding) */ __webpack_require__.d(
          __webpack_exports__,
          "persistor",
          function() {
            return persistor;
          }
        );
        /* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! redux */ "./node_modules/redux/es/redux.js"
        );
        /* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! redux-thunk */ "./node_modules/redux-thunk/es/index.js"
        );
        /* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js"
        );
        /* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          redux_logger__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! redux-persist */ "./node_modules/redux-persist/es/index.js"
        );
        /* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./reducers */ "./src/store/reducers/index.js"
        );

        const middlewares = [
          redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]
        ];
        const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(
          _reducers__WEBPACK_IMPORTED_MODULE_4__["default"],
          Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(
            ...middlewares
          )
        );
        const persistor = Object(
          redux_persist__WEBPACK_IMPORTED_MODULE_3__["persistStore"]
        )(store);

        /***/
      },

    /***/ "./src/store/reducers/index.js":
      /*!*************************************!*\
  !*** ./src/store/reducers/index.js ***!
  \*************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! redux */ "./node_modules/redux/es/redux.js"
        );
        /* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! redux-persist */ "./node_modules/redux-persist/es/index.js"
        );
        /* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js"
        );
        /* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
          redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__
        );
        /* harmony import */ var _loginReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
          /*! ./loginReducer */ "./src/store/reducers/loginReducer.js"
        );
        /* harmony import */ var _userReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
          /*! ./userReducer */ "./src/store/reducers/userReducer.js"
        );
        /* harmony import */ var _projectsReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          /*! ./projectsReducer */ "./src/store/reducers/projectsReducer.js"
        );
        /* harmony import */ var _valuesReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          /*! ./valuesReducer */ "./src/store/reducers/valuesReducer.js"
        );
        /* harmony import */ var _zenReducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          /*! ./zenReducer */ "./src/store/reducers/zenReducer.js"
        );

        const persistConfig = {
          key: "root",
          storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default(),
          whitelist: [
            "loginReducer",
            "userReducer",
            "projectsReducer",
            "valuesReducer",
            "zenReducer"
          ]
        };
        const rootReducer = Object(
          redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"]
        )({
          login: _loginReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
          user: _userReducer__WEBPACK_IMPORTED_MODULE_4__["default"],
          projects: _projectsReducer__WEBPACK_IMPORTED_MODULE_5__["default"],
          values: _valuesReducer__WEBPACK_IMPORTED_MODULE_6__["default"],
          zen: _zenReducer__WEBPACK_IMPORTED_MODULE_7__["default"]
        });
        /* harmony default export */ __webpack_exports__["default"] = Object(
          redux_persist__WEBPACK_IMPORTED_MODULE_1__["persistReducer"]
        )(persistConfig, rootReducer);

        /***/
      },

    /***/ "./src/store/reducers/loginReducer.js":
      /*!********************************************!*\
  !*** ./src/store/reducers/loginReducer.js ***!
  \********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        // import {
        //   LOGIN_POST_START,
        //   LOGIN_POST_SUCCESS,
        //   LOGIN_POST_FAILURE
        // } from "../actions/login.actions";
        const initialState = {
          username: "",
          password: ""
        };

        const loginReducer = (state = initialState, action) => {
          switch (action.type) {
            //   case LOGIN_POST_START:
            //     return {
            //       ...state,
            //       isLoading: true
            //     };
            //   case LOGIN_POST_SUCCESS:
            //     return {
            //       ...state,
            //       username: action.payload,
            //       isLoading: false
            //     };
            //   case LOGIN_POST_FAILURE:
            //     return {
            //       ...state,
            //       error: action.payload,
            //       isLoading: false
            //     };
            default:
              return state;
          }
        };

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = loginReducer;

        /***/
      },

    /***/ "./src/store/reducers/projectsReducer.js":
      /*!***********************************************!*\
  !*** ./src/store/reducers/projectsReducer.js ***!
  \***********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../dummy-data */ "./src/dummy-data.js"
        );
        // import {
        //   PROJECTS_LOAD_START,
        //   PROJECTS_LOAD_SUCCESS,
        //   PROJECTS_LOAD_FAILURE,
        //   PROJECTS_POST_START,
        //   PROJECTS_POST_SUCCESS,
        //   PROJECTS_POST_FAILURE,
        //   PROJECTS_PUT_START,
        //   PROJECTS_PUT_SUCCESS,
        //   PROJECTS_PUT_FAILURE,
        //   PROJECTS_DELETE_START,
        //   PROJECTS_DELETE_SUCCESS,
        //   PROJECTS_DELETE_FAILURE
        // } from "../actions/friend.actions";

        const initialState = {
          projects: [_dummy_data__WEBPACK_IMPORTED_MODULE_0__["projects"]]
        };

        const projectsReducer = (state = initialState, action) => {
          switch (action.type) {
            // case PROJECTS_LOAD_START:
            //   return {
            //     ...state,
            //     isLoading: true
            //   };
            // case PROJECTS_LOAD_SUCCESS:
            //   return {
            //     ...state,
            //     projects: action.payload,
            //     isLoading: false
            //   };
            // case PROJECTS_LOAD_FAILURE:
            //   return {
            //     ...state,
            //     error: action.payload,
            //     isLoading: false
            //   };
            // case PROJECTS_POST_START:
            //   return {
            //     ...state,
            //     isLoading: true
            //   };
            // case PROJECTS_POST_SUCCESS:
            //   return {
            //     ...state,
            //     projects: [...state.projects, action.payload],
            //     isLoading: false
            //   };
            // case PROJECTS_POST_FAILURE:
            //   return {
            //     ...state,
            //     error: action.payload,
            //     isLoading: false
            //   };
            // case PROJECTS_PUT_START:
            //   return {
            //     ...state,
            //     isLoading: true
            //   };
            // case PROJECTS_PUT_SUCCESS:
            //   return {
            //     ...state,
            //     projects: [...state.projects, action.payload.projects],
            //     notes: [action.payload.notes]
            //   };
            // case PROJECTS_PUT_FAILURE:
            //   return {
            //     ...state,
            //     error: action.payload,
            //     isLoading: false
            //   };
            // case PROJECTS_DELETE_START:
            //   return {
            //     ...state,
            //     isLoading: true
            //   };
            // case PROJECTS_DELETE_SUCCESS:
            //   return {
            //     ...state,
            //     projects: [action.payload]
            //   };
            // case PROJECTS_DELETE_FAILURE:
            //   return {
            //     ...state,
            //     error: action.payload,
            //     isLoading: false
            //   };
            default:
              return state;
          }
        };

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = projectsReducer;

        /***/
      },

    /***/ "./src/store/reducers/userReducer.js":
      /*!*******************************************!*\
  !*** ./src/store/reducers/userReducer.js ***!
  \*******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ../../dummy-data */ "./src/dummy-data.js"
        );
        // import {
        //     USER_LOAD_START,
        //     USER_LOAD_SUCCESS,
        //     USER_LOAD_FAILURE,
        //     USER_POST_START,
        //     USER_POST_SUCCESS,
        //     USER_POST_FAILURE,
        //     USER_PUT_START,
        //     USER_PUT_SUCCESS,
        //     USER_PUT_FAILURE,
        //     USER_DELETE_START,
        //     USER_DELETE_SUCCESS,
        //     USER_DELETE_FAILURE
        //   } from "../actions/user.actions";

        const initialState = {
          user: _dummy_data__WEBPACK_IMPORTED_MODULE_0__["userData"]
        };

        const userReducer = (state = initialState, action) => {
          switch (action.type) {
            //   case USER_LOAD_START:
            //     return {
            //       ...state,
            //       isLoading: true
            //     };
            //   case USER_LOAD_SUCCESS:
            //     return {
            //       ...state,
            //       USER: action.payload,
            //       isLoading: false
            //     };
            //   case USER_LOAD_FAILURE:
            //     return {
            //       ...state,
            //       error: action.payload,
            //       isLoading: false
            //     };
            //   case USER_POST_START:
            //     return {
            //       ...state,
            //       isLoading: true
            //     };
            //   case USER_POST_SUCCESS:
            //     return {
            //       ...state,
            //       USER: [...state.USER, action.payload],
            //       isLoading: false
            //     };
            //   case USER_POST_FAILURE:
            //     return {
            //       ...state,
            //       error: action.payload,
            //       isLoading: false
            //     };
            //   case USER_PUT_START:
            //     return {
            //       ...state,
            //       isLoading: true
            //     };
            //   case USER_PUT_SUCCESS:
            //     return {
            //       ...state,
            //       USER: [...state.USER, action.payload.USER],
            //       notes: [action.payload.notes]
            //     };
            //   case USER_PUT_FAILURE:
            //     return {
            //       ...state,
            //       error: action.payload,
            //       isLoading: false
            //     };
            //   case USER_DELETE_START:
            //     return {
            //       ...state,
            //       isLoading: true
            //     };
            //   case USER_DELETE_SUCCESS:
            //     return {
            //       ...state,
            //       USER: [action.payload]
            //     };
            //   case USER_DELETE_FAILURE:
            //     return {
            //       ...state,
            //       error: action.payload,
            //       isLoading: false
            //     };
            default:
              return state;
          }
        };

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = userReducer;

        /***/
      },

    /***/ "./src/store/reducers/valuesReducer.js":
      /*!*********************************************!*\
  !*** ./src/store/reducers/valuesReducer.js ***!
  \*********************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Users_queendavis_Documents_LambdaSchool_essentialism_build_week_front_end_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"
        );
        /* harmony import */ var _actions_values_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../actions/values.actions */ "./src/store/actions/values.actions.js"
        );
        /* harmony import */ var _dummy_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
          /*! ../../dummy-data */ "./src/dummy-data.js"
        );

        const initialState = {
          values: _dummy_data__WEBPACK_IMPORTED_MODULE_2__["values"],
          usersList: []
        };

        const valuesReducer = (state = initialState, action) => {
          switch (action.type) {
            // case VALUES_LOAD_START:
            //   return {
            //     ...state,
            //     isLoading: true
            //   };
            // case VALUES_LOAD_SUCCESS:
            //   return {
            //     ...state,
            //     values: action.payload,
            //     isLoading: false
            //   };
            // case VALUES_LOAD_FAILURE:
            //   return {
            //     ...state,
            //     error: action.payload,
            //     isLoading: false
            //   };
            // case VALUES_POST_START:
            //   return {
            //     ...state,
            //     isLoading: true
            //   };
            // case VALUES_POST_SUCCESS:
            //   return {
            //     ...state,
            //     values: [...state.values, action.payload],
            //     isLoading: false
            //   };
            // case VALUES_POST_FAILURE:
            //   return {
            //     ...state,
            //     error: action.payload,
            //     isLoading: false
            //   };
            // case VALUES_PUT_START:
            //   return {
            //     ...state,
            //     isLoading: true
            //   };
            // case VALUES_PUT_SUCCESS:
            //   return {
            //     ...state,
            //     values: [...state.values, action.payload.values],
            //     notes: [action.payload.notes]
            //   };
            // case VALUES_PUT_FAILURE:
            //   return {
            //     ...state,
            //     error: action.payload,
            //     isLoading: false
            //   };
            // case VALUES_DELETE_START:
            //   return {
            //     ...state,
            //     isLoading: true
            //   };
            // case VALUES_DELETE_SUCCESS:
            //   return {
            //     ...state,
            //     values: [action.payload]
            //   };
            // case VALUES_DELETE_FAILURE:
            //   return {
            //     ...state,
            //     error: action.payload,
            //     isLoading: false
            //   };
            case _actions_values_actions__WEBPACK_IMPORTED_MODULE_1__[
              "ADD_TO_TOP_LIST"
            ]:
              return Object(
                _Users_queendavis_Documents_LambdaSchool_essentialism_build_week_front_end_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[
                  "default"
                ]
              )({}, state, {
                usersList: [...state.usersList, action.payload]
              });

            default:
              return state;
          }
        };

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = valuesReducer;

        /***/
      },

    /***/ "./src/store/reducers/zenReducer.js":
      /*!******************************************!*\
  !*** ./src/store/reducers/zenReducer.js ***!
  \******************************************/
      /*! exports provided: default */
      /***/ function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _Users_queendavis_Documents_LambdaSchool_essentialism_build_week_front_end_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
          /*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js"
        );
        /* harmony import */ var _actions_zen_quotes_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
          /*! ../actions/zen.quotes.actions */ "./src/store/actions/zen.quotes.actions.js"
        );

        const initalState = {
          quote: "",
          isLoading: false
        };

        const zenReducer = (state = initalState, action) => {
          switch (action.type) {
            case _actions_zen_quotes_actions__WEBPACK_IMPORTED_MODULE_1__[
              "ZEN_LOAD_START"
            ]:
              return Object(
                _Users_queendavis_Documents_LambdaSchool_essentialism_build_week_front_end_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[
                  "default"
                ]
              )({}, state, {
                isLoading: true
              });

            case _actions_zen_quotes_actions__WEBPACK_IMPORTED_MODULE_1__[
              "ZEN_LOAD_SUCCESS"
            ]:
              console.log(
                `zenReducer: LOAD_SUCCESS: action.payload: `,
                action.payload
              );
              return {
                quote: action.payload,
                isLoading: false
              };

            case _actions_zen_quotes_actions__WEBPACK_IMPORTED_MODULE_1__[
              "ZEN_LOAD_FAILURE"
            ]:
              console.log(
                `zenReducer: LOAD_FAILURE: action.payload: `,
                action.payload
              );
              return {
                error: action.payload,
                isLoading: false
              };

            default:
              return state;
          }
        };

        /* harmony default export */ __webpack_exports__[
          "default"
        ] = zenReducer;

        /***/
      },

    /***/ 1:
      /*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
      /*! no static exports found */
      /***/ function(module, exports, __webpack_require__) {
        __webpack_require__(
          /*! /Users/queendavis/Documents/LambdaSchool/essentialism-build-week/front-end/node_modules/webpack/hot/dev-server.js */ "./node_modules/webpack/hot/dev-server.js"
        );
        __webpack_require__(
          /*! /Users/queendavis/Documents/LambdaSchool/essentialism-build-week/front-end/node_modules/react-dev-utils/webpackHotDevClient.js */ "./node_modules/react-dev-utils/webpackHotDevClient.js"
        );
        module.exports = __webpack_require__(
          /*! /Users/queendavis/Documents/LambdaSchool/essentialism-build-week/front-end/src/index.js */ "./src/index.js"
        );

        /***/
      }
  },
  [[1, "runtime-main", 0]]
]);
//# sourceMappingURL=main.chunk.js.map
