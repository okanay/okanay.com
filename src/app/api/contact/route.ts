import { NextRequest, NextResponse } from "next/server";
import { mailOptions, transporter } from "@/utils/nodemailer";
import ContactSchema, {
  ContactSchemaType,
} from "@/app/api/contact/post-body-schema";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const rawFormData: ContactSchemaType = {
      name: (body.name as string) || "",
      email: (body.email as string) || "",
      message: (body.message as string) || "",
    };

    const formDataValidation = ContactSchema.safeParse(rawFormData);

    if (!formDataValidation.success) {
      return NextResponse.json({
        status: "error",
        message: formDataValidation.error.errors[0].message,
      });
    }

    const validData = formDataValidation.data;

    await transporter.sendMail({
      ...mailOptions,
      subject: `Seninle İletişime Geçti: ${validData.name}`,
      text: `Email Adresi: ${validData.email} \n\n Mesaj: ${validData.message}`,
    });

    return NextResponse.json({
      status: "success",
      message: "Your message has been sent successfully. Thank you!",
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message:
        "An error occurred while sending your message. Please try again later.",
    });
  }
}
