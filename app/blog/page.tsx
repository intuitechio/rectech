import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "Top 10 ATS Systems for Enterprise Companies",
    excerpt: "Discover the leading Applicant Tracking Systems that are transforming enterprise recruitment...",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?q=80&w=300&h=200&fit=crop",
  },
  {
    title: "The Future of AI in Recruitment",
    excerpt: "Exploring how artificial intelligence is revolutionizing the recruitment process...",
    date: "2024-01-12",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1664575600796-cd75084a5fd6?q=80&w=300&h=200&fit=crop",
  },
  {
    title: "Building an Effective Tech Recruitment Stack",
    excerpt: "A comprehensive guide to selecting and integrating the right tools for technical recruitment...",
    date: "2024-01-10",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1664575601786-b00156752b61?q=80&w=300&h=200&fit=crop",
  },
];

export default function BlogPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Latest insights and guides on recruitment technology
          </p>
        </div>
      </div>
      
      <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.title} className="overflow-hidden">
            <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2 text-xl">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-sm text-muted-foreground mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}