import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, ExternalLink } from "lucide-react";
import { Tool } from "@/data/tools";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ToolCardProps {
  tool: Tool;
  featured?: boolean;
}

export function ToolCard({ tool, featured = false }: ToolCardProps) {
  return (
    <div 
      className={`group relative rounded-2xl p-[1px] transition-all duration-500 hover:-translate-y-2 ${
        featured 
          ? "bg-gradient-to-br from-primary via-accent to-orange-500" 
          : "bg-gradient-to-br from-border via-border to-border hover:from-primary/50 hover:via-accent/50 hover:to-orange-500/50"
      }`}
    >
      <div className="relative h-full rounded-2xl bg-card p-6 overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 via-accent/5 to-transparent" />
        
        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        <div className="relative">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                {tool.logo}
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                  {tool.name}
                </h3>
                <Badge variant="secondary" className="text-xs mt-1 bg-secondary/80 backdrop-blur-sm">
                  {tool.category}
                </Badge>
              </div>
            </div>
            {featured && (
              <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0 shadow-lg shadow-primary/20 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Featured
              </Badge>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
            {tool.tagline}
          </p>

          {/* Stats/Tags preview */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {tool.bestFor.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-2 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action */}
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm" 
              className="group/btn p-0 h-auto text-primary hover:text-primary hover:bg-transparent" 
              asChild
            >
              <Link to={`/tools/${tool.id}`}>
                View Details
                <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <div className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
