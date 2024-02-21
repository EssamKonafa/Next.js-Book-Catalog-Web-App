import React, { useState } from 'react'

function Pagination({ page, handlePagination, totalPages }) {

    return (
        <div className='flex justify-center ' >

            <button onClick={() => handlePagination(-1)} className='rounded-xl bg-slate-200 font-semibold p-2 hover:bg-slate-400' >
                Prev
            </button>

            <p className='p-2 font-semibold'> 
                {page} of {totalPages}
            </p>

            <button onClick={() => handlePagination(+1)} className='rounded-xl bg-slate-200 font-semibold p-2 hover:bg-slate-400'>
                Next
            </button>
        </div>
    )
}

export default Pagination