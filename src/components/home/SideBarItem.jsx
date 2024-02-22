import React from 'react'

function SideBarItem({ icon, text, active }) {
    return (
        <>

            <li
                className={
                    `relative flex items-center p-2 pr-4 pl-4 gap-4
                    font-medium cursor-pointer rounded-md transition-colors 
                    ${active ? 'bg-slate-300 text-indigo-800 font-extrabold' : 'hover:bg-slate-200 text-gray-800'}`
                }
                >
                {icon}
                {text}
            </li>
        </>
    )
}

export default SideBarItem