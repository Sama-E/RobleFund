import React from 'react'

type Props = {
  name: string;
  description?:string;
  image:string;
}

const Work = ( { name, description, image } : Props) => {
  const overlayStyles = `p-5 absolute z-30 flex 
  h-[250px] w-[450px] flex-col items-center justify-center
  whitespace-normal bg-primary-500 text-center text-white
  opacity-0 transistion duration-500 hover:opacity-90`;
  return (
      <li className="relative mx-5 inline-block h-[300px] w-[450px]">
          <div className={overlayStyles}>
              <p className="text-2xl">{name}</p>
              <p className="mt-5">{description}</p>
          </div>
          <img className="h-[250px] w-[450px]" alt={`${image}`} src={image} />
      </li>
  )
}

export default Work