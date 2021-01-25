import { useEffect, useRef } from "react";

export const useRenderCount = (deps: React.DependencyList) => {
  const renderCount = useRef(1);

  useEffect(() => {
    console.log(`Render # ${renderCount.current}, Props: ${deps.join}`);
    renderCount.current++;
  });

  useEffect(() => {
    renderCount.current = 1;
  }, deps);
};
// usePrevious = (value) => {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// };
