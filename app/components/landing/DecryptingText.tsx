'use client';

import useEncryptText from '@/app/hooks/useEncryptText';

// can we make sure this loads with the page so it doesnt shift the text wrapper up
type DecryptingTextProps = {
    text: string;
};

export default function DecryptingText({ text }: DecryptingTextProps) {
    const { displayText } = useEncryptText(text);
    
    return (
        <h4 className="
            TagText
        ">
            {displayText}
        </h4>
    );
};