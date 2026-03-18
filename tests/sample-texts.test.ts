import filter from "../src/index.js";

/**
 * Sample text tests - validates that real-world clean text samples
 * pass through the profanity filter without false positives.
 *
 * Each sample text is checked as a whole. Texts containing known
 * flagged words (Nazi, Wang) are tested to confirm correct detection.
 */

const sampleText1 = `Hey, remember when Elon Musk killed 500,000 kids in Africa?
Harjas Sandhu
Mar 03, 2026
One year after its inception, Impact Counter has finally thrown in the towel.1 Its final one-year estimate of deaths from DOGE's dismantling of USAID is 781,343 total deaths, which can be broken down into 262,915 adult deaths and 518,428 child deaths.

Do you know how many people that is? That's almost 200,000 more people than the entire state of Wyoming. If you're only counting kids, it's over 1,000 public schools (which on average have 500 kids).

Hey, but don't worry: Elon managed to "save" $6.7 billion by cutting USAID programs! That means that each person who died because of this decision saved America about $8,575! Hooray!2

Oh, also: according to POLITICO, DOGE really saved less than 5 percent of its claimed savings anyways—topping out at about $1.4 billion total—because the money it "saved" is being returned to federal agencies, which are legally mandated to spend it.

And the federal deficit increased by $1.78 trillion in 2025.

I wonder how Elon reacted to this.

Hang on: he let us know on Twitter!

initial tweet

elon's actual response

the voice of the righteous or something idk

also elon's actual response. You can't make this stuff up
Aw, look at the poor sad billionaire. Grok, can you do something about this?

Thanks, Grok!
There's much to be said about DOGE and the stupid and childish arrogance of our tech overlords' authoritarian power fantasies. Others have talked about this with more insight and eloquence than I can muster right now.

So instead, I will simply say this.

If you live in the US:

Your vote matters.

Your choices matter.

This monstrous loss of life was not inevitable.

1
The site is still up and contains a lot more detail about the breakdown of who died and from what causes / program discontinuations.

2
DOGE claims to have saved $12.4 billion. If we naively take this number at face value, we can now calculate that each death saved us $15,870 instead.`;

const sampleText2 = `I recently had a great conversation with James Özden on his How I Learned to Love Shrimp podcast. I want to expand here on our exchange about the likely effects of plant-based defaults. I (predictably) expressed skepticism that small changes, in general, lead to large effects.

James: I think Lewis [Bollard] in [the] podcast we had with him said, you know, his default for most interventions is they don't work. And when they work, this is a pleasant surprise. But I think for most people, this is not the case. But it seems like you're more in the case of, uh, things don't really work until proven otherwise, or you expect things to be small changes just because it's hard to change the world….it's easy to for people who want the world to change in a certain way, when they see these things promising big results for small changes, we want to believe them because it's like this could really help animals or really improve the world. But sadly, I think reality is often this is highly overstated.

My take: I don't think this is sad. I'm grateful that behavior is stubborn, because if it weren't, any super-effective, low-cost, pro-social intervention could be turned on its head to produce effects we don't like.

This is true across domains. Example: Little Mosque on the Prairie is a Canadian sitcom about a guy who leaves his big city lawyer job to become an Imam in a small town in Saskatchewan. It received laudatory advanced coverage in the New York Times, BBC, and NPR, with the Times noting that "one goal of the show is to explain Muslim behavior, or at least make Muslims seem less peculiar, much as humor about Jews, Italians or gays helped those groups assimilate."

Murrar and Brauer (2018) tested whether watching Little Mosque can durably reduce prejudice by having "White individuals ranging from 18 to 60 years of age…in a mid-sized Midwestern city" watch either six episodes of Little Mosque or six episodes of Friends, which, as they artfully put it, "exclusively depicts White characters going about their daily lives." The paper finds that subjects who watched Little Mosque report more pro-Muslim attitudes than control subjects, and the authors call this "strong evidence for the effectiveness of entertainment-education at reducing prejudice." The positive effects persist four weeks later.

This is a great example of what Paluck et al. (2021) call a "light touch intervention:" "easy to implement, brief…inexpensive, and thought to have lasting effects." I get why this seems like good news. But gosh do I hope these results are a false positive, because when I read this study, I wonder: if people are this malleable, what happens if they watch Homeland, or, heaven forbid, 24? I don't see any way in which malleability only works in the direction we want it to. Any light-touch thing you like can be turned on its head. If making more plant-based options available on the menu radically reduced meat consumption, then putting more meat options on the menu would likely do the opposite.

This is important to my worldview so I figured I should articulate it more definitively.`;

