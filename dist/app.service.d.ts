import { HttpService } from '@nestjs/axios';
export declare class AppService {
    private httpService;
    constructor(httpService: HttpService);
    getCommits(page: number, limit: number): import("rxjs").Observable<any>;
    private filterData;
}
