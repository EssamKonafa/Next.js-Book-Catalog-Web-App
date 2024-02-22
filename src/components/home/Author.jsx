import React from 'react'
import { RxAvatar } from "react-icons/rx";

function Author ({ author }) {

    const maxLength = 12
    function cuttingString(string, maxLength) {
        if (string.length > maxLength) {
            return string.substring(0, maxLength)
        } return string
    }

    return (
        <div className='font-medium '>
            {author.authors.slice(0, 4).map((auth) => (
                <div key={auth.name} className='flex items-center gap-2 p-2 text-xl'>
                    <RxAvatar className='text-3xl'/>
                    {cuttingString(auth.name, maxLength)}
                </div>
            ))}
        </div>
    )
}

export default Author