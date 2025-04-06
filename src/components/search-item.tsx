import { SearchIcon } from 'lucide-react'
import React from 'react'

export default function SearchItem() {
    return (
        <div className="cursor-pointer">
            <SearchIcon className='text-neutral-400 hover:text-neutral-300 size-5 lg:size-6 ' />
        </div>
    )
}
