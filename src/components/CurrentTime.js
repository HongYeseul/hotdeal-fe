import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const TimeDisplay = styled.div`
  font-size: 2.2rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`;

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <TimeDisplay>
      {currentTime.toLocaleTimeString()}
    </TimeDisplay>
  );
}

export default CurrentTime;