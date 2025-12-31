import { Layout } from "@/components/Layout";
import { BlogCard } from "@/components/BlogCard";
import { posts } from "@/data/posts";

export default function BlogPage() {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              AI Tools <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Guides, tutorials, and comparisons to help you discover and master 
              the best AI tools for your workflow.
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <div 
                key={post.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
