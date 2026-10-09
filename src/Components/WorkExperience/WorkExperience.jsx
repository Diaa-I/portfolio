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
<div className="flex flex-col justify-center mt-10 max-w-5xl mx-auto px-4 font-mono text-sm text-[#121B13]">
  
  <div className="mb-8 border-b border-[#C2CDC2] pb-4">
    <h1 className="text-3xl font-black tracking-tight sm:text-4xl text-[#121B13]">
      WORK_EXPERIENCE
      <span className="text-[#0284C7]">.</span>
    </h1>
  </div>

  <div className="space-y-6">
    {workExperienceData.map((data, index) => {
      return (
        <div 
          key={index}
          className="p-6 bg-white border border-[#C2CDC2] rounded-lg shadow-sm transition-all duration-200 hover:border-[#121B13]/30"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#EAEFEA] pb-3 mb-4 gap-2">
            <div>
              <h2 className="text-xl font-black tracking-tight text-[#121B13]">
                {data.title}
              </h2>
              <h3 className="text-sm font-bold text-[#0284C7] mt-0.5">
                @ {data.company}
              </h3>
            </div>
            <div className="text-xs font-bold text-[#121B13]/50 bg-[#EAEFEA] px-2.5 py-1 rounded select-none font-mono sm:text-right">
              [{data.date}]
            </div>
          </div>

          <ul className="list-none space-y-2.5 text-[#1F2E21] font-sans text-base pl-1">
            {data["contents"].map((content, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-[#0284C7] font-mono text-sm select-none pt-0.5">›</span>
                <span>{content}</span>
              </li>
            ))}
          </ul>
        </div>
      );
    })}
  </div>
</div>

  );
}
