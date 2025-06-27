import { useEffect, useState } from "react";
import CoursesData, { CoursesCategories } from "../../../data/courses.data";
import CoursesCard from "../Cards/CoursesCard";
import CoursesButton from "./CoursesButtons";
export default function Courses() {
  const [showThisCategory, setShowThisCategory] = useState(0);


  function changeCatgeoryHandler(categoryID) {
    setShowThisCategory(categoryID);
  }
  
  // Filtering Course Data
  let filteredCourseData;
  if (showThisCategory != 0) {
    filteredCourseData = CoursesData.filter(
      (course) => course.categoryID == showThisCategory
    );
  } else {
    filteredCourseData = [...CoursesData];
  }



  return (
    <div className="text-center">
      <h1 className="text-5xl text-white font-extrabold">Courses</h1>
    <div className="flex flex-col items-center justify-center h-[90vh] ">
      {/* <h5 className="text-4xl text-red-600 font-extrabold mb-3">Categories</h5> */}
      {/* bg-[#282831] */}
      <span className="flex flex-col m-5 bg-gradient-to-tl from-[#152EFF] to-blue-100 rounded  h-10 w-[16rem] items-center justify-center">
        <menu>
          {/* Make this a component , now find a way to loop*/}
          {CoursesCategories.map((courseCat) => (
            <CoursesButton
              onClickFun={() => changeCatgeoryHandler(courseCat.categoryID)}
              showThisCategory={showThisCategory}
              CatNum={courseCat.categoryID}
              CatText={courseCat.categoryText}
              key={"cc"+courseCat.categoryID}
            />
          ))}
        </menu>
      </span>
      <div className="flex flex-row flex-wrap w-auto h-auto justify-center ">
        {filteredCourseData.map((course) => (
          <CoursesCard key={"C" + course.id} courseCategory={course.categoryID}>
            <h3>{course.title}</h3>
            <p>{course.platform}</p>
          </CoursesCard>
        ))}
      </div>
    </div>
    </div>
  );
}
