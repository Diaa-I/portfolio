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
    <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto bg-inherit">
      <div className="mx-auto max-w-7xl ">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          Technologies Used
          <span className="text-cyan-400">.</span>
        </h1>
      </div>
      {categories.map((category) => {
        return (
          <div
            key={category.id}
            className={`w-full p-6 rounded-2xl border transition-all duration-200 ${
              page === "SEC"
                ? "border-white/5 bg-white/[0.02] backdrop-blur-md shadow-lg"
                : "border-slate-200/60 bg-white shadow-sm"
            }`}
          >
            <h2
              className={`mb-5 text-xl font-bold tracking-wide ${
                page === "SEC" ? "text-white opacity-85" : "text-slate-800"
              }`}
            >
              {category.title}
            </h2>

            <div id={category.title} className="flex flex-row flex-wrap gap-3">
              {languages.map((data) => {
                if (data.categoryID == category.id) {
                  return (
                    <div
                      key={data.id || data.title}
                      className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                        page === "SEC"
                          ? "border-white/10 bg-white/[0.03] text-slate-200 hover:border-white/20"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 hover:border-slate-300"
                      }`}
                    >
                      {data?.logo ? (
                        <i
                          className={`${data.logo} text-base ${
                            page === "SEC" ? "text-white/80" : "text-slate-600"
                          }`}
                        ></i>
                      ) : (
                        <span
                          className={`font-mono text-xs font-bold tracking-tighter select-none ${
                            page === "SEC" ? "text-cyan-400" : "text-blue-600"
                          }`}
                        >
                          &gt;_
                        </span>
                      )}
                      <p className="whitespace-nowrap">{data.title}</p>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
