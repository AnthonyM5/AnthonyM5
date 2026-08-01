function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const counts = new Map<string, number>();
  for (const char of s) counts.set(char, (counts.get(char) ?? 0) + 1);
  for (const char of t) {
    const c = counts.get(char) ?? 0;
    if (c === 0) return false;
    counts.set(char, c - 1);
  }
  return true;
}