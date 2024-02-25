import React, { useEffect, useState } from 'react'
import MDB from './MDB'
import Loader from './Loader'

function Popular() {
    const [books, setBooks] = useState([])
    const [loader, setLoader] = useState(true)

    //speaking to API and setting the response in state with try and handling errors with catch
    const handleGetBooks = async () => {
        try {
            setLoader(true)
            const response = await fetch('https://gutendex.com/books')
            const data = await response.json()
            setBooks(data.results)

        } catch (error) {
            console.error('there is an error in fetching books data', error);
        } finally {
            setLoader(false)
        }
    }
    //passing function handleGetBooks to useEffect hook to rendering data after mounting the component
    useEffect(() => {
        handleGetBooks()
    }, [])

    return (
        <>
            <div className='bg-slate-50  p-4 pr-5 pl-5 mt-4 mr-2 ml-2 rounded-3xl shadow-md sticky top-80  z-10  '>
                <div>
                    <p className='font-bold text-center text-md pb-2'>Most Downloading</p>
                </div>
                {loader ? (
                    <div className='m-10'>
                    <Loader />
                    </div>
                ) : (
                    <div  >
                        {books.slice(0, 4).map((book) => (
                            <MDB key={book.id} book={book} />
                        ))}
                    </div>
                )}
            </div>
        </>
    )
}

export default Popular