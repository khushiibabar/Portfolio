import React, { useState } from "react";
import { delay, AnimatePresence, motion, scale } from "framer-motion";
import { Link } from "react-router-dom";
// Wrap React Router's Link with motion
const MotionLink = motion(Link);
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  //Toogle the Menu open/close
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  //State to track if the contact form is open
  const [contactFormOpen, setContactFormOpen] = useState(false);

  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);

  return (
    <header className="absolute z-50 w-full transition-all duration-300">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6 lg:px-8 md:h-20">
        {/* Logo / Name */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          className="flex items-center"
        >
          <div className="flex items-center justify-center w-10 h-10 mr-3 text-xl font-bold text-purple-600 rounded-xl bg-gradient-to-r from-gray-500 to-gray-100">
            K
          </div>

          <span className="text-xl font-bold text-transparent bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text">
            Khushi
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-8 lg:flex">
          {["Home", "About", "Projects", "Contact"].map((item, index) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <MotionLink
                key={item}
                to={path} // ✅ Home → "/", others → "/about"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2,
                }}
                className="relative font-medium text-gray-800 transition-colors duration-300 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 group"
              >
                {item}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5
          bg-violet-600 group-hover:w-full transition-all
          duration-300"
                ></span>
              </MotionLink>
            );
          })}
        </nav>

        {/* Social Icons - Desktop */}
        <div className="items-center hidden space-x-4 md:flex">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            href="https://github.com/dashboard"
            className="text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>

          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            href="https://www.linkedin.com/in/khushi-babar-a056aa237/"
            className="text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>

          <motion.a
            href="https://wa.me/918878395975" // 👈 yaha apna WhatsApp number daalo (91 = India code)
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 transition-colors duration-300 dark:text-gray-300 hover:text-green-500"
          >
            <FaWhatsapp className="w-5 h-5" />
          </motion.a>

          {/* Hire Me Button */}
          <motion.button
            onClick={openContactForm}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 1.6,
              duration: 0.8,
            }}
            className="px-4 py-2 ml-4 font-bold transition-all duration-500 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 hover:from-violet-700 hover:to-purple-700 hover:text-white"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Menu Button  */}
        <div className="flex items-center md:hidden">
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={toggleMenu}
            className="text-gray-300"
          >
            {isOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.5 }}
        className="px-4 py-5 space-y-5 overflow-hidden bg-white shadow-lg md:hidden dark:bg-gray-900"
      >
        <nav className="flex flex-col space-y-3">
          {["Home", "About", "Projects", "Contact"].map((item) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
            return (
              <Link
                to={path}
                onClick={toggleMenu}
                className="py-2 font-medium text-gray-300"
                key={item}
              >
                {item}
              </Link>
            );
          })}
        </nav>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a href="#">
              <FiGithub className="w-5 h-5 text-gray-300" />
            </a>
            <a href="#">
              <FiLinkedin className="w-5 h-5 text-gray-300" />
            </a>
            <a
              href="https://wa.me/918878395975"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="w-5 h-5 text-green-400" />
            </a>
          </div>

          <button
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            className="block w-full px-4 py-2 mt-4 font-bold rounded-lg bg-gradient-to-r from-violet-600 to-violet-400"
          >
            Contact Me
          </button>
        </div>
      </motion.div>

      {/* Contact form */}
      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 background-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                duration: 0.8,
              }}
              className="w-full max-w-md p-6 bg-white shadow-xl dark:bg-gray-800 rounded-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-gray-300">
                  Get In Touch
                </h1>

                <button onClick={closeContactForm}>
                  <FiX className="w-5 h-5 text-gray-300 font-extralight" />
                </button>
              </div>

              {/* Input Forms */}
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-1 text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    rows="4"
                    id="message"
                    placeholder="How can we help you?"
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full px-4 py-2 transition-all duration-300 rounded-lg shadow-md bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 hover:shadow-lg hover:shadow-violet-600/50"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
