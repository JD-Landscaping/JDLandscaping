// "use client";

// import Lenis from "lenis";
// import { useEffect } from "react";

// export default function useLenis() {
//   useEffect(() => {
//     const lenis = new Lenis();

//     const raf = (time: number) => {
//       lenis.raf(time);
//       requestAnimationFrame(raf);

//       return () => {
//         lenis.destroy();
//       };
//     };
//   }, []);
// }
