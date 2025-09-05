// import React, { useRef, useEffect } from 'react'
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// const AboutSection = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const introRef = useRef(null);
//   const starsRef = useRef([]);

//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     // Title Animation
//     gsap.fromTo(
//       titleRef.current,
//       { y: 100, opacity: 0 },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 0.8,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Intro Animation
//     gsap.fromTo(
//       introRef.current,
//       { y: 100, opacity: 0, filter: "blur(10px)" },
//       {
//         y: 0,
//         opacity: 1,
//         filter: "blur(0px)",
//         duration: 1.2,
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 70%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     // Stars Animation
//     starsRef.current.forEach((star, index) => {
//       const direction = index % 2 === 0 ? 1 : -1;
//       const speed = 0.5 + Math.random() * 0.5;

//       gsap.to(star, {
//         x: `${direction * (100 + index * 20)}`,
//         y: `${direction * -50 - index * 10}`,
//         rotation: direction * 360,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           end: "bottom top",
//           scrub: speed,
//         },
//       });
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => {
//         if (trigger.vars.trigger === sectionRef.current) {
//           trigger.kill();
//         }
//       });
//     };
//   }, []);

//   const addToStars = (el) => {
//     if (el && !starsRef.current.includes(el)) {
//       starsRef.current.push(el);
//     }
//   };

//   return (
//     <section
//       ref={sectionRef}
//       className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50] flex flex-col items-center justify-center px-6"
//     >
//       {/* Stars */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(10)].map((_, i) => (
//           <div
//             ref={addToStars}
//             key={`star-${i}`}
//             className="absolute rounded-full"
//             style={{
//               width: `${10 + i * 3}px`,
//               height: `${10 + i * 3}px`,
//               backgroundColor: "white",
//               opacity: 0.2 + Math.random() * 0.4,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Title */}
//       <h1
//         ref={titleRef}
//         className="mb-12 text-4xl font-bold text-center text-white opacity-0 md:text-6xl"
//       >
//         About Me
//       </h1>

//       {/* Intro + Image */}
//       <div
//         ref={introRef}
//         className="flex flex-col items-center justify-between w-full max-w-6xl gap-10 opacity-0 md:flex-row"
//       >
//         <h3 className="text-sm font-bold text-purple-200 md:text-2xl lg:max-w-[45rem] max-w-[27rem] tracking-wider leading-relaxed">
//           Hi, I'm <span className="text-purple-400">Khushi</span>, a Fullstack
//           Web Developer focused on speed, polish, and performance.
//           I craft responsive, user-friendly web interfaces using modern tools
//           like React, Tailwind CSS, and JavaScript.
//           Whether it’s a landing page, a full-scale web app, or something in
//           between — I’m all about clean code, fast delivery, and seamless user
//           experiences.
//         </h3>

//         <img
//           className="lg:h-[28rem] md:h-[22rem] h-[18rem] mix-blend-lighten"
//           src="/images/person.png"
//           alt="profile-img"
//         />
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const skillsRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title Animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Intro Animation
    gsap.fromTo(
      introRef.current,
      { y: 100, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Skills Animation
    gsap.fromTo(
      skillsRef.current,
      { y: 100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Stars Animation
    starsRef.current.forEach((star, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const speed = 0.5 + Math.random() * 0.5;

      gsap.to(star, {
        x: `${direction * (100 + index * 20)}`,
        y: `${direction * -50 - index * 10}`,
        rotation: direction * 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: speed,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  const addToStars = (el) => {
    if (el && !starsRef.current.includes(el)) {
      starsRef.current.push(el);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50] flex flex-col items-center justify-center px-6"
    >
      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            ref={addToStars}
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${10 + i * 3}px`,
              height: `${10 + i * 3}px`,
              backgroundColor: "white",
              opacity: 0.2 + Math.random() * 0.4,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <h1
        ref={titleRef}
        className="mb-12 text-4xl font-bold text-center text-white opacity-0 md:text-6xl"
      >
        About Me
      </h1>

      {/* Intro + Image */}
      <div
        ref={introRef}
        className="flex flex-col items-center justify-between w-full max-w-6xl gap-10 opacity-0 md:flex-row"
      >
        <h3 className="text-sm font-bold text-purple-200 md:text-2xl lg:max-w-[45rem] max-w-[27rem] tracking-wider leading-relaxed">
          Hi, I'm <span className="text-purple-400">Khushi</span>, a Fullstack
          Web Developer focused on speed, polish, and performance. I craft
          responsive, user-friendly web interfaces using modern tools like
          React, Tailwind CSS, and JavaScript. Whether it’s a landing page, a
          full-scale web app, or something in between — I’m all about clean
          code, fast delivery, and seamless user experiences.
        </h3>

        <img
          className="lg:h-[28rem] md:h-[22rem] h-[18rem] mix-blend-lighten"
          src="/images/person.png"
          alt="profile-img"
        />
      </div>

      {/* My Skills Section */}
      <div ref={skillsRef} className="mt-16 text-center text-white opacity-0">
        <h2 className="mb-6 text-3xl font-bold text-purple-300">My Skills</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-purple-200">
          🎓 I have completed <span className="text-purple-400">BCA</span>
          &nbsp; from{" "}
          <span className="text-purple-400">
            Makhanlal Chaturvedi University, Bhopal &nbsp;
          </span>
          and a Fullstack Web Development course from Apna College. Here are the
          technologies I know:
        </p>

        <div className="flex flex-wrap justify-center max-w-3xl gap-4 mx-auto mb-10">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "ReactJS",
            "Node.js",
            "Express",
            "MongoDB",
            "SQL",
          ].map((skill, i) => (
            <span
              key={i}
              className={`px-6 py-3 rounded-xl text-lg font-semibold border border-purple-400 shadow-lg transition-all duration-300 hover:scale-110 ${
                skill === "ReactJS"
                  ? "bg-purple-600 text-white shadow-purple-500/70 scale-105"
                  : "bg-white/10 text-purple-200"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
