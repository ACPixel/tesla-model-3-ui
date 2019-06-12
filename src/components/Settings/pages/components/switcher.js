import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled'


const Wrapper = styled.div`
height: 50px;
border-radius: 25px;
background: #aaa;
display: felx;
align-items: center;
position: relative;
`

const Option = styled.div`
width: 150px;
display: inline-block;
z-index: 10;
position: relative;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
height: 50px;
`

function Selection({offset}) {
    const props = useSpring({ left: (offset * 150) });
    return (
        <animated.div style={{...props, position: "absolute", zIndex: 5, background: "white", width: 146, height: 46, top: 0, borderRadius: 25, margin: 2 }}>
        </animated.div>
    )
}

export default ({current, options}) => {
    const [selected, select] = useState(current)
  return (
    <Wrapper style={{width: options.length * 150}}>
        {
            options.map((val, key)=>{
                return <Option onClick={()=>{select(key)}}>{val}</Option>
            })
        }
            <Selection offset={selected} />
    </Wrapper>
  );
};
