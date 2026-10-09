import cv from "../../assets/CV.pdf";

export default function CV() {
  return (
    <div className="flex flex-col items-center justify-center p-6 font-mono text-sm text-[#121B13] w-full">
      <div className="mb-8 border-b border-[#C2CDC2] pb-4 text-center">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl text-[#121B13] font-mono">
          MY_CV
          <span className="text-[#0284C7]">.</span>
        </h1>
      </div>
      <div className="w-full max-w-xl bg-white border-2 border-[#C2CDC2] rounded-xl shadow-md overflow-hidden flex flex-col">
        <div className="bg-[#EAEFEA] border-b border-[#C2CDC2] px-4 py-2.5 flex items-center justify-between font-bold text-xs select-none">
          <div className="flex items-center space-x-2">
            <span className="pl-2 text-[#121B13]/70">
              EXPORT_MANIFEST // CV.pdf
            </span>
          </div>
          <span className="text-[10px] text-[#121B13]/40">READY</span>
        </div>

        <div className="p-6 flex flex-col items-center justify-center gap-6 bg-white">
          <a
            href={cv}
            download="CV.pdf"
            className="group block relative border border-[#C2CDC2] rounded-lg overflow-hidden bg-[#EAEFEA] p-2 transition-all duration-300 hover:border-[#121B13]/40 hover:shadow-lg"
          >
            <div className="bg-[url(/src/assets/image.png)] bg-cover rounded-md w-[18rem] h-[24rem] sm:w-[22rem] sm:h-[28rem] transition-transform duration-300 group-hover:scale-[1.02]" />

            <div className="absolute inset-0 bg-[#121B13]/0 group-hover:bg-[#121B13]/5 transition-colors duration-300 flex items-center justify-center">
              <span className="bg-white/95 border border-[#C2CDC2] px-4 py-2 rounded-md font-bold text-xs shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-[#121B13]">
                ↓ DOWNLOAD_CV
              </span>
            </div>
          </a>

          <div className="text-center max-w-sm">
            <p className="font-sans text-stone-600 text-sm leading-relaxed">
              Click the preview image above to download a copy of my
              professional resume as a PDF file.
            </p>

            <a
              href={cv}
              download="CV.pdf"
              className="inline-block mt-4 text-xs font-black text-[#0284C7] hover:underline"
            >
              [↗] direct_download_link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
