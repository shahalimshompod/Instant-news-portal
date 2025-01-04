import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
    return (
        <div className=" sticky top-0 z-50">
            <div className='py-3 bg-base-100 shadow-lg'>
                <div className="flex justify-between items-center container mx-auto">
                    {/* drawer here */}
                    <div>
                        <div className="drawer">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label htmlFor="my-drawer" className="bg-transparent border-none shadow-none drawer-button hover:border-none hover:bg-transparent hover:shadow-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        className="inline-block h-10 w-10 stroke-current"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        ></path>
                                    </svg>
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label
                                    htmlFor="my-drawer"
                                    aria-label="close sidebar"
                                    className="drawer-overlay"
                                ></label>
                                {/* Close Button */}

                                <ul className="menu bg-white text-base-content min-h-full w-full lg:w-1/3 p-4">
                                    <label htmlFor="my-drawer">
                                        <RxCross1 size={30} />
                                    </label>
                                    {/* Sidebar content here */}
                                    <li>
                                        <a>Sidebar Item 1</a>
                                    </li>
                                    <li>
                                        <a>Sidebar Item 2</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* site name here */}
                    <div className='flex-1 md:flex-none md:navbar-center ml-3 md:ml-0'>
                        <a href="/" className="text-4xl lg:text-5xl font-bold font-caslon">InstantR</a>
                    </div>

                    {/* search button here */}
                    <button className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 md:h-7 md:w-7 lg:h-8 lg:w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;