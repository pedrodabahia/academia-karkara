import React, { forwardRef } from "react";

const Belt = forwardRef(function Belt({ wrapperRef, tipRef }, ref) {
  return (
    <div
      ref={wrapperRef}
      className="belt-wrap"
      aria-hidden="true"
    >

      <svg
        ref={ref}
        className="belt-svg"
        viewBox="0 0 3500 400"
        preserveAspectRatio="none"
        style={{overflow : "visible"}}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
        x="3500"
        y="-600"
        width="5000"
        height="4000"
        fill="black"
        />
        <defs>
          <linearGradient
            id="beltFabric"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#161616" />
            <stop offset="45%" stopColor="#0c0c0c" />
            <stop offset="55%" stopColor="#0a0a0a" />
            <stop offset="100%" stopColor="#181818" />
          </linearGradient>
        </defs>

        <path
          id="belt-body"
          d="M0 58 H3500 V342 H0 Z"
          fill="url(#beltFabric)"
        />

        <g
          id="belt-tip"
          ref={tipRef}
          style={{
            transformBox: "fill-box",
            transformOrigin: "80% 50%",
          }}
        >
            <rect
              x="357"
              y="55"
              width="655"
              height="320"
              fill="#ff0000"
            />
        </g>
      </svg>
    </div>
  );
});

export default Belt;