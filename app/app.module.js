"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var navbar_module_1 = require('./navbar/navbar.module');
var slider_module_1 = require('./slider/slider.module');
var content_module_1 = require('./content/content.module');
var modal_module_1 = require('./modal/modal.module');
var register_module_1 = require('./register/register.module');
var receive_module_1 = require('./receive/receive.module');
var receive_component_1 = require('./receive/receive.component');
var register_component_1 = require('./register/register.component');
exports.routes = [
    { path: " ", component: register_component_1.RegisterComponent },
    { path: "Receive", component: receive_component_1.ReceiveComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                [router_1.RouterModule.forRoot(exports.routes)],
                navbar_module_1.NavbarModule,
                slider_module_1.SlideModule,
                content_module_1.ContentModule,
                modal_module_1.ModaltModule,
                register_module_1.RegisterModule,
                receive_module_1.ReceiveModule
            ],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map