import './Banner.css'
import { FaSearch } from "react-icons/fa";
const Banner = () => {
    return (
        <div className='flex float-left gap-10 mb-20'>
            <div className='grid justify-center items-center'>
                <div className='space-y-5'>
                    <h3 className="text_main font-semibold text-lg">START LEARNING FROM HOME</h3>
                    <h1 className="font-bold text-6xl uppercase">Connect With Arun <br /> & Start Learning</h1>
                    <p>I am Highly Experienced In Web Programming. I am Teaching Online For About 20+ Years. <br /> I Can Help You To Improve Your Skill</p>
                    <div className='flex float-left relative'>
                        <input type="text" placeholder="Search here" className="input border-[#FF630E] input-bordered w-80 h-14" />
                        <button className='btn bg-[#FF630E] absolute ml-64 mt-1'> <FaSearch className='text-white text-xl' /> </button>
                    </div>
                </div>
            </div>
            <div>
                <img className='w-full min-h-screen' src="https://i.ibb.co/dcy5PBT/single-instructor-1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;