"use client";

import Image from "next/image";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { InlineWidget } from "react-calendly";
import { Typewriter } from "react-simple-typewriter";
import { LinkPreview } from "@/components/ui/link-preview";
import { PiDiscordLogoFill, PiYoutubeLogoFill } from "react-icons/pi";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import IconCloud from "@/components/ui/icon-cloud";
import HireFreelancer from "@/components/ui/hireme";
import ContactMe from "@/components/ui/hireme";
import { DockDemo } from "@/components/demos/dock-demo";
import { cn } from "@/lib/utils";
import ShinyButton from "@/components/ui/shiny-button";
import { BackgroundLinesDemo } from "@/components/demos/background-lines-demo";
import { Iphone15ProDemo } from "@/components/demos/iphone-15-pro-demo";
import { FaReact, FaCss3Alt, FaHtml5, FaJsSquare, FaCss3,} from "react-icons/fa";
import { DiJsBadge,DiNodejs } from "react-icons/di";
import { SiNextdotjs , SiTypescript,SiExpress,SiFramer } from "react-icons/si";


const projects = [
  {
    title: "Prospera",
    description: "Career Counselling Website",
    link: "https://prospera-psi.vercel.app/",
    date: "2024",
    image: "/images/prosperas.png",
    techStack: ["FaReact", "DiJsSquare", "SiNextdotjs", "FaCss3Alt","SiTypescript"], // Use tech names
  },
  {
    title: "WeCare",
    description: "Clinic Website",
    link: "https://wecarephysiotherapy.com/",
    date: "2024",
    image: "/images/wecares.png",
    techStack: ["SiNextdotjs","FaReact", "FaCss3Alt","DiJsSquare", "SiFramer"],
  },
  {
    title: "Ventes E-Commerce",
    description: "E-commerce platform for digital products",
    link: "https://ventesinfotech-wqb5.vercel.app/",
    date: "2024",
    image: "/images/ventess.png",
    techStack: ["SiNextdotjs","FaReact", "SiFramer", "FaCss3Alt","DiJsSquare","SiExpress"],
  },
  {
    title: "Refokuss Clone",
    description: "React + Tailwind CSS project",
    link: "https://refokus-clone-one.vercel.app/",
    date: "2022",
    image: "/images/refokuss.png",
    techStack: ["FaReact", "FaTailwindcss","DiJsSquare","SiFramer"],
  },
];

const telgramurl="https://t.me/SATOSHI_FARMS_BOT/Satoshi_Farms?startapp=5474783563"
const experience = [
  {
  title: "Full Stack Developer | Full-Time ",
  description: "MysticGrafix",
  date: "Sept 2024 - Today",
  image: "/images/mysticgrafix.jpg",
},
{
  title: "Software Engineer | Intern | Part-Time",
  description: "MyFurries",
  date: "October 2024 - Today",
  image: "/images/myfurries.jpg",
},
{
  title: "Senior Technical Associate ",
  description: "M.L.S.A.",
  date: "September 2024 - Today",
  image: "/images/mlsa.jpg",
},
 
];

const education = [
  {
    title: "Bachelor of Technology, Computer Science Engineering",
    description: "Meerut Institute of Engineering and Technology",
    date: "2022-2026",
    image: "/images/miet.jpg",
  },
  {
    title: "XIIth Board Exam",
    description: "95% Marks in PCM+",
    date: "2022",
    image: "/images/ami.png",
  },
  {
    title: "Xth Board Exam",
    description: "94% Marks",
    date: "2020",
    image: "/images/ami.png",
  },
];

