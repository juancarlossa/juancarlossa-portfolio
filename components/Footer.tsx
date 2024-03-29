import React from 'react'
import Image from 'next/image'
import Icon from './Icon';
import Link from 'next/link';

type FooterProps = {
  darkMode: string;
}

const github = <Image className="" src="/skills/github1.svg" width={30} height={30} alt="Icon 1" />
const copy = <p className="text-sm font-bold">&copy; 2022 Juan. All rights reserved.</p>


export const Footer = ({ darkMode }:FooterProps) => {
  return (
    <footer className={darkMode === "dark" ? "bg-gray-800 text-gray-300" : "bg-stone-100 text-slate-700"}>
      <div className="max-w-screen mx-auto py-12 text-center flex flex-row items-center justify-center">
        <Link href={'https://www.linkedin.com/in/juan-carlos-saugar-186a6a1a1'} target='_blank'>
          <Image className="fill-slate-800 mx-2" src="/social-media/linkedin1.svg" width={40} height={40} alt="Icon 1" />
        </Link>
        <Link href={'https://github.com/juancarlossa'} target='_blank'>
          <Image className="text-slate-700 mx-2" src="/social-media/github1.svg" width={30} height={30} alt="Icon 1" />
        </Link>
        <Link href={'mailto:juank987610@gmail.com'} target='_blank'>
          <Image className="rounded mx-2 ml-4" src="/social-media/email1.svg" width={30} height={30} alt="Icon 1" />
        </Link>
        <a href="#" className="text-gray-400 hover:text-gray-300">
        </a>
        <a href="#" className="ml-6 text-gray-400 hover:text-gray-300">
          <span className="sr-only">Twitter</span>
        </a>
      </div>
    </footer>
  )
}
