---
title: "What They Don't Tell You About Graduating in a Tech Degree"
date: 2026-05-10
author: "Angelo Rosillosa"
description: "The gap between what a CS curriculum teaches and what the job market actually expects."
---

Nobody hands you a disclaimer when you enroll in Computer Science. There is no orientation slide that says the degree will teach you how to think, but not necessarily how to work. You figure that out later, usually at the worst possible time. This often happens when you are reading a job description six weeks before graduation and encountering an entire professional discipline you have never heard of.

That moment happened to me with an AI Engineer posting from AMCS. The most jarring thing is how many listings assume you already know how to work with LLM APIs and agentic systems as a baseline rather than as a specialization. It is not listed as just a nice bonus, which means it is baked into the core responsibilities. Foundry for Good expected applicants to ship an autonomous AI agent replacing a human researcher within weeks, and Burt Intelligence wants engineers who understand data pipelines and can integrate intelligence into existing systems. Even the junior roles from YC-backed companies assume you have built something with OpenAI or Anthropic APIs before walking in the door. My classes taught me how machine learning works conceptually, but there is a completely separate skill that nobody formally taught. This involves taking a foundation model that already exists, connecting it to a real codebase via an API, grounding it in your own data through RAG, and making it do something useful in production without hallucinating or breaking. That gap between understanding ML academically and actually shipping an LLM-integrated feature is the specific thing that has cost me competitiveness on several applications this job hunt. It is not in the curriculum, and you find out it matters when you are staring at a job description asking for it.

That is the cleanest version of the thing nobody tells you. School teaches you knowledge, whereas the industry wants a trade.

## The Classroom and the Job Listing Are Not Reading the Same Syllabus

A lot of what USC's CS curriculum taught me was genuinely valuable. Data structures, algorithms, and systems thinking all provide a solid foundation. The fundamentals hold, and the theory will matter eventually when I have to pick up something new and actually understand why it works the way it does. I am not dismissing any of that.

But there is a version of "job-ready" that exists in the classroom and a completely different version that exists in hiring. A lot of real-world work is web development. The problems you solve there are rarely algorithmic, as they are mostly structural. You spend most of your time figuring out how to fit libraries together into something useful, which involves choosing the right approach rather than implementing one from scratch. The curriculum does not tell you this. It also does not tell you that the internship you are only required to take in your fourth year is something your most competitive batchmates were already doing in their second.

I met those batchmates in my first year. I approached someone after the first semester to coordinate enrolling in the same block for the second semester, and he brought six more people along. That first day meeting them in person and listening to them talk, I sent a message to an old friend that night that basically said these people are going to be wealthy by the time they graduate. They have no other interests except CS and web development, and they already have GitHub projects and tech stacks they know before we even touched a web development course. I meant it as a compliment, but what I was actually processing was that I had arrived at the starting line while some of my classmates had been running for two years already.

## What the Curriculum Does Not Have Time For

The gap is not just about what USC teaches. It is about what the pace of the industry makes impossible to teach on a fixed schedule.

I enrolled in August 2022. ChatGPT launched that December. By the time I was finishing my degree in 2026, the tools that matter most in the job market are tools that did not exist when I enrolled. These belong to disciplines like AI engineering and MLOps that were not part of the plan when the curriculum was designed. No university fully adapts in real time, which means academic review cycles do not move at the speed of product launches.

There was also an institutional moment during my time at USC that made the gap feel more structural than accidental. Thirty fourth-year CS students were blocked from graduating on schedule because Thesis 2 was not offered in the semester they needed it. Students who had already received conference acceptances for their research, and who had done everything right, found themselves caught in administrative back-and-forth that escalated all the way to the VPAA with no tangible resolution. Some lost job offers that required graduation within a specific window, and some took on an added financial burden. The specific policy changes that kept being added were never explained with reference to any existing academic policy. That situation was real and documented, and it said something about where students sat in the priority order of a department navigating its own pressures.

