'use client'
import { Facebook, Instagram, Linkedin, Menu, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'




const NavBar = () => {

    const [navDisplay, changeDisplay] = useState("none")
    

  return (
    <>
    
    <div className=' lg:p-10 items-center grid grid-cols-12 lg:sticky top-0 z-50 lg:backdrop-blur-3xl max-lg:hidden'>
        <div className='col-span-5'>
            <ul className='lg:flex gap-5 text-indigo-900 font-semibold'>
                <Link href={"#"}><li>Home</li></Link>
                <Link href={"#About-us"}><li>About Us</li></Link>
                <Link href={"#What-we-do"}><li>Services</li></Link>
                <Link href={"#Contact-us"}><li>Contact Us</li></Link>
            </ul>
        </div>

        <div className='col-span-4 text-center'>
            <h1 className='text-3xl font-extrabold text-indigo-900'>Dream Agency</h1>
        </div>
            
        <div className='col-span-3 flex justify-end gap-5 '>
            <Facebook  className='text-indigo-950 hover:scale-110' />
            <Linkedin  className='text-indigo-950 hover:scale-110'/>
            <Instagram  className='text-indigo-950 hover:scale-110'/>
        </div>
    </div>



                    {/* Mobile Nav Bar */}
        <MaxWidthWrapper>
            <div className='flex lg:hidden justify-between pt-10'>
                <h1 className='text-3xl font-bold text-indigo-900'>Dream Agency</h1>
                <Menu className='cursor-pointer hover:scale-110' size={"35px"} onClick={()=>changeDisplay('flex')}/>
            </div>
        </MaxWidthWrapper>
        

    <div className='p-10 items-center fixed w-6/12 h-full flex flex-col just gap-y-16 top-0 right-0 z-50 backdrop-blur-3xl' style={{display: navDisplay}}>

        <div className=''>
            <X color="#000000" size={"35px"} className='cursor-pointer' onClick={()=>changeDisplay('none')}/>
        </div>

        <div className='flex flex-col text-center'>
            <ul className='flex flex-col gap-y-10 text-indigo-900 text-xl font-semibold'>
                <Link href={"#"}><li>Home</li></Link>
                <Link href={"#About-us"}><li>About Us</li></Link>
                <Link href={"#What-we-do"}><li>Services</li></Link>
                <Link href={"#Contact-us"}><li>Contact Us</li></Link>
            </ul>
        </div>

        
            
        <div className='flex justify-center gap-5'>
            <Facebook color="#1a0252" fill='#1a0252'/>
            <Linkedin color="#1a0252" fill='#1a0252'/>
            <Instagram color="#1a0252"/>
        </div>
    </div>


    </>
  )
}

export default NavBar