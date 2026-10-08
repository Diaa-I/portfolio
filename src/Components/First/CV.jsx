import cv from "../../assets/CV.pdf"

export default function CV() {
  return (
    <>
      <a href={cv} download="CV.pdf">
        <div className=" bg-[url(/src/assets/image.png)] bg-cover xl:w-[35rem] xl:h-[35rem] xl:hover:cursor-pointer xl:hover:scale-110 place-self-center w-[23rem] h-[30rem]" />
      </a>
    </>
  );
}
