'use client'
import instance from '@/axiosConfig/instance';
import Header from '@/components/header/Header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { IoArrowBackCircleSharp } from "react-icons/io5";

function BookDetails({ params }) {

  const id = params.id

  const [bookDetails, setBookDetails] = useState({})

  const getBookDetails = async () => {
    try {
      const response = await instance.get(`/${id}`)
      setBookDetails(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getBookDetails()
  }, [])

  const router = useRouter()
  function back(){
    router.push('/')
  }

  const bookCover = bookDetails.formats && bookDetails.formats['image/jpeg'];

  const authors = bookDetails.authors || []

  return (
    <div className='relative'>
      {/* <Header/> */}
        <button className='absolute top-4 left-14  rounded-3xl bg-slate-400 font-bold m-2 p-2 hover:bg-slate-500'
        onClick={back}
        >
                Back
            </button>
            {/* <IoArrowBackCircleSharp className='text-3xl cursor-pointer  '/> */}

      <div className='grid grid-cols-2'>
        <div className=' pl-96 pt-10 '>
          <Image
            className=' rounded-md'
            src={bookCover}
            width={250}
            height={100}
            alt='book cover'
          />
        </div>

        <div className='pt-6  pr-32   '>
          <p className='font-bold text-2xl pt-10'>
            <p className='pb-2'>
              {bookDetails.title}
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
    </div>
  )
}

export default BookDetails