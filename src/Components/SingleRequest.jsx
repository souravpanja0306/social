import React from 'react'
import { Link } from 'react-router-dom'
import { BsCheck, BsThreeDotsVertical, BsX } from "react-icons/bs";

const SingleRequest = (data) => {
    return (
        <div className='flex justify-between items-center border border-slate-100 rounded-md p-1 gap-1'>
            <div className='flex gap-1 items-center'>
                <img src='./boy.png' className='w-12' />
                <div className='flex flex-col'>
                    <Link to={`/user-profile?user=${"Sourav Panja"}`}>
                        <span className='text-xs'>Sourav Panja</span>
                    </Link>
                    <span className='text-xs'>1m ago.</span>
                </div>
            </div>
            <div className='flex justify-center items-center gap-1'>
                <span className='p-1 flex justify-center items-center text-lg font-semibold text-green-500'>
                    <BsCheck />
                </span>
                <span className='p-1 flex justify-center items-center text-lg font-semibold text-red-500'>
                    <BsX />
                </span>
            </div>
        </div>
    )
}

export default SingleRequest