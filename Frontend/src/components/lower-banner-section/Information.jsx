import { FaLaptopFile } from "react-icons/fa6";
const Information = () => {
    return (
        <div className="">
            <div className="ml-80">
                <div className="flex float-left gap-10">
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
            <div>
                <div>
                    <div>
                    <FaLaptopFile />
                    </div>
                    <div></div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>

    );
};

export default Information;