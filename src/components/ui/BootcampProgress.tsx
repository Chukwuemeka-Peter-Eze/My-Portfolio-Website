"use client";

import { bootcamp } from "@/data/bootcamp";
import { useState } from "react";

const statusConfig = {
  completed: {
    label: "Completed",
    bg: "bg-green-500",
    text: "text-green-700 dark:text-green-400",
    border: "border-green-500",
    dot: "bg-green-500",
  },
  "in-progress": {
    label: "In Progress",
    bg: "bg-amber-400",
    text: "text-amber-700 dark:text-amber-400",
    border: "border-amber-400",
    dot: "bg-amber-400",
  },
  planned: {
    label: "Planned",
    bg: "bg-slate-300 dark:bg-slate-700",
    text: "text-slate-500 dark:text-slate-400",
    border: "border-slate-300 dark:border-slate-700",
    dot: "bg-slate-300 dark:bg-slate-600",
  },
};

export default function BootcampProgress() {
  const [expanded, setExpanded] = useState(false);

  const completed = bootcamp.modules.filter(
    (m) => m.status === "completed"
  ).length;
  const inProgress = bootcamp.modules.filter(
    (m) => m.status === "in-progress"
  ).length;
  const progressPercent = Math.round(
    (completed / bootcamp.totalModules) * 100
  );

  const visibleModules = expanded
    ? bootcamp.modules
    : bootcamp.modules.slice(0, 8);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {bootcamp.name}
          </h3>
            <a         
            href={bootcamp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 text-sm text-cyan-500 hover:underline"
          >
            techworld-with-nana.com →
          </a>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-3xl font-bold text-cyan-500">
              {progressPercent}%
            </p>
            <p className="text-xs text-slate-400">Complete</p>
          </div>
        </div>
      </div>

      {/* Overall Progress Bar */}
      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between text-sm">
          <span className="text-slate-500 dark:text-slate-400">
            Module {bootcamp.currentModule} of {bootcamp.totalModules}
          </span>
          <span className="text-slate-500 dark:text-slate-400">
            Expected: {bootcamp.expectedCompletion}
          </span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
          <div
            className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 transition-all duration-700"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Stats Row */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center dark:border-slate-700 dark:bg-slate-800">
          <p className="text-2xl font-bold text-green-500">{completed}</p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Completed
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center dark:border-slate-700 dark:bg-slate-800">
          <p className="text-2xl font-bold text-amber-500">{inProgress}</p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            In Progress
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center dark:border-slate-700 dark:bg-slate-800">
          <p className="text-2xl font-bold text-slate-400">
            {bootcamp.totalModules - completed - inProgress}
          </p>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Remaining
          </p>
        </div>
      </div>

      {/* Module List */}
      <div className="mt-8 space-y-3">
        {visibleModules.map((module) => {
          const config = statusConfig[module.status];
          return (
            <div
              key={module.number}
              className={`flex items-center gap-4 rounded-xl border p-4 transition ${
                module.status === "in-progress"
                  ? "border-amber-400/40 bg-amber-50 dark:bg-amber-500/5"
                  : module.status === "completed"
                  ? "border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/50"
                  : "border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
              }`}
            >
              {/* Number */}
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ${config.bg}`}
              >
                {module.status === "completed" ? "✓" : module.number}
              </div>

              {/* Title */}
              <div className="flex-1 min-w-0">
                <p
                  className={`truncate text-sm font-medium ${
                    module.status === "planned"
                      ? "text-slate-400 dark:text-slate-500"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  Module {module.number} — {module.title}
                </p>
                {module.projects.length > 0 && (
                  <p className="mt-0.5 text-xs text-slate-400">
                    {module.projects.length} project
                    {module.projects.length !== 1 ? "s" : ""}
                  </p>
                )}
              </div>

              {/* Status */}
              <span
                className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                  module.status === "completed"
                    ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                    : module.status === "in-progress"
                    ? "bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400"
                    : "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-500"
                }`}
              >
                {config.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Show More */}
      {bootcamp.modules.length > 8 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 w-full rounded-xl border border-slate-200 py-3 text-sm font-medium text-slate-500 transition hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:text-slate-400"
        >
          {expanded
            ? "Show Less"
            : `Show ${bootcamp.modules.length - 8} More Modules`}
        </button>
      )}
    </div>
  );
}