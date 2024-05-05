import { DynamicTime } from "@/components/location/dynamic-time";

export const Location = () => {
  return (
    <div className="flex w-full max-w-[580px] flex-col gap-0.5 tracking-wider">
      <h4>Based in Istanbul, Turkey</h4>
      <DynamicTime />
    </div>
  );
};
