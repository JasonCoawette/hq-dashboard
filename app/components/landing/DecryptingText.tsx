"use client";

import { useState, useEffect } from 'react';
import useEncryptText from '@/app/hooks/useEncryptText';

type DecryptingTextProps = {
    text: string;
};

export default function DecryptingText({ text }: DecryptingTextProps) {
    const { displayText } = useEncryptText(text);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 0); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <h4 className="TagText">
            {isLoaded ? displayText : <span className="invisible">{text}</span>}
        </h4>
    );
};