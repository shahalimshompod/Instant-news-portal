import React from 'react';
import HomeRoutes from './HomeRoutes/HomeRoutes';
import { Outlet } from 'react-router';

const HomeRootPage = () => {
    return (
        <section>
            <div>
                <HomeRoutes></HomeRoutes>
                <Outlet></Outlet>
            </div>
        </section>
    );
};

export default HomeRootPage;