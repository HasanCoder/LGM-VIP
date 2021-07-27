const Loader = () => {
    let circleCommonClasses = 'h-64 w-64 bg-current   rounded-full';

    return (
        <div className='flex justify-center'>
            <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
            <div
                className={`${circleCommonClasses} mr-1 animate-bounce200`}
            ></div>
            <div className={`${circleCommonClasses} animate-bounce400`}></div>
        </div>
    );
};

export default Loader;