import React from 'react'
import { RxAvatar } from "react-icons/rx";
import { cuttingString } from '@/Hooks/cutString';

function Author ({ author }) {

    const maxLength = 10


    return (
        <div className='font-medium '>
            {author.authors.map((auth) => (
                <div key={auth.name} className='flex items-center gap-2 p-2 text-xl'>
                    <RxAvatar className='text-3xl'/>
                    {cuttingString(auth.name, maxLength)}
                </div>
            ))}
        </div>
    )
}

export default Author