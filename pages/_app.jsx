import Layout from '../components/Layout/Layout'
//import '../style.css'

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}

export default MyApp