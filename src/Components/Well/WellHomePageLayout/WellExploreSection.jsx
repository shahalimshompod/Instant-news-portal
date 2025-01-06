import React from 'react';
import WellExploreSecCard from './WellExploreSecCard';

const WellExploreSection = () => {
    const exploreData = [
        { img: "https://i.ibb.co.com/tKdKZqK/pexels-freestockpro-1007858.jpg", route: "Life", path: "/well/section/life" },
        { img: "https://i.ibb.co.com/wgSnKVm/pexels-pixabay-39671.jpg", route: "Health", path: "/well/section/health" },
        { img: "https://i.ibb.co.com/FYcg93h/pexels-kelvin809-810775.jpg", route: "Mind", path: "/well/section/mind" },
        { img: "https://i.ibb.co.com/VM8DsJ4/pexels-ella-olsson-572949-1640777.jpg", route: "Food", path: "/well/section/food" }
    ]

    return (
        <div className='my-16'>
            <h1 className='font-caslon font-bold text-4xl border-b-2 border-black pb-1'>Explore</h1>
            <div className='grid grid-cols-2 lg:grid-cols-4 mt-5 gap-10'>
                {
                    exploreData.map((data, index) => <WellExploreSecCard key={index} data={data}></WellExploreSecCard>)
                }
            </div>
        </div>
    );
};

export default WellExploreSection;