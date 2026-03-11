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
    jsonFile: ".next/server/app/top.rsc",
    htmlFile: ".next/server/app/top.html",
    jsonBudgetBytes: 300 * KB,
    htmlBudgetBytes: 300 * KB,
  },
  {
    route: "/champions",
    jsonFile: ".next/server/app/champions.rsc",
    htmlFile: ".next/server/app/champions.html",
    jsonBudgetBytes: 300 * KB,
    htmlBudgetBytes: 700 * KB,
  },
  {
    route: "/blog",
    jsonFile: ".next/server/app/blog.rsc",
    htmlFile: ".next/server/app/blog.html",
  },
  {
    route: "/search",
    jsonFile: ".next/server/app/search.rsc",
    htmlFile: ".next/server/app/search.html",
  },
  {
    route: "/tierList",
    jsonFile: ".next/server/app/tierList.rsc",
    htmlFile: ".next/server/app/tierList.html",
  },
];

const formatKb = (bytes) => `${(bytes / KB).toFixed(1)}KB`;

const getFileSize = async (relativePath) => {
  const absolutePath = path.join(process.cwd(), relativePath);
  try {
    const stats = await fs.stat(absolutePath);
    return stats.size;
  } catch (error) {
    if (error && error.code === "ENOENT") {
      return null;
    }

    throw error;
  }
};

const run = async () => {
  let hasFailure = false;

  console.log("Route performance checks (build artifacts):");
  console.log(`- JSON budget: ${formatKb(budgets.jsonBytes)}`);
  console.log(`- HTML budget: ${formatKb(budgets.htmlBytes)}`);

  for (const check of checks) {
    const metrics = [];
    const jsonBudgetBytes = check.jsonBudgetBytes ?? budgets.jsonBytes;
    const htmlBudgetBytes = check.htmlBudgetBytes ?? budgets.htmlBytes;

    if (check.jsonFile) {
      const jsonBytes = await getFileSize(check.jsonFile);
      if (jsonBytes === null) {
        metrics.push({
          label: "JSON",
          missing: true,
          path: check.jsonFile,
        });
      } else {
        const jsonOk = jsonBytes <= jsonBudgetBytes;
        metrics.push({
          label: "JSON",
          bytes: jsonBytes,
          budgetBytes: jsonBudgetBytes,
          ok: jsonOk,
          path: check.jsonFile,
        });
      }
    }

    if (check.htmlFile) {
      const htmlBytes = await getFileSize(check.htmlFile);
      if (htmlBytes === null) {
        metrics.push({
          label: "HTML",
          missing: true,
          path: check.htmlFile,
        });
      } else {
        const htmlOk = htmlBytes <= htmlBudgetBytes;
        metrics.push({
          label: "HTML",
          bytes: htmlBytes,
          budgetBytes: htmlBudgetBytes,
          ok: htmlOk,
          path: check.htmlFile,
        });
      }
    }

    hasFailure = hasFailure || metrics.some((metric) => metric.ok === false);

    console.log(`\n${check.route}`);
    for (const metric of metrics) {
      if (metric.missing) {
        console.log(`- ${metric.label}: SKIPPED (missing file) (${metric.path})`);
        continue;
      }

      console.log(
        `- ${metric.label}: ${formatKb(metric.bytes)} / ${formatKb(metric.budgetBytes)} ${
          metric.ok ? "OK" : "OVER BUDGET"
        } (${metric.path})`,
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
