export interface GitHubRepository {
  id: number;
  name: string;
  full_name: string;
  html_url: string;

  description: string | null;

  language: string | null;

  stargazers_count: number;

  forks_count: number;

  updated_at: string;

  homepage: string |null;

  topics: string[];

  default_branch: string;

  visibility: string;

  open_issues_count: number;
}