import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const DEFAULT_INITIAL_DELAY = 1100;
const DEFAULT_ROUTE_DELAY = 600;

const useNavigation = (
  routeDelay: number = DEFAULT_ROUTE_DELAY,
  initialDelay: number = DEFAULT_INITIAL_DELAY
): boolean => {
  const location = useLocation();
  const isFirstLoad = useRef<boolean>(true);
  const timeoutRef = useRef<number | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);

    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }

    const delay = isFirstLoad.current ? initialDelay : routeDelay;

    timeoutRef.current = window.setTimeout(() => {
      setIsLoading(false);
      isFirstLoad.current = false;
    }, delay);

    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, [location.pathname, location.search, routeDelay, initialDelay]);

  return isLoading;
};

export default useNavigation;