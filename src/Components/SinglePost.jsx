import React from 'react'
import { BsShare, BsHandThumbsUp, BsChatDots, BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';


const SingalPost = (data) => {
    return (
        <div className='flex flex-col justify-start border border-slate-100 rounded-md p-1 gap-1'>
            <div className='flex flex-col gap-1' >
                <div className='flex justify-between items-center'>
                    <div className='flex gap-1 items-center'>
                        <img src='./boy.png' className='w-10' />
                        <div className='flex flex-col'>
                            <Link to={`/user-profile?user=${"Sourav Panja"}`}>
                                <span className='text-xs'>Sourav Panja</span>
                            </Link>
                            <span className='text-xs'>1m ago.</span>
                        </div>
                    </div>
                    <span>
                        <BsThreeDotsVertical />
                    </span>
                </div>
                <span className='text-sm text-slate-500'>My new planted aquarium setup</span>
            </div>
            <div className=''>
                <img src='./gta.jpg' className='w-full' />
            </div>
            <div className='flex justify-between items-center p-1 w-full select-none'>
                <div className='cursor-pointer w-[33.33%] text-sm flex justify-center items-center gap-1'>
                    <BsHandThumbsUp />
                    <span>Like</span>
                </div>
                <div className='cursor-pointer w-[33.33%] text-sm flex justify-center items-center gap-1'>
                    <BsChatDots />
                    <span>Comment</span>
                </div>
                <div className='cursor-pointer w-[33.33%] text-sm flex justify-center items-center gap-1'>
                    <BsShare />
                    <span>Share</span>
                </div>
            </div>
        </div >
    )
}

export default SingalPost