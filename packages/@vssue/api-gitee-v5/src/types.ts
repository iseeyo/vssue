export interface ResponseAccessToken {
  access_token: string;
}

export interface ResponseUser {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
}

export interface ResponseIssue {
  number: string;
  title: string;
  body: string;
  comments: number;
  html_url: string;
}

export interface ResponseComment {
  id: number;
  user: ResponseUser;
  body: string;
  body_html?: undefined;
  created_at: string;
  updated_at?: undefined;
}