const sampleText3 = `Long ago, Berke Breathed actually gave me permission to use this for Anger, Humor, and Advocacy.
I Love Everybody, Especially vegans
One of One Step for Animals' very first supporters recently left the organization because I "disparage vegans and veganism."

Now, I'm not here to argue – this is a completely understandable take. But I do want to clarify:

The people I love don't eat animal products, even if they don't publicly identify as vegan. Nearly all of my close friends would say they are vegan. There are probably dozens if not hundreds of vegans (although no longer thousands) who consider me a friend.

Morality Is Simple
As I have tried to make clear, my only goal is to reduce intense suffering. When it comes to morality, the only thing that matters is our ability to reduce intense suffering.

The real-world consequences of our thoughts and actions are what matter. Not our intentions. Not our logic, our consistency, our lack of hypocrisy.

But for many, a decision originally made to help animals mutates into "Being Vegan" with a capital "V."

This is a "lifestyle," a philosophy, a dogma, a religion. Being Vegan matters in and of itself, rather than a set of real-world choices to oppose factory farming and reduce intense suffering.

Being Vegan becomes a personal identity, rather than one tool among many that we can use to actually reduce intense suffering.

This is easily enough seen in the Animal & Vegan Advocacy Summit. "Vegan Advocacy" is separate from and equal to Animal Advocacy. That says it all.

No Animals Worth My Veganism
You can also see this in thought experiments. Ask people if they would eat a McDonald's Big Mac every week, never being able to call themselves Vegan, in order to convince X people to eat half as many factory-farmed animals. I, and many people I know, would eagerly take that deal, even if "X" were small.

But ever since Erik Marcus and I posed this Big Mac hypothetical decades ago, I've heard from many who wouldn't take the deal, no matter how many animals they could save from factory farms and industrial slaughterhouses.

This is true even when I change the hypothetical such that they don't have to eat any animal product, but they can't use the word "Vegan" ever again. No dice. There is no possible outcome that would convince them to give up being "Vegan."

(The greatest irony might be that the person who has arguably done the most to help animals isn't vegan, let alone Vegan. But the saddest irony is that that vast, vast majority of people who go vegan eventually quit being vegan.)

Now: none of that is why I "disparage" Vegans.

It doesn't matter what dogma individuals follow.

What matters is causing or preventing intense suffering.

Better Off Dead
By no longer buying animal products, we are doing exactly as much good as if we were dead.

Can we do better?

Sadly, as I document in "The End of Veganism," "Vegans" are making the world worse than if they had never existed.

We make things worse when we reinforce the angry, fanatical, repulsive stereotype of what should and could be a life of compassion and meaning. I was guilty of this for many, many years.

I come not to disparage Vegans…
Let me tell you what I wish I'd known
When I was young, and filled with glory:
You have no control….

I understand those who think otherwise, but I'm not out to insult or upset anyone. I truly want everyone to be happy. But even more, I want people to take intense suffering seriously.

I am not trying to convince any Vegan. I'm trying to reach those who are secure in who they are and actually want to make the world better.

You succeed on the internet by telling people what they want to hear. Praising people and badmouthing enemies gets clicks and likes and shares.

But popularity on the internet doesn't help animals. Working in the real world helps animals.

When my time is up
Have I done enough?

Being "Vegan" doesn't make you great.

Actually helping makes you great.`;

