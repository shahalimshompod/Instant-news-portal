import { RxCross1 } from "react-icons/rx";

const SearchBar = ({ onClose, setSearchTerm, searchTerm }) => {
    

    

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="flex items-center justify-between bg-white shadow-md lg:px-12 py-3 md:py-5 fixed w-full">
            <div>
                <a className="btn btn-ghost text-xl md:text-2xl lg:text-4xl font-caslon">InstantR</a>
            </div>

            <div className="w-10/12">
                <input
                    type="text"
                    placeholder="Search InstantR..."
                    className="font-sora w-full input focus:outline-none focus:border-b-black focus:border-t-0 focus:border-x-0 rounded-none border border-b-black text-lg md:text-xl lg:text-2xl"
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <button onClick={onClose} className="btn btn-circle bg-transparent border-none shadow-none hover:bg-transparent">
                    <RxCross1 size={35} />
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
