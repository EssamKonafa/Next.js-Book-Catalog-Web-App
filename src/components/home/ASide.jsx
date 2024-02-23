'use client'
import Image from 'next/image';
import React from 'react'
import { GoHome } from "react-icons/go";
import logo from '../../../public/logo.png'
import { PiSkipBack } from "react-icons/pi";
import SideBarItem from './SideBarItem';
import { MdOutlineDarkMode, MdDarkMode, MdOutlineFavorite, MdFavoriteBorder } from "react-icons/md";
import { useRouter } from 'next/navigation';

function ASide() {
  const router =useRouter()
  function navigate(path){
    router.push(path)
  }
  return (
    <>
      <nav className='ASIDE flex flex-col bg-slate-50 shadow-md p-4 rounded-3xl mt-4 ml-5 lg:w-60 xs:w-14'>
        <div className='flex items-center justify-around p-2 pb-8 pt-5'>
          <Image
            src={logo}
            width={30}
            height={30}
            alt='logo'
          />
          <p className='font-semibold text-center pl-0.5 lg:block hidden'>Book Catalog</p>
        </div>

        <ul className=''>
          <span onClick={()=>navigate('/')}>
          <SideBarItem text='Home' active icon={<GoHome className=' text-4xl p-1' />} />
          </span>
          <span  onClick={()=>navigate('/favorites')}>
          <SideBarItem text='Favorites' icon={<MdFavoriteBorder className=' text-4xl p-1' />}/>
          </span>
          <span  onClick={()=>navigate('/display')}>
          <SideBarItem text='Display' icon={<MdOutlineDarkMode className=' text-4xl p-1' />} />
          </span>
        </ul>
      </nav>
    </>
  )
}

export default ASide

// 'use client'
// import Image from 'next/image';
// import { GoHome } from 'react-icons/go';
// import logo from '../../../public/logo.png';
// import { PiSkipBack } from 'react-icons/pi';
// import SideBarItem from './SideBarItem';
// import { MdOutlineDarkMode, MdFavoriteBorder } from 'react-icons/md';
// import { useRouter } from 'next/navigation';

// function ASide() {
//   const router = useRouter();
//   // const [isExpanded, setExpanded] = useState(true); // Start expanded

//   return (
//     <>
//       <nav className={`ASIDE flex flex-col bg-slate-50 shadow-md p-2 rounded-3xl mt-4 ml-5 lg:w-60 md:w-2`}>
//         <div className='flex items-center justify-around p-2 pb-8 pt-5'>
//           <Image src={logo} width={30} height={0} alt='logo' className='items-center' />
//           <p className='font-semibold text-xl md:block hidden  '>Book Catalog</p>
//         </div>

//         <ul>
//           <span onClick={() => navigate('/')}>
//             <SideBarItem text='Home' active icon={<GoHome className='text-4xl p-1' />}  />
//           </span>
//           <span onClick={() => navigate('/favorites')}>
//             <SideBarItem text='Favorites' icon={<MdFavoriteBorder className='text-4xl p-1' />}  />
//           </span>
//           <span onClick={() => navigate('/display')}>
//             <SideBarItem text='Display' icon={<MdOutlineDarkMode className='text-4xl p-1' />}  />
//           </span>
//         </ul>

//         {/* Add a button to toggle the navigation */}
//         {/* <button className="mt-auto" onClick={() => setExpanded(!isExpanded)}> */}
//           {/* <PiSkipBack className="text-4xl p-1" /> */}
//         {/* </button> */}
//       </nav>
//     </>
//   );
// }

// export default ASide;