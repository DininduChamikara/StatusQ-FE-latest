import { useEffect, useRef } from "react";

// Initial Render
export function useIsMount() {
  const isMount = useRef(true);
  useEffect(() => {
    isMount.current = false;
  }, []);

  return isMount.current;
}
