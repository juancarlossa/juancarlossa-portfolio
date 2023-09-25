import React from 'react'
import { motion } from 'framer-motion'

  const active_lang = 'bg-slate-600 hover:bg-slate-700 rounded px-2 py-1 font-semibold text-base'
  const unactive_lang = 'rounded px-2 py-1 font-semibold text-base'
  const active_light = 'bg-slate-200 rounded px-2 py-1 font-semibold text-base'
  const unactive_light = 'rounded px-2 py-1 font-semibold text-base'

type LanguageProps = {
  idioma: string,
  darkMode: string,
  setIdioma: React.Dispatch<React.SetStateAction<string>>;
}



export default function NavLangButtons({ idioma, darkMode, setIdioma } : LanguageProps) {
  const cambiarIdioma = (nuevoIdioma: string) => {
    setIdioma(nuevoIdioma);
  }
  return (
    <>
        <motion.button
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mx-1 text-white" onClick={() => cambiarIdioma('es')}>
          <div className={
            idioma === 'es' && darkMode=== 'dark' ? active_lang :
            idioma !== 'es' && darkMode=== 'dark' ? unactive_lang :
            idioma === 'es' && darkMode=== 'light' ? active_light :
            unactive_light
            }>
            <p className={darkMode==='dark' ? 'text-base' : 'text-base text-stone-800'}>ES</p></div> 
        </motion.button>

        <motion.button
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mx-1 text-white" onClick={() => cambiarIdioma('en')}>
          <div className={
            idioma === 'en' && darkMode=== 'dark' ? active_lang :
            idioma !== 'en' && darkMode=== 'dark' ? unactive_lang :
            idioma === 'en' && darkMode=== 'light' ? active_light :
            unactive_light
            }>
            <p className={darkMode==='dark' ? 'text-base' : 'text-base text-stone-800'}>EN</p></div> 
        </motion.button>

        <motion.button
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="mx-1 text-white" onClick={() => cambiarIdioma('pl')}>
          <div className={
            idioma === 'pl' && darkMode=== 'dark' ? active_lang :
            idioma !== 'pl' && darkMode=== 'dark' ? unactive_lang :
            idioma === 'pl' && darkMode=== 'light' ? active_light :
            unactive_light
            }>
            <p className={darkMode==='dark' ? 'text-base' : 'text-base text-stone-800'}>PL</p>
          </div> 
        </motion.button>
    </>
  )
}
