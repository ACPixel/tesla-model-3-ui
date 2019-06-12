import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import {IoMdClose} from 'react-icons/io'
import { Link } from 'react-router-dom';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Nav from './nav'
import Routing from './Routing';

export default () => {
  const [props, set] = useSpring(() => ({ height: "0%" }));
  useEffect(() => {
    setTimeout(() => {
      set({ height: "95%" });
    }, 100);
  }, [set]);
  return (
    <div style={{ height: "100%", width: "calc(100% - 500px)", position: "absolute", right: "0", bottom: "0", zIndex: 500, display: "flex", justifyContent: "center", alignItems: "flex-end" }}>
        <animated.div style={{...props, background: 'white', width: "98%", bottom: 0, borderRadius: 10, position: "relative"}}>
            <Link to="/" css={css`
                color: black;
                text-decoration: none;
                font-size: 36px;
                display: block;
                margin: 15px;
                `}>
                <IoMdClose />
            </Link>
            <Nav />
            <Routing />
        </animated.div>
    </div>
  );
};
