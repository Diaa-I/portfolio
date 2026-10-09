import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Nav({ navList, page }) {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const navigate = useNavigate()
  // Listen to the browser resizing and update the state variable
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Watch 'viewportWidth' and changes navigation state accordingly
  useEffect(() => {
    if (viewportWidth > 768) {
      setIsNavOpen(true);
    }
  }, [viewportWidth]);
 return (
  <div className="w-full sticky top-0 z-50">
    <nav
      className={`w-full font-mono text-sm border-b transition-colors duration-300 font-semibold px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between
        ${page === "SEC" 
          ? "bg-[#0B0F19] text-slate-200 border-slate-900" 
          : "bg-[#EAEFEA] text-[#121B13] border-[#C2CDC2]"
        }`}
    >
      <div className="flex w-full md:w-auto items-center justify-between md:hidden">
        <span className="font-bold text-xs uppercase tracking-widest opacity-60">
          {page === "SEC" ? "SEC_CONSOLE" : "DEV_WORKSPACE"}
        </span>
        <button
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
          className={`px-3 py-1.5 rounded border font-bold text-xs transition-colors
            ${page === "SEC" 
              ? "bg-[#111827] border-slate-800 text-slate-300 hover:bg-slate-800" 
              : "bg-white border-[#C2CDC2] text-[#121B13] hover:bg-[#EAEFEA]"
            }`}
        >
          {isNavOpen ? "✕ CLOSE" : "☰ MENU"}
        </button>
      </div>

      <div 
        className={`w-full md:w-auto flex-col md:flex-row md:flex items-center md:gap-8 mt-4 md:mt-0 gap-4
          ${isNavOpen ? "flex" : "hidden md:flex"}`}
      >
        {navList.map((NavItem, index) => {
          return (
            <button
              key={index}
              onClick={NavItem.action}
              className={`w-full md:w-auto py-2 md:py-0 text-left md:text-center transition-colors hover:underline font-semibold
                ${page === "SEC" ? "hover:text-cyan-400" : "hover:text-[#0284C7]"}`}
            >
              {NavItem.name}
            </button>
          );
        })}
      </div>

      <div 
        className={`w-full md:w-auto flex-col md:flex-row md:flex items-center gap-5 mt-4 md:mt-0 border-t md:border-t-0 pt-4 md:pt-0 border-current/10
          ${isNavOpen ? "flex" : "hidden md:flex"}`}
      >
        <button
          onClick={() => navigate(page === "SEC" ? "/dev" : "/sec")}
          className={`w-full md:w-auto px-4 py-1.5 rounded font-bold text-xs transition-all border tracking-wider
            ${page === "SEC" 
              ? "bg-slate-900 border-slate-800 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950" 
              : "bg-white border-[#C2CDC2] text-[#0284C7] hover:bg-[#121B13] hover:text-white"
            }`}
        >
          ➔ GO_TO_{page === "SEC" ? "DEVELOPMENT" : "SECURITY"}
        </button>

        <button
          onClick={() => navigate("/")}
          className="w-full md:w-auto text-xs opacity-60 hover:opacity-100 transition-opacity py-2 md:py-0 text-left md:text-center font-bold"
        >
          [exit_to_intro]
        </button>
      </div>

    </nav>
  </div>
);

}
