import { useParams } from 'wouter';
import { Link } from 'wouter';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import { Streamdown } from 'streamdown';

// Category color mapping
const categoryColors: Record<string, { bg: string; text: string }> = {
  'home-services': { bg: '#10B981', text: 'text-green-600' },
  'e-commerce': { bg: '#3B82F6', text: 'text-blue-600' },
  'multifamily': { bg: '#7C3AED', text: 'text-purple-600' },
  'seo': { bg: '#14B8A6', text: 'text-teal-600' },
  'paid-ads': { bg: '#F97316', text: 'text-orange-600' },
  'ai-automation': { bg: '#6366F1', text: 'text-indigo-600' },
};

const categoryLabels: Record<string, string> = {
  'home-services': 'Home Services',
  'e-commerce': 'E-commerce',
  'multifamily': 'Multifamily',
  'seo': 'SEO',
  'paid-ads': 'Paid Ads',
  'ai-automation': 'AI & Automation',
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;

  // Fetch blog post
  const { data: post, isLoading, error } = trpc.blog.bySlug.useQuery({ slug });

  // Fetch categories for breadcrumb and related posts
  const { data: categories } = trpc.blog.categories.useQuery();

  // Fetch all posts for related posts section
  const { data: allPosts } = trpc.blog.all.useQuery();

  // Get related posts (same category, exclude current)
  const relatedPosts = allPosts
    ?.filter(p => p.categoryId === post?.categoryId && p.id !== post?.id)
    .slice(0, 3);

  const getReadTime = (content: string) => {
    const wordCount = content.split(/\s+/).length;
    return Math.ceil(wordCount / 200);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-brand-blue" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container py-16">
          <Link href="/blog">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
          <div className="text-center py-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/blog">
              <Button>Return to Blog</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const category = categories?.find(cat => cat.id === post.categoryId);
  const categorySlug = category?.slug || 'seo';
  const colors = categoryColors[categorySlug] || categoryColors['seo'];
  const readTime = getReadTime(post.content);

  return (
    <div className="min-h-screen bg-background">
      {/* Featured Image */}
      {post.featuredImageUrl && (
        <div className="w-full h-96 md:h-[500px] overflow-hidden bg-gray-200">
          <img
            src={post.featuredImageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <article className="py-12 md:py-20">
        <div className="container max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
            <Link href="/">
              <a className="hover:text-brand-blue transition-colors">Home</a>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog">
              <a className="hover:text-brand-blue transition-colors">Blog</a>
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-semibold">{post.title}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-12">
            {/* Category Tag */}
            <div className="mb-4">
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: colors.bg }}
              >
                {categoryLabels[categorySlug]}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm md:text-base">
              <span className="font-semibold text-gray-900">By {post.author}</span>
              <span>•</span>
              {post.publishedAt && (
                <>
                  <time dateTime={new Date(post.publishedAt).toISOString()}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <span>•</span>
                </>
              )}
              <span>{readTime} min read</span>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none mb-16">
            <Streamdown>{post.content}</Streamdown>
          </div>

          {/* End CTA Box */}
          <div className="bg-gradient-to-r from-brand-blue to-[#2A4A6F] rounded-lg p-8 md:p-12 text-white mb-16">
            <h3 className="text-2xl font-bold mb-3">Ready to Grow Your Business?</h3>
            <p className="text-white/90 mb-6">
              Get a free marketing audit to see exactly where you stand and what opportunities you're missing.
            </p>
            <Link href="/free-marketing-audit">
              <Button className="bg-white text-brand-blue hover:bg-white/90 font-semibold">
                Get Your Free Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Author Box */}
          <div className="border-t border-b border-gray-200 py-8 mb-16">
            <div className="flex gap-6">
              <div className="flex-1">
                <h4 className="font-bold text-lg text-gray-900 mb-2">About the Author</h4>
                <p className="text-gray-600 mb-4">
                  {post.author} is a growth marketing strategist with expertise in driving results for home services, e-commerce, and multifamily businesses. With a data-driven approach and deep industry knowledge, they help companies scale their marketing efforts and achieve sustainable growth.
                </p>
                <Link href="/about">
                  <a className="text-brand-orange font-semibold hover:text-orange-600 transition-colors">
                    Learn more about our team →
                  </a>
                </Link>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts && relatedPosts.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => {
                  const relatedCategory = categories?.find(cat => cat.id === relatedPost.categoryId);
                  const relatedCategorySlug = relatedCategory?.slug || 'seo';
                  const relatedColors = categoryColors[relatedCategorySlug] || categoryColors['seo'];
                  const relatedReadTime = getReadTime(relatedPost.content);

                  return (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                      <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                        {relatedPost.featuredImageUrl && (
                          <div className="relative h-40 overflow-hidden bg-gray-200">
                            <img
                              src={relatedPost.featuredImageUrl}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <CardContent className="p-4">
                          <div className="mb-2">
                            <span
                              className="inline-block px-2 py-1 rounded text-xs font-semibold text-white"
                              style={{ backgroundColor: relatedColors.bg }}
                            >
                              {categoryLabels[relatedCategorySlug]}
                            </span>
                          </div>
                          <h4 className="font-bold text-sm text-gray-900 mb-2 line-clamp-2 hover:text-brand-orange transition-colors">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-gray-500">{relatedReadTime} min read</p>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </article>
    </div>
  );
}