const skills =  [
  {
    title: 'Programming Languages',
    description: "JavaScript, TypeScript, Python, Java, C++,  PHP, C",
  },
  {
    title: 'Web Technologies',
    description: "React, Next.js, Svelte, Node.js, Express, Redux",
  },
  // {
  //   title: 'Mobile Development',
  //   description: "Kotlin, React Native, Flutter, Expo",
  // },
  {
    title: 'Cloud & DevOps',
    description: "AWS, Google Cloud, Docker, Kubernetes, GitHub",
  },
  {
    title: 'Databases',
    description: "MongoDB, PostgreSQL, MySQL, Redis, MariaDB",
  },
  // {
  //   title: 'Frontend Frameworks & Libraries',
  //   description: "Redux, Tailwind CSS, Bootstrap, Material-UI, Chakra-UI",
  // },
  // {
  //   title: 'Backend & Serverless',
  //   description: "Laravel, FastAPI, Firebase, Supabase, Vercel",
  // },
  {
    title: 'Data Science & ML',
    description: "Jupyter, NumPy, Pandas",
  },
  {
    title: 'Other Tools & Technologies',
    description: "Git, npm, Yarn, VSCode, Postman, Figma, Linux, macOS, Windows",
  },
];


const navbar = [
  {
    title: "Projects",
    link: "projects",
  },
  {
    title: "Work Experience",
    link: "work",
  },
  {
    title: "Education",
    link: "education",
  },
  {
    title: "Skills",
    link: "skills",
  },
  {
    title: "Socials",
    link: "socials",
  },
];

const icons = [
  // Programming Languages
  'javascript', 'typescript', 'python', 'java', 'cpp', 'php', 'c',
  
  // Web Technologies
  'react', 'nextdotjs',  'svelte', 'nodejs', 'express', 
  // Mobile Development
  // 'kotlin', 'reactnative', 'flutter','expo', 
  
  // Cloud & DevOps
  'amazonaws', 'googlecloud', 'docker', 'kubernetes',  'github', 
  
  // Databases
  'mongodb', 'postgresql', 'mysql', 'redis', 'mariadb', 
  
  // Frontend Frameworks & Libraries
  'redux', 'tailwindcss', 'bootstrap', 'materialui', 'chakraui', 
  
  // Backend & Serverless
   'laravel', 'fastapi', 'firebase', 'supabase',  'vercel',
  
  // // Data Science & ML
  // 'tensorflow', 'pytorch', 'jupyter', 'numpy', 'pandas', 'scikit-learn', 'keras', 'opencv',
  
    // Data Science & ML
    'jupyter', 'numpy', 'pandas', 
  
  // Other Tools & Technologies
  'git', 'npm', 'vscode', 'visualstudiocode', 'postman', 'figma', 'linux', 'macos', 'windows'
]



