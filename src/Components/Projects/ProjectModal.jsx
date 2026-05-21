import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function ({ prj_details, onCloseModal }, ref) {
  const dialog = useRef();
  const title = prj_details["title"];
  const description = prj_details["indepth_description"];
  const vidSrc = prj_details["vidSrc"];
  const link = prj_details["link"];
  let withVideoClass = "flex text-center flex-col items-center justify-center bg-[#EFEFF2] lg:w-[55vw] lg:h-[80vh] w-[100rem] rounded-xl  ";
  let withoutVideoClass = "flex text-center flex-col items-center justify-center bg-[#EFEFF2]  rounded-xl p-10 "
  let classes = vidSrc == "" ? withoutVideoClass : withVideoClass
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },

    };
  });

  return createPortal(
    <>
      <div className="fixed inset-0 bg-black bg-opacity-80 z-40"> </div>
      <dialog ref={dialog} className={classes} onClose={onCloseModal}>
        <h2 className="text-[#333] text-2xl font-extrabold">{title}</h2>
        {vidSrc != "" && <video preload="metadata" controls className="lg:w-[45rem] lg:h-[25rem] w-[20.5rem] m-10 rounded-xl" autoPlay >
          <source src={vidSrc} type="video/webm" />
        </video>}
        <p className="text-center lg:w-[52rem] m-2">{description}</p>
        {(link) && <a href={link} className="text-purple-500 hover:cursor-pointer font-extrabold text-l">Link</a>}
        <form method="dialog" onClick={onCloseModal}>
          <button className="text-stone-50 bg-gray-800 w-32 h-8 rounded mt-5 ">Close</button>
        </form>

      </dialog>
    </>
    , document.getElementById("modal-root"))
});
export default Modal;
