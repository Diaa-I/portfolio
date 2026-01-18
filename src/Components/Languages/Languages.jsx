import LanguagesData, {
  LanguagesCategories,
} from "../../../data/languages.data";

export default function Languages() {
  return (
    <div className="lg:grid lg:grid-cols-3 lg:p-10 lg:m-10 text-center ">
      {LanguagesCategories.map((category) => {
        return (
          <div className={"lg:w-[30rem] "}>
            <h2 className="mb-5 text-4xl font-bold">{category.categoryText}</h2>
            <div
              id={category.categoryText}
              className={
                "self-start flex flex-row flex-wrap place-content-center"
              }
            >
              {LanguagesData.map((data) => {
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