export default function Home() {

  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  const phoneNumber=8534982098;
  const iconMapping: { [key in "FaReact" | "FaCss3Alt" | "FaHtml5" | "FaJsSquare"  | "DiJsSquare" | "SiNextdotjs" | "SiTypescript"|"SiExpress"| "SiFramer" ]: JSX.Element } = {
    FaReact: <FaReact className="text-blue-500 w-6 h-6" />,
    FaCss3Alt: <FaCss3Alt className="text-blue-500 w-6 h-6" />,
    FaHtml5: <FaHtml5 className="text-orange-500 w-6 h-6" />,
    FaJsSquare: <FaJsSquare className="text-yellow-500 w-6 h-6" />,
    DiJsSquare: <DiJsBadge className="text-yellow-500 w-6 h-6" />,
    SiNextdotjs: <SiNextdotjs className="text-black w-6 h-6" />,
    SiTypescript: <SiTypescript className="text-blue-600 w-6 h-6" />, // Added SiTypescript
    SiExpress:   <SiExpress className="text-brown-800 w-6 h-6" />,
    SiFramer:   <SiFramer className="text-green-600 w-6 h-6" />, // Added SiFramer
  };
  useMotionValueEvent(scrollY, 'change', (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  })

  const handleSubmit = (email: string) => {
    // Handle the email submission, e.g., send it to a backend API
    console.log('Submitted email:', email);
  };


  return (
    <div>
      <motion.div
       initial={{ y: 0, opacity: 0 }}
       animate={{ y: 0, opacity: 10 }}
       transition={{ duration: 2 }}
       className="min-h-screen w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]
     [background-size:16px_16px] 
     [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_70%,transparent_100%)]"
      >

        <motion.div
        animate={isHidden ? 'hidden' : 'visible'} 
        whileHover='visible'
        onFocusCapture={() => setIsHidden(false)}
        variants={{
          hidden : {
            y: '-90%'
          },
          visible : {
            y: '0%'
          }
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 z-10 md:flex w-full justify-center pt-3 hidden"
        >
          <div className="flex bg-white gap-x-4 p-4 items-center rounded-xl">
            {navbar.map((item) => (
              <ScrollLink
              key={item.title}
              to={item.link}
              smooth={true}
              duration={500}
              className={cn(
                "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        
                // before styles
                "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",
        
                // light mode colors
                "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        
                // dark mode colors
                "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        
              )}>
                {item.title}
                </ScrollLink>
            ))}

            
            {/* <Dialog>
              <DialogTrigger className="border px-4 py-3 rounded-xl 
              text-center flex items-center justify-center
               cursor-pointer hover:bg-gray-50">About Me</DialogTrigger>
              <DialogContent>
              <div className="md:flex md:gap-x-10 items-center ">
            <Image
              src={"/images/manas.jpg"}
              alt="Manas"
              width={10000}
              height={10000}
              className="rounded-xl w-40 mt-4 profile"
            />

            <div className="space-y-2">
            <motion.div
              style={{
                paddingRight: "15px",
                display: "inline-block",
              }}
              animate={{ rotate: [0, 20, 0] }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0,
              }}
              className="text-4xl  my-4  "
            >
              👋
            </motion.div>

              <h1 className="text-xl lg:text-4xl font-semibold">
                <Typewriter
                  words={["Hi, I am Manas Kush !! I build things for the web."]}
                  cursor
                />
              </h1>

              <p className="text-muted-foreground text-lg md:pr-8">
            A passionate innovator and problem-solver who thrives on turning ideas into impactful solutions. With creativity, determination, and a drive to excel, I aim to make a difference in every project I take on. Let&apos;s create something amazing together! 🌟</p>
              <p className="text-muted-foreground text-lg ">
                Feel free to reach out to me on{" "}
                <LinkPreview
                  url="https://discord.gg/WgfqpPRn"
                  className="font-bold"
                >
                  <PiDiscordLogoFill className="h-6 w-6 inline text-indigo-500" />{" "}
                  <span className="text-indigo-500 underline ">Discord</span>
                </LinkPreview>{" "}
                I am always happy to help.
              </p>
            </div>
          </div>
              </DialogContent>
            </Dialog>    */}

          </div>

        </motion.div>



        <div className="md:w-3/5 mx-auto px-6  md:px-0 pb-20 ">
         
         
         
        {/* <div className="pt-10 justify-end items-center flex underline md:hidden">
  <Dialog>
    <DialogTrigger className="cursor-pointer pt-10  underline md:hidden text-center flex items-center justify-center rounded-xl border-0 px-8 py-2 font-medium bg-[length:200%] hover:bg-gray-50 transition-colors">
      About Me
    </DialogTrigger>
    <DialogContent>
      <p className="text-muted-foreground text-lg md:pr-8">
        A passionate innovator and problem-solver who thrives on turning ideas into impactful solutions. With creativity, determination, and a drive to excel, I aim to make a difference in every project I take on. Let&apos;s create something amazing together! 🌟
      </p>
    </DialogContent>
  </Dialog>
</div> */}

          <BackgroundLinesDemo/>
          
          
          
          
          <Dialog>
  
  <DialogTrigger className="hidden text-slate-600 md:flex border px-6 py-2 text-xl transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/10%)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)] font-medium rounded-xl text-center  items-center justify-center cursor-pointer hover:bg-gray-50">
    ABOUT ME
  </DialogTrigger>
  <DialogContent>
    <div className="hidden md:flex md:gap-x-10 items-center">
      <Image
        src={"/images/manas.jpg"}
        alt="Manas"
        width={10000}
        height={10000}
        className="rounded-xl w-40 mt-4 profile"
      />

      <div className="space-y-2">
        <motion.div
          style={{
            paddingRight: "15px",
            display: "inline-block",
          }}
          animate={{ rotate: [0, 20, 0] }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0,
          }}
          className="text-4xl my-4"
        >
          👋
        </motion.div>

        <h1 className="text-xl lg:text-4xl font-semibold">
          <Typewriter words={["Hi, I am Manas Kush !! I build things for the web."]} cursor />
        </h1>

        <p className="text-muted-foreground text-lg md:pr-8">
          A passionate innovator and problem-solver who thrives on turning ideas into impactful solutions. With creativity, determination, and a drive to excel, I aim to make a difference in every project I take on. Let&apos;s create something amazing together! 🌟
        </p>
        <p className="text-muted-foreground text-lg">
          Feel free to reach out to me on{" "}
          <LinkPreview url="https://discord.gg/WgfqpPRn" className="font-bold">
            <PiDiscordLogoFill className="h-6 w-6 inline text-indigo-500" />{" "}
            <span className="text-indigo-500 underline">Discord</span>
          </LinkPreview>{" "}
          I am always happy to help.
        </p>
      </div>
    </div>
  </DialogContent>
</Dialog>








            <div className="block md:hidden">   
         

          <div className="md:flex md:gap-x-10 items-center md:pt-28">
           

            <div className="space-y-2">
            <motion.div
              style={{
                paddingRight: "15px",
                display: "inline-block",
              }}
              animate={{ rotate: [0, 20, 0] }}
              transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0,
              }}
              className="text-4xl  my-4  "
            >
              👋
            </motion.div>

              <h1 className="text-xl lg:text-4xl font-semibold">
                <Typewriter
                  words={["Hi, I am Manas Kush !! I build things for the web."]}
                  cursor
                />
              </h1>

              <p className="text-muted-foreground text-lg md:pr-8">
            A passionate innovator and problem-solver who thrives on turning ideas into impactful solutions. With creativity, determination, and a drive to excel, I aim to make a difference in every project I take on. Let&apos;s create something amazing together! 🌟</p>
              <p className="text-muted-foreground text-lg ">
                Feel free to reach out to me on{" "}
                <LinkPreview
                  url="https://discord.gg/WgfqpPRn"
                  className="font-bold"
                >
                  <PiDiscordLogoFill className="h-6 w-6 inline text-indigo-500" />{" "}
                  <span className="text-indigo-500 underline ">Discord</span>
                </LinkPreview>{" "}
                I am always happy to help.
              </p>
            </div>
            <Image
              src={"/images/manas.jpg"}
              alt="Manas"
              width={10000}
              height={10000}
              className="rounded-xl w-40 mt-4 z-150 profile"
            />
          </div>
          </div>
          <Element name="resume" className="mt-10 resume  bg-white center-on-phone">
            <ShinyButton>
            <div  className="text-xl  resumei rounded-xl  pt-15 font-semibold">
            View My Resume
            </div>
            </ShinyButton>
          </Element>
          
         
          

          {/* <Element
          
          name="videos"
          >
            <h2 className="text-xl pt-10 font-semibold">Videos</h2>
            {videos.map((video) => (
              <div
                key={video.title}
                className="my-4"
                onClick={() => window.open(video.url)}
              >
                <div
                  className="md:flex md:gap-x-10 
            cursor-pointer 
            items-center 
            border 
            rounded-2xl p-4 bg-white"
                >
                  <Image
                    src={video.image}
                    alt={video.title}
                    width={1000}
                    height={1000}
                    className="rounded-md w-full md:w-1/5"
                  />

                  <div className="flex flex-col space-y-2">
                    <h2 className="text-md font-semibold mt-4 md:mt-0">
                      {video.title}
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      {video.description}
                    </p>

                    <div className="flex gap-x-2">
                      {video.technologies.map((technology) => (
                        <div
                          key={technology.title}
                          className="flex items-center"
                        >
                          <Image
                            src={technology.image}
                            alt={technology.title}
                            width={10000}
                            height={10000}
                            className="w-8"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Element> */}

