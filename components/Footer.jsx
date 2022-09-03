//! Required
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

//! Icon
import { RiInstagramFill, RiWhatsappFill, RiLinkedinBoxFill } from "react-icons/ri";

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
            <footer className="mt-10 block w-full bg-stone-900 pb-40 lg:hidden">
                <section className="mx-auto flex w-full max-w-md flex-col items-center justify-start pt-5">
                    <article className={`footerContent ${active === 1 ? "active" : ""}`} onClick={() => setActive(1)}>
                        <p className="select-none text-lg font-extrabold text-stone-400" onClick={() => setActive(1)}>
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
                    {/* با ما در ارتباط باشید */}
                    <article className={`footerContent ${active === 2 ? "active" : ""}`} onClick={() => setActive(2)}>
                        <p className="select-none text-lg font-extrabold text-stone-400" onClick={() => setActive(2)}>
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
                    {/* درباره روغنی کار */}
                    <article className={`footerContent ${active === 3 ? "active" : ""}`} onClick={() => setActive(3)}>
                        <p className="select-none text-lg font-extrabold text-stone-400" onClick={() => setActive(3)}>
                            درباره روغنی کار
                        </p>
                        <p className="mt-7 max-w-[17rem] text-sm font-bold text-stone-400">
                            این یک متن ساختگی است. این یک متن ساختگی است.این یک متن ساختگی است.
                        </p>
                    </article>
                    {/* اعتماد به روغنی کار */}
                    <article className={`footerContent2 ${active === 4 ? "active" : ""}`} onClick={() => setActive(4)}>
                        <p className="select-none text-lg font-extrabold text-stone-400" onClick={() => setActive(4)}>
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
                    <section className="grid w-full max-w-xs grid-cols-2 grid-rows-2 items-center justify-items-center gap-y-2 border-t-2 border-t-stone-700 py-5">
                        <p className="justify-self-start pr-1 text-xl font-thin text-stone-500">روغنی کار</p>
                        <p className="justify-self-end pl-1 text-sm font-bold text-stone-500">
                            آدرس: بازار <span className="font-thin">بزرگ</span> تهران
                        </p>
                        <p className="col-span-2 text-[0.66rem] font-bold text-stone-500">
                            تمامی حقوق این سایت توسط شرکت{" "}
                            <span className="font-extrabold underline">یدک پیشگام اطلس</span> محفوظ است
                        </p>
                    </section>
                </section>
            </footer>
        );
    } else if (screenWidth >= 1024) {
        //* Desktop
        return (
            <footer className="mt-14 hidden w-full bg-stone-200 px-4 lg:block">
                <section className="mx-auto grid w-full max-w-5xl grid-cols-3 grid-rows-[auto_auto_auto] gap-x-10 py-8">
                    {/* دسترسی سریع */}
                    <ul className="col-span-2 flex items-start justify-start gap-x-14 pt-2">
                        <li>
                            <Link href="/محصولات">
                                <a className="text-base font-bold text-stone-500">لیست محصولات</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/فاکتور-من">
                                <a className="text-base font-bold text-stone-500">سفارشات من</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/قوانین-سایت">
                                <a className="text-base font-bold text-stone-500">قوانین سایت</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/تماس-با-ما">
                                <a className="text-base font-bold text-stone-500">تماس با ما</a>
                            </Link>
                        </li>
                    </ul>
                    {/* اعتماد به روغنی کار */}
                    <section className="row-span-3 flex w-fit flex-col items-start justify-start justify-self-end">
                        <p className="text-xl font-extrabold text-stone-500">اعتماد به روغنی کار</p>
                        <p className="mt-3 max-w-[15rem] text-sm font-bold text-stone-400">
                            روغنی‌کار، ایمن‌ترین ارائه دهنده محصولات روغن و فیلتر خودرو شما
                        </p>
                        <section className="mt-5 grid w-fit grid-cols-2 items-center justify-items-center gap-4">
                            <a
                                href="#"
                                className="flex aspect-square w-28 items-center justify-center rounded-xl bg-white shadow-lg shadow-black/25"
                            >
                                <Image alt="ای-نماد" src="/static/images/ای-نماد.png" width="60" height="98" />
                            </a>
                            <a
                                href="#"
                                className="flex aspect-square w-28 items-center justify-center rounded-xl bg-white shadow-lg shadow-black/25"
                            >
                                <Image alt="زرین-پال" src="/static/images/زرین-پال.png" width="62" height="99" />
                            </a>
                            <a
                                href="#"
                                className="flex aspect-square w-28 items-center justify-center rounded-xl bg-white shadow-lg shadow-black/25"
                            >
                                <Image alt="ساماندهی" src="/static/images/ساماندهی.png" width="100" height="100" />
                            </a>
                            <a
                                href="#"
                                className="flex aspect-square w-28 items-center justify-center rounded-xl bg-white shadow-lg shadow-black/25"
                            >
                                <Image
                                    alt="عضو اتحادیه کشور"
                                    src="/static/images/عضو-اتحادیه-کشور.png"
                                    width="93"
                                    height="98"
                                />
                            </a>
                        </section>
                    </section>
                    {/* با ما در ارتباط باشید */}
                    <section className="row-span-2 flex w-full flex-col items-start justify-start">
                        <p className="text-xl font-extrabold text-stone-500">با ما در ارتباط باشید</p>
                        <ul className="mt-4">
                            <li>
                                <a
                                    href="https://instagram.com/roghanicar"
                                    className="mb-3 flex items-center justify-start gap-x-1 text-base font-medium text-stone-400"
                                >
                                    <RiInstagramFill className="text-xl" />
                                    اینستاگرام
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/0989352870073?text=سلام%20یک%20سوال%20داشتم"
                                    className="mb-3 flex items-center justify-start gap-x-1 text-base font-medium text-stone-400"
                                >
                                    <RiWhatsappFill className="text-xl" />
                                    واتساپ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/roghanicar"
                                    className="flex items-center justify-start gap-x-1 text-base font-medium text-stone-400"
                                >
                                    <RiLinkedinBoxFill className="text-xl" />
                                    لینکدین
                                </a>
                            </li>
                        </ul>
                    </section>
                    {/* درباره روغنی کار */}
                    <section className="row-span-2 flex w-fit flex-col items-start justify-start justify-self-center">
                        <p className="text-xl font-extrabold text-stone-500">درباره روغنی کار</p>
                        <p className="mt-4 max-w-[17rem] text-sm font-bold text-stone-400">
                            این یک متن ساختگی است. این یک متن ساختگی است.این یک متن ساختگی است.
                        </p>
                    </section>
                </section>
                <section className="mx-auto flex w-full max-w-5xl items-center justify-between border-t border-t-stone-500 py-5">
                    <p className="text-sm font-bold text-stone-400">
                        تمامی حقوق این سایت توسط شرکت <span className="font-extrabold underline">یدک پیشگام اطلس</span>{" "}
                        محفوظ است
                    </p>
                    <p className="text-2xl font-thin text-stone-300">روغنی کار</p>
                    <p className="text-sm font-bold text-stone-400">
                        آدرس: بازار <span className="font-thin">بزرگ</span> تهران
                    </p>
                </section>
            </footer>
        );
    }
};

export default Footer;
