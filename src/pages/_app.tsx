import { AppProps } from 'next/app'
import Head from 'next/head'

 import GlobalStyles from 'styles/global'

function App ({ Component, pageProps}: AppProps) {
    return (
    <>


    <Head>
        <title>My-Map </title>
        <link rel="shortcut icon" href="public/favicon.ico" />   
        <link rel="shortcut icon" href="public/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
       <meta name="theme-color" content="#06092B"/>

        <meta
         name="description"
         content= "A simple project to show my favoritsd " />
        
    </Head>

        
        <GlobalStyles />
    <Component {...pageProps} />
    

    </>
    )    
}



export default App