import WorkExperienceData from "../../../data/work_experience.data";

export default function WorkExperience() {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {WorkExperienceData.map((data) => {
        return (
          <div className={data.class}>
            <h2 className="text-3xl font-extrabold text-center">{data.title}</h2>
            <h3 className="text-1xl font-bold text-center">{data.company}</h3>
            <p className="text-lg font-semibold text-center">{data.date}</p>
            <ul className="list-disc p-5">
              {data['contents'].map((content) => (
                <li className="m-1">{content}</li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  );
}
