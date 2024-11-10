import { Zap, Users, BarChart3 } from "lucide-react";

export default function FeaturesGrid() {
  return (
    <section className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Features
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Everything you need to find and evaluate recruitment tools
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Zap className="h-12 w-12 text-blue-600" />
            <div className="space-y-2">
              <h3 className="font-bold">Comprehensive Directory</h3>
              <p className="text-sm text-muted-foreground">
                Browse through hundreds of recruitment tools and platforms.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <Users className="h-12 w-12 text-blue-600" />
            <div className="space-y-2">
              <h3 className="font-bold">User Reviews</h3>
              <p className="text-sm text-muted-foreground">
                Read authentic feedback from recruitment professionals.
              </p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border bg-background p-2">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <BarChart3 className="h-12 w-12 text-blue-600" />
            <div className="space-y-2">
              <h3 className="font-bold">Detailed Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Compare tools with comprehensive analytics and insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}