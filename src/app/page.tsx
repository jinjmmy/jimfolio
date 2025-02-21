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
  FaEnvelope,
  FaGithub,
  FaJava,
  FaJs,
  FaLinkedin,
  FaPython,
  FaDocker,
  FaFlask,
} from "react-icons/fa";
import { SiAmazon, SiMysql, SiKubernetes, SiScikitlearn } from "react-icons/si";
import { LuSoup } from "react-icons/lu";
import { TbTransform } from "react-icons/tb";

const Home = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const expRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
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
            <a className={styles.link} href="public/JimmyJinResume2025.pdf">
              resume
            </a>
          </div>
        </div>
        <div className={`${styles.content}`}>
          <div className={styles.aboutme} ref={aboutRef}>
            <ProfilePicture />
            <h1 className="text-4xl font-bold text-center">
              hi, my name is jimmy
            </h1>

            <p className="text-3xl font-bold text-center max-w-lg ">
              i am a recent computer science graduate from{" "}
              <a href="https://cs.ics.uci.edu/" target="_blank" rel="noopener">
                uci
              </a>
              . i am interested in full-stack development, cloud computing, data
              engineering, and data science.
            </p>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div ref={expRef}>
            <h2 className="text-3xl font-bold">experience</h2>
            <Carousel
              items={[
                <Experience
                  name="Panasonic Avionics Corporation"
                  role="Data Science Intern"
                  image=""
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
                  image=""
                  link="https://mobleylab.org/"
                >
                  <ul>
                    <li>
                      Speeding up Thompson Sampling warmup cycles runtime by
                      implementing multiprocessing and GPU based python
                      libraries, enhancing scalability for large chemical
                      datasets. (in progress: all work being excecuted in
                      UCI&apos;s HPC3 cluster.)
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
                  image=""
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
                  image=""
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
          <br></br>
          <br></br>
          <div ref={projRef}>
            <h2 className="text-3xl font-bold">projects</h2>
            <Carousel
              items={[
                <Project
                  name="J-Movie"
                  image=""
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
                  image=""
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
                  image=""
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
