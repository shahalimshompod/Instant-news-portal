import { NavLink } from "react-router";
import './homeroutes.css'

const HomeRoutes = () => {
    // all types of category/routes will be there
    return (
        <section className="my-14 pl-3 lg:px-0">
            <div className="flex lg:items-center lg:justify-center gap-3 lg:gap-12 lg:container lg:mx-auto overflow-x-scroll lg:overflow-x-hidden">
                <NavLink className="hover:text-red-500 text-[#000]/60 hover:ease-in-out hover:duration-300 font-caslon text-xl font-semibold" to="/">Home</NavLink>
                <NavLink className="hover:text-red-500 text-[#000]/60 hover:ease-in-out hover:duration-300 font-caslon text-xl font-semibold" to="/section/news">News</NavLink>
                <NavLink className="hover:text-red-500 text-[#000]/60 hover:ease-in-out hover:duration-300 font-caslon text-xl font-semibold" to="/section/tech">Tech</NavLink>
                <NavLink className="hover:text-red-500 text-[#000]/60 hover:ease-in-out hover:duration-300 font-caslon text-xl font-semibold" to="/section/finance">Finance</NavLink>
                <NavLink className="hover:text-red-500 text-[#000]/60 hover:ease-in-out hover:duration-300 font-caslon text-xl font-semibold" to="/section/leadership">Leadership</NavLink>
                <NavLink className="hover:text-red-500 text-[#000]/60 hover:ease-in-out hover:duration-300 font-caslon text-xl font-semibold" to="/well">Well</NavLink>
                <NavLink className="hover:text-red-500 text-[#000]/60 hover:ease-in-out hover:duration-300 font-caslon text-xl font-semibold" to="/recommend">Recommend</NavLink>
                <NavLink className="hover:text-red-500 text-[#000]/60 hover:ease-in-out hover:duration-300 font-caslon text-xl font-semibold" to="/section/instant-360">Instant 360</NavLink>
            </div>
        </section>
    );
};

export default HomeRoutes;