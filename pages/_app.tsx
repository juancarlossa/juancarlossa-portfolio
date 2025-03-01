import '@/styles/globals.css'
import Layout from '../components/layout'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from 'next/router'

export default function App ({ Component, pageProps }: AppProps) {
  const [idioma, setIdioma] = useState('en');
  const [darkMode, setDarkMode] = useState('dark');
  const router = useRouter()

  return (
    <>
      <Layout idioma={idioma} setIdioma={setIdioma} darkMode={darkMode} setDarkMode={setDarkMode}>
        <Component {...pageProps} idioma={idioma} setIdioma={setIdioma} darkMode={darkMode} />
      </Layout>
    </>
  )
}

