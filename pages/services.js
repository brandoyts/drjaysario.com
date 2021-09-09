import { motion } from "framer-motion";
import {
    PencilIcon,
    ChatIcon,
    NewspaperIcon,
    DotsHorizontalIcon,
} from "@heroicons/react/solid";

export default function Services() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-center text-5xl text-blue-200 md:text-7xl lg:text-left tracking-wide">
                Services
            </h1>

            <div className="my-20">
                <ul className="flex flex-wrap items-center justify-center gap-8 m-auto max-w-5xl text-white  tracking-wide text-xl">
                    <li className="flex flex-col items-center justify-center gap-8">
                        <span className="rounded-full bg-white inline-flex flex-col justify-center items-center w-40 h-40">
                            <ChatIcon className="h-20 w-20 text-blue-500" />
                        </span>
                        <span>Consulting</span>
                    </li>

                    <li className="flex flex-col items-center justify-center gap-8">
                        <span className="rounded-full bg-white inline-flex flex-col justify-center items-center w-40 h-40">
                            <PencilIcon className="h-20 w-20 text-blue-500" />
                        </span>
                        <span>Academic Writing</span>
                    </li>

                    <li className="flex flex-col items-center justify-center gap-8">
                        <span className="rounded-full bg-white inline-flex flex-col justify-center items-center w-40 h-40">
                            <NewspaperIcon className="h-20 w-20 text-blue-500" />
                        </span>
                        <span>Content Writing</span>
                    </li>

                    <li className="flex flex-col items-center justify-center gap-8">
                        <span className="rounded-full bg-white inline-flex flex-col justify-center items-center w-40 h-40">
                            <DotsHorizontalIcon className="h-20 w-20 text-blue-500" />
                        </span>
                        <span>Others</span>
                    </li>
                </ul>
                <div className="mt-40 mb-30  p-9 m-auto max-w-2xl">
                    <p className="text-center w-50 racking-wide">
                        <span className="text-5xl text-white">Why me?</span>
                        <span className="text-2xl text-white">
                            &nbsp; On-time delivery, Excellent Consulting and
                            Writing Services, 100% Confidentiality, Best Price
                            Guarantee
                        </span>
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
