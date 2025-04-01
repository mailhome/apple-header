"use client"

import Link from 'next/link';
import React, { useState } from 'react'
import { motion } from 'framer-motion';


type Props = {
    children: React.ReactNode;
    navContent?: React.ReactElement;
    href: string;
    onMenu?: boolean;
    className?: string;
}
export default function NavbarMenu({
    children,
    navContent,
    href,
    onMenu,
    className

}: Props) {

    const [isHover, setIsHover] = useState(false);

    const isNavContent = navContent && isHover


    return (
        <div className='relative w-full'>
            {onMenu ? (
                <motion.div
                    className="relative  cursor-pointer"
                    onHoverStart={() => setIsHover(true)}
                    onHoverEnd={() => setIsHover(false)}>
                    <div
                        className="text-neutral-400 z-50 hover:text-white">
                        {children}
                    </div>


                    {isNavContent && (
                        <div className={`absolute mx-auto bg-neutral-900 h-auto -ml-[508px] w-[100vw]  top-[36px] pb-10 text-white ${className}`}>
                            <div className="bg-transparent h-12 w-full -top-4" />
                            <div className="2xl:max-w-screen-2xl py-5 mx-auto text-white ">
                                {navContent}
                            </div>
                        </div>
                    )}
                </motion.div>
            ) : (
                <Link href={href} className='text-neutral-400 hover:text-neutral-200 text-sm '>
                    {children}
                </Link>
            )}
        </div>
    )
}
