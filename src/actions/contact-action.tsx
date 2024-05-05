"use server";

import { mailOptions, transporter } from "@/utils/nodemailer";
import { z } from "zod";

export default async function ContactAction(formData: FormData) {
  try {
    const rawFormData: ContactSchemaType = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    const formDataValidation = ContactSchema.safeParse(rawFormData);

    if (!formDataValidation.success) {
      return {
        status: "error",
        message: formDataValidation.error.errors[0].message,
      };
    }

    const validData = formDataValidation.data;

    await transporter.sendMail({
      ...mailOptions,
      subject: `Seninle İletişime Geçti: ${validData.name}`,
      text: `Email Adresi: ${validData.email} \n\n Mesaj: ${validData.message}`,
    });

    return {
      status: "success",
      message: "Mesajınız başarıyla gönderildi!",
    };
  } catch (error) {
    return {
      status: "error",
      message: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
    };
  }
}

const ContactSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter a valid name")
    .max(32, "Name is too long"),
  email: z
    .string()
    .email("Please enter a valid email")
    .max(64, "Email is too long"),
  message: z
    .string()
    .min(10, "Please enter a message")
    .max(512, "Message is too long"),
});
export type ContactSchemaType = z.infer<typeof ContactSchema>;
