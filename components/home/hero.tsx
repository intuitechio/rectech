'use client'

import SearchBar from '@/components/search-bar'

export default function HomeHero() {
  return (
    <section className='space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32'>
      <div className='container flex max-w-[64rem] flex-col items-center gap-4 text-center'>
        <h1 className='font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl'>
          Welcome to{' '}
          <span className='bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
            RecTech
          </span>
        </h1>
        <p className='max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8'>
          Explore our curated directory of recruitment technologies. Find the perfect tools to enhance your
          hiring process.
        </p>
        <SearchBar className='w-full max-w-lg' />
      </div>
    </section>
  )
}
