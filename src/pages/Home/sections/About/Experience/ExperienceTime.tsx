import React, { PropsWithChildren } from 'react';
import formatDate from '../../../../../utils/formatDate';

type ExperienceTimeProps = {
  start: Date;
  end: Date | 'Present';
};

function ExperienceTime({ start, end }: ExperienceTimeProps) {
  return (
    <div className="">
      {`${formatDate(start)}`} - {end instanceof Date ? formatDate(end) : end}
    </div>
  );
}

export default ExperienceTime;
