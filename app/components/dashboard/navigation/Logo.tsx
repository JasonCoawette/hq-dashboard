import Link from "next/link";
import { cn } from "@/lib/utils";
import Icon from "../unviersal/Icon";

type LogoProps = {
    href: string;
    className?: string;
}

export default function Logo({ href, className }: LogoProps) {
    return (
        <Link href={href} className={cn("w-fit h-fit py-[2px] flex flex-row justify-center items-center", className)}>
            <Icon name="logo" className="w-fit h-fit"/>
        </Link>
    );
}