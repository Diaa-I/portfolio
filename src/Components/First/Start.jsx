import MeData from "../../../data/me.data";
import cv from "../../assets/CV.pdf"

export default function Start() {
  return (
    <>
      <div className="flex items-center justify-center  flex-col h-auto w-[50rem]">
        <h1 className="mb-6 text-6xl font-extrabold leading-none tracking-tight  md:text-5xl lg:text-7xl text-[#333333]">
          {MeData.name}
        </h1>
        <h2 className="mb-6 text-xl font-bold leading-none tracking-tight text-[#333333] md:text-1xl lg:text-2xl">
          {MeData.title}
        </h2>
        <p className="mb-6 flex-wrap w-[27.3rem] text-xl text-[#333333]/[0.8] font-semibold">
          {MeData.summary}
        </p>
        <p className="mb-6 flex-wrap w-[27.3rem] text-xl text-[#333333]/[0.8] font-semibold">
          {MeData.education}
        </p>
        <ul className="mb-6 flex-wrap w-[27.3rem] text-[#333333]/[0.8] font-semibold text-xl">
          {MeData.interests}
        </ul>
      </div>
      <a href={cv} download="CV.pdf">
        <div className="bg-[url(/src/assets/image.png)] bg-cover w-[35rem] h-[35rem] hover:cursor-pointer hover:scale-110" />
      </a>
    </>
  );
}
