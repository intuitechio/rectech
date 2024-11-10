import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Code2, Database, HeadsetIcon, LineChart, Users2 } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "ATS Systems",
    description: "Applicant Tracking Systems for managing candidates",
    icon: Database,
    count: 45,
  },
  {
    title: "Sourcing Tools",
    description: "Tools for finding and attracting candidates",
    icon: Users2,
    count: 38,
  },
  {
    title: "Assessment Platforms",
    description: "Technical and skill assessment solutions",
    icon: Code2,
    count: 32,
  },
  {
    title: "Interview Software",
    description: "Video interviewing and scheduling tools",
    icon: HeadsetIcon,
    count: 28,
  },
  {
    title: "HR Analytics",
    description: "Recruitment analytics and reporting tools",
    icon: LineChart,
    count: 25,
  },
  {
    title: "Job Boards",
    description: "Job posting and advertising platforms",
    icon: Briefcase,
    count: 41,
  },
];

export default function CategoriesPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Categories
          </h1>
          <p className="text-xl text-muted-foreground">
            Browse recruitment tools by category
          </p>
        </div>
      </div>
      <div className="grid gap-6 pt-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card key={category.title} className="hover:bg-muted/50">
            <Link href={`/tools?category=${category.title.toLowerCase()}`}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">
                  {category.title}
                </CardTitle>
                <category.icon className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground pb-2">
                  {category.description}
                </p>
                <p className="text-sm font-medium">
                  {category.count} tools
                </p>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}