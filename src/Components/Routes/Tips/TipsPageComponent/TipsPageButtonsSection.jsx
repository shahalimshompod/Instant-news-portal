import travelImage from "../../../../assets/images/travel.jpg"
import HomeSectionVideoLayout from "../../../VideoRoute/HomeSectionVideoLayout";
import CollapsibleSection from "./ColluapsibleSection";
import TipsPageContentSection from "./TipsPageContentSection";

const TipsPageButtonsSection = () => {
    return (
        <div className="md:my-10 lg:my-20">

            <div className="w-11/12 mx-auto">
                <h1 className="font-bebas text-4xl md:text-5xl  xl:text-6xl mb-5 border-b-4 border-black/20 pb-2">15 Best Tips for Traveling Like a Pro</h1>
                <img className="rounded-xl" src={travelImage} alt="Travel Image" />
                <h3 className="my-10 text-xl">
                    Traveling can be one of the most enriching experiences of your life, but to make the most of it, preparation is key. From researching your destination and packing light to understanding local customs, these tips can help you have a smooth and enjoyable journey. Always keep important documents secure, stay hydrated, and be mindful of cultural differences. Don't forget to use public transportation for an authentic experience and carry a universal adapter to keep your devices powered. Most importantly, stay present, enjoy each moment, and embrace the adventure that comes with exploring new places!
                </h3>
                <div className="md:w-10/12 mx-auto">
                    <CollapsibleSection></CollapsibleSection>
                    <h4 className="my-10 font-sora font-bold text-xl">Lets begin...</h4>
                    <div className="md:w-11/12 mx-auto">
                        <TipsPageContentSection></TipsPageContentSection>
                        <HomeSectionVideoLayout></HomeSectionVideoLayout>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default TipsPageButtonsSection;