import React, { SVGAttributes } from 'react';

function CSSLogo(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width="73"
      height="85"
      viewBox="0 0 73 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M0 0L6.63464 75.096L36.5 85L66.3654 75.096L73 0H0ZM59.5216 15.1786L58.6091 24.1529L36.6901 33.5067L36.6331 33.5257H57.8297L55.3964 61.3404L36.7281 66.7857L17.9458 61.2455L16.7292 47.2243H26.0253L26.6336 54.4911L36.6331 57.0145L47.0318 54.0926L47.7352 42.4051L16.1208 42.3103V42.2913L16.0828 42.3103L15.3984 33.5257L36.7091 24.6652L37.9448 24.1529H14.581L13.4784 15.1786H59.5216Z"
        fill="#FDBF86"
      />
    </svg>
  );
}

export default CSSLogo;
