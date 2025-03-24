import { useEffect, useState } from "react";
import HomeFirstSection from "../../HomeSections/homeFirstSec/HomeFirstSection";
import MostPopularSection from "../../MostPopularSection/MostPopularSection";
import WellExploreSection from "../WellHomePageLayout/WellExploreSection";
import axios from "axios";
import CategoryWiseHomeBlogSectionLayout from "../../CategoryWiseHomeBlogSections/CategoryWiseHomeBlogSectionLayout";

const WellHomePage = () => {
    const [blogData, setBlogData] = useState({});


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('http://localhost:5000/well/home-category-sections')
                setBlogData(res?.data);
            } catch (err) {
                console.error(err);
            }
        }
        fetchData();
    }, [])

    return (
        <div className="container mx-auto ">
            <div className="flex flex-col lg:flex-row gap-10 px-3 xl:px-0">
                <section className="w-full">
                    <HomeFirstSection></HomeFirstSection>
                </section>
                <MostPopularSection></MostPopularSection>
            </div>

            <div className="px-3 xl:px-0">
                <WellExploreSection></WellExploreSection>
            </div>

            <section className='my-20'>
                {
                    Object.keys(blogData).map((category, index) => (
                        <CategoryWiseHomeBlogSectionLayout key={index} category={category} dataForBlogs={blogData[category]}></CategoryWiseHomeBlogSectionLayout>
                    ))
                }
            </section>
        </div>
    );
};

export default WellHomePage;