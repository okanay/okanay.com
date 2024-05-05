import { ContactTooltip } from "@/components/contact/contact-tooltip";
import { ContactLink } from "@/components/contact/contact-link";
import { ContactCopy } from "@/components/contact/contact-copy";

export const Contact = () => {
  return (
    <div className={"flex flex-wrap gap-[2rem] sm:absolute sm:right-0 sm:z-10"}>
      <div className={"flex flex-col gap-1 text-sm tracking-wider"}>
        <h4 className={"text-gray-500"}>Contact & CV:</h4>
        <ContactCopy>okanay@hotmail.com</ContactCopy>
        <ContactLink href={"/pdfs/cv-eng.pdf"} target="_blank">
          Read my CV
        </ContactLink>
      </div>
      <div className={"flex flex-col gap-1 text-sm tracking-wider"}>
        <h4 className={"text-gray-500"}>Portfolio:</h4>
        <ContactTooltip tooltip={"What's that?"} className={"w-28"}>
          Dribbble
        </ContactTooltip>
        <ContactLink href={"https://github.com/okanay"} target={"_blank"}>
          Github
        </ContactLink>
      </div>
      <div className={"flex flex-col gap-1 text-sm tracking-wider"}>
        <h4 className={"text-gray-500"}>Socials:</h4>
        <ContactLink
          href={"https://www.linkedin.com/in/wokanay/"}
          target={"_blank"}
        >
          LinkedIn
        </ContactLink>
        <ContactTooltip tooltip={"No way!"} className={"w-20"}>
          Twitter
        </ContactTooltip>
      </div>
    </div>
  );
};
