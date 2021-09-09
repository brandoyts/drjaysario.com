import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-center text-5xl text-blue-200 md:text-7xl lg:text-left tracking-wide">
                About me
            </h1>

            <div className="flex flex-col gap-5 my-20 ">
                <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
                    <Image
                        className="rounded-full object-contain"
                        src="/assets/images/jay.jpg"
                        alt="Picture of the author"
                        width={400}
                        height={400}
                    />
                    <h2 className="text-3xl md:text-5xl xl:text-6x text-white tracking-wide">
                        Dr. Jay Sario
                    </h2>
                </div>

                <div className="text-white mt-10 tracking-wide">
                    <p>
                        Dr. Jay Sario spent a major of his professional life in
                        the fields of business education, marketing and
                        consulting. He finished his Doctor of Business
                        Administration at University of Perpetual Help System
                        Dalta. He finished his Master in Business Administration
                        and Master in Public Administration from Laguna
                        Northwestern College. He obtained his Bachelor of
                        Science in Commerce major in Computer Application at
                        Saint Michael’s College of Laguna.
                    </p>
                    <br />
                    <p>
                        He is currently connected with the graduate school of
                        different academic institutions under various capacities
                        including San Sebastian Recoletos College Manila, AMA
                        Online Education, Pamantasan ng Lungsod ng Muntinlupa,
                        Philippine Christian University, Chiang Kai Shek
                        College, University of Perpetual Help System Dalta, and
                        Cavite State University Imus Campus. He is also an
                        assessor and trainer at the Technical Education and
                        Skills Development Authority (TESDA) under Bookkeeping
                        NC III qualification.
                    </p>
                    <br />
                    <p>
                        He is a former manager at the technical vocational
                        education and training department from University of
                        Perpetual Help System Dalta Molino Campus and former
                        program chair of college of business administration from
                        Metropolitan Medical Center College of Arts Science and
                        Technology.
                    </p>
                    <br />
                    <p>
                        He is active in various organizations such the
                        Philippine Academy of Professionals in Business
                        Education (PAPBE) where he is admitted as a Fellow in
                        Business Education, the Philippine Council of Deans and
                        Educators in Business (PCDEB) where he is a member as
                        well as the Quezon City Assessors Association (QCAA).
                    </p>
                    <br />
                    <p>
                        He is appointed as an editorial board member of the
                        International Journal of Academe and Industry Research
                        and served as research consultant of Embracing the
                        Culture of Research.
                    </p>
                    <br />
                    <p>
                        He is also a Microsoft Technology Associate, Microsoft
                        Office Specialist and certified TESDA Trainer and
                        Assessor.
                    </p>
                    <br />
                    <h3 className="text-2xl">
                        He is one of the co-authors of the following researches
                        both ISI and Scopus Journal and Peer-reviewed Journal:
                    </h3>
                    <ul className="list-disc pt-10 pl-4">
                        <li>
                            (2020) Gratitude, Happiness, and Resilience of
                            Filipino College Students, International Journal of
                            Emotional Education (ISI Journal)
                        </li>
                        <li>
                            (2020) Volunteerism influences students resilience
                            and gratitude, Journal of Psychology in Africa, 30
                            (3) https://doi.org/10.1080/14330237.2020.1777031
                        </li>
                        <li>
                            Women in Engineering Careers: Does Parental Income
                            Affect their Work Values
                        </li>
                        <li>Volunteerism influences on student resilience</li>
                        <li>
                            Gratitude and Validating the Jargon “Trusting the
                            Process” of Millennials’ Career Choices and
                            Gratitude Moderates the Relationship between
                            Happiness and Resilience.
                        </li>
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}