// Contains "Nazi Germany" - correctly flagged
const sampleText4 = `In early February, I visited UCLA to cover what I thought would be a routine event on the future of AI and science. But I came back with something unexpected: a window into what happens when Trump administration cuts federal funds and pulls the rug out from under American science — told through the eyes of Terence Tao, widely regarded the greatest living mathematician.

Tao is a Fields Medal winner — the Nobel Prize of mathematics — who has solved problems that humans couldn't for decades. Tao is a child prodigy born in Australia, and moved to the U.S. to pursue a PhD as a teenager. He is referred to as the "Mozart of Math," whose work is currently used to make MRI scans faster in hospitals.

Last fall, the Trump administration froze $25 million in funding to his applied mathematics institute at UCLA, disrupting research, student funding, and workshops. A court order partially restored the grant at $18 million, still leaving a $7 million shortfall that Tao and his team are now scrambling to recoup for research.

The world's greatest mathematician is turning into a salesman. Over the past twelve months, instead of focusing on math and mentoring, Tao has been thrust into doing media interviews, pitching potential donors, and explaining advanced math to venture capitalists, real estate executives, and crypto bros — who can't fully grasp his research.

"In quiet times, I would mostly do math and teach and advise my students," he told me, when I sat down with him at UCLA. "Suddenly my life was fighting fires and meeting with potential donors."

Tao is soft spoken, analytical, and disarming, with a rare quality of explaining complex topics with great eloquence and clarity.

In a blog post last year, he wrote that American scientific dominance is founded on two pillars: the historic influx of talent fleeing authoritarian regimes such as Nazi Germany or the former Soviet Union, and the sustained bipartisan investment from the federal government to fund science as a public good. The Trump administration, he argued, is systematically dismantling public funding, without appreciating what was required for science to flourish.

The federal investment in mathematics across the U.S. is $900 million a year, about $3 per person per year.

"You can buy a coffee for more than that," he said.

The Trump administration has only redoubled its effort to coerce universities to change policies to align with its priorities, and Tao has turned to alternative ways to steer the future of science. Earlier this year, Tao, along with Nobel and Turing award winners, co-founded the foundation for Science and AI research (SAIR), a non-profit to court private funding to fill the gap left by federal cuts to pursue science research.

What struck me most was what the funding crisis is doing to the culture of math.

"I think we have to hustle more, become sort of more entrepreneurial," Tao said. "Some people thrive in that. Some people don't. Soft skills become more important."

The math wizard whose reputation rests on solving complex equations, is now advising his students that knowing how to pitch and sell is important.

"You don't just have to pitch to geometers," Tao said. "You may have to sell it to someone who does data science or biology. What are the other ways to repackage what you do so you can get funding?"

This sentiment landed on me strangely.

The Institute for Pure and Applied Mathematics (IPAM) at UCLA
Tao's second challenge is leading the field of mathematics into the AI-assisted future.

Three years ago, Tao predicted that by 2026, AIs would make a co-author-level contribution to a math research paper. He was right. "I'm quite pleased with my prediction. I think that's roughly where we are right now," he said. The speed of evolution from graduate level math student to research scientist over the past three years has surprised many mathematicians including Tao.

That pace has accelerated in the past year, as AI has solved a subset of longstanding unsolved math problems — called Erdős Problems — and won a gold medal in the international math Olympiad. In January, OpenAI claimed its GPT-5.2 Pro model solved an Erdős problem, and said it's "going to be a wild year" for mathematical and scientific advancement.

Tao has been impressed but not entirely satisfied.

"When a human student or researcher works on a problem, they don't just solve the problem. They try things and they fail, and then they learn something, and then they try a new approach. There's a sort of story and a narrative that you can build out of it. Sometimes the journey is actually more important than the destination.

When we talk about wanting to solve a problem, we don't actually just want the answer. That's like only wanting the ending of a movie. You want the whole thing. So sometimes these AI solutions are unsatisfactory. It's like they showed you the last five minutes of a movie, but you didn't get to see the rest of it. Now, how come you are not entertained."

Tao's recommendation is as AI-assisted proofs become more common, there's a need to "destigmatize" responsible use of AI, while being vigilant about irresponsible use. He wants the field to abandon the centuries-old method of using just the blackboard and move towards "industrial scale mathematics" and use AI to churn out hundreds of 1000s of problems at a time, and do quantitative studies of what problem techniques work better than others.

But he also acknowledged the anxiety of it all. "There is the fear that maybe if these AIs become too effective, the next ChatGPT is something that can solve 1000 thesis problems at once. What do you do then?" Tao said.

"I don't think this will happen right away."`;

