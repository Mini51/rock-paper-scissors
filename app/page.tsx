"use client";
// Icons
import { HandFist, Scroll, Scissors } from "@phosphor-icons/react";

// Components
import BlankComponent from "@rock-paper-scissors/components/BlankComponent";

export default function Home() {
  return (
    <main className="flex">
      {/* Rock */}
      <BlankComponent
        name={"Rock"}
        icon={<HandFist size={75} weight="fill" color="white" />}
        color="edae49"
      />

      {/* Rock */}
      <BlankComponent
        name={"Paper"}
        icon={<Scroll size={75} weight="fill" color="white" />}
        color="d1495b"
      />

      {/* Rock */}
      <BlankComponent
        name={"Scissors"}
        icon={<Scissors size={75} weight="fill" color="white" />}
        color="d1495b"
      />
    </main>
  );
}
