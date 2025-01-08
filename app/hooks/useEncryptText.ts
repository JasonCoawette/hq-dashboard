import { useState, useEffect } from 'react';

export default function useEncryptText(text: string) {
    const [displayText, setDisplayText] = useState<string>('');
    const [isDecrypted, setIsDecrypted] = useState<boolean>(false);

    useEffect(() => {
        const encryptText = (text: string) => {
            return text.replace(/./g, '*'); // Simple encryption with asterisks
        };

        const cycleText = () => {
            if (isDecrypted) {
                setDisplayText(encryptText(text));
                setIsDecrypted(false);
            } else {
                setDisplayText(text);
                setIsDecrypted(true);
            }
        };

        const interval = setInterval(cycleText, isDecrypted ? 6000 : 1000);

        return () => clearInterval(interval);
    }, [isDecrypted, text]);

    return displayText;
}