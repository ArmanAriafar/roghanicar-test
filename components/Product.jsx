//! Required
import Image from "next/image";
import Link from "next/link";

//! Comp
const Product = ({ name, image, price }) => {
    return (
        <Link href="#">
            <a>
                <article
                    className="
                    grid h-[8.75rem] w-full max-w-[17.5rem] grid-cols-[122px_1fr] grid-rows-[2fr_1fr] items-center justify-items-center 
                    gap-x-3 rounded-2xl bg-white p-2 shadow-xl shadow-black/20 duration-500 hover:shadow-none"
                >
                    <section className="relative row-span-2 aspect-square w-full overflow-hidden rounded-xl bg-stone-200 p-2">
                        <Image
                            alt={name}
                            src={image}
                            width="100%"
                            height="100%"
                            layout="responsive"
                            objectFit="contain"
                        />
                    </section>
                    <div className="h-full w-full overflow-hidden">
                        <h1 className="text-right text-sm font-bold leading-5 text-stone-600">{name}</h1>
                    </div>
                    <h6 className="self-end justify-self-end text-sm font-bold text-stone-500">
                        <span className="text-xs font-extrabold">تومان </span>
                        {price.toLocaleString()}
                    </h6>
                </article>
            </a>
        </Link>
    );
};

export default Product;
