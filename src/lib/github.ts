import { GitHubRepository } from "@/types/github";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

console.log("GitHub Username:", GITHUB_USERNAME);
console.log("GitHub Token Exists:", !!GITHUB_TOKEN);

export async function getRepository(repository: string): Promise<GitHubRepository> {

  console.log(
    "Fetching:",
    `https://api.github.com/repos/${GITHUB_USERNAME}/${repository}`
  );

  const response = await fetch(
    `https://api.github.com/repos/${GITHUB_USERNAME}/${repository}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        ...(GITHUB_TOKEN && {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
        }),
      },
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    const error = await response.text();

    throw new Error(
      `GitHub API Error (${response.status}): ${error}`
    );
  }

  return response.json();
}