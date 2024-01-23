import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import styles from "@/styles/Container.module.css";

type ContainerProps = {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
};

type NavProps = {
  text: string;
  href: string;
  i: number;
  className?: string;
  setIsOpen?: (isOpen: boolean) => void;
};

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.12,
    },
    ease: "easeInOut",
  }),
  hidden: { opacity: 0 },
};

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/projects", text: "Projects" },
  { href: "/contact", text: "Contact" },
];

function NavItem(props: NavProps) {
  const isActive = usePathname() === props.href;

  return (
    <motion.li
      className={props.className}
      variants={variants}
      custom={props.i}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Link
        href={props.href}
        className={cn(
          "text-sm lowercase tracking-tight text-slate-400 transition hover:text-slate-200",
          isActive && "text-slate-200",
        )}
      >
        <span>{props.text}</span>
      </Link>
    </motion.li>
  );
}

export default function Container(props: ContainerProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>{props.title ?? "wendo"}</title>
        <meta
          name="description"
          content={props.description ?? "The personal website of wendo."}
        />
      </Head>
      <nav
        className={cn(
          styles.nav,
          isScrolled ? "bg-background shadow-md transition" : "bg-transparent",
        )}
      >
        <Link href="/">
          <span className="text-lg font-semibold">wendo</span>
        </Link>
        <ul>
          {navLinks.map((link, i) => (
            <NavItem
              key={link.href}
              href={link.href}
              text={link.text}
              i={i}
              className="text-base"
            />
          ))}
        </ul>
      </nav>
      <main className={cn("container", props.className)}>{props.children}</main>
    </>
  );
}
