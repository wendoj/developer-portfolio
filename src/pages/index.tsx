import Container from "@/components/Container";
import { useEffect, useRef, Suspense } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";

const aboutStats = [
  { label: "Years of experience", value: "3+" },
  { label: "Projects completed", value: "100+" },
  { label: "Companies worked with", value: "10+" },
];

const projects = [
  {
    title: "T3.gg",
    description:
      "T3.gg is a free and open-source website builder for gamers. It allows you to create a website for your team or community in minutes, with no coding required.",
    image: "/assets/t3gg.png",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    links: [
      { label: "Website", href: "https://t3.gg" },
      { label: "GitHub", href: "https://github.com/t3-oss/create-t3-app" },
    ],
  },
  {
    title: "T3.gg",
    description:
      "T3.gg is a free and open-source website builder for gamers. It allows you to create a website for your team or community in minutes, with no coding required.",
    image: "/assets/t3gg.png",
    tags: ["Next.js", "Tailwind", "TypeScript"],
    links: [
      { label: "Website", href: "https://t3.gg" },
      { label: "GitHub", href: "https://github.com/t3-oss/create-t3-app" },
    ],
  },
];

export default function Home() {
  const refScrollContainer = useRef(null);

  useEffect(() => {
    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      const scroll = new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    void getLocomotive();
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />
        {/* Intro */}
        <section
          data-scroll-section
          className="flex min-h-screen w-full flex-row items-center justify-between"
        >
          <div className={styles.intro}>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="flex flex-row items-center space-x-1.5"
            >
              <span className={styles.pill}>next.js</span>
              <span className={styles.pill}>tailwindcss</span>
              <span className={styles.pill}>typescript</span>
            </div>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  Hello, I&apos;m
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                  WendoJ.
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".04"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
                An experienced full-stack website developer with a passion for
                crafting unique digital experiences.
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".05"
              data-direction="horizontal"
              className="flex flex-row items-center space-x-1.5 pt-6"
            >
              <Button>
                Get in touch <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
              <Button variant="outline">Learn more</Button>
            </span>

            <div className={styles.scroll}>
              Scroll to discover{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
          <div className="flex h-[30vh] w-full md:w-1/2 lg:h-[50vh]">
            <Suspense fallback={<span>Loading...</span>}>
              <Spline scene="/assets/scene.splinecode" />
            </Suspense>
          </div>
        </section>

        {/* About */}
        <section data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="my-14 flex max-w-6xl flex-col justify-start space-y-10"
          >
            <h2 className="py-16 text-[40px] font-light leading-normal tracking-tighter text-foreground">
              I&apos;m an experienced full-stack developer proficient in{" "}
              <Link href="https://create.t3.gg/" target="_blank">
                TypeScript, Tailwind, and Next.js
              </Link>{" "}
              since 2021. My experience spans from startups to mid-sized
              companies, where I&apos;ve been instrumental in the entire product
              design process; from ideation and wireframing, through
              prototyping, to the delivery of the final product, all while
              efficiently collaborating with cross-functional teams.
            </h2>
            <div className="grid grid-cols-3">
              {aboutStats.map((stat) => (
                <div key={stat.label} className="flex flex-col items-start">
                  <span className="text-gradient text-6xl font-bold tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-lg tracking-tight text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section data-scroll-section>
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="bottom"
            className="my-14 grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <div key={project.title} className="flex flex-col items-start">
                <h3 className="text-3xl font-bold tracking-tight text-foreground">
                  {project.title}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-row space-x-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-sm text-slate-400">{tag}</span>
                  ))}
                </div>
                <div className="flex flex-row space-x-2">
                  {project.links.map((link) => (
                    <Link key={link.label} href={link.href}>
                      <span className="text-sm text-slate-400">
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Container>
  );
}

function Gradient() {
  return (
    <>
      {/* Upper gradient */}
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Lower gradient */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
