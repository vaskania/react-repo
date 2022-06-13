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
exports.ApikeyService = void 0;
const common_1 = require("@nestjs/common");
const crypto_1 = require("crypto");
const apikey_repo_1 = require("../db/apikey.repo");
const util_1 = require("util");
let ApikeyService = class ApikeyService {
    constructor(apikeyRepository) {
        this.apikeyRepository = apikeyRepository;
        this.logger = new common_1.Logger('apikey.serice');
        this.hash = (0, util_1.promisify)(crypto_1.pbkdf2);
    }
    async create() {
        try {
            const token = (0, crypto_1.randomUUID)();
            const salt = (0, crypto_1.randomBytes)(16).toString('hex');
            const apikey = (await this.hash(token, salt, 1000, 25, 'sha256')).toString('hex');
            const generatedApikey = await this.apikeyRepository.create(apikey);
            return generatedApikey.key;
        }
        catch (error) {
            this.logger.error(error.message);
        }
    }
    async isValidKey(apikey) {
        if (!apikey)
            throw new Error('invalid apikey');
        const key = await this.apikeyRepository.find(apikey);
        if (!key)
            throw new Error('invalid apikey');
        return true;
    }
};
ApikeyService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [apikey_repo_1.ApikeyRepository])
], ApikeyService);
exports.ApikeyService = ApikeyService;
//# sourceMappingURL=apikey.service.js.map