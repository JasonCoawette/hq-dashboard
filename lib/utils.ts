import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { redirect } from "next/navigation";

/**
 * Merges multiple class names into one, handling conditional classes.
 * @param {...ClassValue[]} inputs - Class names or conditional classes.
 * @returns {string} - Merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

