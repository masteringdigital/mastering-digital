import { useState } from 'react';
import { trpc } from '@/lib/trpc';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Category color mapping
const categoryColors: Record<string, { bg: string; text: string; badge: string }> = {
  'home-services': { bg: '#10B981', text: 'text-green-600', badge: 'bg-green-100' },
  'e-commerce': { bg: '#3B82F6', text: 'text-blue-600', badge: 'bg-blue-100' },
  'multifamily': { bg: '#7C3AED', text: 'text-purple-600', badge: 'bg-purple-100' },
  'seo': { bg: '#14B8A6', text: 'text-teal-600', badge: 'bg-teal-100' },
  'paid-ads': { bg: '#F97316', text: 'text-orange-600', badge: 'bg-orange-100' },
  'ai-automation': { bg: '#6366F1', text: 'text-indigo-600', badge: 'bg-indigo-100' },
};

const categoryLabels: Record<string, string> = {
  'home-services': 'Home Services',
  'e-commerce': 'E-commerce',
  'multifamily': 'Multifamily',
  'seo': 'SEO',
  'paid-ads': 'Paid Ads',
  'ai-automation': 'AI & Automation',
};

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  // Fetch categories
  const { data: categories, isLoading: categoriesLoading } = trpc.blog.categories.useQuery();

  // Fetch blog posts
  const { data: allPosts, isLoading: postsLoading } = trpc.blog.all.useQuery();

  // Filter posts by category if selected
  const filteredPosts = selectedCategory
    ? allPosts?.filter(post => {
        const category = categories?.find(cat => cat.id === post.categoryId);
        return category?.slug === selectedCategory;
      })
    : allPosts;

  // Pagination
  const totalPages = Math.ceil((filteredPosts?.length || 0) / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const displayedPosts = filteredPosts?.slice(startIndex, startIndex + postsPerPage);

  const isLoading = categoriesLoading || postsLoading;

  // Calculate read time (rough estimate: 200 words per minute)
  const getReadTime = (content: string) => {
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / 200);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-brand-blue via-brand-blue to-[#2A4A6F]">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-brand-orange font-semibold text-sm uppercase tracking-wider mb-3">
              Insights & Resources
            </p>
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Marketing Insights for Growing Businesses
            </h1>
            <p className="text-xl text-white/90">
              Strategies, tips, and trends for Home Services, E-commerce, and Multifamily marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Bar */}
      <section className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="container py-6">
          <div className="flex flex-wrap gap-3 items-center">
            <Button
              onClick={() => {
                setSelectedCategory(null);
                setCurrentPage(1);
              }}
              variant={selectedCategory === null ? 'default' : 'outline'}
              className={selectedCategory === null ? 'bg-brand-orange hover:bg-orange-600' : ''}
            >
              All
            </Button>
            {['home-services', 'e-commerce', 'multifamily', 'seo', 'paid-ads', 'ai-automation'].map(
              slug => (
                <Button
                  key={slug}
                  onClick={() => {
                    setSelectedCategory(slug);
                    setCurrentPage(1);
                  }}
                  variant={selectedCategory === slug ? 'default' : 'outline'}
                  className={selectedCategory === slug ? 'bg-brand-orange hover:bg-orange-600' : ''}
                >
                  {categoryLabels[slug]}
                </Button>
              )
            )}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-brand-orange" />
            </div>
          ) : displayedPosts && displayedPosts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {displayedPosts.map(post => {
                  const category = categories?.find(cat => cat.id === post.categoryId);
                  const categorySlug = category?.slug || 'seo';
                  const colors = categoryColors[categorySlug] || categoryColors['seo'];
                  const readTime = getReadTime(post.content);

                  return (
                    <Link key={post.id} href={`/blog/${post.slug}`}>
                      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                        {/* Featured Image */}
                        {post.featuredImageUrl && (
                          <div className="relative h-48 overflow-hidden bg-gray-200">
                            <img
                              src={post.featuredImageUrl}
                              alt={post.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}

                        <CardContent className="p-6">
                          {/* Category Tag */}
                          <div className="mb-3">
                            <span
                              className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
                              style={{ backgroundColor: colors.bg }}
                            >
                              {categoryLabels[categorySlug]}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="font-bold text-lg text-gray-900 mb-3 line-clamp-2 hover:text-brand-orange transition-colors">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                            {post.excerpt || post.content.substring(0, 150) + '...'}
                          </p>

                          {/* Footer */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                            <span className="text-xs text-gray-500">{readTime} min read</span>
                            <div className="flex items-center text-brand-orange font-semibold text-sm hover:gap-2 transition-all">
                              Read More
                              <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2">
                  <Button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    variant="outline"
                  >
                    Previous
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <Button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      variant={currentPage === page ? 'default' : 'outline'}
                      className={currentPage === page ? 'bg-brand-orange hover:bg-orange-600' : ''}
                    >
                      {page}
                    </Button>
                  ))}
                  <Button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    variant="outline"
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-600 text-lg">No blog posts found in this category.</p>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}
