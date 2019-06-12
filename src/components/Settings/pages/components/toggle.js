import React, { useState } from 'react';
import styled from '@emotion/styled'

const Option = styled.div`
display: inline-block;
z-index: 10;
position: relative;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
height: 50px;
transition: all 0.2s ease;
width: 300px;
border-radius: 27px;
margin-top: 25px;
color: white;
`
export default ({start, children}) => {
    const [selected, select] = useState(start)
  return (
    <Option onClick={()=>{select(!selected)}} style={{background: selected ? "#24f" : "white", color: selected ? "white" : "black", border: selected ? "solid 2px #24f" : "solid 2px #aaa"}}>{children}</Option>
  );
};