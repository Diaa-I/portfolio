import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../../supabase";
import WriteupCard from "../Cards/WriteupsCard"; 

export default function Writeups({ setHasLoaded }) {
  const [writeupsMetadata, setWriteupsMetadata] = useState([]);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    async function loadAllWriteups() {
      const { data: writeupData, error: writeupError } = await supabase
        .from("writeups")
        .select("*")
        .order("id", { ascending: true });
      if (writeupError) {
        console.error(writeupError);
        return;
      }
      setWriteupsMetadata(writeupData);

      setHasLoaded((oldData) => ({ ...oldData, Writeups: true }));
    }
    loadAllWriteups();
  }, []);

  return (
    <section className="bg-inherit px-5 py-16 text-white sm:px-8 lg:px-12 flex flex-col items-center w-full">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center">
        <div className="w-full text-left  pb-6 mb-10">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl text-white">
            CTF Writeups
            <span className="text-cyan-400">.</span>
          </h1>
        </div>

        {writeupsMetadata.length === 0 ? (
          <p className="py-16 text-center text-slate-500 font-mono text-sm">
            No writeups available yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 justify-items-center justify-center w-full">
            {writeupsMetadata.map((metadata) => (
              <WriteupCard
                key={metadata.id}
                writeup={metadata}
                onClick={() =>
                  navigate(
                    `/writeups/${encodeURIComponent(
                      metadata.title,
                    )}`,
                  )
                }
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
