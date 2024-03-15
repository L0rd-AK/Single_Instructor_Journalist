
const MainCourse = () => {
    return (
            <div className="mt-20">
                <h1 className="mt-10 mb-5 text-5xl font-bold text-center uppercase">What You will learn in <br /> this Course</h1>
               <div className="flex justify-center items-center mb-10"> <hr className="border-[#FF630E] border-2 w-4/12 rounded-lg" /></div>
                <div className="grid grid-cols-2 w-full">
                <div data-aos="fade-right">
                    <img className="w-full" src="https://i.ibb.co/grsKRBC/Week-1.png" alt="" />
                </div>
                <div className="w-4/12"></div>
                <div className="w-4/12"></div>
                <div data-aos="fade-left">
                    <img className="w-full" src="https://i.ibb.co/p320TZy/Week-2.png" alt="" />
                </div>
            </div>
            </div>
        
    );
};

export default MainCourse;