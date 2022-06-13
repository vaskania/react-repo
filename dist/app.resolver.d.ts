import { ApikeyService } from './apikey/apikey.service';
import { AppService } from './app.service';
export declare class AppResolver {
    private readonly apikeyService;
    private readonly appService;
    constructor(apikeyService: ApikeyService, appService: AppService);
    getApikey(): Promise<string>;
    getCommits(page?: number, limit?: number): Promise<any>;
    ping(): string;
}
