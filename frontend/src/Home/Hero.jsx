import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
    return (
        <>
            <header className="flex flex-col items-center justify-center min-h-screen text-white px-4">
                <p className="bg-white text-green-900 py-1 px-3 mb-8 text-xs capitalize font-semibold rounded-full md:text-sm">
                    empowering someone's AI capabilities
                </p>
                <div className="text-center mb-8 flex items-center flex-col gap-4 justify-center">
                    <h1 className="capitalize font-semibold w-full md:w-10/12 text-3xl md:text-5xl lg:text-6xl text-green-900">
                        empowering AI innovators to build and collaborate
                    </h1>
                    <p className="text-sm md:w-10/12 w-full text-black mx-auto md:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsa eaque qui eius aliquid, officia deleniti. Commodi fugiat dolore excepturi accusamus necessitatibus praesentium expedita nihil. Nemo consequatur sit perspiciatis repellendus?
                    </p>
                </div>
                <div className="flex items-center bg-white rounded-lg w-full md:w-4/12 px-2">
                    <input 
                        type="text" 
                        placeholder="Enter Your Email" 
                        className="h-full placeholder:text-gray-500 px-3 py-2 outline-none border-none w-full text-black"
                    />
                    <button className="h-full bg-green-900 capitalize px-4 font-semibold flex items-center gap-2 rounded-md w-full md:w-auto mt-2 md:mt-0">
                        join the community <FaArrowRight />
                    </button>
                </div>
            </header>
        </>
    );
};

export default Hero;
