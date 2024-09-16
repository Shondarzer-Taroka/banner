

const Banner = () => {
    return (
        <section>
             <div className="relative h-[550px] flex items-center flex-col md:flex-row justify-between text-center">
                    {/* Background Image */}
                    <img src="/src/assets/equipment-3089883_1280.jpg" alt="Slide 1" className="w-full h-full object-cover absolute inset-0" />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    
                    {/* Left Content */}
                    <div className="relative z-10 p-8 max-w-md">
                        <h1 className="text-4xl font-bold text-white mb-4">Amazing Deals on Products</h1>
                        <p className="text-white mb-4">Discover the latest offers and exclusive deals on our products. Don`&apos;`t miss out on these great savings!</p>
                        <button className="btn animate-bounce bg-blue-500 text-white px-6 py-2 rounded-full">
                            Shop Now
                        </button>
                    </div>

                    {/* Right Content - Animated Polygon for Savings */}
                    <div className="relative z-10 p-8 mr-4">
                        <div className="relative flex items-center justify-center w-32 h-32">
                            <div className="animate-spin-slow bg-yellow-400 w-full h-full clip-polygon"></div>
                            <span className="absolute text-lg font-bold text-black">Save 20%</span>
                        </div>
                    </div>
                </div>


                {/* kljh */}


                <section
            className="min-h-screen flex items-center justify-between bg-cover bg-center "
            style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/src/assets/equipment-3089883_1280.jpg")', // Dark overlay added with linear-gradient
                backgroundSize: 'cover',  // Ensures the background image covers the entire section
                backgroundPosition: 'center',  // Centers the background image
            }} // Set your background image URL here
         >


        </section>
        </section>
    );
};

export default Banner;