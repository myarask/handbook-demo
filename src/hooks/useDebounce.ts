import { useEffect, useState } from "react";

export const useDebounce = <T>(value: T, delay: number = 300) => {
  const [state, setState] = useState<T>(value);

  useEffect(() => {
    const t = setTimeout(setState, delay, value);
    return () => {
      clearTimeout(t);
    };
  }, [value, delay]);

  return state;
};
