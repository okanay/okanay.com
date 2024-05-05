"use client";

import ContactAction from "@/actions/contact-action";
import { useEffect, useRef, useState } from "react";

type ContactStatus = "initial" | "pending" | "success" | "error";

export const useContactForm = (timeout = 3000) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<ContactStatus>("initial");
  const [message, setMessage] = useState("");

  const onFormAction = async (formData: FormData) => {
    const response = await ContactAction(formData);

    setStatus(response.status as ContactStatus);
    setMessage(response.message);

    if (response.status === "success") {
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

  return { onFormAction, status, message, formRef };
};
