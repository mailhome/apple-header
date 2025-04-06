import Link from 'next/link'
import { menuIpadSecond, menuIphoneFirst } from '../menu-data'

export default function NavbarMenuIphone() {
    return (
        <div>
            <div className="flex items-start gap-x-40 justify-start ">
                <div className="flex flex-col justify-start items-start gap-8">
                    <h1 className='text-md text-neutral-500'>
                        Explore iPhone
                    </h1>
                    <div className="flex flex-col items-start justify-start gap-4">
                        {menuIphoneFirst.map(({ label, href }) => (
                            <Link
                                key={label}
                                href={href}
                                className='text-white font-medium text-lg hover:text-white/50'>
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-8">
                    <h1 className=' text-md text-neutral-500'>
                        More from iPhone
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
