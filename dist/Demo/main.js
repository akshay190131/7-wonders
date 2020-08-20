(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _wonder1_wonder1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wonder1/wonder1.component */ "./src/app/wonder1/wonder1.component.ts");
/* harmony import */ var _wonder2_wonder2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wonder2/wonder2.component */ "./src/app/wonder2/wonder2.component.ts");
/* harmony import */ var _wonder3_wonder3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wonder3/wonder3.component */ "./src/app/wonder3/wonder3.component.ts");
/* harmony import */ var _wonder4_wonder4_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wonder4/wonder4.component */ "./src/app/wonder4/wonder4.component.ts");
/* harmony import */ var _wonder5_wonder5_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wonder5/wonder5.component */ "./src/app/wonder5/wonder5.component.ts");
/* harmony import */ var _wonder6_wonder6_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wonder6/wonder6.component */ "./src/app/wonder6/wonder6.component.ts");
/* harmony import */ var _wonder7_wonder7_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wonder7/wonder7.component */ "./src/app/wonder7/wonder7.component.ts");











const routes = [
    { path: 'wonder1', component: _wonder1_wonder1_component__WEBPACK_IMPORTED_MODULE_2__["Wonder1Component"] },
    { path: 'wonder2', component: _wonder2_wonder2_component__WEBPACK_IMPORTED_MODULE_3__["Wonder2Component"] },
    { path: 'wonder3', component: _wonder3_wonder3_component__WEBPACK_IMPORTED_MODULE_4__["Wonder3Component"] },
    { path: 'wonder4', component: _wonder4_wonder4_component__WEBPACK_IMPORTED_MODULE_5__["Wonder4Component"] },
    { path: 'wonder5', component: _wonder5_wonder5_component__WEBPACK_IMPORTED_MODULE_6__["Wonder5Component"] },
    { path: 'wonder6', component: _wonder6_wonder6_component__WEBPACK_IMPORTED_MODULE_7__["Wonder6Component"] },
    { path: 'wonder7', component: _wonder7_wonder7_component__WEBPACK_IMPORTED_MODULE_8__["Wonder7Component"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = "h1[_ngcontent-%COMP%]{\r\n    margin:40px 40px ;\r\n    padding:20px 20px;\r\n    color: yellow;\r\n    background:black;\r\n    font-size:4rem;\r\n    text-align:center;\r\n}\r\nh2[_ngcontent-%COMP%]{\r\n    margin:40px 40px ;\r\n    padding:20px 20px;\r\n    color:red;\r\n    background:black;\r\n    font-size:3rem;\r\n    text-align:center;\r\n\r\n}\r\n.a[_ngcontent-%COMP%]{\r\n    margin:40px 40px ;\r\n    padding:20px 20px;\r\n    color:orange;\r\n    background:black;\r\n    font-size:2rem;\r\n\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    margin:40px 40px;\r\n    padding:20px 20px;\r\n    color:black;\r\n    background:orange;\r\n    font-size: 1.5rem;\r\n}\r\nh4[_ngcontent-%COMP%]{\r\n    margin:40px 40px;\r\n    padding:20px 20px;\r\n    color:white;\r\n    background:red;\r\n    font-size: 1.25rem\r\n}\r\nbody[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYzs7QUFFbEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGNBQWM7SUFDZDtBQUNKO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxe1xyXG4gICAgbWFyZ2luOjQwcHggNDBweCA7XHJcbiAgICBwYWRkaW5nOjIwcHggMjBweDtcclxuICAgIGNvbG9yOiB5ZWxsb3c7XHJcbiAgICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG4gICAgZm9udC1zaXplOjRyZW07XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5oMntcclxuICAgIG1hcmdpbjo0MHB4IDQwcHggO1xyXG4gICAgcGFkZGluZzoyMHB4IDIwcHg7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG4gICAgZm9udC1zaXplOjNyZW07XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuXHJcbn1cclxuLmF7XHJcbiAgICBtYXJnaW46NDBweCA0MHB4IDtcclxuICAgIHBhZGRpbmc6MjBweCAyMHB4O1xyXG4gICAgY29sb3I6b3JhbmdlO1xyXG4gICAgYmFja2dyb3VuZDpibGFjaztcclxuICAgIGZvbnQtc2l6ZToycmVtO1xyXG5cclxufVxyXG5oM3tcclxuICAgIG1hcmdpbjo0MHB4IDQwcHg7XHJcbiAgICBwYWRkaW5nOjIwcHggMjBweDtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgYmFja2dyb3VuZDpvcmFuZ2U7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5oNHtcclxuICAgIG1hcmdpbjo0MHB4IDQwcHg7XHJcbiAgICBwYWRkaW5nOjIwcHggMjBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZDpyZWQ7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW1cclxufVxyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn0iXX0= */";
class AppComponent {
    constructor() {
        this.title = 'Demo';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 54, vars: 0, consts: [["rel", "icon", "href", "assets/aks.webp"], ["routerLink", "/wonder1", 1, "a"], ["routerLink", "/wonder2", 1, "a"], ["routerLink", "/wonder3", 1, "a"], ["routerLink", "/wonder4", 1, "a"], ["routerLink", "/wonder5", 1, "a"], ["routerLink", "/wonder6", 1, "a"], ["routerLink", "/wonder7", 1, "a"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hello");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome to this Wonderful Virtual-Tour");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Here is the list of Wonders:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " wonder1: Great Wall of China (China) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " wonder2: Christ the Redeemer Statue (Rio de Janeiro) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " wonder3: Machu Picchu (Peru) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " wonder4: Chichen Itza (Yucatan Peninsula, Mexico) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " wonder5: The Roman Colosseum (Rome) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " wonder6: Taj Mahal (Agra, India) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " wonder7: Petra (Jordan) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Which Wonder would you like to visit :)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Wonder-1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Wonder-2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Wonder-3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Wonder-4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Wonder-5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Wonder-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Wonder-7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [_c0, _c0] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _wonder1_wonder1_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wonder1/wonder1.component */ "./src/app/wonder1/wonder1.component.ts");
/* harmony import */ var _wonder2_wonder2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wonder2/wonder2.component */ "./src/app/wonder2/wonder2.component.ts");
/* harmony import */ var _wonder3_wonder3_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wonder3/wonder3.component */ "./src/app/wonder3/wonder3.component.ts");
/* harmony import */ var _wonder4_wonder4_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wonder4/wonder4.component */ "./src/app/wonder4/wonder4.component.ts");
/* harmony import */ var _wonder5_wonder5_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wonder5/wonder5.component */ "./src/app/wonder5/wonder5.component.ts");
/* harmony import */ var _wonder6_wonder6_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./wonder6/wonder6.component */ "./src/app/wonder6/wonder6.component.ts");
/* harmony import */ var _wonder7_wonder7_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./wonder7/wonder7.component */ "./src/app/wonder7/wonder7.component.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _wonder1_wonder1_component__WEBPACK_IMPORTED_MODULE_4__["Wonder1Component"],
        _wonder2_wonder2_component__WEBPACK_IMPORTED_MODULE_5__["Wonder2Component"],
        _wonder3_wonder3_component__WEBPACK_IMPORTED_MODULE_6__["Wonder3Component"],
        _wonder4_wonder4_component__WEBPACK_IMPORTED_MODULE_7__["Wonder4Component"],
        _wonder5_wonder5_component__WEBPACK_IMPORTED_MODULE_8__["Wonder5Component"],
        _wonder6_wonder6_component__WEBPACK_IMPORTED_MODULE_9__["Wonder6Component"],
        _wonder7_wonder7_component__WEBPACK_IMPORTED_MODULE_10__["Wonder7Component"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _wonder1_wonder1_component__WEBPACK_IMPORTED_MODULE_4__["Wonder1Component"],
                    _wonder2_wonder2_component__WEBPACK_IMPORTED_MODULE_5__["Wonder2Component"],
                    _wonder3_wonder3_component__WEBPACK_IMPORTED_MODULE_6__["Wonder3Component"],
                    _wonder4_wonder4_component__WEBPACK_IMPORTED_MODULE_7__["Wonder4Component"],
                    _wonder5_wonder5_component__WEBPACK_IMPORTED_MODULE_8__["Wonder5Component"],
                    _wonder6_wonder6_component__WEBPACK_IMPORTED_MODULE_9__["Wonder6Component"],
                    _wonder7_wonder7_component__WEBPACK_IMPORTED_MODULE_10__["Wonder7Component"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/wonder1/wonder1.component.ts":
/*!**********************************************!*\
  !*** ./src/app/wonder1/wonder1.component.ts ***!
  \**********************************************/
/*! exports provided: Wonder1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wonder1Component", function() { return Wonder1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = "h1[_ngcontent-%COMP%]{\r\n    margin :20px 20px;\r\n    padding: 20px 20px;\r\n    color:white;\r\n    background:brown;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    border: yellow;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    margin :40px 40px;\r\n    padding: 40px 40px;\r\n    color: lightgreen;\r\n    background: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29uZGVyMS93b25kZXIxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3dvbmRlcjEvd29uZGVyMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBtYXJnaW4gOjIwcHggMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZDpicm93bjtcclxufVxyXG5pbWd7XHJcbiAgICBib3JkZXI6IHllbGxvdztcclxufVxyXG5we1xyXG4gICAgbWFyZ2luIDo0MHB4IDQwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHg7XHJcbiAgICBjb2xvcjogbGlnaHRncmVlbjtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcbiJdfQ== */";
class Wonder1Component {
    constructor() { }
    ngOnInit() {
    }
}
Wonder1Component.ɵfac = function Wonder1Component_Factory(t) { return new (t || Wonder1Component)(); };
Wonder1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Wonder1Component, selectors: [["app-wonder1"]], decls: 8, vars: 0, consts: [["src", "assets/index.jfif", "alt", "Great Wall of China", "width", "450px", "height", "380px"], ["src", "assets/gwoc2.jfif", "alt", "Great Wall of China", "width", "450px", "height", "380px"], ["src", "assets/gwoc3.jfif", "alt", "Great Wall of China", "width", "450px", "height", "380px"]], template: function Wonder1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Great Wall of China (China):\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Built between the 5th century B.C. and the 16th century, the Great Wall of China is a stone-and-earth fortification created to protect the borders of the Chinese Empire from invading Mongols. The Great Wall is actually a succession of multiple walls spanning approximately 4,000 miles, making it the world's longest manmade structure.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [_c0, _c0] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Wonder1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wonder1',
                templateUrl: './wonder1.component.html',
                styleUrls: ['./wonder1.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/wonder2/wonder2.component.ts":
/*!**********************************************!*\
  !*** ./src/app/wonder2/wonder2.component.ts ***!
  \**********************************************/
/*! exports provided: Wonder2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wonder2Component", function() { return Wonder2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Wonder2Component {
    constructor() { }
    ngOnInit() {
    }
}
Wonder2Component.ɵfac = function Wonder2Component_Factory(t) { return new (t || Wonder2Component)(); };
Wonder2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Wonder2Component, selectors: [["app-wonder2"]], decls: 9, vars: 0, consts: [["width", "200px", "height", "300px", "src", "assets/w2.jfif", "alt", "Christ the Redeemer Statue"], ["width", "400px", "height", "300px", "src", "assets/w4.jfif", "alt", "Christ the Redeemer Statue"], ["width", "400px", "height", "300px", "src", "assets/w3.jfif", "alt", "Christ the Redeemer Statue"], ["width", "400px", "height", "300px", "src", "assets/w6.jfif", "alt", "Christ the Redeemer Statue"]], template: function Wonder2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Christ the Redeemer Statue (Rio de Janeiro):\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The Art Deco-style Christ the Redeemer statue has been looming over the Brazilians from upon Corcovado mountain in an awe-inspiring state of eternal blessing since 1931. The 130-foot reinforced concrete-and-soapstone statue was designed by Heitor da Silva Costa and cost approximately $250,000 to build - much of the money was raised through donations. The statue has become an easily recognized icon for Rio and Brazil.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%]{\r\n    margin:20px 20px;\r\n    padding:20px 20px;\r\n    color:white;\r\n    background:brown;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    color: lightgreen;\r\n    background:black;\r\n    margin:40px 40px;\r\n    padding:40px 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29uZGVyMi93b25kZXIyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3dvbmRlcjIvd29uZGVyMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBtYXJnaW46MjBweCAyMHB4O1xyXG4gICAgcGFkZGluZzoyMHB4IDIwcHg7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6YnJvd247XHJcbn1cclxucHtcclxuICAgIGNvbG9yOiBsaWdodGdyZWVuO1xyXG4gICAgYmFja2dyb3VuZDpibGFjaztcclxuICAgIG1hcmdpbjo0MHB4IDQwcHg7XHJcbiAgICBwYWRkaW5nOjQwcHggNDBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Wonder2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wonder2',
                templateUrl: './wonder2.component.html',
                styleUrls: ['./wonder2.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/wonder3/wonder3.component.ts":
/*!**********************************************!*\
  !*** ./src/app/wonder3/wonder3.component.ts ***!
  \**********************************************/
/*! exports provided: Wonder3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wonder3Component", function() { return Wonder3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Wonder3Component {
    constructor() { }
    ngOnInit() {
    }
}
Wonder3Component.ɵfac = function Wonder3Component_Factory(t) { return new (t || Wonder3Component)(); };
Wonder3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Wonder3Component, selectors: [["app-wonder3"]], decls: 7, vars: 0, consts: [["width", "450px", "height", "300px", "src", "assets/a1.jfif", "alt", " Machu Picchu"], ["width", "450px", "height", "300px", "src", "assets/a3.jfif", "alt", " Machu Picchu"], ["width", "450px", "height", "300px", "src", "assets/a4.jfif", "alt", " Machu Picchu"]], template: function Wonder3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Machu Picchu (Peru):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Machu Picchu, an Incan city of sparkling granite precariously perched between 2 towering Andean peaks, is thought by scholars to have been a sacred archaeological center for the nearby Incan capital of Cusco. Built at the peak of the Incan Empire in the mid-1400s, this mountain citadel was later abandoned by the Incas. The site remained unknown except to locals until 1911, when it was rediscovered by archaeologist Hiram Bingham. The site can only be reached by foot, train or helicopter; most visitors visit by train from nearby Cusco.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%]{\r\n    margin :20px 20px;\r\n    padding: 20px 20px;\r\n    color:white;\r\n    background:brown;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    border: yellow;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    margin :40px 40px;\r\n    padding: 40px 40px;\r\n    color: lightgreen;\r\n    background: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29uZGVyMy93b25kZXIzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3dvbmRlcjMvd29uZGVyMy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBtYXJnaW4gOjIwcHggMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZDpicm93bjtcclxufVxyXG5pbWd7XHJcbiAgICBib3JkZXI6IHllbGxvdztcclxufVxyXG5we1xyXG4gICAgbWFyZ2luIDo0MHB4IDQwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHg7XHJcbiAgICBjb2xvcjogbGlnaHRncmVlbjtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Wonder3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wonder3',
                templateUrl: './wonder3.component.html',
                styleUrls: ['./wonder3.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/wonder4/wonder4.component.ts":
/*!**********************************************!*\
  !*** ./src/app/wonder4/wonder4.component.ts ***!
  \**********************************************/
/*! exports provided: Wonder4Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wonder4Component", function() { return Wonder4Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Wonder4Component {
    constructor() { }
    ngOnInit() {
    }
}
Wonder4Component.ɵfac = function Wonder4Component_Factory(t) { return new (t || Wonder4Component)(); };
Wonder4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Wonder4Component, selectors: [["app-wonder4"]], decls: 7, vars: 0, consts: [["width", "450px", "height", "300", "src", "assets/b1.jfif", "alt", "Chichen Itza"], ["width", "450px", "height", "300", "src", "assets/b2.jfif", "alt", "Chichen Itza"], ["width", "450px", "height", "300", "src", "assets/b3.jfif", "alt", "Chichen Itza"]], template: function Wonder4Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Chichen Itza (Yucatan Peninsula, Mexico):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "The genius and adaptability of Mayan culture can be seen in the splendid ruins of Chichen Itza. This powerful city, a trading center for cloth, slaves, honey and salt, flourished from approximately 800 to 1200, and acted as the political and economic hub of the Mayan civilization. The most familiar ruin at the site is El Caracol, a sophisticated astronomical observatory.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%]{\r\n    margin :20px 20px;\r\n    padding: 20px 20px;\r\n    color:white;\r\n    background:brown;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    border: yellow;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    margin :40px 40px;\r\n    padding: 40px 40px;\r\n    color: lightgreen;\r\n    background: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29uZGVyNC93b25kZXI0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3dvbmRlcjQvd29uZGVyNC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBtYXJnaW4gOjIwcHggMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZDpicm93bjtcclxufVxyXG5pbWd7XHJcbiAgICBib3JkZXI6IHllbGxvdztcclxufVxyXG5we1xyXG4gICAgbWFyZ2luIDo0MHB4IDQwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHg7XHJcbiAgICBjb2xvcjogbGlnaHRncmVlbjtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Wonder4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wonder4',
                templateUrl: './wonder4.component.html',
                styleUrls: ['./wonder4.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/wonder5/wonder5.component.ts":
/*!**********************************************!*\
  !*** ./src/app/wonder5/wonder5.component.ts ***!
  \**********************************************/
/*! exports provided: Wonder5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wonder5Component", function() { return Wonder5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Wonder5Component {
    constructor() { }
    ngOnInit() {
    }
}
Wonder5Component.ɵfac = function Wonder5Component_Factory(t) { return new (t || Wonder5Component)(); };
Wonder5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Wonder5Component, selectors: [["app-wonder5"]], decls: 7, vars: 0, consts: [["width", "450px", "height", "300px", "src", "assets/c1.jfif", "alt", "The Roman Colosseum"], ["width", "450px", "height", "300px", "src", "assets/c2.jfif", "alt", "The Roman Colosseum"], ["width", "450px", "height", "300px", "src", "assets/c3.jfif", "alt", "The Roman Colosseum"]], template: function Wonder5Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The Roman Colosseum (Rome):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Rome's, if not Italy's, most enduring icon is undoubtedly its Colosseum. Built between A.D. 70 and 80 A.D., it was in use for some 500 years. The elliptical structure sat nearly 50,000 spectators, who gathered to watch the gladiatorial events as well as other public spectacles, including battle reenactments, animal hunts and executions. Earthquakes and stone-robbers have left the Colosseum in a state of ruin, but portions of the structure remain open to tourists, and its design still influences the construction of modern-day amphitheaters, some 2,000 years later.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%]{\r\n    margin :20px 20px;\r\n    padding: 20px 20px;\r\n    color:white;\r\n    background:brown;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    border: yellow;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    margin :40px 40px;\r\n    padding: 40px 40px;\r\n    color: lightgreen;\r\n    background: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29uZGVyNS93b25kZXI1LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3dvbmRlcjUvd29uZGVyNS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBtYXJnaW4gOjIwcHggMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZDpicm93bjtcclxufVxyXG5pbWd7XHJcbiAgICBib3JkZXI6IHllbGxvdztcclxufVxyXG5we1xyXG4gICAgbWFyZ2luIDo0MHB4IDQwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHg7XHJcbiAgICBjb2xvcjogbGlnaHRncmVlbjtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Wonder5Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wonder5',
                templateUrl: './wonder5.component.html',
                styleUrls: ['./wonder5.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/wonder6/wonder6.component.ts":
/*!**********************************************!*\
  !*** ./src/app/wonder6/wonder6.component.ts ***!
  \**********************************************/
/*! exports provided: Wonder6Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wonder6Component", function() { return Wonder6Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Wonder6Component {
    constructor() { }
    ngOnInit() {
    }
}
Wonder6Component.ɵfac = function Wonder6Component_Factory(t) { return new (t || Wonder6Component)(); };
Wonder6Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Wonder6Component, selectors: [["app-wonder6"]], decls: 7, vars: 0, consts: [["width", "450px", "height", "300px", "src", "assets/d1.jfif", "alt", "Taj Mahal "], ["width", "450px", "height", "300px", "src", "assets/d2.jfif", "alt", "Taj Mahal "], ["width", "450px", "height", "300px", "src", "assets/d3.jfif", "alt", "Taj Mahal "]], template: function Wonder6Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Taj Mahal (Agra, India):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "A mausoleum commissioned for the wife of Mughal Emperor Shah Jahan, the Taj Mahal was built between 1632 and 1648. Considered the most perfect specimen of Muslim art in India, the white marble structure actually represents a number of architectural styles, including Persian, Islamic, Turkish and Indian. The Taj Mahal also encompasses formal gardens of raised pathways, sunken flower beds and a linear reflecting pool.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%]{\r\n    margin :20px 20px;\r\n    padding: 20px 20px;\r\n    color:white;\r\n    background:brown;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    border: yellow;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    margin :40px 40px;\r\n    padding: 40px 40px;\r\n    color: lightgreen;\r\n    background: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29uZGVyNi93b25kZXI2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3dvbmRlcjYvd29uZGVyNi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBtYXJnaW4gOjIwcHggMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZDpicm93bjtcclxufVxyXG5pbWd7XHJcbiAgICBib3JkZXI6IHllbGxvdztcclxufVxyXG5we1xyXG4gICAgbWFyZ2luIDo0MHB4IDQwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHg7XHJcbiAgICBjb2xvcjogbGlnaHRncmVlbjtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Wonder6Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wonder6',
                templateUrl: './wonder6.component.html',
                styleUrls: ['./wonder6.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/wonder7/wonder7.component.ts":
/*!**********************************************!*\
  !*** ./src/app/wonder7/wonder7.component.ts ***!
  \**********************************************/
/*! exports provided: Wonder7Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wonder7Component", function() { return Wonder7Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Wonder7Component {
    constructor() { }
    ngOnInit() {
    }
}
Wonder7Component.ɵfac = function Wonder7Component_Factory(t) { return new (t || Wonder7Component)(); };
Wonder7Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Wonder7Component, selectors: [["app-wonder7"]], decls: 7, vars: 0, consts: [["width", "450px", "height", "300px", "src", "assets/e1.jfif", "alt", "Petra "], ["width", "450px", "height", "300px", "src", "assets/e2.jfif", "alt", "Petra "], ["width", "450px", "height", "300px", "src", "assets/e3.jfif", "alt", "Petra "]], template: function Wonder7Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Petra (Jordan):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Declared a World Heritage Site in 1985, Petra was the capital of the Nabataean empire of King Aretas IV, and likely existed in its prime from 9 B.C. to A.D. 40. The members of this civilization proved to be early experts in manipulating water technology, constructing intricate tunnels and water chambers, which helped create an pseudo-oasis. A number of incredible structures carved into stone, a 4,000-seat amphitheater and the El-Deir monastery have also helped the site earn its fame.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["h1[_ngcontent-%COMP%]{\r\n    margin :20px 20px;\r\n    padding: 20px 20px;\r\n    color:white;\r\n    background:brown;\r\n}\r\nimg[_ngcontent-%COMP%]{\r\n    border: yellow;\r\n}\r\np[_ngcontent-%COMP%]{\r\n    margin :40px 40px;\r\n    padding: 40px 40px;\r\n    color: lightgreen;\r\n    background: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29uZGVyNy93b25kZXI3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3dvbmRlcjcvd29uZGVyNy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XHJcbiAgICBtYXJnaW4gOjIwcHggMjBweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgYmFja2dyb3VuZDpicm93bjtcclxufVxyXG5pbWd7XHJcbiAgICBib3JkZXI6IHllbGxvdztcclxufVxyXG5we1xyXG4gICAgbWFyZ2luIDo0MHB4IDQwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDQwcHg7XHJcbiAgICBjb2xvcjogbGlnaHRncmVlbjtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Wonder7Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wonder7',
                templateUrl: './wonder7.component.html',
                styleUrls: ['./wonder7.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Akshay\Desktop\Project1\demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map