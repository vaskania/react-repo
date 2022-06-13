import { ApikeyRepository } from 'src/db/apikey.repo';
export declare class ApikeyService {
    private readonly apikeyRepository;
    private logger;
    private hash;
    constructor(apikeyRepository: ApikeyRepository);
    create(): Promise<string>;
    isValidKey(apikey: string): Promise<boolean>;
}
