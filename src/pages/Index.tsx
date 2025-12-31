import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ToolCard } from "@/components/ToolCard";
import { BlogCard } from "@/components/BlogCard";
import { Layout } from "@/components/Layout";
import { getFeaturedTools } from "@/data/tools";
import { getRecentPosts } from "@/data/posts";
import { ArrowRight, Zap, Shield, TrendingUp, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Save Hours Daily",
    description: "AI tools automate repetitive tasks so you can focus on what matters.",
  },
  {
    icon: Shield,
    title: "Honest Reviews",
    description: "We test tools ourselves and share unbiased pros and cons.",
  },
  {
    icon: TrendingUp,
    title: "Stay Ahead",
    description: "Discover the latest AI tools before everyone else.",
  },
];

const testimonials = [
  {
    quote: "These AI tool recommendations helped me ship my MVP in just one weekend instead of months.",
    author: "Startup Founder",
  },
  {
    quote: "Finally found the right tools for my workflow. My productivity has doubled.",
    author: "Product Designer",
  },
  {
    quote: "The honest comparisons saved me from wasting money on tools that weren't right for me.",
    author: "Freelance Developer",
  },
];

export default function Index() {
  const featuredTools = getFeaturedTools();
  const recentPosts = getRecentPosts(3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-cyan-400/20 rounded-full blur-3xl opacity-30" />
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Discover 50+ AI tools reviewed</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              The Best AI Tools That{" "}
              <span className="gradient-text">Actually Save You Time</span>{" "}
              & Make You Money
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              Stop wasting time on tools that don't deliver. We test and review the most powerful 
              AI tools for developers, creators, and founders who want to build faster.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "300ms" }}>
              <Button variant="cta" size="xl" asChild>
                <Link to="/tools">
                  Explore AI Tools
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/blog">Read Our Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="text-center p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Featured AI Tools
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our top picks for developers, creators, and founders looking to leverage AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/tools">
                View All Tools
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              What People Are Saying
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="glass-card rounded-xl p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <blockquote className="text-foreground mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <cite className="text-sm text-muted-foreground not-italic">
                  — {testimonial.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Latest from the Blog
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Guides, comparisons, and tips to help you get the most out of AI tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">
                Read More Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-400/20" />
            <div className="absolute inset-0 glass-card" />
            
            <div className="relative p-12 md:p-16 text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Ready to Build Faster with AI?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Start exploring the best AI tools today and transform how you work, create, and build.
              </p>
              <Button variant="cta" size="xl" asChild>
                <Link to="/tools">
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
