export default function Footer() {
  return (
    <footer className="mt-[10rem] bg-[#000]/30 border-t border-[#fff]/10 py-5 backdrop-blur">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <p className="text-sm text-gray-400 text-center lg:text-left order-3 md:order-2">
          Designed &amp; Built by{" "}
          <a
            className="text-[#32e7e47f] hover:text-[#32e7e4d3] transition-all duration-300"
            href="https://www.github.com/wendoj"
            rel="noopener noreferrer"
            target="_blank"
          >
            WendoJ
          </a>
        </p>
      </div>
    </footer>
  );
}
