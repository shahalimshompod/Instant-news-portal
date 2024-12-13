const MiddleSection = () => {
    return (
        <div className="w-full mx-auto bg-white">
            {/* Image Section */}
            <img
                src="https://fortune.com/img-assets/wp-content/uploads/2024/02/GettyImages-1291367852-e1707415428246.jpg?w=1440&q=75"
                alt="Smiling woman using a phone"
                className="w-full"
            />

            {/* Text Content */}
            <div className="mt-5">
                {/* Category */}
                <p className="text-xl font-semibold text-green-700 uppercase tracking-widest font-bebas">
                    Banking
                </p>

                {/* Title */}
                <h1 className="mt-2 text-4xl font-bold text-gray-900 font-caslon">
                    10 best cash advance apps for December 2024
                </h1>

                {/* Author Info */}
                <div className="mt-4">
                    <p className="text-sm text-gray-700 font-medium font-bebas tracking-widest">
                        BY <span className="font-semibold">Katherine Haan</span>
                    </p>
                    <p className="text-sm text-gray-500 font-light">January 16, 2023</p>
                </div>
            </div>
        </div>
    );
};

export default MiddleSection;