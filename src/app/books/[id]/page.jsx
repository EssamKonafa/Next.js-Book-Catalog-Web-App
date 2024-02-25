'use client'
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { MdOutlineFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '@/redux/slices/favorites';
import Loader from '@/components/home/Loader';
import { useCounter } from '@/Hooks/useCounter';
import { decrementCount, incrementCount } from '@/redux/slices/counter';

function page() {

  //custom hook for handling counter 
  const counter = useCounter()

    //state for handling loading checking if the state carrying data or not yet and depends on it shows the loader
    const [loader, setLoader] = useState(true)

  //grabbing the book id
  const params = useParams()
  const id = params.id

  //state for handling showing details for specific book
  const [bookDetails, setBookDetails] = useState({})

    //speaking to API and setting the response in state with try and handling errors with catch and setting with Server-Side Rendering
    const getBookDetails = async () => {
    try {
      const response = await fetch(`https://gutendex.com/books/${id}`)
      const details = await response.json()
      setBookDetails(details)
    } catch (error) {
      console.error(error);
    } finally {
      setLoader(false)
    }
  }

    //passing function getBookDetails to useEffect hook to rendering data after mounting and rendering the component
    useEffect(() => {
    getBookDetails()
  }, [])

  //handling navigate
  const router = useRouter()
  function back() {
    router.push('/')
  }

  //specify the right url image from the book 
  const bookCover = bookDetails.formats && bookDetails.formats['image/jpeg'];

  //specify authors array from the state
  const authors = bookDetails.authors || []

  //redux state and dispatching actions
  const favoritesState = useSelector((state) => state.favorites)

  //dispatching add / remove favorite and counter
  const dispatch = useDispatch()

  function handleAddFavorite(book) {
    if (favoritesState.favorites.includes(book)) {
      dispatch(removeFavorite(book.id))
      dispatch(decrementCount())
    }
    else {
      dispatch(addFavorite(book))
      dispatch(incrementCount())
    }
  }

  return (
    <div className='relative flex'>

      <button className='absolute top-0 left-28 rounded-3xl bg-slate-400 font-bold m-2 p-4 duration-500 hover:bg-slate-500'
        onClick={back}
      >
        <GrLinkPrevious />
      </button>

      {loader ? (
        (
          <div className="absolute top-40 left-96 ">
            <Loader />
          </div>
        )
      ) : (

        <div className='p-4 grid  xl:grid-cols-2 lg:grid-flow-row '>
          <div className=' pt-10 mx-auto'>
            <Image
              className=' rounded-md '
              src={bookCover}
              width={250}
              height={100}
              alt='book cover'
            />
          </div>

          <div className='pt-6  pr-16'>
            <p className='font-bold text-2xl pt-10'>
              <p className='pb-2 flex items-center gap-2'>
                {bookDetails.title}
                <span >
                  {favoritesState.favorites.includes(bookDetails) ? (
                    <MdOutlineFavorite className='text-4xl cursor-pointer text-red-600 p-1 border rounded-3xl border-red-600   hover:bg-red-200 duration-500' onClick={() => handleAddFavorite(bookDetails)} />
                  ) : (
                    <MdFavoriteBorder className='text-4xl cursor-pointer text-red-600 p-1 border rounded-3xl border-red-600 hover:bg-red-200 duration-500' onClick={() => handleAddFavorite(bookDetails)} />
                  )}
                </span>
              </p>
            </p>

            {authors.map((author, index) => (
              <div key={index} className=''>
                <div className='text-gray-600 pb-5'>
                  {author.name} (Author)
                  <div className='flex gap-2'>
                    <p>
                      Birth: {author.birth_year}
                    </p>
                    <p>
                      Death: {author.death_year}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div>
              <h1 className='text-xl font-semibold'>
                Popularity
              </h1>
              <p className=' '>
                {bookDetails.bookshelves}
              </p>
            </div>

            <div className='pb-5 pt-5'>
              <p className='font-semibold text-xl '>
                Book Subjects
              </p>
              <p className='flex-col-2 '>
                {bookDetails.subjects}
              </p>
            </div>

            <span className='font-semibold'>
              Downloads:  {bookDetails.download_count}
            </span>

          </div>

        </div>
      )}

    </div>
  )
}

export default page