<Element
          name="work"
          
          >
            <h2 className="text-xl pt-10 font-semibold">Work Experience</h2>
            {experience.map((item) => (
              <div key={item.title} className="my-4">
                <div
                  className="
               md:flex justify-between 
              cursor-pointer items-center 
              border rounded-2xl p-4
              bg-white
              "
                >
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="
                   rounded-md
                     w-20
                      p-2
              "
                    />

                    <div className="">
                      <h2 className="text-md font-semibold mt-4 md:mt-0">
                        {item.title}
                      </h2>
                      <p className="text-muted-foreground ">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="text-muted-foreground text-sm mt-4 md:mt-0">
                      {" "}
                      {item.date}{" "}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Element>

          <Element name="projects">
  <h2 className="text-2xl font-semibold mb-8">Featured Projects</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
    {projects.map((project) => (
      <a
        href={project.link}
        key={project.title}
        className="border border-gray-300 rounded-xl p-4 bg-white hover:bg-gray-50 transition-all duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex flex-col items-center">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={500}
            className="rounded-md mb-4 border transform transition-transform duration-300 hover:scale-105"
          />
          <h3 className="text-lg font-semibold mb-2 text-center">{project.title}</h3>
          <p className="text-sm text-gray-600 text-center">{project.description}</p>

          {/* Display Tech Stack Icons */}
          <div className="flex justify-center gap-3 mt-4">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="inline-block w-8 h-8 rounded-full  items-center justify-center"
              >
                {/* Dynamically render the icons */}
                {iconMapping[tech as keyof typeof iconMapping]}
              </span>
            ))}
          </div>
        </div>
      </a>
    ))}
  </div>
