"use client"
import { useState, useEffect } from 'react';
import H1Number from '../app/components/unviersal/H1Number';

export default function NumberTest() {
  const [number, setNumber] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prev) => prev + Math.floor(Math.random() * 200 - 100));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-4">
      <H1Number number={number} color="primaryFG" />
    </div>
  );
}