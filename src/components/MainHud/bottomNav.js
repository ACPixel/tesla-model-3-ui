import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { MdDirectionsCar } from 'react-icons/md';
import {
  IoIosMusicalNotes,
  IoIosArrowUp,
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosVolumeHigh,
} from 'react-icons/io';
import { FaChair } from 'react-icons/fa';
import { GiComputerFan, GiHeatHaze } from 'react-icons/gi';

import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100vw;
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 50px;
  background: #222;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 24px;
  z-index: 1000;
`;

export default () => {
  return (
    <Wrapper>
      <Link
        to="/settings/quickControls"
        css={css`
          color: white;
          text-decoration: none;
        `}
      >
        <MdDirectionsCar />
      </Link>

      <IoIosMusicalNotes />
      <IoIosArrowUp
        css={css`
          padding: 2px;
          border-radius: 10px;
          border: solid 2px white;
        `}
      />
      <FaChair />
      <GiComputerFan />
      <div>
        <IoIosArrowBack />
        <span>LO</span>
        <IoIosArrowForward />
      </div>
      <FaChair />
      <GiHeatHaze />
      <GiHeatHaze />
      <div>
        <IoIosArrowBack />
        <IoIosVolumeHigh />
        <IoIosArrowForward />
      </div>
    </Wrapper>
  );
};
