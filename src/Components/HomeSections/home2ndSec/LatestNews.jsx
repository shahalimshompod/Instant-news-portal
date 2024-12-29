import React from 'react';

const LatestNews = () => {
    // fake data here
    const latestData = [
        { id: 1, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae a id error.", time: "30 minutes ago" },
        { id: 2, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae a id error.", time: "30 minutes ago" },
        { id: 3, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae a id error.", time: "30 minutes ago" },
        { id: 4, title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis beatae a id error.", time: "30 minutes ago" },
    ]
    return (
        <div className='px-3 lg:px-0'>
            <div className='lg:w-[370px] border-l-0 lg:border-l-4 pl-4'>
                <div>
                    <h1 className='font-caslon text-3xl font-bold'>Latest</h1>
                    <hr className=' border-black my-3' />
                    <div className='w-full'>
                        {
                            latestData.map(data => <div key={data.id}>
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

export default LatestNews;