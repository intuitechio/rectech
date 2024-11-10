import ToolsList from "@/components/tools/tools-list"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

export default function ToolsPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">
            Recruitment Tools
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover and compare top recruitment technologies
          </p>
        </div>
      </div>
      
      <Suspense fallback={<Skeleton className="h-[400px]" />}>
        <ToolsList />
      </Suspense>
    </div>
  );
}