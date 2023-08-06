'use client'

import Link from 'next/link'
import { useSearchParam, useSearchParams } from 'next/navigation'

export default function NavbarItem( {title , param }) {

    const searchParams = useSearchParams();
    const genre = searchParams.get('genre');
    
  return (
    <div className='px-4'>
        <Link className={`hover:text-amber-600 font-semibold p-2 ${
            genre && genre === param && 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'
            }`} href={`/?genre=${param}`} >
            {title}
        </Link>
    </div>
  )
}
