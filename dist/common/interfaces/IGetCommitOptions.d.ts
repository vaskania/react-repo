interface IPaginationOptions {
    limit?: number;
    skip?: number;
}
export interface IGetCommitOptions {
    pagination: IPaginationOptions;
}
export {};
