import { useState, useEffect, memo } from "react";
import { MONTHS_MAP, getCurrentTime } from "./utils";
import SC from "./styles";

const Block = memo(
  ({
    total,
    current,
    isMonth,
  }: {
    total: number;
    current: number;
    isMonth?: boolean;
  }) => (
    <SC.NumberWrapper num={current} isMonth={isMonth}>
      {[...new Array(total)].map((_, index) => (
        <SC.Number isShow={current === index} key={index}>
          {isMonth ? MONTHS_MAP[index] : index}
        </SC.Number>
      ))}
    </SC.NumberWrapper>
  ),
);

const DigitalClock = () => {
  const [time, setTime] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(countInterval);
  }, []);

  return (
    <SC.Clock>
      <SC.Seperator>Date:&nbsp;</SC.Seperator>
      <Block total={4} current={time[6]} />
      <Block total={10} current={time[7]} />
      <SC.Seperator>&nbsp;</SC.Seperator>
      <Block total={12} current={parseInt(`${time[8]}${time[9]}`)} isMonth />
      <SC.Seperator>&nbsp;&nbsp;&nbsp;Time:&nbsp;</SC.Seperator>
      <Block total={3} current={time[0]} />
      <Block total={10} current={time[1]} />
      <SC.Seperator>&nbsp;</SC.Seperator>
      <Block total={6} current={time[2]} />
      <Block total={10} current={time[3]} />
      <SC.Seperator>&nbsp;</SC.Seperator>
      <Block total={6} current={time[4]} />
      <Block total={10} current={time[5]} />
    </SC.Clock>
  );
};

export default DigitalClock;
