import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import SearchLayout from '../../Routes/SearchLayout/SearchLayout';
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowUp } from 'react-icons/io';

const WellNavbar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false)

    // toggle buttons states
    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);

    // toggle buttons func
    const handleToggle1 = () => {
        setToggle1(!toggle1)
    }
    const handleToggle2 = () => {
        setToggle2(!toggle2)
    }
    const handleToggle3 = () => {
        setToggle3(!toggle3)
    }

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
                                <label htmlFor="my-drawer" className="bg-transparent border-none shadow-none drawer-button hover:border-none hover:bg-transparent hover:shadow-none hover:cursor-pointer">
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

                                <ul className="bg-white text-base-content min-h-full w-full lg:w-1/3 p-4">
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="my-drawer" className="hover:cursor-pointer">
                                            <RxCross1 size={30} />
                                        </label>
                                        <a href="/" className="text-lg hover:underline font-bebas tracking-wider hover:text-red-600 ease-in-out duration-300">Homepage</a>
                                    </div>
                                    {/* Sidebar content here */}
                                    <h3 className="font-sora text-2xl font-extrabold my-5 hover:text-blue-600"><a href="/" >Sections</a></h3>

                                    <div className="pl-7 flex flex-col gap-5 w-1/2">
                                        < li className="text-xl text-black font-bebas tracking-wider">
                                            <a className="hover:text-blue-600" href="/section/our-goal">Our Goal</a>
                                        </li>
                                        <li className="text-xl text-black font-bebas tracking-wider">
                                            <a className="hover:text-blue-600" href="/recommend">Recommends</a>
                                        </li>
                                        <li className="text-xl text-black font-bebas tracking-wider">
                                            <a className="hover:text-blue-600" href="/section/blogs">Blogs</a>
                                        </li>
                                        <li className="text-xl text-black font-bebas tracking-wider">
                                            <a className="hover:text-blue-600" href="/section/personality">Personality</a>
                                        </li>
                                        <li className="text-xl text-black font-bebas tracking-wider">
                                            <a className="hover:text-blue-600" href="/section/Newsletters">Newsletters</a>
                                        </li>
                                        <li className="text-xl text-black font-bebas tracking-wider">
                                            <a className="hover:text-blue-600" href="/section/magazine">Magazine</a>
                                        </li>
                                        <li className="text-xl text-black font-bebas tracking-wider">
                                            <div className="flex items-center justify-between">
                                                <a className="hover:text-blue-600" href="/section/tech">Tech</a>
                                                <button onClick={handleToggle1} className="btn btn-circle bg-transparent hover:bg-transparent border-none shadow-none hover:text-blue-600">{toggle1 ? (<IoIosArrowUp size={20} />) : (<IoIosArrowForward size={20} />)}</button>
                                            </div>
                                            {
                                                toggle1 && (<li className="text-lg text-black font-bebas tracking-wider ml-10">
                                                    <a className="hover:text-blue-600" href="/section/ai">AI</a>
                                                </li>)
                                            }
                                        </li>

                                        <li className="text-xl text-black font-bebas tracking-wider">
                                            <div className="flex items-center justify-between">
                                                <a className="hover:text-blue-600" href="/section/explore">Explore</a>
                                                <button onClick={handleToggle2} className="btn btn-circle bg-transparent hover:bg-transparent border-none shadow-none hover:text-blue-600">{toggle2 ? (<IoIosArrowUp size={20} />) : (<IoIosArrowForward size={20} />)}</button>
                                            </div>
                                            {
                                                toggle2 && (<ul>
                                                    <li className="text-lg text-black font-bebas tracking-wider ml-10 mb-1">
                                                        <a className="hover:text-blue-600" href="/section/travel">Travel</a>
                                                    </li>
                                                    <li className="text-lg text-black font-bebas tracking-wider ml-10">
                                                        <a className="hover:text-blue-600" href="/section/travel/tips">Tips</a>
                                                    </li>
                                                </ul>)
                                            }
                                        </li>

                                        <li className="text-xl text-black font-bebas tracking-wider">
                                            <div className="flex items-center justify-between">
                                                <a className="hover:text-blue-600" href="/well">Well</a>
                                                <button onClick={handleToggle3} className="btn btn-circle bg-transparent hover:bg-transparent border-none shadow-none hover:text-blue-600">{toggle3 ? (<IoIosArrowUp size={20} />) : (<IoIosArrowForward size={20} />)}</button>
                                            </div>
                                            {
                                                toggle3 && (<ul>
                                                    <li className="text-lg text-black font-bebas tracking-wider ml-10 mb-1">
                                                        <a className="hover:text-blue-600" href="/well/section/life">Life</a>
                                                    </li>
                                                    <li className="text-lg text-black font-bebas tracking-wider ml-10 mb-1">
                                                        <a className="hover:text-blue-600" href="/well/section/health">Health</a>
                                                    </li>
                                                    <li className="text-lg text-black font-bebas tracking-wider ml-10 mb-1">
                                                        <a className="hover:text-blue-600" href="/well/section/mind">Mind</a>
                                                    </li>
                                                    <li className="text-lg text-black font-bebas tracking-wider ml-10 mb-1">
                                                        <a className="hover:text-blue-600" href="/well/section/food">Food</a>
                                                    </li>
                                                </ul>)
                                            }
                                        </li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* site name here */}
                    <div className='flex-1 md:flex-none md:navbar-center ml-3 md:ml-0'>
                        <a href="/well" className="text-4xl lg:text-5xl font-bold font-caslon">InstantR <span className='font-bebas font-bold text-[#2E3DFF]'>Well<span className='text-[#00AEEF]'>.</span></span></a>
                    </div>

                    {/* search button here */}
                    <button onClick={handleOpenModal} className="btn bg-transparent border-none shadow-none btn-circle hover:bg-transparent">
                        <IoSearchOutline size={30} />
                    </button>
                    <SearchLayout isOpen={isModalOpen} onClose={handleCloseModal}></SearchLayout>
                </div>
            </div>
        </div>
    );
};

export default WellNavbar;