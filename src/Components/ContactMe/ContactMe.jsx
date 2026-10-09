export default function ContactMe({ page }) {
  return (
    <div
      className={`w-full max-w-5xl mx-auto flex flex-col justify-center mt-12 font-mono text-sm transition-colors duration-300
        ${page === "SEC" ? "text-slate-200" : "text-[#121B13]"}`}
      id="ContactMe"
    >
      <div
        className={`border-t pt-6 flex flex-col items-center text-center
        ${page === "SEC" ? "border-slate-800" : "border-[#C2CDC2]"}`}
      >
        <div
          className={`border rounded-lg px-6 py-4 flex flex-col sm:flex-row items-center gap-3 transition-colors duration-300 bg-transparent
          ${page === "SEC" ? "border-slate-800" : "border-[#C2CDC2]"}`}
        >
          <span
            className={`w-2 h-2 rounded-full animate-pulse
            ${page === "SEC" ? "bg-cyan-400 shadow-[0_0_8px_#22d3ee]" : "bg-[#16A34A] shadow-[0_0_8px_#16a34a]"}`}
          ></span>

          <p className="font-sans text-base">
            You can contact me via{" "}
            <a
              href="https://www.linkedin.com/in/diaa-nasr/"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 font-mono text-sm font-bold tracking-wide transition-colors hover:underline
                ${page === "SEC" ? "text-cyan-400" : "text-[#0284C7]"}`}
            >
              <i className="devicon-linkedin-plain align-middle text-lg"></i>
              <span>[ln//diaa-nasr]</span>
            </a>
          </p>
        </div>

        <span className="text-[10px] tracking-widest mt-4 uppercase font-bold opacity-40">
          // END_OF_FILE // TARGET_LINK_SECURE
        </span>
      </div>
    </div>
  );
}
