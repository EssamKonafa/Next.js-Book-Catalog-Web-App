'use client'
import getBooksData from '@/Hooks/useBook'
import React, { useEffect, useState } from 'react'
import Author from './Author'
import Loader from './Loader'

function Authors({ books }) {

  //handling loading 
  const [loader, setLoader] = useState(true)
  
  //stooping loader after fetching data 
  useEffect(() => {
    setLoader(false)
  }, [books])

  return (
    <>
      <div className='bg-slate-50 p-2 pr-8 pl-8 mt-4 mr-2 ml-2  rounded-3xl shadow-md sticky top-14 z-10'>
        <div>
          <p className='font-bold text-md pb-2 text-center'>Trending Authors</p>
        </div>
        {loader && !books.length > 0 ? (
          <div className='m-5'>
          <Loader />
          </div>
        ) : (
          books.slice(0, 4).map((author) => (
            <Author key={author.id} author={author} />
          ))
        )}
      </div>
    </>
  )
}

export default Authors