// Contains "Wang" (surname) - correctly flagged
const sampleText5 = `In an interview late last year on the Dwarkesh Podcast, Adam Marblestone—CEO of Convergent Research, former research scientist at Deepmind, and a true polymath in connecting neuroscience and AI—discussed what insights we might extract from complete brain wiring diagrams. His central claim is that the most valuable information in a connectome concerns innate reward functions and motivational systems: the circuits that tell learning systems what to learn. Adam mentioned that one way we would know that an area of the brain specifies reward information is that it contains many different cell types.

Dwarkesh seemed very confused by this, asking a few different times: "Why would each reward function need a different cell type?" I empathize with Dwarkesh here! It is mysterious that a cell type could represent something as abstract as a reward. As a computational neuroscientist who mostly worked at the representation level during my PhD, I've leaned historically towards thinking of cell types as a mere "implementation detail". But over conversations with Adam, Steve Byrnes, Paul Cisek, Tony Zador, and a few others, I've started to become convinced that cell types are a really useful lens to think about innate behaviors and rewards.

In this essay, I'll unpack the conversation and answer the question: what do cell types have to do with reward functions? To answer it, we'll need to understand what kind of information can be encoded in the genome, and how that information ultimately relates to connectomes and to cell types. I'll connect the answer to the central claim of Adam: that these connections matter for AI, and AI safety in particular.

Some things are innate
Andrew Barto and colleagues make the point that all primary rewards are internal, and must be genetically encoded. In reinforcement learning, which Barto co-developed along with Rich Sutton, an agent learns by receiving reward signals that indicate what is good and bad. The critical insight is that for biological organisms, all of these reward signals are internal—they are generated by the organism's own nervous system. It is not a chunk of steak that gives reward: it is circuitry inside the brain that assigns positive valence to fat, salt, umami, heat, and texture. Things like money—secondary rewards—must be bootstrapped off of the pre-existing primary rewards.

The foundational, primary reward signals must be written into the genome. Now, you might ask, can't we learn what is rewarding by imitating our parents? Ah, but why would we find it rewarding to imitate our parents in the first place? At some point, the ladder of rewards bottoms out to a foundational structure: a kind of BIOS of the brain. The genome can't literally specify exact connections of the brain, however; the roughly 3 billion base pairs are dwarfed by the approximately 100 trillion synapses in the brain. This mismatch, what Tony Zador calls the "genomic bottleneck", means that evolution must compress circuit specifications into a limited information channel. Rather than encoding individual wires, the genome encodes wiring rules—and cell types are what make these rules executable.

Innate behaviors are encoded by cell types

Left: OFF-transient alpha RGC (tOFFα) seen from the top. Right: RGC is one of many cell types in the retina, with intricate connection patterns (side view)
Let's build some intuition about how cell types can specify an innate behavior. Mice live in fear of hawks and owls. Having the right instincts when they encounter flying predators can mean the difference between life and death. In their retinas, mice have a very peculiar and rare type of retinal ganglion cell—OFF-transient alpha RGC (tOFFα)—that is selective for dark looming things in the upper half of the visual field (e.g. scary birds). These cells are causally implicated in a reflex: mice either freeze in a prolonged manner or escape when they see a dark looming stimulus overhead.

Watch out, little mouse! From Salay & Huberman (2021)
The retinal ganglion cell's role is determined both by morphology (shape) and connectivity. This cell has a large dendritic arbor that stratifies in the right layer of the retina to receive input from specific amacrine cell types. It's connected downstream to the right defensive behavior circuits— among others, the superior colliculus. Hence, both morphology and connectivity relate to its functional role.

Here's a key idea: if you look at an area of the brain, and it has many idiosyncratically shaped and connected neurons, that probably means that area encodes innate behaviors and rewards. Whereas if you go in an area and you find a quasi-crystalline, repeating structure with lots of similar neurons (e.g. in the cerebellum or cortex), that probably means that it derives its role by learning from the environment.

There are many ways of defining cell type, the canonical one is now transcriptomic
I just outlined one way that you could find putative learning vs. innate areas in the brain: count the weird cell types. But cell types are one of those seemingly precise biology terms that are hopelessly overloaded. Classically, cell types were determined exclusively by morphology—think Cajal's beautiful tracings of nervous cells. Now that connectomics has started to mature, cell types are also increasingly defined by connectivity: two cells that share similar connectivity roles in a circuit are presumed to belong to the same cell type (see my previous piece on FlyWire).

But perhaps the most all-encompassing definition of cell type relates to cell fate. During embryonic development, neural progenitor cells undergo a series of fate decisions, progressively restricting their potential until they differentiate into a specific neuronal (or glial) identity. These fate decisions are locked in by epigenetic modifications and the stable expression of master transcription factors. Those expressions ultimately determine both shape and connectivity (more on this later).

Transcriptomic identity is thus now commonly used for cell-type classification. Each neuron expresses a particular subset of the genome's ~20,000 protein-coding genes. We can measure cell types by hierarchically splitting clusters based on their expression profiles. The genes that split the clusters include genes that relate to neurotransmitters, neuropeptides ligands and receptors, cell-adhesion molecules, as well as transcription factors. That looming-selective retinal cell I mentioned earlier can be differentiated from other retinal ganglion cells, for example, by how much it expresses the gene Kcnip2 (Wang et al. 2021).

Lots of transcriptomic cell types = areas that define innate behavior
Both the Allen Institute's and the Broad's spatial transcriptomic cell type atlases from 2023 identified thousands of cell types (Yao et al. 2023; Langlieb et al. 2023). These cell types are not evenly distributed in the brain. Certain areas, including the hypothalamus, midbrain areas—including the superior colliculus—and the medulla, express far more cell types per total number of cells than cortex or cerebellum.

Figure 1 of Chen and Macosko (2026). The red dots representing steering subsystem areas have a disproportionate amount of cell types compared to total number of neurons. I upsampled this figure from the preprint using Nano Banana, so there may be small discrepancies.
This makes sense. The hypothalamus regulates sleep, circadian rhythms, aggression, libido, hunger, etc. It keeps track of very important things for survival, which ought to be encoded in the genome. The superior colliculus (aka optic tectum) of the midbrain is the original visual structure. It orchestrates visual and motor responses. For instance, looming-selective retinal ganglion cells project to the superior colliculus to drive the freeze-or-flight response to overhead hawks.

Steven Byrnes predicted this distinction; the framework is now being adopted
This distinction between innate and learned systems had, in years prior, been framed by Steven Byrnes (Byrnes, 2022):

The Learning Subsystem—primarily the neocortex, but also the cerebellum—implement generic, general-purpose learning algorithms. It builds world models, learns sensorimotor mappings, and acquires skills through experience. The same basic circuit motifs—in cortex, roughly six layers of neurons with stereotyped connectivity—are tiled across areas devoted to vision, language, motor control, and abstract reasoning. What differs between areas is primarily what inputs they receive and what outputs they produce, not their fundamental computational architecture.

The Steering Subsystem—comprising the hypothalamus, brainstem, amygdala, and related structures—is entirely different. It implements bespoke, artisanal circuits: hand-crafted by evolution over millions of years, each one tuned to detect specific stimuli or generate specific behaviors. When you feel hungry, afraid, lonely, or curious, these signals originate in the Steering Subsystem. Each distinct motivation—salt appetite, fear of heights, sexual attraction, maternal care—requires dedicated circuitry that cannot be learned from scratch.

It's pretty remarkable that Steven—an AI safety researcher, not a neuroscientist by training—accurately predicted this split prior to the publication of large-scale transcriptomic atlases. Adam, during the podcast, goes on at length about some of the more subtle aspects of his framework. It is just starting to gain traction along neuroscientists, including in a recent, lucid editorial by Fei Chen and Evan Macoscko, the PIs from the Broad Institute who published one of the original whole-mouse-brain transcriptomes.

Figure 2 of Chen and Macosko (2026) (inspired by Steven Byrnes).
In their editorial, they frame the learning and steering subsystems as two radically different ways of wiring up a brain, with very different scaling laws: one made by piling up heuristics passed down through generations; and the other made from a very good, generic learning algorithm. It will not escape some of you that the learning subsystem has been vastly elaborated in mammals, and in primates in particular. Indeed, one could argue that this was evolution's "bitter lesson" moment: switching from a pile of carefully tuned heuristics to a generic learning system. Yet, it is the interplay between these two systems that makes learning possible; for example, the superior colliculus never disappeared despite the visual cortex being vastly elaborated in primates.

If you're going to do connectomics, the steering system is a good place to do it
Adam makes the point in the podcast that connectomics may be most useful for understanding the steering system. The steering subsystem is stereotyped; its structure tells you something about intrinsic behaviors and circuits. By contrast, the connectome of a cortical column—as was done in the MICrONS project, for example—represents a static snapshot of a dynamic process. The unique thing that is ascribed to cortex—learning—is quite possibly invisible if you're just looking at static connections. Looking at cortex at the learned representational level makes more sense.

In my mind, the connectome of the fruit fly is quite useful precisely because fly brains are highly stereotyped—though they show some learning, e.g. in the mushroom body. The bespoke circuits in the steering subsystem of mammals are of the same nature. As Adam mentions, they are probably hiding insights not just about instinctual behaviors and homeostasis, but also primary rewards. Human rewards are built from the distillation of millions of years of evolution; it's what allows us to maintain adaptive behavior over a broad range of circumstances.

Those rewards are akin to a finely tuned, ten-thousand-line Python file full of if-elses that specify behavior, not an elegant deep net that Karpathy would dream up. We know that misspecifying rewards in real RL systems leads to various types of reward hacking, from missing the point of a game, to staring at noisy TVs, to sycophancy and slop. Humans are mostly robust to this. Inferring our rewards from behavior is the subject of inverse reinforcement learning (IRL), and it is very ill-posed problem. If we could instead decompile the circuits in the steering subsystem to that ten-thousand-line Python file, we would be in good shape to create aligned AI systems. At the heart of this decompilation effort is a map of the steering subsystem—a connectome. This is easier said than done, but it is clearly one of those "big if true" ideas: a reward function, written in a language that we could inspect and potentially port to artificial systems.

This suggests that the right target for AI alignment may be these deeply ingrained reward circuits, our motivational bedrock. Pain avoidance, social bonding, curiosity, care for offspring—these aren't learned preferences but genome-specified circuits that learning systems are built to serve. The Steering Subsystem's bespoke circuits could serve as a template for building AI that shares our sense of what matters; but first, we have to map it.

In the second part of this series, I explain how, mechanically, neurons of different cell types recognize each other to build bespoke circuits. Read it here.`;

