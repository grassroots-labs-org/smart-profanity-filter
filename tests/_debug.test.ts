import filter from "../src/index.ts";
describe("d", () => { it("jazz", () => {
  filter.updateConfig({ enableLeetSpeak: false });
  const r = filter.detect("Jazz brunch at The Garden Restaurant. Live trio performs from 10 AM to 1 PM.");
  console.log(JSON.stringify(r.scoredWords));
})});
