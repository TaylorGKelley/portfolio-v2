import React, { SVGAttributes } from 'react';

function FileIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg width='21' height='28' viewBox='0 0 21 28' fill='none' {...props}>
      <path
        d='M17.5 25.375C17.9813 25.375 18.375 24.9813 18.375 24.5V8.75H14C13.032 8.75 12.25 7.96797 12.25 7V2.625H3.5C3.01875 2.625 2.625 3.01875 2.625 3.5V24.5C2.625 24.9813 3.01875 25.375 3.5 25.375H17.5ZM0 3.5C0 1.56953 1.56953 0 3.5 0H12.5508C13.4805 0 14.3719 0.366406 15.0281 1.02266L19.9773 5.97187C20.6336 6.62812 21 7.51953 21 8.44922V24.5C21 26.4305 19.4305 28 17.5 28H3.5C1.56953 28 0 26.4305 0 24.5V3.5Z'
        fill='#FDBF86'
      />
    </svg>
  );
}

export default FileIcon;
