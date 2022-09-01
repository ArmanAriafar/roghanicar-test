//! Required
import Link from "next/link";
import Navigation from "../components/Navigation";

const HomePage = () => {
    return (
        <>
            <header className="bgPrimaryLinearGradient sticky top-0 mx-auto w-full py-3 lg:relative lg:top-auto">
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
            <>HomePage</>
            <div className="pt-96" />
            <div className="pt-96" />
            <div className="pt-96" />
        </>
    );
};

export default HomePage;
