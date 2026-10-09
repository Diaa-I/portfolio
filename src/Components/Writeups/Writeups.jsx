import {  useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router";
import { supabase } from "../../supabase";
import WriteupCard from "../Cards/WriteupsCard"; // Adjust to your actual component path

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
    loadAllWriteups()
  }, []);

  return (
    <section className="bg-inherit px-5 py-16 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          CTF Writeups
          <span className="text-cyan-400">.</span>
        </h1>

        <p className="mt-4 mb-10 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          All the writeups for CTFs I have done.
        </p>

        {writeupsMetadata.length === 0 ? (
          <p className="py-16 text-center text-slate-500">
            No writeups available yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {writeupsMetadata.map((metadata) => (
              <WriteupCard
                key={metadata.id}
                writeup={metadata}
                onClick={() =>
                  navigate(
                    `/writeups/${encodeURIComponent(
                      metadata.slug ?? metadata.title
                    )}`
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