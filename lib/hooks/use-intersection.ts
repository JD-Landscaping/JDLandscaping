// hooks/use-intersection.ts
"use client";

import { useInView } from "react-intersection-observer";

interface UseIntersectionOptions {
  triggerOnce?: boolean;
  threshold?: number;
}

export default function useIntersection(options?: UseIntersectionOptions) {
  const { ref, inView } = useInView({
    triggerOnce: options?.triggerOnce ?? false,
    threshold: options?.threshold ?? 0.5,
  });

  return { ref, inView };
}
