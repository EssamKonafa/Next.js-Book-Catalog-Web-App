'use client'
import getBooksData from '@/Hooks/useBook';
import ASide from '@/components/home/ASide';
import Authors from '@/components/home/Authors'
import Badges from '@/components/home/Badges';
import Books from '@/components/home/Books'
import Pagination from '@/components/home/Pagination';
import Popular from '@/components/home/Popular'
import { useEffect, useState } from 'react';

function Main() {

    // const { books, handlePagination, totalPages, page } = getBooksData()
    //state for handling the data coming from the API and setting it in array
    const [books, setBooks] = useState([])

    //state for setting page number and handling pagination
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState([])

    function handlePagination(page){
        setPage(page)
    }

    //speaking to API and setting the response in state with try and handling errors with catch
    const handleGetBooks = async () => {
        try {
            // const bookData = await serverSideRenderingBooks(page)
            const response = await fetch(`https://gutendex.com/books/?page=${page}`)
            const booksData = await response.json()
            setBooks(booksData.results)
            setTotalPages(booksData.count)
        } catch (error) {
            console.error(error);
        }
    }

    //passing function handleGetBooks to useEffect hook to rendering data after mounting and rendering the component
    useEffect(() => {
        handleGetBooks()
    }, [page])

    return (
        <div className='sm:flex'>

            <div className='bg-slate-50 rounded-3xl p-5 mt-4 mb-4 ml-4 mr-2 shadow-md'>

                <div className='flex'>
                    <Badges text='all' />
                    <Badges text='popular' />
                </div>

                <div className='gap-8 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                    {books.map((book) => (
                        <Books key={book.id} book={book} />
                    ))}
                </div>

                <div className='text-center pt-4'>
                    <Pagination books={books} handlePagination={handlePagination} page={page} totalPages={totalPages} />
                </div>
            </div>

            <span>
                <Authors books={books} />
                <Popular books={books} />
            </span>

        </div>
    )
}

export default Main