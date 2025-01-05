'use client';

import { useState, useEffect } from 'react';
import MobileCard from '../unviersal/MobileCard';
import Icon from '../unviersal/Icon';
import H1Number from '../unviersal/H1Number';
import ChangeTicker from '../unviersal/ChangeTicker';


export default function CreatedUsersCard() {
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
    // Replace MobileCard with the Responsive Card
    <MobileCard title="Created Users" icon={<Icon name="users" />} className="w-full h-fit p-[8px]">
      <div className="w-full h-fit flex flex-col items-start">
        <H1Number number={users}/>
        <ChangeTicker number={change} timeframe="Since last year" isPositive={change >= 0} />
      </div>
    </MobileCard>
  );
}