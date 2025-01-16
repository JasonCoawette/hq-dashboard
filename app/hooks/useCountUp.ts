import { useState, useEffect } from 'react';

export function useCountUp(targetValue: number, duration: number = 2000) {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = targetValue / (duration / 32);

    const step = () => {
      start += increment;
      if (start < targetValue) {
        setCurrentValue(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setCurrentValue(targetValue);
      }
    };

    step();
  }, [targetValue, duration]);

  return currentValue;
}