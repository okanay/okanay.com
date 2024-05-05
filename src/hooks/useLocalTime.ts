import { useEffect, useState } from "react";

const TimeDictionary = [
  {
    city: "Istanbul",
    date: new Date().toLocaleString("en-US", { timeZone: "Europe/Istanbul" }),
    timeZone: "GMT+3",
  },
  {
    city: "New York",
    date: new Date().toLocaleString("en-US", { timeZone: "America/New_York" }),
    timeZone: "GMT-4",
  },
  {
    city: "London",
    date: new Date().toLocaleString("en-US", { timeZone: "Europe/London" }),
    timeZone: "GMT+1",
  },
  {
    city: "Tokyo",
    date: new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" }),
    timeZone: "GMT+9",
  },
  {
    city: "Sydney",
    date: new Date().toLocaleString("en-US", { timeZone: "Australia/Sydney" }),
    timeZone: "GMT+10",
  },
  {
    city: "Moscow",
    date: new Date().toLocaleString("en-US", { timeZone: "Europe/Moscow" }),
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

  const currentDate = new Date(TimeDictionary[index].date);

  const hours = currentDate.getHours();
  const minutes =
    currentDate.getMinutes() < 10
      ? `0${currentDate.getMinutes()}`
      : currentDate.getMinutes();

  const timeZone = TimeDictionary[index].timeZone;
  const city = TimeDictionary[index].city;

  return { hours, minutes, timeZone, city };
};
