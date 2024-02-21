'use client'
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { MdOutlineDarkMode, MdDarkMode, MdOutlineFavorite, MdFavoriteBorder } from "react-icons/md";

function Header() {

    const [mode, setMode] = useState(false)
    const [favorite,setFavorite]=useState(false)

    function toggleDisply() {
        setMode(!mode)
    }
    function toggleFavorite(){
        setFavorite(!favorite)
    }

    return (
        <>
            <div className='bg-slate-50 flex justify-between relative p-5 '>
                <div className="">
                    <FaSearch className='absolute ml-2 my-2 text-gray-400' />
                    <input
                        type='text'
                        placeholder='Search'
                        className='pl-8 px-2 py-1 rounded-2xl bg-slate-200 focus:outline-blue-300 border-none'
                    />
                </div>

                {/* <div className='font-semibold'>
                    <p>E-Book</p>
                </div> */}

                <div className='flex space-x-2'>
                    {mode ? (
                        <>
                        <MdDarkMode  className='border-2 rounded-3xl border-blue-200 bg-slate-100 text-4xl p-1 cursor-pointer' onClick={toggleDisply}/>
                        </>
                    ) : (
                        <>
                        <MdOutlineDarkMode className='border-2 rounded-3xl border-blue-200 bg-slate-100 text-4xl p-1 cursor-pointer' onClick={toggleDisply}/>
                        </>
                    )}
                    {favorite ? (
                        <>
                        <MdOutlineFavorite className='border-2 rounded-3xl border-blue-200 bg-slate-100 text-4xl p-1 cursor-pointer' onClick={toggleFavorite}/>
                        </>
                    ) : (
                        <>
                        <MdFavoriteBorder className='border-2 rounded-3xl border-blue-200 bg-slate-100 text-4xl p-1 cursor-pointer' onClick={toggleFavorite}/>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}

export default Header