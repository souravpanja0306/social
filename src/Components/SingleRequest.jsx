import React from 'react'
import { Link } from 'react-router-dom'
import { BsCheck, BsX } from "react-icons/bs";

const SingleRequest = (data) => {
    return (
        <div className="flex justify-between items-center border border-slate-100 rounded-md p-2 gap-2 bg-white shadow-sm">
            <div className="flex items-center gap-2">
                <img src="/boy.png" alt="User avatar" className="w-12 h-12 rounded-full object-cover" />
                <div className="flex flex-col">
                    <Link to={`/user-profile?user=${encodeURIComponent("Sourav Panja")}`}>
                        <span className="text-sm font-medium text-gray-800 hover:underline">Sourav Panja</span>
                    </Link>
                    <span className="text-xs text-gray-500">1m ago</span>
                </div>
            </div>

            <div className="flex items-center gap-2">
                <button className="p-2 text-lg text-green-500 hover:bg-green-100 rounded-full">
                    <BsCheck />
                </button>
                <button className="p-2 text-lg text-red-500 hover:bg-red-100 rounded-full">
                    <BsX />
                </button>
            </div>
        </div>
    )
}

export default SingleRequest