webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{title}}!\n  </h1>\n  <document-list></document-list>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Alfresco Angular Favorites';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cat__ = __webpack_require__("../../../../../src/app/cat/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__documents__ = __webpack_require__("../../../../../src/app/documents/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__cat__["a" /* CatComponent */],
            __WEBPACK_IMPORTED_MODULE_7__documents__["b" /* DocumentListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__documents__["a" /* DocumentItemComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MdRippleModule */]
        ],
        exports: [],
        providers: [__WEBPACK_IMPORTED_MODULE_7__documents__["d" /* DocumentsService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/cat/cat.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  border-radius: 100%;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n  -webkit-animation: smooth-bounce 3s ease-in-out infinite;\n          animation: smooth-bounce 3s ease-in-out infinite;\n}\n\n@-webkit-keyframes smooth-bounce {\n  0%, 100% {\n    -webkit-transform: none;\n            transform: none;\n  }\n\n  50% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n  }\n}\n\n@keyframes smooth-bounce {\n  0%, 100% {\n    -webkit-transform: none;\n            transform: none;\n  }\n\n  50% {\n    -webkit-transform: scale(1.1);\n            transform: scale(1.1);\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cat/cat.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"http://lorempixel.com/100/100/cats/\" alt=\"just a random cat\" />\n"

/***/ }),

/***/ "../../../../../src/app/cat/cat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CatComponent = (function () {
    function CatComponent() {
    }
    CatComponent.prototype.ngOnInit = function () {
    };
    return CatComponent;
}());
CatComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cat',
        template: __webpack_require__("../../../../../src/app/cat/cat.component.html"),
        styles: [__webpack_require__("../../../../../src/app/cat/cat.component.css")],
    }),
    __metadata("design:paramtypes", [])
], CatComponent);

//# sourceMappingURL=cat.component.js.map

/***/ }),

/***/ "../../../../../src/app/cat/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cat_component__ = __webpack_require__("../../../../../src/app/cat/cat.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__cat_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/documents/document-item/document-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card {\n  margin: 10px auto;\n}\n\nmd-card-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\nmd-card-actions {\n  text-align: right;\n}\n\nmd-icon {\n  vertical-align: bottom;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/documents/document-item/document-item.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-header>\n    <md-card-title>\n      <md-icon>{{type == 'file' ? 'insert_drive_file' : 'folder'}}</md-icon>\n      <span>{{name}}</span>\n    </md-card-title>\n  </md-card-header>\n  <!-- <md-card-content>\n    <p>\n      some sort of preview of the doc...\n    </p>\n  </md-card-content> -->\n  <md-card-actions>\n    <button md-button>OPEN</button>\n  </md-card-actions>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/documents/document-item/document-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocumentItemComponent = (function () {
    function DocumentItemComponent() {
    }
    DocumentItemComponent.prototype._updateType = function (name) {
        var extension = name.split('.')[1];
        if (extension) {
            this.type = 'file';
        }
        else {
            this.type = 'directory';
        }
    };
    Object.defineProperty(DocumentItemComponent.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
            this._updateType(name);
        },
        enumerable: true,
        configurable: true
    });
    DocumentItemComponent.prototype.ngOnInit = function () {
    };
    return DocumentItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], DocumentItemComponent.prototype, "name", null);
DocumentItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'document-item',
        template: __webpack_require__("../../../../../src/app/documents/document-item/document-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/documents/document-item/document-item.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DocumentItemComponent);

//# sourceMappingURL=document-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/documents/document-item/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__document_item_component__ = __webpack_require__("../../../../../src/app/documents/document-item/document-item.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__document_item_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/documents/document-list/document-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 100%;\n      grid-template-columns: 100%;\n  grid-gap: 2%;\n}\n\n@media (min-width: 480px) {\n  .wrapper {\n    -ms-grid-columns: 47% 47%;\n        grid-template-columns: 47% 47%;\n    grid-gap: 3%;\n  }\n}\n\n@media (min-width: 768px) {\n  .wrapper {\n    -ms-grid-columns: 32% 32% 32%;\n        grid-template-columns: 32% 32% 32%;\n    grid-gap: 2%;\n  }\n}\n\n@media (min-width: 768px) {\n  .wrapper {\n    -ms-grid-columns: 24% 24% 24% 24%;\n        grid-template-columns: 24% 24% 24% 24%;\n    grid-gap: 1%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/documents/document-list/document-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"documents.length === 0\">Please look at the follwing cat <cat></cat> while we fetch your documents!</p>\n\n<div class=\"wrapper\">\n  <document-item\n    *ngFor=\"let document of documents\"\n    [name]=document.name>\n  </document-item>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/documents/document-list/document-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__documents_service_service__ = __webpack_require__("../../../../../src/app/documents/documents-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentListComponent = (function () {
    function DocumentListComponent(documentsService) {
        this.documentsService = documentsService;
        this.documents = [];
    }
    DocumentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.documentsService
            .getAll()
            .subscribe(function (docs) { return _this.documents = docs; });
    };
    return DocumentListComponent;
}());
DocumentListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'document-list',
        template: __webpack_require__("../../../../../src/app/documents/document-list/document-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/documents/document-list/document-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__documents_service_service__["a" /* DocumentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__documents_service_service__["a" /* DocumentsService */]) === "function" && _a || Object])
], DocumentListComponent);

var _a;
//# sourceMappingURL=document-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/documents/document-list/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__document_list_component__ = __webpack_require__("../../../../../src/app/documents/document-list/document-list.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__document_list_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/documents/document.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentModel; });
var DocumentModel = (function () {
    function DocumentModel(name) {
        this.name = name;
    }
    return DocumentModel;
}());

//# sourceMappingURL=document.model.js.map

/***/ }),

/***/ "../../../../../src/app/documents/documents-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_RX__ = __webpack_require__("../../../../rxjs/RX.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_RX___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_RX__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__("../../../../../src/app/documents/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DocumentsService = (function () {
    function DocumentsService(http) {
        this.http = http;
        this.baseUrl = '//jsonplaceholder.typicode.com';
    }
    DocumentsService.prototype.getAll = function () {
        var _this = this;
        return this.http
            .get(this.baseUrl + "/albums")
            .map(function (res) { return _this.mapDocuments(res); })
            .catch(this.handleError);
    };
    DocumentsService.prototype.mapDocuments = function (response) {
        return response.json().map(this.toDocument);
    };
    DocumentsService.prototype.handleError = function (error) {
        var errorMsg = error.message || 'oops! we seem to have an issue contacting the server!';
        console.error('documents service error', errorMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errorMsg);
    };
    DocumentsService.prototype.toDocument = function (doc) {
        var shouldConvertToFile = Math.random() > 0.5;
        var name = doc.title;
        // fake it
        // force the document to be a file
        if (shouldConvertToFile) {
            name += '.txt';
        }
        return new __WEBPACK_IMPORTED_MODULE_4__index__["c" /* DocumentModel */](name);
    };
    return DocumentsService;
}());
DocumentsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], DocumentsService);

var _a;
//# sourceMappingURL=documents-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/documents/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__document_list__ = __webpack_require__("../../../../../src/app/documents/document-list/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__document_list__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__document_item__ = __webpack_require__("../../../../../src/app/documents/document-item/index.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__document_item__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__document_model__ = __webpack_require__("../../../../../src/app/documents/document.model.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__document_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__documents_service_service__ = __webpack_require__("../../../../../src/app/documents/documents-service.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__documents_service_service__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
