"use client";

import { useEffect, useState } from "react";

type MediumArticle = {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  category: string;
  description: string;
};

const MEDIUM_USERNAME = "ChukwuemekaPeterEze";

function extractImageFromContent(content: string): string {
  const match = content.match(/<img[^>]+src="([^"]+)"/);
  return match ? match[1] : "";
}

function extractTextFromHTML(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 180) + "...";
}

export default function MediumFeed() {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const rssUrl = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`;

        const res = await fetch(proxyUrl);
        if (!res.ok) throw new Error("Fetch failed");

        const data = await res.json();
        const parser = new DOMParser();
        const xml = parser.parseFromString(data.contents, "text/xml");
        const items = Array.from(xml.querySelectorAll("item")).slice(0, 6);

        const mapped: MediumArticle[] = items.map((item) => {
          const title = item.querySelector("title")?.textContent?.trim() ?? "";
          const link = item.querySelector("link")?.textContent?.trim() ?? "#";
          const pubDateRaw = item.querySelector("pubDate")?.textContent ?? "";
          const pubDate = pubDateRaw
            ? new Date(pubDateRaw).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })
            : "";

          const contentEncoded =
            item.getElementsByTagNameNS("*", "encoded")[0]?.textContent ?? "";
          const description = extractTextFromHTML(contentEncoded);
          const thumbnail = extractImageFromContent(contentEncoded);

          const categoryNodes = item.querySelectorAll("category");
          const category =
            categoryNodes[0]?.textContent?.trim() ?? "DevOps";

          return { title, link, pubDate, thumbnail, category, description };
        });

        setArticles(mapped);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="grid gap-8 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="h-48 rounded-t-2xl bg-slate-200 dark:bg-slate-800" />
            <div className="space-y-3 p-6">
              <div className="h-3 w-20 rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-3 w-full rounded bg-slate-200 dark:bg-slate-800" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error || articles.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center dark:border-slate-800 dark:bg-slate-900">
        <p className="text-slate-500 dark:text-slate-400">
          Visit{" "}
         <a    
            href={`https://medium.com/@${MEDIUM_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:underline"
          >
            Medium
          </a>{" "}
          to read all articles directly.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {articles.map((article) => (
        <a
          key={article.link}
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="relative h-48 overflow-hidden bg-slate-100 dark:bg-slate-800">
            {article.thumbnail ? (
              <img
                src={article.thumbnail}
                alt={article.title}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <span className="text-5xl opacity-20">✍️</span>
              </div>
            )}
          </div>

          <div className="p-6">
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="truncate rounded-full bg-cyan-500 px-2.5 py-0.5 text-xs font-semibold text-slate-950">
                {article.category}
              </span>
              <span className="shrink-0 text-xs text-slate-400">
                {article.pubDate}
              </span>
            </div>

            <h3 className="line-clamp-2 text-base font-bold leading-snug text-slate-900 transition group-hover:text-cyan-500 dark:text-white dark:group-hover:text-cyan-400">
              {article.title}
            </h3>

            <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
              {article.description}
            </p>

            <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-cyan-500">
              Read on Medium
              <span className="transition group-hover:translate-x-1">→</span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}