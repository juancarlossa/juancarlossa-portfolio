import React from 'react'

interface Props {
  name: string;
}

export default function Stack ({ name } : Props) {
  return (
    <span className={`mb-2 lg:mb-0 inline-block bg-amber-600 text-white rounded-md capitalize text-xs tracking-wide font-medium p-2 mr-3 ${name === "" && "hidden"} hover:bg-amber-200 hover:text-stone-700 transition duration-300`}>
      {name}
    </span>
  )
}
