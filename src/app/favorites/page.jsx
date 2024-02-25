'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import img from '../../../public/cover.jpg'
import { MdOutlineFavorite } from "react-icons/md";
import ASide from '@/components/home/ASide';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { addFavorite, removeFavorite } from '@/redux/slices/favorites';
import { cuttingString } from '@/Hooks/cutString';
import { useCounter } from '@/Hooks/useCounter';
import { decrementCount } from '@/redux/slices/counter';

function page() {

  const counter = useCounter()

  const favoritesState = useSelector((state) => state.favorites)

  const [favoriteBooks, setFavoriteBooks] = useState([])

  useEffect(() => {
    setFavoriteBooks(favoritesState.favorites)
  }, [favoritesState.favorites])

  const dispatch = useDispatch()
  function handleRemoveFavorite(book) {
    dispatch(removeFavorite(book.id))
    dispatch(decrementCount())
  }

  const router = useRouter()
  function navigate(id) {
    router.push(`books/${id}`)
  }

  const maxLength = 13

  return (
    <>
      <div className='flex'>

        <div className='rounded-3xl bg-slate-50 m-5 p-5 shadow-md' >

          <p className='text-center font-bold text-xl pb-5'>
            Favorite Books : {counter}
          </p>
          <div className='grid xl:grid-cols-6 gap-5  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2' >

            {favoritesState.favorites.length === 0 ? (
              <h1 className='h-full'>
                no favorite books added yet...
              </h1>
            ) : (
              <>

                {favoriteBooks.map((favoriteBook) => (
                  <div className=' hover:rounded-xl p-2 bg-slate-50 border-4 border-slate-200 hover:bg-slate-200 duration-500   rounded-xl' key={favoriteBook.id}>
                    <div className=''>
                      <div className=' ' onClick={() => navigate(favoriteBook.id)}>

                        <Image
                          src={favoriteBook.formats['image/jpeg']}
                          width={200}
                          height={50}
                          alt='book cover'
                          className='rounded-md cursor-pointer'
                        />
                      </div>
                    </div>

                    <p className='text-center pt-2 flex justify-between'>

                      {cuttingString(favoriteBook.title, maxLength)}
                      <div className='pb-2 '>
                        <MdOutlineFavorite className='text-4xl cursor-pointer text-red-600 p-1 border border-red-500 hover:bg-red-300 rounded-3xl duration-500' onClick={() => handleRemoveFavorite(favoriteBook)} />
                        <p className='text-xs  text-center'>remove</p>
                      </div>
                    </p>

                  </div>
                ))}
              </>
            )}


          </div>
        </div>
      </div>
    </>
  )
}

export default page