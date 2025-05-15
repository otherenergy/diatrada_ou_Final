import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
        };
    }

    render() {
        return ( <Html lang = "en">
            <Head>
            <meta httpEquiv = "X-UA-Compatible" content = "IE=edge" />
            <meta name = "keywords" content = "Diatrada OU" />
            <meta name = "description" content = "Diatrada OU" />
            <meta name = "author" content = "" />
            <link rel = "shortcut icon" href = "/img/favicon.ico" sizes="48x48" />
            {/* <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" /> */}
            <link rel = "canonical" href="https://www.diatradaou.com/diatrada"/>
            <link rel = "stylesheet" href = "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" />
            <link rel = "stylesheet" href = "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" />
            <link rel = "stylesheet" href = "https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap" />
            <link rel = "stylesheet" href = "https://fonts.googleapis.com/css2?family=Akronim&display=swap" />
            <link rel = "stylesheet" href = "https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&display=swap" />
            <link rel = "stylesheet" href = "https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&display=swap" />
            <link rel = "stylesheet" href = "https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;200;300;400;500;600;700;800;900&display=swap" />
            <link rel = "stylesheet" href = "https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap" />
            {/* <style>{`body:before {content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: #ffffff; z-index: 9999;}`}</style> */}
            </Head>
            <body >
            <Main />
            <NextScript />
            </body> 
            </Html>
        );
    }
}

export default MyDocument;