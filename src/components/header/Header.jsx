'use client'
import { useCounter } from '@/Hooks/useCounter';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { MdOutlineDarkMode, MdDarkMode, MdOutlineFavorite, MdFavoriteBorder } from "react-icons/md";
import Loader from '../home/Loader';
import { cuttingString } from '@/Hooks/cutString';

function Header() {

    const counter = useCounter()

    const router = useRouter()
    function go() {
        router.push('/favorites')
    }
    function bookDetails(id) {
        router.push(`/books/${id}`)
    }

    const [mode, setMode] = useState(false)
    const [favorite, setFavorite] = useState(false)

    //search handling
    //states of search
    const [searchKeyWord, setSearchKeyWord] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [loader, setLoader] = useState(false)
    const resultDivRef= useRef(null)

    function handleSearchChange(event) {
        setSearchKeyWord(event.target.value)
    }

    const searchHandling = async () => {
        try {
            setLoader(true)
            const response = await fetch(`https://gutendex.com/books/?search=${searchKeyWord}`)
            const result = await response.json()
            setSearchResult(result.results)
        } catch (error) {
            console.error(error);
        } finally {
            setLoader(false)
        }
    }

    const maxLength=20

    useEffect(() => {
        if (searchKeyWord.length > 1) {
            searchHandling([])
        }
        const handleCloseResultDiv=(event)=>{
            if(resultDivRef.current && !resultDivRef.current.contains(event.target)){
                setSearchResult([])
            }
        }
        document.body.addEventListener('click', handleCloseResultDiv);

        return () => {
            document.body.removeEventListener('click', handleCloseResultDiv);
        };
        
    }, [searchKeyWord])

    // function toggleDisply() {
    //     setMode(!mode)
    // }
    // function toggleFavorite() { 
    //     setFavorite(!favorite)
    // }

    return (
        <>
            <div className='bg-slate-50 flex justify-between p-3 shadow-sm sticky top-0 z-10  '>
                <div className="relative">
                    <FaSearch className='absolute ml-2 my-2 text-gray-400' />
                    <input
                        type='text'
                        placeholder='Search'
                        className='pl-8 px-2 py-1 rounded-2xl bg-slate-200 focus:outline-blue-300 border-none '
                        onChange={handleSearchChange}
                        value={searchKeyWord}
                    />
                    {searchKeyWord.length > 0 && (
                        <div ref={resultDivRef} className='absolute w-full bg-slate-50 p-2 rounded-xl '>
                            {loader ? (
                                <div className='size-5 '>
                                    <Loader />
                                </div>
                            ) : (
                                searchResult.slice(0, 3).map((result) => (

                                    <div key={result.id} className='pt-2'>
                                        <div className='flex p-2 gap-2 items-center cursor-pointer border-2 rounded-lg hover:bg-slate-200 duration-500' onClick={() => bookDetails(result.id)}>

                                            <Image
                                                src={result.formats['image/jpeg']}
                                                width={30}
                                                height={10}
                                                alt='cover book'
                                            />

                                            <p>
                                                
                                                {cuttingString(result.title,maxLength)}
                                            </p>

                                        </div>
                                    </div>
                                ))
                            )}

                        </div>
                    )}
                </div>

                <div className='font-bold text-center text-xl items-center'>
                    <p>Book Catalog</p>
                </div>

                <div className='flex space-x-2' >
                    <MdOutlineDarkMode className='border-2 rounded-3xl border-blue-200 bg-slate-100 text-4xl p-1 cursor-pointer duration-500 hover:bg-slate-300' />
                    <>
                    <MdFavoriteBorder className='border-2 rounded-3xl border-blue-200 bg-slate-100 text-4xl p-1 cursor-pointer duration-500 hover:bg-slate-300' onClick={go}/>
                        {counter}
                    </>
                    {/* {mode ? (
                        <>
                        </>
                    ) : (
                        <>
                            <MdOutlineDarkMode className='border-2 rounded-3xl border-blue-200 bg-slate-100 text-4xl p-1 cursor-pointer' onClick={toggleDisply} />
                        </>
                    )}
                    {favorite ? (
                        <>
                            {counter}
                        </>
                    ) : (
                        <>
                            <MdFavoriteBorder className='border-2 rounded-3xl border-blue-200 bg-slate-100 text-4xl p-1 cursor-pointer' onClick={toggleFavorite} />
                            {counter}
                        </>
                    )} */}
                </div>
            </div>
        </>
    )
}

export default Header