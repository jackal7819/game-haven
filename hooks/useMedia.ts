'use client';

import {useMediaQuery} from 'react-responsive';
import {useEffect, useState} from 'react';

export const useMedia = () => {
  const isLargeDesktop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  const isDesktop = useMediaQuery({
    query: '(min-width: 1290px) and (max-width: 1439px)',
  });
  const isLaptop = useMediaQuery({
    query: '(min-width: 1024px) and (max-width: 1279px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1023px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  const [deviceType, setDeviceType] = useState('');

  useEffect(() => {
    if (isLargeDesktop) setDeviceType('2xl');
    else if (isDesktop) setDeviceType('xl');
    else if (isLaptop) setDeviceType('lg');
    else if (isTablet) setDeviceType('md');
    else setDeviceType('sm');
  }, [isLargeDesktop, isDesktop, isTablet, isLaptop, isMobile]);

  return {deviceType};
};