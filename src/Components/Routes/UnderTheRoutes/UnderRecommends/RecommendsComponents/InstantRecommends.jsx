import O from "../../../../../assets/icons/o.png";
import RecommendsRoutesContainer from "./RecommendsRoutesContainer";
const InstantRecommends = () => {
    return (
        <div className="flex flex-col items-center ">
            <div className="py-10">
                <h1 className="text-center">
                    <a className="text-6xl flex items-center"><span className="font-caslon">InstantR </span><span className="font-bebas flex items-center text-green-500">Rec<span><img className="w-[45px] pb-2" src={O} alt="o" /></span>mmends</span></a>
                </h1>
            </div>
            <div>
                <RecommendsRoutesContainer></RecommendsRoutesContainer>
            </div>
        </div>
    );
};

export default InstantRecommends;