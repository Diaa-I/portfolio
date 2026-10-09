import { useLayoutEffect, useState } from "react";
import { supabase } from "../../supabase";

export default function Languages({ page, setHasLoaded }) {
  const [languages, setLanguages] = useState(null);
  const [categories, setCategories] = useState(null);

  useLayoutEffect(() => {
    async function loadAllLanguages() {
      let to_select = page == "DEV" ? "dev_languages" : "sec_languages";

      const { data: catData, error: catError } = await supabase
        .from("categories")
        .select("*")
        .order("id", { ascending: true });

      if (catError) {
        console.error(catError);
        return;
      }
      const { data: langData, error: langError } = await supabase
        .from(to_select)
        .select("*")
        .order("id", { ascending: true });
      if (langError) {
        console.error(langError);
        return;
      }
      const categories_id_used = new Set(
        langData.map((data) => data.categoryID),
      );
      const categories_used = catData.filter((cat) =>
        categories_id_used.has(cat.id),
      );
      setCategories(categories_used);
      setLanguages(langData);
      setHasLoaded((oldData) => ({ ...oldData, Languages: true }));
    }
    loadAllLanguages();
  }, []);
  if (categories == null || languages == null) {
    return <p>Loading ...</p>;
  }

  return (
    <div
      className={`2xl:grid ${page == "SEC" ? "2xl:grid-cols-2" : "2xl:grid-cols-3"}  text-center bg-inherit`}
    >
      {categories.map((category) => {
        return (
          <div
            className={` ${page == "SEC" ? " lg:w-[40rem]" : "lg:w-[30rem]"} `}
          >
            <h2 className="mb-5 text-4xl font-bold">{category.title}</h2>
            <div
              id={category.title}
              className={
                "self-start flex flex-row flex-wrap place-content-center"
              }
            >
              {languages.map((data) => {
                if (data.categoryID == category.id) {
                  return (
                    <div
                      className={`lg:w-[12rem] lg:h-[10rem] lg:text-2xl border-2 w-[10rem] h-[8rem] text-xl place-content-center ${page == "SEC" ? " " : "border-[#333]/[0.5] m-0.5"}`}
                    >
                      {data?.logo && <i className={data.logo + " text-5xl"}></i> }
                      <p>{data.title}</p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
