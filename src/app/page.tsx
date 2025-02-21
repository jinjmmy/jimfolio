// import Link from "next/link";
// import Experience from "@/components/Experience";

// export default function Home() {
//   return (
//     <div className="bg-white justify-between items-center text-green-600 min-h-screen flex flex-col">
//       {/* Navigation Links */}
//       <div className="justify-between items-center w-full px-8 py-4 flex">
//         <Link href="/about">
//           <span className="cursor-pointer hover:underline">[about me]</span>
//         </Link>
//         <Link href="/experience">
//           <span className="cursor-pointer hover:underline">[experience]</span>
//         </Link>
//         <Link href="/projects">
//           <span className="cursor-pointer hover:underline">[projects]</span>
//         </Link>
//       </div>

//       {/* Main Content */}
//       <div className="text-center text-green-700">
//         <p className="text-3xl mb-4">hello, welcome</p>
//         <div className="md:flex-row items-center flex flex-col">
//           <p className="text-7xl font-bold mb-8 md:mb-0">
//             jimmy jin
//             <br />
//             <span className="text-4xl font-bold mb-8 md:mb-0">
//               software + data
//             </span>
//           </p>

//           <img
//             alt="Yours Truly"
//             src="https://placehold.co/600x400"
//             className="inline-block w-96 h-auto md:ml-12"
//           />
//         </div>
//       </div>

//       {/* Contact Link */}
//       <div className="w-full justify-end px-8 py-4 flex">
//         <Link href="/contact">
//           <span className="cursor-pointer hover:underline">[get in touch]</span>
//         </Link>
//       </div>
//     </div>
//   );
// }

"use client";
import { useRef } from "react";
import styles from "./page.module.css";
import ScrollButton from "@/components/ScrollButton";
import ProfilePicture from "@/components/ProfilePicture";
import Experience from "@/components/Experience";
import Carousel from "@/components/Carousel";
import Skills from "@/components/Skills";
import Project from "@/components/Project";
import {
  FaCss3,
  FaEnvelope,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinkedin,
  FaPython,
  FaReact,
  FaDocker,
  FaFlask,
} from "react-icons/fa";
import {
  SiAmazon,
  SiFlask,
  SiMysql,
  SiKubernetes,
  SiScikitlearn,
} from "react-icons/si";
import { LuSoup } from "react-icons/lu";
import { TbTransform } from "react-icons/tb";

