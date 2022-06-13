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
exports.CommitResponse = void 0;
const graphql_1 = require("@nestjs/graphql");
const sequelize_typescript_1 = require("sequelize-typescript");
let Commiter = class Commiter extends sequelize_typescript_1.Model {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Commiter.prototype, "name", void 0);
Commiter = __decorate([
    (0, graphql_1.ObjectType)()
], Commiter);
let Commit = class Commit extends sequelize_typescript_1.Model {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], Commit.prototype, "message", void 0);
__decorate([
    (0, graphql_1.Field)(() => Commiter),
    __metadata("design:type", Commiter)
], Commit.prototype, "committer", void 0);
Commit = __decorate([
    (0, graphql_1.ObjectType)()
], Commit);
let CommitResponse = class CommitResponse extends sequelize_typescript_1.Model {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CommitResponse.prototype, "sha", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CommitResponse.prototype, "html_url", void 0);
__decorate([
    (0, graphql_1.Field)(() => Commit),
    __metadata("design:type", Commit)
], CommitResponse.prototype, "commit", void 0);
CommitResponse = __decorate([
    (0, graphql_1.ObjectType)()
], CommitResponse);
exports.CommitResponse = CommitResponse;
//# sourceMappingURL=commit.response.js.map