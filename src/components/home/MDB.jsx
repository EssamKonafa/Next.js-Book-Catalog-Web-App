import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { cuttingString } from '@/Hooks/cutString';

function MDB({ book }) {

    const bookCover = book.formats['image/jpeg'] || []

    const maxLength = 10

    const router = useRouter()
    function go(){
        router.push(`/books/${book.id}`)
    }

    return (
        <>
            <div className='flex gap-5 p-2 hover:bg-slate-200 duration-500 cursor-pointer rounded-xl ' onClick={go}>

                <div >
                    <Image
                        src={bookCover}
                        width={25}
                        height={10}
                        alt='book cover'
                    />
                </div>

                <div className='gap-4'>
                    <p className='font-normal'>
                        {cuttingString(book.title, maxLength)}
                    </p>

                    <p className='font-semibold text-sm'>
                        Downloads: {book.download_count}
                    </p>
                </div>

            </div>
        </>
    )
}

export default MDB