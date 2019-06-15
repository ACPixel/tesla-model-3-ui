import React, { useState } from 'react';
import styled from '@emotion/styled';

const Option = styled.span`
  display: inline-flex;
  z-index: 10;
  position: relative;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  height: 100px;
  transition: all 0.2s ease;
  width: 250px;
  border-radius: 27px;
  margin: 25px;
  color: white;
`;
export default ({ start, children }) => {
  const [selected, select] = useState(start);
  function clicker() {
    select(true);
    setTimeout(() => {
      select(false);
    }, 200);
  }
  return (
    <Option
      onClick={() => {
        clicker();
      }}
      style={{
        background: selected ? '#24f' : '#aaa',
        color: selected ? 'white' : 'black',
      }}
    >
      {children}
    </Option>
  );
};
