"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const config_1 = require("../config/config");
const apikey_repo_1 = require("./apikey.repo");
const apikey_model_1 = require("./models/apikey.model");
let DbModule = class DbModule {
};
DbModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forRootAsync({
                useFactory: () => (Object.assign(Object.assign({}, (0, config_1.sequelizeConfig)()), { models: [apikey_model_1.ApikeyModel] })),
            }),
            sequelize_1.SequelizeModule.forFeature([apikey_model_1.ApikeyModel]),
        ],
        providers: [apikey_repo_1.ApikeyRepository],
        exports: [apikey_repo_1.ApikeyRepository],
    })
], DbModule);
exports.DbModule = DbModule;
//# sourceMappingURL=db.module.js.map