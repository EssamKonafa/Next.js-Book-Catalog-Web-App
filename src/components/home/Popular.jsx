import React, { useEffect, useState } from 'react'
import MDB from './MDB'
import instance from '@/axiosConfig/instance'

function Popular() {
  const [books, setBooks] = useState([])

   //speaking to API and setting the response in state with try and handling errors with catch
   const handleGetBooks = async () => {
    try {
        const response = await instance.get()
        setBooks(response.data.results)

    } catch (error) {
        console.error('there is an error in fetching books data', error);
    }
}
//passing function handleGetBooks to useEffect hook to rendering data after mounting and rendering the component
useEffect(() => {
    handleGetBooks()
}, [])

  return (
    <>
        <div className='bg-slate-50 p-4 pr-5 pl-5 mt-4 mr-4 rounded-3xl shadow-md '>
          <div>
            <p className='font-bold text-center text-xl pb-2'>Most Downloading</p>
          </div>
          <div className=''>
          {books.slice(0,5).map((book)=>(
            <MDB  key={book.id} book={book}/>
          ))}
          </div>
        </div>
    </>
  )
}

export default Popular