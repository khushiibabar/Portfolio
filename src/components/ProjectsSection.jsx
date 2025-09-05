import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SlShareAlt } from "react-icons/sl";


const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const triggerRef = useRef(null);
  const horizontalRef = useRef(null);

  
  const projectImages = [
    {
      id: 1,
      title: "Portfolio Website",
      imageSrc: "/images/Screenshot 2025-09-04 183909.png",
       link: "https://majorproject2-tr7q.onrender.com/listings",
    },
    {
      id: 2,
      title: "Startup Website",
      imageSrc: "/images/Screenshot 2025-09-04 184054.png",
       link: "https://hamelockindia.netlify.app/",
        
    },
    {
      id: 3,
      title: "Mini Airbnb",
      imageSrc: "/images/Screenshot 2025-09-04 191411 (1).png",
       link: "https://majorproject2-tr7q.onrender.com/listings",
    },
    
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title reveal animation
    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Title Line Animation
    gsap.fromTo(
      titleLineRef.current,
      { width: "0%", opacity: 0 },
      {
        width: "100%",
        opacity: 1,
        duration: 1.5,
        ease: "power3.inOut",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

//section entrance effect
gsap.fromTo(
    triggerRef.current,
    {
        y: 100,
        rotationX: 20,
        opacity: 0,
    },
    {
        y: 0,
        rotationX: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
        }
    }
)

//Parallax effect for the entire section
gsap.fromTo(
    sectionRef.current,
    {
        backgroundPosition: "50% 0%",
    },
    {
        backgroundPosition: "50% 100%",
        ease: "none",
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
        }
    }
)

//Horizonatl Scrolling
//Create the horizontal Scrolling animation
const horizontalScroll = gsap.to(".panel", {
    xPercent: -100 * (projectImages.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: () => `+=${horizontalRef.current.offsetWidth}`,
        pin: true,
        scrub: 1,
        snap: {
            snapTo: 1 / (projectImages.length - 1),
            duration: { main: 0.2, max: 0.3 },
            delay: 0.1,
        },
        invalidateOnRefresh: true,
    }
})
    
//Image animation
//Animate each image panel
const panels = gsap.utils.toArray(".panel")
panels.forEach((panel, i) => {
    const image = panel.querySelector(".project-image")
    const imageTitle = panel.querySelector(".project-title")

    //Create a timeline for each panel
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: panel,
            containerAnimation: horizontalScroll,
            start: "left right",
            end: "right left",
            scrub: true,
        }
    })
    
    //Image scale  and opacity animation
    tl.fromTo(image, { scale: 0, rotate: -20, }, { scale: 1, rotate: 1, duration: 0.5,})

    //Title animation if it exixts
    if(imageTitle) {
        tl.fromTo(imageTitle, { y: 30, }, { y: -100, duration: 0.3, }, 0.2)
    }
})


  }, [projectImages.length]);

  return (
    <section
      ref={sectionRef}
      id="horizontal-section"
      className="relative py-20 bg-[#f6f6f6] overflow-hidden"
    >
      {/* Section title */}
      <div className="container relative z-10 px-4 mx-auto mb-16">
        <h2
          ref={titleRef}
          className="mb-4 text-4xl font-bold text-center text-black opacity-0 md:text-5xl lg:text-6xl"
        >
          Featured Projects
        </h2>
        <div
          ref={titleLineRef}
          className="w-0 h-1 mx-auto opacity-0 bg-gradient-to-r from-purple-500 to-pink-500"
        ></div>
      </div>

      {/* Horizontal Scroll Section */}
      {/* <div ref={triggerRef} className="overflow-hidden opacity-0">
        <div ref={horizontalRef} className="flex horizontal-section md:w-[400%] w-[420%]">
          {projectImages.map((project) => (
            <div
              key={project.id}
              className="relative flex items-center justify-center panel"
            >
              <div className="relative flex flex-col items-center justify-center w-full h-full p-4 sm:p-8 md:p-12">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="object-cover max-w-full max-h-full project-image rounded-2xl"
                />
                <h2 className="z-50 flex items-center gap-3 mt-6 text-sm text-black transition-colors duration-300 cursor-pointer project-title md:text-3xl md:font-bold text-nowrap hover:text-gray-400"
                >
                  {project.title} <SlShareAlt />
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div ref={triggerRef} className="overflow-hidden opacity-0">
  <div
    ref={horizontalRef}
    className="flex horizontal-section"
    style={{ width: `${projectImages.length * 100}%` }}
  >
     {projectImages.map((project) => (
      <div
        key={project.id}
        className="relative flex items-center justify-center w-screen panel"
      >
        <div className="relative flex flex-col items-center justify-center w-full h-full p-4 sm:p-8 md:p-12">
          <img
            src={project.imageSrc}
            alt={project.title}
            className="object-cover max-w-full max-h-full project-image rounded-2xl"
          />
          <h2 className="z-50 flex items-center gap-3 mt-6 text-sm text-black transition-colors duration-300 cursor-pointer project-title md:text-3xl md:font-bold text-nowrap hover:text-gray-400"
          >
            {project.title} <SlShareAlt />
          </h2>
        </div>
      </div>
    ))} 

   

))}

  </div>
</div>

    </section>
  );
};

export default ProjectsSection;
