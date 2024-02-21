import instance from '@/axiosConfig/instance'
import React, { useEffect, useState } from 'react'

function getBooksData() {

    //state for handling the data coming from the API and setting it in array
    const [books, setBooks] = useState([])

    //state for setting page number and handling pagination
    const [page, setPage] = useState(1)
    const [totalPages,setTotalPages]=useState([])

    const handlePagination=(newPage)=>{
        const updatePage = setPage(Math.max(1,page+newPage))
    }

    //speaking to API and setting the response in state with try and handling errors with catch
    const handleGetBooks = async () => {
        try {
            const response = await instance.get(`/?page=${page}`)
            setBooks(response.data.results)
            // console.log(response.data.results)
            setTotalPages(response.data.count)
        } catch (error) {
            console.error('there is an error in fetching books data', error);
        }
    }

    //passing function handleGetBooks to useEffect hook to rendering data after mounting and rendering the component
    useEffect(() => {
        handleGetBooks()
    }, [page])

    //after setting data in the state we returning it with new values to show it in other components + pagination function
    return {books,handlePagination,totalPages,page};
}

export default getBooksData