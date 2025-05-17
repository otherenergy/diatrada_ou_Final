"use strict";
exports.id = 694;
exports.ids = [694];
exports.modules = {

/***/ 9008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ DigitalFooter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/footers/digital-footer.json
const digital_footer_namespaceObject = JSON.parse('{"FK":{"qv":"https://www.facebook.com/","km":"https://twitter.com/","ZB":"https://www.youtube.com/"},"bc":[{"url":"https://www.diatradaou.com/","image":"img/insta/1.jpg"},{"url":"https://www.diatradaou.com/","image":"img/insta/2.jpg"},{"url":"https://www.diatradaou.com/","image":"img/insta/3.jpg"},{"url":"https://www.diatradaou.com/","image":"img/insta/4.jpg"},{"url":"https://www.diatradaou.com/","image":"img/insta/5.jpg"},{"url":"https://www.diatradaou.com/","image":"img/insta/6.jpg"}],"Lk":"Estonia - 11314 Kesklinna linnaosa, Tallinn","Do":"admin@diatradaou.com","m7":"+34-611867387","Qz":{"u":"Diatrada OU","H":"https://www.diatradaou.com/"}}');
;// CONCATENATED MODULE: ./src/components/Footers/DigitalFooter/index.jsx

/* eslint-disable @next/next/no-img-element */ 


const Footer = ({ footerClass , type  })=>{
    (0,external_react_.useEffect)(()=>{
        let bgImg = document.querySelector("footer .full-over.bg-img");
        bgImg.style.backgroundImage = `url(${bgImg.getAttribute("data-background")})`;
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: footerClass,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `container ${type == "purple-light" ? "mb-40 to-up" : ""}`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `call-action-banner pt-60 pb-60 position-re radius-30 ${type == "purple-light" ? "gr-blue2-bg" : "mb-100"} ${type == "purple-red" ? "gr-purple-red-bg" : ""}`,
                    "data-overlay-dark": "0",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row position-re ontop",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-7",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "text",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                className: "sub-title fw-400",
                                                children: "Already interested!"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "fw-800",
                                                children: "Don\u2018t wait and start now !"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "text-light",
                                                children: "Tell us your vision, and we\u2018ll get in touch with next steps"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-lg-5 valign",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "call-button full-width d-flex justify-content-end",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            href: "diatrada-contact",
                                            className: "butn butn-md bg-light radius-30",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text text-dark slide-up",
                                                    children: "Get Started"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "text text-dark slide-down",
                                                    children: "Get Started"
                                                })
                                            ]
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "full-over bg-img opacity-3 radius-30",
                            "data-background": "img/patterns/call-action.png"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "clumn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo mb-30",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "landing-preview.html",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "img/logo-dark.png",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "Always be ready and prepare for changes and the advancements of tech and involved every second"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "social circle-bord mt-30",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "rest horizontal-link",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: digital_footer_namespaceObject.FK.qv,
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-facebook-f"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: digital_footer_namespaceObject.FK.km,
                                                        className: "ms-2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-twitter"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: digital_footer_namespaceObject.FK.ZB,
                                                        className: "ms-2",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                            className: "fab fa-youtube"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4 offset-lg-1",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "clumn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "title fw-700 mb-30",
                                        children: "Contact Us"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "address rest",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "adrs mb-15",
                                                children: digital_footer_namespaceObject.Lk
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "eml underline mb-15",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: "#0",
                                                    children: digital_footer_namespaceObject.Do
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "tel",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                                    className: `${type == "purple-red" ? "gr-purple-red-text" : ""} ${type == "purple-light" ? "gr-blue2-text" : ""}`,
                                                    children: digital_footer_namespaceObject.m7
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-3 offset-lg-1",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "clumn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "title fw-700 mb-30",
                                        children: "Instagram"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "insta flex mb-20 rest",
                                        children: digital_footer_namespaceObject.bc.map((post, idx)=>idx < 3 && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: `${idx !== 2 ? "mr-20" : ""} full-width`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: post.url,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: post.image,
                                                        alt: ""
                                                    })
                                                })
                                            }, idx)
                                        )
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "insta flex rest",
                                        children: digital_footer_namespaceObject.bc.map((post, idx)=>idx >= 3 && /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: `${idx !== 5 ? "mr-20" : ""} full-width`,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: post.url,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                        src: post.image,
                                                        alt: ""
                                                    })
                                                })
                                            }, idx)
                                        )
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "sub-footer pt-50",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "horizontal-link fz-13",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "rest",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mr-30",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Privacy policy"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "mr-30",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Legal notice"
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/#",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: "Terms of service"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "copyrights d-flex justify-content-end",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "fz-13",
                                        children: [
                                            "\xa9 2025 www.diatradaou.com is Proudly Powered by",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "underline",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    href: digital_footer_namespaceObject.Qz.H,
                                                    rel: "noreferrer",
                                                    target: "_blank",
                                                    className: `ms-1 ${type == "purple-red" ? "gr-purple-red-text" : ""} ${type == "purple-light" ? "gr-blue2-text" : ""}`,
                                                    children: digital_footer_namespaceObject.Qz.u
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            }),
            type == "purple-light" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "wave-1 top revers-x bg-img",
                style: {
                    backgroundImage: "url('img/waves/wave-white2.svg')"
                }
            }) : null
        ]
    });
};
/* harmony default export */ const DigitalFooter = (Footer);


