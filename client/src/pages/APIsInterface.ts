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

export interface GitHubRepoInterface {
    id: string,
    name: string,
    html_url: LinkStyle,
    language: string,
    created_at: string,
    updated_at: string
}

export interface GithubUser {
    name: string,
    public_repos: number,
    public_gists: number,
    html_url: string,
    avatar_url: string
}

export interface Gist {
    id: string;
    owner: {
      login: string;
    };
    files: {
      [filename: string]: GistFile;
    };
  }
  
  export interface GistFile {
    filename: string;
    type: string;
    language: string;
  }