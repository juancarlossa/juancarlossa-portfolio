import React from 'react'
import Image from 'next/image'

interface SkillIcon {
  name: string;
  icon?: React.ReactElement;
  className?: string;
}

interface Skill {
  title: string,
  icons: SkillIcon[];
}
//FRONTEND
const js = <Image src="/skills/js.svg" width={50} height={50} alt="Icon 1" />;
const typescript = <Image src="/skills/typescript.svg" width={50} height={50} alt="Icon 1" />;
const react = <Image src="/skills/react.svg" width={50} height={50} alt="Icon 2" />;
const nextjs = <Image src="/skills/nextjs.svg" width={50} height={50} alt="Icon 2" />;
const tailwind = <Image src="/skills/tailwind.svg" width={50} height={50} alt="Icon 2" />;
const html = <Image src="/skills/html.svg" width={50} height={50} alt="Icon 2" />;
const css = <Image src="/skills/css.svg" width={50} height={50} alt="Icon 2" />;
const gatsby = <Image src="/skills/gatsby.svg" width={50} height={50} alt="Icon 2" />;

//BACKEND
const nodejs = <Image src="/skills/nodejs.svg" width={50} height={50} alt="Icon 1" />
const express = <Image src="/skills/express.svg" width={50} height={50} alt="Icon 1" />
const mongodb = <Image src="/skills/mongodb.svg" width={50} height={50} alt="Icon 1" />
const mysql = <Image src="/skills/mysql.svg" width={50} height={50} alt="Icon 1" />
const apache = <Image src="/skills/apache.svg" width={50} height={50} alt="Icon 1" />
const php = <Image src="/skills/php.svg" width={50} height={50} alt="Icon 1" />
//3D
const unity = <Image src="/skills/unity.svg" width={50} height={50} alt="Icon 1" />
const blender = <Image src="/skills/blender.svg" width={50} height={50} alt="Icon 1" />

//DESIGN
const photoshop = <Image src="/skills/photoshop.svg" width={50} height={50} alt="Icon 1" />
const illustrator = <Image src="/skills/illustrator.svg" width={50} height={50} alt="Icon 1" />
const lightroom = <Image src="/skills/lightroom.svg" width={50} height={50} alt="Icon 1" />
const xd = <Image src="/skills/xd.svg" width={50} height={50} alt="Icon 1" />

//OTHER
const csharp = <Image src="/skills/csharp.svg" width={50} height={50} alt="Icon 1" />
const python = <Image src="/skills/python.svg" width={50} height={50} alt="Icon 1" />
const java = <Image src="/skills/java.svg" width={50} height={50} alt="Icon 1" />
const bash = <Image src="/skills/bash.svg" width={50} height={50} alt="Icon 1" />


//TOOLS
const vscode = <Image src="/skills/vscode.svg" width={50} height={50} alt="Icon 1" />
const hyper = <Image src="/skills/hyper.svg" width={50} height={50} alt="Icon 1" />
const github = <Image src="/skills/github.svg" width={50} height={50} alt="Icon 1" />



export default function Skills() {
  const skills: Skill[] = [
    {title: 'Frontend', icons: [
      {name: 'JavaScript', icon: js}, 
      {name: 'TypeScript', icon: typescript},
      {name: 'React', icon: react},
      {name: 'NextJS', icon: nextjs},
      {name: 'GatsbyJS', icon: gatsby},
      {name: 'HTML', icon: html, className: 'ml-1'},
      {name: 'CSS', icon: css},
      {name: 'TailwindCSS', icon: tailwind},
    ],},

    {title: 'Backend', icons: [
      {name: 'NodeJS', icon: nodejs}, 
      {name: 'Express', icon: express},
      {name: 'MongoDB', icon: mongodb},
      {name: 'PHP', icon: php},
      {name: 'Apache', icon: apache},
      {name: 'MySQL', icon: mysql},
    ],},

    {title: '3D Softwares', icons: [
      {name: 'Unity', icon: unity}, 
      {name: 'Blender', icon: blender},
    ],},

    {title: 'Design', icons: [
      {name: 'Photoshop', icon: photoshop}, 
      {name: 'Illustrator', icon: illustrator},
      {name: 'Lightrooms', icon: lightroom},
      {name: 'AdobeXD', icon: xd},
    ],},

    {title: 'Learning', icons: [
      {name: 'C#', icon: csharp}, 
      {name: 'Python Scripting', icon: python},
      {name: 'Java', icon: java},
      {name: 'Bash', icon: bash},
    ],},

    {title: 'Tools', icons: [
      {name: 'VSCode', icon: vscode}, 
      {name: 'Hyper Terminal', icon: hyper},
      {name: 'Github', icon: github},
    ],},
    
  ]
  return (
    <div className='grid grid-cols-2 gap-5'>
      
      {skills.map((skill, index) => (
        <div key={index} className='border border-stone-500 w-92 px-5 py-5 rounded-md'>
          <h3 className='border-b border-stone-400 pb-3'>{skill.title}</h3>
          <div className='flex flex-wrap pt-10 pb-7 mx-2 gap-5'>

            {skill.icons.map((icon, index) => (
              <div key={index} className='flex flex-col items-center'>
                  <div className={icon.className}>{icon.icon}</div>
                  <span className='mt-3'>{icon.name}</span>
              </div>

            ))}
          </div>
        </div>

      ))}
    </div>
  )
}

