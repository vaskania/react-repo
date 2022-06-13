export interface ICommiter {
    name: string;
    email: string;
    date: Date;
}
export interface ICommit {
    sha: string;
    commit: {
        message: string;
        committer: ICommiter;
    };
    html_url: string;
}
