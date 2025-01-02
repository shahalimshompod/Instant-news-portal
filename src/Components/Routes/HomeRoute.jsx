import React from 'react';
import HomeFirstSection from '../HomeSections/homeFirstSec/HomeFirstSection';
import HomeSecondSec from '../HomeSections/home2ndSec/HomeSecondSec';
import NewsLetterSection from '../HomeSections/NewsLetterSec/NewsLetterSection';

const HomeRoute = () => {
    return (
        <>
        {/* home section-1 here */}
        <section className='container mx-auto lg:mb-28 mb-10'>
        <HomeFirstSection></HomeFirstSection>
        </section>

        {/* home section-2 here */}
        <section className='container mx-auto'>
            <HomeSecondSec></HomeSecondSec>
        </section>

        {/* newsletter section here (section-3) */}
        <section>
            <NewsLetterSection></NewsLetterSection>
        </section>
        </>
    );
};

export default HomeRoute;