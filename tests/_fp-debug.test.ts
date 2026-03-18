import { BeKind } from "../src/index.ts";

describe("FP debug", () => {
  const filter = new BeKind({ silent: true });

  const texts = [
    "Puppet show at the children's museum",
    "Children's dance recital. Ballet, tap, and hip-hop performances",
    "Mushroom foraging walk",
    "Personal branding workshop for job seekers",
    "Docent-led tour of the Impressionist collection",
    "RV and campervan lifestyle seminar",
    "Vintage motorcycle restoration seminar",
    "Retro console LAN party",
    "Marine mammal stranding response volunteer training",
    "Ballet open class for adults",
    "Oscar watch party at the theater",
    "Cat café grand opening. Sip lattes while cuddling cats",
    "Accessory dwelling unit seminar",
    "Diabetes prevention program orientation",
    "Antique tractor show and engine display",
    "Product photography for small businesses",
    "Russian literature discussion group",
    "Stand-up paddleboard yoga class",
    "basement waterproofing",
    "face painting for kids",
  ];

  it("dump flagged words", () => {
    for (const text of texts) {
      const r = filter.detect(text);
      const flagged = r.scoredWords.filter((s) => s.severity !== 0);
      if (flagged.length > 0) {
        const words = flagged.map((s) => `"${s.word}"(${s.severity})`).join(", ");
        console.log(`${words} | ${text.slice(0, 60)}`);
      }
    }
  });
});
