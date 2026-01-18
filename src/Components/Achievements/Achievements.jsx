import { useState } from "react";

export default function Achievements() {
  const [isDropdown, setIsDropdown] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState(undefined);
  function handleClick(id) {
    if (dropdownMenu == undefined) setIsDropdown((prevState) => !prevState);
    setDropdownMenu(id);
  }
  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      Reset();
    }
  };
  function Reset() {
    setIsDropdown(false);
    setDropdownMenu(undefined);
  }
  return (
    // when scrolling away reset
    <div className="text-center flex flex-col h-[90vh] w-auto">
      <h2 className="mb-6 text-5xl text-white font-extrabold align-start ">Google Developer Student Club - University of Sharjah</h2>
      <div className="flex flex-row items-center self-center h-[90vh] ">
        {dropdownMenu == 0 && (
          <div className="m-3 w-96 h-96 border border-white">
            <ul>
              <li className="m-2">Presented an onsite workshop about Arduino with 50+ in attendance discussed the basics of coding in Arduino, and a code along project that was an object detecting robot.</li>
              <li className="m-2">Presented an onsite workshop about Web development with 40+ in attendance discussing Authentication and the different ways of storing a password, and what is UX and what is the role of a UX designer.</li>
            </ul>
          </div>
        )}
        {/* Maybe clicking on them will drop down a list of things down */}
        <p
          className={
            isDropdown
              ? (dropdownMenu == 0 ? "text-2xl text-[green] cursor-pointer" : "text-2xl animate-bounce text-[green] cursor-pointer")
              : "text-2xl animate-bounce text-[green] cursor-pointer"
          }
          onClick={dropdownMenu == 0 ? Reset : () => { handleClick(0) }}
        >
          Tech Lead
        </p>
        <hr className="bg-amber-300 w-52 h-1 m-1" />
        <p
          className={
            isDropdown
              ? (dropdownMenu == 1 ? "text-2xl text-[green] cursor-pointer" : "text-2xl animate-bounce text-[green] cursor-pointer")
              : "text-2xl animate-bounce text-[green] cursor-pointer"
          }
          onClick={dropdownMenu == 1 ? Reset : () => { handleClick(1) }}
        >
          Lead
        </p>
        {dropdownMenu == 1 && (
          <div className="m-3 w-96 h-96 border border-white">
            <ul>
              <li className="m-2">Organized and managed 25 events with 1000+ in attendees, topics ranging from Deep learning, website development, security, and many more.</li>
              <li className="m-2">Achieved the highest follower count for a Google Developer Student Club in the country on Instagram.</li>
              <li className="m-2">Led the club to be the leading Google Developer Student Club in the country in numbers of events and attendees.</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
