'use client';

import { useState, useEffect } from 'react';
import Card from '../unviersal/Card';
import H1Number from '../unviersal/H1Number';
import ChangeTicker from '../unviersal/ChangeTicker';


export default function CreatedUsersCard() {

  //Test data function
  const [users, setUsers] = useState(4000);
  const [change, setChange] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomChange = Math.floor(Math.random() * 100 - 50);
      setUsers((prev) => prev + randomChange);
      setChange(randomChange);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card title="Created Users" className="w-full h-fit p-[8px]">
      <div className="w-full h-fit flex flex-col items-start">
        <H1Number number={users}/>
        <ChangeTicker number={change} timeframe="Since last year" isPositive={change >= 0} />
      </div>
    </Card>
  );
}