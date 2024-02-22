'use client'
import getBooksData from '@/Hooks/useBook';
import ASide from '@/components/home/ASide';
import Authors from '@/components/home/Authors'
import Badges from '@/components/home/Badges';
import Books from '@/components/home/Books'
import Pagination from '@/components/home/Pagination';
import Popular from '@/components/home/Popular'
import React from 'react'

function Main() {

    const { books, handlePagination, totalPages, page } = getBooksData()

    return (
        <div className='flex '>

            <ASide />

            <div className='bg-slate-50 rounded-3xl p-5 m-4 shadow-md'>

                <div className='flex'>
                    <Badges text='all' />
                    <Badges text='popular' />
                    {/* <Badges text='high' /> */}
                </div>

                <div className='grid grid-cols-6 gap-8'>
                    {books.slice(0, 12).map((book) => (
                        <Books key={book.id} book={book} />
                    ))}
                </div>

                <div className='text-center pt-4'>
                    <Pagination books={books} handlePagination={handlePagination} page={page} totalPages={totalPages} />
                </div>
            </div>

            <div className=''>
                <Authors books={books}/>
                <Popular books={books}/>
            </div>

        </div>
    )
}

export default Main