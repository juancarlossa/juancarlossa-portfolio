import '@/styles/globals.css'
import Layout from '../components/layout'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { I18nextProvider } from "react-i18next";

export default function App({ Component, pageProps }: AppProps) {
  const [idioma, setIdioma] = useState('en');
  const [darkMode, setDarkMode] = useState('dark');

  return (
    <Layout idioma={idioma} setIdioma={setIdioma} darkMode={darkMode} setDarkMode={setDarkMode}>
      <Component {...pageProps} idioma={idioma} setIdioma={setIdioma} darkMode={darkMode}/>
    </Layout>
  )
}

