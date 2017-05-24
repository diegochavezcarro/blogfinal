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
var model_1 = require("../model");
var user_1 = require("../service/user");
var login_1 = require("../service/login");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(userService, loginService, router) {
        this.userService = userService;
        this.loginService = loginService;
        this.router = router;
        this.user = new model_1.User();
        this.showLoading = false;
        this.errorMessage = null;
    }
    LoginComponent.prototype.onClick = function (event) {
        var _this = this;
        event.preventDefault();
        this.showLoading = true;
        this.errorMessage = null;
        this.userService.insert(this.user).subscribe(function (result) { return _this.onLoginResult(result); }, function (error) { return _this.onLoginError(error); });
    };
    LoginComponent.prototype.onLoginResult = function (result) {
        console.log(result);
        this.loginService.setLogin(result.user, result.token);
        this.router.navigate(['/']);
    };
    LoginComponent.prototype.onLoginError = function (error) {
        this.showLoading = false;
        console.log(error);
        this.errorMessage = error._body;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        providers: [user_1.UserService],
        template: "\n    \n    <div class=\"col-md-4 col-md-offset-4\" *ngIf=\"!showLoading\">\n    \n    <div *ngIf=\"errorMessage\" class=\"alert alert-danger\" role=\"alert\">\n        {{errorMessage}}\n    </div>\n    \n    <form ngForm>\n        <div class=\"form-group\">\n            <label for=\"login\">Login</label>\n            <input type=\"text\" class=\"form-control\" id=\"login\" name=\"login\" name=\"login\" required placeholder=\"Login\" [(ngModel)]=\"user.login\" name=\"login\">\n        </div>\n        <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" required placeholder=\"Password\" [(ngModel)]=\"user.password\" name=\"password\">\n        </div>\n        <div class=\"checkbox\">\n            <label>\n            <input id=\"createAccount\" type=\"checkbox\" [(ngModel)]=\"user.isNew\" name=\"isNew\"> Create Account?\n            </label>\n        </div>\n        <div class=\"form-group\" *ngIf=\"user.isNew\">\n            <label for=\"login\">Your Name</label>\n            <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" placeholder=\"Your Name\" [(ngModel)]=\"user.name\" name=\"name\">\n        </div>\n        \n        <button type=\"submit\" class=\"btn btn-default pull-right\" (click)=\"onClick($event)\" >Login</button>\n        \n    </form>\n    </div>\n    \n    <div class=\"col-md-4 col-md-offset-4\" *ngIf=\"showLoading\">\n        Aguarde...\n    </div>\n     "
    }),
    __metadata("design:paramtypes", [user_1.UserService, login_1.LoginService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.js.map