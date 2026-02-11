import { useState } from 'react';
import { trpc } from '@/lib/trpc';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, ChevronRight } from 'lucide-react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Fetch categories
  const { data: categories, isLoading: categoriesLoading } = trpc.blog.categories.useQuery();

  // Fetch blog posts
  const { data: allPosts, isLoading: postsLoading } = trpc.blog.all.useQuery();

  // Filter posts by category if selected
  const displayedPosts = selectedCategory
    ? allPosts?.filter(post => {
        const category = categories?.find(cat => cat.id === post.categoryId);
        return category?.slug === selectedCategory;
      })
    : allPosts;

  const isLoading = categoriesLoading || postsLoading;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-brand-blue via-brand-blue to-[#2A4A6F]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-bold text-4xl md:text-5xl text-white mb-4">
              Marketing Insights for Remodeling Companies
            </h1>
            <p className="text-xl text-white/90">
              Discover proven strategies to grow your kitchen and bathroom remodeling business with data-driven marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Categories */}
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === null
                        ? 'bg-brand-blue text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All Posts
                  </button>
                  {categories?.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.slug)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.slug
                          ? 'bg-brand-blue text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content - Blog Posts */}
            <div className="lg:col-span-3">
              {isLoading ? (
                <div className="flex items-center justify-center py-12">
                  <Loader2 className="w-8 h-8 animate-spin text-brand-blue" />
                </div>
              ) : displayedPosts && displayedPosts.length > 0 ? (
                <div className="space-y-6">
                  {displayedPosts.map(post => {
                    const category = categories?.find(cat => cat.id === post.categoryId);
                    return (
                      <Link key={post.id} href={`/blog/${post.slug}`}>
                        <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                          {post.featuredImageUrl && (
                            <div className="w-full h-48 overflow-hidden rounded-t-lg">
                              <img
                                src={post.featuredImageUrl}
                                alt={post.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform"
                              />
                            </div>
                          )}
                          <CardHeader>
                            {category && (
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">
                                  {category.name}
                                </span>
                              </div>
                            )}
                            <CardTitle className="text-2xl text-gray-900">{post.title}</CardTitle>
                            <CardDescription className="text-base">
                              {post.excerpt}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">
                                By {post.author} • {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Recently'}
                              </span>
                              <ChevronRight className="w-5 h-5 text-brand-blue" />
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-gray-600 text-lg">No blog posts found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
