import { FaArrowRight } from "react-icons/fa";

const Hero = () => {

    return (
        <>
            <header className="flex flex-col items-center justify-center h-screen text-white">
                <p className="bg-white text-green-900 py-1 px-3 mb-20 text-[0.70rem] capitalize font-semibold rounded-full md:text-sm">empowering someones AI capabilities</p>
                <div className="text-center mb-10 flex items-center flex-col gap-5 justify-center">
                    <h1 className="capitalize font-semibold w-10/12 md:text-6xl text-4xl text-green-900">empowering aI innovators to build and collaborte</h1>
                    <p className="text-sm text-black md:w-8/12 w-10/12 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsa eaque qui eius aliquid, officia deleniti. Commodi fugiat dolore excepturi accusamus necessitatibus praesentium expedita nihil. Nemo consequatur sit perspiciatis repellendus?</p>
                </div>
                <div className="flex items-center h-12 bg-white rounded-lg md:w-4/12">
                    <input type="text" placeholder="Enter Your Email" className="h-full placeholder:text-gray-500 px-3 outline-none border-none md:w-full text-black" />
                    <button className="h-full bg-green-900 capitalize px-4 font-semibold flex items-center gap-2 rounded-md md:w-11/12" >join the community <FaArrowRight /></button>
                </div>
            </header>
        </>
    );
};
export default Hero;