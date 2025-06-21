import React from 'react'
import { BsShare, BsHandThumbsUp, BsChatDots, BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { usePostStore } from "../Store/PostStore"


const SingalPost = ({ data, postId }) => {
    const { likePost } = usePostStore();

    const handleLike = () => {
        likePost({ postId: postId });
    };
    return (
        <div className='flex flex-col justify-start border border-slate-100 rounded-md p-1 gap-1'>
            <div className='flex flex-col gap-1' >
                <div className='flex justify-between items-center'>
                    {/* <div className='flex gap-1 items-center'> */}
                    <Link to={`/user-profile?user=${data?.userData?.creatorId}`} className='flex gap-1 items-center'>
                        <img src={data?.userData?.profileImage} className='w-12 rounded-full h-12 object-center' />
                        <div className='flex flex-col'>
                            <span className='text-sm font-medium'>{data?.userData?.createdBy}</span>
                            <span className='text-xs'>{data?.createAtTime}</span>
                        </div>
                    </Link>
                    <span>
                        <BsThreeDotsVertical />
                    </span>
                </div>
                <span className='text-sm text-slate-500'>{data?.title}dd</span>
            </div>
            <div className=''>
                <img src={data?.media} className='w-full' />
            </div>
            <div className='flex justify-between items-center p-1 w-full select-none'>
                <div
                    className='cursor-pointer w-[33.33%] text-sm flex justify-center items-center gap-1'
                    onClick={() => handleLike()}
                >
                    <BsHandThumbsUp className={`${data?.like ? "text-red-500 font-semibold" : ""}`} />
                    <span className={`${data?.like ? "text-red-500 font-semibold" : ""}`}>Like</span>
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