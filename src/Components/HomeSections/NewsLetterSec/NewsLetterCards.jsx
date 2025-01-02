const NewsLetterCards = ({ data, index }) => {
  
    return (
      <div
        className={`text-white lg:h-48 mr-5 mb-5 lg:mb-10 border-b border-white pb-4 lg:pb-0 ${
          index < 3 ? "lg:border-b" : "lg:border-none"
        }`}
      >
        {/* h3 and p tags will be wrapped by the Link tag later for routing */}
        <h3 className="font-bebas text-xl">{data.title}</h3>
        <p className="text-lg font-sora w-5/6 mb-3">{data.description}</p>
        <p className="text-sm font-semibold">
          By{" "}
          <span className="font-bebas text-base tracking-widest">
            {data.author}
          </span>
        </p>
      </div>
    );
  };
  
  export default NewsLetterCards;
  