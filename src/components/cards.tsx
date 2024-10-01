import { Globe } from 'lucide-react'
import React, { ReactNode } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'

interface Props{
    icon: ReactNode
    title: string
    description: string
}

interface WorkProps{
    image: StaticImageData
    title: string
    button: string
}

const Cards: React.FC<Props> = ({icon, title, description}) => {
  return (
    <div className='bg-white p-6 flex flex-col gap-2 rounded-lg w-80'>
        <div className='h-10 w-10 rounded-md flex flex-col justify-center items-center bg-pink-100'>
            {icon}
        </div>
        <h3 className='font-bold text-gray-800 text-xs'>{title}</h3>
        <p className='text-gray-400 text-xs'>{description}</p>

        
    </div>
  )
}


const WorkCards: React.FC<WorkProps> = ({image, title, button}) => {
    return (
      <div className='bg-slate-100 p-2 flex flex-col gap-2 rounded-lg w-96'>
          <div className=' flex flex-col justify-center items-center mb-2'>
              <Image src={image} alt='work'/>
          </div>
          <div className='flex justify-between items-center'>
          <h3 className='font-bold text-gray-800 text-xs'>{title}</h3>
          <Link href={button}><Button className='bg-transparent shadow-none px-1  text-xs text-black ring-1 ring-black'>View Work</Button></Link>
          </div>
          
      </div>
    )
  }

export {Cards, WorkCards}