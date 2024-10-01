import { Minus, Quote } from 'lucide-react'
import React from 'react'

const TestimonialCards = () => {
  return (
    <div className='p-9 bg-white flex flex-col gap-y-3  shadow-sm shadow-slate-100'>
        <Quote color="#f2a807" className='size-12' />
        <p className='text-indigo-900 text-xs lg:text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi aspernatur ea dolorum atque, facere sed mollitia odit aperiam quasi amet rem quidem distinctio repudiandae cupiditate velit beatae error incidunt a.</p>
        <div className=' font-bold flex items-center text-indigo-900'>
            <Minus color="#f2a807" />
            <h4>UI Soup</h4>
            
            </div>
    </div>
  )
}

export default TestimonialCards