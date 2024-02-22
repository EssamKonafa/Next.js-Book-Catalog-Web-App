'use client'
import Image from 'next/image';
import React from 'react'
import { GoHome } from "react-icons/go";
import logo from '../../../public/logo.png'
import { PiSkipBack } from "react-icons/pi";
import SideBarItem from './SideBarItem';
import { MdOutlineDarkMode, MdDarkMode, MdOutlineFavorite, MdFavoriteBorder } from "react-icons/md";

function ASide() {
  return (
    <>
      <nav className='flex flex-col bg-slate-50 shadow-md p-4 pr-7 pl-7'>
        <div className='flex items-center justify-around p-2 pb-5'>
          <Image
            src={logo}
            width={50}
            height={50}
            alt='logo'
          />
          <p className='font-bold pl-2'>Book Catalog</p>
        </div>

        <ul className=''>
          <SideBarItem text='Home' active icon={<GoHome className=' text-4xl p-1' />} />
          <SideBarItem text='Favorites' icon={<MdFavoriteBorder className=' text-4xl p-1' />} />
          <SideBarItem text='Display' icon={<MdOutlineDarkMode className=' text-4xl p-1' />} />
        </ul>
      </nav>
    </>
  )
}

export default ASide