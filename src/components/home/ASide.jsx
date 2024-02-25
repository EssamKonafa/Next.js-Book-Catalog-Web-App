'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { GoHome } from "react-icons/go";
import logo from '../../../public/logo.png'
import SideBarItem from './SideBarItem';
import {  MdFavoriteBorder } from "react-icons/md";
import { useRouter } from 'next/navigation';
import { useCounter } from '@/Hooks/useCounter';

function ASide() {
  
  //navigation handling
  const [activeSection, setActiveSection] = useState('/')
  const router = useRouter()
  function navigate(path) {
    router.push(path)
    setActiveSection(path)
  }

  //custom hook for handling counter 
  const counter = useCounter()

  return (
    <>
      <nav className='ASIDE flex flex-col bg-slate-50 shadow-md p-4 rounded-3xl mt-4 ml-5 lg:w-60 xs:w-24 sticky top-16 '>
        <div className='flex items-center justify-around p-2 pb-8 pt-5 '>
          <Image
            src={logo}
            width={30}
            height={30}
            alt='logo'
            className='cursor-pointer'
            onClick={()=>navigate('/')}
          />
          <p className='font-semibold text-center pl-0.5 lg:block hidden cursor-pointer' onClick={()=>navigate('/')}>Book Catalog</p>
        </div>

        <ul className=''>
        <span onClick={() => navigate('/')}>
          <SideBarItem text='Home' icon={<GoHome className=' text-4xl p-1' />} active={activeSection === '/'} />
        </span>
        <span className='relative' onClick={() => navigate('/favorites')}>
          <p className='pl-10 pt-3 z-10 absolute'>{counter}</p>
          <SideBarItem text='Favorites' icon={<MdFavoriteBorder className=' text-4xl p-1' />} active={activeSection === '/favorites'} />
        </span>
      </ul>
      </nav>

    </>
  )
}

export default ASide
