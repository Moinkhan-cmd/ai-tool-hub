import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { getToolById } from "@/data/tools";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Check, X, ExternalLink, Zap } from "lucide-react";

export default function ToolDetailPage() {
  const { id } = useParams<{ id: string }>();
  const tool = getToolById(id || "");

  if (!tool) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Tool Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The tool you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/tools">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tools
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="py-12 md:py-16 border-b border-border/50">
        <div className="container mx-auto px-4">
          <Link
            to="/tools"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Tools
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Icon */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center text-4xl shrink-0">
              {tool.logo}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="font-display text-3xl md:text-4xl font-bold">
                  {tool.name}
                </h1>
                <Badge variant="secondary">{tool.category}</Badge>
              </div>
              <p className="text-xl text-muted-foreground mb-6">
                {tool.tagline}
              </p>
              <Button variant="cta" size="lg" asChild>
                <a href={tool.referralLink} target="_blank" rel="noopener noreferrer">
                  Try {tool.name} Free
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {tool.description}
                </p>
              </div>

              {/* Best For */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">
                  Who Is This Best For?
                </h2>
                <div className="flex flex-wrap gap-2">
                  {tool.bestFor.map((item) => (
                    <Badge key={item} variant="outline" className="text-sm py-1 px-3">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">Key Features</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tool.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Zap className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="font-display text-2xl font-bold mb-4">Pros</h2>
                  <ul className="space-y-3">
                    {tool.pros.map((pro) => (
                      <li key={pro} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-muted-foreground">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold mb-4">Cons</h2>
                  <ul className="space-y-3">
                    {tool.cons.map((con) => (
                      <li key={con} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3 h-3 text-red-500" />
                        </div>
                        <span className="text-muted-foreground">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">
                  Real-World Use Cases
                </h2>
                <ul className="space-y-3">
                  {tool.useCases.map((useCase) => (
                    <li key={useCase} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span className="text-muted-foreground">{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <div className="glass-card rounded-xl p-6 sticky top-24">
                <h3 className="font-display font-semibold text-lg mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Try {tool.name} using our link and see how it can transform your workflow.
                </p>
                <Button variant="cta" className="w-full mb-4" asChild>
                  <a href={tool.referralLink} target="_blank" rel="noopener noreferrer">
                    Try for Free
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  No credit card required for free tier
                </p>

                <div className="border-t border-border/50 mt-6 pt-6">
                  <h4 className="font-semibold text-sm mb-2">Pricing</h4>
                  <p className="text-sm text-muted-foreground">{tool.pricing}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl font-bold mb-4">
            Start Building with {tool.name} Today
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Join thousands of developers and creators who are already using {tool.name} 
            to build faster and smarter.
          </p>
          <Button variant="cta" size="lg" asChild>
            <a href={tool.referralLink} target="_blank" rel="noopener noreferrer">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
