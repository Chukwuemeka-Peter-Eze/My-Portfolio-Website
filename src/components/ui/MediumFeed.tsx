"use client";

import { useEffect, useState } from "react";

type MediumArticle = {
  title: string;
  link: string;
  pubDate: string;
  thumbnail: string;
  categories: string[];
  description: string;
};

const MEDIUM_USERNAME = "ChukwuemekaPeterEze";

export default function MediumFeed() {
  const [articles, setArticles] = useState<MediumArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const rss = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
        const api = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rss)}&api_key=public&count=6`;
        const res = await fetch(api);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        if (data.status !== "ok") throw new Error("Bad response");

        const mapped: MediumArticle[] = data.items.map((item: any) => {
          const imgMatch = item.content?.match(/<img[^>]+src="([^">]+)"/);
          const thumbnail = item.thumbnail || (imgMatch ? imgMatch[1] : "/blogs/default.png");
          const description = item.description
            ?.replace(/<[^>]+>/g, "")
            ?.slice(0, 160) + "...";

          return {
            title: item.title,
            link: item.link,
            pubDate: new Date(item.pubDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }),
            thumbnail,
            categories: item.categories?.slice(0, 2) || ["Article"],
            description,
          };
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
          <div key={i} className="animate-pulse rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <div className="h-48 rounded-t-2xl bg-slate-200 dark:bg-slate-800" />
            <div className="p-6 space-y-3">
              <div className="h-3 w-20 rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-4 w-full rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-3 w-full rounded bg-slate-200 dark:bg-slate-800" />
              <div className="h-3 w-2/3 rounded bg-slate-200 dark:bg-slate-800" />
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
          Articles are loading. Visit{" "}
            <a                 
            href={`https://medium.com/@${MEDIUM_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-500 hover:underline"
          >
            Medium
          </a>{" "}
          to read them directly.
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
            <img
              src={article.thumbnail}
              alt={article.title}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "/blogs/default.png";
              }}
            />
          </div>

          <div className="p-6">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex gap-2">
                {article.categories.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full bg-cyan-500 px-2.5 py-0.5 text-xs font-semibold text-slate-950"
                  >
                    {cat}
                  </span>
                ))}
              </div>
              <span className="text-xs text-slate-400">{article.pubDate}</span>
            </div>

            <h3 className="line-clamp-2 text-base font-bold leading-snug text-slate-900 group-hover:text-cyan-500 dark:text-white dark:group-hover:text-cyan-400">
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