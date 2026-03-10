#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";

const KB = 1024;
const budgets = {
  jsonBytes: 128 * KB,
  htmlBytes: 220 * KB,
};

const checks = [
  {
    route: "/top",
    jsonFile: ".next/server/pages/top.json",
    htmlFile: ".next/server/pages/top.html",
  },
  {
    route: "/top/skillscore",
    jsonFile: ".next/server/pages/top/skillscore.json",
    htmlFile: ".next/server/pages/top/skillscore.html",
  },
  {
    route: "/top/mostgames",
    jsonFile: ".next/server/pages/top/mostgames.json",
    htmlFile: ".next/server/pages/top/mostgames.html",
  },
  {
    route: "/top/champion-mastery",
    jsonFile: ".next/server/pages/top/champion-mastery.json",
    htmlFile: ".next/server/pages/top/champion-mastery.html",
  },
  {
    route: "/tierList",
    htmlFile: ".next/server/pages/tierList.html",
  },
  {
    route: "/summoners/[name]",
    htmlFile: ".next/server/pages/summoners/[name].html",
  },
];

const formatKb = (bytes) => `${(bytes / KB).toFixed(1)}KB`;

const getFileSize = async (relativePath) => {
  const absolutePath = path.join(process.cwd(), relativePath);
  const stats = await fs.stat(absolutePath);
  return stats.size;
};

const run = async () => {
  let hasFailure = false;

  console.log("Route performance checks (build artifacts):");
  console.log(`- JSON budget: ${formatKb(budgets.jsonBytes)}`);
  console.log(`- HTML budget: ${formatKb(budgets.htmlBytes)}`);

  for (const check of checks) {
    const metrics = [];

    if (check.jsonFile) {
      const jsonBytes = await getFileSize(check.jsonFile);
      const jsonOk = jsonBytes <= budgets.jsonBytes;
      metrics.push({
        label: "JSON",
        bytes: jsonBytes,
        ok: jsonOk,
        path: check.jsonFile,
      });
    }

    if (check.htmlFile) {
      const htmlBytes = await getFileSize(check.htmlFile);
      const htmlOk = htmlBytes <= budgets.htmlBytes;
      metrics.push({
        label: "HTML",
        bytes: htmlBytes,
        ok: htmlOk,
        path: check.htmlFile,
      });
    }

    hasFailure = hasFailure || metrics.some((metric) => !metric.ok);

    console.log(`\n${check.route}`);
    for (const metric of metrics) {
      console.log(
        `- ${metric.label}: ${formatKb(metric.bytes)} ${metric.ok ? "OK" : "OVER BUDGET"} (${
          metric.path
        })`,
      );
    }
  }

  if (hasFailure) {
    console.error("\nRoute performance checks failed.");
    process.exit(1);
  }

  console.log("\nRoute performance checks passed.");
};

run().catch((error) => {
  console.error("Failed to run route performance checks:", error);
  process.exit(1);
});
