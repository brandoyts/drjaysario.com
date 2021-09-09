import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const books = [
    {
        imgSrc: "/assets/images/book2.jpg",
        alt: "book",
        width: 400,
        height: 300,
    },
    {
        imgSrc: "/assets/images/book1.jpg",
        alt: "book",
        width: 400,
        height: 300,
    },
    {
        imgSrc: "/assets/images/book3.jpg",
        alt: "book",
        width: 400,
        height: 300,
    },
];

const pdfs = [
    {
        imgSrc: "/assets/images/Validating.jpg",
        name: "Validating",
        alt: "pdf",
        width: 300,
        height: 300,
    },
    {
        imgSrc: "/assets/images/Gratitude.jpg",
        name: "Gratitude",
        alt: "pdf",
        width: 300,
        height: 300,
    },
    {
        imgSrc: "/assets/images/Volunteerism.jpg",
        name: "Volunteerism",
        alt: "pdf",
        width: 300,
        height: 300,
    },
];

export default function Publications() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-center text-5xl text-blue-200 md:text-7xl lg:text-left tracking-wide ">
                Publications
            </h1>

            <div className="my-20 flex flex-col gap-10">
                <ul className="flex items-center justify-center flex-wrap gap-5">
                    {books.map((book) => (
                        <li key={book.imgSrc}>
                            <Zoom>
                                <Image
                                    src={book.imgSrc}
                                    alt={book.alt}
                                    width={book.width}
                                    height={book.height}
                                />
                            </Zoom>
                        </li>
                    ))}
                </ul>
                <ul className="flex items-center justify-center flex-wrap gap-5">
                    {pdfs.map((pdf) => (
                        <li
                            key={pdf.imgSrc}
                            className="flex flex-col items-center gap-2"
                        >
                            <Zoom>
                                <Image
                                    src={pdf.imgSrc}
                                    alt={pdf.alt}
                                    width={pdf.width}
                                    height={pdf.height}
                                />
                            </Zoom>
                            <Link href={`/api/getPdf?fileName=${pdf.name}`}>
                                <a
                                    className="p-2 w-full text-center text-lg bg-red-700 text-white"
                                    target="_blank"
                                >
                                    Download PDF
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}
