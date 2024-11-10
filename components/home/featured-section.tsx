import FeaturedTools from "@/components/tools/featured-tools";

export default function FeaturedSection() {
  return (
    <section className="container space-y-6 py-8 dark:bg-transparent md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Featured Tools
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Top-rated recruitment solutions trusted by professionals
        </p>
      </div>
      <div className="px-4 md:px-6">
        <FeaturedTools />
      </div>
    </section>
  );
}