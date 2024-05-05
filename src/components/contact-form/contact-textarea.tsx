import { twMerge } from "tailwind-merge";

interface ContactTextArea
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export const ContactTextArea = ({ className, ...props }: ContactTextArea) => {
  return (
    <textarea
      {...props}
      className={twMerge(
        "border-skin-body-200 group group relative w-full overflow-hidden rounded-xl border bg-white px-3 py-2 text-sm tracking-wider focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2",
        className,
      )}
    />
  );
};
