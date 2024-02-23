'use client'
import instance from '@/axiosConfig/instance';
import Header from '@/components/header/Header';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import ASide from '@/components/home/ASide';
import { MdOutlineDarkMode, MdDarkMode, MdOutlineFavorite, MdFavoriteBorder } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '@/redux/slices/favorites';

function page() {


  const params = useParams()

  const id = params.id

  const [bookDetails, setBookDetails] = useState({})

  const getBookDetails = async () => {
    try {
      const response = await instance.get(`${id}`)
      setBookDetails(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getBookDetails()
  }, [])

  const router = useRouter()
  function back() {
    router.push('/')
  }

  const bookCover = bookDetails.formats && bookDetails.formats['image/jpeg'];

  const authors = bookDetails.authors || []

  const favoritesState = useSelector((state) => state.favorites)
  const dispatch = useDispatch()
  function handleAddFavorite(book) {
    if (favoritesState.favorites.includes(book)) {
      dispatch(removeFavorite(book.id))
    } else {
      dispatch(addFavorite(book))
    }
  }

  return (
    <div className='relative flex'>
      {/* <Header/> */}
      <ASide />
      <button className='absolute top-4 left-80     rounded-3xl bg-slate-400 font-bold m-2 p-4 hover:bg-slate-500'
        onClick={back}
      >
        <GrLinkPrevious />
      </button>
      {/* <IoArrowBackCircleSharp className='text-3xl cursor-pointer  '/> */}

      <div className='grid grid-cols-2'>
        <div className=' pl-72  pt-10 '>
          <Image
            className=' rounded-md'
            src={bookCover}
            width={250}
            height={100}
            alt='book cover'
          />
        </div>

        <div className='pt-6  pr-32   '>
          <p className='font-bold text-2xl pt-10'>
            <p className='pb-2 flex items-center gap-2'>
              {bookDetails.title}
              <span className=''>
                {favoritesState.favorites.includes(bookDetails) ? (
                  <MdOutlineFavorite className='text-4xl cursor-pointer text-red-600 p-1 border rounded-3xl ' onClick={() => handleAddFavorite(bookDetails)} />
                ) : (
                  <MdFavoriteBorder className='text-4xl cursor-pointer text-red-600 p-1 border rounded-3xl ' onClick={() => handleAddFavorite(bookDetails)} />
                )}
              </span>
            </p>
          </p>

          {authors.map((author, index) => (
            <div key={index} className=''>
              <div className='text-gray-600 pb-5'>
                {author.name} (Author)
                <div className='flex gap-2'>
                  <p>
                    Birth: {author.birth_year}
                  </p>
                  <p>
                    Death: {author.death_year}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div>
            <h1 className='text-xl font-semibold'>
              Popularity
            </h1>
            <p className=' '>
              {bookDetails.bookshelves}
            </p>
          </div>

          <div className='pb-5 pt-5'>
            <p className='font-semibold text-xl '>
              Book Subjects
            </p>
            <p className='flex-col-2 '>
              {bookDetails.subjects}
            </p>
          </div>

          <span className='font-semibold'>
            Downloads:  {bookDetails.download_count}
          </span>

        </div>

      </div>
    </div>
  )
}

export default page

// 'use client'
// import { createSlice } from "@reduxjs/toolkit";
// import instance from '@/axiosConfig/instance';
// import Header from '@/components/header/Header';
// import Image from 'next/image';
// import { useParams, useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react';
// import { GrLinkPrevious } from "react-icons/gr";

// function Page() {
//   const router = useParams();
//   const  id  = router.id;

//   const [bookDetails, setBookDetails] = useState({});
//   const [error, setError] = useState(null);

//   const getBookDetails = async () => {
//     try {
//       const response = await instance.get(`${id}`);
//       setBookDetails(response.data);
//     } catch (error) {
//       console.error(error);

//       if (error.response && error.response.status === 404) {
//         setError(new Error('Book not found!'));
//       } else {
//         setError(new Error('An error occurred while fetching book details.'));
//       }
//     }
//   };

//   useEffect(() => {
//     getBookDetails();
//   }, []); // Re-run effect when id changes

//   const bookCover = bookDetails.formats && bookDetails.formats['image/jpeg'];
//   const authors = bookDetails.authors || [];

//   return (
//     <div className='relative'>
//       <button
//         className='absolute top-4 left-14  rounded-3xl bg-slate-400 font-bold m-2 p-4 hover:bg-slate-500'
//         onClick={() => router.push('/')}
//       >
//         <GrLinkPrevious />
//       </button>

//       {error ? (
//         <div className="text-red-500">
//           An error occurred: {error.message}
//         </div>
//       ) : (
//         <div className='grid grid-cols-2'>
//           <div className='pl-96 pt-10 '>
//             <Image
//               className='rounded-md'
//               src={bookCover}
//               width={250}
//               height={100}
//               alt='book cover'
//             />
//           </div>

//           <div className='pt-6 pr-32'>
//             <p className='font-bold text-2xl pt-10'>
//               <p className='pb-2'>
//                 {bookDetails.title}
//               </p>
//             </p>

//             {authors.map((author, index) => (
//               <div key={index} className=''>
//                 <div className='text-gray-600 pb-5'>
//                   {author.name} (Author)
//                   <div className='flex gap-2'>
//                     <p>
//                       Birth: {author.birth_year}
//                     </p>
//                     <p>
//                       Death: {author.death_year}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}

//             <div>
//               <h1 className='text-xl font-semibold'>
//                 Popularity
//               </h1>
//               <p className=' '>
//                 {bookDetails.bookshelves}
//               </p>
//             </div>

//             <div className='pb-5 pt-5'>
//               <p className='font-semibold text-xl '>
//                 Book Subjects
//               </p>
//               <p className='flex-col-2 '>
//                 {bookDetails.subjects}
//               </p>
//             </div>

//             <span className='font-semibold'>
//               Downloads: {bookDetails.download_count}
//             </span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Page;