/***/ }),

/***/ 5927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const About = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "section-padding gr-purple-light-bg to-up position-re bord-thin-top",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 valign",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "intro-img-shape full-width",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "svg-shape-img",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                viewBox: "0 0 500 500",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                width: "100%",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                                                            id: "shape1",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M418.5,334.5Q384,419,293.5,437Q203,455,117,405.5Q31,356,39,254Q47,152,121,79.5Q195,7,287.5,46.5Q380,86,416.5,168Q453,250,418.5,334.5Z",
                                                                fill: "#d1d8e0"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("image", {
                                                        x: "0",
                                                        y: "0",
                                                        width: "100%",
                                                        height: "100%",
                                                        clipPath: "url(#shape1)",
                                                        xlinkHref: "img/about/02.jpg",
                                                        preserveAspectRatio: "none"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "svg-sub-bg",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                    viewBox: "0 0 500 500",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    xmlnsXlink: "http://www.w3.org/1999/xlink",
                                                    width: "100%",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M418.5,334.5Q384,419,293.5,437Q203,455,117,405.5Q31,356,39,254Q47,152,121,79.5Q195,7,287.5,46.5Q380,86,416.5,168Q453,250,418.5,334.5Z",
                                                        fill: "#f7f7f7"
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "exp valign gr-blue2-bg",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "full-width",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: "fw-700",
                                                    children: "20"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    children: [
                                                        "Years Of ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        " Experience"
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 valign",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "sub-head radius mb-20",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "fz-12 ls2 text-u",
                                            children: "Highly expertise"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "mb-20 fz-38 fw-700",
                                        children: "Diatrada Group."
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "Where we specialize in propelling your blockchain and cryptocurrency projects to new heights"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex mt-50",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "item flex full-width",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "icon-flex mr-20",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            children: "320"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "cont-flex valign",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                children: [
                                                                    "Perfect ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                    " Products"
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "item flex full-width",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "icon-flex mr-20",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                            children: "100%"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "cont-flex valign",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                children: [
                                                                    "Positive ",
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                                    " Feedback"
                                                                ]
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "wave-1 bottom bg-img",
                style: {
                    backgroundImage: "url('img/waves/wave-white2.svg')"
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ 2433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Blog2)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/main/blog2.json
const blog2_namespaceObject = JSON.parse('[{"image":"img/blog/8.jpg","tag":"Trending","author":"Diatrada Group","date":"2025","title":"Discover how We can help you with your technology investment projects in the most private and secure way.."},{"image":"img/blog/9.jpg","tag":"Trending","author":"Diatrada Group","date":"2025","title":"You will always have our support 24 hours a day."},{"image":"img/blog/10.jpg","tag":"Trending","author":"Diatrada Group","date":"2025","title":"Analytics to help understand your customers."}]');
;// CONCATENATED MODULE: ./src/components/Main/Blog2/index.jsx

/* eslint-disable @next/next/no-img-element */ 

const Blog = ({ grblue  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "blog-grid section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row mb-100",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-7",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "simple-head",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "sub-head radius mb-20",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "fz-12 ls2 text-u",
                                            children: "articles"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: `fz-40 ${grblue ? "fw-700" : "fw-800 gr-purple-red-text inline"}`,
                                            children: "Latest News"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-5 justify-content-end valign",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "s-title valign ml-auto",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h6", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "blog-grid-modern.html",
                                            children: "Read all news"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                            className: "icon fz-20 pe-7s-angle-right"
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: blog2_namespaceObject.map((blog, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item box-shadow crv",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "img",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: blog.image,
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "tags",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: "/blog-grid-clean",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        children: blog.tag
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "cont",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "info",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "author",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            children: blog.author
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "date",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: `${grblue ? "gr-blue-text" : "gr-purple-red-text"}`,
                                                            children: blog.date
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "title",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                    className: "fw-700 fz-18",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "/#",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            children: blog.title
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }, idx)
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const Blog2 = (Blog);


/***/ }),

/***/ 87:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8028);
/* harmony import */ var _data_main_clients_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8394);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

/* eslint-disable @next/next/no-img-element */ 



const Clients = ({ slides  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "clients-carsouel shad up",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container radius-15",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-sm-2 sm-hide",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "item flex",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "icon-flex mr-20",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "fz-40",
                                        children: [
                                            "15",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {})
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "cont-flex valign",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                            className: "text-left fz-13 fw-500",
                                            children: [
                                                "Side ",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                "Partners"
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-sm-10 valign",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
                            id: "content-carousel-container-unq-2",
                            autoplay: {
                                delay: 500,
                                disableOnInteraction: false
                            },
                            /* pagination={{
                clickable: false,
              }} */ // navigation={true}
                            modules: [
                                swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay
                            ],
                            className: "swiper-container",
                            slidesPerView: slides ? 5 : 4,
                            spaceBetween: 0,
                            speed: 1000,
                            loop: true,
                            breakpoints: {
                                0: {
                                    slidesPerView: 3
                                },
                                640: {
                                    slidesPerView: 3
                                },
                                768: {
                                    slidesPerView: 3
                                },
                                1024: {
                                    slidesPerView: slides ? 5 : 4
                                }
                            },
                            children: _data_main_clients_json__WEBPACK_IMPORTED_MODULE_4__.map((brand, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "item",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "img",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: brand.image,
                                                    alt: ""
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Split__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#0",
                                                        className: "link",
                                                        "data-splitting": true,
                                                        children: brand.title
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                }, idx)
                            )
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clients);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3055:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9485);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_3__);





