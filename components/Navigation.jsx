//! Required
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

//! Icon
import { FaHome } from "react-icons/fa";
import {
    RiOilFill,
    RiUserAddLine,
    RiUserAddFill,
    RiFileList3Fill,
    RiPriceTag2Line,
    RiPriceTag2Fill,
    RiFileList3Line,
    RiOilLine,
} from "react-icons/ri";
import { TiHomeOutline } from "react-icons/ti";

//! Comp
const Navigation = () => {
    const { pathname } = useRouter();
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        const screenWidth = window.screen.width;
        setScreenWidth(screenWidth);
    }, []);

    if (screenWidth <= 1023) {
        //* Mobile
        return (
            <nav className="fixed bottom-0 right-0 z-[200] inline-block w-full border-t-4 border-orange-500 bg-white pt-2 lg:hidden">
                <div className="mx-auto grid w-full max-w-md grid-cols-4 items-center justify-items-center pb-2">
                    <Link href="/">
                        <a
                            className={`flex flex-col items-center justify-center font-black ${
                                pathname === "/" ? "font-black text-orange-500" : "font-bold text-stone-500/90"
                            }`}
                        >
                            {pathname === "/" && <FaHome className="text-3xl" />}
                            خانــــــه
                        </a>
                    </Link>
                    <Link href="/محصولات">
                        <a
                            className={`flex flex-col items-center justify-center font-black ${
                                pathname === "/products" ? "font-black text-orange-500" : "font-bold text-stone-500/90"
                            }`}
                        >
                            {pathname === "/products" && <RiOilFill className="text-3xl" />}
                            محصولات
                        </a>
                    </Link>
                    <Link href="/فاکتور-من">
                        <a
                            className={`flex flex-col items-center justify-center font-black ${
                                pathname === "/cart" ? "font-black text-orange-500" : "font-bold text-stone-500/90"
                            }`}
                        >
                            {pathname === "/cart" && <RiFileList3Fill className="text-3xl" />}
                            فاکتور من
                        </a>
                    </Link>
                    <Link href="/ورود-به-اکانت">
                        <a
                            className={`flex flex-col items-center justify-center font-black ${
                                pathname === "/login" ? "font-black text-orange-500" : "font-bold text-stone-500/90"
                            }`}
                        >
                            {pathname === "/login" && <RiUserAddFill className="text-3xl" />}
                            ورود
                        </a>
                    </Link>
                </div>
                <Link href="/قیمت-روز-روغن-و-فیلتر-خوردو">
                    <a
                        className={`mx-auto w-full bg-stone-100 pt-1.5 pb-4 text-center font-bold text-stone-600/80 ${
                            pathname === "/price-list" ? "hidden" : "block"
                        }`}
                    >
                        <span>
                            قیمت روز <span className="font-extrabold text-orange-500">روغــــــن</span> و{" "}
                            <span className="font-extrabold text-orange-500">فــــــیلتر</span> خودرو
                        </span>
                    </a>
                </Link>
            </nav>
        );
    } else if (screenWidth >= 1024) {
        //* Desktop
        return (
            <nav
                className="
                sticky top-0 z-[200] mx-auto hidden w-full max-w-5xl rounded-b-3xl border-b-4 border-orange-500 bg-white/75 px-8 
                py-4 shadow-lg shadow-black/20 backdrop-blur-md backdrop-saturate-200 lg:block"
            >
                <section className="flex w-full items-center justify-between">
                    <ul className="grid grid-cols-[auto_auto_auto_auto] items-center justify-items-center gap-x-20">
                        <li>
                            <Link href="/">
                                <a
                                    className={`flex items-center justify-center gap-x-1 leading-4 ${
                                        pathname === "/" ? "font-black text-orange-500" : "font-bold text-stone-500/90"
                                    }`}
                                >
                                    {pathname === "/" ? (
                                        <FaHome className="text-2xl" />
                                    ) : (
                                        <TiHomeOutline className="text-2xl" />
                                    )}
                                    خانــــــه
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/محصولات">
                                <a
                                    className={`flex items-center justify-center gap-x-2 leading-4 ${
                                        pathname === "/products"
                                            ? "font-black text-orange-500"
                                            : "font-bold text-stone-500/90"
                                    }`}
                                >
                                    {pathname === "/products" ? (
                                        <RiOilFill className="text-2xl" />
                                    ) : (
                                        <RiOilLine className="text-2xl" />
                                    )}
                                    محصولات
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/فاکتور-من">
                                <a
                                    className={`flex items-center justify-center gap-x-2 leading-4 ${
                                        pathname === "/cart"
                                            ? "font-black text-orange-500"
                                            : "font-bold text-stone-500/90"
                                    }`}
                                >
                                    {pathname === "/cart" ? (
                                        <RiFileList3Fill className="text-2xl" />
                                    ) : (
                                        <RiFileList3Line className="text-2xl" />
                                    )}
                                    فاکتور من
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/قیمت-روز-روغن-و-فیلتر-خوردو">
                                <a
                                    className={`flex items-center justify-center gap-x-2 leading-4 ${
                                        pathname === "/price-list"
                                            ? "font-black text-orange-500"
                                            : "font-bold text-stone-500/90"
                                    }`}
                                >
                                    {pathname === "/price-list" ? (
                                        <RiPriceTag2Fill className="text-2xl" />
                                    ) : (
                                        <RiPriceTag2Line className="text-2xl" />
                                    )}

                                    <span className="relative top-2 flex flex-col items-center justify-center">
                                        قـــــــــــیمت روز
                                        <span className="text-xs opacity-60">روغن و فیلتر خودرو</span>
                                    </span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <Link href="/ورود-به-اکانت">
                        <a
                            className={`flex items-center justify-center gap-x-1 leading-4 ${
                                pathname === "/login" ? "font-black text-orange-500" : "font-bold text-stone-500/90"
                            }`}
                        >
                            {pathname === "/login" ? (
                                <RiUserAddFill className="text-2xl" />
                            ) : (
                                <RiUserAddLine className="text-2xl" />
                            )}
                            ورود
                        </a>
                    </Link>
                </section>
            </nav>
        );
    }
};

export default Navigation;
