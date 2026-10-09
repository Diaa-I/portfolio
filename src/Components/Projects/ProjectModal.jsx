import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function ({ prj_details, onCloseModal }, ref) {
  const dialog = useRef();
  const title = prj_details["title"];
  const description = prj_details["indepth_description"];
  const vidSrc = prj_details["vidSrc"];
  const techStack = prj_details["tech_stack"];
  const link = prj_details["link"];
  let withVideoClass =
    "flex text-center flex-col items-center justify-center bg-[#EFEFF2] lg:w-[70vw] lg:h-[80vh] w-[100rem] rounded-xl overflow-x-hidden ";
  let withoutVideoClass =
    "flex text-center flex-col items-center justify-center bg-[#EFEFF2]  rounded-xl p-10 ";
  let classes = vidSrc ? withVideoClass : withoutVideoClass;
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(

    <>
      <div
        className="fixed inset-0 bg-[#0F1511]/75 backdrop-blur-sm z-40"
        onClick={onCloseModal}
      ></div>

      <dialog
        ref={dialog}
        onClose={onCloseModal}
        className={`${classes || ""} fixed inset-0 m-auto z-50 w-[95vw] lg:w-[85vw] max-w-7xl h-fit max-h-[85vh] bg-white border-2 border-[#C2CDC2] rounded-xl shadow-2xl p-0 overflow-hidden font-mono text-sm text-[#121B13] flex flex-col`}
      >
        <div className="bg-[#EAEFEA] border-b border-[#C2CDC2] px-4 py-3 flex items-center justify-between font-bold text-xs select-none shrink-0 w-full">
          <div className="flex items-center space-x-2">
            <span
              className="cursor-pointer font-bold text-red-500 hover:text-red-600 transition-colors text-sm flex items-center justify-center w-5 h-5 font-mono select-none"
              onClick={onCloseModal}
            >
              ✕
            </span>
            <span className="pl-2 text-[#121B13]/70">
              INSPECT_PANEL // {title}
            </span>
          </div>
        </div>

        <div className="p-5 md:p-8 overflow-y-auto flex-1 w-full">
          <h2 className="text-[#121B13] text-2xl md:text-3xl font-black tracking-tight text-left mb-6 shrink-0 w-full border-b border-[#EAEFEA] pb-3">
            {title}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
            {vidSrc && (
              <div className="lg:col-span-6 xl:col-span-7 w-full bg-[#EAEFEA] p-2 rounded-lg border border-[#C2CDC2] flex justify-center items-center overflow-hidden">
                <video
                  preload="metadata"
                  controls
                  className="w-full h-auto max-h-[45vh] rounded shadow-sm object-contain bg-black"
                  autoPlay
                >
                  <source src={vidSrc} type="video/webm" />
                </video>
              </div>
            )}

            <div
              className={`${vidSrc ? "lg:col-span-6 xl:col-span-5" : "lg:col-span-12"} flex flex-col justify-between h-full w-full min-h-full`}
            >
              <div className="text-left w-full space-y-4">
                <p className="font-sans text-sm md:text-base leading-relaxed text-[#1F2E21]">
                  {description}
                </p>

                {techStack && (
                  <div className="bg-[#EAEFEA]/50 border border-[#C2CDC2] rounded-md p-4 text-xs text-[#1F2E21] w-full">
                    <span className="text-[#0284C7] font-bold block mb-1">
                      // STACK_MANIFEST:
                    </span>
                    <span className="font-bold font-mono tracking-wide block leading-relaxed">
                      {techStack}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#EAEFEA] pt-4 mt-6 gap-4 w-full shrink-0">
                {link ? (
                  <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#0284C7] hover:underline font-black text-xs tracking-wide flex items-center gap-1"
                  >
                    <span>[↗] Visit it</span>
                  </a>
                ) : (
                  <div />
                )}

                <form
                  method="dialog"
                  onSubmit={onCloseModal}
                  className="w-full sm:w-auto flex justify-end"
                >
                  <button className="text-white bg-[#121B13] hover:bg-[#233325] px-5 h-9 rounded-md text-xs font-bold transition-colors shadow-md w-full sm:w-auto">
                    Close Session (X)
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>,
    document.getElementById("modal-root"),
  );
});
export default Modal;
