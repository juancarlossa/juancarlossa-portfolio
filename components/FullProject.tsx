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
      <div className="flex gap-5">
        <Link className="w-2/5" href={route} target="_blank" >{img}</Link> 
        <div className="w-2/3 flex flex-col justify-between">
          <p>{description}</p>
          <div className="flex justify-between items-center">
            <div>
              <Stack name={stack1} />
              <Stack name={stack2} />
              <Stack name={stack3} />
              <Stack name={stack4} />
              <Stack name={stack5} />
            </div>
            <Button target="_blank" label='Link' route={route} 
            className={darkMode === 'dark' ?
              'py-2 px-4 rounded-md border border-white hover:bg-black transition-colors duration-200 text-l font-semibold' 
            : 'py-2 px-4 rounded-md border border-stone-500 hover:bg-white transition-colors duration-200 text-l font-semibold'
            }/>
          </div>
        </div>
      </div>
    </>
  )
}