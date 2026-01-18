import MeData from "../../../data/me.data";
import cv from "../../assets/CV.pdf"

export default function Start() {
  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-center lg:flex-col lg:h-auto lg:w-[50rem] lg:text-left w-[100%] h-auto text-center">
        <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-7xl text-[#333333]">
          {MeData.name}
        </h1>
        {/* Onclick move to Education */}
        <h2 className="mb-6 text-xl font-bold leading-none tracking-tight text-[#333333] md:text-1xl lg:text-2xl ">
          {MeData.title}
        </h2>
        <p className="mb-6 flex-wrap lg:w-[27.3rem] text-xl text-[#333333]/[0.8] font-semibold ">
          {MeData.summary}
        </p>
        <p className="mb-6 flex-wrap lg:w-[27.3rem] text-xl text-[#333333]/[0.8] font-semibold">
          {MeData.education}
        </p>
        <ul className="mb-6 flex-wrap lg:w-[27.3rem] text-[#333333]/[0.8] font-semibold text-xl">
          {MeData.interests}
        </ul>
      </div>
      <a href={cv} download="CV.pdf">
        <div className=" bg-[url(/src/assets/image.png)] bg-cover lg:w-[35rem] lg:h-[35rem] lg:hover:cursor-pointer lg:hover:scale-110 place-self-center w-[23rem] h-[24rem]" />
      </a>
    </>
  );
}
