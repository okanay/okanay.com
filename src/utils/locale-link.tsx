"use client";

import { Link } from "@/utils/navigation";
import { useLocale } from "next-intl";

interface LocaleLinkProps extends React.ComponentProps<typeof Link> {}

export const LocaleLink = (props: LocaleLinkProps) => {
  const locale = useLocale();

  return (
    <Link locale={locale as any} {...props}>
      {props.children}
    </Link>
  );
};
