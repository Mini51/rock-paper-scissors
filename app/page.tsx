"use client";
// Icons
import { HandFist, Scroll, Scissors } from "@phosphor-icons/react";

// Components
import BlankComponent from "@rock-paper-scissors/components/BlankComponent";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="flex flex-row justify-center bg-slate-800 rounded-xl drop-shadow-2  xl">
          <BlankComponent
            name={"Rock"}
            icon={<HandFist size={75} weight="fill" color="white" />}
            color="edae49"
          />
          <BlankComponent
            name={"Paper"}
            icon={<Scroll size={75} weight="fill" color="white" />}
            color="edae49"
          />
          <BlankComponent
            name={"Scissors"}
            icon={<Scissors size={75} weight="fill" color="white" />}
            color="edae49"
          />
        </div>
      </main>
    </div>
  );
}
