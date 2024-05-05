import { twMerge } from "tailwind-merge";

interface ContactLinkProps extends React.ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
}

export const ContactLink = ({
  className,
  children,
  ...props
}: ContactLinkProps) => {
  return (
    <a
      {...props}
      className={twMerge(
        "transition-all duration-300 hover:scale-105",
        className,
      )}
    >
      {children}
    </a>
  );
};
