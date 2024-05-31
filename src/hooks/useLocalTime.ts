import { useEffect, useState } from "react";

const TimeDictionary = [
  {
    city: "Istanbul",
    date: "Europe/Istanbul",
    timeZone: "GMT+3",
  },
  {
    city: "New York",
    date: "America/New_York",
    timeZone: "GMT-4",
  },
  {
    city: "London",
    date: "Europe/London",
    timeZone: "GMT+1",
  },
  {
    city: "Tokyo",
    date: "Asia/Tokyo",
    timeZone: "GMT+9",
  },
  {
    city: "Sydney",
    date: "Australia/Sydney",
    timeZone: "GMT+10",
  },
  {
    city: "Moscow",
    date: "Europe/Moscow",
    timeZone: "GMT+3",
  },
];

export const useLocalTime = () => {
  const [index, setIndex] = useState(0);

  const onIndexChange = () => {
    if (index + 1 < TimeDictionary.length) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(onIndexChange, 5000);
    return () => clearInterval(interval);
  }, [index]);

  const newDate = new Date().toLocaleString("en-US", {
    timeZone: TimeDictionary[index].date,
  });

  const currentDate = new Date(newDate);

  const hours = currentDate.getHours();
  const minutes =
    currentDate.getMinutes() < 10
      ? `0${currentDate.getMinutes()}`
      : currentDate.getMinutes();

  const timeZone = TimeDictionary[index].timeZone;
  const city = TimeDictionary[index].city;

  return { hours, minutes, timeZone, city };
};
