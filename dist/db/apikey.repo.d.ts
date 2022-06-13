import { Logger } from "@nestjs/common";
import { ApikeyModel } from "./models/apikey.model";
export declare class ApikeyRepository {
    private readonly apikeyModel;
    logger: Logger;
    constructor(apikeyModel: typeof ApikeyModel);
    create(apiKey: string): Promise<ApikeyModel>;
    find(apikey: string): Promise<ApikeyModel>;
}
