// src/components/Countdown/useCountdown.ts
import { useMemo } from "react";
import { useNow } from "../../hooks/useNow";
import { getTimeDifferenceMs, isPast, splitMsToTimeParts } from "../../utils/time";

interface UseCountdownParams {
  targetTime: Date;
}

export function useCountdown({ targetTime }: UseCountdownParams) {
  const now = useNow(1000); // 1s update

  const { diffMs, isFinished, parts } = useMemo(() => {
    const diff = getTimeDifferenceMs(targetTime, now);
    const finished = isPast(targetTime, now);
    const timeParts = splitMsToTimeParts(diff);

    return {
      diffMs: diff,
      isFinished: finished,
      parts: timeParts,
    };
  }, [now, targetTime]);

  return {
    diffMs,
    isFinished,
    days: parts.days,
    hours: parts.hours,
    minutes: parts.minutes,
    seconds: parts.seconds,
  };
}
