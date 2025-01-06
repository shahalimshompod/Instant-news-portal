import { useParams } from "react-router";
import CategoryWiseBlogs from "./CategoryWiseBlogs";
import { useEffect, useState } from "react";
import axios from "axios";
import MostPopularSection from "../MostPopularSection/MostPopularSection";

const CategoryWIseBlogLayout = () => {
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const {category} = useParams();

    // fetching data dynamically for different categories.
    useEffect(()=>{
        const fetchData = async() =>{
            try{
                const res = await axios.get(`http://localhost:5000/section/${category}`) 
                setBlogData(res.data);
            }catch(error){
                setError(error);
            }finally{
                setLoading(false)
            }
        }
        fetchData();
    },[category])
    return (
        <div className="container mx-auto flex flex-col xl:flex-row gap-10 px-3 xl:px-0">
            <CategoryWiseBlogs blogData={blogData}></CategoryWiseBlogs>
            <MostPopularSection></MostPopularSection>
        </div>
    );
};

export default CategoryWIseBlogLayout;