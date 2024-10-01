import React from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Image from 'next/image'
import work from "@/../public/images/work.png"

const Footer = () => {
  return (
    <div className='bg-black text-white py-20'>
        <MaxWidthWrapper>
            <section className='grid lg:gap-12 max-lg:gap-y-20 grid-cols-4'>
                <div className='flex flex-col col-span-2 max-lg:col-span-4 gap-5'>
                    <h2 className='text-2xl max-sm:text-2xl font-extrabold'>Dream Agency</h2>
                    <p className='text-xs'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore tempore dolorum aperiam explicabo maiores voluptates ea, velit necessitatibus quasi, aliquam amet cupiditate ipsa rem nobis. Provident id perspiciatis ullam ea.</p>


                    <div className='flex flex-col gap-4'>
                        <h3>GET IN TOUCH</h3>
                        <div className="flex w-full h-12 items-center space-x-2 ring-1 ring-white">
                            <Input className='rounded-none text-white border-none' type="email" placeholder="ENTER YOUR EMAIL" />
                            <Button type="submit" className='bg-white w-4/12 h-12 rounded-none text-black'>SEND</Button>
                        </div>
                    </div>
                </div>

                <div className='col-span-2 max-lg:col-span-4'>
                    <Image src={work} className='w-full' alt='map' />
                </div>
            </section>
        </MaxWidthWrapper>
    </div>
  )
}

export default Footer