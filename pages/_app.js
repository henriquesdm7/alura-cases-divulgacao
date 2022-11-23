import Head from "next/head";
import Script from "next/script";
import GlobalStyle from "../src/theme/GlobalStyle";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/* <!-- Google tag (gtag.js) --> */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet" />
            </Head>
            <Script
                async
                src="https://www.googletagmanager.com/gtag/js?id=G-5E16SY4PFV"
                onLoad={() => {
                    console.log('a')
                    window.dataLayer = window.dataLayer || [];
                    function gtag() { dataLayer.push(arguments); }
                    gtag('js', new Date());
                    gtag('config', 'G-5E16SY4PFV');
                }}
            />
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}