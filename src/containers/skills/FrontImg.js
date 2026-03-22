import React, { Component } from "react";

export default class FrontImg extends Component {
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

        {/* Screen */}
        <rect
          x="120"
          y="100"
          width="360"
          height="250"
          rx="15"
          fill={theme.imageHighlight}
          opacity="0.15"
        />

        {/* Browser top bar */}
        <rect
          x="120"
          y="100"
          width="360"
          height="40"
          rx="15"
          fill={theme.imageHighlight}
          opacity="0.3"
        />

        {/* Browser dots */}
        <circle cx="150" cy="120" r="6" fill="#ff5f56" />
        <circle cx="170" cy="120" r="6" fill="#ffbd2e" />
        <circle cx="190" cy="120" r="6" fill="#27c93f" />

        {/* UI blocks */}
        <rect x="150" y="160" width="120" height="20" fill={theme.imageHighlight} opacity="0.6"/>
        <rect x="150" y="190" width="200" height="15" fill={theme.imageHighlight} opacity="0.4"/>
        <rect x="150" y="220" width="180" height="15" fill={theme.imageHighlight} opacity="0.4"/>

        {/* Button */}
        <rect
          x="150"
          y="260"
          width="100"
          height="30"
          rx="8"
          fill={theme.imageHighlight}
        />

        {/* React Atom */}
        <g transform="translate(420,200)">
          <circle cx="0" cy="0" r="10" fill="#61DAFB" />
          <ellipse
            rx="40"
            ry="15"
            stroke="#61DAFB"
            strokeWidth="2"
            fill="none"
          />
          <ellipse
            rx="40"
            ry="15"
            transform="rotate(60)"
            stroke="#61DAFB"
            strokeWidth="2"
            fill="none"
          />
          <ellipse
            rx="40"
            ry="15"
            transform="rotate(120)"
            stroke="#61DAFB"
            strokeWidth="2"
            fill="none"
          />
        </g>

        {/* Decorative elements */}
        <circle cx="80" cy="80" r="8" fill={theme.imageHighlight} opacity="0.2"/>
        <circle cx="520" cy="400" r="10" fill={theme.imageHighlight} opacity="0.2"/>

      </svg>
    );
  }
}