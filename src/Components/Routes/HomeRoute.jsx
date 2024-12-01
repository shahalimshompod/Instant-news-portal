import React from 'react';
import HomeFirstSection from '../HomeSections/homeFirstSec/HomeFirstSection';
import HomeSecondSec from '../HomeSections/home2ndSec/HomeSecondSec';

const HomeRoute = () => {
    return (
        <>
        {/* home section-1 here */}
        <section className='container mx-auto mb-28'>
        <HomeFirstSection></HomeFirstSection>
        </section>

        {/* home section-2 here */}
        <section className='container mx-auto'>
            <HomeSecondSec></HomeSecondSec>
        </section>
        </>
    );
};

export default HomeRoute;