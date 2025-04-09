import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Personnel',
    description: 'Un portfolio moderne et réactif créé avec Next.js et Redux, présentant mes compétences et projets.',
    technologies: ['Next.js', 'Redux', 'Tailwind CSS', 'TypeScript'],
    imageUrl: '/images/projects/th.jpeg',
    githubUrl: 'https://github.com/Nourou04/portfolio',
    demoUrl: 'https://portfolio-diallo.vercel.app',
  },
  {
    id: 2,
    title: 'Système de Gestion de Bibliothèque',
    description: 'Application de gestion de bibliothèque avec authentification et gestion des emprunts',
    technologies: ['C#', '.NET', 'SQL Server', 'WPF'],
    imageUrl: '/images/projects/th 2.jpeg',
    githubUrl: 'https://github.com/Nourou04/Library-Management',
    demoUrl: '#',
  },
];

export default function Projets() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Mes Projets</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="relative h-48">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover"
                fetchPriority={project.id === 1 ? "high" : "low"}
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded"
                >
                  Code Source
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
                >
                  Voir en ligne
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
