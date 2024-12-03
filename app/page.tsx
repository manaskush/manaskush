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

const videos = [
  {
    title:
      "Build and Deploy Full Stack SaaS Product Hunt Clone + Admin Dashboard: Next js, React, Stripe (2024)",
    url: "https://www.youtube.com/watch?v=LHF_rcA35P8&t=1135s",
    description:
      "Comprehensive video course on building a full stack SaaS product with Next JS, React, Stripe and Tailwind CSS",
    image: "/images/product-hunt.png",
    technologies: [
      {
        title: "Auth Js",
        image: "/images/auth.webp",
      },
      {
        title: "React",
        image: "/images/ts.jpg",
      },

      {
        title: "Next Js",
        image: "/images/next.png",
      },
      {
        title: "Tailwind",
        image: "/images/tailwind.png",
      },
      {
        title: "React",
        image: "/images/react.png",
      },
      {
        title: "Vercel",
        image: "/images/vercel.svg",
      },
      {
        title: "Stripe",
        image: "/images/stripe.png",
      },
    ],
  },
  {
    title:
      "Loom Website Clone + Contact Form : Next.js 14, React, TailwindCSS, NodeMailer",
    url: "https://www.youtube.com/watch?v=Rkw9d7Il6X4&t=107s",

    description:
      "Join me in this hands-on journey to replicate the elegance of Loom's design with the latest web technologies",
    image: "/images/loom.jpg",
    technologies: [
      {
        title: "Typescript",
        image: "/images/ts.jpg",
      },

      {
        title: "Next Js",
        image: "/images/next.png",
      },
      {
        title: "Tailwind",
        image: "/images/tailwind.png",
      },
      {
        title: "Vercel",
        image: "/images/vercel.svg",
      },
    ],
  },
  {
    title:
      "Asana Website Clone + Contact Form : Next.js 14, React, Tailwind, Framer Motion",
    url: "https://www.youtube.com/watch?v=1I_mXozC1K4&t=21s",
    description:
      "Create your own Asana-inspired website using the latest web development technologies!",
    image: "/images/asana.jpg",
    technologies: [
      {
        title: "Typescript",
        image: "/images/ts.jpg",
      },

      {
        title: "Next Js",
        image: "/images/next.png",
      },
      {
        title: "Tailwind",
        image: "/images/tailwind.png",
      },
      {
        title: "Vercel",
        image: "/images/vercel.svg",
      },
      {
        title: "Framer Motion",
        image: "/images/framer-motion.webp",
      },
    ],
  },
  {
    title:
      "Create a Digital Marketing Agency Website: Next JS, TailwindCSS, Stripe (2024)",
    url: "https://www.youtube.com/watch?v=uyi44-SNcEc&t=1s",
    description:
      "Step-by-step guide to building your own Modern Digital Marketing Agency Website using Next JS, TailwindCSS, and Stripe integration",
    image: "/images/digital-marketing-agency.webp",
    technologies: [
      {
        title: "Typescript",
        image: "/images/ts.jpg",
      },

      {
        title: "Next Js",
        image: "/images/next.png",
      },
      {
        title: "Tailwind",
        image: "/images/tailwind.png",
      },
      {
        title: "Vercel",
        image: "/images/vercel.svg",
      },
    ],
  },
  {
    title: "Notion Landing Page: Next.js, Tailwind CSS, and Framer Motion!",
    url: "https://www.youtube.com/watch?v=azPXfa9aHm8&t=450s",
    description:
      "Dive into the world of web development by building a Fully Responsive Notion Landing Page Website with Next.js, Tailwind CSS, and Framer Motion!",
    image: "/images/notion.jpg",
    technologies: [
      {
        title: "Typescript",
        image: "/images/ts.jpg",
      },

      {
        title: "Next Js",
        image: "/images/next.png",
      },
      {
        title: "Tailwind",
        image: "/images/tailwind.png",
      },
      {
        title: "Vercel",
        image: "/images/vercel.svg",
      },
      {
        title: "Framer Motion",
        image: "/images/framer-motion.webp",
      },
    ],
  },
];

