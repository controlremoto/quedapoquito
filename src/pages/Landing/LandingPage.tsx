import React from "react";
import { SocialBar } from "../../components/SocialBar/SocialBar";
import {
  countDownEndTime,
  nextCountDownEndTime,
  opacityEndTime,
  opacityStartTime,
} from "../../config/timings";
import { Countdown } from "../../components/Countdown/Countdown";
import { ImageFade } from "../../components/ImageFade/ImageFade";

import primaryImage from "../../assets/primary.jpg";
import replacementImage from "../../assets/replacement.png";

import styles from "./LandingPage.module.css";

export const LandingPage: React.FC = () => {
  const [currentTargetTime, setCurrentTargetTime] = React.useState<Date>(countDownEndTime);
  const [showReplacementImage, setShowReplacementImage] = React.useState(false);

  const handleCountdownComplete = React.useCallback(() => {
    setShowReplacementImage(true);
    setCurrentTargetTime(nextCountDownEndTime);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <h1 className={styles.title}>#QuedaPoquito</h1>

        <div className={styles.imageSection}>
          <ImageFade
            primarySrc={primaryImage}
            primaryAlt="Primary state"
            replacementSrc={replacementImage}
            replacementAlt="Future state"
            opacityStartTime={opacityStartTime}
            opacityEndTime={opacityEndTime}
            showReplacement={showReplacementImage}
          />
        </div>

        <div className={styles.countdownSection}>
          <p className={styles.subtitle}>🇨🇱🇨🇱🇨🇱</p>
          <Countdown targetTime={currentTargetTime} onComplete={handleCountdownComplete} />
        </div>
        <SocialBar />
      </div>
    </div>
  );
};
