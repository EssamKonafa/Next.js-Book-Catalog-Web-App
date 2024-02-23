'use client'
import React, { useState } from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MdFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import favorites, { addFavorite, removeFavorite, toggleFavorite } from '../../redux/slices/favorites';

function Books({ book }) {

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

    return (
        <div
            className='hover:scale-110 duration-500 ease-in-out  hover:rounded-xl p-2 bg-slate-200 rounded-xl'
        >
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
                        <MdOutlineFavorite className='text-4xl cursor-pointer text-red-600 p-1 border rounded-3xl' onClick={() => handleAddFavorite(book)} />
                    ) : (
                        <MdFavoriteBorder className='text-4xl cursor-pointer text-red-600 p-1 border rounded-3xl ' onClick={() => handleAddFavorite(book)} />
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
        </div>
    )
}

export default Books