import { useFormStatus } from "react-dom";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

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

export const ContactButton = ({ status, className, ...props}: ContactButton) => {

  const { pending } = useFormStatus();
  const withPendingValue = pending ? "pending" : status;

  return (
    <button
      {...props}
      disabled={pending}
      className={twMerge(
        "group relative w-full overflow-hidden rounded-xl border border-zinc-200 py-2 transition-colors delay-100 duration-300 focus:outline-none disabled:cursor-not-allowed",
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
      <span
        className={twMerge(
          `relative z-40 text-sm tracking-wider transition-colors duration-300`,
          withPendingValue === "initial" && "group-hover:text-white",
          withPendingValue === "pending" && "text-yellow-50",
          withPendingValue === "success" && "text-green-50",
          withPendingValue === "error" && "text-red-50",
        )}
      >
        {props.children}
      </span>
      <motion.span
        animate={{
          background: `linear-gradient(90deg, ${gradientDictionary[withPendingValue].from}, ${gradientDictionary[withPendingValue].to})`,
        }}
        transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
        className={twMerge(
          "absolute inset-0 z-30 translate-x-[-100%] transition-all duration-300 group-hover:translate-x-[0%]",
          withPendingValue !== "initial" && "translate-x-[0%]",
        )}
      />
    </button>
  );
};
