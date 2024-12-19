import { RxCross1 } from "react-icons/rx";
import O from "../../../../../assets/icons/o.png";
import RecommendsRoutesContainer from "./RecommendsRoutesContainer";
const InstantRecommends = () => {
    return (
        <div className="lg:flex lg:flex-col lg:items-center lg:justify-between sticky top-0 lg:static bg-white">

            <div>
                <div className="flex md:justify-between items-center border-b-2 lg:border-none">
                    {/* drawer here */}
                    <div>
                        <div className="drawer block lg:hidden">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">
                                {/* Page content here */}
                                <label
                                    htmlFor="my-drawer"
                                    className="bg-transparent border-none shadow-none drawer-button hover:border-none hover:bg-transparent hover:shadow-none"
                                >
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



                    <div className="py-4 md:py-5 ml-3 md:ml-0">
                        <h1>
                            <a className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl flex items-center"><span className="font-caslon">InstantR </span><span className="font-bebas font-bold flex items-center text-green-500">Rec<span><img className="w-[30px] lg:w-[45px] pb-2" src={O} alt="o" /></span>mmends</span></a>
                        </h1>
                    </div>

                    <div className="hidden md:block lg:hidden">
                        <p className="text-white">.</p>
                    </div>


                </div>
            </div>
            <div>
                <RecommendsRoutesContainer></RecommendsRoutesContainer>
            </div>
        </div>
    );
};

export default InstantRecommends;