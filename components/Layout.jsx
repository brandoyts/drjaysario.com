import Navbar from "./Navbar";
import Footer from "./Footer";
import { AnimatePresence } from "framer-motion";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />

            <AnimatePresence>
                <div className="max-w-screen-2xl m-auto px-4 py-10">
                    <main>{children}</main>
                    <Footer />
                </div>
            </AnimatePresence>
        </>
    );
}
