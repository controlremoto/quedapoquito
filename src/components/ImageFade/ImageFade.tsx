import React from "react";
import { useOpacity } from "./useOpacity";
import styles from "./ImageFade.module.css";

interface ImageFadeProps {
  primarySrc: string;
  primaryAlt?: string;
  replacementSrc: string;
  replacementAlt?: string;
  opacityStartTime: Date;
  opacityEndTime: Date;
  showReplacement: boolean;
}

export const ImageFade: React.FC<ImageFadeProps> = ({
  primarySrc,
  primaryAlt,
  replacementSrc,
  replacementAlt,
  opacityStartTime,
  opacityEndTime,
  showReplacement,
}) => {
  //const primaryOpacity = useOpacity({ opacityStartTime, opacityEndTime });
  //const primaryOpacity = showReplacement ? 0 : useOpacity({ opacityStartTime, opacityEndTime });
  const primaryOpacityRaw = useOpacity({ opacityStartTime, opacityEndTime });

  // ✅ Never conditionally skip hooks
  const primaryOpacity = showReplacement ? 0 : primaryOpacityRaw;


  const [replacementVisible, setReplacementVisible] = React.useState(false);

  React.useEffect(() => {
    if (showReplacement) setReplacementVisible(true);
  }, [showReplacement]);

  return (
    <div className={styles.wrapper}>
      <img
        src={primarySrc}
        alt={primaryAlt}
        className={styles.image}
        style={{ opacity: primaryOpacity }}
      />

      <img
        src={replacementSrc}
        alt={replacementAlt}
        className={`${styles.image} ${styles.replacement}`}
        style={{ opacity: replacementVisible ? 1 : 0 }}
      />
    </div>
  );
};
