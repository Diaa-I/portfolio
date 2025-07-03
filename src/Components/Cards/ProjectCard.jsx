export default function ProjectCard({ prj_details, onClickFn }) {
  const title = prj_details["title"];
  const description = prj_details["description"];
  const role = prj_details["role"];

  let classes =
    "flex rounded-xl w-[25rem] h-[15rem] content-center flex-col items-center justify-center m-3 text-center  shadow-xl border-2 border-[#333]/[0.1] cursor-pointer hover:scale-110";
  let divSettings = { className: classes };

  return (
    <>
      <div {...divSettings} onClick={() => onClickFn(title)}>
        <h2 className="font-extrabold text-[#333333]  text-2xl">{title}</h2>
        <p className="text-[#333333] font-bold text-l">{role}</p>
        <p className="w-[20rem] text-[#333333]">{description}</p>
        <p className="text-blue-500 font-bold">Learn More</p>
      </div>
    </>
  );
}
