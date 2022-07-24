import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NextLink from "next/link";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
import Footer from "./Footer";

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.12,
    },
  }),
  hidden: { opacity: 0 },
};

function NavItems({
  href,
  text,
  custom,
}: {
  href: string;
  text: string;
  custom: number;
}) {
  return (
    <NextLink href={href}>
      <motion.li
        whileTap={{ scale: 0.9, y: "10px" }}
        initial="hidden"
        custom={custom}
        animate="visible"
        variants={variants}
        className="text-neutral-400 hover:cursor-pointer opacity-60 mx-2 px-[0.3rem] hidden text-sm md:inline-block rounded-lg hover:text-neutral-300 transition-all"
      >
        {text}
      </motion.li>
    </NextLink>
  );
}

export default function Container(props: any) {
  const [mounted, setMounted] = useState(false);

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: "WendoJ",
    description: `Full-stack website developer and JavaScript enthusiast.`,
    image: "/assets/logo/logo.png",
    type: "website",
    ...customMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta name="theme-color" content="#78ffeb" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.wendoj.com${router.asPath}`}
        />
        <link rel="canonical" href={`https://www.wendoj.com${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="WendoJ" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="WendoJ" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
         <link rel="manifest" href="/manifest.json" />
         <link rel="apple-touch-icon" href="./icon-192x192.png" />
      </Head>
      <div className="flex flex-col">
        <header className="fixed transition-all duration-300 py-8 backdrop-blur-lg top-0 inset-x-0 z-[100] px-[10vw] xl:px-[15vw] flex flex-row items-center justify-between">
          <h2 className="font-semibold text-xl">wendo</h2>

          <nav className="flex flex-row items-center">
            <MobileMenu />

            <ul>
              <NavItems href="/" text="Home" custom={0} />
              <NavItems href="#about" text="About" custom={1} />
              <NavItems href="#projects" text="Projects" custom={2} />
              <NavItems href="#contact" text="Contact" custom={3} />
            </ul>
          </nav>
        </header>

        <main className="mx-[10vw] xl:mx-[15vw] flex flex-col justify-center">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
