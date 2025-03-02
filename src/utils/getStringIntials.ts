export function getInitials(name: string | null): string {
  if (name) {
    const words = name.split(' ');
    if (words.length >= 2) {
      const firstChar = words[0]!.charAt(0).toUpperCase();
      const secondChar = words[1]!.charAt(0).toUpperCase();
      return `${firstChar}${secondChar}`;
    }
    if (words.length === 1) {
      return words[0]!.substring(0, 2).toUpperCase();
    }
  }
  return '';
}
