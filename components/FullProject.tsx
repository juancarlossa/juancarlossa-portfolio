import React from 'react'
import Title from './Title'
import { IconType } from 'react-icons';
import Image from 'next/image';
import Stack from './Stack';
import Button from './Button';
import Link from 'next/link';

type ProjectProps = {
  darkMode: string;
  title: string;
  description: string;
  icon: IconType;
  img: React.ReactElement;
  stack1: string,
  stack2: string,
  stack3: string,
  stack4: string,
  stack5: string,
  route: string,
}

export default function FullProject({darkMode, title, description, icon, img, stack1, stack2, stack3, stack4, stack5 , route, }: ProjectProps) {
  return (
    <>
      <Title title={title} icon={icon} />
      <div className="sm:flex sm:gap-5 ">
        <Link className="
        sm:w-3/3 sm:mb-5 
        md:w-3/3 
        lg:w-2/5 lg:mb-0
        " 
        href={route} target="_blank" >{img}</Link> 
        <div className="
        sm:w-3/3 
        md:w-3/3 
        lg:w-2/3 
        flex flex-col justify-between">
          <p className='py-5 lg:py-0'>{description}</p>
          <div className="lg:flex lg:justify-between lg:items-center">
            <div>
              <Stack name={stack1} />
              <Stack name={stack2} />
              <Stack name={stack3} />
              <Stack name={stack4} />
              <Stack name={stack5} />
            </div>
            <Button target="_blank" label='Link' route={route} 
            className={darkMode === 'dark' ?
              'flex justify-center items-center mt-2 py-2 px-4 rounded-md border border-white hover:bg-black transition-colors duration-200 text-l font-semibold' 
            : 'flex justify-center items-center mt-2 py-2 px-4 rounded-md border border-stone-500 hover:bg-white transition-colors duration-200 text-l font-semibold'
            }/>
          </div>
        </div>
      </div>
    </>
  )
}