import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className="mt-24 border-y border-black container mx-auto">
            <footer className="bg-white p-10">
                <div className="footer flex flex-col md:flex-row md:justify-between text-base-content container mx-auto space-y-10 md:space-y-0">
                    <nav className="md:w-1/4">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-montserrat font-bold mb-4">
                                <a href="#">Description</a>
                            </h1>
                            <p className="text-sm md:text-base font-caslon line-clamp-5">
                                <a href="#">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit itaque placeat accusamus deleniti. Expedita tempora, voluptate voluptatibus reiciendis obcaecati sed quod dolores dolore laborum debitis sunt, reprehenderit quia labore iure ab id recusandae fugiat vel alias ipsum facilis corrupti. Vel molestias ducimus ratione provident distinctio autem. Excepturi eligendi dolorum alias.
                                </a>
                            </p>
                        </div>
                    </nav>
                    <div className="hidden md:block border-l border-black h-44"></div>
                    <nav>
                        <h6 className="footer-title text-black font-caslon font-bold text-lg">Hot links</h6>
                        <ul className="space-y-2 font-caslon">
                            <li><a className="link link-hover" href='/'>Home</a></li>
                            <li><a className="link link-hover" href='#'>Shop</a></li>
                            <li><a className="link link-hover" href='/section/blogs'>Blogs</a></li>
                            <li><a className="link link-hover" href='/well'>Well</a></li>
                        </ul>
                    </nav>
                    <div className="hidden md:block border-l border-black h-44"></div>
                    <nav>
                        <h6 className="footer-title font-bold text-lg font-caslon text-black">Company</h6>
                        <ul className="space-y-2 font-caslon">
                            <li><a className="link link-hover" href='#'>About us</a></li>
                            <li><a className="link link-hover" href='#'>Contact</a></li>
                            <li><a className="link link-hover" href='#'>Jobs</a></li>
                            <li><a className="link link-hover" href='#'>Press kit</a></li>
                        </ul>
                    </nav>
                    <div className="hidden md:block border-l border-black h-44"></div>
                    <nav>
                        <h6 className="footer-title font-bold text-lg text-black font-caslon">Legal</h6>
                        <ul className="space-y-2 font-caslon">
                            <li><a className="link link-hover" href='#'>Terms of use</a></li>
                            <li><a className="link link-hover" href='#'>Privacy policy</a></li>
                            <li><a className="link link-hover" href='#'>Cookie policy</a></li>
                        </ul>
                    </nav>
                </div>
            </footer>
            <footer className="text-base-content border-y border-black px-5 md:px-10 py-4">
                <div className="footer container mx-auto flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
                    <aside className="flex items-center space-x-4 md:space-x-6">
                        <div className="border-x border-black px-3 flex items-center space-x-4">
                            <a href="/" className="text-3xl md:text-4xl lg:text-6xl font-bold font-caslon">InstantR</a>
                            <div>
                                <p className="font-montserrat text-xs md:text-sm">Developed and maintained by</p>
                                <p className="font-bebas text-lg md:text-2xl">Shah Alim Shompod</p>
                            </div>
                        </div>
                    </aside>
                    <nav className="flex items-center space-x-5">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <FaLinkedin size={25} className="hover:text-blue-500 transition-colors" />
                        </a>
                        <a href="https://x.com/" target="_blank" rel="noreferrer">
                            <BsTwitterX size={25} className="hover:text-blue-400 transition-colors" />
                        </a>
                        <a href="https://youtube.com/" target="_blank" rel="noreferrer">
                            <FaYoutube size={30} className="hover:text-red-500 transition-colors" />
                        </a>
                        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                            <FaFacebook size={25} className="hover:text-blue-700 transition-colors" />
                        </a>
                    </nav>
                </div>
            </footer>
            <p className="text-center my-4 font-montserrat text-sm">
                © 2025 <span className="font-caslon font-bold">InstantR.</span> All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