const projects = [
  {
    title: "Prospera",
    description: "Career Counselling Website",
    link:"https://prospera-psi.vercel.app/",
    date: "2024-2025",
    image: "/images/logo.webp",
  },
  {
    title: "WeCare",
    description: "Clinic Website",
    link:"https://wecarephysiotherapy.com/",
    date: "2024-2025",
    image: "/images/wecare.webp",
  },

  {
    title: "Ventes E-Commerce",
    description: "E-commerce platform for digital products",
    link:"https://prospera-psi.vercel.app/",
    date: "2024-2025",
    image: "/images/wecare.webp",
  },
  {
    title: "Satoshi Farm Telegram Game",
    description: "Telegram Game for CryptoCommerce",
    link:"https://t.me/SATOSHI_FARMS_BOT/Satoshi_Farms?startapp=5474783563",
    date: "2024-2025",
    image: "/images/ecomify.png",
  },
];

const experience = [
  {
  title: "Full Stack Developer | Intern",
  description: "MysticGrafix",
  date: "Sept 2024 - Today",
  image: "/images/mysticgrafix.jpg",
},
{
  title: "Software Engineer | Intern",
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
    description: "95% Marks",
    date: "2020",
    image: "/images/ami.png",
  },
];


const navbar = [
  {
    title: "Videos",
    link: "videos",
  },
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
];




export default function Home() {

  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);
  const phoneNumber=8534982098;

  useMotionValueEvent(scrollY, 'change', (y) => {
    const difference = y - lastYRef.current;
    if (Math.abs(difference) > 50) {
      setIsHidden(difference > 0);
      lastYRef.current = y;
    }
  })



  return (
    <div>
      <motion.div
      initial={{ y:0, opacity:0 }}
      animate={{ y:0, opacity:10 }}
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
              className='border px-4 py-3 rounded-xl text-center flex
               items-center justify-center
                cursor-pointer hover:bg-gray-100'>
                {item.title}
                </ScrollLink>
            ))}

            <Dialog>
              <DialogTrigger className="border px-4 py-3 rounded-xl 
              text-center flex items-center justify-center
               cursor-pointer hover:bg-gray-50">Contact</DialogTrigger>
              <DialogContent>
                <InlineWidget url="https://calendly.com/birdsoftware/15min" />
              </DialogContent>
            </Dialog>   

          </div>

        </motion.div>



        <div className="md:w-3/5 mx-auto px-6 md:px-0 pb-20 ">
          <div className="pt-10 justify-end items-center flex underline md:hidden">
            <Dialog>
              <DialogTrigger>Contact</DialogTrigger>
              <DialogContent>
                <InlineWidget url="https://calendly.com/birdsoftware/15min" />
              </DialogContent>
            </Dialog>
          </div>

          <div className="md:flex md:gap-x-10 items-center md:pt-28">
            <Image
              src={"/images/manas.jpg"}
              alt="Igor"
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
                I have a{" "}
                <LinkPreview
                  url="https://www.youtube.com/@manaskush4529"
                  className="font-bold text-rose-500 underline"
                >
                  <PiYoutubeLogoFill className="h-6 w-6 inline text-red-500" />
                  <span className="ml-1">YouTube channel</span>
                </LinkPreview>{" "}
                where I share my knowledge and experience with the community.
              </p>

              <p className="text-muted-foreground text-lg ">
                Feel free to reach out to me on{" "}
                <LinkPreview
                  url="https://discord.gg"
                  className="font-bold"
                >
                  <PiDiscordLogoFill className="h-6 w-6 inline text-indigo-500" />{" "}
                  <span className="text-indigo-500 underline ">Discord</span>
                </LinkPreview>{" "}
                I am always happy to help.
              </p>
            </div>
          </div>
          <Element name="resume" className="mt-10 resume   center-on-phone">
            <a href="https://drive.google.com/file/d/1ilo2yAErvclwL3EEbs1HX8hBSYEHIWgO/view?usp=sharing" className="text-xl  resumei rounded-xl p-4  bg-slate-400 pt-15 font-semibold">
            Resume
            </a>
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
          name="projects"
          
          >
            <h2 className="text-xl pt-10 font-semibold">Projects</h2>
            <div className="grid grid-cols-2 gap-4 mt-5">
              {projects.map((project) => (
                <a
                  href={project.link}
                  key={project.title}
                  className="border rounded-xl p-4 bg-white"
                >
                  <div className="md:flex items-center justify-between">
                    <div className="md:flex items-center gap-x-4">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={100}
                        height={100}
                        className="rounded-md w-16 h-16"
                      />

                      <div className="flex flex-col ">
                        <h2 className="text-md font-semibold ">
                          {project.title}
                        </h2>
                        <p className="text-muted-foreground text-sm">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mt-2 md:mt-0">
                      {project.date}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </Element>

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
        </div>
      </motion.div>
    </div>
  );
}
