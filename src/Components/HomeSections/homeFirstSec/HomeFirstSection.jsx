import React from 'react';

const HomeFirstSection = () => {
    return (
        <div className='bg-[#EFF8FA] lg:h-96 lg:mb-56 mb-10 mt-20 lg:relative px-3 lg:px-0'>
            <div>
                <img className='lg:absolute lg:w-5/12 -top-5 left-20' src="https://i.ibb.co.com/12HZwPM/Getty-Images-2184329067-e1732106649612.jpg" alt="section-1 image" />
            </div>
            <div className='lg:w-1/3 lg:absolute top-5 right-44'>
                {/* category here */}
                <p className='text-red-600 font-bebas tracking-widest font-bold mb-4'>HEALTH</p>
                <h1 className='text-2xl lg:text-5xl font-caslon font-semibold mb-5'>Trump’s return has women who use $349 smart ring to track their periods panicking over privacy. Oura’s CEO wants to assure them.</h1>
                <p className='text-xl font-caslon font-thin mb-5'>

                    "There's all these sort of things where women are saying 'You know what? My body, my choice. I will own my health experience and I'll do it independent of the patriarchy.' Oura, weirdly, has become an emblem of that."
                </p>

                <p className='font-sora text-sm font-thin'>BY <span className='font-bold'>ELEANOR PRINGLE</span></p>
                <p className='text-[#000]/50 font-sora text-sm '>December 1, 2024</p>
            </div>
        </div>
    );
};

export default HomeFirstSection;