I was not directly affected. But I watched it happen to people I knew, which clarified something important. The system is not designed around your timeline.

## The Portfolio Problem Nobody Explains

The other unspoken requirement is the portfolio, and specifically, the kind of portfolio that actually means something. I did not build a meaningful one during most of university. This is partly circumstance, and partly that I never had a strong enough reason until I did. I did not want to build projects just to have something to display. That always felt dishonest to me because it felt like something assembled for an audience rather than made for a purpose.

What changed was TC Insights. I am the Deputy Online Managing Editor at Today's Carolinian, which is USC's official student publication, and I identified that the manual process of social media reporting was consuming hours of time that the editorial team did not have. So I built an internal analytics platform. It pulls data from the Meta Graph API automatically, links it to qualitative insights from editors, and uses a percentile-based ranking algorithm to score and prioritize content. Twenty-plus editorial managers use it actively, which saves an estimated three to four hours of manual work weekly.

I did not build it for a portfolio. I built it because it needed to exist and I was the one who could make it exist, and that distinction matters. The learning that happened because of it, which involves Next.js, Supabase, API integration, and building something real people depend on, was driven by the idea rather than the curriculum. That is what curiosity-driven learning actually feels like. It is almost impossible to manufacture it in a classroom setting because the motivation has to come from somewhere real.

My internship at Symph did something similar for me by exposing me to the reality of production engineering. School teaches you to write code, but it does not teach you that in a real engineering team, the code you write has to survive a pipeline involving linting, testing, building, and deploying before it ever reaches a user. At Symph, I touched this directly while contributing to FindMyShots, which is a facial recognition photo search platform used at running events. Working inside a real codebase with an NX Monorepo taught me what a Cron job deployment actually looks like in production and what regression testing before a checkout release actually means. I learned why a dashboard crash gets traced through PostHog session replays instead of just a console log. The specific line on job postings that crystallizes this gap is when they ask for experience with CI/CD and deployment pipelines. School gives you a GitHub repository where you push directly to the main branch and nothing enforces anything, but production engineering has an entirely invisible layer between writing code and making it live. The follow-up thought that makes it sting more is that recruiters do not flag this as a nice-to-have skill. It sits quietly in the requirements section as if everyone just knows it, and most CS graduates do not, until they don't.

## The Communication Gap Nobody Grades

There is a line in my experience that I think about a lot. I have always been fine presenting in front of a classroom. If you put a technical topic in front of me alongside a slide deck and an audience expecting a structured argument, I can do that easily.

What school never addressed was the other kind of communication. I actually had to learn this through Today's Carolinian, which involves managing people and being in a room where the goal is collaboration rather than evaluation. This is the kind of communication where you are just talking to someone, building something with them, and navigating a disagreement without a rubric to appeal to.

I grew up in Saudi Arabia for seventeen years before moving to Cebu for university. By the time I arrived, I had also come through a pandemic that ate most of what remained of my social fluency. I knew how to perform academically, but I did not know how to be in a room with people and feel like I belonged there. That took until my third or fourth year to start feeling normal. Honestly, the confidence issues around language made everything slower and harder than it needed to be, especially since I speak Filipino and English but not Cebuano.

The classroom does not teach you any of that, and it does not have to. But nobody tells you it is a gap you will need to close on your own, and closing it will cost more time and discomfort than learning any technical skill.

## Where I Actually Am

I am a few weeks from graduating with a thesis, an internship, a real project in production, and a clearer picture of what I do not know than what I do. That last part is not a failure. It might actually be the most useful thing four years gave me, which is the ability to read a job description and know exactly where my edges are.

The degree is real, and the foundation is real. The gap between what I was taught and what the market is asking for is also real, which means pretending otherwise would make this post pointless.

If you are a CS student earlier in your program reading this, know that the internship matters more than the grade. The project you build because you actually need it matters more than the one you build for display. And the communication skills, which are the social ones nobody grades, require you to start early. They do not come for free, and school will not remind you they exist.