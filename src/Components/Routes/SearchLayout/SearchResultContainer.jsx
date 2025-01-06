import LatestBlogContentsInSearch from "./LatestBlogContentsInSearch";
import SearchResults from "./SearchResults";

const SearchResultContainer = ({ searchResult, searchTerm, loading }) => {
    
    return (
        <div className="bg-white w-full h-screen 2xl:px-44 flex-1 overflow-y-auto">
            {
                searchTerm ? <SearchResults searchResult={searchResult} searchTerm={searchTerm} loading={loading}></SearchResults> : <LatestBlogContentsInSearch></LatestBlogContentsInSearch> 
            }
        </div>
    );
};

export default SearchResultContainer;