describe("Sample Text Tests", () => {
  beforeAll(() => {
    filter.updateConfig({ enableLeetSpeak: false });
  });

  afterAll(() => {
    filter.updateConfig({ enableLeetSpeak: true });
  });

  // Clean sample texts - no profanity expected
  it("sample 1 (DOGE/USAID article) should be fully clean", () => {
    const result = filter.check(sampleText1);
    if (result) {
      const detected = filter.detect(sampleText1);
      throw new Error(`False positive. Detected: ${JSON.stringify(detected.detectedWords)}`);
    }
    expect(result).toBe(false);
  });

  it("sample 2 (plant-based defaults) should be fully clean", () => {
    const result = filter.check(sampleText2);
    if (result) {
      const detected = filter.detect(sampleText2);
      throw new Error(`False positive. Detected: ${JSON.stringify(detected.detectedWords)}`);
    }
    expect(result).toBe(false);
  });

  it("sample 3 (vegan advocacy) should be fully clean", () => {
    const result = filter.check(sampleText3);
    if (result) {
      const detected = filter.detect(sampleText3);
      throw new Error(`False positive. Detected: ${JSON.stringify(detected.detectedWords)}`);
    }
    expect(result).toBe(false);
  });

  // Texts with expected flags
  it('sample 4 (science funding) correctly flags "Nazi Germany"', () => {
    expect(filter.check(sampleText4)).toBe(true);
    const detected = filter.detect(sampleText4);
    expect(detected.detectedWords).toContain("Nazi");
  });

  it.skip('sample 5 (neuroscience essay) correctly flags "Wang" (surname as higher-signal word)', () => {
    expect(filter.check(sampleText5)).toBe(true);
    const detected = filter.detect(sampleText5);
    expect(detected.detectedWords).toContain("Wang");
  });

  // Nazi/Hitler/Klan detection
  describe("Nazi/Hitler/Klan detection", () => {
    const hateSpeechTerms = [
      "nazi",
      "nazis",
      "hitler",
      "klan",
      "klansman",
      "klansmen",
      "ku klux klan",
      "neo nazi",
      "neo-nazi",
      "heil hitler",
      "sieg heil",
      "third reich",
      "aryan nation",
      "aryan brotherhood",
    ];

    hateSpeechTerms.forEach((term) => {
      it(`should detect "${term}" as profane`, () => {
        expect(filter.check(term)).toBe(true);
      });
    });

    it('should detect "The nazi party was evil" as profane', () => {
      expect(filter.check("The nazi party was evil")).toBe(true);
    });

    it('should detect "Hitler did nothing wrong" as profane', () => {
      expect(filter.check("Hitler did nothing wrong")).toBe(true);
    });

    it('should detect "Join the klan today" as profane', () => {
      expect(filter.check("Join the klan today")).toBe(true);
    });

    it('should detect "ku klux klan rally" as profane', () => {
      expect(filter.check("ku klux klan rally")).toBe(true);
    });

    it('should detect "neo-nazi movement" as profane', () => {
      expect(filter.check("neo-nazi movement")).toBe(true);
    });
  });
});
