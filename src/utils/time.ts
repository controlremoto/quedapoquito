// src/utils/time.ts

export function getTimeDifferenceMs(target: Date, now: Date): number {
  return target.getTime() - now.getTime();
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function isPast(target: Date, now: Date): boolean {
  return now.getTime() >= target.getTime();
}

export function isBefore(target: Date, now: Date): boolean {
  return now.getTime() < target.getTime();
}

export function isBetween(start: Date, end: Date, now: Date): boolean {
  const time = now.getTime();
  return time >= start.getTime() && time <= end.getTime();
}

export function splitMsToTimeParts(diffMs: number) {
  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));

  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
}

export function formatTimePart(value: number): string {
  return value.toString().padStart(2, "0");
}
