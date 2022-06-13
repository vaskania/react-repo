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
exports.ApikeyInterceptor = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_service_1 = require("./auth.service");
let ApikeyInterceptor = class ApikeyInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    async intercept(context, next) {
        const ctx = graphql_1.GqlExecutionContext.create(context);
        const { apikey } = ctx.getContext().req.headers;
        if (!apikey) {
            throw new common_1.ForbiddenException('invalid apikey');
        }
        const isApikeyValid = await this.authService.validateApiKey(apikey);
        if (!isApikeyValid) {
            throw new common_1.ForbiddenException('invalid apikey');
        }
        return next.handle();
    }
};
ApikeyInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], ApikeyInterceptor);
exports.ApikeyInterceptor = ApikeyInterceptor;
//# sourceMappingURL=auth.interceptor.js.map