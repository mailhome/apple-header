import React from 'react'
import { menuDataSecond, menuMacFirst } from '../menu-data'
import Link from 'next/link'

export default function NavbarMenuMac() {
    return (
        <div>
            <div className="flex items-start gap-x-40 justify-start">
                <div className="flex flex-col justify-start items-start gap-8">
                    <h1 className='text-md text-neutral-500'>
                        Explore Mac
                    </h1>
                    <div className="flex flex-col items-start justify-start gap-4 text-neutral-200">
                        {menuMacFirst.map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                className='text-neutral-200 font-medium text-lg hover:text-white/50'>
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-8">
                    <h1 className=' text-md text-neutral-500'>
                        More from Mac
                    </h1>
                    <div className="flex flex-col items-start justify-start gap-4 text-lg">
                        {menuDataSecond.map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                className='text-white font-medium hover:text-white/50'>
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
