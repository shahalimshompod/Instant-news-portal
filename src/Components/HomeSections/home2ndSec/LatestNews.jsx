import axios from 'axios';
import React, { useEffect, useState } from 'react';

const LatestNews = () => {
    const [latestData, setLatestData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    console.log(latestData);

    useEffect(()=> {
        const fetchLatestData = async () =>{
            try{
                const res = await axios.get('http://localhost:5000/latest-blogs');
                setLatestData(res.data);
            }catch(error){
                setError(error);
            }finally{
                setLoading(false)
            }
        }
        fetchLatestData()
    },[])

    return (
        <div className='px-3 lg:px-0'>
            <div className='lg:w-[370px] border-l-0 lg:border-l-4 pl-4 border-[#EFF8FA]'>
                <div>
                    <h1 className='font-caslon text-3xl font-bold'>Latest</h1>
                    <hr className=' border-black my-3' />
                    <div className='w-full'>
                        {
                            latestData.map(data => <div key={data._id}>
                                <h4 className='font-caslon font-bold text-xl'>{data.blog_title}</h4>
                                <p className='mb-3 text-xs font-sora'>{data.blog_added_date}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;