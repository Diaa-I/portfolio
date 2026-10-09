import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { supabase } from "../../supabase";
import remarkFootnotes from "remark-footnotes";

export default function Walkthrough() {
  const { title } = useParams();

  const [writeup, setWriteup] = useState(null);
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadWalkthrough() {
      setLoading(true);
      setError("");
      setWriteup(null);
      setMarkdown("");

      try {
        const { data, error } = await supabase
          .from("writeups")
          .select("*")
          .eq("title", title)
          .single();

        if (error) throw error;

        const response = await fetch(data.link_to_file);

        if (!response.ok) {
          throw new Error("Failed to fetch Markdown file.");
        }

        const content = await response.text();

        if (!cancelled) {
          setWriteup(data);
          setMarkdown(content);
        }
      } catch (err) {
        console.error(err);

        if (!cancelled) {
          setError("Could not load this walkthrough.");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadWalkthrough();

    return () => {
      cancelled = true;
    };
  }, [title]);

  if (loading) {
    return (
      <main className="min-h-screen bg-[#080b10] p-8 text-slate-400">
        Loading walkthrough...
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-[#080b10] p-8 text-slate-300">
        <p>{error}</p>
        <Link to="/writeups" className="mt-4 inline-block text-cyan-400">
          ← Back to writeups
        </Link>
      </main>
    );
  }
  const parseObsidianImages = (text) => {
    if (!text) return "";

    return text.replace(/!\[\[(.*?)\]\]/g, (match, fileName) => {
      const cleanFileName = fileName.split("|")[0].trim();

      const encodedFileName = encodeURIComponent(cleanFileName);

      const localImageUrl = `/portfolio/writeups/attachments/${encodedFileName}`;

      return `![${cleanFileName}](${localImageUrl})`;
    });
  };


  return (
    <main className="min-h-screen bg-[#080b10] px-5 py-12 text-slate-200 sm:px-8">
      <article className="prose prose-invert mx-auto max-w-3xl">
        <Link to="/sec" className="no-underline text-cyan-400 sticky top-0">
          ← All writeups
        </Link>

        <p className="mt-8 text-sm uppercase tracking-widest text-cyan-400">
          {writeup.category}
        </p>

        <h1>{writeup.title}</h1>

        <p>{writeup.description}</p>

        <ReactMarkdown remarkPlugins={[remarkGfm, [remarkFootnotes, { inline: true }]]}>
          {parseObsidianImages(markdown)}
        </ReactMarkdown>
      </article>
    </main>
  );
}
