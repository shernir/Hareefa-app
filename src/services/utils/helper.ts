export function truncateWithEllipsis(str: string, maxLength: number): string {
  if (str.length <= maxLength) {
    return str; // No need to truncate
  }
  return str.slice(0, maxLength) + '...'; // Truncate and add ellipsis
}
