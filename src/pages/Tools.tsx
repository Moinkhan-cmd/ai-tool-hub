import { useState } from "react";
import { Layout } from "@/components/Layout";
import { ToolCard } from "@/components/ToolCard";
import { tools, categories, getToolsByCategory } from "@/data/tools";
import { Button } from "@/components/ui/button";
import { Search, Sparkles, Zap, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function ToolsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = getToolsByCategory(selectedCategory).filter(
    (tool) =>
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Layout>
      {/* Hero with mesh gradient */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 grid-pattern" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl floating" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl floating" style={{ animationDelay: '-3s' }} />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center mb-14">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-fade-in-up neon-border">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">{tools.length}+ AI Tools Reviewed</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
              Discover the Best{" "}
              <span className="gradient-text">AI Tools</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              Explore our curated collection of AI-powered tools for developers, 
              creators, and founders. Each tool is tested and reviewed by our team.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-orange-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-300" />
              <div className="relative flex items-center">
                <Search className="absolute left-4 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search tools by name, category, or feature..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 h-14 bg-card/90 backdrop-blur-xl border-border/50 rounded-2xl text-base focus-visible:ring-primary/50"
                />
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex items-center justify-center gap-2 mb-4 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Filter by category:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-14 animate-fade-in-up" style={{ animationDelay: "450ms" }}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full transition-all duration-300 ${
                  selectedCategory === category 
                    ? "bg-gradient-to-r from-primary to-accent shadow-lg shadow-primary/30" 
                    : "hover:bg-secondary/80"
                }`}
              >
                {selectedCategory === category && <Sparkles className="w-3 h-3 mr-1" />}
                {category}
              </Button>
            ))}
          </div>

          {/* Tools count */}
          <div className="text-center mb-8">
            <p className="text-sm text-muted-foreground">
              Showing <span className="text-primary font-semibold">{filteredTools.length}</span> tools
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTools.map((tool, index) => (
              <div 
                key={tool.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${Math.min(index * 50, 500)}ms` }}
              >
                <ToolCard tool={tool} featured={tool.featured} />
              </div>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/50 flex items-center justify-center">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">No tools found</h3>
              <p className="text-muted-foreground">
                Try a different search or category filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
