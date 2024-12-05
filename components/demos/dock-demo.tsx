import React from "react";
import Link from "next/link";
import { HomeIcon, PencilIcon, GithubIcon, LinkedinIcon, MailIcon, XIcon, XCircleIcon, TwitterIcon } from "lucide-react";
import {
    IconBrandX,
  } from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "../ui/dock";

const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#", icon: PencilIcon, label: "Blog" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/manaskush",
        icon: GithubIcon,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/manas-kush/",
        icon: LinkedinIcon,
      },
      email: {
        name: "Send Email",
        url: `mailto:${'manas.kush.work@gmail.com'}?subject=${encodeURIComponent('Project Inquiry')}&body=${encodeURIComponent('Hello, I would like to discuss a project with you.')}`,
        icon: MailIcon,
      },
      X: {
        name: "X",
        url: "https://x.com/Manas_Kush",
        icon: IconBrandX,
      },
    },
  },
};

export function DockDemo() {
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg  ">
        
      <Dock direction="middle">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Link 
              href={item.href} 
              className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100"
            >
              <item.icon className="w-6 h-6" />
            </Link>
          </DockIcon>
        ))}
        
        {Object.entries(DATA.contact.social).map(([name, social]) => (
          <DockIcon key={name}>
            <Link 
              href={social.url} 
              className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100"
            >
              <social.icon className="w-6 h-6" />
            </Link>
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}