import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const Time = styled.div`
  position: relative;
  top: 70px;
  text-align: center;
  font-family: 'Teko', sans-serif;
  font-size: 30px;
  line-height: 1.5;
  letter-spacing: 0.2em;
  background-color: var(--color-orange);
  color: var(--color-grey-light);
  padding-top: 4px;
  margin: 0 30px;
`;

const GameTimer = () => {
  const [time, setTime] = useState<number>(0);
  const [timerOn, setTimerOn] = useState<boolean>(false);

  useEffect(() => {
    let interval: any = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1000);
      }, 1000);
    } else if (!timerOn) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <Time>
      <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span>
    </Time>
  );
};

export default GameTimer;
