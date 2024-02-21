import React from 'react'

function Badges({text}) {
    return (
        <>
            <div className='rounded-3xl border bg-slate-100 p-1 w-20 text-center text-sm cursor-pointer mr-2 mb-6'>
                <p>{text}</p>
            </div>
        </>
    )
}

export default Badges