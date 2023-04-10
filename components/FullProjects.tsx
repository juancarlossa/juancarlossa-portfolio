import React from 'react'
import FullProject from './FullProject'
import Title from './Title'
import { GoProject } from 'react-icons/go';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { IconType } from 'react-icons';
import Image from 'next/image'
import {FcTodoList} from 'react-icons/fc';
import { RiGameFill } from 'react-icons/ri';
import { BsUnity } from 'react-icons/bs';

interface Project {
  idioma: string;
  darkMode: string;
}

const portfolio1 = <Image className="" src='/projects/portfolio1.jpg' width={1920} height={1080} alt="Icon 1" />
const unityminigame = <Image className="" src='/projects/unity.jpg' width={1920} height={1080} alt="Icon 1" />
const todolist = <Image className="" src='/projects/todolist.jpg' width={1920} height={1080} alt="Icon 1" />
const unitymultiplayer = <Image className="" src='/projects/unity-multiplayer1.jpg' width={1920} height={1080} alt="Icon 1" />
const phpcrud = <Image className="" src='/projects/phpcrud.jpg' width={1920} height={1080} alt="Icon 1" />


export default function FullProjects({ idioma, darkMode }: Project){
  const projects = [
   {
    title_es: 'Mi Primer Portfolio',
    title_en: 'First Portfolio',
    title_pl: 'Pierwszy Portfolio',

    description_es: 'Pagina web estatica creada con GatsbyJS y Javascript. El objetivo fue crear un portfolio visualmente atractivo utilizando tecnologías de Frontend, estilizando los componentes con Styled Components',
    description_en: 'Static web page created with GatsbyJS and Javascript. The goal was to create a visually attractive portfolio using Frontend technologies, styling the components with Styled Components.',
    description_pl: 'Statyczna strona internetowa stworzona za pomocą GatsbyJS i Javascript. Celem było stworzenie atrakcyjnego wizualnie portfolio z wykorzystaniem technologii Frontend, stylizując komponenty za pomocą Styled Components.',

    icon: FaUser,
    img: portfolio1,
    stack1: 'JavaScript',
    stack2: 'React',
    stack3: 'GatsbyJS',
    stack4: 'Styled Components',
    stack5: '',
    route: 'https://juancarlossa.github.io/',
  },
  {    
    title_es: 'To Do List',
    title_en: 'To Do List',
    title_pl: 'To Do List',

    description_es: 'Aplicación web enfocada en el Backend, creada en JavaScript y NodeJS. La aplicación se conecta a la API de MongoDB para realizar las operaciones.',
    description_en: 'Backend focused web application, built in JavaScript and NodeJS. The application connects to the MongoDB API to perform the operations.',
    description_pl: 'Aplikacja internetowa skoncentrowana na Backendu, zbudowana w JavaScript i NodeJS. Aplikacja łączy się z interfejsem API MongoDB w celu wykonania operacji.',

    icon: FcTodoList,
    img: todolist,
    stack1: 'NodeJS',
    stack2: 'MongoDB',
    stack3: 'Axios',
    stack4: 'TailwindCSS',
    stack5: '',
    route: 'https://github.com/juancarlossa/todo-list'
  },
  {    
    title_es: 'PHP Crud',
    title_en: 'PHP Crud',
    title_pl: 'PHP Crud',

    description_es: 'CRUD básico creado en PHP y MySQL utilizando Xampp. El principal objetivo fue aprender las bases de PHP y su funcionamiento tanto en el Frontend como en el Backend.',
    description_en: 'Basic CRUD created in PHP and MySQL using Xampp. The main objective was to learn the basics of PHP and its operation both in the Frontend and in the Backend.',
    description_pl: 'Podstawowy CRUD stworzony w PHP i MySQL przy użyciu Xampp. Głównym celem było poznanie podstaw PHP i jego działania zarówno w zakresie Frontendu jak i Backendu.',

    icon: FaLock,
    img: phpcrud,
    stack1: 'PHP',
    stack2: 'MySQL',
    stack3: 'Apache',
    stack4: '',
    stack5: '',
    route: 'https://github.com/juancarlossa/PHP-CRUD'
  },
  {
    title_es: 'Unity Minijuego',
    title_en: 'Unity Minigame',
    title_pl: 'Minigra w Unity',
    
    description_es: 'Minijuego en proceso de creación en Unity, con el objetivo de aprender las bases tanto del diseño 3D como de los scripts aplicados a videojuegos.',
    description_en: 'Minigame in the process of being created in Unity, with the aim of learning the basics of both 3D design and scripts applied to videogames.',
    description_pl: 'Minigra w trakcie tworzenia w Unity, mająca na celu poznanie podstaw zarówno projektowania 3D, jak i skryptów stosowanych w grach wideo.',

    icon: RiGameFill,
    img: unityminigame,
    stack1: 'Unity',
    stack2: 'C# Scripting',
    stack3: '',
    stack4: '',
    stack5: '',
    route: '#'
  },
  {
    title_es: 'Proyecto de Juego Multijugador',
    title_en: 'Unity Multiplayer Project',
    title_pl: 'Projekt Gry Wieloosobowej',
    
    description_es: 'Proyecto creado como trabajo para la universidad. El objetivo era crear una conexión de dos jugadores en una red local utilizando Netcode. Este proyecto lo utilizo actualmente para experimentar con Assets de la comunidad de Unity.',
    description_en: 'Project created as work for the university. The goal was to create a two player connection on a local network using Netcode. I currently use this project to experiment with Unity Community Assets.',
    description_pl: 'Projekt stworzony jako praca na uczelni. Celem było stworzenie połączenia dla dwóch graczy w sieci lokalnej za pomocą Netcode. Obecnie używam tego projektu do eksperymentowania z Unity Community Assets.',
    
    icon: BsUnity,
    img: unitymultiplayer,
    stack1: 'Unity',
    stack2: 'C# Scripting',
    stack3: 'Netcode',
    stack4: '',
    stack5: '',
    route: '#'
  },
];

  return (
    <section>
      <div className='grid gap-4'>
        {projects.map((project, index) => (
          <FullProject 
            darkMode={darkMode}
            key={index} 
            title={idioma === 'es' ? project.title_es : idioma === 'en' ? project.title_en : project.title_pl}
            description={idioma === 'es' ? project.description_es : idioma === 'en' ? project.description_en : project.description_pl}
            {...project}
            />          
        ))}
      </div>
    </section>
  )
}
