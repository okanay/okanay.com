export default function Home() {
  return (
    <main className={"flex min-h-svh items-center justify-center"}>
      <div className={"flex flex-col items-center gap-2 tracking-wider text-center p-4"}>
        <span className={'text-sm'}>03-04-2024</span>
        <span className={"text-2xl"}>
          This webpage currently rebuilding using with{" "}
          <span className="bg-gradient-to-br from-slate-500 to-zinc-800 bg-clip-text text-transparent font-bold">
            Next v14
          </span>
        </span>
      </div>
    </main>
  );
}
