import type { FC } from "react";

// 円の周長: 2 * π * r(10) ≈ 63
const CIRCLE_LENGTH = 63;
// チェックパス長: M9 12 l2 2 4-4 ≈ 8.5
const CHECK_LENGTH = 9;

export const AnimatedCircleCheck: FC<{ size?: number }> = ({ size = 96 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-success"
      role="img"
      aria-label="完了"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        style={{
          strokeDasharray: CIRCLE_LENGTH,
          strokeDashoffset: CIRCLE_LENGTH,
          animation: "draw-circle 0.6s ease-out 0.1s forwards",
        }}
      />
      <path
        d="M9 12l2 2 4-4"
        style={{
          strokeDasharray: CHECK_LENGTH,
          strokeDashoffset: CHECK_LENGTH,
          animation: "draw-check 0.35s ease-out 0.7s forwards",
        }}
      />
    </svg>
  );
};
