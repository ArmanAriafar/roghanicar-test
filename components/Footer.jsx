//! Required
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

//! Icon
import { RiAddLine } from "react-icons/ri";

const Footer = () => {
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
        const screenWidth = window.screen.width;
        setScreenWidth(screenWidth);
    }, []);

    const [active, setActive] = useState(0);

    if (screenWidth <= 1023) {
        //* Mobile
        return (
            <footer className="mt-10 w-full bg-stone-900 pb-40">
                <section className="flex w-full max-w-md flex-col items-center justify-start pt-5">
                    <article className={`footerContent ${active === 1 ? "active" : ""}`} onClick={() => setActive(1)}>
                        <p className="text-lg font-extrabold text-stone-400" onClick={() => setActive(1)}>
                            دسترسی سریع
                        </p>
                        <ul className="mt-6 leading-8">
                            <li>
                                <Link href="/محصولات">
                                    <a className="text-base font-bold text-stone-400">لیست محصولات</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/فاکتور-من">
                                    <a className="text-base font-bold text-stone-400">سفارشات من</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/قوانین-سایت">
                                    <a className="text-base font-bold text-stone-400">قوانین سایت</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/تماس-با-ما">
                                    <a className="text-base font-bold text-stone-400">تماس با ما</a>
                                </Link>
                            </li>
                        </ul>
                    </article>
                    <article className={`footerContent ${active === 2 ? "active" : ""}`} onClick={() => setActive(2)}>
                        <p className="text-lg font-extrabold text-stone-400" onClick={() => setActive(2)}>
                            با ما در ارتباط باشید
                        </p>
                        <ul className="mt-6 leading-8">
                            <li>
                                <a
                                    href="https://instagram.com/roghanicar"
                                    className="text-base font-bold text-stone-400"
                                >
                                    اینستاگرام
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/0989352870073?text=سلام%20یک%20سوال%20داشتم"
                                    className="text-base font-bold text-stone-400"
                                >
                                    واتساپ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/roghanicar"
                                    className="text-base font-bold text-stone-400"
                                >
                                    لینکدین
                                </a>
                            </li>
                        </ul>
                    </article>
                    <article className={`footerContent ${active === 3 ? "active" : ""}`} onClick={() => setActive(3)}>
                        <p className="text-lg font-extrabold text-stone-400" onClick={() => setActive(3)}>
                            درباره روغنی کار
                        </p>
                        <p className="mt-7 max-w-[17rem] text-sm font-bold text-stone-400">
                            این یک متن ساختگی است. این یک متن ساختگی است.این یک متن ساختگی است.
                        </p>
                    </article>
                    <article className={`footerContent2 ${active === 4 ? "active" : ""}`} onClick={() => setActive(4)}>
                        <p className="text-lg font-extrabold text-stone-400" onClick={() => setActive(4)}>
                            اعتماد به روغنی کار
                        </p>
                        <p className="mt-7 max-w-[14rem] text-sm font-bold text-stone-400">
                            روغنی‌کار، ایمن‌ترین ارائه دهنده محصولات روغن و فیلتر خودرو شما
                        </p>
                        <section className="mx-auto mt-5 grid w-fit grid-cols-2 items-center justify-items-center gap-4">
                            <a
                                href="#"
                                className="flex aspect-square w-28 items-center justify-center rounded-xl bg-white shadow-lg shadow-black/50"
                            >
                                <Image alt="ای-نماد" src="/static/images/ای-نماد.png" width="60" height="98" />
                            </a>
                            <a
                                href="#"
                                className="flex aspect-square w-28 items-center justify-center rounded-xl bg-white shadow-lg shadow-black/50"
                            >
                                <Image alt="زرین-پال" src="/static/images/زرین-پال.png" width="62" height="99" />
                            </a>
                            <a
                                href="#"
                                className="flex aspect-square w-28 items-center justify-center rounded-xl bg-white shadow-lg shadow-black/50"
                            >
                                <Image alt="ساماندهی" src="/static/images/ساماندهی.png" width="100" height="100" />
                            </a>
                            <a
                                href="#"
                                className="flex aspect-square w-28 items-center justify-center rounded-xl bg-white shadow-lg shadow-black/50"
                            >
                                <Image
                                    alt="عضو اتحادیه کشور"
                                    src="/static/images/عضو-اتحادیه-کشور.png"
                                    width="93"
                                    height="98"
                                />
                            </a>
                        </section>
                    </article>
                </section>
            </footer>
        );
    } else if (screenWidth >= 1024) {
        //* Desktop
        return (
            <footer>
                <></>
            </footer>
        );
    }
};

export default Footer;
