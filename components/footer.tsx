import { Logo } from './ui/logo'

export default function Footer() {
  return (
    <footer className='border-t bg-background'>
      <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-8 py-8 md:py-12'>
          <div className='flex flex-col gap-6 md:flex-row md:justify-between'>
            <div className='space-y-4'>
              <Logo />
              <p className='text-sm text-muted-foreground max-w-xs'>
                Discover and compare the best recruitment tools and technologies to enhance your hiring
                process.
              </p>
            </div>
            <div className='grid grid-cols-2 gap-8 sm:grid-cols-3'>
              <div className='space-y-3'>
                <h4 className='text-sm font-medium'>Platform</h4>
                <ul className='space-y-2 text-sm'>
                  <li>
                    <a href='/tools' className='text-muted-foreground hover:text-foreground'>
                      Tools
                    </a>
                  </li>
                  <li>
                    <a href='/categories' className='text-muted-foreground hover:text-foreground'>
                      Categories
                    </a>
                  </li>
                  <li>
                    <a href='/blog' className='text-muted-foreground hover:text-foreground'>
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className='space-y-3'>
                <h4 className='text-sm font-medium'>Company</h4>
                <ul className='space-y-2 text-sm'>
                  <li>
                    <a href='/about' className='text-muted-foreground hover:text-foreground'>
                      About
                    </a>
                  </li>
                  <li>
                    <a href='/contact' className='text-muted-foreground hover:text-foreground'>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className='space-y-3'>
                <h4 className='text-sm font-medium'>Legal</h4>
                <ul className='space-y-2 text-sm'>
                  <li>
                    <a href='/privacy' className='text-muted-foreground hover:text-foreground'>
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href='/terms' className='text-muted-foreground hover:text-foreground'>
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
            <p className='text-sm text-muted-foreground'>
              © {new Date().getFullYear()}{' '}
              <a
                href='https://intuitech.io'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-foreground'
              >
                Intuitech
              </a>
              . All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
