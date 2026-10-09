import { useLayoutEffect, useState } from "react";
import WorkExperienceData from "../../../data/work_experience.data";
import { supabase } from "../../supabase";

export default function WorkExperience({ setHasLoaded }) {
  const [workExperienceData, setWorkExperienceData] = useState(null);
  useLayoutEffect(() => {
    async function loadAllWorkExperience() {
      const { data: wrkData, error: wrkError } = await supabase
        .from("work_experience")
        .select("*")
        .order("id", { ascending: true });
      if (wrkError) {
        console.error(wrkError);
        return;
      }
      setWorkExperienceData(wrkData);
      setHasLoaded((oldData) => ({ ...oldData, Work_Experience: true }));
    }
    loadAllWorkExperience();
  }, []);

  if (workExperienceData == null) return <p>Loading ...</p>;

  return (
    <div className="flex flex-col flex-wrap justify-center mt-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Work Experience
          <span className="text-cyan-400">.</span>
        </h1>
      </div>
      {workExperienceData.map((data) => {
        return (
          <div className="m-5 bg-[#EFEFF2]   ">
            <h2 className="lg:text-3xl font-extrabold text-center my-1 text-2xl">
              {data.title}
            </h2>
            <h3 className="lg:text-1xl font-bold text-center">
              {data.company}
            </h3>
            <p className="lg:text-lg font-semibold text-center">{data.date}</p>
            <ul className="list-disc p-5">
              {data["contents"].map((content) => (
                <li className="m-1">{content}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
