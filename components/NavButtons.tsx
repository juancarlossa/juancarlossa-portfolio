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
  var animationDelay = 0.5;
  
  return (
    <div className="flex py-2 px-6">
      {links.map(({ index, label, route }) => (

      <motion.button 
        id='li'
        custom={{delay: (index + 1) * animationDelay}}
        variants={variants}
        initial='hidden'
        animate='visible'
        key={route} 
        className={darkMode==='dark' ? 'px-3 nav-links' : 'px-3 text-black nav-links'}
      >
          <div
            id='menu-backdrop'
            className={`
            absolute bg-slate-200 backdrop-blur-lg rounded 
            left-[var(--left)] top-[var(--top)]
            w-[var(--width)] h-[var(--height)]
            transition-all duration-300
            ease-in-out
            `}
          />

        <Button 
          id='button'
          index={index}
          target=''
          key={route} 
          label={idioma === "es" ? label.es : idioma === "en" ? label.en : label.pl} 
          route={route} 
          className={
            router.pathname === route && darkMode === 'dark' ? "relative py-2 px-4 rounded-md  transition duration-100 hover:text-slate-800 text-l font-semibold" :
            router.pathname !== route && darkMode === 'dark' ? "relative py-2 px-4 rounded-md transition duration-300 hover:text-slate-800 text-l font-semibold":
            router.pathname === route && darkMode === 'light' ? "relative py-2 px-4 rounded-md text-slate-500 transition duration-300 text-l font-semibold" :
            'relative py-2 px-4 text-slate-800 rounded-md transition duration-300 hover:text-slate-600 text-l font-semibold'
          }/>
      </motion.button>
      ))}

    </div>
  )
}

  //ADD MOUSE FOLLOWING BOX - Div que se mueve con el raton
  if (typeof document !== 'undefined') {
    const listItem = document.querySelectorAll("#button")
    const menuBackDrop = document.querySelector("#menu-backdrop") as HTMLElement
    const span = document.querySelector('#span') as HTMLElement

    listItem.forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const { left, top, width, height } = item.getBoundingClientRect()

        menuBackDrop.style.setProperty("--left", `${left}px`)
        menuBackDrop.style.setProperty("--top", `${top}px`)
        menuBackDrop.style.setProperty("--width", `${width}px`)
        menuBackDrop.style.setProperty("--height", `${height}px`)

        menuBackDrop.style.opacity = "1"
        menuBackDrop.style.visibility = "visible"

        //span.className = "hidden"
      })

      item.addEventListener("mouseleave", () => {
        menuBackDrop.style.opacity = "0"
        menuBackDrop.style.visibility = "hidden"

        span.className = "absolute left-0 top-full block h-[1px] w-full bg-slate-300"
      })
    })
  }