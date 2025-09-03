import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center mt-6 py-12 px-12 mx-auto  max-w-6xl rounded-3xl bg-gradient-to-t from-slate-800 dark:from-slate-400 to-slate-700 dark:to-slate-300 transition-colors duration-300 ease-in-out">
      <h1 className="text-4xl font-bold text-slate-100 dark:text-slate-800">Harry Foster</h1>
      <p className="mt-4 text-lg text-slate-300 dark:text-slate-700 text-center ">
        London based System Administrator, Problem Solver and General Enthusiast.
      </p>
    </div>
  );
}
