export function computeOpacity(now: Date, start: Date, end: Date) {
  if (now <= start) return 1;
  if (now >= end) return 0.015; // Minimum opacity floor

  const total = end.getTime() - start.getTime();
  const elapsed = now.getTime() - start.getTime();
  const progress = elapsed / total;

  const opacity = 1 - progress;
  return Math.max(opacity, 0.015); // Ensure minimum opacity floor
}
