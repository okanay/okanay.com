"use client";

import { useRef, useTransition } from "react";
import { useRouter, usePathname } from "@/utils/navigation";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import useModal from "@/hooks/useModal";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function LocaleSwitcherSelect() {
  const ref = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen } = useModal(ref);
  const [isPending, startTransition] = useTransition();

  const router = useRouter();
  const pathname = usePathname();

  const locale = useLocale();
  const TRIGGER_BUTTON_TEXT = locale === "en" ? "English" : "Türkçe";
  const TRIGGER_BUTTON_FLAG = locale === "en" ? "en" : "tr";

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div ref={ref} className={"relative m-2 w-fit"}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-[36px] w-[80px] items-center justify-between rounded-lg border border-zinc-100 px-4 shadow"
      >
        <span className="flex items-center gap-2.5">
          <Image
            src={`/flags/${TRIGGER_BUTTON_FLAG}.svg`}
            alt={`${TRIGGER_BUTTON_FLAG} flag`}
            width={18}
            height={18}
          />
        </span>
        <span className="rotate-90">{">"}</span>
      </button>
      <div
        className={`relative translate-y-[16%] transition-all duration-300 ease-in-out  ${isOpen ? "h-[80px] opacity-100" : "h-[0px] opacity-0"} overflow-hidden`}
      >
        <div className="absolute flex w-[80px] flex-col items-start justify-between gap-2 rounded-lg border border-zinc-100 py-2 shadow">
          <div className={"flex w-full justify-between"}>
            <button
              onClick={() => onSelectChange("en")}
              disabled={isPending}
              className="flex h-[20px] w-[80px] items-center gap-2.5 pl-4 hover:bg-zinc-100"
            >
              <Image
                src={`/flags/en.svg`}
                alt={`en flag`}
                width={18}
                height={18}
              />
            </button>
            {locale === "en" && (
              <span className="pointer-events-none absolute flex h-[20px] w-[80px] justify-end pr-4">
                {"-"}
              </span>
            )}
          </div>
          <div className={"flex w-full justify-between"}>
            <button
              onClick={() => onSelectChange("tr")}
              disabled={isPending}
              className="flex h-[20px] w-[80px] items-center gap-2.5 pl-4 hover:bg-zinc-100"
            >
              <Image
                src={`/flags/tr.svg`}
                alt={`tr flag`}
                width={18}
                height={18}
              />
            </button>
            {locale === "tr" && (
              <span className="pointer-events-none absolute flex h-[20px] w-[80px] justify-end pr-4">
                {"-"}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
