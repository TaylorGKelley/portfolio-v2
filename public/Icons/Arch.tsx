import React from 'react';

type ArchProps = React.SVGProps<SVGSVGElement> & {
  topColor?: string;
  bottomColor?: string;
};

export default function Arch({
  height = '771',
  width = '527',
  strokeWidth = '9',
  topColor = '#A25710',
  bottomColor = '#EF923C',
  ...props
}: ArchProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 527 771"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 263.5C4.5 120.458 120.458 4.5 263.5 4.5C406.542 4.5 522.5 120.458 522.5 263.5V766.5H4.5V263.5Z"
        stroke="url(#paint0_linear_58_19)"
        stroke-opacity="0.51"
        stroke-width={strokeWidth}
      />
      <defs>
        <linearGradient
          id="paint0_linear_58_19"
          x1="263.5"
          y1="0"
          x2="263.5"
          y2="771"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={topColor} />
          <stop offset="1" stop-color={bottomColor} stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
