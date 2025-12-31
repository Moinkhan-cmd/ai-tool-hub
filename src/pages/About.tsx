import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
                About <span className="gradient-text">AI Tools Guide</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Helping you discover the best AI tools to build, create, and work smarter.
              </p>
            </div>

            {/* Mission */}
            <div className="glass-card rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h2 className="font-display text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The AI landscape is evolving rapidly, and new tools are launching every day. 
                It can be overwhelming to find the right ones. That's where we come in.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We test, review, and compare AI tools so you don't have to waste time and money 
                on solutions that don't work. Our goal is simple: help you find the tools that 
                actually make a difference in your workflow.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold">Honest Reviews</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  We share real pros and cons. No paid reviews, no fake testimonials. 
                  If a tool has limitations, we'll tell you.
                </p>
              </div>

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold">User-First Focus</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  We prioritize your success over everything else. Our recommendations 
                  are based on what works, not what pays the most.
                </p>
              </div>
            </div>

            {/* Affiliate Disclosure */}
            <div className="bg-secondary/50 rounded-xl p-6 border border-border/50 mb-8">
              <h2 className="font-display text-lg font-semibold mb-3">
                Affiliate Disclosure
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Some links on this website are affiliate links, which means we may earn 
                a small commission if you sign up or make a purchase through them. This 
                comes at no extra cost to you and helps support our work in creating 
                free content and reviews.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                We only recommend tools we genuinely believe in and have tested ourselves. 
                Our editorial integrity is never compromised by affiliate partnerships.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="font-display text-2xl font-bold mb-4">
                Start Exploring AI Tools
              </h2>
              <p className="text-muted-foreground mb-6">
                Ready to find tools that will transform how you work?
              </p>
              <Button variant="cta" size="lg" asChild>
                <Link to="/tools">
                  Browse All Tools
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
