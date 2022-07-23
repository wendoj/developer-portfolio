import type { NextPage } from "next";
import Head from "next/head";
import Spline from "@splinetool/react-spline";
import { Suspense } from "react";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>WendoJ</title>
        <meta name="description" content="Full-stack website developer and JavaScript enthusiast." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-[10vw] xl:mx-[15vw] flex flex-col justify-center min-h-screen">
        <section className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col">
            <p className="text-lg opacity-50">Hello! I&apos;m</p>
            <h1 className="text-6xl font-bold uppercase">WendoJ</h1>
            <h3 className="mt-1 opacity-80 text-3xl">
              A <strong>full-stack</strong> website developer
            </h3>

            {/* Call to action */}
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
                  href="#_"
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
                href="#"
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
          <div className="lg:max-w-lg flex-grow lg:w-full md:w-1/2 w-full md:mb-0 mt-10 h-[50vh]">
            <Suspense fallback={<div>Loading...</div>}>
              <Spline
                scene="https://prod.spline.design/ygSQ5TJuDnsn-Iea/scene.splinecode"
                width="100vw"
                height="100vh"
              />
            </Suspense>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
