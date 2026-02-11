import { useParams, Link } from 'wouter';
import { trpc } from '@/lib/trpc';
import { Button } from '@/components/ui/button';
import { Loader2, ArrowLeft } from 'lucide-react';
import { Streamdown } from 'streamdown';

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;

  // Fetch blog post
  const { data: post, isLoading, error } = trpc.blog.bySlug.useQuery({ slug });

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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Featured Image */}
      {post.featuredImageUrl && (
        <div className="w-full h-96 overflow-hidden">
          <img
            src={post.featuredImageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <article className="py-16 md:py-24">
        <div className="container max-w-3xl">
          {/* Back Button */}
          <Link href="/blog">
            <Button variant="outline" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-gray-600">
              <span>By {post.author}</span>
              {post.publishedAt && (
                <>
                  <span>•</span>
                  <time dateTime={new Date(post.publishedAt).toISOString()}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                </>
              )}
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            <Streamdown>{post.content}</Streamdown>
          </div>

          {/* Call to Action */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="bg-brand-blue/10 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Grow Your Remodeling Business?
              </h3>
              <p className="text-gray-700 mb-6">
                Let's discuss how our proven marketing strategies can help you generate more leads and grow revenue.
              </p>
              <Link href="https://api.leadconnectorhq.com/widget/bookings/strategy-session-mike" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90">
                  Book a Strategy Session
                </Button>
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">More from the Blog</h3>
            <Link href="/blog">
              <Button variant="outline">
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
