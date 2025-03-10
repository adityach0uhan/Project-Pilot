const Loader = () => {
    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='flex flex-row gap-2'>
                <div className='w-4 h-4 rounded-full bg-yellow-400 animate-bounce'></div>
                <div className='w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:-.3s]'></div>
                <div className='w-4 h-4 rounded-full bg-red-600 animate-bounce [animation-delay:-.5s]'></div>
            </div>
        </div>
    );
};

export default Loader;
