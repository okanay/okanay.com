export const Hero = () => {
  return (
    <div className="flex w-full max-w-[580px] flex-col gap-1 tracking-wider">
      <h2 className="-mb-5 translate-x-[-1%] bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text font-lora text-5xl leading-loose text-transparent">
        Okan Ay
      </h2>
      <h2 className="bg-gradient-to-br from-sky-400 to-purple-400 bg-clip-text text-lg text-transparent">
        Full Stack Developer.
      </h2>
      <h2 className={"text-balance"}>Focus on React, TypeScript and GoLang.</h2>
      <p className={"text-balance font-light"}>
        Connect with me for freelance opportunities, collaborations, or just to
        say hi!
      </p>
    </div>
  );
};
