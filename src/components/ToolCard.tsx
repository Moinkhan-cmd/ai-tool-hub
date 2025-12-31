import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
      className={`group relative glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 ${
        featured ? "border-primary/30" : ""
      }`}
    >
      {/* Glow effect for featured */}
      {featured && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      
      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center text-2xl">
              {tool.logo}
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              <Badge variant="secondary" className="text-xs mt-1">
                {tool.category}
              </Badge>
            </div>
          </div>
          {featured && (
            <Badge className="bg-primary/20 text-primary border-primary/30">
              Featured
            </Badge>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {tool.tagline}
        </p>

        {/* Action */}
        <Button variant="ghost" size="sm" className="group/btn p-0 h-auto" asChild>
          <Link to={`/tools/${tool.id}`}>
            View Details
            <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
