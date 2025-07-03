import LanguagesData, {
  LanguagesCategories,
} from "../../../data/languages.data";

export default function Languages() {
  return (
    <div className="grid grid-cols-3 text-center  p-10 m-10">
      {LanguagesCategories.map((category) => {
        return (
          <div className={"w-[30rem] "}>
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
                    <div className="border-2 border-[#333]/[0.5] m-0.5  w-[12rem] h-[10rem] text-2xl place-content-center ">
                      <i className={data.logo + " text-5xl"}></i>
                      <p>{data.title}</p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
}
