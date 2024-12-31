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

/**
 * Redirects to a specified path with an encoded message as a query parameter.
 * @param {"error" | "success"} type - The type of message.
 * @param {string} path - The path to redirect to.
 * @param {string} message - The message to encode.
 * @returns {never} - Triggers a redirect.
 */
export function encodedRedirect(
  type: "error" | "success",
  path: string,
  message: string,
) {
  return redirect(`${path}?${type}=${encodeURIComponent(message)}`);
}