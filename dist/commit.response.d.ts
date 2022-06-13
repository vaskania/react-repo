import { Model } from 'sequelize-typescript';
import { ICommit, ICommiter } from './common/interfaces/ICommit';
declare class Commiter extends Model<ICommiter> {
    name: string;
}
declare class Commit extends Model {
    message: string;
    committer: Commiter;
}
export declare class CommitResponse extends Model<ICommit> {
    sha: string;
    html_url: string;
    commit: Commit;
}
export {};
