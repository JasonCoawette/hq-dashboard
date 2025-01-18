"use client";

import { useState } from 'react';

const useAuthForm = () => {
  const [email, setEmail] = useState('');
  const [otcValues, setOtcValues] = useState(['', '', '', '']);
  const [error, setError] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleOtcChange = (index: number, value: string) => {
    const newValues = [...otcValues];
    newValues[index] = value;
    setOtcValues(newValues);
  };

  return {
    email,
    handleEmailChange,
    otcValues,
    handleOtcChange,
    error,
    setError,
  };
};

export default useAuthForm; 