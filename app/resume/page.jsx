"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

import { ScrollArea } from "../components/ui/scroll-area";
import { motion } from "framer-motion";
const about = {
  title: "About Me",
  description: `I'm a Frontend Developer with a passion for creating beautiful and functional websites. I have experience in building websites using modern technologies like React, Next.js, and Tailwind CSS. I'm always eager to learn new things and improve my skills.`,
  info: [
    {
      fieldName: "Name",
      fieldValue: "Elias Silva",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+598) 99-405-940",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ years",
    },
    {
      fieldName: "Email",
      fieldValue: "eliassilva170206@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Spanish",
    },
  ],
};

const experience = {
  icon: "",
  title: "My experience",
  description:
    "I have experience in building websites using modern technologies like React, Next.js, and Tailwind CSS. I'm always eager to learn new things and improve my skills.",
  items: [
    {
      position: "Front-End Developer",
      company: "Freelancer",
      duration: "2022 - Present",
      description:
        "I have worked on several projects as a freelancer, building websites using modern technologies like React, Next.js, and Tailwind CSS.",
    },
    {
      position: "Full-Stack Developer",
      company: "Freelancer",
      duration: "2022 - 2024",
      description:
        "I have worked on projects as a freelancer, creating web applications using technologies such as Php, MySQL, JavaScript and Tailwind CSS.",
    },
  ],
};

const education = {
  title: "My education",
  description:
    "I have a high school diploma in informatics. I am currently studying Full-Stack Web Development and Computer Science at Academlo.",
  items: [
    {
      institution: "Higher Technological Institute of Paysandú",
      degree: "High school diploma in informatics.",
      duration: "2020 - 2023",
    },
    {
      institution: "Academlo",
      degree: "Full-Stack Web Development and Computer Science",
      duration: "2024 - 2025",
    },
  ],
};

const skills = {
  title: "My skills",
  description:
    "I have experience in building websites using modern technologies like React, Next.js, and Tailwind CSS. I'm always eager to learn new things and improve my skills.",
  skillsList: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    // {
    //   icon: <SiNextjs />,
    //   name: "Next.js",
    // },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[408px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[80px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[290px] py-12 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>

                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-xl ">{item.company}</p>
                        </div>
                        <span className="">{item.description}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[408px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[80px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[290px] py-12 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>

                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-xl ">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillsList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full">
              <div className="flex flex-col  gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
              </div>

              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => (
                  <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                    <p className="text-white/60">{item.fieldName}</p>
                    <p className="text-xl ">{item.fieldValue}</p>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
