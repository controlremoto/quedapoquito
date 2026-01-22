// src/components/ImageFade/useOpacity.ts
import { useMemo } from "react";
import { useNow } from "../../hooks/useNow";
import { computeOpacity } from "../../utils/opacity";

interface UseOpacityParams {
  opacityStartTime: Date;
  opacityEndTime: Date;
}

export function useOpacity({ opacityStartTime, opacityEndTime }: UseOpacityParams) {
  const now = useNow(1000); // 1s update

  const opacity = useMemo(() => {
    return computeOpacity(now, opacityStartTime, opacityEndTime);
  }, [now, opacityStartTime, opacityEndTime]);

  return opacity;
}
