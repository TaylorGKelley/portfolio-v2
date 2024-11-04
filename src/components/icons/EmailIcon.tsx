import React, { SVGAttributes } from 'react';

function EmailIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      width='27'
      height='20'
      viewBox='0 0 27 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M2.53125 0C1.13379 0 0 1.11979 0 2.5C0 3.28646 0.374414 4.02604 1.0125 4.5L12.4875 13C13.0887 13.4427 13.9113 13.4427 14.5125 13L25.9875 4.5C26.6256 4.02604 27 3.28646 27 2.5C27 1.11979 25.8662 0 24.4688 0H2.53125ZM0 5.83333V16.6667C0 18.5052 1.51348 20 3.375 20H23.625C25.4865 20 27 18.5052 27 16.6667V5.83333L15.525 14.3333C14.3227 15.224 12.6773 15.224 11.475 14.3333L0 5.83333Z'
        fill='#422102'
      />
    </svg>
  );
}

export default EmailIcon;
