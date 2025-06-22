import React, { useState, useEffect } from 'react'
import { BsShare, BsHandThumbsUp, BsChatDots, BsThreeDotsVertical } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { usePostStore } from "../../Store/PostStore"
import { useSearchParams } from 'react-router-dom';

import PageHeader from '../../Components/PageHeader';
import SinglePostSkeleton from '../../Components/Post/SinglePostSkeleton';

const SinglePostView = () => {
    const { posts, isLoading, fetchSinglePosts, likePost } = usePostStore();
    const [comments, setComments] = useState(posts[0]?.comments || [
        "This is so funny", "Nice Editing bro, this looks like original", "yes", "Hello world!",
        "This is so funny", "Nice Editing bro, this looks like original", "yes", "Hello world!"
    ]);
    const [newComment, setNewComment] = useState('');

    const [searchParams] = useSearchParams();
    const postId = searchParams.get('postId');


    const handleLike = (postId) => {
        navigator.vibrate(75)
        likePost({ postId: postId });
    };

    useEffect(() => {
        fetchSinglePosts({ postId: postId });
    }, []);

    if (isLoading) {
        return (
            <div className='flex flex-col gap-1'>
                < SinglePostSkeleton />
            </div>
        );
    };
    return (
        <>
            <PageHeader title={`Post`} />
            <div className='flex flex-col justify-start border border-slate-100 rounded-md p-1 gap-1'>
                <div className='flex flex-col gap-1' >
                    <div className='flex justify-between items-center'>
                        <Link to={`/user-profile?user=${posts[0]?.userData?.creatorId}`} className='flex gap-1 items-center'>
                            <img src={posts[0]?.userData?.profileImage} className='w-12 rounded-full h-12 object-center' />
                            <div className='flex flex-col'>
                                <span className='text-sm font-medium'>{posts[0]?.userData?.createdBy}</span>
                                <span className='text-xs'>{posts[0]?.createAtTime}</span>
                            </div>
                        </Link>
                        <span>
                            <BsThreeDotsVertical />
                        </span>
                    </div>
                    <span className='text-sm text-slate-500'>{posts[0]?.title}</span>
                </div>
                <div className=''>
                    <img src={posts[0]?.media} className='w-full' />
                </div>
                <div className='flex justify-stretch items-center p-1 w-full select-none'>
                    <div className='text-red-500 cursor-pointer w-[50%] text-xs flex justify-start items-center gap-1'>
                        <BsHandThumbsUp />
                        <span>{posts[0]?.likeCount} likes</span>
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
                        onClick={() => handleLike(posts[0]?._id)}
                    >
                        <BsHandThumbsUp className={`${posts[0]?.like ? "text-red-500 font-semibold" : ""}`} />
                        <span className={`${posts[0]?.like ? "text-red-500 font-semibold" : ""}`}>Like</span>
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
                <div className="flex flex-col gap-1 p-1">
                    {comments.length > 0 ? (
                        <ul className="flex flex-col gap-1 max-h-60 overflow-y-auto select-none">
                            {comments.map((comment, index) => (
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-1 justify-center items-center'>
                                        <img src={posts[0]?.userData?.profileImage} className='w-10 rounded-full h-10 object-center' />
                                        <div className='flex flex-col'>
                                            <span className='text-xs font-medium'>{posts[0]?.userData?.createdBy}</span>
                                            <span className='text-sm text-slate-500 text-justify'>{comment}</span>
                                        </div>
                                    </div>
                                    <span>
                                        <div
                                            id="like"
                                            className={`cursor-pointer text-sm flex justify-center items-center gap-1 px-4`}
                                            onClick={() => handleLike(posts[0]?._id)}
                                        >
                                            <BsHandThumbsUp className={`${posts[0]?.like ? "text-red-500 font-semibold" : ""}`} />
                                        </div>
                                    </span>
                                </div>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-xs text-slate-500 italic">No comments yet.</p>
                    )}

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (newComment.trim()) {
                                setComments([...comments, newComment]);
                                setNewComment('');
                            }
                        }}
                        className="flex items-center gap-1"
                    >
                        <input
                            type="text"
                            placeholder="Write a comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            className="flex-1 border border-slate-300 rounded-md p-2 text-sm focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-green-500 text-white p-2 rounded-md text-sm hover:bg-green-600"
                        >
                            Post
                        </button>
                    </form>

                </div>
            </div >
        </>
    );
};

export default SinglePostView;
