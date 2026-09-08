// Three practices, in ladder order. Most clients enter at the roadmap, which
// scopes whichever of the other two they actually need.
const courses = [
  {
    slug: "supply-chain-ai-roadmap",
    title: "Supply Chain AI Roadmap",
    track: "Strategy",
    level: "For supply chain leadership teams deciding where to invest",
    duration: "Tailored",
    metric: "A costed, sequenced investment plan tied to existing operating metrics",
    gradient: "linear-gradient(135deg,#0ea5e9,#0369a1)",
    tagline: "A structured assessment of where AI actually pays in your supply chain, what your data and team can support today, and what to fund first.",
    intro: "Most supply chain organizations are being sold AI faster than they can evaluate it. Vendors promise network-wide optimization, the pilot never leaves the pilot, and nobody can say what the last two years of spend returned. This engagement is a clear-eyed assessment of your operation by someone who has run one: where the automation opportunities actually are, whether your data can support them, what your team can absorb, and what sequence gets you there. You leave with a plan you can defend to finance.",
    builtAroundYou: "The assessment covers your network, your systems, and your constraints. We work from your actual data flows and interview your planners, buyers, and site leadership. A regional distributor running one ERP and a global manufacturer running four get very different roadmaps.",
    reasons: [
      {
        title: "Assessed by an operator",
        body: "The evaluation is done by someone who has run global supply chain, not by consultants applying a maturity model to an industry they have read about.",
      },
      {
        title: "Honest about readiness",
        body: "If your data cannot support what you are planning, you hear it here rather than eighteen months into a failed deployment. That is usually the finding that saves the most money.",
      },
      {
        title: "Tied to metrics you already own",
        body: "Every opportunity is scored against fill rate, cycle time, working capital, expedite spend, or whatever your function is already accountable for.",
      },
      {
        title: "A decision, not a deck",
        body: "The deliverable is a sequenced and costed plan, including the things we recommend you do not do.",
      },
    ],
    outcomeIntro: "A ranked opportunity map, an honest readiness verdict, and a costed roadmap you can take to a budget conversation.",
    outcomes: [
      {
        title: "An opportunity map",
        body: "Where AI creates value across planning, sourcing, execution, and logistics, ranked by value and feasibility against your operation.",
      },
      {
        title: "A readiness verdict",
        body: "What your data, systems, and team can actually support today, stated plainly.",
      },
      {
        title: "A costed roadmap",
        body: "Sequenced initiatives with effort, dependencies, and expected metric impact.",
      },
      {
        title: "A vendor evaluation position",
        body: "The questions to ask and the claims to discount, so the next pitch meeting goes differently.",
      },
    ],
    audience: [
      "Supply chain leadership teams under pressure to “do something about AI”",
      "Organizations with AI spend they cannot tie to a result",
      "Functions evaluating vendor proposals without a technical basis for comparison",
      "Leaders who need a defensible plan before requesting budget",
      "Teams that ran pilots which never reached production",
    ],
    engagement: [
      "On-site discovery across planning, sourcing, and execution",
      "Structured interviews with process owners and site leadership",
      "Data and systems readiness assessment",
      "Executive readout and roadmap working session",
    ],
    deliverables: [
      "Opportunity map scored against your operating metrics",
      "Data and organizational readiness assessment",
      "Costed, sequenced roadmap with dependencies",
      "Vendor evaluation framework",
    ],
    faqs: [
      {
        q: "What if the answer is that we're not ready?",
        a: "Then that is the finding, and it is a valuable one. The roadmap will tell you what readiness would require and what it would cost. That is a far cheaper answer than discovering it during a deployment.",
      },
      {
        q: "Do you implement what you recommend?",
        a: "Sometimes. The roadmap is deliberately independent of who builds it — several recommendations typically point to internal work or existing vendors. Where it points to our other practices, we say so plainly.",
      },
      {
        q: "How much of our team's time does this take?",
        a: "Discovery interviews are brief and scheduled around your people, typically eight to fifteen participants. Leadership commits to a kickoff and a readout session. It is designed to assess your operation without disrupting it.",
      },
      {
        q: "Will this work if we've already started?",
        a: "Usually better. Existing pilots and vendor proposals become case material, and the assessment can tell you which to continue, fix, or stop.",
      },
    ],
    quote: "Most supply chain AI spend fails on data readiness and workflow fit, not on the model. Both are knowable in advance.",
    closingEyebrow: "Before You Spend",
    closingTitle: "An honest assessment is cheaper than a pilot that never ships.",
    closingBody: "And it tells you exactly what to do next.",
  },
  {
    slug: "agentic-ai-supply-chain",
    title: "Agentic AI for Supply Chain Operations",
    track: "Applied AI",
    level: "For teams with defined workflows and accessible systems data",
    duration: "Tailored",
    metric: "Cycle time and manual touch count on the target workflow",
    gradient: "linear-gradient(135deg,#6366f1,#4338ca)",
    tagline: "Design, deploy, and govern AI agents inside your planning, sourcing, and fulfillment workflows. Built on your systems, not a sandbox.",
    intro: "Most teams that experiment with agents hit the same wall: the demo works and production does not. The gap is rarely the model. It is workflow design, tool boundaries, systems access, and knowing which decisions an agent should never make alone — because in supply chain, a wrong autonomous decision moves inventory, commits spend, or stops a line. We build agents into your actual operation and train your team to own them.",
    builtAroundYou: "Discovery comes first: workflow mapping, systems access, data readiness, and pilot process selection with your team. Everything after that is built specifically for what we find. A 3PL automating exception handling and a manufacturer automating supplier qualification share a method, not a curriculum.",
    reasons: [
      {
        title: "Your workflows, from day one",
        body: "We start by mapping where multi-step decisions consume your team's time: exception handling, supplier qualification, expedite decisions, order promising, claims and chargebacks. The agents we build address those, not a reference architecture.",
      },
      {
        title: "Governance designed in, not bolted on",
        body: "Agent identity, credential scoping, approval gates on consequential actions, and reversibility. Federal guidance on AI in operational environments assumes agentic systems will behave unexpectedly. We design for that from the start.",
      },
      {
        title: "Built by people who have shipped this",
        body: "Multi-agent orchestration in production, not slideware. Including the failure modes.",
      },
      {
        title: "Planners and engineers in the same room",
        body: "Agent projects fail at the seam between the people who build them and the people whose work changes. We train both together.",
      },
    ],
    outcomeIntro: "A deployed agent in your environment, a team that can build the next one, and a governance position you can defend to audit.",
    outcomes: [
      {
        title: "A working agent in your environment",
        body: "Deployed against a real workflow, with monitoring in place.",
      },
      {
        title: "A team that can build the next one",
        body: "Architecture patterns, tool design, and evaluation methods your engineers own.",
      },
      {
        title: "A governance framework",
        body: "Scoping, approval gates, kill-switch and safe-state design, and incident response.",
      },
      {
        title: "A prioritized backlog",
        body: "The next five workflows worth automating, ranked by value and feasibility.",
      },
    ],
    audience: [
      "Planning, procurement, and logistics teams with multi-step manual decision processes",
      "Organizations that piloted agents and hit reliability or trust walls",
      "Functions under headcount pressure with rising exception volume",
      "Leaders who need a governance position before approving broader deployment",
      "Teams whose IT function is not yet enabling AI adoption",
    ],
    engagement: [
      "On-site discovery and workflow selection",
      "Build sprints alongside your engineers and process owners",
      "Governance workshop with operations, IT, and legal in the room",
      "Production handoff, runbook walkthrough, and monitoring setup",
    ],
    deliverables: [
      "Deployed agent with documentation and operational runbook",
      "Governance framework and approval architecture",
      "Workflow automation backlog, ranked and costed",
      "Baseline and post-deployment metrics on the target process",
    ],
    faqs: [
      {
        q: "Which workflow should we start with?",
        a: "We select it together during discovery, weighted toward high volume, well-defined decision rules, and a tolerable failure mode. If you have completed a roadmap engagement, it is usually already identified.",
      },
      {
        q: "What systems do you work with?",
        a: "Whatever you run. The agents integrate against your ERP, WMS, TMS, and planning systems through existing interfaces. Systems access during discovery is the main dependency and the most common source of delay.",
      },
      {
        q: "What happens if the agent makes a bad call?",
        a: "That is a design question, and it is central to the engagement. Every consequential action gets an approval gate, a reversal path, or both. We design the failure modes before we build the capability.",
      },
      {
        q: "Do we need data scientists on staff?",
        a: "No. This is systems and workflow engineering more than modeling. Your integration engineers and process owners are the right participants.",
      },
    ],
    quote: "Agentic AI rewards teams who understand the architecture, not just the prompts. Once you see how the pieces fit together, you can build almost anything.",
    closingEyebrow: "Built for What's Next",
    closingTitle: "Agentic AI is moving fast. Your operation doesn't have to catch up alone.",
    closingBody: "Get a working agent in production and a team that knows how to build the next one.",
  },
  {
    slug: "learning-velocity",
    title: "Learning Velocity",
    track: "Learning Science",
    level: "For supply chain teams facing continuous technology change",
    duration: "Tailored",
    metric: "Time-to-productive on new tools and systems",
    gradient: "linear-gradient(135deg,#f7b600,#d97706)",
    tagline: "Build your supply chain team's capacity to absorb new technology faster than it arrives, so your training investment stops expiring every two years.",
    intro: "Most corporate AI training teaches a tool. Eighteen months later the tool has changed and the training is worthless — and in supply chain, the tools change constantly: new planning systems, new automation on the floor, new capability inside software you already own. This engagement builds the underlying capability instead: how your planners, buyers, and site teams identify what matters, learn it fast, and apply it to work they are accountable for. It is the only practice here whose value increases as the technology changes.",
    builtAroundYou: "We start by mapping the specific technologies and changes coming at your team over the next eighteen months, then build the practice curriculum against those. A distribution network preparing for warehouse automation and a procurement group adopting agentic tooling get different programs.",
    reasons: [
      {
        title: "Grounded in cognitive science, not productivity folklore",
        body: "Every technique comes from decades of research on retention, transfer, and deliberate practice. We can show you the evidence base for each one.",
      },
      {
        title: "Your work is the curriculum",
        body: "Participants do not practice on toy problems. They apply the methods to a real capability gap their function faces right now, with your data and your systems.",
      },
      {
        title: "Built around operating reality",
        body: "Sessions are on-site and scheduled around shift patterns, peak season, and month-end. Not an academic calendar.",
      },
      {
        title: "The capability outlasts us",
        body: "Teams finish with a documented internal practice for evaluating and adopting new technology. That is the deliverable that keeps paying.",
      },
    ],
    outcomeIntro: "A measured baseline, demonstrated progress on a real capability gap, and a documented internal practice your organization runs on its own.",
    outcomes: [
      {
        title: "A diagnosed baseline",
        body: "Where your team's learning actually breaks down, measured rather than assumed.",
      },
      {
        title: "A working method",
        body: "Retrieval practice, skill deconstruction, deliberate practice, and feedback design, applied to supply chain work.",
      },
      {
        title: "Demonstrated progress on a real gap",
        body: "Each participant closes an actual capability gap during the engagement.",
      },
      {
        title: "An internal adoption practice",
        body: "The documented system your organization uses for the next system rollout, and the one after that.",
      },
    ],
    audience: [
      "Planning and procurement teams facing continuous tool and process change",
      "Distribution and site operations preparing for automation",
      "Organizations whose training spend depreciates before it returns",
      "Functions that need internal capability rather than another vendor dependency",
      "Leaders who have run AI training that did not change how anyone works",
      "Teams heading into a major ERP, WMS, or planning system transition",
    ],
    engagement: [
      "On-site kickoff and learning capability diagnostic",
      "Recurring working sessions with the intact team",
      "Individual capability projects with coaching between sessions",
      "Leadership readout at close",
    ],
    deliverables: [
      "Learning capability baseline and post-engagement assessment",
      "Documented internal adoption practice",
      "Completed capability projects with evidence of progress",
      "Facilitator materials so your team can run the method for new hires",
    ],
    faqs: [
      {
        q: "Is this a soft skills program?",
        a: "No. Participants close a real technical capability gap during the engagement, and the outcome is measured. The method comes from cognitive science; the application is operational.",
      },
      {
        q: "How is this different from what our L&D team does?",
        a: "L&D typically delivers content. This builds the capacity to absorb content, and it hands your team the method. Many clients run it with L&D participating so the practice stays in-house.",
      },
      {
        q: "Can this run alongside a system implementation?",
        a: "That is one of the better times to run it. The implementation supplies real, urgent capability gaps to work against, and adoption improves measurably.",
      },
      {
        q: "What if our team is skeptical of training?",
        a: "Reasonable, given most of it. The first session diagnoses how they actually learn, which tends to be more interesting than being taught. The work is their own, not a case study.",
      },
    ],
    quote: "You do not need a team of naturally fast learners. You need a method, and a reason for it to survive contact with the job.",
    closingEyebrow: "The Investment That Compounds",
    closingTitle: "This teaches your organization how to learn. That capability never expires.",
    closingBody: "Every technology cycle after this one gets cheaper.",
  },
]

