import type { NextPage } from "next";
import Container from "../components/Container";
import Spline from "@splinetool/react-spline";
import { Suspense } from "react";
import { motion } from "framer-motion";
import Project from "../components/Project";
import VanillaTilt from "vanilla-tilt";
import { useEffect, useState } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import Modal from "../components/Contact";

/* Framer motion animation presets */
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const line1 = "WendoJ";

const Home: NextPage = () => {
  /* Modal state */
  let [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  /* Project card tilt hover effect */
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll("#project-card") as any, {
      speed: 400,
      glare: true,
      "max-glare": 0.1,
      perspective: 1000,
    });
  }, []);

  /* Smooth scrolling */
  const { scroll } = useLocomotiveScroll();
  return (
    <Container data-scroll-container>
      <Modal setIsOpen={setIsOpen} isOpen={isOpen} />
      <section
        data-scroll-section
        className="mt-[15rem] h-[100vh] flex flex-col lg:flex-row lg:mt-0 lg:justify-between items-center"
      >
        <div className="flex flex-col -skew-y-6 text-center lg:text-justify">
          <p className="text-lg opacity-50">Hello! I&apos;m</p>
          <motion.h1
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="1"
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="ml-3 text-6xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#78ffeb] to-[#60ffd548]"
          >
            {line1.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.h1>
          <h3
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-1"
            className="mt-1 opacity-80 text-2xl lg:text-[2.3vw] ultrawide:text-[1.6vw]"
          >
            A <strong>full-stack</strong> website developer
          </h3>

          {/* Call to action buttons */}
          <motion.div
            className="mt-4 flex flex-row justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.975 }}
              className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white shadow-2xl group"
              onClick={openModal}
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out group-hover:opacity-80 bg-gradient-to-r from-[#32e7e440] to-transparent opacity-100" />
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#32e7e47f] to-transparent opacity-[0.02] h-1/3" />
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#32E7E3] to-transparent opacity-[0.02]" />
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-[#32E7E3] to-transparent opacity-[0.02]" />
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-[#32E7E3] to-transparent opacity-[0.02]" />
              <span className="absolute inset-0 w-full h-full border border-[#32e7e47f] rounded-md opacity-10" />
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5" />
              <span className="relative">Get in touch</span>
            </motion.button>

            <a
              href="#about"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 ml-[1.1rem] hover:opacity-80 text-opacty-90"
            >
              Learn more
              <svg
                className="w-[0.8rem] h-3 ml-[0.3rem] mt-1 opacity-80"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </a>
          </motion.div>
        </div>
        <div className="lg:max-w-lg flex-grow lg:w-full md:w-1/2 w-full md:mb-0 mt-10 h-[30vh] lg:h-[50vh]">
          <Suspense fallback={<div>Loading...</div>}>
            <Spline
              scene="https://prod.spline.design/ygSQ5TJuDnsn-Iea/scene.splinecode"
              width="100vw"
              height="100vh"
            />
          </Suspense>
        </div>
      </section>

      <section data-scroll-section id="about">
        <div
          data-scroll
          data-scroll-speed="-1"
          data-scroll-direction="horizontal"
          className="mt-[5rem] flex flex-col backdrop-blur-lg p-10"
        >
          <h2 className="text-4xl font-semibold border-r mb-4">About Me</h2>
          <span className="flex flex-col gap-10">
            <p className="opacity-50">
              Hello! My name is WendoJ, and I&apos;m experienced in front-end
              and back-end website development, as well as a strong
              understanding of user experience and design principles. With a
              dedication for learning new things, I am passionate about building
              engaging and user-friendly websites that are also fast and
              responsive. <br /> <br />
              My interest in websites stemmed back to 2018 when I first decided
              to modify the CSS of a website to change its background image -
              and here I am now. Here are a few technologies I&apos;ve been
              working with recently:
            </p>
            <ol className="ml-4 w-full opacity-50 grid grid-cols-3 md:grid-cols-4 list-[square] gap-x-[6rem] items-center gap-y-2">
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>TailwindCSS</li>
              <li>PlanetScale</li>
              <li>Prisma</li>
              <li>Go</li>
              <li>three.js</li>
            </ol>
          </span>
        </div>
      </section>

      <section data-scroll-section id="projects">
        <div
          data-scroll
          data-scroll-speed="1"
          data-scroll-direction="horizontal"
          className="mt-[15rem] flex flex-col"
        >
          <h2 className="text-4xl font-semibold border-r mb-4">Projects</h2>

          {/* Grid of past projcets */}
          <motion.div
            className="project-grid gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Project
              name="Spicy jalapeno"
              image=""
              description="Short loin t-bone shankle, tail ribeye venison jowl hamburger. Ball tip frankfurter swine, leberkas pig jerky t-bone salami."
            />
            <Project
              name="Short ribs"
              image=""
              description="Short loin cupim strip steak prosciutto kevin tongue picanha sirloin. Landjaeger beef ham hock."
            />
            <Project
              name="Turducken"
              image=""
              description="Bacon burgdoggen shoulder pork loin prosciutto ball tip tail short loin pork chop kielbasa corned beef."
            />
            <Project
              name="Drumstick"
              image=""
              description="Burgdoggen pancetta kielbasa shank ground round ball tip pork loin bacon sausage tongue chuck."
            />
            <Project
              name="Burgdoggen"
              image=""
              description="Turkey chislic alcatra venison. Meatloaf pork turducken, porchetta doner rump bacon jowl bresaola sirloin."
            />
          </motion.div>
        </div>
      </section>

      <section data-scroll-section id="contact">
        <div
          data-scroll
          data-scroll-speed="1"
          className="mt-[15rem] flex justify-center flex-col gap-5 items-center"
        >
          <h1 className="font-semibold text-4xl text-center">Contact Me</h1>
          <p className="opacity-50 mx-10 max-w-lg text-center">
            I am always open to new opportunities so feel free to reach out if
            you have a project in mind or if you have a question to ask me;
            I&apos;ll try my best to get back to you!
          </p>
          <motion.button
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.975 }}
            className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white shadow-2xl group"
            onClick={openModal}
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out group-hover:opacity-80 bg-gradient-to-r from-[#32e7e440] to-transparent opacity-100" />
            <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#32e7e47f] to-transparent opacity-[0.02] h-1/3" />
            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#32E7E3] to-transparent opacity-[0.02]" />
            <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-[#32E7E3] to-transparent opacity-[0.02]" />
            <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-[#32E7E3] to-transparent opacity-[0.02]" />
            <span className="absolute inset-0 w-full h-full border border-[#32e7e47f] rounded-md opacity-10" />
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5" />
            <span className="relative">Say Hello</span>
          </motion.button>
          <div className="w-[100vw] h-[50vh]">
            <Suspense fallback={<div>Loading...</div>}>
              <Spline
                scene="https://prod.spline.design/v66eIFGDtN7TJzPC/scene.splinecode"
                width="100vw"
                height="100vh"
              />
            </Suspense>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Home;
