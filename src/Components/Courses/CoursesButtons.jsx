export default function CoursesButton({
  onClickFun,
  CatNum,
  CatText,
  showThisCategory,
}) {
  return (
    <button
      onClick={onClickFun}
      className={
        "m-1 outline-none focus:outline-none  border-none  " +
        (showThisCategory ==  CatNum 
          ? " font-semibold text-slate-700 hover:bg-none cursor-default"
          : "  bg-[violet] hover:bg-[purple] hover:text-white")
      }
    >
      {CatText}
    </button>
  );
}


