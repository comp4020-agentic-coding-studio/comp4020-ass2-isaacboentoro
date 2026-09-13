import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string; startDate: string; endDate: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;

// The last three digits of the SLOP code were assigned when the repo was
// provisioned; only the leading level digit is ours to change.
const ALLOCATED_CODE_DIGITS = "708";

describe("assignment 2 spec", () => {
  it("keeps the allocated three digits in the SLOP course code", () => {
    expect(api.course.code.slice(-3)).toBe(ALLOCATED_CODE_DIGITS);
  });

  it("runs across all twelve dated teaching weeks", () => {
    const dated = api.nodes.filter((n) => n.type === "sessions" || n.type === "lectures");
    const weeks = new Set(dated.map((n) => n.meta?.week));
    const missing = Array.from({ length: 12 }, (_, i) => i + 1).filter((w) => !weeks.has(w));
    expect(missing, `no session or lecture dated for week(s): ${missing.join(", ")}`).toEqual([]);
  });

  it("assessment weights add up to 100%", () => {
    const assessments = api.nodes.filter((n) => n.type === "assessments");
    const total = assessments.reduce((sum, n) => sum + Number(n.meta?.weight ?? 0), 0);
    expect(total).toBe(100);
  });

  it("has at least one lecture with a real deck linked from its page", () => {
    const lectures = api.nodes.filter((n) => n.type === "lectures");
    const withSlides = lectures.filter((n) => typeof n.meta?.slides === "string");
    expect(withSlides.length, "no lecture links a deck via its `slides` field").toBeGreaterThan(0);

    const realDeck = withSlides.some((n) => {
      const name = String(n.meta?.slides).replace(/^\/decks\//, "").replace(/\/$/, "");
      const path = resolve("src/decks", `${name}.deck.mdx`);
      if (!existsSync(path)) return false;
      return !readFileSync(path, "utf8").includes("STARTER_CONTENT");
    });
    expect(realDeck, "every linked deck is still the starter placeholder").toBe(true);
  });
});
