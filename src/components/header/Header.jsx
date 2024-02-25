'use client'
import { useCounter } from '@/Hooks/useCounter';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { FaSearch } from "react-icons/fa";
import {  MdFavoriteBorder } from "react-icons/md";
import Loader from '../home/Loader';
import { cuttingString } from '@/Hooks/cutString';

function Header() {

    //custom hook for handling counter 
    const counter = useCounter()

    //navigation handing
    const router = useRouter()
    function go() {
        router.push('/favorites')
    }
    function bookDetails(id) {
        router.push(`/books/${id}`)
    }

    //search handling
    //state for holding the key words what the user searching for
    const [searchKeyWord, setSearchKeyWord] = useState('')

    // state for holding the book array with matching key word what the user searching for
    const [searchResult, setSearchResult] = useState([])

    //state for handling loading checking if the state carrying data or not yet and depends on it shows the loader
    const [loader, setLoader] = useState(false)

    //creating a reference for specific element
    const resultDivRef = useRef(null)

    //event listener when user start typing
    function handleSearchChange(event) {
        setSearchKeyWord(event.target.value)
    }

    //handling search functionality and setting the response in the state Server-Side Rendering to show it and handling errors
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

    //length for controlling book's title length
    const maxLength = 20

    //passing function to useEffect hook to rendering data after mounting the component
    useEffect(() => {
        if (searchKeyWord.length > 1) {
            searchHandling([])
        }
        //handling closing of the div search after the user clicking outside it any place on the document
        const handleCloseResultDiv = (event) => {
            if (resultDivRef.current && !resultDivRef.current.contains(event.target)) {
                setSearchResult([])
            }
        }
        document.body.addEventListener('click', handleCloseResultDiv);

        return () => {
            document.body.removeEventListener('click', handleCloseResultDiv);
        };

    }, [searchKeyWord])

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

                                                {cuttingString(result.title, maxLength)}
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
                    <>
                        <MdFavoriteBorder className='border-2 rounded-3xl border-blue-200 bg-slate-100 text-4xl p-1 cursor-pointer duration-500 hover:bg-slate-300' onClick={go} />
                        {counter}
                    </>
                </div>
            </div>
        </>
    )
}

export default Header