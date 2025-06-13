import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsHouse, BsPeople, BsBell, BsPerson, BsSend, BsSearch, BsFileEarmarkPlus } from "react-icons/bs";

const Header = () => {
    return (
        <div className='grid fixed w-full bg-slate-100 min-h-[10vh]'>
            <div className='flex justify-between items-center p-1'>
                <div className=''>
                    <NavLink to="/" className={`font-semibold text-green-500 cursor-pointer flex flex-col justify-center items-center w-full p-1`}>
                        <span></span>
                        <span className='text-xl'>PetWink</span>
                    </NavLink>
                </div>
                <div className='p-1 flex'>
                    <NavLink to="/create-post" className={`shadow-lg font-semibold cursor-pointer flex justify-center items-center w-full p-1 gap-1 border border-green-500 rounded-full`}>
                        <BsFileEarmarkPlus className='font-semibold text-sm active:text-green-500' />
                        <span className='text-xs'>Create</span>
                    </NavLink>
                    <NavLink to="/search" className={`cursor-pointer flex flex-col justify-center items-center w-full p-1`}>
                        <BsSearch className='text-lg active:text-green-500' />
                    </NavLink>
                    <NavLink to="/messages" className={`cursor-pointer flex flex-col justify-center items-center w-full p-1`}>
                        <BsSend className='text-lg active:text-green-500' />
                    </NavLink>
                </div>
            </div>
            <div className='flex justify-between items-center duration-500'>
                <NavLink to="/" className={({ isActive }) => `${isActive ? "border-b-2 border-green-500 text-green-500" : ""} cursor-pointer flex flex-col justify-center items-center w-full p-1`}>
                    <span className='text-lg'><BsHouse /></span>
                    <span className='text-sm'>Home</span>
                </NavLink>
                <NavLink to="/friend-request" className={({ isActive }) => `${isActive ? "border-b-2 border-green-500 text-green-500" : ""} cursor-pointer flex flex-col justify-center items-center w-full p-1`}>
                    <span className='text-lg'><BsPeople /></span>
                    <span className='text-sm'>Request</span>
                </NavLink>
                <NavLink to="/notification-list" className={({ isActive }) => `${isActive ? "border-b-2 border-green-500 text-green-500" : ""} cursor-pointer flex flex-col justify-center items-center w-full p-1`}>
                    <span className='text-lg'><BsBell /></span>
                    <span className='text-sm'>Notification</span>
                </NavLink>
                <NavLink to="/profile" className={({ isActive }) => `${isActive ? "border-b-2 border-green-500 text-green-500" : ""} cursor-pointer flex flex-col justify-center items-center w-full p-1`}>
                    <span className='text-lg'><BsPerson /></span>
                    <span className='text-sm'>Profile</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Header