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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
require("./rxjs-extensions");
var app_component_1 = require("./app.component");
var zeidon_1 = require("./zeidon");
var zeidon_rest_client_1 = require("./zeidon-rest-client");
var zeidon_rest_client_2 = require("./zeidon-rest-client");
var zeidon_angular_1 = require("./zeidon-angular");
var orders_component_1 = require("./orders.component");
var northwind_service_1 = require("./northwind.service");
// If we are running under browserSync then we'll set the port number to be 8080.
// This makes it easier to switch back and forth between dev mode and running under Jetty.
var zeidonRestPort = window.location.port;
if (window.___browserSync___) {
    console.log("Running under browserSync");
    zeidonRestPort = "8080"; // Set port to be jetty running in different process.
}
var REST_VALUES = {
    restUrl: "http://" + window.location.hostname + ":" + zeidonRestPort + "/northwind"
};
var AppModule = (function () {
    // This constructor is required to force Angular injector to load the ZeidonConfiguration.
    function AppModule(zeidonConfig) {
        this.zeidonConfig = zeidonConfig;
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    redirectTo: '/orders',
                    pathMatch: 'full'
                },
                {
                    path: 'orders',
                    component: orders_component_1.OrdersComponent
                }
            ])
        ],
        declarations: [app_component_1.AppComponent,
            orders_component_1.OrdersComponent,
            zeidon_angular_1.ErrorElementDirective],
        providers: [northwind_service_1.NorthwindService,
            { provide: zeidon_rest_client_1.ZeidonRestValues, useValue: REST_VALUES },
            { provide: zeidon_1.ZeidonConfiguration, useClass: zeidon_rest_client_2.ZeidonRestConfiguration },
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [zeidon_1.ZeidonConfiguration])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map