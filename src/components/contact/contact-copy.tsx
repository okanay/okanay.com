"use client";

import { useEffect, useState } from "react";

interface ContactCopyProps {
  children: React.ReactNode;
}
export const ContactCopy = (props: ContactCopyProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent<HTMLDivElement>) => {
    navigator.clipboard.writeText(props.children as string);
    setCopied(true);
  };

  useEffect(() => {
    if (!copied) return;

    const timeout = setTimeout(() => {
      setCopied(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <div
      onClick={handleCopy}
      className={
        "relative transition-all duration-300 hover:scale-105 hover:cursor-pointer"
      }
    >
      {props.children}

      <span
        className={`absolute left-0 top-0 border bg-gray-100 p-1 text-xs transition-all duration-300 ${copied ? "translate-y-[-100%] scale-100 opacity-100" : "translate-y-[-20%] scale-50 opacity-0"} pointer-events-none`}
      >
        Copied!
      </span>
    </div>
  );
};
