'use client'

import Link from 'next/link'

export function Logo() {
  return (
    <Link href='/' className='flex items-center space-x-2 mr-6'>
      <div className='flex items-center justify-center'>
        <span className='ml-2 text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent'>
          RecTech
        </span>
      </div>
    </Link>
  )
}
