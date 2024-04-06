'use client'

import Card from "@/components/Card";
import { Gauge, Triangle } from "@phosphor-icons/react";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between p-0 bg-white font-sans">
      <nav className="flex flex-col gap-8 bg-blue-500 min-h-screen md:w-1/4 md:max-w-60">
        <div className="flex bg-blue-600/20 justify-center items-center p-5 font-bold gap-2 text-white">
          <Triangle size={32} />
          ATM
        </div>
        <div className="flex flex-col gap-5 pl-5">
          <button className="flex justify-start items-center gap-2 text-blue-600 font-bold bg-white text-transparent pl-5 py-2 rounded-l-full max-h-10">
            <Gauge size={25} className="max-h-full"/>
            Painel
          </button>
        </div>
      </nav>
      <div className="h-screen w-full p-10">
        <div className="flex gap-4 justify-around">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
}
