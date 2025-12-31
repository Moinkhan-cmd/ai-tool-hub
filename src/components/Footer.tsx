import { Link } from "react-router-dom";
import { Sparkles, Twitter, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg">AI Tools Guide</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Your trusted source for discovering and comparing the best AI tools 
              that help you build, create, and work smarter. We test tools ourselves 
              and share honest reviews.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tools" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  All AI Tools
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-display font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tools?category=Coding" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Coding Tools
                </Link>
              </li>
              <li>
                <Link to="/tools?category=No-Code" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  No-Code Builders
                </Link>
              </li>
              <li>
                <Link to="/tools?category=Design" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Design Tools
                </Link>
              </li>
              <li>
                <Link to="/tools?category=AI Agents" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  AI Agents
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AI Tools Guide. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Some links may be affiliate links. See our{" "}
            <Link to="/about" className="text-primary hover:underline">
              disclosure
            </Link>.
          </p>
        </div>
      </div>
    </footer>
  );
}
