import dynamic from 'next/dynamic';

const NewsletterForm = dynamic(() => import('./newsletter-form'), {
  ssr: false,
});

export default function NewsletterSection() {
  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Stay Updated
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Subscribe to get updates about new tools and recruitment insights
        </p>
        <NewsletterForm />
      </div>
    </section>
  );
}