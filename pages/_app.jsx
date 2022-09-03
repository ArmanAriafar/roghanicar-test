import "../styles/globals.css";
import "../styles/fonts.css";
import { useRouter } from "next/router";

//! Comps
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

//! App
const MyApp = ({ Component, pageProps }) => {
    const { pathname } = useRouter();
    return (
        <>
            {pathname !== "/" && <Navigation />}
            <Component {...pageProps} />
            <Footer />
        </>
    );
};

export default MyApp;
