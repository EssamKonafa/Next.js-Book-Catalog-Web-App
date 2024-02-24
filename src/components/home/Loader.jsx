'use client'
import React from 'react'
import loader from '../../../public/loader.gif'
import Image from 'next/image'
function Loader() {
  return (
    <div>
        <Image
        src={loader}
        width={200}
        height={200}
        alt='loader'
/>
    </div>
  )
}

export default Loader