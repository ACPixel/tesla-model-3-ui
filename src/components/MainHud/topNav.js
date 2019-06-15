import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { FaLockOpen, FaUser, FaHome, FaCamera } from 'react-icons/fa';
import { MdBluetooth, MdNetworkCell } from 'react-icons/md';

const Wrapper = styled.div`
  width: calc(100% - 500px);
  height: 50px;
  position: absolute;
  right: 0px;
  top: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 24px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

export default () => {
  return (
    <Wrapper>
      <div
        css={css`
          width: 30%;
          display: flex;
          justify-content: space-around;
        `}
      >
        <FaLockOpen />
        <span> 9:23 AM</span>
        <span> 81°F</span>
      </div>
      <div
        css={css`
          width: 30%;
          display: flex;
          justify-content: space-around;
        `}
      >
        <FaUser />
        <span>Easy Entry</span>
        <FaCamera />
        <FaHome />
        <MdNetworkCell />
        <MdBluetooth />
      </div>
    </Wrapper>
  );
};
