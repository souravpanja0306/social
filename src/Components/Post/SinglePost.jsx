import React from 'react'
import { BsShare, BsHandThumbsUp, BsHandThumbsUpFill, BsChatDots, BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { usePostStore } from "../../Store/PostStore";


const SingalPost = ({ data }) => {
    const { likePost } = usePostStore();

    const handleLike = (postId) => {
        navigator.vibrate(75)
        likePost({ postId: postId });
    };
    return (
        <div className='flex flex-col justify-start border border-slate-100 rounded-md p-1 gap-1 bg-white'>
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
                <span className='text-sm text-slate-500'>{data?.title}</span>
            </div>
            <Link to={`/single-post-view?postId=${data._id}`}>
                <div className=''>
                    <img src={data?.media} className='w-full' />
                </div>
            </Link >
            <div className='flex justify-stretch items-center p-1 w-full select-none'>
                <div className='text-red-500 cursor-pointer w-[50%] text-xs flex justify-start items-center gap-1'>
                    <BsHandThumbsUp />
                    <span>{data?.likeCount} likes</span>
                </div>
                <div className='text-green-500 cursor-pointer w-[50%] text-xs flex justify-end items-center gap-1'>
                    <BsChatDots />
                    <span>{0} comments</span>
                </div>
            </div>
            <div className='flex justify-between items-center p-1 w-full select-none'>
                <div
                    id="like"
                    className={`cursor-pointer w-[33.33%] text-sm flex justify-center items-center gap-1`}
                    onClick={() => handleLike(data?._id)}
                >
                    {data?.like
                        ? <BsHandThumbsUpFill className={`text-red-500 font-semibold`} />
                        : <BsHandThumbsUp />
                    }
                    <span className={`${data?.like ? "text-red-500 font-semibold" : ""}`}>Like</span>
                </div>
                <div className={`cursor-pointer w-[33.33%] text-sm flex justify-center items-center gap-1`}>
                    <BsChatDots />
                    <span>Comment</span>
                </div>
                <div className={`cursor-pointer w-[33.33%] text-sm flex justify-center items-center gap-1`}>
                    <BsShare />
                    <span>Share</span>
                </div>
            </div>
        </div >
    )
}

export default SingalPost