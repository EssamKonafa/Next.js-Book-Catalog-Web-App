'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import favorites, { addFavorite, removeFavorite, toggleFavorite } from '../../redux/slices/favorites';
import Loader from './Loader';
import instance from '@/axiosConfig/instance';

function Books({ book }) {

    const[loader,setLoader]=useState(true)

    const favoritesState = useSelector((state) => state.favorites)
    const dispatch = useDispatch()

    function handleAddFavorite(book) {
        if (favoritesState.favorites.includes(book)) {
            dispatch(removeFavorite(book.id))
        } else {
            dispatch(addFavorite(book))
        }
    }

    const maxLength = 20

    const cover = book.formats['image/jpeg']

    function cuttingString(string, maxLength) {
        if (string.length > maxLength) {
            return string.substring(0, maxLength)
        }
        return string
    }

    const router = useRouter()
    function navigate() {                                                                                   
        router.push(`/books/${book.id}`)
    }

    // useEffect(() => {
    //     const delay = setTimeout(()=>{
    //         setLoader(false); 
    //     },2000)                     
    //   }, []);

    return (
        <div
            className='hover:scale-110 duration-500 ease-in-out  hover:rounded-xl p-2 bg-gray-200 rounded-xl'>

            {book == [] ? (
                <div className="absolute top-40 left-96 ">
                    <Loader />
                </div>
            ) : (
                <>
                    <Image
                        src={cover}
                        width={200}
                        height={100}
                        className='rounded-xl cursor-pointer'
                        alt='book cover'
                        onClick={() => navigate(book.id)}
                    />

                    <div className='flex justify-between pt-1'>

                        <p className='font-semibold text-slate-800 text-sm ' >
                            {cuttingString(book.title, maxLength)}
                        </p>
                        <div className=''>
                            {favoritesState.favorites.includes(book) ? (
                                <div>
                                    <MdOutlineFavorite className='text-4xl cursor-pointer text-red-600 p-1 border border-red-500 rounded-3xl hover:bg-red-300' onClick={() => handleAddFavorite(book)} />
                                    <p className='text-xs  test-center'>remove</p>

                                </div>
                            ) : (
                                <div>
                                    <MdFavoriteBorder className='text-4xl cursor-pointer text-red-600 p-1 border    rounded-3xl hover:bg-red-300 border-red-500' onClick={() => handleAddFavorite(book)} />
                                    <p className='text-xs text-center '>add</p>
                                </div>
                            )}
                        </div>
                    </div>


                    {book.authors.map((author, index) => (
                        <div key={index}>
                            <p className='font-semibold text-sm text-gray-500'>
                                by {cuttingString(author.name, maxLength)}
                            </p>
                        </div>
                    ))}
                </>

            )}
        </div>

    )
}

export default Books