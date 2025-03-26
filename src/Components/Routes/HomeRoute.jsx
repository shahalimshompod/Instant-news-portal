import React, { useEffect, useState } from "react";
import HomeFirstSection from "../HomeSections/homeFirstSec/HomeFirstSection";
import HomeSecondSec from "../HomeSections/home2ndSec/HomeSecondSec";
import NewsLetterSection from "../HomeSections/NewsLetterSec/NewsLetterSection";
import CategoryWiseHomeBlogSectionLayout from "../CategoryWiseHomeBlogSections/CategoryWiseHomeBlogSectionLayout";
import axios from "axios";
import HomeSectionVideoLayout from "../VideoRoute/HomeSectionVideoLayout";

const HomeRoute = () => {
  const [blogData, setBlogData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://instant-news-portal-server.vercel.app/home-category-sections"
        );
        setBlogData(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  
  return (
    <>
      {/* home section-1 here */}
      <section className="container mx-auto lg:mb-28 mb-10">
        <HomeFirstSection></HomeFirstSection>
      </section>

      {/* home section-2 here */}
      <section className="container mx-auto">
        <HomeSecondSec></HomeSecondSec>
      </section>

      {/* video gallery section */}
      <section>
        <HomeSectionVideoLayout></HomeSectionVideoLayout>
      </section>

      {/* newsletter section here (section-3) */}
      <section>
        <NewsLetterSection></NewsLetterSection>
      </section>
      <section className="my-20">
        {Object.keys(blogData).map((category, index) => (
          <CategoryWiseHomeBlogSectionLayout
            key={index}
            category={category}
            dataForBlogs={blogData[category]}
          ></CategoryWiseHomeBlogSectionLayout>
        ))}
      </section>
    </>
  );
};

export default HomeRoute;
