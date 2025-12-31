export interface Tool {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  logo: string;
  features: string[];
  pros: string[];
  cons: string[];
  bestFor: string[];
  useCases: string[];
  pricing: string;
  referralLink: string;
  featured?: boolean;
}

export const categories = [
  "All",
  "Coding",
  "Design",
  "Productivity",
  "AI Agents",
  "Writing",
  "No-Code",
];

export const tools: Tool[] = [
  {
    id: "lovable",
    name: "Lovable",
    tagline: "Build full-stack apps with AI in minutes",
    description: "Lovable is an AI-powered platform that transforms your ideas into production-ready web applications. Simply describe what you want to build, and watch as Lovable generates complete React applications with modern UI components, database integration, and authentication—all without writing a single line of code.",
    category: "No-Code",
    logo: "🚀",
    features: [
      "Natural language to full-stack app generation",
      "Built-in database and authentication",
      "Real-time preview and iteration",
      "One-click deployment",
      "GitHub integration",
      "Custom domain support",
    ],
    pros: [
      "Incredibly fast prototyping",
      "No coding knowledge required",
      "Beautiful, modern UI out of the box",
      "Excellent for MVPs and landing pages",
    ],
    cons: [
      "Learning curve for complex customizations",
      "Limited control over low-level code",
    ],
    bestFor: ["Founders", "Product managers", "Designers", "Non-technical creators"],
    useCases: [
      "Launching MVP in a weekend",
      "Building internal tools quickly",
      "Creating landing pages",
      "Prototyping ideas before hiring developers",
    ],
    pricing: "Free tier available. Pro plans start at $20/month.",
    referralLink: "https://lovable.dev/invite/E67AVT6",
    featured: true,
  },
  {
    id: "cursor",
    name: "Cursor",
    tagline: "The AI-first code editor built for productivity",
    description: "Cursor is a revolutionary code editor that puts AI at the center of your development workflow. Built on VS Code, it offers intelligent code completion, natural language editing, and the ability to understand your entire codebase for context-aware suggestions.",
    category: "Coding",
    logo: "⚡",
    features: [
      "AI-powered code completion",
      "Natural language code editing",
      "Codebase-aware suggestions",
      "Built on VS Code",
      "Multi-file context understanding",
      "Chat with your codebase",
    ],
    pros: [
      "Dramatically speeds up coding",
      "Excellent codebase understanding",
      "Familiar VS Code interface",
      "Great for refactoring",
    ],
    cons: [
      "Requires subscription for full features",
      "Can be resource-intensive",
    ],
    bestFor: ["Software developers", "Full-stack engineers", "DevOps engineers"],
    useCases: [
      "Writing code faster with AI assistance",
      "Refactoring legacy codebases",
      "Learning new programming languages",
      "Debugging complex issues",
    ],
    pricing: "Free tier with limits. Pro at $20/month.",
    referralLink: "#",
    featured: true,
  },
  {
    id: "replit",
    name: "Replit",
    tagline: "Build, deploy, and collaborate on software",
    description: "Replit is a collaborative browser-based IDE that makes it easy to code, build, and deploy applications from anywhere. With Replit Agent, you can now describe what you want to build and let AI handle the implementation.",
    category: "Coding",
    logo: "🔮",
    features: [
      "Browser-based IDE",
      "Replit Agent for AI coding",
      "Instant deployment",
      "Real-time collaboration",
      "Support for 50+ languages",
      "Built-in hosting",
    ],
    pros: [
      "No setup required",
      "Great for learning and teaching",
      "Excellent collaboration features",
      "Always accessible from any device",
    ],
    cons: [
      "Performance can lag for large projects",
      "Limited offline capabilities",
    ],
    bestFor: ["Students", "Educators", "Indie hackers", "Remote teams"],
    useCases: [
      "Learning to code",
      "Teaching programming",
      "Building side projects",
      "Quick prototypes and demos",
    ],
    pricing: "Free tier available. Replit Core at $25/month.",
    referralLink: "#",
    featured: true,
  },
  {
    id: "v0",
    name: "v0 by Vercel",
    tagline: "Generate UI with simple text prompts",
    description: "v0 is Vercel's AI-powered tool that generates production-ready UI components from text descriptions. It creates beautiful, accessible components using shadcn/ui and Tailwind CSS that you can copy directly into your projects.",
    category: "Design",
    logo: "🎨",
    features: [
      "Text-to-UI generation",
      "shadcn/ui integration",
      "Tailwind CSS output",
      "Multiple design variations",
      "Copy-paste ready code",
      "Responsive by default",
    ],
    pros: [
      "Beautiful, modern designs",
      "Production-ready code",
      "Great for inspiration",
      "Saves hours of UI work",
    ],
    cons: [
      "Limited to React/Next.js",
      "May need tweaking for specific needs",
    ],
    bestFor: ["Frontend developers", "Designers", "Startups"],
    useCases: [
      "Generating UI components quickly",
      "Getting design inspiration",
      "Prototyping interfaces",
      "Building landing pages",
    ],
    pricing: "Free tier with limits. Premium plans available.",
    referralLink: "#",
    featured: false,
  },
  {
    id: "bolt",
    name: "Bolt.new",
    tagline: "Prompt, run, edit, and deploy full-stack apps",
    description: "Bolt.new by StackBlitz lets you prompt, run, edit, and deploy full-stack web applications directly in your browser. It combines AI code generation with an instant development environment.",
    category: "No-Code",
    logo: "⚡",
    features: [
      "In-browser full-stack development",
      "AI-powered code generation",
      "Instant preview",
      "One-click deployment",
      "npm package support",
      "Real-time collaboration",
    ],
    pros: [
      "No local setup needed",
      "Very fast iteration",
      "Great for demos",
      "Supports complex applications",
    ],
    cons: [
      "Browser-based limitations",
      "Learning curve for advanced features",
    ],
    bestFor: ["Developers", "Product teams", "Educators"],
    useCases: [
      "Rapid prototyping",
      "Building demo applications",
      "Learning web development",
      "Client presentations",
    ],
    pricing: "Free to start. Premium features available.",
    referralLink: "#",
    featured: false,
  },
  {
    id: "claude",
    name: "Claude",
    tagline: "AI assistant for work and creative tasks",
    description: "Claude by Anthropic is a next-generation AI assistant designed to be helpful, harmless, and honest. It excels at analysis, writing, coding, and complex reasoning tasks with nuanced understanding.",
    category: "AI Agents",
    logo: "🤖",
    features: [
      "Advanced reasoning capabilities",
      "Long context window (200K tokens)",
      "Code generation and analysis",
      "Document understanding",
      "Multi-turn conversations",
      "API access available",
    ],
    pros: [
      "Excellent at nuanced tasks",
      "Very long context window",
      "Great writing quality",
      "Strong ethical guidelines",
    ],
    cons: [
      "No real-time internet access",
      "Can be overly cautious",
    ],
    bestFor: ["Knowledge workers", "Writers", "Researchers", "Developers"],
    useCases: [
      "Content writing and editing",
      "Code review and debugging",
      "Research and analysis",
      "Brainstorming and ideation",
    ],
    pricing: "Free tier available. Pro at $20/month.",
    referralLink: "#",
    featured: false,
  },
];

export const getToolById = (id: string): Tool | undefined => {
  return tools.find((tool) => tool.id === id);
};

export const getFeaturedTools = (): Tool[] => {
  return tools.filter((tool) => tool.featured);
};

export const getToolsByCategory = (category: string): Tool[] => {
  if (category === "All") return tools;
  return tools.filter((tool) => tool.category === category);
};
