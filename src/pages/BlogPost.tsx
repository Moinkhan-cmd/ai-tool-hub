import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { getPostBySlug, getRecentPosts } from "@/data/posts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import { BlogCard } from "@/components/BlogCard";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");
  const recentPosts = getRecentPosts(3).filter((p) => p.slug !== slug);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="py-12 md:py-16 border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>

            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none">
              <div 
                className="text-muted-foreground leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ 
                  __html: post.content
                    .split('\n')
                    .map(line => {
                      if (line.startsWith('# ')) {
                        return `<h1 class="font-display text-3xl font-bold text-foreground mt-8 mb-4">${line.slice(2)}</h1>`;
                      }
                      if (line.startsWith('## ')) {
                        return `<h2 class="font-display text-2xl font-bold text-foreground mt-8 mb-4">${line.slice(3)}</h2>`;
                      }
                      if (line.startsWith('### ')) {
                        return `<h3 class="font-display text-xl font-semibold text-foreground mt-6 mb-3">${line.slice(4)}</h3>`;
                      }
                      if (line.startsWith('- ')) {
                        return `<li class="ml-4">${line.slice(2)}</li>`;
                      }
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return `<p class="font-semibold text-foreground">${line.slice(2, -2)}</p>`;
                      }
                      if (line.trim() === '') {
                        return '';
                      }
                      return `<p>${line}</p>`;
                    })
                    .join('')
                }}
              />
            </article>

            {/* Share */}
            <div className="border-t border-border/50 mt-12 pt-8">
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">Enjoyed this article?</p>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* CTA */}
            <div className="glass-card rounded-xl p-8 mt-8 text-center">
              <h3 className="font-display text-xl font-bold mb-2">
                Ready to Try These Tools?
              </h3>
              <p className="text-muted-foreground mb-4">
                Explore our curated collection of AI tools and find the perfect fit for your needs.
              </p>
              <Button variant="cta" asChild>
                <Link to="/tools">Browse AI Tools</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {recentPosts.length > 0 && (
        <section className="py-12 bg-card/30 border-t border-border/50">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-2xl font-bold mb-8 text-center">
              More Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {recentPosts.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
