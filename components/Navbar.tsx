import Link from 'next/link'
import { useState } from 'react'
import Button from './Button'
import { useRouter } from 'next/router'
import { HiMenuAlt2 } from "react-icons/hi"
import Mode from './Mode'
import { toggle } from '@nextui-org/react'
import { motion } from "framer-motion"
import LangButtons from './LangButtons'


const variants = {
  hidden: {
    opacity: 0
  },
  visible: ({delay}:any) => ({
    opacity: 1,
    transition: {
      duration: 1,
      delay,
    }
  })
}


const links = [{
  index: 0,
  label: { 
    es: "Inicio", 
    en: "Home" ,
    pl: "Start"
  },
  route: '/'
}, {
  index: 1,
  label: { 
    es: "Proyectos", 
    en: "Projects",
    pl: "Projekty"
  },
  route: '/projects'
},{
  index: 2,
  label: { 
    es: "Sobre mí", 
    en: "Resume" ,
    pl: "O mnie"
  },
  route: '/resume'
}]

export type ModeProps = {
  idioma: string,
  darkMode: string,
  setIdioma: React.Dispatch<React.SetStateAction<string>>;
  setDarkMode: React.Dispatch<React.SetStateAction<string>>;
  toggleSidebar: () => void;
}

export default function Navbar ({ idioma, darkMode, setIdioma, setDarkMode, toggleSidebar } : ModeProps) {
  const router = useRouter();


  const toggleDarkMode = (toggleDark: string) => {
    if (darkMode == 'light') {
      setDarkMode('dark');
    } else {
      setDarkMode('light');
    }
    
  }

  const lightmode = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path></svg>
  const darkmode = <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path></svg>
  
  return (
    <header>
      <nav className={darkMode === "dark" ? 
      "flex justify-center pt-8 pb-5 bg-gray-800 transition duration-300" : 
      "flex justify-center pt-8 pb-5 bg-stone-100 transition duration-300"}>

        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <HiMenuAlt2 />
        </button>
        <div className="flex py-2 px-6">
          {links.map(({ index, label, route }) => (

          <motion.button 
            custom={{delay: (index + 1)*0.5}}
            variants={variants}
            initial='hidden'
            animate='visible'
            key={route} 
            className={darkMode==='dark' ? 'px-3 nav-links' : 'px-3 text-black nav-links'}
          >
            <Button 
              index={index}
              target=''
              key={route} 
              label={idioma === "es" ? label.es : idioma === "en" ? label.en : label.pl} 
              route={route} 
              className={
                router.pathname === route && darkMode === 'dark' ? "py-2 px-4 rounded-md bg-blue-600 transition duration-100 text-l font-semibold" :
                router.pathname !== route && darkMode === 'dark' ? "py-2 px-4 rounded-md transition duration-300 hover:text-slate-300 text-l font-semibold":
                router.pathname === route && darkMode === 'light' ? "py-2 px-4 rounded-md text-slate-500 transition duration-300 text-l font-semibold" :
                'py-2 px-4 text-slate-800 rounded-md transition duration-300 hover:text-slate-600 text-l font-semibold'
              }/>
          </motion.button>
          ))}
        </div>

          <LangButtons idioma={idioma} darkMode={darkMode} setIdioma={setIdioma} />
          <Mode className='px-4' darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      </nav>
    </header>
  )
}

 