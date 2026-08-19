export const IMG = {
  heroBg: "https://framerusercontent.com/images/K8og1bzjDjE9Wjd9V0wyFnNTuE.png",
  heroPhone: "https://framerusercontent.com/images/I6WEYNUj0CIhnVWWXKbdugkCRfc.png",
  heroCard: "https://framerusercontent.com/images/Vnhx3hWv1qkuSpzj0Byv8Lh2ac.png",
  wordmark: "https://framerusercontent.com/images/cz8HkJ4ppyuXmIlFTBhO6rIXmM8.png",
  marqueeDisc: "https://framerusercontent.com/images/DdyGS8iwSkVtnOHERiAvkjGTV0.png",
  impactA: "https://framerusercontent.com/images/WXfFQPev3KlkNiItOfxmxaKFRLQ.jpg",
  impactB: "https://framerusercontent.com/images/Jt9fqDDZxN7dyaO1lo8ejm7KNU.jpg",
  earth: "https://framerusercontent.com/images/w9GIEFFMXhZLIMKlcYzL8IsPI.png",
  testimonialMan: "https://framerusercontent.com/images/oveje1jpoSVPNvqwkZzBKWjAaEU.png",
  testimonialDots: "https://framerusercontent.com/images/itKo8620ZNT2ax9i3t6O8kg.png",
  avatar: "https://framerusercontent.com/images/amenRHPYNcd6acGtySdDtiBLKNM.png",
  worldMap: "https://framerusercontent.com/images/IWkPyzzF7y1okNMjD0ta6tHvnU.svg",
  contactBg: "https://framerusercontent.com/images/GZCZwjOIWqffSQdHNjCiGlb5bNo.png",
  building: "https://framerusercontent.com/images/KoDckd5bYYLtm51sHqH2FZPw.png",
  arrow: "https://framerusercontent.com/images/5svlkbtLBptQPNQv7tmcUtbUY.svg",
  teamMonogram: "https://framerusercontent.com/images/7LskxeHuFJRZcIA3zTieCcEDTMg.svg",
};

export const SERVICES = [
  {
    n: "01",
    slug: "branding-strategy",
    title: "Branding &\nStrategy",
    image: "https://framerusercontent.com/images/lu3b71WQRR7SuxAm5tW1U2S33Y.png",
    tags: ["#BrandClarity", "#DesignDirection"],
    body: "Crafting brand foundations that guide design and business decisions.",
  },
  {
    n: "02",
    slug: "visual-design",
    title: "Visual\nDesign",
    image: "https://framerusercontent.com/images/cKtt5GN08RbwOKmrDIjc9kgKYI.png",
    tags: ["#VisualFlow", "#ArtDirection"],
    body: "We design intuitive, user-focused experiences and interfaces that balance function with visual impact.",
  },
  {
    n: "03",
    slug: "ui-ux-design",
    title: "UI/UX\nDesign",
    image: "https://framerusercontent.com/images/N52NJEiktfwDaa2xopCRRvom59k.png",
    tags: ["#UserFirst", "#SeamlessUX"],
    body: "We craft bold, cohesive visuals that express your brand's identity and elevate every interaction.",
  },
];

export const AWARDS = [
  { title: "Best US Portfolio", by: "(CSS)", body: "Onix Agency Business have won best Portfolio of the Year - 2025." },
  { title: "SOTD 2023", by: "(FWA)", body: "Recognized for outstanding creativity and digital design excellence." },
  { title: "OSSDA", by: "(Dribbble)", body: "Honored for excellence and innovative brand experiences." },
  { title: "Webby", by: "(CSS)", body: "Webby Awards for creativity, innovation, and digital impact." },
  { title: "SOTD 2024", by: "(Awwwards)", body: "NovaWear — Winner of Site of the Year 2024" },
];

export const IMPACT = [
  {
    value: "119+",
    text: "Projects → increase in qualified business inquiries after redesigning a client's website.",
  },
  {
    value: "50+",
    text: "Projects → increase in qualified business inquiries after redesigning a client's website.",
  },
];

export const CLIENT_LOGOS = [
  "https://framerusercontent.com/images/N5J98U6GgjBZbO983tauvNt5hco.svg",
  "https://framerusercontent.com/images/EN8SlFfafiktsZ31CnwOOTiV38.svg",
  "https://framerusercontent.com/images/62DRhSUCCPifMV8TR1c7yE9Aoo.svg",
  "https://framerusercontent.com/images/nSmgmM28VR9NPssgFlqpnPzyhAA.svg",
];

export type Work = {
  slug: string;
  title: string;
  tags: string[];
  body: string;
  image: string;
  span: "wide" | "tall" | "half" | "full";
};

