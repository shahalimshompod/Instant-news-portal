const HomeSecondSecCard = ({card}) => {
    // news card here with category
    return (
        <div>
            <div className='w-full'>
                <div className='mb-2'>
                    <img src="https://i.ibb.co.com/12HZwPM/Getty-Images-2184329067-e1732106649612.jpg" alt="" />
                </div>
                <div>
                    <p className='text-red-600 text-lg font-bebas tracking-widest font-bold mb-4'>{card.category}</p>
                    <h2 className='text-2xl font-caslon font-semibold mb-5'>{card.heading}</h2>
                    <p className='font-sora text-sm font-thin'>BY <span className='font-bold'>{card.name}</span></p>
                    <p className='text-[#000]/50 font-sora text-sm '>{card.date}</p>
                </div>
            </div>
        </div>
    );
};

export default HomeSecondSecCard;