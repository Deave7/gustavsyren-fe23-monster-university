import  { useCallback, useState } from "react";

// Part 1
const useToggle = (initialState: boolean = false) => {
  // Part 2
  const [state, setState] = useState(initialState);

  // Part 3
  const toggle = useCallback(() => setState((state) => !state), []);

  // Part 4
  return [state, toggle] as const;
};

// Part 5
export default useToggle;