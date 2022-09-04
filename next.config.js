/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: `/${encodeURI("صفحه-اصلی")}`,
                destination: "/",
            },
            {
                source: `/${encodeURI("محصولات")}`,
                destination: "/products",
            },
            {
                source: `/${encodeURI("فاکتور-من")}`,
                destination: "/cart",
            },
            {
                source: `/${encodeURI("قیمت-روز-روغن-و-فیلتر-خوردو")}`,
                destination: "/price-list",
            },
            {
                source: `/${encodeURI("ورود-به-اکانت")}`,
                destination: "/login",
            },
        ];
    },
    images: {
        domains: ["s6.uupload.ir"],
    },
};

module.exports = nextConfig;
