import MeData from "../../../data/me.data";
import cv from "../../assets/CV.pdf"

export default function Start() {
  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-center flex-col lg:w-[50vw] lg:text-left w-[100%] text-center">
        <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-7xl text-[#333333]">
          {MeData.name}
        </h1>
        {/* Onclick move to Education */}
        <h2 className="mb-6 text-l font-bold leading-none tracking-tight text-[#333333] md:text-2xl xl:text-3xl ">
          {MeData.title}
        </h2>
        <p className="mb-6 flex-wrap xl:w-[32rem] text-xl text-[#333333]/[0.8] font-semibold ">
          {MeData.summary}
        </p>
        <p className="mb-6 flex-wrap xl:w-[32rem] text-xl text-[#333333]/[0.8] font-semibold">
          {MeData.education}
        </p>
        <ul className="mb-6 flex-wrap xl:w-[32rem] text-[#333333]/[0.8] font-semibold text-xl">
          {MeData.interests}
        </ul>
      </div>
      <a href={cv} download="CV.pdf">
        <div className=" bg-[url(/src/assets/image.png)] bg-cover xl:w-[35rem] xl:h-[35rem] xl:hover:cursor-pointer xl:hover:scale-110 place-self-center w-[23rem] h-[30rem]" />
      </a>
    </>
  );
}
