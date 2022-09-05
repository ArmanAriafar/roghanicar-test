//! SSR
import Http from "../services/HttpServices";

export const getServerSideProps = async (context) => {
    const { data } = await Http.get("/fake-products");
    return {
        props: {
            resProducts: data,
        },
    };
};

//* --------------------------------------------------

//! Required
import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Head from "next/head";

//! Icon
import { RiCheckboxFill, RiGridLine, RiOilFill, RiUserAddFill } from "react-icons/ri";

//! Comps
import Slider from "../components/ui/Slider";

//! Comp
const HomePage = ({ resProducts }) => {
    return (
        <>
            <Head>
                <title>🚗 روغنی کار | فروش انواع روغن موتور و فیلتر خودرو 🚗</title>
                <meta
                    name="description"
                    content="روغنی کار : خرید انواع روغن و فیلتر خودرو | روغن موتور | فروش روغن موتور | قیمت روغن موتور | فیلتر هوا | فیلتر روغن | ضد یخ"
                />
            </Head>
            <header className="bgPrimaryLinearGradient sticky top-0 z-[199] mx-auto w-full py-3 lg:relative lg:top-auto">
                <div className="mx-auto flex w-full max-w-5xl items-center justify-center lg:justify-between">
                    <ul className="hidden items-center justify-center lg:flex">
                        <li>
                            <Link href={{ pathname: "محصولات", query: { filterBy: "روغن-موتور" } }}>
                                <a className="border-l-2 border-white/50 pl-7 text-sm font-extrabold text-white underline-offset-2 hover:underline">
                                    روغن موتور
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={{ pathname: "محصولات", query: { filterBy: "فیلتر-هوا" } }}>
                                <a className="border-l-2 border-white/50  px-7 text-sm font-extrabold text-white underline-offset-2 hover:underline">
                                    فیلتر هوا
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/قیمت-روز-روغن-و-فیلتر-خوردو">
                                <a className="border-l-2 border-white/50  px-7 text-sm font-extrabold text-white underline-offset-2 hover:underline">
                                    قیمت روغن موتور
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={{ pathname: "محصولات", query: { filterBy: "فیلتر-روغن" } }}>
                                <a className="border-l-2 border-white/50  px-7 text-sm font-extrabold text-white underline-offset-2 hover:underline">
                                    فیلتر روغن
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={{ pathname: "محصولات", query: { filterBy: "ضد-یخ" } }}>
                                <a className="pr-7 text-sm font-extrabold text-white underline-offset-2 hover:underline">
                                    ضد یخ
                                </a>
                            </Link>
                        </li>
                    </ul>
                    <a
                        href="https://wa.me/0989352870073?text=سلام%20یک%20سوال%20داشتم"
                        className="text-sm font-extrabold text-white underline-offset-2 hover:underline"
                    >
                        <span className="text-xs font-bold">پشتیبانی واتساپ:</span> 0073 287 0935
                    </a>
                </div>
            </header>
            <Navigation />
            <main>
                <article className="mx-auto w-full max-w-md px-4 lg:max-w-5xl">
                    {/* Header Section */}
                    <section className="mt-6 flex w-full flex-col items-center justify-center gap-x-10 gap-y-20 lg:mt-10 lg:flex-row">
                        {/* Image Container */}
                        <section className="mainBannerShadow w-full max-w-md">
                            <Image
                                alt="Banner"
                                src="/static/images/OilBanner.png"
                                width="512"
                                height="364"
                                layout="responsive"
                                className="brightness-110"
                            />
                        </section>
                        {/* Content Container */}
                        <section className="flex w-full flex-col items-center justify-start">
                            <hgroup>
                                <h6 className="hidden">روغنی کار</h6>
                                <h5 className="bgHalfOrange text-5xl font-thin text-orange-500">روغنــــــــی‌کار</h5>
                            </hgroup>
                            <p className="mt-1 text-base font-extrabold text-stone-500">
                                فروش انواع <span className="text-orange-500">روغــن موتور</span> و{" "}
                                <span className="text-orange-500">فیــلتر</span> خودرو
                            </p>
                            {/* button Container */}
                            <div className="mt-14 grid w-full grid-rows-2 items-center justify-items-center gap-x-2 gap-y-2 px-10 lg:grid-cols-2 lg:px-14">
                                <Link href="/محصولات">
                                    <a
                                        className="
                                        bgPrimaryLinearGradient order-2 flex w-full items-center justify-center gap-x-1 rounded-full py-2.5 text-center text-base
                                        font-extrabold text-white shadow-xl shadow-orange-500/50 duration-300 hover:translate-y-1 hover:shadow-none lg:order-1"
                                    >
                                        <RiOilFill className="text-xl" />
                                        مشاهده محصولات
                                    </a>
                                </Link>
                                <Link href="/ورود-به-اکانت">
                                    <a
                                        className="
                                        order-1 flex w-full items-center justify-center gap-x-1 rounded-full py-2.5 text-center text-base font-extrabold text-orange-500
                                        duration-500 hover:bg-orange-200 lg:order-2"
                                    >
                                        <RiUserAddFill className="text-xl" />
                                        ورود به اکانت
                                    </a>
                                </Link>
                            </div>
                        </section>
                    </section>
                    {/* Best Sellers | Oil */}
                    <section className="mt-14 flex w-full flex-col items-start justify-start">
                        <header className="flex w-full items-center justify-center gap-x-2">
                            <h1 className="bgHalfOrangeAlpha flex items-center justify-center gap-x-1 whitespace-nowrap text-base font-black text-orange-500">
                                <RiOilFill className="text-xl" />
                                پرفروشترین‌ها | روغن
                            </h1>
                            <div className="w-full border-t-2 border-dotted border-orange-500" />
                        </header>
                        <section className="flex w-full flex-wrap items-center justify-center gap-x-5">
                            <Slider
                                data={resProducts
                                    .filter(
                                        (i) =>
                                            i.productType === "روغن موتور" ||
                                            i.productType === "روغن ترمز" ||
                                            i.productType === "روغن هیدرولیک" ||
                                            i.productType === "روغن گیربکس"
                                    )
                                    .sort((a, b) => b.sails - a.sails)
                                    .slice(0, 10)}
                            />
                        </section>
                    </section>
                    {/* Best Sellers | Filter */}
                    <section className="mt-8 flex w-full flex-col items-start justify-start">
                        <header className="flex w-full items-center justify-center gap-x-2">
                            <h1 className="bgHalfOrangeAlpha flex items-center justify-center gap-x-1 whitespace-nowrap text-base font-black text-orange-500">
                                <RiGridLine className="text-xl" />
                                پرفروشترین‌ها | فیلتر
                            </h1>
                            <div className="w-full border-t-2 border-dotted border-orange-500" />
                        </header>
                        <section className="flex w-full flex-wrap items-center justify-center gap-x-5">
                            <Slider
                                data={resProducts
                                    .filter(
                                        (i) =>
                                            i.productType === "فیلتر روغن" ||
                                            i.productType === "فیلتر هوا" ||
                                            i.productType === "فیلتر سوخت" ||
                                            i.productType === "فیلتر کابین"
                                    )
                                    .sort((a, b) => b.sails - a.sails)
                                    .slice(0, 10)}
                            />
                        </section>
                    </section>
                    {/* Brands */}
                    <section className="mt-14 flex w-full flex-col items-start justify-start">
                        <header className="flex w-full items-center justify-center gap-x-2">
                            <h1 className="bgHalfOrangeAlpha flex items-center justify-center gap-x-1 whitespace-nowrap text-base font-black text-orange-500">
                                <RiCheckboxFill className="text-xl" />
                                برندها و شرکت‌های سازنده
                            </h1>
                            <div className="w-full border-t-2 border-dotted border-orange-500" />
                        </header>
                        <section className="mx-auto mt-10 grid w-full max-w-xs grid-cols-2 items-center justify-items-center gap-9 lg:max-w-none lg:grid-cols-6">
                            <Link href={{ pathname: "/محصولات", query: { filterBy: "موبیل" } }}>
                                <a className="brandCardShadow flex aspect-square w-36 items-center justify-center rounded-2xl bg-white duration-200">
                                    <Image alt="موبیل" src="/static/images/موبیل.png" width="121" height="50" />
                                </a>
                            </Link>
                            <Link href={{ pathname: "/محصولات", query: { filterBy: "ایرانول" } }}>
                                <a className="brandCardShadow flex aspect-square w-36 items-center justify-center rounded-2xl bg-white duration-200">
                                    <Image alt="ایرانول" src="/static/images/ایرانول.png" width="120" height="62" />
                                </a>
                            </Link>
                            <Link href={{ pathname: "/محصولات", query: { filterBy: "الف" } }}>
                                <a className="brandCardShadow flex aspect-square w-36 items-center justify-center rounded-2xl bg-white duration-200">
                                    <Image alt="الف" src="/static/images/الف.png" width="114" height="58" />
                                </a>
                            </Link>
                            <Link href={{ pathname: "/محصولات", query: { filterBy: "کاسترول" } }}>
                                <a className="brandCardShadow flex aspect-square w-36 items-center justify-center rounded-2xl bg-white duration-200">
                                    <Image alt="کاسترول" src="/static/images/کاسترول.png" width="125" height="42" />
                                </a>
                            </Link>
                            <Link href={{ pathname: "/محصولات", query: { filterBy: "کاسپین" } }}>
                                <a className="brandCardShadow flex aspect-square w-36 items-center justify-center rounded-2xl bg-white duration-200">
                                    <Image alt="کاسپین" src="/static/images/کاسپین.png" width="125" height="73" />
                                </a>
                            </Link>
                            <Link href={{ pathname: "/محصولات", query: { filterBy: "بهران" } }}>
                                <a className="brandCardShadow flex aspect-square w-36 items-center justify-center rounded-2xl bg-white duration-200">
                                    <Image alt="بهران" src="/static/images/بهران.png" width="116" height="116" />
                                </a>
                            </Link>
                            <Link href={{ pathname: "/محصولات", query: { filterBy: "توتال" } }}>
                                <a className="brandCardShadow flex aspect-square w-36 items-center justify-center rounded-2xl bg-white duration-200">
                                    <Image alt="توتال" src="/static/images/توتال.png" width="113" height="113" />
                                </a>
                            </Link>
                            <Link href={{ pathname: "/محصولات", query: { filterBy: "اسپیدی" } }}>
                                <a className="brandCardShadow flex aspect-square w-36 items-center justify-center rounded-2xl bg-white duration-200">
                                    <Image alt="اسپیدی" src="/static/images/اسپیدی.png" width="112" height="47" />
                                </a>
                            </Link>
                            <Link href={{ pathname: "/محصولات", query: { filterBy: "سرکان" } }}>
                                <a className="brandCardShadow flex aspect-square w-36 items-center justify-center rounded-2xl bg-white duration-200">
                                    <Image alt="سرکان" src="/static/images/سرکان.png" width="107" height="107" />
                                </a>
                            </Link>
                            <Link href={{ pathname: "/محصولات", query: { filterBy: "پروفی-کار" } }}>
                                <a className="brandCardShadow flex aspect-square w-36 items-center justify-center rounded-2xl bg-white duration-200">
                                    <Image alt="پروفی-کار" src="/static/images/پروفی-کار.png" width="130" height="68" />
                                </a>
                            </Link>
                            <Link href={{ pathname: "/محصولات", query: { filterBy: "نفت-پارس" } }}>
                                <a className="brandCardShadow flex aspect-square w-36 items-center justify-center rounded-2xl bg-white duration-200">
                                    <Image alt="نفت-پارس" src="/static/images/نفت-پارس.png" width="107" height="103" />
                                </a>
                            </Link>
                            <Link href={{ pathname: "/محصولات", query: { filterBy: "موتوسل" } }}>
                                <a className="brandCardShadow flex aspect-square w-36 items-center justify-center rounded-2xl bg-white duration-200">
                                    <Image alt="موتوسل" src="/static/images/موتوسل.png" width="128" height="54" />
                                </a>
                            </Link>
                        </section>
                    </section>
                </article>
            </main>
        </>
    );
};

export default HomePage;
