"use client";

import { LazyMotion, domAnimation } from "framer-motion";

export const FramerProvider = (props: { children: React.ReactNode }) => {
  return <LazyMotion features={domAnimation}>{props.children}</LazyMotion>;
};
