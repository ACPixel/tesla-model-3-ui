import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { FaBatteryHalf, FaCamera, FaBolt, FaMicrophone } from 'react-icons/fa';

const Wrapper = styled.div`
  width: 500px;
  height: calc(100% - 50px);
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 0px 0px 0px 15px;
  background: white;
`;

const Top = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Mid = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #666;
  font-size: 24px;
`;

const Bat = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-weight: bolder;
  color: #666;
  display: flex;
  align-items: center;
  font-size: 16px;
`;

export default () => {
  return (
    <Wrapper>
      <Top>
        <div
          css={css`
            font-size: 96px;
            font-weight: 200;
          `}
        >
          P
        </div>
        <Bat>
          170 mi{' '}
          <FaBatteryHalf
            css={css`
              margin-left: 5px;
              font-size: 36px;
              font-weight: 100;
            `}
          />
        </Bat>
      </Top>
      <hr
        css={css`
          margin: 10px;
          border: solid 0.5px #000;
          box-shadow: none;
        `}
      />
      <Mid>
        <div
          css={css`
            position: absolute;
            top: 10px;
            left: 10px;
          `}
        >
          Podracer
        </div>
        <img src={require('./car.png')} alt="car" />
      </Mid>
      <Bottom>
        <FaCamera />
        <FaBolt />
        <FaMicrophone />
      </Bottom>
    </Wrapper>
  );
};
