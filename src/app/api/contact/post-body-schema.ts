import { z } from "zod";

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
    .min(1, "Please enter a message")
    .max(512, "Message is too long"),
  captcha: z.string(),
});
export type ContactSchemaType = z.infer<typeof ContactSchema>;

export default ContactSchema;
