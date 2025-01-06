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


// FINANCE UTILS
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

export function calculateCashFlow(revenue: number, expenses: number): number {
  return revenue - expenses;
}

// DATE UTILS
export const formatTimestamp = (dateInput: string | Date | null): string => {
  if (dateInput === null || dateInput === undefined) {
      console.error('Received null or undefined dateInput');
      return 'Invalid Date'; // Return a default value or handle as needed
  }

  console.log('Received dateInput:', dateInput);

  // Convert input to a Date object if it's a string
  const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;

  // Check if the date is valid
  if (isNaN(date.getTime())) {
      console.error('Invalid date value:', dateInput);
      return 'Invalid Date'; // Return a default value or handle as needed
  }

  const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short',
      hour12: false, // Use 24-hour format
  };

  // Format the date using the specified options
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  // Adjust the format to match "YYYY-MM-DD HH:mm ZZZ"
  const match = formattedDate.match(/(\d{2})\/(\d{2})\/(\d{4}), (\d{2}:\d{2}) (.+)/);
  if (!match) {
      throw new Error('Unexpected date format');
  }

  const [month, day, year, time, zone] = match.slice(1);
  return `${year}-${month}-${day} ${time} ${zone}`;
};