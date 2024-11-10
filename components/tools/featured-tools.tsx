"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const featuredTools = [
  {
    name: "RecruitFlow",
    description: "Modern ATS with AI-powered candidate screening",
    category: "ATS Systems",
    rating: 4.8,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=300&h=200&fit=crop",
  },
  {
    name: "TalentSource Pro",
    description: "Advanced sourcing platform with LinkedIn integration",
    category: "Sourcing Tools",
    rating: 4.6,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1664575599736-c5197c684128?q=80&w=300&h=200&fit=crop",
  },
  {
    name: "CodeAssess",
    description: "Technical assessment platform for developers",
    category: "Assessment Platforms",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1664575600397-88e8b7258d7e?q=80&w=300&h=200&fit=crop",
  },
];

export default function FeaturedTools() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {featuredTools.map((tool) => (
        <Card key={tool.name} className="overflow-hidden">
          <div className="aspect-video w-full relative">
            <Image
              src={tool.image}
              alt={tool.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-medium">
              {tool.name}
            </CardTitle>
            <Button variant="ghost" size="icon" asChild>
              <Link href={`/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground pb-4">
              {tool.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-900/20 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-300">
                {tool.category}
              </span>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-current text-yellow-400" />
                <span className="text-sm font-medium">{tool.rating}</span>
                <span className="text-sm text-muted-foreground">
                  ({tool.reviews})
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="col-span-full text-center mt-8">
        <Button asChild>
          <Link href="/tools">View All Tools</Link>
        </Button>
      </div>
    </div>
  );
}