import Link from "next/link";
import { cn } from "@/utils/utils";

type LogoProps = {
    href: string;
    className?: string;
}

export default function Logo({ href, className }: LogoProps) {
    return (
        <Link href={href} className={cn("w-fit h-fit py-[2px] flex flex-row justify-center items-center", className)}>
        </Link>
    );
}