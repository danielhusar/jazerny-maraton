// Generates public/results/<year>.pdf from src/data/results<year>.ts.
// Usage: npm run pdfs
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import type { Race, ResultsEvent, Runner } from "../src/data/results.ts";
import * as results2025 from "../src/data/results2025.ts";
import * as results2026 from "../src/data/results2026.ts";

const CHROME = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUT_DIR = join(import.meta.dirname, "../public/results");
const ALL_COLUMNS = ["5 km", "10 km", "15 km", "20 km", "polmaratón", "25 km", "30 km", "35 km", "40 km", "Maratón"];
const PODIUM = ["#ff0000", "#0070c0", "#00b050"];

const escape = (value: unknown) =>
  String(value ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]!);

const finalLabel = (race: Race) =>
  race.code === "42" ? "Maratón" : race.code === "21" ? "polmaratón" : `${Number(race.code)} km`;

const raceColumns = (race: Race) => {
  const columns = [...race.splitLabels];
  if (race.halfColumn !== undefined) columns.splice(columns.indexOf("20 km") + 1, 0, "polmaratón");
  return [...columns, finalLabel(race)];
};

const timeCells = (race: Race, runner: Runner) => {
  const cells = new Map<string, string | undefined>();
  race.splitLabels.forEach((label, i) => cells.set(label, runner.splits[i]));
  if (race.halfColumn !== undefined) cells.set("polmaratón", race.halfColumn);
  cells.set(finalLabel(race), runner.time);
  return cells;
};

const runnerRow = (event: ResultsEvent, race: Race, runner: Runner, columns: string[]) => {
  const color = PODIUM[runner.place - 1];
  const style = color ? ` style="color:${color};font-weight:bold"` : "";
  const cells = timeCells(race, runner);
  const final = finalLabel(race);
  return `<tr${style}>
    <td class="c">${runner.place}</td>
    <td class="bib">${escape(runner.bib)}</td>
    <td>${escape(runner.surname)}</td>
    <td class="small">${escape(runner.name)}</td>
    ${event.layout === "page-per-race" ? `<td class="c">${escape(runner.nationality)}</td>` : ""}
    <td class="c">${escape(runner.gender)}</td>
    <td class="c">${escape(runner.born)}</td>
    <td class="small">${escape(runner.club)}</td>
    <td class="c">${escape(runner.planned ?? `${race.code}${runner.gender}`)}</td>
    ${columns.map((label) => `<td class="t${label === final ? " final" : ""}">${escape(cells.get(label))}</td>`).join("")}
  </tr>`;
};

const headerRow = (event: ResultsEvent, columns: string[]) => `<tr class="head">
    <th>P.č.</th><th>Št. čís.</th><th>Priezvisko</th><th>Meno</th>
    ${event.layout === "page-per-race" ? "<th>Národnosť</th>" : ""}
    <th>m/ž</th><th>Rok nar.</th><th>Oddiel</th><th>Predpokladaná trať</th>
    ${columns.map((label, i) => `<th${event.layout === "page-per-race" && i === columns.length - 1 ? ' class="final-head"' : ""}>${label}</th>`).join("")}
  </tr>`;

const footer = (event: ResultsEvent) => `<div class="footer">
    <p>Hlavný rozhodca: ${escape(event.referee)}</p>
    <p>Výsledky spracovala: ${escape(event.processedBy)}</p>
    <p class="weather">Počasie: ${escape(event.weather)}</p>
  </div>`;

const pagePerRace = (event: ResultsEvent, races: Race[]) =>
  races
    .map((race) => {
      const columns = raceColumns(race);
      const span = columns.length + 9;
      return `<section>
        <table>
          <tr><td colspan="${span}" class="band header">${escape(event.header)}</td></tr>
          <tr><td colspan="${span}" class="band race">${escape(race.title)}</td></tr>
          ${headerRow(event, columns)}
          ${race.groups
            .map(
              (group) => `<tr><td colspan="${span}" class="band ${group.label === "ŽENY" ? "women" : "men"}">${escape(group.label)}</td></tr>
                ${group.runners.map((runner) => runnerRow(event, race, runner, columns)).join("")}`
            )
            .join("")}
        </table>
        ${footer(event)}
      </section>`;
    })
    .join("");

