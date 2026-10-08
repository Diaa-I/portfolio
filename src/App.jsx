import Development from "./Development";
import { useState } from "react";
import Security from "./Security";
import "./App.css";
function App() {
  const [pageWanted, setPagedWanted] = useState("");
  if (pageWanted == "SEC") {
    return <Security setPagedWanted={setPagedWanted} />;
  } else if (pageWanted == "DEV") {
    return <Development setPagedWanted={setPagedWanted} />;
  }
  return (
    <div class="min-h-screen bg-[#FDFBF7] flex flex-col justify-between font-sans selection:bg-zinc-200">
      <div class="flex flex-col items-center justify-center text-center pt-24 pb-16 px-4 flex-grow">
        <span class="text-[10px] tracking-[0.25em] uppercase text-zinc-400 font-mono mb-4">
          Portfolio
        </span>
        <h1 class="text-7xl md:text-8xl font-black tracking-tight text-zinc-900 leading-[0.85] max-w-4xl mx-auto mb-10">
          Diaa Ibrahim Nasr
        </h1>
        <p class="text-base md:text-lg font-bold text-zinc-800 tracking-tight mb-8">
          Backend-Focused Full-Stack Developer{" "}
          <span class="text-zinc-300 font-light mx-1">/</span> Ethical Hacker
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl mx-auto mb-10">
          <div class="flex items-center space-x-4 p-4 rounded-xl bg-zinc-900/[0.03] border border-zinc-900/5 text-left">
            <div class="flex-shrink-0 w-16 h-12 flex items-center justify-center">
              <img
                src="/portfolio/aub-logo.png"
                alt="American University of Beirut"
                class="max-w-full max-h-full object-contain mix-blend-multiply"
              />
            </div>
            <div class="leading-snug">
              <p class="text-xs font-bold text-zinc-800">
                Graduate Professional Diploma in Cybersecurity
              </p>
              <p class="text-[11px] font-mono text-zinc-400 mt-0.5">
                American University of Beirut &bull; 2026
              </p>
            </div>
          </div>

          <div class="flex items-center space-x-4 p-4 rounded-xl bg-zinc-900/[0.03] border border-zinc-900/5 text-left">
            <div class="flex-shrink-0 w-16 h-12 flex items-center justify-center">
              <img
                src="/portfolio/uni-sharjah-logo.png"
                alt="University of Sharjah"
                class="max-w-full max-h-full object-contain scale-110"
              />
            </div>
            <div class="leading-snug">
              <p class="text-xs font-bold text-zinc-800">
                Bachelor of Science in Computer Science
              </p>
              <p class="text-[11px] font-mono text-zinc-400 mt-0.5">
                University of Sharjah &bull; 2024
              </p>
            </div>
          </div>
        </div>

        <div class="w-full max-w-2xl mx-auto px-4 border-t border-zinc-900/5 pt-6">
          <p class="text-sm text-zinc-800 leading-relaxed font-medium tracking-tight">
            <span class="font-extrabold uppercase text-[10px] tracking-wider text-zinc-400 block mb-1 font-mono">
              Focus Areas
            </span>
            Secure backend development, red teaming, web application hacking,
            and hardware exploitation.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 w-full border-t border-zinc-900/10">
        <div
          className="group relative bg-[#090D10] text-white p-10 md:p-14 flex flex-col justify-between items-start min-h-[280px] cursor-pointer transition-all duration-300 hover:bg-[#0E1419]"
          onClick={() => setPagedWanted("SEC")}
        >
          <div>
            <div class="text-[10px] font-mono tracking-widest text-emerald-500 uppercase mb-6 flex items-center">
              <span class="font-bold">01</span>
              <span class="mx-2 text-zinc-600">/</span>
              <span class="text-zinc-400 group-hover:text-white transition-colors">
                Explore
              </span>
            </div>
            <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
              Security
            </h2>
            <p class="text-xs text-zinc-500 tracking-wide font-normal max-w-sm">
              Red teaming, web app hacking, hardware exploitation
            </p>
          </div>
          <div class="absolute bottom-10 right-10 md:bottom-14 md:right-14 w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:border-white group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
            <svg
              xmlns="http://w3.org"
              class="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>

        <div
          className="group relative bg-[#0A1612] text-white p-10 md:p-14 flex flex-col justify-between items-start min-h-[280px] cursor-pointer transition-all duration-300 hover:bg-[#0F221C] border-t md:border-t-0 md:border-l border-zinc-900/20"
          onClick={() => setPagedWanted("DEV")}
        >
          <div>
            <div class="text-[10px] font-mono tracking-widest text-orange-500 uppercase mb-6 flex items-center">
              <span class="font-bold">02</span>
              <span class="mx-2 text-zinc-600">/</span>
              <span class="text-zinc-400 group-hover:text-white transition-colors">
                Explore
              </span>
            </div>
            <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
              Development
            </h2>
            <p class="text-xs text-zinc-500 tracking-wide font-normal max-w-sm">
              Secure backend and full-stack applications
            </p>
          </div>
          <div class="absolute bottom-10 right-10 md:bottom-14 md:right-14 w-8 h-8 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:border-white group-hover:text-white group-hover:translate-x-1 transition-all duration-300">
            <svg
              xmlns="http://w3.org"
              class="h-3.5 w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
