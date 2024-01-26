
export const GridPlaceHolder = () => {
    const placeholderData = Array.from(Array(9).keys());

    return (
        <div className="w-full h-[800px] flex flex-wrap items-center gap-4 px-5">
            {placeholderData.map((item) => (
                <div key={item} className="flex flex-col h-72 w-96">
                    {/* image */}
                    <div className="bg-gray-300 rounded-md w-72 h-40 animate-pulse"></div>
                    {/* content */}
                    <div className="flex flex-col gap-2 mt-2">
                        {/* title */}
                        <div className="bg-gray-300 rounded-md w-72 h-4 animate-pulse"></div>
                        {/* subtitle */}
                        <div className="bg-gray-300 rounded-md w-72 h-4 animate-pulse"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};