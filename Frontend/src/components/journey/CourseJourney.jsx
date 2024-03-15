import { FaLaptopFile } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { LuBookOpenCheck } from "react-icons/lu";
const CourseJourney = () => {
    return (
        <div className="">
            <div className="mt-10 flex justify-center items-center">
                <div className="flex justify-center items-center flex-col lg:flex-row lg:float-left gap-10">
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-5xl text-[#FF630E] font-bold">1,200+</h1>
                        <p className="text-xl font-bold uppercase">Students Enrolled</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-5xl text-[#FF630E] font-bold">5+</h1>
                        <p className="text-xl font-bold uppercase">Online Courses</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-5xl text-[#FF630E] font-bold">99%</h1>
                        <p className="text-xl font-bold uppercase">Success Rate</p>
                    </div>
                </div>
            </div>
            <div className="flex lg:float-left lg:flex-row flex-col gap-10 mt-10 mb-20">
                <div className=" flex float-left gap-5 justify-center items-center p-5 shadow-lg">
                    <div>
                        <FaLaptopFile className="text-5xl text-[#FF630E]" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Life Time Access</h1>
                        <p>Once you buy the course, you can access <br /> course meterial for life time</p>
                    </div>
                </div>
                <div className=" flex float-left gap-5 justify-center items-center p-5 shadow-lg">
                    <div>
                        <LuBookOpenCheck className="text-5xl text-[#FF630E]" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Free Course Materials</h1>
                        <p>You will get premium course materials</p>
                    </div>
                </div>
                <div className=" flex float-left gap-5 justify-center items-center p-5 shadow-lg">
                    <div>
                        <BiSupport className="text-5xl text-[#FF630E]" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">Dedicated Support</h1>
                        <p>Once you buy the course, you can access <br /> course metarial for life time</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseJourney;