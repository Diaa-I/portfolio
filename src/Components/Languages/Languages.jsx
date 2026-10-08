import { useEffect, useLayoutEffect, useState } from "react";
import { supabase } from "../../supabase";

export default function Languages({ Data, Categories, page }) {
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
      const categories_id_used  = new Set(langData.map((data)=>data.categoryID))
      const categories_used = catData.filter((cat)=>categories_id_used.has(cat.id))
      setCategories(categories_used);
      setLanguages(langData);
    }
    loadAllLanguages();
  }, []);
  if (categories == null || languages == null) {
    return <p>Loading ...</p>;
  }

  return (
    <div
      className={`2xl:grid ${page == "SEC" ? "2xl:grid-cols-2" : "2xl:grid-cols-3"} 2xl:p-10 2xl:m-10 text-center ${page == "SEC" ? "bg-[#0B0F19]" : "bg-[#FAF9F2]"}`}
    >
      {categories.map((category) => {
          return (
            <div className={"lg:w-[30rem] "}>
              <h2 className="mb-5 text-4xl font-bold">
                {category.title}
              </h2>
              <div
                id={category.title}
                className={
                  "self-start flex flex-row flex-wrap place-content-center"
                }
              >
                {languages.map((data) => {
                    if (data.categoryID == category.id) {
                      return (
                        <div className="lg:w-[12rem] lg:h-[10rem] lg:text-2xl border-2 border-[#333]/[0.5] m-0.5  w-[10rem] h-[8rem] text-xl place-content-center">
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
    </div>
  );
}
