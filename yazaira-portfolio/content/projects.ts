// ─── PROJECTS CONTENT ────────────────────────────────────────────────────────
// Add a new project by copying one of the objects below.
// images[] paths are relative to /public/

export interface ProjectImage {
  src: string;
  alt: string;
  transparent?: boolean;
  layout?: "full" | "half" | "logo";
}

export interface Metric {
  value: string;
  label: string;
}

export interface ProjectDoc {
  label: string;
  file: string;
  // Modal metadata
  coverSrc: string;          // path to cover thumbnail in /public/
  title: string;             // document title shown in modal
  subtitle: string;          // short subtitle line
  desc: string;              // 1–2 sentence description
  pages: string;             // e.g. "11 pages"
  canPreview: boolean;       // false for very large PDFs (>20MB)
}

export interface Project {
  id: string;
  client: string;
  campaign: string;
  year: string;
  semester: string;
  role: string;
  firm: string;
  category: string;
  summary: string;
  who: string;
  objective: string;
  bigIdea?: string;
  deliverables: {
    title: string;
    purpose: string;
    details: string[];
    images: ProjectImage[];
  }[];
  results: Metric[];
  learnedItems?: string[];
  documents: ProjectDoc[];
  blogUrl?: string;
  blogPosts?: string[];
  collaborators: string;
  heroImage: string;
}

