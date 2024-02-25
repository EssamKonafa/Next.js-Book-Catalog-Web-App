import React from 'react'

function SideBarItem({ icon, text, active }) {
    return (
        <>

            <li
                className={
                    `relative flex items-center p-2 pr-2 pl-2 gap-4 duration-500
                    font-medium cursor-pointer rounded-md transition-colors 
                    ${active ? 'bg-slate-300 text-indigo-800 font-extrabold' : 'hover:bg-slate-200 text-gray-800'}`
                }
                >
                {icon}  
                <span className='lg:block hidden'>

                {text}
                </span>
            </li>
        </>
    )
}

export default SideBarItem