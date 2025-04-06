import React from 'react'
import { menuIpadFirst, menuIpadSecond } from '../menu-data'
import Link from 'next/link'

export default function NavbarMenuIpad() {
    return (
        <div>
            <div className="flex items-start gap-x-40 justify-start ">
                <div className="flex flex-col justify-start items-start gap-8">
                    <h1 className='text-md text-neutral-500'>
                        Explore iPad
                    </h1>
                    <div className="flex flex-col items-start justify-start gap-4">
                        {menuIpadFirst.map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                className='text-white font-normal text-lg hover:text-white/50'>
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-8">
                    <h1 className=' text-md text-neutral-500'>
                        More from iPad
                    </h1>
                    <div className="flex flex-col items-start justify-start gap-4">
                        {menuIpadSecond.map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                className='text-white font-medium text-lg hover:text-white/50'>
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
