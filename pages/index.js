import { motion } from "framer-motion";

export default function Index() {
    return (
        <div className="flex flex-col -mt-20 h-screen justify-center items-center text-center text-white">
            <motion.div
                initial={{ opacity: 0, x: "-50px" }}
                animate={{
                    opacity: 1,
                    x: 0,
                    boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
                }}
            >
                <h1 className="text-4xl -mt-20 md:text-7xl lg:text-8xl">
                    Dr. Jay A. Sario
                </h1>
                <p className="mt-5 font-light text-2xl md:text-3xl lg:text-4xl">
                    Professor | Business & Education Consultant
                </p>
            </motion.div>
        </div>
    );
}
