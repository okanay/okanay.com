import Image from "next/image";
import AvatarJPEG from "../../../public/avatar.jpeg";

export const Avatar = () => {
  return (
    <div className={"flex w-full max-w-[580px] items-end gap-1"}>
      <div className="relative size-20">
        <div className="absolute bottom-1 right-0.5 z-20 size-2.5 rounded-full bg-gradient-to-br from-sky-400 to-purple-400 ring-4 ring-white" />
        <Image
          src={AvatarJPEG}
          alt={"okan ay avatar"}
          placeholder={"blur"}
          loading={"lazy"}
          className="absolute left-0 top-0 z-10 h-full w-full rounded-3xl bg-red-400"
        />
      </div>
      <p className="text-sm tracking-wider">
        Available for
        <span className="bg-gradient-to-br from-sky-400 to-purple-400 bg-clip-text text-lg font-bold text-transparent">
          {" "}
          work
        </span>
      </p>
    </div>
  );
};
