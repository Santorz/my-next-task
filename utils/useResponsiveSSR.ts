import { useState, useLayoutEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function useResponsiveSSR() {
  const [isClient, setIsClient] = useState(false);

  const isMobile = useMediaQuery({
    maxWidth: '48em',
  });

  const isTabletOnly = useMediaQuery({
    minWidth: '48em',
    maxWidth: '62em',
  });

  const isTabletAndAbove = useMediaQuery({
    minWidth: '48em',
  });

  const isDesktopOnly = useMediaQuery({
    minWidth: '62em',
  });

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true);
  }, []);

  return {
    isDesktopOnly: isClient ? isDesktopOnly : true,
    isTabletOnly: isClient ? isTabletOnly : false,
    isMobile: isClient ? isMobile : false,
    isTabletAndAbove: isClient ? isTabletAndAbove : false,
  };
}

export default useResponsiveSSR;