</Element>





<Element name="iphone">
<a href="https://t.me/SATOSHI_FARMS_BOT/Satoshi_Farms?startapp=5474783563"><Iphone15ProDemo/></a>
          </Element>


          <Element name="skillheader">
            <h1  className="text-xl pt-10 font-semibold justify-center ">Skill Globe</h1>
          </Element>

          <Element name="skills" className="mt-10 skills   center-on-phone">
            <IconCloud iconSlugs={icons}/>
          </Element>

          <h2 className="text-3xl pt-10 font-bold text-gray-800 mb-6">Skills</h2>
<div className="space-y-8">
  {skills.map((skill) => (
    <div
      key={skill.title}
      className="rounded-xl border border-gray-200 shadow-md p-6 bg-gradient-to-br from-white to-gray-50 hover:shadow-lg transition-all"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold text-gray-700">{skill.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {skill.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>




          <Element
          name="education"
          >
            <h2 className="text-xl pt-10 font-semibold">Education</h2>
            {education.map((item) => (
              <div key={item.title} className="my-4">
                <div
                  className="
               md:flex justify-between 
              cursor-pointer items-center border rounded-2xl p-4
              bg-white
              
              "
                >
                  <div className="flex items-center gap-x-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="
                   rounded-md
                     w-20
                    
              "
                    />

                    <div className="">
                      <h2 className="te  xt-md font-semibold mt-4 md:mt-0">
                        {item.title}
                      </h2>
                      <p className="text-muted-foreground ">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="text-muted-foreground text-sm mt-4 md:mt-0">
                      {" "}
                      {item.date}{" "}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Element>
          <Element className="mt-10 hireme" name="hireme">
            
            <ContactMe/>
          </Element>
          <Element name="socials">
  <div className="relative flex h-[250px] w-full flex-col items-center justify-center overflow-hidden">
    <span className="connect pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
      Connect on Socials
    </span>
    <DockDemo />
  </div>
</Element>

        </div>
      </motion.div>
    </div>
  );
}
