import { useNavigate } from "react-router";

export default function WriteupCard({ writeup }) {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`writeups/${writeup.title}`)}
      className="group relative flex h-full cursor-pointer flex-col
        overflow-hidden rounded-2xl border border-white/[0.08]
        bg-[#0d1117] p-5 transition-all duration-300
        hover:-translate-y-1 hover:border-cyan-400/40
        hover:bg-[#101720] hover:shadow-xl
        hover:shadow-cyan-950/20 sm:p-6"
    >

      <div
        className="absolute inset-x-0 top-0 h-px
          bg-gradient-to-r from-transparent via-cyan-400/60
          to-transparent opacity-0 transition-opacity
          duration-300 group-hover:opacity-100"
      />

      <h3
        className="mb-3 text-lg font-semibold leading-snug
          tracking-tight text-slate-100
          transition-colors group-hover:text-cyan-100 sm:text-xl"
      >
        {writeup.title}
      </h3>

      <p className="mb-6 line-clamp-3 text-sm leading-7 text-slate-400">
        {writeup.platform}
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {(writeup.tags ?? []).slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-md border border-white/[0.06]
              bg-white/[0.025] px-2 py-1 text-xs text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div
        className="mt-auto flex items-center justify-between
          border-t border-white/[0.07] pt-4"
      >
        <div className="flex items-center gap-3 text-xs text-slate-500">
          {writeup.completed_when && (
            <time dateTime={writeup.completed_when}>
              {new Date(writeup.completed_when).toLocaleDateString(
                "en-US",
                { month: "short", year: "numeric" }
              )}
            </time>
          )}
          {writeup.read_time && (
            <>
              <span>·</span>
              <span>{writeup.read_time} min read</span>
            </>
          )}
        </div>

        <span
          className="inline-flex items-center gap-1.5
            text-sm font-medium text-slate-400
            transition-colors group-hover:text-cyan-300"
        >
          Read writeup
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4 transition-transform
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            <path d="M7 17 17 7M7 7h10v10" />
          </svg>
        </span>
      </div>
    </article>
  );
}
