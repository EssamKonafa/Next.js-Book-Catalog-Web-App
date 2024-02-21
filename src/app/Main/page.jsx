'use client'
import getBooksData from '@/Hooks/useBook';
import Authors from '@/components/home/Authors'
import Badges from '@/components/home/Badges';
import Books from '@/components/home/Books'
import Pagination from '@/components/home/Pagination';
import Popular from '@/components/home/Popular'
import React from 'react'

function Main() {

    const { books, handlePagination, totalPages, page } = getBooksData()

    return (
        <div className='flex'>

            <div className='bg-white rounded-3xl p-7 m-5'>

                <div className='flex'>
                    <Badges text='popular' />
                    <Badges text='top' />
                    <Badges text='high' />
                </div>

                <div className='grid grid-cols-5 gap-9'>
                    {books.slice(0,10).map((book) => (
                        <Books key={book.id} book={book} />
                    ))}
                </div>

                <div className='text-center pt-4'>
                    <Pagination books={books} handlePagination={handlePagination} page={page} totalPages={totalPages}/>
                </div>
            </div>

            <div >
                <Authors />
                <Popular />
            </div>

        </div>
    )
}

export default Main