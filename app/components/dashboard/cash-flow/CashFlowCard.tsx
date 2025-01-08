'use client';

import { useState, useEffect } from 'react';
import Card from '../unviersal/Card';
import H3Number from '../unviersal/H3Number';
import H2Number from '../unviersal/H2Number';
import { calculateCashFlow } from '@/utils/utils';

export default function CashFlowCard() {
  const [revenue, setRevenue] = useState(100000.00);
  const [expenses, setExpenses] = useState(20000.00);
  const [cashFlow, setCashFlow] = useState(calculateCashFlow(revenue, expenses));

  useEffect(() => {
    const interval = setInterval(() => {
      const randomRevenueChange = Math.random() * 50000 - 25000;
      const randomExpensesChange = Math.random() * -50000 - 25000;
      const newRevenue = revenue + randomRevenueChange;
      const newExpenses = expenses + randomExpensesChange;
      setRevenue(newRevenue);
      setExpenses(newExpenses);
      setCashFlow(calculateCashFlow(newRevenue, newExpenses));
    }, 4000);

    return () => clearInterval(interval);
  }, [revenue, expenses]);
  

    return (
        <Card title="Cash Flow" className="w-full h-fit">
          <div className="w-full h-fit flex flex-col items-start">
              <H2Number number={revenue} isCurrency={true} className="text-green" isPositive={true}/>
              <H2Number number={expenses} isCurrency={true} className="text-negativeRed" isPositive={false}/>

              <div className="w-full h-fit flex flex-row gap-x-[4px] justify-start items-center leading-normal">
              <span className="font-mono text-[16px] font-normal text-tertiaryFG tracking-[-0.02em]">Revenue:</span>
              <H3Number number={cashFlow} className="text-secondaryFG" isCurrency={true} />
              </div>
          </div>
        </Card>
    );
}