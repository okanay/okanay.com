"use client";

import { useFormStatus } from "react-dom";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ContactButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  status: "initial" | "pending" | "success" | "error";
}

const gradientDictionary = {
  initial: {
    from: "rgb(56 189 248)",
    to: "rgb(103 76 219)",
  },
  pending: {
    from: "rgb(255 202 40)",
    to: "rgb(255 202 40)",
  },
  success: {
    from: "rgb(16 185 129)",
    to: "rgb(31 230 132)",
  },
  error: {
    from: "rgb(239 68 68)",
    to: "rgb(239 68 68)",
  },
};

export const ContactButton = ({
  status,
  className,
  ...props
}: ContactButton) => {
  const { pending } = useFormStatus();
  const [isMouseHover, setIsMouseHover] = useState(false);
  const withPendingValue = pending ? "pending" : status;
  const withHoverAndStatus = withPendingValue !== "initial" || isMouseHover;

  return (
    <button
      {...props}
      disabled={pending}
      onMouseEnter={() => setIsMouseHover(true)}
      onMouseLeave={() => setIsMouseHover(false)}
      className={twMerge(
        "group relative flex h-[40px] w-full items-center justify-center gap-4 overflow-hidden rounded-xl border border-zinc-200 transition-colors delay-100 duration-300 focus:outline-none disabled:cursor-not-allowed",
        className,
        withPendingValue === "initial" &&
          "focus:ring-2 focus:ring-purple-600 focus:ring-offset-2",
        withPendingValue === "pending" &&
          "focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2",
        withPendingValue === "success" &&
          "focus:ring-2 focus:ring-green-500 focus:ring-offset-2",
        withPendingValue === "error" &&
          "focus:ring-2 focus:ring-red-500 focus:ring-offset-2",
      )}
    >
      <div className="relative flex h-full w-full items-center justify-center gap-4">
        <div>
          <motion.div
            animate={{
              background: `linear-gradient(90deg, ${gradientDictionary[withPendingValue].from}, ${gradientDictionary[withPendingValue].to})`,
              width: withHoverAndStatus ? "110%" : "16px",
              height: withHoverAndStatus ? "200%" : "16px",
              x: withHoverAndStatus ? "-35%" : "0%",
              y: withHoverAndStatus ? "-35%" : "0%",
              transition: {
                y: {
                  duration: withHoverAndStatus ? 0.25 : 0.15,
                },
                height: {
                  duration: withHoverAndStatus ? 0.3 : 0.15,
                },
                x: {
                  duration: withHoverAndStatus ? 0.45 : 0.15,
                },
                width: {
                  duration: withHoverAndStatus ? 0.45 : 0.15,
                },
                ease: "easeInOut",
              },
            }}
            className="absolute h-4 w-4 rounded-full"
          />
          <motion.div className="relative h-4 w-4 rounded-full bg-black opacity-0" />
        </div>
        <p
          className={`relative z-30 text-sm tracking-wider ${withHoverAndStatus && "text-white"}`}
        >
          {props.children}
        </p>
        <div className="relative z-40 h-[20px] w-0 overflow-hidden object-left opacity-0 transition-all duration-300 group-hover:w-[20px] group-hover:opacity-100 group-hover:translate-x-[-40%]">
          <Image
            src={"arrow-right.svg"}
            alt={"arrow-right"}
            width={16}
            height={16}
            className="absolute size-[20px]"
          ></Image>
        </div>
      </div>
    </button>
  );
};
