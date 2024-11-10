'use client'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { Menu, Search, UserCircle2 } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { SubmitToolDialog } from './submit-tool-dialog'
import { ThemeToggle } from './theme-toggle'
import { Logo } from './ui/logo'

const routes = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/tools',
    label: 'Tools',
  },
  {
    href: '/categories',
    label: 'Categories',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant='ghost'
                className='mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden'
              >
                <Menu className='h-6 w-6' />
                <span className='sr-only'>Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='pl-1 pr-0'>
              <div className='px-7'>
                <Logo />
              </div>
              <nav className='flex flex-col gap-4 px-2 pt-4'>
                {routes.map((route) => (
                  <a
                    key={route.href}
                    href={route.href}
                    className={cn(
                      'px-4 py-2 text-sm font-medium hover:text-primary',
                      pathname === route.href ? 'text-foreground' : 'text-muted-foreground',
                    )}
                  >
                    {route.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Logo />
          <nav className='hidden gap-6 lg:flex'>
            {routes.map((route) => (
              <a
                key={route.href}
                href={route.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  pathname === route.href ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                {route.label}
              </a>
            ))}
          </nav>
          <div className='flex flex-1 items-center justify-end space-x-4'>
            <div className='w-full flex-1 lg:w-auto lg:flex-none'>
              <Button variant='ghost' size='icon' className='mr-2'>
                <Search className='h-5 w-5' />
                <span className='sr-only'>Search</span>
              </Button>
            </div>
            <SubmitToolDialog />
            <ThemeToggle />
            <Button variant='ghost' size='icon'>
              <UserCircle2 className='h-5 w-5' />
              <span className='sr-only'>Toggle user menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
