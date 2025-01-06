'use client';

import { useState, useEffect } from 'react';
import Card from '../unviersal/Card';
import Icon from '../unviersal/Icon';
import H1Number from '../unviersal/H1Number';
import ChangeTicker from '../unviersal/ChangeTicker';


export default function DownloadsCard() {
  // Test data state
  const [downloads, setDownloads] = useState(1000);
  const [change, setChange] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomChange = Math.floor(Math.random() * 200 - 100);
      setDownloads((prev) => prev + randomChange);
      setChange(randomChange);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card title="Downloads" className="w-full h-fit p-[8px]">
      <div className="w-full flex flex-col items-start">
        <H1Number number={downloads}/>
        <ChangeTicker number={change} timeframe="Today so far" isPositive={change >= 0} />
      </div>
    </Card>
  );
}
