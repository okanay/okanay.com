import { twMerge } from "tailwind-merge";

interface ContactTooltipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  tooltip: string;
}

export const ContactTooltip = ({
  className,
  children,
  tooltip,
}: ContactTooltipProps) => {
  return (
    <div className={"group relative"}>
      <span className="z-20 flex cursor-not-allowed transition-all duration-300 group-hover:scale-105">
        {children}
      </span>
      <span
        className={twMerge(
          "absolute left-0 top-0 h-fit translate-y-[-20%] scale-50 rounded border bg-gray-100 p-1 text-center opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-100%] group-hover:scale-100 group-hover:opacity-100",
          className,
        )}
      >
        {tooltip}
      </span>
    </div>
  );
};