const Header = ()=>{
    const { 0: isOpen , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const openVideo = (e)=>{
        e.preventDefault();
        setOpen(true);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "full-height land2 valign gr-purple-light-bg to-up",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-6 valign",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "cont",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "sub-head radius mb-10",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Web3 + Solar Energy"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                    className: "fw-700",
                                    children: [
                                        "Blockchain ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        " with data analytics for your business"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Unlock the future of finance with our expert and electronic money licensing and blockchain solutions."
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mt-40 flex",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: "/diatrada-services",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    className: "butn butn-md gr-purple2-bg text-light radius-30",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text slide-up",
                                                            children: "Our Services"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text slide-down",
                                                            children: "Our Services"
                                                        })
                                                    ]
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "valign",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                href: "#",
                                                className: "btn vid underline",
                                                onClick: openVideo,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "fw-500 fz-13",
                                                        children: "View Our Story"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                        className: "fas fa-play fz-12 ml-5"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "img half-abs",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "svg-img",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            x: "0px",
                            y: "0px",
                            viewBox: "0 0 288 288",
                            xmlns: "http://www.w3.org/2000/svg",
                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                            width: "100%",
                            id: "blobSvg",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                                        id: "shape",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            fill: "#d1d8e0",
                                            d: "",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                                                repeatCount: "indefinite",
                                                attributeName: "d",
                                                dur: "25s",
                                                values: "M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z"
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("image", {
                                    x: "0",
                                    y: "0",
                                    width: "100%",
                                    height: "100%",
                                    clipPath: "url(#shape)",
                                    xlinkHref: "img/background/s1.jpg",
                                    preserveAspectRatio: "none"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "svg-color opacity-5",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            x: "0px",
                            y: "0px",
                            viewBox: "0 0 288 288",
                            xmlns: "http://www.w3.org/2000/svg",
                            xmlnsXlink: "http://www.w3.org/1999/xlink",
                            width: "100%",
                            id: "blobSvg1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                        id: "gradient1",
                                        x1: "0%",
                                        y1: "0%",
                                        x2: "0%",
                                        y2: "100%",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                offset: "1000%",
                                                style: {
                                                    stopColor: "#efebfd"
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                offset: "0%",
                                                style: {
                                                    stopColor: "transparent"
                                                }
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    fill: "url(#gradient1)",
                                    d: "",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                                        repeatCount: "indefinite",
                                        attributeName: "d",
                                        dur: "12s",
                                        values: "M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z"
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
             false && /*#__PURE__*/ 0
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 2383:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var _data_main_portfolio3_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8763);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

/* eslint-disable @next/next/no-img-element */ 



const Portfolio = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "portfolio-simp-crus section-padding pb-0",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row mb-100",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "simple-head md-mb10",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "sub-head radius mb-20",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "fz-12 ls2 text-u",
                                            children: "Portfolio"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                        className: "fz-40 fw-700",
                                        children: "Case Studies"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 valign",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "We are a multicultural team open to research and attentive to technological changes, to help you with your projects."
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "work-crus",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                    spaceBetween: 50,
                                    slidesPerView: 3,
                                    autoplay: {
                                        delay: 1000,
                                        disableOnInteraction: false
                                    },
                                    /* pagination={{
                clickable: false,
                }} */ navigation: true,
                                    //modules={[Autoplay]}
                                    modules: [
                                        swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay,
                                        swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination,
                                        swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation
                                    ],
                                    loop: true,
                                    speed: 1000,
                                    id: "content-carousel-container-unq-3",
                                    className: "swiper-container",
                                    breakpoints: {
                                        0: {
                                            slidesPerView: 1
                                        },
                                        640: {
                                            slidesPerView: 2
                                        },
                                        1024: {
                                            slidesPerView: 3
                                        }
                                    },
                                    children: _data_main_portfolio3_json__WEBPACK_IMPORTED_MODULE_4__.map((slide, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "item",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "img",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: slide.image,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "info mt-20 text-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                className: "fw-600",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                                    href: "/#",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                        children: slide.title
                                                                    })
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "tag",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                    href: "#0",
                                                                    children: slide.type
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }, idx)
                                    )
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "swiper-pagination"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolio);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slidedown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(172);
/* harmony import */ var react_slidedown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slidedown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_main_accordions_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2012);






