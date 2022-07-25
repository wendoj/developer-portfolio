import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { FaDiscord } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function Modal({ setIsOpen, isOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-40" />
        </Transition.Child>

        <div className="fixed inset-0">
          <div className="flex min-h-full items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="gap-x-5 p-10 backdrop-blur-lg justify-between flex flex-row w-full max-w-xl transform overflow-hidden shadow-xl transition-all">
                <div className="w-full flex-col items-center">
                  <Dialog.Title
                    as="h3"
                    className="border-r border-[#ffffff3f] text-xl font-bold leading-6 text-white"
                  >
                    Discord
                  </Dialog.Title>
                  <div className="flex flex-col">
                    <label className="relative block mt-7">
                      <input
                        readOnly
                        type="text"
                        aria-label="Discord tag"
                        placeholder="WendoJ#9239"
                        className="w-full text-xs py-3 pr-4 pl-9 bg-[#000]/20 flex flex-row justify-between items-center outline-none focus:ring-2 transition-all duration-200"
                      />
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 opacity-50">
                        <FaDiscord className="flex-grow-0 flex-shrink-0 w-[15px] h-[15px]" />
                      </span>
                    </label>
                  </div>
                  <motion.button
                    onClick={() => navigator.clipboard.writeText("WendoJ#9239")}
                    whileHover={{ scale: 1.025 }}
                    whileTap={{ scale: 0.975 }}
                    className="w-full mt-3 bg-[#000]/40 text-[#fff] text-xs text-opacity-80 px-6 py-3"
                  >
                    Copy to clipboard
                  </motion.button>
                </div>
                <div className="w-full flex-col items-center">
                  <Dialog.Title
                    as="h3"
                    className="border-r border-[#ffffff3f] text-xl font-bold leading-6 text-white"
                  >
                    Email
                  </Dialog.Title>
                  <div className="flex flex-col">
                    <label className="relative block mt-7">
                      <input
                        readOnly
                        type="text"
                        aria-label="Email address"
                        placeholder="wendoj@proton.me"
                        className="w-full text-xs py-3 pr-4 pl-9 bg-[#000]/20 flex flex-row justify-between items-center outline-none focus:ring-2 transition-all duration-200"
                      />
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 opacity-50">
                        <IoMdMail className="flex-grow-0 flex-shrink-0 w-[15px] h-[15px]" />
                      </span>
                    </label>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.025 }}
                    whileTap={{ scale: 0.975 }}
                    className="w-full mt-3 bg-[#000]/40 text-[#fff] text-xs text-opacity-80 px-6 py-3"
                  >
                    <a
                      target="_blank"
                      rel="noreferrer noopener"
                      href="mailto:wendoj@proton.me"
                    >
                      Send me an email
                    </a>
                  </motion.button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