export const WORKS: Work[] = [
  {
    slug: "zaven-forge",
    title: "Zaven Forge",
    tags: ["Content Strategy", "Motion Design"],
    body: "A brand visual study focusing on color harmony, proportion, and flow with cohesive visual storytelling.",
    image: "https://framerusercontent.com/images/TZFch6Uxx17NqaX196fjQklqLY.png",
    span: "half",
  },
  {
    slug: "lumen-drift",
    title: "Lumen Drift",
    tags: ["UI/UX Design", "Brand Development"],
    body: "A conceptual typography frame capturing motion, depth, and alignment with expressive visual rhythm.",
    image: "https://framerusercontent.com/images/BrwKBOwxpOsLU6dAmyUYyI7j24.png",
    span: "half",
  },
  {
    slug: "pure-realm",
    title: "Pure Realm",
    tags: ["Motion Design", "Visual Direction"],
    body: "A studio lighting setup emphasizing contrast, creative clarity, and detail with refined visual depth.",
    image: "https://framerusercontent.com/images/kadEhCQ3ZlP02iu7FoMhGsRIYxs.png",
    span: "full",
  },
  {
    slug: "bronco-light",
    title: "Bronco Light",
    tags: ["Visual Direction", "Visual Design"],
    body: "A close-up headlight study highlighting precision, light, and motion with futuristic visual impact.",
    image: "https://framerusercontent.com/images/XMtapqImFOahRDjhlv4mC9I2oWM.png",
    span: "half",
  },
  {
    slug: "nova-thread",
    title: "Nova Thread",
    tags: ["Visual Design", "Branding"],
    body: "A dynamic logo sequence showcasing rhythm, balance, and energy through bold motion and flow.",
    image: "https://framerusercontent.com/images/eWAn1xb4pLhVLLzstH60EfERuvE.png",
    span: "half",
  },
  {
    slug: "design-axis",
    title: "Design Axis",
    tags: ["Branding", "UI/UX Design"],
    body: "A minimal product composition exploring texture, form, and reflection with refined balance and depth.",
    image: "https://framerusercontent.com/images/QM8cqGve0n8gY0vp3ZYykTPSw.png",
    span: "half",
  },
];

export const PROCESS = [
  {
    n: "01",
    title: "RESEARCH",
    body: "We dive into market trends, user behaviors, and industry insights to uncover opportunities that shape smarter strategies.",
    chip: "Brainstorming",
  },
  {
    n: "02",
    title: "PROTOTYPE",
    body: "We translate research into tangible flows, wireframes, and interactive prototypes that validate every decision early.",
    chip: "Wireframing",
  },
  {
    n: "03",
    title: "PRESENTATION",
    body: "We deliver a refined, production-ready system with clear documentation, handoff, and creative direction.",
    chip: "Handoff",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Working with Agencux was a game-changer. They understood our vision into a digital experience that elevated our brand and attracted new clients.",
    name: "JOHNNY ORWELL",
    role: "CEO at Orion Ventures",
    avatar: IMG.avatar,
    image: IMG.testimonialMan,
  },
  {
    quote:
      "The team shaped our identity with precision and restraint. Every detail feels intentional and the results speak in numbers, not adjectives.",
    name: "ELENA MARCH",
    role: "Founder at Nova Thread",
    avatar: IMG.avatar,
    image: IMG.testimonialMan,
  },
];

export const TEAM = [
  {
    n: "01",
    name: "CHRIS FAREWELL",
    role: "Art Director",
    image: "https://framerusercontent.com/images/3a5T6SLOwgnTE2kosth6BidNykw.png",
  },
  {
    n: "02",
    name: "MICHEAL STERLING",
    role: "Graphic Designer",
    image: "https://framerusercontent.com/images/UyErI6Yiy4jvTxrNjbPbtgxQDI.png",
  },
  {
    n: "03",
    name: "MIKE BALLACK",
    role: "PR Manager",
    image: "https://framerusercontent.com/images/IERvuSoG1iIOhd9K2meki2wThjo.png",
  },
];

export const FAQS = [
  {
    q: "What services does Agencux offer?",
    a: "We provide branding & strategy, UI/UX design, visual direction, research, and prototyping.",
  },
  {
    q: "Who do you work with?",
    a: "Startups, scale-ups, and established brands who care about craft — from first identity to full digital systems.",
  },
  {
    q: "How long does a project take?",
    a: "Most engagements run between three and eight weeks depending on scope, with weekly checkpoints throughout.",
  },
  {
    q: "Do you handle both design and development?",
    a: "Yes. We design and ship — production-ready interfaces, motion, and front-end implementation.",
  },
];