const Section = ()=>{
    const { 0: accordions , 1: setAccordions  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_data_main_accordions_json__WEBPACK_IMPORTED_MODULE_4__);
    const openAccordion = (e)=>{
        document.querySelectorAll(".accordion.shadwo .item").forEach((accordion)=>accordion.classList.remove("active")
        );
        let item = e.target.closest(".item");
        item.classList.add("active");
        let newAccordions = accordions.map((accordion, idx)=>{
            if (item.id.split("-")[1] == idx) accordion.closed = false;
            else accordion.closed = true;
            return accordion;
        });
        setAccordions(newAccordions);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "section-padding position-re",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6 valign",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "content md-mb50",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "sub-head radius mb-20",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "fz-12 ls2 text-u",
                                            children: "Highly expertise"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "mb-20 fz-38 fw-700",
                                        children: "Robust Legal Structure"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: "We help you build a solid legal foundation for your crypto ventures, ensuring compliance and peace of mind"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/diatrada-contact",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            className: "butn butn-md gr-purple2-bg text-light radius-30 mt-40",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text slide-up",
                                                    children: "View More"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "text slide-down",
                                                    children: "View More"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "content",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "accordion shadwo",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: "mb-40 text-center fw-600",
                                            children: "Do you have any question ?"
                                        }),
                                        accordions.map((accordion, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `item ${idx == 1 ? "active" : ""} ${idx == accordion.length - 1 ? "mb-0" : ""}`,
                                                id: `accordion-${idx}`,
                                                onClick: openAccordion,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "title",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                    className: "fz-13 text-u ls2 fw-600",
                                                                    children: accordion.title
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "ico"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_slidedown__WEBPACK_IMPORTED_MODULE_2__.SlideDown, {
                                                            className: "accordion-info active",
                                                            closed: accordion.closed,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: accordion.details
                                                            })
                                                        })
                                                    ]
                                                })
                                            }, idx)
                                        )
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "shape-out left huge-shape opacity-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "svg-color",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 288 288",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                        width: "100%",
                        id: "blobSvg2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                    id: "gradient2",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "0%",
                                    y2: "100%",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                            offset: "1000%",
                                            style: {
                                                stopColor: "#efebfd"
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                            offset: "0%",
                                            style: {
                                                stopColor: "transparent"
                                            }
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                fill: "url(#gradient2)",
                                d: "",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("animate", {
                                    repeatCount: "indefinite",
                                    attributeName: "d",
                                    dur: "20s",
                                    values: "M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z; M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z; M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);


/***/ }),

/***/ 1333:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Services3)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/main/services3.json
const services3_namespaceObject = JSON.parse('[{"icon":"pe-7s-mouse","title":"Sustainable Innovation","solidColor":"#dbffeb","color":"green","details":"Harness the power of solar energy with our state-of-the-art solutions that support clean energy production and environmental sustainability"},{"icon":"pe-7s-airplay","title":"Robust Legal Structure","solidColor":"#ffdbdb","color":"red","details":"We help you build a solid legal foundation for your crypto ventures"},{"icon":"pe-7s-news-paper","title":"legally team and technologically advanced","solidColor":"#dbdeff","color":"blue","details":"Proven Expertise with a track record of success, we navigate the complexities of cryptocurrency and blockchain projects"}]');
;// CONCATENATED MODULE: ./src/components/Main/Services3/index.jsx



