import { useEffect, useState } from "react";
import LatestBlogsInSearch from "./SearchResultContainer";
import SearchBar from "./SearchBar";
import axios from "axios";

const SearchLayout = ({ isOpen, onClose, children }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([])
    const [loading, setLoading] = useState(true)


    // search
    useEffect(() => {
        if (searchTerm) {
            axios.get(`https://instant-news-portal-server.vercel.app/search?query=${searchTerm}`)
                .then((response) => {
                    setSearchResult(response?.data);
                    setLoading(false)
                })
                .catch((error) => {
                    console.error('Error fetching search results:', error);
                });
        } else {
            setSearchResult([]);
        }
    }, [searchTerm]);


    useEffect(() => {
        if (isOpen) {

            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // Cleanup function
        return () => {
            document.body.style.overflow = "auto";
        };

    }, [isOpen]);
    if (!isOpen) return null;
    return (
        <div className="absolute inset-0 z-50 h-screen">
            <SearchBar onClose={onClose} setSearchTerm={setSearchTerm}></SearchBar>
            <LatestBlogsInSearch searchResult={searchResult} searchTerm={searchTerm} loading={loading}></LatestBlogsInSearch>
        </div>
    );
};

export default SearchLayout;