import Layout from "../components/Layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
    return (
        <div className="bg-blue-700 relative">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    );
}
