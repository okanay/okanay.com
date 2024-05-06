import { Avatar } from "@/components/avatar";
import { Contact } from "@/components/contact";

import { Hero } from "@/components/hero";
import { Location } from "@/components/location";
import { ContactForm } from "@/components/contact-form";

export default function Home() {
  return (
    <main className={"min-h-svh w-full px-4 pb-[8px] pt-[40px] md:px-[80px]"}>
      <div className={"flex flex-col items-center gap-20 text-gray-700"}>
        <div className="relative flex w-full flex-col items-start gap-8 sm:flex-row sm:items-center sm:justify-center">
          <Avatar />
          <Contact />
        </div>
        <div className={"flex flex-col items-center justify-center gap-20"}>
          <Hero />
          <Location />
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
