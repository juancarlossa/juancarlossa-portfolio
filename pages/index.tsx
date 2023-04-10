import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import  Projects  from '@/components/Projects'
import { GoProject } from 'react-icons/go';
import Title from '@/components/Title'
import {BsImages} from 'react-icons/bs';

const inter = Inter({ subsets: ['latin'] })

type LanguageProps = {
  idioma: string;
  darkMode: string;
}

export default function Home({ idioma, darkMode } : LanguageProps) {
  return (
    <>
      <h1 className={darkMode === 'dark' ? 
        'text-center pb-5 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-emerald-500 font-extrabold text-2xl md:text-6xl' :
        'text-center pb-5 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 font-extrabold text-2xl md:text-6xl' }>
        
        {idioma === 'es' ? 'Hola, soy Juan Carlos Saugar' : 
        idioma === 'en' ? 'Hello, my name is Juan' 
        : 'Witam, jestem Juan'}
      </h1>
      <p className='pt-5'>{
        idioma === 'es' ? 'Siéntete cómodo de navegar por mis proyectos de programación y 3D, también puedes encontrar información sobre mí. Si te gusta lo que ves no dudes en contactarme!' 
      : idioma === 'en' ? 'Feel free to browse my programming and 3D projects, you can also find information about me. If you like what you see, dont hesitate to contact me!'
      : 'Zapraszam do przeglądania moich projektów programistycznych i 3D, można tam również znaleźć informacje o mnie. Jeśli podoba Ci się to, co widzisz, nie wahaj się ze mną skontaktować!'}
      </p>
      <Projects 
        title={
          idioma === 'es' ? 'Proyectos principales' : 
          idioma === 'en' ? 'Main projects' : 
          'Projekty główne'} 
          idioma={idioma} darkMode={darkMode} description='description' icon={GoProject} />
      
      <Title icon={BsImages} 
        title={
          idioma === 'es' ? 'Otros proyectos' : 
          idioma === 'en' ? 'Other projects' : 
          'Inne projekty'} />
      <p className='pb-10 px-5'>
        { idioma === 'es' ? 'Te presento algunos de mis proyectos que estoy creando en Unity. Estos son algunos de los trabajos en los que he trabajado en el ultimo año' : 
          idioma === 'en' ? 'I present to you some of my projects that I am creating in Unity. These are some of the jobs I have worked in the last year' : 
          'Tu przedstawiam kilka moich projektów, które tworzę w Unity. To niektóre z prac, które wykonywałem w ciągu ostatniego roku'}
      </p>
      <div className='grid grid-cols-2 gap-4'>
        <Image className="" src='/projects/unity.jpg' width={1920} height={1080} alt="Icon 1" />
        <Image className="" src='/projects/unity-multiplayer1.jpg' width={1920} height={1080} alt="Icon 1" />
      </div>
    </>
  )
}
