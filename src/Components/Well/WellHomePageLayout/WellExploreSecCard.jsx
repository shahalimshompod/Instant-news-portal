import React from 'react';

const WellExploreSecCard = ({ data }) => {
    const { img, route, path } = data;
    return (
        <div className='group'>
            <a href={path} className="relative block">
                <img
                    src={img}
                    alt="Category"
                    className="group-hover:brightness-75 transition duration-300"
                />
                <h3 className="text-2xl font-bebas mt-2 transition duration-300 group-hover:text-blue-600">
                    {route}
                </h3>
            </a>
        </div>

    );
};

export default WellExploreSecCard;