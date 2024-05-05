"use client";

import { useLocalTime } from "@/hooks/useLocalTime";

export const DynamicTime = () => {
  const { hours, minutes, city } = useLocalTime();

  return (
    <p>
      Local Time:{" "}
      <span className="bg-gradient-to-br from-gray-500 to-gray-800 bg-clip-text font-lora font-semibold text-transparent">
        {hours + ":" + minutes}
      </span>{" "}
      <span>{city}</span>
    </p>
  );
};
