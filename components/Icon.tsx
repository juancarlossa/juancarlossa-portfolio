import React from 'react';
import { IconType } from 'react-icons';

interface IconProps {
  icon: IconType;
  color?: string;
  size?: string;
  className?: string;
}

export default function Icon({ icon: Icon, className='mt-2 mr-5', size = '24px' }: IconProps) {
  return <Icon className={className} size={size} />;
}
