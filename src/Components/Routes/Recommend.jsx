import underConstruction from '../../assets/images/under-construction.png'

const Recommend = () => {
    return (
        <div className='flex flex-col items-center'>
            <img className='w-11/12 lg:w-1/4' src={underConstruction} alt="Under Construction" />
            <a href="/"><button className='btn rounded-none bg-white border-none shadow-none hover:bg-black hover:text-white ease-in-out duration-500'>Return</button></a>
        </div>
    );
};

export default Recommend;