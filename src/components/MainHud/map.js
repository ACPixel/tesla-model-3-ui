import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import MusicHud from './musicHud';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiYWNwaXhlbCIsImEiOiJjaXlxZjN2cWswMDBnMzNtbGs3bXY0NDgxIn0.mwaW0t043LVIjiNh4R3GEQ',
});

const Wrapper = styled.div`
  width: calc(100% - 500px);
  height: calc(100% - 50px);
  position: absolute;
  right: 0px;
  top: 0px;
`;

export default () => {
  return (
    <Wrapper>
      <Map
        style="mapbox://styles/acpixel/cjwtgh3ybft6v1cp9tpfweubs"
        containerStyle={{
          height: '100%',
          width: '100%',
        }}
        center={[-122.6720912, 45.492026]}
        zoom={[16]}
      />
      <MusicHud />
    </Wrapper>
  );
};
