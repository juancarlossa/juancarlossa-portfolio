import Head from 'next/head'
import Title from "@/components/Title";
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { IconType } from "react-icons";
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
import Stack from '@/components/Stack';
import Button from '@/components/Button';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { IoLogoHtml5 } from 'react-icons/io';
import { AiOutlineApartment } from 'react-icons/ai';
import { BsPersonLinesFill } from 'react-icons/bs';
import Image from 'next/image';
import Skills from '@/components/Skills';

type LanguageProps = {
  idioma: string;
  darkMode: string;
}


export default function Resume({idioma, darkMode}: LanguageProps) {
  const content = [
    {
      title1_es: 'Sobre mí',
      title1_en: 'About me',
      title1_pl: 'O mnie',

      title2_es: 'Habilidades',
      title2_en: 'Skills',
      title2_pl: 'Umiejętności',
    },
    {
      description_es: 'Me considero una persona con mucha pasión por lo que hace. Mi objetivo en mi carrera profesional es seguir formándome hasta llegar al punto de formar mi propia comunidad, hacer divulgación tecnológica y ayudar a la gente que está empezando a disfrutar más su camino de aprendizaje.',
      description_en: 'I consider myself a person with a lot of passion for what he does. My goal in my professional career is to continue training until I reach the point of forming my own community, spreading technology and helping people who are beginning to enjoy their learning path more.',
      description_pl: 'Uważam się za osobę z dużą pasją do tego, co robi. Moim celem w karierze zawodowej jest kontynuowanie szkolenia, aż dojdę do momentu, w którym stworzę własną społeczność, rozpowszechniając technologię i pomagając ludziom, którzy zaczynają czerpać większą radość ze swojej ścieżki edukacyjnej.',
    },
  ]

  const AboutMe = () => {

  }
  return (
    <>
      <Title title={idioma === 'es' ? content[0].title1_es : idioma === 'en' ? content[0].title1_en : content[0].title1_pl} icon={FaUser} />
      <div className='flex items-center w-full'>
        <div className='w-3/4 pr-10'>
          <p >
            {idioma === 'es' ? content[1].description_es : idioma === 'en' ? content[1].description_en : content[1].description_pl}
          </p>
          <button className='py-10'>
            <Button target="_blank" label={'Resume'} route='../CV.pdf' 
            className={darkMode === 'dark' ?
              'py-2 px-4 rounded-md border border-white hover:bg-black transition-colors duration-200 text-l font-semibold' 
            : 'py-2 px-4 rounded-md border border-stone-500 hover:bg-white transition-colors duration-200 text-l font-semibold'
            } />
          </button>
        </div>
        <div className='m-auto'>
          <Image
            src='/headerImg.png'
            width={250}
            height={250}
            alt="About me image"
            className="h-full w-full rounded-full"
          />
        </div>
      </div>
      <Title title={idioma === 'es' ? content[0].title2_es : idioma === 'en' ? content[0].title2_en : content[0].title2_pl} icon={AiOutlineApartment} />
      <Skills />
    </>
  )
}