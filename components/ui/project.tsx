import React from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  link: string;
  date: string;
  image: string;
}

const projects: Project[] = [
  {
    title: 'Prospera',
    description: 'Career Counselling Website',
    link: 'https://prospera-psi.vercel.app/',
    date: '2024-2025',
    image: '/images/logo.webp',
  },
  {
    title: 'WeCare',
    description: 'Clinic Website',
    link: 'https://wecarephysiotherapy.com/',
    date: '2024-2025',
    image: '/images/wecare.webp',
  },
  {
    title: 'Ventes E-Commerce',
    description: 'E-commerce platform for digital products',
    link: 'https://ventesinfotech-wqb5.vercel.app/',
    date: '2024-2025',
    image: '/images/uploadify.png',
  },
  {
    title: 'Satoshi Farm Telegram Game',
    description: 'Telegram Game for CryptoCommerce',
    link: 'https://t.me/SATOSHI_FARMS_BOT/Satoshi_Farms?startapp=5474783563',
    date: '2024-2025',
    image: '/images/ecomify.png',
  },
];

const ProjectsSection: React.FC = () => {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold mb-5">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          
            href={project.link},
            target="_blank",
            rel="noopener noreferrer",
            key={index}. // Use the index as the key
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <p className="text-gray-500 text-sm">{project.date}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;