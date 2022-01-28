import { useEffect, useState } from 'react';

const getDimensions = () => {
  if (typeof window === 'undefined') {
    return { width: 0, height: 0 };
  }
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const getScrollPosition = () => {
  if (typeof window === 'undefined') {
    return 0;
  }
  const position = window.pageYOffset;
  return position;
};

const useWindow = () => {
  const [dimensions, setDimensions] = useState(getDimensions());
  const [scrollPosition, setScrollPosition] = useState(getScrollPosition());
  const handleResize = () => setDimensions(getDimensions());
  const handleScroll = () => setScrollPosition(getScrollPosition());

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { ...dimensions, scrollPosition };
};

export default useWindow;
