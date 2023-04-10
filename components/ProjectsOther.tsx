import React from 'react'
import Project from './Project'
import Title from './Title'
import { BsImages } from 'react-icons/bs'

type ProjectProps = {

  darkMode: string;
}

export const ProjectsOther = ({darkMode}:ProjectProps) => {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Description 1"
    },
    {
      title: "Proyecto 2",
      description: "Description 2"
    }
  ]
  return (
    <section>
      <div className='flex flex-row py-10'>
        <Title title= "Projects" icon={BsImages} />
      </div>
      <div className='grid grid-cols-2 gap-4'>
        {projects.map(({ title, description }) => (
          <Project darkMode={darkMode} key={title} title={title} description={description} />
        ))}
      </div>
    </section>
  )
}