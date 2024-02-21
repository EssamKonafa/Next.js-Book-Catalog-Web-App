'use client'
import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Books({ book }) {

    const maxLength = 11

    const cover = book.formats['image/jpeg']

    function cuttingString(string, maxLength) {
        if (string.length > maxLength) {
            return string.substring(0, maxLength) +'..'
        }
        return string
    }

    const router = useRouter()
    function navigate(){
        router.push(`/${book.id}`)
    }

    return (
        <div 
        className='hover:scale-105 duration-500 ease-in-out cursor-pointer hover:shadow-md hover:shadow-gray-500 hover:rounded-md'
        onClick={()=> navigate(book.id)}
        >

            <Image
                src={cover}
                width={120}
                height={100}
                className='rounded-md'
                alt='book cover'
            />

            <p className='font-semibold text-slate-800 text-sm' >
                {cuttingString(book.title, maxLength)}
            </p>

            {book.authors.map((author, index) => (
                <div key={index}>
                    <p className='font-semibold text-sm text-gray-500'>
                        by {cuttingString(author.name,maxLength)}
                    </p>
                </div>
            ))}

        </div>
    )
}

export default Books