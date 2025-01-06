import React from 'react';
import LatestCardInSearch from './LatestCardInSearch';

const SearchResults = ({ searchResult, searchTerm, loading }) => {

    // Loader
    if (loading) {
        return (
            <div className="flex justify-center items-center h-[50vh]">
                <span className="loading loading-bars loading-md"></span>
            </div>
        );
    }

    return (
        <div className='mt-24'>
            <div>
                {
                    searchResult?.length === 0 ? "" : <p className='font-sora text-black/60 bg-slate-300 px-3 py-3'>{searchResult.length} Search results for "{searchTerm}"</p>
                }
            </div>

            <div>
                {
                    searchResult?.length === 0 ? <h1 className='font-sora text-black/60 text-center my-36 text-base md:text-lg lg:text-xl font-bold'>No results found. Please search a different keyword.</h1> : <div className=''>
                        {
                            searchResult?.map((result, index) => <LatestCardInSearch key={index} data={result}></LatestCardInSearch>)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default SearchResults;