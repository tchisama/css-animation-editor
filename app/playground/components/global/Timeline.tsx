"use client"
import React, { useEffect, useState } from 'react';

type Props = {};

const smooth = 50;

function Timeline({}: Props) {
  const [time, setTime] = useState(0);
  const [timeLineLong, setTimeLineLong] = useState(5);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1/smooth);
      setPercent((time *100)/(timeLineLong*1000));
      console.log(percent)
    },1000/smooth);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <div className='relative flex-1 overflow-x-auto'>
      <div
        className='absolute h-full w-[1px] bg-gray-600 border'
        style={{ left: percent  + '%' }}
      ></div>
    </div>
  );
}

export default Timeline;