const Home = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const expRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <main className={styles.main}>
      <div className={styles.hstack}>
        {/*overall container*/}
        <div className={styles.sidebar}>
          <div className={styles.vstack}>
            <ScrollButton scrollRef={aboutRef}>about me</ScrollButton>
            <ScrollButton scrollRef={expRef}>my experience</ScrollButton>
            <ScrollButton scrollRef={skillsRef}>my skills</ScrollButton>
            <ScrollButton scrollRef={projRef}>my projects</ScrollButton>
            <ScrollButton scrollRef={contactRef}>contact me</ScrollButton>
            <a className={styles.link} href="/JimmyJinResume2025.pdf">
              resume
            </a>
          </div>
        </div>
        <div className={`${styles.content}`}>
          <div className={styles.aboutme} ref={aboutRef}>
            <ProfilePicture />
            <h1 className="text-4xl font-bold">
              hi, my name is <span>jimmy</span>
            </h1>

            <p className="text-3xl font-bold">
              i am a recent computer science graduate from{" "}
              <a href="https://cs.ics.uci.edu/" target="_blank" rel="noopener">
                uci
              </a>
              .
            </p>
            <p className="text-2xl font-bold">
              i am interested in full-stack development, cloud computing, data
              engineering, and data science.
            </p>
          </div>
          <div ref={expRef}>
            <h2 className="text-3xl font-bold">experience</h2>
            <Carousel
              items={[
                <Experience
                  name="Panasonic Avionics Corporation"
                  role="Data Science Intern"
                  image="/images/aim.png"
                  link="https://www.panasonic.aero/"
                >
                  <ul>
                    <li>
                      Engineered an end-to-end dashboard with AWS Athena and
                      QuickSight, cutting query time by 8 hours weekly and
                      automating data aggregation for key metrics and KPIs.
                    </li>
                    <br></br>
                    <li>
                      Developed a Flutter UI and implemented a movie
                      recommendation engine with PySpark using ARL algorithms,
                      increasing the likelihood of in flight movie selection by
                      233%.
                    </li>
                    <br></br>
                    <li>
                      Consulted with other teams to create new POCs that involve
                      the adoption of AI and ML throughout the company.
                    </li>
                  </ul>
                </Experience>,
                <Experience
                  name="UCI Mobley Lab"
                  role="Undergraduate Researcher"
                  image="/images/oisc.jpeg"
                  link="https://mobleylab.org/"
                >
                  <ul>
                    <li>
                      Speeding up Thompson Sampling warmup cycles runtime by
                      implementing multiprocessing and GPU based python
                      libraries, enhancing scalability for large chemical
                      datasets. (in progress: all work being excecuted in UCI's
                      HPC3 cluster.)
                    </li>
                    <br></br>
                    <li>
                      Rearchitected individual Jupyter notebooks into Python
                      packages, improving code structure, maintainability, and
                      efficiency.
                    </li>
                    <br></br>
                    <li>
                      Utilized SLURM job scheduling with sbatch to ensure
                      dependency-driven script execution and resource
                      optimization.
                    </li>
                  </ul>
                </Experience>,
                <Experience
                  name="Irvine Chinese Immersion Academy"
                  role="Technology Support Technician"
                  image="/images/neweic.png"
                  link="https://www.iciacademy.org/"
                >
                  <ul>
                    <li>
                      Troubleshooted different electronic devices to provide
                      students and teachers necessary equipment.
                    </li>
                    <br></br>
                    <li>
                      Facilitated communication between internal staff and
                      external technicians to decrease broken device downtime.
                    </li>
                    <br></br>
                    <li>
                      Maintained account permissions through Google admin and
                      Office 365.
                    </li>
                  </ul>
                </Experience>,

                <Experience
                  name="UCI Campus Recreation"
                  role="Sales Associate"
                  image="/images/datamine.png"
                  link="https://www.campusrec.uci.edu/"
                >
                  <ul>
                    <li>
                      Assisted patrons with memberships, classes, and rentals.
                    </li>
                    <br></br>
                    <li>
                      Learned to use company software (FUSION) to change and
                      update patron information and taught new hires about
                      company procedures and policies.
                    </li>
                    <br></br>
                    <li>
                      Maintained strong communication with my managers and other
                      teams within the recreation center.
                    </li>
                  </ul>
                </Experience>,
                ,
              ]}
            />
          </div>
          <div ref={skillsRef}>
            <Skills />
          </div>
          <div ref={projRef}>
            <h2 className="text-3xl font-bold">Projects</h2>
            <Carousel
              items={[
                <Project
                  name="J-Movie"
                  image="/images/jakarta.png"
                  desc="mock imdb, my first experience with full stack"
                  skills={[
                    { name: "Java", icon: <FaJava /> },
                    {
                      name: "JavaScript",
                      icon: <FaJs />,
                    },
                    {
                      name: "Docker",
                      icon: <FaDocker />,
                    },
                    {
                      name: "Kubernetes",
                      icon: <SiKubernetes />,
                    },
                    {
                      name: "MySQL",
                      icon: <SiMysql />,
                    },
                    { name: "AWS", icon: <SiAmazon /> },
                  ]}
                />,
                <Project
                  name="Google-ish"
                  image="/images/crossed.png"
                  github=""
                  desc="Google mock engine"
                  skills={[
                    { name: "Python", icon: <FaPython /> },
                    {
                      name: "Beautiful Soup",
                      icon: <LuSoup />,
                    },
                    {
                      name: "json",
                      icon: <TbTransform />,
                    },
                    {
                      name: "pandas",
                      icon: "🐼",
                    },
                    {
                      name: "numpy",
                      icon: "🧮",
                    },
                    {
                      name: "flask",
                      icon: <FaFlask />,
                    },
                  ]}
                />,

                <Project
                  name="Diabetes Classifier"
                  image="/images/emotional.png"
                  desc="first exposure to ML, predicted a patient's need to be readmitted"
                  skills={[
                    { name: "numpy", icon: "🧮" },
                    {
                      name: "pandas",
                      icon: "🐼",
                    },
                    { name: "scikit-learn", icon: <SiScikitlearn /> },

                    { name: "Python", icon: <FaPython /> },
                  ]}
                />,
              ]}
            />
          </div>
        </div>
      </div>
      <div className={styles.footer} ref={contactRef}>
        <div className={styles.contact}>
          <a href="mailto:jimmyjin1119@gmail.com" className={styles.iconLink}>
            <FaEnvelope /> Email
          </a>
          <a
            href="https://github.com/jinjmmy"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jimmy-jin-774ab7237/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
