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
    <div className="">
      <nav
        className={`flex flex-col justify-center items-center md:flex-row top-0 md:place-content-evenly py-5 w-screen  md:font-semibold md:text-xl ${page == "SEC" ? "bg-[#0B0F19]" : "bg-[#FAF9F2]"} text-center sticky font-semibold  lg:h-auto sm:justify-start`}
      >
        <button
          onClick={() => setIsNavOpen(!isNavOpen)}
          className={`md:hidden p-2 rounded ${page == "SEC" ? "bg-[#0B0F19]" : "bg-[#FAF9F2]"} `}
        >
          {isNavOpen ? "✕ Close" : "☰ Menu"}
        </button>
        {navList.map((NavItem) => {
          return (
            <button
              className={
                "m-1 mt-2 flex h-[2rem] rounded " +
                `${isNavOpen ? "show" : "hidden"}`
              }
              onClick={NavItem.action}
            >
              {NavItem.name}
            </button>
          );
        })}
        <button
          className={
            "m-1 mt-2 flex h-[2rem] rounded " +
            `${isNavOpen ? "show" : "hidden"}`
          }
          onClick={() => navigate(page == "SEC" ? "/portfolio/dev" : "/portfolio/sec")}
        >
          Switch to {page == "SEC" ? "Development" : "Security"}
        </button>
        <button
          className={
            "m-1 mt-2 flex h-[2rem] rounded " +
            `${isNavOpen ? "show" : "hidden"}`
          }
          onClick={() => navigate("/portfolio/")}
        >
          Back to intro
        </button>
      </nav>
    </div>
  );
}
