//! Required
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

//! Icon
import { FaHome } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io";
import {
    RiOilLine,
    RiOilFill,
    RiUserAddLine,
    RiUserAddFill,
    RiFileList3Line,
    RiFileList3Fill,
    RiHonourLine,
    RiHonourFill,
} from "react-icons/ri";

//! Comp
const Navigation = () => {
    const [screenWidth, setScreenWidth] = useState(0);
    const { pathname } = useRouter();
    useEffect(() => {
        const screenWidth = window.screen.width;
        setScreenWidth(screenWidth);
    }, [screenWidth]);

    if (screenWidth >= 1024) {
        return (
            <nav className="sticky top-0 mx-auto w-full max-w-5xl px-4">
                <div className="flex w-full items-center justify-between rounded-b-xl border-b-4 border-orange-500 bg-white px-10 py-4 shadow-2xl shadow-black/30">
                    <ul className="flex items-center justify-center gap-x-20">
                        <li>
                            <Link href="/">
                                <a
                                    className={`flex items-center justify-center gap-x-1 text-lg ${
                                        pathname === "/" ? "font-thin text-orange-500" : "font-bold text-stone-500"
                                    }`}
                                >
                                    {pathname === "/" ? (
                                        <FaHome className="text-2xl" />
                                    ) : (
                                        <IoHomeOutline className="text-2xl" />
                                    )}
                                    خانــــــه
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/products">
                                <a
                                    className={`flex items-center justify-center gap-x-1 text-lg ${
                                        pathname === "/products"
                                            ? "font-thin text-orange-500"
                                            : "font-bold text-stone-500"
                                    }`}
                                >
                                    {pathname === "/products" ? (
                                        <FaHome className="text-2xl" />
                                    ) : (
                                        <IoHomeOutline className="text-2xl" />
                                    )}
                                    محصولات
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/cart">
                                <a
                                    className={`flex items-center justify-center gap-x-1 text-lg ${
                                        pathname === "/cart" ? "font-thin text-orange-500" : "font-bold text-stone-500"
                                    }`}
                                >
                                    {pathname === "/cart" ? (
                                        <FaHome className="text-2xl" />
                                    ) : (
                                        <IoHomeOutline className="text-2xl" />
                                    )}
                                    فاکتور من
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/price-list">
                                <a
                                    className={`flex flex-col items-center justify-center gap-x-1 text-lg ${
                                        pathname === "/price-list"
                                            ? "font-thin text-orange-500"
                                            : "font-bold text-stone-500"
                                    }`}
                                >
                                    {pathname === "/price-list" ? (
                                        <FaHome className="text-2xl" />
                                    ) : (
                                        <IoHomeOutline className="text-2xl" />
                                    )}
                                    قــــــــــــیمت روز
                                    <span className="text-sm">روغن و فیلتر خودرو</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <Link href="/login">
                        <a
                            className={`flex items-center justify-center gap-x-1 text-lg ${
                                pathname === "/login" ? "font-thin text-orange-500" : "font-bold text-stone-500"
                            }`}
                        >
                            {pathname === "/login" ? (
                                <FaHome className="text-2xl" />
                            ) : (
                                <IoHomeOutline className="text-2xl" />
                            )}
                            خانــــــه
                        </a>
                    </Link>
                </div>
            </nav>
        );
    } else if (screenWidth <= 1023) {
        return (
            <nav className="fixed left-0 bottom-0 z-[200] w-full border-t-2 border-orange-500 bg-white">
                <div className="mx-auto grid w-full max-w-md grid-cols-4 items-center justify-items-center">
                    <Link href="#">
                        <a>خانــــــه</a>
                    </Link>
                    <Link href="#">
                        <a>محصولات</a>
                    </Link>
                    <Link href="#">
                        <a>فاکتور من</a>
                    </Link>
                    <Link href="#">
                        <a>ورود</a>
                    </Link>
                </div>
            </nav>
        );
    }
};

export default Navigation;
