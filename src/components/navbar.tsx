import { FaApple } from "react-icons/fa";
import NavbarMenu from './navbar-menu';
import SearchItem from './search-item';

import NavbarMenuIpad from './navbar-menu-ipad';
import NavbarMenuMac from './navbar-menu-mac';
import NavbarMenuIphone from "./navbar-menu-iphone.tsx";
import NavbarMenuSupport from "./navbar-menu-support";

export default function Navbar() {
    return (
        <header className='w-full bg-black h-auto overflow-x-clip'>
            <nav className="hidden lg:flex items-center justify-center 2xl:max-w-screen-2xl mx-auto py-4 ">
                <NavbarMenu
                    href="/">
                    <FaApple className='size-6' />
                </NavbarMenu>
                <NavbarMenu href=""
                    onMenu
                    navContent={<NavbarMenuMac />}
                    className=""
                >
                    Mac
                </NavbarMenu>
                <NavbarMenu
                    href=""
                    onMenu
                    navContent={<NavbarMenuIpad />}
                    className="-left-[253px] w-[100vw] mx-auto">
                    iPad
                </NavbarMenu>
                <NavbarMenu
                    href=""
                    onMenu
                    navContent={<NavbarMenuIphone />}
                    className="-left-[505.2px] w-screen mx-auto ">
                    iPhone
                </NavbarMenu>
                <NavbarMenu
                    href=""
                    onMenu
                    navContent={<NavbarMenuSupport />}
                    className="-left-[757px] w-screen mx-auto ">
                    Support
                </NavbarMenu>
                <NavbarMenu href="" onMenu>
                    Where to Buy
                </NavbarMenu>
                <SearchItem />
            </nav>
        </header>
    )
}

