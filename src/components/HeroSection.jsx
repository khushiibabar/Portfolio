// import { motion } from 'framer-motion';
// import Spline from "@splinetool/react-spline"

// const HeroSection = () => {
//   return (
//     <section className="relative flex flex-col-reverse items-center justify-between h-screen px-10 overflow-hidden bg-gradient-to-b from-violet-900 to-black xl:flex-row lg:px-24"> 

// {/* Left Section */}
// <div className="z-40 xl:mb-0 mb-[20%]">
//     <motion.h1 
//     initial={{ opacity: 0, y: 80}}
//     animate={{ opacity: 1, y: 0}}
//     transition={{
//         type:"spring",
//         stiffness: 40,
//         damping: 25,
//         delay: 1.3,
//         duration: 1.5,
//     }}
//     className="z-10 mb-6 text-5xl font-bold md:text-7xl lg:text-8xl">
// Fullstack Web <br /> Developer

//     </motion.h1>

//     <motion.p 
//      initial={{ opacity: 0, y: 80}}
//     animate={{ opacity: 1, y: 0}}
//     transition={{
//         type:"spring",
//         stiffness: 40,
//         damping: 25,
//         delay: 1.8,
//         duration: 1.5,
//     }}
//     className='max-w-2xl text-xl text-purple-200 md:text-1xl lg:text-2xl'>
//         I deliver robust, production-ready websites and web pages with speed and precision. Every project is backed by clean code, clear communication, and a commitment to getting it done, on time, every time.
//     </motion.p>
// </div>

// {/* Right Section */}
//  <Spline className='absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0' scene="https://prod.spline.design/mfe489IIHBPp9jSS/scene.splinecode" />
  

//     </section>
//   )
// }

// export default HeroSection

import { motion } from 'framer-motion';
import Spline from "@splinetool/react-spline"

const HeroSection = () => {
  return (
    <section 
     id="hero"  
    className="relative flex flex-col-reverse items-center justify-between h-screen px-10 overflow-hidden bg-gradient-to-b from-violet-900 to-black xl:flex-row lg:px-24"> 

{/* Left Section */}
<div className="z-40 xl:mb-0 mb-[20%]">
    <motion.h1 
    initial={{ opacity: 0, y: 80}}
    animate={{ opacity: 1, y: 0}}
    transition={{
        type:"spring",
        stiffness: 40,
        damping: 25,
        delay: 1.3,
        duration: 1.5,
    }}
    className="z-10 mb-6 text-5xl font-bold md:text-7xl lg:text-8xl">
Fullstack Web <br /> Developer

    </motion.h1>

    <motion.p 
     initial={{ opacity: 0, y: 80}}
    animate={{ opacity: 1, y: 0}}
    transition={{
        type:"spring",
        stiffness: 40,
        damping: 25,
        delay: 1.8,
        duration: 1.5,
    }}
    className='max-w-2xl text-xl text-purple-200 md:text-1xl lg:text-2xl'>
        I deliver robust, production-ready websites and web pages with speed and precision. Every project is backed by clean code, clear communication, and a commitment to getting it done, on time, every time.
    </motion.p>
</div>

{/* Right Section */}
 <Spline className='absolute xl:right-[-28%] right-0 top-[-20%] lg:top-0' scene="https://prod.spline.design/mfe489IIHBPp9jSS/scene.splinecode" />
  

    </section>
  )
}

export default HeroSection

