function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const counts = new Map<string, number>();

  for (let char of s) {
    counts.set(char, (counts.get(char) ?? 0) + 1)
  }

  for (let char of t) {
    const count = counts.get(char) ?? 0
    if (count === 0) {
        return false
    } else {
        counts.set(char, (counts.get(char) - 1))
    }
  }
  return true
}