export const PRICING = [
  {
    name: "BASIC PLAN",
    sub: "For small teams and start ups",
    price: "6000",
    features: [
      "Full service creative",
      "Monthly consulting call",
      "Simple, monthly subscribtion",
      "Scales with yours need",
      "Async + Slack",
      "Updates every 2 days",
      "Cancel anytime",
      "50 design hours per month",
    ],
    featured: false,
  },
  {
    name: "PREMIUM PLAN",
    sub: "For enterprise and organizations",
    price: "12000",
    features: [
      "Fully mangage project",
      "Creative strategy",
      "Weekly consultant call",
      "Everything included",
      "Access to entire team",
      "Updates every 2 days",
      "Cancel anytime",
    ],
    featured: true,
  },
];

export const LOCATIONS = [
  { city: "MEXICO", flag: "https://framerusercontent.com/images/wrnq7k5S3nCWL8py3TDFHA0Yg.png", x: 17, y: 24 },
  { city: "SAO PAULO", flag: "https://framerusercontent.com/images/0jZjnzvbcT7Up5aXKcJf8sE4rEs.svg", x: 29, y: 58 },
  { city: "GHANA", flag: "https://framerusercontent.com/images/lI8uiBph6d9TVi0wn4mP96QdRic.svg", x: 47, y: 27 },
  { city: "DUBAI", flag: "https://framerusercontent.com/images/ZSKjc2HJi7eVYFxHOOhFEcOkzQ.svg", x: 64, y: 16 },
  { city: "HONGKONG", flag: "https://framerusercontent.com/images/X48nBOYoECJFr7oEcYJjkQbVVw.svg", x: 81, y: 11 },
  { city: "SINGAPORE", flag: "https://framerusercontent.com/images/Re1e9A54gFoVNSA5eoMuGFn6Zc.svg", x: 73, y: 46 },
];

export type Post = {
  slug: string;
  kicker: string;
  title: string;
  image: string;
  body: string[];
};

export const POSTS: Post[] = [
  {
    slug: "designs-that-work",
    kicker: "DESIGN THAT WORKS",
    title: "Where creativity meets real-world results",
    image: "https://framerusercontent.com/images/Jhg1Bcnkl5bz8X17aJhM8X5SsVI.png",
    body: [
      "Design earns its keep when it moves a number. We start every engagement by naming the metric the work has to shift, then let that constraint sharpen the creative rather than dull it.",
      "The result is work that looks inevitable in hindsight: fewer decorative gestures, more decisions that hold up under traffic, scrutiny, and time.",
    ],
  },
  {
    slug: "power-of-branding",
    kicker: "POWER OF BRANDING",
    title: "How identity shapes trust and recognition",
    image: "https://framerusercontent.com/images/XTySPE8qFJiUMWwxkd5MenlDAOw.png",
    body: [
      "A brand is a promise repeated until it becomes memory. Consistency across type, colour, and tone is what turns a first impression into recognition.",
      "We build identity systems that survive contact with reality — flexible enough for a campaign, strict enough to stay recognisable.",
    ],
  },
  {
    slug: "less-is-powerful",
    kicker: "LESS IS POWERFUL",
    title: "Minimalism that speaks louder than words",
    image: "https://framerusercontent.com/images/q1tjXW1SK6NktnTHge88DS6dNEM.png",
    body: [
      "Restraint is not absence. Removing the unnecessary gives the necessary room to land, and gives the reader a clear path through the page.",
      "Every element that stays has to earn its place — in hierarchy, in rhythm, and in meaning.",
    ],
  },
  {
    slug: "behind-every-logo",
    kicker: "BEHIND EVERY LOGO",
    title: "Uncovering the thought process in every mark.",
    image: "https://framerusercontent.com/images/446j1SYa5yY83sg3UXr8MJHifP0.png",
    body: [
      "A mark is the compressed form of a strategy. Before we draw, we write — the positioning, the audience, the promise.",
      "Only then does the geometry start to matter: proportion, counter shapes, and how it behaves at sixteen pixels.",
    ],
  },
  {
    slug: "story-in-design",
    kicker: "STORY IN DESIGN",
    title: "Every pixel has a narrative to tell",
    image: "https://framerusercontent.com/images/G6TuQDQMmqVelRSnFRKDZqX8.png",
    body: [
      "Layout is pacing. Scale, space, and sequence decide what a visitor feels before they read a single word.",
      "We choreograph pages the way an editor cuts a film — with tension, release, and a clear point of view.",
    ],
  },
  {
    slug: "motion-in-identity",
    kicker: "MOTION IN IDENTITY",
    title: "When brands come alive through movement",
    image: "https://framerusercontent.com/images/kmEC9vDLQh3GtfDTwuc4cS3bK4.png",
    body: [
      "Motion is the modern signature of a brand. The easing curve of a button says as much as the colour it is painted in.",
      "We define motion tokens alongside colour and type so movement stays consistent across every surface.",
    ],
  },
];
