import React, { Component } from "react";

export default class CyberImg extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <svg
        width="600"
        height="500"
        viewBox="0 0 600 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="600" height="500" fill="transparent" />

        {/* Shield */}
        <path
          d="M300 50 L450 120 L420 350 Q300 450 180 350 L150 120 Z"
          fill={theme.imageHighlight}
          opacity="0.9"
        />

        {/* Lock body */}
        <rect
          x="230"
          y="220"
          width="140"
          height="120"
          rx="15"
          fill="#ffffff"
        />

        {/* Lock shackle */}
        <path
          d="M260 220 V180 A40 40 0 0 1 340 180 V220"
          stroke="#ffffff"
          strokeWidth="10"
          fill="none"
        />

        {/* Keyhole */}
        <circle cx="300" cy="270" r="12" fill={theme.imageHighlight} />
        <rect
          x="295"
          y="270"
          width="10"
          height="25"
          fill={theme.imageHighlight}
        />

        {/* Decorative circles */}
        <circle cx="100" cy="100" r="8" fill={theme.imageHighlight} opacity="0.3"/>
        <circle cx="500" cy="80" r="6" fill={theme.imageHighlight} opacity="0.3"/>
        <circle cx="80" cy="400" r="10" fill={theme.imageHighlight} opacity="0.2"/>
        <circle cx="520" cy="420" r="7" fill={theme.imageHighlight} opacity="0.2"/>

      </svg>
    );
  }
}