export const projects: Project[] = [
  {
    id: "blue-ridge-foster-va",
    client: "Blue Ridge Foster VA",
    campaign: "Brand Refresh & Socktober Drive",
    year: "2025",
    semester: "Fall 2025 · Bluestone Communications",
    role: "Creative Lead",
    firm: "Bluestone Communications",
    category: "Nonprofit · Branding",
    heroImage: "/images/works/brfva/mockups-01.png",
    summary:
      "During my Fall 2025 semester at JMU's student-run PR firm, Bluestone Communications, I held a leadership position on the creative team. Together, we built a brand guide, refreshed social media content and event flyers, redesigned an existing branded flyer, and created a logo for a brand-new clothing drive initiative — Socktober.",
    who: "Blue Ridge Foster VA is a nonprofit based in Rockingham County, Virginia. Their mission is to provide hygiene products, clothing, shoes, toys, and books to foster and kinship families — completely free of charge.",
    objective:
      "Increase community engagement, inform audiences about upcoming events, and educate the public on Blue Ridge Foster VA's services and mission across their Instagram and Facebook platforms.",
    deliverables: [
      {
        title: "Social Media Content",
        purpose: "Increase engagement with the community, inform about events, and educate on services and mission.",
        details: [
          "Posts designed in Canva to capture attention while staying grounded in Blue Ridge Foster VA's core brand identity.",
          "A mix of photography and illustration-based graphics gave the feed variety.",
          "Every design decision guided by warmth, compassion, and approachability.",
        ],
        images: [
          { src: "/images/works/brfva/mockups-01.png", alt: "BRFVA Instagram Mockups 01", transparent: true },
          { src: "/images/works/brfva/mockups-02.png", alt: "BRFVA Instagram Mockups 02", transparent: true },
        ],
      },
      {
        title: "Socktober — Logo & Drive Flyer",
        purpose: "Establish a visual identity for the new October clothing drive launch.",
        details: [
          "Used Procreate to draw custom letterforms with sock-shaped details woven into each character.",
          "Logo mirrored BRFVA's original branding for instant recognition, with the signature heart icon throughout.",
          "Socktober flyer distributed across JMU campus and Downtown Harrisonburg — clean, direct, with a QR code for donations.",
        ],
        images: [
          { src: "/images/works/brfva/socktober-logo.png", alt: "Socktober Logo", transparent: true, layout: "logo" },
          { src: "/images/works/brfva/socktober-flyer.png", alt: "Socktober Drive Flyer", transparent: true },
        ],
      },
      {
        title: "Branded Flyers",
        purpose: "Redesign and create flyers that are cohesive with the brand and easy to share.",
        details: [
          "Redesigned the existing branded flyer — cleaner layout, cohesive blue brand colors, mountain silhouette as a nod to 'Blue Ridge.'",
          "Chick-fil-A fundraiser digital flyer designed with a plate of brownies as the focal point.",
          "Transparent image of children in the background layers in warmth and mission-driven emotion.",
        ],
        images: [
          { src: "/images/works/brfva/branded-flyer.png", alt: "BRFVA Branded Flyer", transparent: false },
          { src: "/images/works/brfva/chickfila-flyer.png", alt: "BRFVA Chick-fil-A Flyer", transparent: false },
        ],
      },
    ],
    results: [
      { value: "🏆", label: "2026 Virginia Student PR Innovation Award — PRSSA" },
      { value: "120+", label: "Clothing Donations Through the Socktober Drive" },
      { value: "80+", label: "New Followers Across Social Platforms" },
      { value: "4", label: "JMU Organizations Collaborated With" },
    ],
    documents: [
      {
        label: "Blue Ridge Foster VA Brand Guide.pdf",
        file: "/resume/brfva-brand-guide.pdf",
        coverSrc: "/resume/cover-brfva.jpg",
        title: "Brand Guide",
        subtitle: "Visual Identity & Brand Standards",
        desc: "The complete brand guide for Blue Ridge Foster VA — logo usage, color palette, typography, social media standards, and design principles for all campaign materials.",
        pages: "11 pages",
        canPreview: true,
      },
    ],
    collaborators: "Collaborated with Gigi Gualberto and Audrey Ridder on all design deliverables.",
  },

  {
    id: "chop-house",
    client: "Chop House",
    campaign: "Brand Identity & Content Suite",
    year: "2026",
    semester: "Spring 2026 · Bluestone Communications",
    role: "Creative Lead",
    firm: "Bluestone Communications",
    category: "Restaurant · Brand & Social",
    heroImage: "/images/works/chophouse/partner-post.png",
    summary:
      "Returning to Bluestone Communications in Spring 2026, I took on another creative leadership role. The team built a comprehensive brand guide, social media guide, and photography and video standards — then translated all of it into ready-to-post social media content, reels, and refreshed flyers for the Chop House family of restaurants.",
    who: "The Chop House family — Local Chop & Grill House in Harrisonburg, Chop House Bistro in Luray, and Chop House Tavern in Staunton — was born from a shared vision of elevating farm-to-table dining across Virginia's Shenandoah Valley.",
    objective:
      "Establish a cohesive, recognizable brand identity across all three Chop House locations on social media, while still honoring what makes each spot unique.",
    deliverables: [
      {
        title: "Social Media Content",
        purpose: "Increase engagement and highlight key offerings and partnerships.",
        details: [
          "Posts designed in Canva, built around the new brand identity crafted for Chop House.",
          "Each graphic balances strong photography with intentional copy.",
          "Letting the food and the story speak for themselves.",
        ],
        images: [
          { src: "/images/works/chophouse/partner-post.png", alt: "CH Producer Partnership Post", transparent: true },
          { src: "/images/works/chophouse/catering-post.png", alt: "CH Catering Post", transparent: true },
          { src: "/images/works/chophouse/happy-story.png", alt: "CH Happy Hour Story Highlight", transparent: true },
        ],
      },
      {
        title: "Happy Hour & Catering Flyers",
        purpose: "Drive awareness and foot traffic for two key offerings.",
        details: [
          "Both flyers keep the design clean and brand-aligned.",
          "Real restaurant photography, clear hierarchy, and just enough personality to feel inviting.",
        ],
        images: [
          { src: "/images/works/chophouse/happy-flyer.png", alt: "CH Happy Hour Flyer", transparent: true },
          { src: "/images/works/chophouse/catering-flyer.png", alt: "CH Catering Flyer", transparent: true },
        ],
      },
      {
        title: "Reels Series — Behind the Chop & Staff Tastes",
        purpose: "Humanize the brand and highlight the craftsmanship behind the food.",
        details: [
          "'Behind the Chop' gave audiences an inside look at meal prep and the day-to-day rhythm of the kitchen.",
          "'Staff Tastes' captured team members reacting to new dry-aged steak additions.",
          "Both series added personality, credibility, and a reason to keep watching.",
        ],
        images: [
          { src: "/images/works/chophouse/reel.png", alt: "Behind the Chop Reel", transparent: true },
          { src: "/images/works/chophouse/staff-tasting.png", alt: "CH Staff Tasting", transparent: true },
        ],
      },
    ],
    results: [
      { value: "1", label: "In-Depth Social Media & Brand Guide" },
      { value: "6", label: "Partnership Posts" },
      { value: "4", label: "Reels — Staff Tasting & Behind the Chop" },
      { value: "1", label: "Media Pitch Picked Up" },
    ],
    documents: [
      {
        label: "Chop House Brand Guide.pdf",
        file: "/resume/chophouse-brand-guide.pdf",
        coverSrc: "/resume/cover-chophouse.jpg",
        title: "Brand Guide",
        subtitle: "Social Media & Visual Identity Standards",
        desc: "The comprehensive brand and social media guide for the Chop House family — photography standards, content pillars, tone of voice, posting strategy, and design templates across all three locations.",
        pages: "40 pages",
        canPreview: false, // 38MB — too large for inline preview
      },
    ],
    collaborators: "Collaborated with Christiana Pareja, Laura Walters, and Abigail Shaw on all deliverables.",
  },

  {
    id: "tazo",
    client: "Tazo Tea",
    campaign: "Steeps Community, Fosters Unity",
    year: "2025",
    semester: "Senior Capstone Project",
    role: "Campaign Strategist",
    firm: "Senior Capstone",
    category: "Tea Brand · Integrated Campaign",
    heroImage: "/images/currently-loving/song.jpg",
    summary:
      "For my senior capstone, my team and I were challenged to build a full campaign for Tazo from the ground up. Through consumer research, strategic planning, and creative development, we crafted a concept designed to run across social media, Out-of-Home, radio, and TV.",
    who: "Tazo is a tea brand founded in 1994, known for bold and creative flavors available in tea bags, concentrates, and K-Cup pods. After being acquired by Starbucks in 1999 and later sold in 2017, Tazo is now sold at major retailers including Target, Walmart, and Amazon.",
    objective:
      "Build Tazo's visibility across social media, Out-of-Home, radio, and TV — reaching new audiences while reinforcing what the brand already stands for.",
    bigIdea: "Tazo Tea steeps community and fosters unity.",
    deliverables: [],
    results: [],
    learnedItems: [
      "How to conduct audience research, including facilitating focus group interviews.",
      "Developing a singular big idea that extends cohesively across all deliverables.",
      "Presenting data and strategy through a compelling narrative lens.",
      "Sharpening my skills in Adobe InDesign and Illustrator.",
    ],
    documents: [
      {
        label: "Tazo Campaign Book — Full Deck.pdf",
        file: "/resume/tazo-campaign-book.pdf",
        coverSrc: "/resume/cover-tazo.jpg",
        title: "Campaign Book",
        subtitle: "Integrated Campaign Strategy",
        desc: "The full senior capstone campaign book — audience research, consumer insights, big idea development, creative execution across social, OOH, radio, and TV, plus final deliverables.",
        pages: "39 pages",
        canPreview: true,
      },
    ],
    collaborators: "Collaborated with Alice Roeper, N'Deye Sock, and Hayley Weissberg on all deliverables.",
  },

  {
    id: "good-kid-ad-city",
    client: "Good Kid, Ad City",
    campaign: "Product Placement in Hip-Hop",
    year: "2024",
    semester: "Academic Project",
    role: "Writer & Strategist",
    firm: "Class Project",
    category: "Blog · Content Strategy",
    heroImage: "/images/photos/smiling.jpg",
    summary:
      "A class project turned editorial blog — an exploration of product placement in advertising through the lens of Hip-Hop culture. Written for Gen-Z audiences who grew up with the music, the references, and the brands embedded in both.",
    who: "Good Kid, Ad City is a blog developed for a class project.",
    objective:
      "Create a blog post series on product placement in advertising — specifically its history and evolution within Hip-Hop music.",
    deliverables: [],
    results: [],
    learnedItems: [
      "Building and maintaining a blog on WordPress.",
      "Writing articles that balance research with genuine voice and storytelling.",
      "Sourcing thoroughly and citing accurately in APA format.",
    ],
    blogUrl: "https://goodkidadcityy.wordpress.com/",
    blogPosts: [
      "Hip Hop & Cadillacs: Crusin' Down the Street",
      "Hip Hop, The Louis Vuitton Don",
      "Henny in Hip-Hop's Hand",
      "The Revolution of Product Placement, Televised",
      "My Adidas: Kicking Off Product Placement in Hip-Hop",
    ],
    documents: [],
    collaborators: "Collaborated with Julia Kruger and Quinn Worley.",
  },
];
