"use client"

import { FaApple } from "react-icons/fa";
import NavbarMenu from './navbar-menu';
import SearchItem from '../search-item';

import NavbarMenuIpad from './navbar-menu-ipad';
import NavbarMenuMac from './navbar-menu-mac';
import NavbarMenuIphone from "./navbar-menu-iphone.tsx";
import NavbarMenuSupport from "./navbar-menu-support";
import NavbarWhereToBuy from "./navbar-menu-where";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { menuDataSecond, menuMacFirst } from "../menu-data";




export default function Navbar() {

    const [menu, setIsMenu] = useState(false);

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <header className='w-full bg-black h-auto  overflow-x-clip'>
            {/* Desktop starts here */}
            <nav className="hidden lg:flex items-center justify-between 2xl:max-w-screen-2xl xl:max-w-screen-xl lg:max-w-screen-lg px-20 text-md mx-auto py-4 ">
                <NavbarMenu
                    href="/"
                    className="">
                    <FaApple className='size-6 text-neutral-400' />
                </NavbarMenu>
                <NavbarMenu href=""
                    onMenu
                    navContent={<NavbarMenuMac />}
                    className="text-neutral-200"
                >
                    Mac
                </NavbarMenu>
                <NavbarMenu
                    href=""
                    onMenu
                    navContent={<NavbarMenuIpad />}
                    className="2xl:-left-[673px] xl:-left-[300px] -left-[200px] w-[100vw] mx-auto">
                    iPad
                </NavbarMenu>
                <NavbarMenu
                    href=""
                    onMenu
                    navContent={<NavbarMenuIphone />}
                    className="2xl:-left-[898.5px] xl:-left-[150px] w-[100vw] mx-auto ">
                    iPhone
                </NavbarMenu>
                <NavbarMenu
                    href=""
                    onMenu
                    navContent={<NavbarMenuSupport />}
                    className="2xl:-left-[1123.5px] xl:-left-[80px] w-screen mx-auto ">
                    Support
                </NavbarMenu>
                <NavbarMenu
                    href=""
                    onMenu
                    navContent={<NavbarWhereToBuy />}
                    className="2xl:-left-[1349px] xl:-left-[80px] w-screen mx-auto ">
                    Where to Buy
                </NavbarMenu>
                <SearchItem />
            </nav>

            {/* Mobile Starts here */}
            <nav className="lg:hidden flex items-center justify-between px-6 py-2 w-full">
                <Link href="/" className="">
                    <FaApple className='size-6 text-neutral-200' />
                </Link>
                <div
                    className="relative cursor-pointer hover:text-white text-neutral-200"
                >
                    <div className="flex items-center justify-center gap-x-6">
                        <SearchItem />
                        <Menu
                            onClick={() => setIsMenu(true)} className="text-neutral-200 size-8 cursor-pointer" />
                    </div>

                    {menu && (
                        <div className="absolute bg-neutral-900 h-[100vh] -top-[8px] -left-[570px] w-[102vw]">
                            <div className="flex flex-col items-start justify-center px-8 pt-6 w-full">
                                <div className={`flex items-center  w-full ${showMobileMenu ? "justify-between" : "justify-end"}`}>
                                    <div
                                        onClick={() => setShowMobileMenu(false)}
                                        className={`cursor-pointer ${showMobileMenu ? "block" : "hidden"}`}>
                                        <HiOutlineChevronLeft className="size-6" />
                                    </div>

                                    <div
                                        className="cursor-pointer"
                                        onClick={() => setIsMenu(false)}>
                                        <AiOutlineClose className="size-6" />
                                    </div>
                                </div>

                                <div className="relative pt-16 w-full">
                                    <div className={`pt-16 flex flex-col items-start justify-start gap-y-8 ${showMobileMenu ? "hidden" : "block"}`}>
                                        <div
                                            onClick={() => setShowMobileMenu(true)}
                                            className="text-4xl font-medium hover:text-blue-500 relative">
                                            Mac
                                        </div>
                                        <div className=" text-4xl font-medium">
                                            IPad
                                        </div>
                                        <div className=" text-4xl font-medium">
                                            Iphone
                                        </div>
                                        <div className=" text-4xl font-medium">
                                            Support
                                        </div>
                                        <div className=" text-4xl font-medium">
                                            Where to Buy
                                        </div>
                                    </div>

                                    {showMobileMenu && (
                                        <div className="bg-transparent w-full h-full absolute">
                                            <div className="flex items-start justify-start gap-10 flex-col">
                                                <div className="flex flex-col items-start justify-start gap-3">
                                                    <h1 className="text-md text-neutral-600">
                                                        Explore Mac
                                                    </h1>
                                                    <div className="flex items-start justify-start flex-col gap-4">
                                                        {menuMacFirst.map(({ label, href }) => (
                                                            <Link
                                                                key={label}
                                                                href={href}
                                                                className="text-2xl">
                                                                {label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className="flex flex-col items-start justify-start gap-3">
                                                    <h1 className="text-md text-neutral-600">
                                                        More from Mac
                                                    </h1>
                                                    <div className="flex items-start justify-start flex-col gap-4">
                                                        {menuDataSecond.map(({ label, href }) => (
                                                            <Link
                                                                key={label}
                                                                href={href}
                                                                className="text-md">
                                                                {label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header >
    )
}

