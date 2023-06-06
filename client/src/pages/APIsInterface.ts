export interface RepoApiInterface {
    id: string,
    name: string,
    url: string,
    language: string,
    updated: string
}

export interface ApiErrorInterface {
    isError: boolean,
    errorCode: number,
    errorMessage: string
}

export interface GitHubApiInterface {
    id: string,
    name: string,
    gistUrl: string
}