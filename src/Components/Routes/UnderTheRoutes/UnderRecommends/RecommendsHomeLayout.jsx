import React from 'react';
import LeftTopPicksSection from './RecommendsComponents/RecommendsHomeLayoutsComponents/LeftTopPicksSection';
import MiddleSection from './RecommendsComponents/RecommendsHomeLayoutsComponents/MiddleSection';
import RightLatestArticles from './RecommendsComponents/RecommendsHomeLayoutsComponents/RightLatestArticles';
import RoundupSection from './RecommendsComponents/RecommendsHomeLayoutsComponents/RoundupSection';

const RecommendsHomeLayout = () => {
    return (
        <>
            <div className='mx-3'>
                <div className='flex flex-col justify-center lg:flex-row lg:justify-between lg:gap-10 container mx-auto'>
                    <LeftTopPicksSection></LeftTopPicksSection>
                    <MiddleSection></MiddleSection>
                    <RightLatestArticles></RightLatestArticles>
                </div>
            </div>
            <div className='container mx-auto my-10'>
                <RoundupSection></RoundupSection>
            </div>
        </>
    );
};

export default RecommendsHomeLayout;