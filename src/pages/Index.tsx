import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ToolCard } from "@/components/ToolCard";
import { BlogCard } from "@/components/BlogCard";
import { Layout } from "@/components/Layout";
import { getFeaturedTools, tools } from "@/data/tools";
import { getRecentPosts } from "@/data/posts";
import { ArrowRight, Zap, Shield, TrendingUp, Sparkles, Star, Users, Layers } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Save Hours Daily",
    description: "AI tools automate repetitive tasks so you can focus on what matters.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Honest Reviews",
    description: "We test tools ourselves and share unbiased pros and cons.",
    gradient: "from-primary to-accent",
  },
  {
    icon: TrendingUp,
    title: "Stay Ahead",
    description: "Discover the latest AI tools before everyone else.",
    gradient: "from-green-500 to-emerald-500",
  },
];

const stats = [
  { value: `${tools.length}+`, label: "AI Tools", icon: Layers },
  { value: "50K+", label: "Monthly Users", icon: Users },
  { value: "4.9", label: "Average Rating", icon: Star },
];

const testimonials = [
  {
    quote: "These AI tool recommendations helped me ship my MVP in just one weekend instead of months.",
    author: "Sarah Chen",
    role: "Startup Founder",
  },
  {
    quote: "Finally found the right tools for my workflow. My productivity has doubled.",
    author: "Marcus Johnson",
    role: "Product Designer",
  },
  {
    quote: "The honest comparisons saved me from wasting money on tools that weren't right for me.",
    author: "Alex Rivera",
    role: "Freelance Developer",
  },
];

export default function Index() {
  const featuredTools = getFeaturedTools();
  const recentPosts = getRecentPosts(3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Advanced background effects */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl floating opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/30 rounded-full blur-3xl floating opacity-30" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-orange-500/20 rounded-full blur-3xl floating opacity-20" style={{ animationDelay: '-1.5s' }} />
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-fade-in-up neon-border">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-muted-foreground">Discover {tools.length}+ AI tools reviewed</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in-up leading-tight" style={{ animationDelay: "100ms" }}>
              The Best AI Tools That{" "}
              <span className="gradient-text">Actually Work</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-fade-in-up leading-relaxed" style={{ animationDelay: "200ms" }}>
              Stop wasting time on tools that don't deliver. We test and review the most powerful 
              AI tools for developers, creators, and founders.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <Button 
                className="bg-gradient-to-r from-primary via-accent to-orange-500 hover:opacity-90 shadow-lg shadow-primary/30 text-lg h-14 px-8 transition-all duration-300 hover:shadow-primary/50 hover:scale-105" 
                size="xl" 
                asChild
              >
                <Link to="/tools">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore AI Tools
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="xl" 
                className="h-14 px-8 text-lg border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300" 
                asChild
              >
                <Link to="/blog">Read Our Blog</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <stat.icon className="w-5 h-5 text-primary" />
                    <span className="font-display text-3xl md:text-4xl font-bold gradient-text">{stat.value}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-50" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group relative p-8 rounded-2xl glass-card neon-border animate-fade-in-up shine"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display font-semibold text-xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 mb-4">
              Featured Collection
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Featured AI Tools
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our top picks for developers, creators, and founders looking to leverage AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTools.map((tool, index) => (
              <div 
                key={tool.id} 
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ToolCard tool={tool} featured />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80" 
              asChild
            >
              <Link to="/tools">
                View All {tools.length} Tools
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20 mb-4">
              Testimonials
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              What People Are Saying
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group relative p-8 rounded-2xl glass-card neon-border animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <cite className="font-semibold not-italic">{testimonial.author}</cite>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-orange-500/10 text-orange-500 border border-orange-500/20 mb-4">
              Latest Articles
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              From the Blog
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Guides, comparisons, and tips to help you get the most out of AI tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <div 
                key={post.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card/80" 
              asChild
            >
              <Link to="/blog">
                Read More Articles
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-orange-500/20" />
            <div className="absolute inset-0 mesh-gradient" />
            <div className="absolute inset-0 glass-card" />
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl neon-border" />
            
            <div className="relative p-12 md:p-20 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm">Start building today</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Ready to Build Faster with{" "}
                <span className="gradient-text">AI</span>?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
                Start exploring the best AI tools today and transform how you work, create, and build.
              </p>
              <Button 
                className="bg-gradient-to-r from-primary via-accent to-orange-500 hover:opacity-90 shadow-lg shadow-primary/30 text-lg h-14 px-8 transition-all duration-300 hover:shadow-primary/50 hover:scale-105" 
                size="xl" 
                asChild
              >
                <Link to="/tools">
                  <Zap className="w-5 h-5 mr-2" />
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
