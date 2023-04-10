import React from 'react'

type ProjectProps = {
  title: string;
  description: string;
  darkMode: string;
}

export default function Project({ title, description, darkMode }: ProjectProps) {
  const projects = []
  return (
    <div>
      <div className={darkMode==='dark' ? 
      'border border-white-500 px-5 p-5 pb-10 px-5 rounded-md' : 
      'border border-stone-500 px-5 p-5 pb-10 px-5 rounded-md'}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

