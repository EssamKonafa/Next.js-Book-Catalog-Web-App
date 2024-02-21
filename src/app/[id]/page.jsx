'use client'
import instance from '@/axiosConfig/instance';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

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
  
  const bookCover = bookDetails.formats && bookDetails.formats['image/jpeg'];

  const authors = bookDetails.authors || []

  return (
    <div>
      {bookDetails.title}

      <Image src={bookCover} width={100} height={100} alt='book cover'/>

      {authors.map((author,index)=>(
        <div key={index}>
        {author.name}
        {author.birth_year}
        {author.death_year}
        </div>
      ))}

      {bookDetails.bookshelves}
      {bookDetails.download_count}
      {bookDetails.languages}
      {bookDetails.subjects}

    </div>
  )
}

export default BookDetails