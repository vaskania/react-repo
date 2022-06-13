import { ApikeyService } from 'src/apikey/apikey.service';
export declare class AuthService {
    private readonly apikeyService;
    constructor(apikeyService: ApikeyService);
    validateApiKey(apiKey: string): Promise<boolean>;
}
