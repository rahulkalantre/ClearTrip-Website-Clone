import React from "react";

const CalenderLogo = () => {
  return (
    <div>
      <svg width={24} height={24} fill="none">
        <mask
          id="a"
          width={24}
          height={24}
          x={0}
          y={0}
          maskUnits="userSpaceOnUse"
          style={{
            maskType: "alpha",
          }}
        >
          <path fill="#D9D9D9" d="M0 0h24v24H0z" />
        </mask>
        <g mask="url(#a)">
          <path
            fill="gray"
            d="M12 14.15a.76.76 0 0 1-.537-.225.728.728 0 0 1 0-1.075.76.76 0 0 1 .537-.225c.2 0 .38.075.538.225a.73.73 0 0 1 0 1.075.763.763 0 0 1-.538.225Zm-4 0a.76.76 0 0 1-.537-.225.728.728 0 0 1 0-1.075.76.76 0 0 1 .537-.225c.2 0 .38.075.538.225a.73.73 0 0 1 0 1.075.763.763 0 0 1-.538.225Zm8 0a.76.76 0 0 1-.537-.225.728.728 0 0 1 0-1.075.76.76 0 0 1 .537-.225c.2 0 .38.075.538.225a.73.73 0 0 1 0 1.075.763.763 0 0 1-.538.225ZM12 18a.76.76 0 0 1-.537-.225.74.74 0 0 1 0-1.087.74.74 0 0 1 .537-.238c.2 0 .38.08.538.238a.74.74 0 0 1 0 1.087A.763.763 0 0 1 12 18Zm-4 0a.76.76 0 0 1-.537-.225.74.74 0 0 1 0-1.087A.74.74 0 0 1 8 16.45c.2 0 .38.08.538.238a.74.74 0 0 1 0 1.087A.763.763 0 0 1 8 18Zm8 0a.76.76 0 0 1-.537-.225.74.74 0 0 1 0-1.087.74.74 0 0 1 .537-.238c.2 0 .38.08.538.238a.74.74 0 0 1 0 1.087A.763.763 0 0 1 16 18ZM5.625 21c-.467 0-.854-.154-1.162-.462C4.154 20.23 4 19.842 4 19.375V6.625c0-.466.154-.854.463-1.162C4.771 5.155 5.158 5 5.625 5h1.75V3.3a.49.49 0 0 1 .162-.375c.109-.1.238-.15.388-.15a.509.509 0 0 1 .525.525V5h7.175V3.275c0-.15.046-.27.137-.363a.493.493 0 0 1 .363-.137c.133 0 .25.046.35.137.1.092.15.213.15.363V5h1.75c.467 0 .854.155 1.163.463.308.308.462.696.462 1.162v12.75c0 .467-.154.855-.462 1.163-.309.308-.696.462-1.163.462H5.625Zm0-1h12.75a.61.61 0 0 0 .45-.175.61.61 0 0 0 .175-.45v-8.75H5v8.75a.61.61 0 0 0 .175.45.609.609 0 0 0 .45.175ZM5 9.625h14v-3a.609.609 0 0 0-.175-.45.61.61 0 0 0-.45-.175H5.625a.61.61 0 0 0-.45.175.61.61 0 0 0-.175.45v3Z"
          />
        </g>
      </svg>
    </div>
  );
};

export default CalenderLogo;
