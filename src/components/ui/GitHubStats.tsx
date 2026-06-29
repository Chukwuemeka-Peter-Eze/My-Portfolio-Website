"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa6";

type GitHubUser = {
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

type GitHubRepo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
};

const GITHUB_USERNAME = "Chukwuemeka-Peter-Eze";

export default function GitHubStats() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchGitHub() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`
          ),
        ]);

        if (!userRes.ok || !reposRes.ok) throw new Error("GitHub API error");

        const userData = await userRes.json();
        const reposData = await reposRes.json();

        setUser(userData);
        setRepos(reposData);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHub();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-3">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="h-24 animate-pulse rounded-2xl bg-slate-200 dark:bg-slate-800"
          />
        ))}
      </div>
    );
  }

  if (error || !user) {
    return null;
  }

  return (
    <div className="space-y-8">
      {/* Stats Row */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center dark:border-slate-800 dark:bg-slate-900">
          <p className="text-3xl font-bold text-cyan-500">{user.public_repos}</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Public Repos</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center dark:border-slate-800 dark:bg-slate-900">
          <p className="text-3xl font-bold text-cyan-500">{user.followers}</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Followers</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center dark:border-slate-800 dark:bg-slate-900">
          <p className="text-3xl font-bold text-cyan-500">
            {new Date(user.created_at).getFullYear()}
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Member Since</p>
        </div>
      </div>

      {/* Live Repos */}
      {repos.length > 0 && (
        <div className="grid gap-4 md:grid-cols-2">
          {repos.map((repo) => (
            <a          
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <h3 className="truncate font-semibold text-slate-900 group-hover:text-cyan-500 dark:text-white">
                    {repo.name}
                  </h3>
                  {repo.description && (
                    <p className="mt-1 text-sm leading-5 text-slate-500 dark:text-slate-400 line-clamp-2">
                      {repo.description}
                    </p>
                  )}
                </div>
                <FaGithub className="mt-0.5 shrink-0 text-slate-400" />
              </div>

              <div className="mt-4 flex items-center gap-4 text-xs text-slate-400">
                {repo.language && (
                  <span className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-cyan-400" />
                    {repo.language}
                  </span>
                )}
                {repo.stargazers_count > 0 && (
                  <span className="flex items-center gap-1">
                    <FaStar size={10} />
                    {repo.stargazers_count}
                  </span>
                )}
                {repo.forks_count > 0 && (
                  <span className="flex items-center gap-1">
                    <FaCodeBranch size={10} />
                    {repo.forks_count}
                  </span>
                )}
                <span className="ml-auto">
                  Updated {new Date(repo.updated_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}