import { FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="px-6 py-16 mt-40 text-white bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          {/* logo and description */}
          <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text">
            Khushi
          </h2>

          {/* Scroll links */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-purple-200">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/dashboard"
                className="text-gray-700 transition-colors hover:text-violet-400"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/khushi-babar-a056aa237/"
                className="text-gray-700 transition-colors hover:text-violet-400"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between pt-8 mt-12 border-t border-gray-700 md:flex-row">
          <p className="text-sm text-gray-500">
            &copy; 2025 Khushi. All rights reserved.
          </p>
          <div className="flex mt-4 space-x-6 md:mt-0">
            <a
              href="#"
              className="text-sm text-gray-500 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 transition-colors hover:text-white"
            >
              Terms of service
            </a>
            <a
              href="#"
              className="text-sm text-gray-500 transition-colors hover:text-white"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
