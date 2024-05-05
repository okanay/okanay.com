"use client";

import { ContactButton } from "./contact-button";
import { ContactInput } from "./contact-input";
import { ContactTextArea } from "./contact-textarea";
import { useContactForm } from "@/hooks/useContactForm";

export const ContactForm = () => {
  const { onFormAction, status, message } = useContactForm();

  return (
    <div className="flex w-full max-w-[580px] flex-col gap-0.5 tracking-wider">
      <form
        action={onFormAction}
        className="flex w-full flex-col items-center justify-start gap-2 text-start tracking-wide"
      >
        <div className={"grid w-full grid-cols-2 gap-2"}>
          <ContactInput
            name={"name"}
            type={"text"}
            placeholder={"Your full name"}
          />
          <ContactInput
            name={"email"}
            type={"email"}
            placeholder={"Your email address"}
          />
        </div>
        <ContactTextArea
          name={"message"}
          placeholder={"Add your message here."}
          className={"min-h-[128px]"}
        />
        <ContactButton status={status} type={"submit"}>
          Share your message
        </ContactButton>
        <p>{status === "error" && message}</p>
        <p>{status === "success" && message}</p>
      </form>
    </div>
  );
};