'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import favorites, { addFavorite, removeFavorite, } from '../../redux/slices/favorites';
import Loader from './Loader';
import { cuttingString } from '@/Hooks/cutString';
import counter, { decrementCount, incrementCount } from '@/redux/slices/counter';

function Books({ book }) {

    //state for handling loading checking if the state carrying data or not yet and depends on it shows the loader
    const [loader, setLoader] = useState(true)

    //redux state to grip the state
    const favoritesState = useSelector((state) => state.favorites)

    //firing add / remove favorite and count 
    const dispatch = useDispatch()

    function handleAddFavorite(book) {
        if (favoritesState.favorites.includes(book)) {
            dispatch(removeFavorite(book.id))
            dispatch(decrementCount())
        } else {
            dispatch(addFavorite(book))
            dispatch(incrementCount())
        }
    }

    //length for controlling book's title length
    const maxLength = 9

    //specify the right url image from the book 
    const cover = book.formats['image/jpeg']

    //handling navigation
    const router = useRouter()
    function navigate() {
        router.push(`/books/${book.id}`)
    }

    return (
        <div
            className='hover:scale-105 border-4 border-slate-200  duration-500 ease-in-out hover:bg-slate-200 hover:rounded-xl p-2 rounded-xl'>

            {book == [] ? (
                <div className="absolute top-40 left-96 ">
                    <Loader />
                </div>
            ) : (
                <>
                    <Image
                        src={cover}
                        width={288}
                        height={100}
                        className='rounded-xl cursor-pointer'
                        alt='book cover'
                        onClick={() => navigate(book.id)}
                    />

                    <div className='flex justify-between pt-1'>

                        <p className='font-semibold text-slate-800 text-sm  cursor-pointer' onClick={() => navigate(book.id)}>
                            {cuttingString(book.title, maxLength)}
                        </p>
                        <div className=''>
                            {favoritesState.favorites.includes(book) ? (
                                <div>
                                    <MdOutlineFavorite className='text-4xl cursor-pointer text-red-600 p-1 border border-red-500 rounded-3xl hover:bg-red-300 duration-500' onClick={() => handleAddFavorite(book)} />
                                    <p className='text-xs  test-center'>remove</p>

                                </div>
                            ) : (
                                <div>
                                    <MdFavoriteBorder className='text-4xl cursor-pointer text-red-600 p-1 border    rounded-3xl hover:bg-red-300 border-red-500 duration-500' onClick={() => handleAddFavorite(book)} />
                                </div>
                            )}
                        </div>
                    </div>


                    {book.authors.map((author, index) => (
                        <div key={index}>
                            <p className='font-semibold text-sm text-gray-500 cursor-pointer' onClick={() => navigate(book.id)}>
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