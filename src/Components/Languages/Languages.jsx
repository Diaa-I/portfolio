

export default function Languages({Data,Categories,page}) {
  return (
    <div className={`2xl:grid ${page=='SEC'?"2xl:grid-cols-2":"2xl:grid-cols-3"} 2xl:p-10 2xl:m-10 text-center ${page == "SEC" ? "bg-[#0B0F19]" : "bg-[#FAF9F2]"}`}>
      {Categories.map((category) => {
        return (
          <div className={"lg:w-[30rem] "}>
            <h2 className="mb-5 text-4xl font-bold">{category.categoryText}</h2>
            <div
              id={category.categoryText}
              className={
                "self-start flex flex-row flex-wrap place-content-center"
              }
            >
              {Data.map((data) => {
                if (data.categoryID == category.categoryID) {
                  return (
                    <div className="lg:w-[12rem] lg:h-[10rem] lg:text-2xl border-2 border-[#333]/[0.5] m-0.5  w-[10rem] h-[8rem] text-xl place-content-center">
                      <i className={data.logo + " text-5xl"}></i>
                      <p>{data.title}</p>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        )
      })}
      
    </div>
  );
}
