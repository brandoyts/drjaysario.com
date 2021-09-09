import { motion } from "framer-motion";
import Image from "next/image";
import { DeviceMobileIcon, MailIcon } from "@heroicons/react/solid";
import { FaFacebookSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";

export default function Contact() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-center text-5xl text-blue-200 md:text-7xl lg:text-left tracking-wide">
                Contact me
            </h1>

            <div className="flex flex-col gap-20 my-20 justify-center lg:flex-row lg:gap-10">
                <div className="flex flex-col gap-5 justify-center items-center text-white tracking-wide">
                    <Image
                        className="rounded-full object-contain"
                        src="/assets/images/jay.jpg"
                        alt="Picture of the author"
                        width={400}
                        height={400}
                    />
                    <h2 className="text-3xl md:text-4xl ">Jay A. Sario</h2>
                    <p className="text-xl">
                        Professor | Business & Education Consultant
                    </p>
                </div>
                <div>
                    <ul className="text-white tracking-wide text-lg m-auto flex flex-col gap-4 justify-center items-start max-w-xl lg:my-20">
                        <li className="flex items-center justify-center gap-2">
                            <span className="rounded-full bg-white inline-flex flex-col justify-center items-center w-15 h-15 p-1">
                                <DeviceMobileIcon className="h-10 w-10 text-blue-500" />
                            </span>
                            <span>+63915-756-6530</span>
                        </li>

                        <li className="flex items-center justify-center gap-2">
                            <span className="rounded-full bg-white inline-flex flex-col justify-center items-center w-15 h-15 p-1">
                                <MailIcon className="h-10 w-10 text-blue-500" />
                            </span>
                            <a href="mailto: docjaysario@gmail.com">
                                docjaysario@gmail.com
                            </a>
                        </li>

                        <li className="flex items-center justify-center gap-2">
                            <span className="rounded-full bg-white inline-flex flex-col justify-center items-center w-15 h-15 p-1">
                                <FaLinkedin className="h-10 w-10 text-blue-500" />
                            </span>
                            <span>jaysario</span>
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <span className="rounded-full bg-white inline-flex flex-col justify-center items-center w-15 h-15 p-1">
                                <FaFacebookSquare className="h-10 w-10 text-blue-500" />
                            </span>
                            <a
                                href="https://www.facebook.com/docjayasario"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                docjaysario
                            </a>
                        </li>

                        <li className="flex items-center justify-center gap-2">
                            <span className="rounded-full bg-white inline-flex flex-col justify-center items-center w-15 h-15 p-1">
                                <FaWhatsapp className="h-10 w-10 text-blue-500" />
                            </span>
                            <span>docjaysario@gmail.com</span>
                        </li>
                        <li className="flex items-center justify-center gap-2">
                            <span className="rounded-full bg-white inline-flex flex-col justify-center items-center w-15 h-15 p-1">
                                <AiFillWechat className="h-10 w-10 text-blue-500" />
                            </span>
                            <span>DocJhaySario</span>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}
