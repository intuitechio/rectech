"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, ExternalLink } from "lucide-react";
import Link from "next/link";

const tools = [
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
  {
    name: "InterviewPro",
    description: "AI-powered video interviewing platform",
    category: "Interview Software",
    rating: 4.5,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?q=80&w=300&h=200&fit=crop",
  },
  {
    name: "Recruit Analytics",
    description: "Advanced recruitment metrics and reporting",
    category: "HR Analytics",
    rating: 4.4,
    reviews: 72,
    image: "https://images.unsplash.com/photo-1664575601786-b00156752b61?q=80&w=300&h=200&fit=crop",
  },
  {
    name: "JobBoard Hub",
    description: "Multi-channel job posting platform",
    category: "Job Boards",
    rating: 4.6,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1664575600796-cd75084a5fd6?q=80&w=300&h=200&fit=crop",
  },
];

const categories = [
  "All Categories",
  "ATS Systems",
  "Sourcing Tools",
  "Assessment Platforms",
  "Interview Software",
  "HR Analytics",
  "Job Boards",
];

const sortOptions = [
  { value: "rating", label: "Highest Rated" },
  { value: "reviews", label: "Most Reviews" },
  { value: "name", label: "Name (A-Z)" },
];

export default function ToolsList() {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "All Categories");
  const [sortBy, setSortBy] = useState("rating");

  useEffect(() => {
    const search = searchParams.get("search");
    const category = searchParams.get("category");
    if (search) setSearchQuery(search);
    if (category) setSelectedCategory(category);
  }, [searchParams]);

  const filteredAndSortedTools = useMemo(() => {
    let filtered = [...tools];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (tool) =>
          tool.name.toLowerCase().includes(query) ||
          tool.description.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (selectedCategory !== "All Categories") {
      filtered = filtered.filter((tool) => tool.category === selectedCategory);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "reviews":
          return b.reviews - a.reviews;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  return (
    <>
      <div className="flex flex-col gap-4 py-8 md:flex-row">
        <Input
          placeholder="Search tools..."
          className="md:w-[300px]"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Select
          value={selectedCategory}
          onValueChange={setSelectedCategory}
        >
          <SelectTrigger className="md:w-[200px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
          value={sortBy}
          onValueChange={setSortBy}
        >
          <SelectTrigger className="md:w-[200px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filteredAndSortedTools.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">
            No tools found matching your criteria.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAndSortedTools.map((tool) => (
            <Card key={tool.name} className="overflow-hidden">
              <Link href={`/tools/${tool.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={tool.image}
                    alt={tool.name}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl font-medium">
                    {tool.name}
                  </CardTitle>
                  <Button variant="ghost" size="icon">
                    <ExternalLink className="h-4 w-4" />
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
              </Link>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}