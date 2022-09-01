import "../styles/globals.css";
import "../styles/fonts.css";
import { useRouter } from "next/router";
import Navigation from "../components/Navigation";

const MyApp = ({ Component, pageProps }) => {
    const { pathname } = useRouter();
    return (
        <>
            {pathname !== "/" && <Navigation />}
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;
