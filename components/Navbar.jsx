import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
} from "react-icons/fa";

const menu = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Publications", path: "/publications" },
    { title: "Services", path: "/services" },
    { title: "Contact me", path: "/contact" },
];

export default function Navbar() {
    const [active, setActive] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <nav className="flex items-center flex-wrap px-2 py-8 max-w-screen-2xl m-auto">
            <button
                className=" inline-flex p-2 text-white rounded lg:hidden text-blue mr-auto hover:text-blue-200 outline-none"
                onClick={handleClick}
            >
                <svg
                    className="w-10 h-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
            <div
                className={`${
                    active ? "" : "hidden"
                }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
            >
                <div className="lg:inline-flex lg:flex-row md:mr-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto ">
                    {menu.map((item, index) => {
                        return (
                            <Link key={index} href={item.path}>
                                <a
                                    className={`lg:inline-flex lg:w-auto w-full px-3 py-2 rounded hover:translate-x-2 items-center justify-center hover:text-blue-200 font-semibold tracking-wide transform hover:-translate-y-0.5 transition duration-500 ease-in-out ${
                                        router.pathname === item.path
                                            ? "text-blue-200"
                                            : "text-white"
                                    }`}
                                >
                                    {item.title}
                                </a>
                            </Link>
                        );
                    })}
                </div>

                <div className="lg:inline-flex lg:flex-row md:ml-auto w-32 lg:items-center items-start flex justify-between lg:h-auto text-white text-2xl px-3 py-2">
                    <a
                        href="https://www.facebook.com/docjayasario"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookSquare className="cursor-pointer hover:text-blue-200 transform hover:-translate-y-0.5 transition duration-500 ease-in-out" />
                    </a>
                    <a
                        href="https://www.instagram.com/jhaysario/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagramSquare className="cursor-pointer hover:text-blue-200 transform hover:-translate-y-0.5 transition duration-500 ease-in-out" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/jayasario-08201978/?fbclid=IwAR3C-lgOmnugxg1isHbfCWLHQLAoMjj6V5am8mInl99PmdFScm8xIfpv7lA"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="cursor-pointer hover:text-blue-200 transform hover:-translate-y-0.5 transition duration-500 ease-in-out" />
                    </a>
                </div>
            </div>
        </nav>
    );
}