// Mirrors the original single-table layout: longest race first, men before women.
const singleTable = (event: ResultsEvent, races: Race[]) => {
  const span = ALL_COLUMNS.length + 8;
  return `<section>
    <table>
      <tr><td colspan="${span}" class="band header pink">${escape(event.header)}</td></tr>
      <tr><td colspan="${span}" class="band race lilac">${escape(event.subtitle)}</td></tr>
      ${headerRow(event, ALL_COLUMNS)}
      ${[...races]
        .reverse()
        .map((race) =>
          [...race.groups]
            .reverse()
            .map(
              (group) => `<tr><td colspan="${span}" class="band section">${escape(race.title)} ${escape(group.label)}</td></tr>
                ${group.runners.map((runner) => runnerRow(event, race, runner, ALL_COLUMNS)).join("")}`
            )
            .join("")
        )
        .join("")}
    </table>
    ${footer(event)}
  </section>`;
};

const render = (event: ResultsEvent, races: Race[]) => `<!doctype html>
<html lang="sk">
<head>
<meta charset="utf-8">
<title>Výsledky ${event.year} – Jazerný maratón</title>
<style>
  @page { size: A4 ${event.layout === "page-per-race" ? "landscape" : "portrait"}; margin: 12mm; }
  body { font-family: Arial, Helvetica, sans-serif; margin: 0; color: #000; }
  section + section { break-before: page; }
  table { border-collapse: collapse; width: 100%; font-size: ${event.layout === "page-per-race" ? "10px" : "7.5px"}; }
  td, th { border: 1px solid #000; padding: 2px 4px; white-space: nowrap; }
  th { font-weight: normal; }
  tr { break-inside: avoid; }
  .c { text-align: center; }
  .t { text-align: center; font-variant-numeric: tabular-nums; }
  .small { font-size: 0.9em; }
  .bib { text-align: center; font-weight: bold; font-size: 1.4em; }
  .band { text-align: center; font-weight: bold; border-width: 2px; }
  .header { background: #ffff00; font-size: 15px; padding: 8px; }
  .race { background: #92d050; font-size: 26px; padding: 4px; }
  .women { background: #ffc7ce; font-size: 20px; }
  .men { background: #c9d6ff; font-size: 20px; }
  .pink { background: #ffccff; font-weight: normal; }
  .lilac { background: #e6ccff; font-weight: normal; font-size: 18px; }
  .section { background: #00b0f0; font-size: 11px; }
  .final-head { background: #ffff00; font-weight: bold; }
  .final { background: ${event.layout === "page-per-race" ? "#ffc000" : "#ffff00"}; }
  ${event.layout === "single-table" ? ".bib { background: #ffff00; font-size: 1.2em; }" : ""}
  .footer { font-size: 9px; margin-top: 10px; }
  .footer p { margin: 4px 0; }
  .weather { color: #ff0000; }
</style>
</head>
<body>
${event.layout === "page-per-race" ? pagePerRace(event, races) : singleTable(event, races)}
</body>
</html>`;

mkdirSync(OUT_DIR, { recursive: true });
const workDir = mkdtempSync(join(tmpdir(), "results-pdf-"));

for (const { event, races } of [results2025, results2026]) {
  const htmlPath = join(workDir, `${event.year}.html`);
  const pdfPath = join(OUT_DIR, `${event.year}.pdf`);
  writeFileSync(htmlPath, render(event, races));
  execFileSync(CHROME, ["--headless", "--disable-gpu", "--no-pdf-header-footer", `--print-to-pdf=${pdfPath}`, `file://${htmlPath}`], {
    stdio: "ignore",
  });
  console.log(`Wrote ${pdfPath}`);
}
