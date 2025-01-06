import React from 'react';
import { NavLink } from 'react-router';

const WellHomeRoutes = () => {
    return (
        <div className='flex items-center gap-6 md:gap-10 my-10'>
            <NavLink className='font-caslon text-xl font-bold text-black/60' to='/well' end>Home</NavLink>
            <NavLink className='font-caslon text-xl font-bold text-black/60' to='/well/section/life'>Life</NavLink>
            <NavLink className='font-caslon text-xl font-bold text-black/60' to='/well/section/health'>Health</NavLink>
            <NavLink className='font-caslon text-xl font-bold text-black/60' to='/well/section/mind'>Mind</NavLink>
            <NavLink className='font-caslon text-xl font-bold text-black/60' to='/well/section/food'>Food</NavLink>
        </div>
    );
};

export default WellHomeRoutes;