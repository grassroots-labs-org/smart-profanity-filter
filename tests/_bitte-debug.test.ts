import { BeKind, WordSeverity } from "../src/index.ts";
import innocentWords from "../src/languages/innocent-words.ts";

describe("bitte debug", () => {
  it("traces detect() path for bitte", () => {
    const filter = new BeKind({ silent: true });
    // Monkey-patch getWordScore to trace
    const origGetWordScore = (filter as any).getWordScore.bind(filter);
    (filter as any).getWordScore = (word: string) => {
      const result = origGetWordScore(word);
      if (word.toLowerCase() === "bitte") {
        console.log("getWordScore('bitte'):", result);
        console.log("innocent entries for bitte:", innocentWords["bitte"]);
      }
      return result;
    };
    
    const r = filter.detect("Können Sie mir bitte helfen?");
    console.log("Result:", r.scoredWords);
  });
});
