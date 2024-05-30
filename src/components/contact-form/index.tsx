"use client";

import { ContactButton } from "./contact-button";
import { ContactInput } from "./contact-input";
import { ContactTextArea } from "./contact-textarea";
import { useContactForm } from "@/hooks/useContactForm";
import { AlertError, AlertSuccess } from "@/components/contact-form/alert";

export const ContactForm = () => {
  const {
    onFormAction,
    status,
    message,
    formRef,
    nameRef,
    emailRef,
    messageRef,
  } = useContactForm();

  console.log(message)

  return (
    <div className="flex w-full max-w-[580px] flex-col gap-0.5 tracking-wider">
      <form
        ref={formRef}
        onSubmit={onFormAction}
        className="flex w-full flex-col items-center justify-start gap-2 text-start tracking-wide"
      >
        <div className={"grid w-full grid-cols-2 gap-2"}>
          <ContactInput
            ref={nameRef}
            name={"name"}
            type={"text"}
            placeholder={"Your full name"}
          />
          <ContactInput
            ref={emailRef}
            name={"email"}
            type={"email"}
            placeholder={"Your email address"}
          />
        </div>
        <ContactTextArea
          ref={messageRef}
          name={"message"}
          placeholder={"Add your message here."}
          className={"min-h-[128px]"}
        />
        <ContactButton status={status} type={"submit"}>
          Share your message
        </ContactButton>

        <div className={"relative h-[40] w-full"}>
          <AlertError message={message} status={status} />
          <AlertSuccess message={message} status={status} />
        </div>
      </form>
    </div>
  );
};
