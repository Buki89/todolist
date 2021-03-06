import React, { FC } from "react";

type LoadingProps = {
  className?: string;
};

const Loading: FC<LoadingProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.0"
      width="100%"
      height="20px"
      viewBox="0 0 512 47"
      className={className}
    >
      <rect x="0" y="0" width="100%" height="100%" fill="#403759" />
      <g>
        <circle fill="#ffffff" cx="-14.781" cy="22.328" r="12.813" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="88 0;182 0;251 0;298 0;321 0;323.33 0;325.66 0;327.99 0;330.32 0;332.65 0;334.98 0;337.31 0;339.64 0;341.97 0;344.3 0;346.63 0;348.96 0;351.29 0;353.62 0;356 0;379 0;426 0;494 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0;542 0"
          dur="1850ms"
          repeatCount="indefinite"
        />
      </g>
      <g>
        <circle fill="#ffffff" cx="-50.328" cy="22.328" r="12.797" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0;0 0;0 0;0 0;0 0;88 0;182 0;251 0;298 0;321 0;323.33 0;325.66 0;327.99 0;330.32 0;332.65 0;334.98 0;337.31 0;339.64 0;341.97 0;344.3 0;346.63 0;348.96 0;351.29 0;353.62 0;356 0;406 0;452 0;522 0;577 0;577 0;577 0;577 0;577 0;577 0;577 0;577 0;577 0;577 0"
          dur="1850ms"
          repeatCount="indefinite"
        />
      </g>
      <g>
        <circle fill="#ffffff" cx="-87.203" cy="22.328" r="12.797" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;88 0;182 0;251 0;298 0;321 0;323.33 0;325.66 0;327.99 0;330.32 0;332.65 0;334.98 0;337.31 0;339.64 0;341.97 0;344.3 0;346.63 0;348.96 0;351.29 0;353.62 0;356 0;403 0;450 0;520 0;614 0;614 0;614 0;614 0;614 0;614 0"
          dur="1850ms"
          repeatCount="indefinite"
        />
      </g>
      <g>
        <circle fill="#ffffff" cx="-125.234" cy="22.328" r="12.797" />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;88 0;182 0;251 0;298 0;321 0;323.33 0;325.66 0;327.99 0;330.32 0;332.65 0;334.98 0;337.31 0;339.64 0;341.97 0;344.3 0;346.63 0;348.96 0;351.29 0;353.62 0;356 0;402 0;448 0;518 0;611 0"
          dur="1850ms"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
};

export default Loading;
