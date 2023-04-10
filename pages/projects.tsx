import Head from 'next/head'
import FullProjects from "@/components/FullProjects";
import styles from '@/styles/Home.module.css'
import { IconType } from 'react-icons';

type LanguageProps = {
  idioma: string;
  darkMode: string;
}

export default function Projects({ idioma, darkMode}: LanguageProps) {
    return (
    <>
      <FullProjects darkMode={darkMode} idioma={idioma} />
    </>
  )
}