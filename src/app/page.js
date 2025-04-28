"use client"
import Image from "next/image";
import AnimatedList from "@/components/test_menu";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <div className="flex gap-4 items-center flex-col sm:flex-row">

        </div>
      </main>


      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples

      </footer>
    </div>
  );
}
