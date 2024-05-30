"use client";

import { useEffect, useRef, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

type ContactStatus = "initial" | "pending" | "success" | "error";

export const useContactForm = (timeout = 3000) => {
  const formRef = useRef<HTMLFormElement>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const [status, setStatus] = useState<ContactStatus>("initial");
  const [message, setMessage] = useState("");

  const { executeRecaptcha } = useGoogleReCaptcha();

  const onFormAction = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("pending");

    if (!executeRecaptcha) {
      console.log("not available to execute recaptcha");
      setStatus("error");
      return;
    }


    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const message = messageRef.current?.value;
    const captcha = await executeRecaptcha("inquirySubmit");

    console.log(captcha)

    const response = await fetch("api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, message, captcha }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    setStatus(data.status as ContactStatus);
    setMessage(data.message);

    if (data.status === "success") {
      formRef.current?.reset();
    }
  };

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus("initial");
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [status]);

  return {
    onFormAction,
    status,
    message,
    formRef,
    nameRef,
    emailRef,
    messageRef,
  };
};
