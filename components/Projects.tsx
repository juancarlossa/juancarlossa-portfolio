import React from 'react'
import Project from './Project'
import Title from './Title'

import { IconType } from 'react-icons';

interface Project {
  title: string;
  description: string;
  icon: IconType;
  idioma: string;
  darkMode: string;
}

export default function Projects({ title, idioma, darkMode, icon, description} : Project) {
  const projects = [
    {
      title_es: "Frontend",
      title_en: "Frontend",
      title_pl: "Frontend",
      description_es: "Página estática creada en Typescript con React, NextJS y Tailwindcss para mostrar. El objetivo es mejorar el diseño y que sea ¨Blazing fast¨.",
      description_en: "Static page made in Typescript with React, NextJS and Tailwindcss. The goal is to improve the design and make it Blazing fast.",
      description_pl: "Statyczna strona stworzona w TypeScript z wykorzystaniem React, NextJS i Tailwindcss. Celem jest ulepszenie UX/UI i uczynienie go „Blazing fast”.",
    },
    {
      title_es: "Backend",
      title_en: "Backend",
      title_pl: "Backend",
      description_es: "Aplicación que realiza un fetching de datos al Frontend desde MongoDB. El objetivo es escalarla y añadir funcionalidades de autentificación y seguridad.",
      description_en: "Application that fetches data to the Frontend from MongoDB. The goal is to scale it and add authentication and security features.",
      description_pl: "Aplikacja pobierająca dane do Frontendu z MongoDB. Celem jest skalowanie go i dodanie funkcji uwierzytelniania i bezpieczeństwa.",
    },
  ]
  return (
    <section>
      <div className='flex flex-row py-5'>
        {<Title title= {title} icon={icon} />}
      </div>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 '>
        {projects.map((project, index) => (
          <Project 
            darkMode={darkMode}
            key={index} 
            title={idioma === 'es' ? project.title_es : project.title_en}
            description={idioma === 'es' ? project.description_es : idioma === 'en' ? project.description_en : project.description_pl}
            {...project} />
        ))}
      </div>
    </section>
  )
}
