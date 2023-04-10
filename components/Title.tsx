import React from 'react'
import { IconType } from 'react-icons';
import Icon from './Icon';


type TitleProps = {
  title?: string;
  icon: IconType;
}

export default function Title({ title, icon }: TitleProps) {
  return (
    <div className='flex flex-row py-10'>
      <Icon icon={icon} />
      <h2 className='text-4xl font-bold'>{ title }</h2>
    </div>
  )
}
