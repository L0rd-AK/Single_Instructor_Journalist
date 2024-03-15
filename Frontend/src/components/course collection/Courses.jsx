import { useState } from "react";
import Card from "./Card";

const Courses = () => {
    const [card,setCard]=useState([]);
    fetch('/course.json')
    .then(res=>res.json())
    .then(data=>{
        setCard(data);
    })
    return (
        <div className="mb-10 mx-5">
            <h1 className="text-3xl font-bold my-10">My Courses</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
                {
                    card.map(i=> <Card key={i.title} card={i} />)
                }
            </div>
        </div>
    );
};

export default Courses;