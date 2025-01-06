import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios'

export const DataContext = createContext(null);
const DataContextProvider = ({children}) => {
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:5000/section/blogs');
                setBlogData(response.data)
            } catch(err){
                setError(err.message);
            }finally{
                setLoading(false)
            }
        }
        fetchData()
    },[])
    return (
        <div>
            <DataContext.Provider value={[blogData]}>
                {children}
            </DataContext.Provider>
        </div>
    );
};

export default DataContextProvider;