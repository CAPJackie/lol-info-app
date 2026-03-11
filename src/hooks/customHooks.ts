import { useEffect, useRef } from "react";

export const useRenderCount = (deps: React.DependencyList) => {
  const renderCount = useRef(1);

  useEffect(() => {
    console.log(`Render # ${renderCount.current}, Props: ${deps.join(", ")}`);
    renderCount.current++;
  });

  useEffect(() => {
    renderCount.current = 1;
    // eslint-disable-next-line react-hooks/exhaustive-deps -- Forwarded dependency list from caller.
  }, [...deps]);
};
// usePrevious = (value) => {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// };
