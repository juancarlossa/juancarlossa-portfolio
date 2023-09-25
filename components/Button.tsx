import Link from 'next/link'

import React from 'react'

type ButtonProps = {
  label: string;
  route: string;
  className: string;
  target: string;
  index: number;
}

export default function Button({ index, label, route, className, target }: ButtonProps) {

  return (
    <>
        <Link tabIndex={index} href={route} target={target} className={className}>
          {label}
        </Link>
    </>
  )
}


