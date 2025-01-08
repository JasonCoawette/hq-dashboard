'use client';

import useEncryptText from '@/app/hooks/useEncryptText';

type DecryptingTextProps = {
    text: string;
};

// TODO: make this a little better more characters a typing animation smooth with framer motion and such

export default function DecryptingText({ text }: DecryptingTextProps) {
    const displayText = useEncryptText(text);
    
    return (
        <h4 className="
            TagText
        ">{displayText}</h4>
    );
};