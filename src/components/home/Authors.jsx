'use client'
import getBooksData from '@/Hooks/useBook'
import React from 'react'
import Author from './Author'

function Authors({ books }) {

  return (
    <>
      <div className='bg-slate-50 p-3 pr-8 pl-8 mt-4 mr-4 ml-4  rounded-3xl shadow-md sticky top-14 z-10'>
        <div>
          <p className='font-bold text-xl pb-5 text-center'>Trending Authors</p>
        </div>
        {books.slice(0,4).map((author) => (
          <Author key={author.id} author={author}/>
        ))}
      </div>
    </>
  )
}

export default Authors