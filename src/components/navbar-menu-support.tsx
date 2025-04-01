

import Link from 'next/link'
import { menuSupportFirst, menuSupportSecond, menuSupportThird } from './menu-data'
import { twMerge } from "tailwind-merge"


export default function NavbarMenuSupport() {

    return (
        <div>
            <div className="flex items-start gap-x-40 justify-start ">
                <div className="flex flex-col justify-start items-start gap-8">
                    <h1 className='text-xl text-neutral-500'>
                        Explore Support
                    </h1>
                    <div className="flex flex-col items-start justify-start gap-8">
                        {menuSupportFirst.map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                className={twMerge("text-white font-medium text-2xl hover:text-white/50",)}>
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>


                <div className="flex flex-col justify-start items-start gap-8">
                    <h1 className=' text-xl text-neutral-500'>
                        Get Help
                    </h1>
                    <div className="flex flex-col items-start justify-start gap-4">
                        {menuSupportSecond.map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                className='text-white font-medium text-xl hover:text-white/50'>
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col justify-start items-start gap-8">
                    <h1 className=' text-xl text-neutral-500'>
                        Helpful Topics
                    </h1>
                    <div className="flex flex-col items-start justify-start gap-4">
                        {menuSupportThird.map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                className={`text-white font-medium text-xl hover:text-white/50`}>
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
