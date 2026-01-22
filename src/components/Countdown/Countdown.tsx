import React from "react";
import { useCountdown } from "./useCountdown";
import { formatTimePart } from "../../utils/time";
import styles from "./Countdown.module.css";

interface CountdownProps {
  targetTime: Date;
  onComplete?: () => void;
}

export const Countdown: React.FC<CountdownProps> = ({ targetTime, onComplete }) => {
  const { days, hours, minutes, seconds, isFinished } = useCountdown({ targetTime });

  React.useEffect(() => {
    if (isFinished && onComplete) {
      onComplete();
    }
  }, [isFinished, onComplete]);

  return (
    <div className={styles.container}>
      <TimeBlock label="Days" value={days} />
      <Separator />
      <TimeBlock label="Hours" value={hours} />
      <Separator />
      <TimeBlock label="Minutes" value={minutes} />
      <Separator />
      <TimeBlock label="Seconds" value={seconds} />
    </div>
  );
};

interface TimeBlockProps {
  label: string;
  value: number;
}

const TimeBlock: React.FC<TimeBlockProps> = ({ label, value }) => (
  <div className={styles.block}>
    <div className={styles.value}>{formatTimePart(value)}</div>
    <div className={styles.label}>{label}</div>
  </div>
);

const Separator: React.FC = () => <div className={styles.separator}>:</div>;
