const MostPopularSection = () => {
    const latestData = [
        { id: 1, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae a id error.", time: "30 minutes ago" },
        { id: 2, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae a id error.", time: "30 minutes ago" },
        { id: 3, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae a id error.", time: "30 minutes ago" },
        { id: 4, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae a id error.", time: "30 minutes ago" },
    ]
    return (
        <div className='px-3 lg:px-0 my-72'>
            <div className='lg:w-[370px] border-l-0 lg:border-l-4 pl-4'>
                <div>
                    <h1 className='font-caslon text-3xl font-bold'>Most Popular</h1>
                    <hr className=' border-black my-3' />
                    <div className='w-full'>
                        {
                            latestData.map(data => 
                            <div className="border-b-2 mb-3" key={data.id}>
                                <p className="font-bebas text-red-600">TECH</p>
                                <h4 className='mb-2 font-caslon text-xl font-bold'>{data.title}</h4>
                                <p className='mb-5'>{data.time}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MostPopularSection;