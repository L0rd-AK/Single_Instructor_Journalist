import Banner from "../banner/Banner";
import Courses from "../course collection/Courses";
import Details from "../details/Details";
import CourseJourney from "../journey/CourseJourney";
import MainCourse from "../main/MainCourse";

const Home = () => {
    return (
        <div>
            <Banner />
            <Details />
            <CourseJourney />
            <MainCourse />
            <Courses />
        </div>
    );
};

export default Home;