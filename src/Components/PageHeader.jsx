import React from 'react'
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const PageHeader = ({ title }) => {
    const navigate = useNavigate()
    return (
        <div className='flex justify-start items-center bg-slate-100 gap-2 font-semibold p-2'>
            <span onClick={() => navigate(-1)} className='flex justify-center items-center gap-2'>
                <BsChevronLeft />
                {title}
            </span>
        </div>
    )
}

export default PageHeader