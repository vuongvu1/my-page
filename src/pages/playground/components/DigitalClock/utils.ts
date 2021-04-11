export const MONTHS_MAP = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const extendNumber = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

export const getCurrentTime = (): Array<number> => {
  const currentTime = new Date();
  const hours = extendNumber(currentTime.getHours());
  const minutes = extendNumber(currentTime.getMinutes());
  const seconds = extendNumber(currentTime.getSeconds());
  const date = extendNumber(currentTime.getDate());
  const month = extendNumber(currentTime.getMonth());
  const timeString = `${hours}${minutes}${seconds}${date}${month}`;

  return timeString.split("").map((e: string) => parseInt(e));
};
