'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { GoHome } from "react-icons/go";
import logo from '../../../public/logo.png'
import { PiSkipBack } from "react-icons/pi";
import SideBarItem from './SideBarItem';
import { MdOutlineDarkMode, MdDarkMode, MdOutlineFavorite, MdFavoriteBorder } from "react-icons/md";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCount, incrementCount } from '@/redux/slices/counter';
import { useCounter } from '@/Hooks/useCounter';

function ASide() {

  const router = useRouter()
  function navigate(path) {
    router.push(path)
  }

  const counter = useCounter()

  return (
    <>
      <nav className='ASIDE flex flex-col bg-slate-50 shadow-md p-4 rounded-3xl mt-4 ml-5 lg:w-60 xs:w-24 sticky top-16 '>
        <div className='flex items-center justify-around p-2 pb-8 pt-5'>
          <Image
            src={logo}
            width={30}
            height={30}
            alt='logo'
          />
          <p className='font-semibold text-center pl-0.5 lg:block hidden '>Book Catalog</p>
        </div>

        <ul className=''>
          <span onClick={() => navigate('/')}>
            <SideBarItem text='Home'  icon={<GoHome className=' text-4xl p-1' />} />
          </span>
          <span className='relative' onClick={() => navigate('/favorites')}>
            <p className='  pl-10 pt-3  z-10 absolute'>{counter}</p>
            <SideBarItem text='Favorites' icon={<MdFavoriteBorder className=' text-4xl p-1' />} />
          </span>
          <span onClick={() => navigate('/display')}>
            <SideBarItem text='Light mode' icon={<MdOutlineDarkMode className=' text-4xl p-1' />} />
          </span>
        </ul>
      </nav>

    </>
  )
}

export default ASide
