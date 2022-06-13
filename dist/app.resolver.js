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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const rxjs_1 = require("rxjs");
const apikey_service_1 = require("./apikey/apikey.service");
const app_service_1 = require("./app.service");
const auth_interceptor_1 = require("./auth/auth.interceptor");
const commit_response_1 = require("./commit.response");
let AppResolver = class AppResolver {
    constructor(apikeyService, appService) {
        this.apikeyService = apikeyService;
        this.appService = appService;
    }
    async getApikey() {
        return await this.apikeyService.create();
    }
    async getCommits(page, limit) {
        try {
            const commits = await (0, rxjs_1.firstValueFrom)(this.appService.getCommits(+page, +limit));
            return commits;
        }
        catch (error) { }
    }
    ping() {
        return 'hello world';
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => String, { name: 'apikey' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppResolver.prototype, "getApikey", null);
__decorate([
    (0, graphql_1.Query)(() => [commit_response_1.CommitResponse]),
    (0, common_1.UseInterceptors)(auth_interceptor_1.ApikeyInterceptor),
    __param(0, (0, graphql_1.Args)('page', { nullable: true })),
    __param(1, (0, graphql_1.Args)('limit', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], AppResolver.prototype, "getCommits", null);
__decorate([
    (0, graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppResolver.prototype, "ping", null);
AppResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [apikey_service_1.ApikeyService,
        app_service_1.AppService])
], AppResolver);
exports.AppResolver = AppResolver;
//# sourceMappingURL=app.resolver.js.map