"use client";

import { useState, useEffect } from 'react';
import useEncryptText from '@/app/hooks/useEncryptText';

type DecryptingTextProps = {
    text: string;
};

export default function DecryptingText({ text }: DecryptingTextProps) {
    const { displayText } = useEncryptText(text);
    const [isLoaded, setIsLoaded] = useState(false);

    // Determine if the text is loaded

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }); 

        return () => clearTimeout(timer);
    }, []);

    // Return the text

    return (
        <h4 className="TagText">
            {isLoaded ? displayText : <span className="invisible">{text}</span>}
        </h4>
    );
};