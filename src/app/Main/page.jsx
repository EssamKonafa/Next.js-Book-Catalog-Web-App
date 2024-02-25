'use client'
import Authors from '@/components/home/Authors'
import Books from '@/components/home/Books'
import Loader from '@/components/home/Loader';
import Pagination from '@/components/home/Pagination';
import Popular from '@/components/home/Popular'
import { useEffect, useState } from 'react';

function Main() {

    //state for handling the data coming from the API and setting it in array
    const [books, setBooks] = useState([])

    //state for setting page number and handling pagination
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    function handlePagination(page) {
        setPage(page)
    }

    //state for handling loading checking if the state carrying data or not yet and depends on it shows the loader
    const [loader, setLoader] = useState(true)

    //speaking to API and setting the response in state with try and handling errors with catch and setting loader status with Server-Side Rendering
    const handleGetBooks = async () => {
        try {
            setLoader(true)
            const response = await fetch(`https://gutendex.com/books/?page=${page}`)
            const booksData = await response.json()
            setBooks(booksData.results)
            setTotalPages(booksData.count)
        } catch (error) {
            console.error(error);
        } finally {
            setLoader(false)
        }
    }

    //passing function handleGetBooks to useEffect hook to rendering data after mounting the component
    useEffect(() => {
        handleGetBooks()
    }, [page])

    return (
        <div className=' sm:flex  '>


            <div className='bg-slate-50 rounded-3xl p-5 mt-4 mb-4 ml-4 mr-2 shadow-md'>

                <div className='gap-8 grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2'>
                    {loader ? (
                        <div className='xl:w-96 xl:pl-48 xl:pt-32 xl:pb-32 md:p-1'>
                            <Loader />
                        </div>
                    ) : (
                        books.map((book) => (
                            <Books key={book.id} book={book} />
                        ))
                    )}
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