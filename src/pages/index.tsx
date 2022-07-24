import type { NextPage } from "next";
import Container from "../components/Container";
import Spline from "@splinetool/react-spline";
import { Suspense } from "react";
import { motion } from "framer-motion";

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
  return (
    <Container>
      <section className="mt-[15rem] h-[100vh] flex flex-col lg:flex-row lg:mt-0 justify-between items-center">
        <div className="flex flex-col -skew-y-6">
          <p className="text-lg opacity-50">Hello! I&apos;m</p>
          <motion.h1
            variants={sentence}
            initial="hidden"
            animate="visible"
            className="text-6xl font-bold uppercase hover:-translate-y-1 transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-[#78ffeb] to-[#60ffd548]"
          >
            {line1.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.h1>
          <h3 className="mt-1 opacity-80 text-3xl">
            A <strong>full-stack</strong> website developer
          </h3>

          {/* Call to action buttons */}
          <motion.div
            className="mt-4 flex flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.975 }}
            >
              <a
                href="#contact"
                className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out group-hover:opacity-80 bg-gradient-to-r from-[#32e7e440] to-transparent opacity-100" />
                <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#32e7e47f] to-transparent opacity-[0.02] h-1/3" />
                <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#32E7E3] to-transparent opacity-[0.02]" />
                <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-[#32E7E3] to-transparent opacity-[0.02]" />
                <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-[#32E7E3] to-transparent opacity-[0.02]" />
                <span className="absolute inset-0 w-full h-full border border-[#32e7e47f] rounded-md opacity-10" />
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5" />
                <span className="relative">Get in touch</span>
              </a>
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

      <section id="about">
        <div className="mt-[5rem] flex flex-col">
          <h2 className="text-4xl font-semibold border-r mb-4">About Me</h2>
          <span className="flex flex-col gap-10">
            <p className="opacity-50">
              Hello! My name is WendoJ, and I&apos;m experienced in front-end
              and back-end website development, as well as a strong
              understanding of user experience and design principles. With a
              dedication for learning new things, I am passionate about building
              beautiful and user-friendly websites that are also fast and
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
              <li>PostgreSQL</li>
              <li>three.js</li>
            </ol>
          </span>
        </div>
      </section>
    </Container>
  );
};

export default Home;
