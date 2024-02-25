import React, { useState } from 'react'
import { GrLinkPrevious,GrLinkNext } from "react-icons/gr";

function Pagination({ page, handlePagination, totalPages }) {

    //handling pagination

    return (
        <div className='flex justify-center ' >

            <button onClick={() => handlePagination((page)=>page-1)} className='duration-500 rounded-3xl bg-slate-200 font-semibold p-4 hover:bg-slate-400' >
                <GrLinkPrevious/>
            </button>

            <p className='p-3 font-semibold items-center'> 
                {page} of {totalPages}
            </p>

            <button onClick={() => handlePagination((page)=>page+1)} className='duration-500 rounded-3xl bg-slate-200 font-semibold p-4 hover:bg-slate-400'>
                <GrLinkNext/>
            </button>
        </div>
    )
}

export default Pagination