const Services = ()=>{
    (0,external_react_.useEffect)(()=>{
        document.querySelectorAll("[data-solid-color]").forEach((el)=>el.style.backgroundColor = el.dataset.solidColor
        );
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "services section-padding pt-60",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "row justify-content-center mb-100",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "simple-head md-mb10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                        className: "sub-head radius mb-20",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "fz-12 ls2 text-u",
                                            children: "Services"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "fz-40 fw-700",
                                        children: "Best Services"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-6 valign",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "text",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Blockchain with data analytics for your business to help you build a solid foundation for your crypto ventures, ensuring compliance and peace of mind"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: services3_namespaceObject.map((service, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "item",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: `icon-font ${service.icon} fz-40 mb-30 ${service.color}-color bg-solid-color circle-100 rest`,
                                        "data-solid-color": service.solidColor
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                        className: "mb-15 fz-20",
                                        children: service.title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: service.details
                                    })
                                ]
                            })
                        }, idx)
                    )
                })
            ]
        })
    });
};
/* harmony default export */ const Services3 = (Services);


/***/ }),

/***/ 3493:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3015);
/* harmony import */ var _data_main_testimonials3_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(941);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__]);
swiper_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* eslint-disable @next/next/no-img-element */ 

const Testimonials = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: "section-padding gr-purple-light-bg position-re bord-thin-bottom",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-lg-11 position-re",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row justify-content-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-lg-10",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "testim-simp-crus",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {
                                            id: "content-carousel-container-unq-4",
                                            className: "swiper-container",
                                            slidesPerView: 1,
                                            spaceBetween: 0,
                                            speed: 1000,
                                            loop: true,
                                            children: _data_main_testimonials3_json__WEBPACK_IMPORTED_MODULE_2__.map((testimonial, idx)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "item text-center",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "img mb-30",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: testimonial.author.avatar,
                                                                    alt: ""
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "text",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                                                    className: "fz-28 fw-400 line-height-50",
                                                                    children: testimonial.comment
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "info mt-30",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                        className: "mb-5",
                                                                        children: testimonial.author.name
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                        children: testimonial.author.position
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }, idx)
                                            )
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "simg-testim",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "img1 circle-50",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "img/testimonials/c2.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "img2 circle-80",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "img/testimonials/c3.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "img3 circle-40",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "img/testimonials/c1.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "img4 circle-40",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "img/testimonials/c3.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "img5 circle-60",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "img/testimonials/c1.jpg",
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "img6 circle-70",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "img/testimonials/c2.jpg",
                                            alt: ""
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "wave-1 top revers-x bg-img",
                style: {
                    backgroundImage: "url('img/waves/wave-white2.svg')"
                }
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6694:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_main_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3693);
/* harmony import */ var _components_Common_StickyBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1874);
/* harmony import */ var _components_Common_FixedSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9408);
/* harmony import */ var _components_Main_Header3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3055);
/* harmony import */ var _components_Main_Clients__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87);
/* harmony import */ var _components_Main_Services3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1333);
/* harmony import */ var _components_Main_About2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5927);
/* harmony import */ var _components_Main_Portfolio3__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2383);
/* harmony import */ var _components_Main_Section2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6452);
/* harmony import */ var _components_Main_Testimonials3__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3493);
/* harmony import */ var _components_Main_Blog2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2433);
/* harmony import */ var _components_Footers_DigitalFooter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9008);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Main_Clients__WEBPACK_IMPORTED_MODULE_7__, _components_Main_Portfolio3__WEBPACK_IMPORTED_MODULE_10__, _components_Main_Testimonials3__WEBPACK_IMPORTED_MODULE_12__]);
([_components_Main_Clients__WEBPACK_IMPORTED_MODULE_7__, _components_Main_Portfolio3__WEBPACK_IMPORTED_MODULE_10__, _components_Main_Testimonials3__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

/* eslint-disable @next/next/no-css-tags */ 

//= Layout

//= Components











const DiaTrada = ()=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        document.body.classList.add("land-demo2");
        const removeClasses = [
            "index-bus1",
            "index-corporate",
            "index-restaurant",
            "index-arch",
            "index-freelancer",
            "cr-agency",
            "index-main",
            "mobile-app",
            "gr-orange-bg",
            "nft-market"
        ];
        document.body.classList.remove(...removeClasses);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Diatrada OU"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "canonical",
                        href: "https://www.diatradaou.com"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_main_light__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                defaultTheme: "dark",
                defaultLogoTheme: "dark",
                defaultLogoTitle: "logotitle",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_StickyBar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Common_FixedSearch__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Main_Header3__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Main_Clients__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        slides: 5
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Main_Services3__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Main_About2__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Main_Portfolio3__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Main_Section2__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Main_Testimonials3__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Main_Blog2__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                        grblue: true
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footers_DigitalFooter__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {
                        footerClass: "purple-light-bg position-re pb-40 mt-80",
                        type: "purple-light"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiaTrada);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8394:
/***/ ((module) => {

module.exports = JSON.parse('[{"image":"img/brands/01-brands.svg","title":"https://www.diatradaou.com/"},{"image":"img/brands/02-brands.svg","title":"https://www.diatradaou.com/"},{"image":"img/brands/03-brands.svg","title":"https://www.diatradaou.com/"},{"image":"img/brands/04-brands.svg","title":"https://www.diatradaou.com/"},{"image":"img/brands/05-brands.svg","title":"https://www.diatradaou.com/"},{"image":"img/brands/06-brands.svg","title":"https://www.diatradaou.com/"},{"image":"img/brands/07-brands.svg","title":"https://www.diatradaou.com/"},{"image":"img/brands/08-brands.svg","title":"https://www.diatradaou.com/"},{"image":"img/brands/09-brands.svg","title":"https://www.diatradaou.com/"},{"image":"img/brands/10-brands.svg","title":"https://www.diatradaou.com/"},{"image":"img/brands/11-brands.svg","title":"https://www.diatradaou.com/"},{"image":"img/brands/12-brands.svg","title":"https://www.diatradaou.com/"},{"image":"img/brands/13-brands.svg","title":"https://www.diatradaou.com/"},{"image":"img/brands/14-brands.svg","title":"https://www.diatradaou.com/"},{"image":"img/brands/15-brands.svg","title":"https://www.diatradaou.com/"},{"image":"img/brands/16-brands.svg","title":"https://www.diatradaou.com/"},{"image":"img/brands/17-brands.svg","title":"https://www.diatradaou.com/"}]');

/***/ }),

/***/ 8763:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"image":"img/works/3d/1.jpg","type":"Affordable Investment","title":"Affordable Investment"},{"id":2,"image":"img/works/3d/13.jpg","type":"Innovation & Efficiency","title":"Innovation & Efficiency"},{"id":3,"image":"img/works/3d/14.jpg","type":"Mining Cryptocurrencies","title":"Mining Cryptocurrencies"},{"id":4,"image":"img/works/3d/12.jpg","type":"Solar Energy Project","title":"Solar Energy Project"},{"id":5,"image":"img/works/3d/2.jpg","type":"Expert Guidance","title":"Expert Guidance"}]');

/***/ }),

/***/ 941:
/***/ ((module) => {

module.exports = JSON.parse('[{"comment":"Always be ready and prepare for changes and the advancements of tech and involved every second","author":{"name":"Raul R","avatar":"img/testimonials/1.jpg","position":"Diatrada Group"}}]');

/***/ })

};
;