import MeData from "../../../data/me.data";
import cv from "../../assets/CV.pdf"

export default function Start() {
  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-center flex-col lg:w-[50vw] lg:text-left w-[100%] text-center">
        <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-7xl text-[#333333]">
          Diaa Ibrahim Nasr
        </h1>
        {/* Onclick move to Education */}
        <h2 className="mb-6 text-l font-bold leading-none tracking-tight text-[#333333] md:text-2xl xl:text-3xl ">
          Backend-Focused Full-Stack Developer / Ethical Hacker
        </h2>
        <p className="mb-6 flex-wrap xl:w-[32rem] text-xl text-[#333333]/[0.8] font-semibold ">
          Backend-Focused Full-Stack Developer and Ethical Hacker building secure applications in Python, Node.js, and PHP. Currently a Hardware Security Research Assistant at the University of Sharjah analyzing hardware-software vulnerabilities, while independently training in offensive hacking labs.
        </p>
        <p className="mb-6 flex-wrap xl:w-[32rem] text-xl text-[#333333]/[0.8] font-semibold">
          Education: Bachelor of Science in Computer Science from the University of Sharjah (2024), followed by a Graduate Professional Diploma in Cybersecurity from the American University of Beirut (2026).
        </p>
        <ul className="mb-6 flex-wrap xl:w-[32rem] text-[#333333]/[0.8] font-semibold text-xl">
          Focus areas: Secure backend development, red teaming, web application hacking, and hardware exploitation.
        </ul>
      </div>
      <a href={cv} download="CV.pdf">
        <div className=" bg-[url(/src/assets/image.png)] bg-cover xl:w-[35rem] xl:h-[35rem] xl:hover:cursor-pointer xl:hover:scale-110 place-self-center w-[23rem] h-[30rem]" />
      </a>
    </>
  );
}
