import Link from 'next/link'
import { menuWhereToBuy } from '../menu-data'

export default function NavbarWhereToBuy() {
    return (
        <div>
            <div className="flex items-start justify-start ">
                <div className="flex flex-col justify-start items-start gap-8">
                    <h1 className='text-md text-neutral-500'>
                        Explore
                    </h1>
                    <div className="flex flex-col items-start justify-start gap-4">
                        {menuWhereToBuy.map(({ label, href }) => (
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
