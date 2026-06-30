"use client";

import { useEffect, useState } from "react";
import {
  FaGithub,
  FaStar,
  FaCodeBranch,
  FaUsers,
  FaCalendar,
  FaLayerGroup,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { github, githubCategories } from "@/data/github";

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

const GITHUB_USERNAME = github.username;

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

        const userData: GitHubUser = await userRes.json();
        const reposData: GitHubRepo[] = await reposRes.json();

        setUser(userData);
        setRepos(Array.isArray(reposData) ? reposData : []);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHub();
  }, []);

  const totalStars = repos.reduce(
    (sum, repo) => sum + (repo.stargazers_count || 0),
    0
  );

  if (loading) {
    return (
      <div className="space-y-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-28 animate-pulse rounded-2xl bg-slate-200 dark:bg-slate-800"
            />
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="h-16 animate-pulse rounded-xl bg-slate-200 dark:bg-slate-800"
            />
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-40 animate-pulse rounded-2xl bg-slate-200 dark:bg-slate-800"
            />
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="h-28 animate-pulse rounded-2xl bg-slate-200 dark:bg-slate-800"
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Four Engineering Metric Cards */}
      {user && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center dark:border-slate-800 dark:bg-slate-900">
            <FaGithub className="mx-auto mb-2 text-cyan-500" size={20} />
            <p className="text-3xl font-bold text-cyan-500">
              {user.public_repos}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Public Repos
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center dark:border-slate-800 dark:bg-slate-900">
            <FaUsers className="mx-auto mb-2 text-cyan-500" size={20} />
            <p className="text-3xl font-bold text-cyan-500">
              {user.followers}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Followers
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center dark:border-slate-800 dark:bg-slate-900">
            <FaStar className="mx-auto mb-2 text-cyan-500" size={20} />
            <p className="text-3xl font-bold text-cyan-500">{totalStars}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Total Stars
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center dark:border-slate-800 dark:bg-slate-900">
            <FaCalendar className="mx-auto mb-2 text-cyan-500" size={20} />
            <p className="text-3xl font-bold text-cyan-500">
              {new Date(user.created_at).getFullYear()}
            </p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Member Since
            </p>
          </div>
        </div>
      )}

      {/* Engineering Domain Cards */}
      {githubCategories.length > 0 && (
        <div>
          <div className="mb-4 flex items-center gap-2">
            <FaLayerGroup className="text-cyan-500" size={16} />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Engineering Domains
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {githubCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-xl border border-slate-200 bg-white p-4 text-center transition duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${category.color}`}
                >
                  {category.title}
                </span>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                  {category.count} {category.count === 1 ? "repo" : "repos"}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Featured Repositories */}
      {github.featured.length > 0 && (
        <div>
          <div className="mb-4 flex items-center gap-2">
            <FaStar className="text-cyan-500" size={16} />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Featured Repositories
            </h3>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {github.featured.map((project) => (
              <a             
                key={project.name}
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-semibold text-slate-900 group-hover:text-cyan-500 dark:text-white">
                    {project.name}
                  </h4>
                  <FaArrowUpRightFromSquare
                    className="mt-1 shrink-0 text-slate-400 group-hover:text-cyan-500"
                    size={12}
                  />
                </div>

                <p className="mt-2 flex-1 text-sm leading-5 text-slate-500 dark:text-slate-400 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-medium text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Latest Repositories (Live from GitHub API) */}
      {!error && repos.length > 0 && (
        <div>
          <div className="mb-4 flex items-center gap-2">
            <FaGithub className="text-cyan-500" size={16} />
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Latest Activity
            </h3>
          </div>
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
                  <div className="min-w-0 flex-1">
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

                <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
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
                    Updated{" "}
                    {new Date(repo.updated_at).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {error && (
        <p className="text-center text-sm text-slate-400">
          Live GitHub data is temporarily unavailable — showing featured projects above.
        </p>
      )}
    </div>
  );
}