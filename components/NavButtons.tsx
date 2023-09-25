import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'

export type ModeProps = {
  idioma: string,
  darkMode: string,
}

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

export default function NavButtons({ idioma, darkMode} :ModeProps) {
  const router = useRouter();
  return (
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
  )
}
