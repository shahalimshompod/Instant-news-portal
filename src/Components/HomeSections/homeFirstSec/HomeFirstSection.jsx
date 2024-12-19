import React from 'react';

const HomeFirstSection = () => {
    return (
        <div className='bg-[#EFF8FA] lg:h-80 2xl:h-96 lg:mb-56 mb-10 mt-0 lg:mt-20 lg:relative px-3 lg:px-0'>
            <div>
                <img className='lg:absolute lg:w-5/12 lg:top-3 2xl:-top-5 lg:left-20 2xl:left-28' src="https://i.ibb.co.com/12HZwPM/Getty-Images-2184329067-e1732106649612.jpg" alt="section-1 image" />
            </div>
            <div className='lg:w-1/3 lg:absolute top-5 lg:right-44 2xl:right-48'>
                {/* category here */}
                <p className='text-red-600 font-bebas tracking-widest font-bold mb-4'>HEALTH</p>
                <h1 className='text-2xl lg:text-4xl 2xl:text-5xl font-caslon font-semibold mb-5 leading-tight'>Trump’s return has women who use $349 smart ring to track their periods panicking over privacy. Oura’s CEO wants to assure them.</h1>
                <p className='text-xl font-caslon font-light mb-5 leading-tight'>

                    "There's all these sort of things where women are saying 'You know what? My body, my choice. I will own my health experience and I'll do it independent of the patriarchy.' Oura, weirdly, has become an emblem of that."
                </p>

                <p className='font-sora text-sm font-thin'>BY <span className='font-bold'>ELEANOR PRINGLE</span></p>
                <p className='text-[#000]/50 font-sora text-sm '>December 1, 2024</p>
            </div>
        </div>
    );
};

export default HomeFirstSection;