import { useState, useEffect, memo } from "react";
import { MONTHS_MAP } from "./utils";
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
        <SC.Number isShow={current === index}>
          {isMonth ? MONTHS_MAP[index] : index}
        </SC.Number>
      ))}
    </SC.NumberWrapper>
  )
);

const extendNumber = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

const DigitalClock = () => {
  const [num, setNum] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const countInterval = setInterval(() => {
      const currentDate = new Date();
      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();
      const date = currentDate.getDate();
      const month = currentDate.getMonth();

      setNum(
        `${extendNumber(hours)}${extendNumber(minutes)}${extendNumber(
          seconds
        )}${extendNumber(date)}${extendNumber(month)}`
          .split("")
          .map((e) => parseInt(e))
      );
    }, 1000);

    return () => clearInterval(countInterval);
  }, []);

  return (
    <SC.Wrapper>
      <SC.Title>Digital Clock</SC.Title>
      <SC.Clock>
        <SC.Seperator>Date:&nbsp;</SC.Seperator>
        <Block total={4} current={num[6]} />
        <Block total={10} current={num[7]} />
        <SC.Seperator>&nbsp;</SC.Seperator>
        <Block total={12} current={parseInt(`${num[8]}${num[9]}`)} isMonth />
        <SC.Seperator>&nbsp;&nbsp;&nbsp;Time:&nbsp;</SC.Seperator>
        <Block total={3} current={num[0]} />
        <Block total={10} current={num[1]} />
        <SC.Seperator>&nbsp;</SC.Seperator>
        <Block total={6} current={num[2]} />
        <Block total={10} current={num[3]} />
        <SC.Seperator>&nbsp;</SC.Seperator>
        <Block total={6} current={num[4]} />
        <Block total={10} current={num[5]} />
      </SC.Clock>
    </SC.Wrapper>
  );
};

export default DigitalClock;
