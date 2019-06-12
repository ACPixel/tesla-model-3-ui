import React from 'react';
import BottomNav from './bottomNav';
import SideHud from './sideHud';
import Map from './map';
import TopNav from './topNav';

export default () => {
  return (
    <div>
      <SideHud />
      <BottomNav />
      <Map />
      <TopNav />
    </div>
  );
};
