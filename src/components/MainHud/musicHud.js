import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { IoIosMusicalNotes } from 'react-icons/io';
import { FaPlay, FaForward, FaBackward } from 'react-icons/fa';

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: flex;
  justify-content: center;
  z-index: 100;
`;

const Display = styled.div`
  background: white;
  border-radius: 5px 5px 0px 0px;
  height: 100px;
  width: 98%;
  display: flex;
  justify-content: space-between;
`;

const MusicControls = styled.div`
  width: 60%;
  color: #666;
  font-size: 24px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Bar = styled.div`
  display: block;
  position: absolute;
  top: 10px;
  width: 100px;
  height: 5px;
  border-radius: 3px;
  left: calc(50% - 50px);
  background: #aaa;
`;

export default () => {
  return (
    <Wrapper>
      <Display>
        <div
          css={css`
            width: 100px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
          `}
        >
          <IoIosMusicalNotes
            css={css`
              font-size: 48px;
              color: #666;
            `}
          />
        </div>
        <div
          css={css`
            padding: 5px;
            color: #666;
          `}
        >
          No device connected
        </div>
        <MusicControls>
          <FaBackward />
          <FaPlay />
          <FaForward />
        </MusicControls>
        <Bar />
      </Display>
    </Wrapper>
  );
};