// The front door. Most clients start here because it scopes the rest.
export const LEAD_SLUG = "supply-chain-ai-roadmap"

// Renamed practices. Old URLs land on the current entry.
export const SLUG_REDIRECTS = {
  "rapid-learning-in-the-age-of-disruption": "learning-velocity",
  "agentic-ai": "agentic-ai-supply-chain",
  "agentic-ai-operations": "agentic-ai-supply-chain",
}

// Practices that no longer exist as named offerings. The forecasting and data
// work lives inside the roadmap and agentic engagements now; Physical AI moved
// to AgileHippo. These land on the practice index rather than a dead end.
export const RETIRED_SLUGS = [
  "machine-learning",
  "applied-ml-operations",
  "data-engineering",
  "data-readiness",
  "physical-ai",
]

export default courses

export function getCourseBySlug(slug) {
  return courses.find((course) => course.slug === slug)
}

export function getLeadCourse() {
  return getCourseBySlug(LEAD_SLUG)
}

// Where a slug should end up today: its own page, the page it was renamed to,
// or the practice index if the practice is gone.
export function resolvePracticePath(slug) {
  if (getCourseBySlug(slug)) return `/practices/${slug}`
  if (SLUG_REDIRECTS[slug]) return `/practices/${SLUG_REDIRECTS[slug]}`
  return "/practices"
}
