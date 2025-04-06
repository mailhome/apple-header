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
                    className="relative cursor-pointer"
                    onHoverStart={() => setIsHover(true)}
                    onHoverEnd={() => setIsHover(false)}
                    style={{ color: "white" }}>
                    <div
                        className="text-neutral-400 z-50 hover:text-white text-sm">
                        {children}
                    </div>


                    {isNavContent && (
                        <div className={`absolute mx-auto bg-neutral-900 h-auto 2xl:-left-[448px] xl:left-[80px] -left-[240px] w-[110vw] xl:w-[100vw] top-[36px] pb-10 text-neutal-100 text-lg ${className}`}>
                            <div className="bg-transparent w-full h-10 -top-40 -mt-10" />
                            <div className="2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-md py-5 mx-auto text-white">
                                {navContent}
                            </div>
                        </div>
                    )}
                </motion.div>
            ) : (
                <Link href={href} className='text-neutral-100 dark:text-neutral-400 hover:text-neutral-200 text-sm '>
                    {children}
                </Link>
            )}
        </div>
    )
}
