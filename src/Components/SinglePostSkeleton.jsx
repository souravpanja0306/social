const SinglePostSkeleton = () => {
    return (
        <div className="flex flex-col p-2 gap-2 rounded-md bg-white">
            {/* Header */}
            <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
            </div>

            {/* Text Block */}
            <div className="h-6 bg-gray-200 rounded w-full"></div>

            {/* Image Placeholder */}
            <div className="w-full min-h-48 bg-gray-200 rounded"></div>

            {/* Footer Buttons */}
            <div className="flex justify-between gap-2">
                <div className="h-8 w-1/3 bg-gray-200 rounded"></div>
                <div className="h-8 w-1/3 bg-gray-200 rounded"></div>
                <div className="h-8 w-1/3 bg-gray-200 rounded"></div>
            </div>
        </div>

    )
}

export default SinglePostSkeleton