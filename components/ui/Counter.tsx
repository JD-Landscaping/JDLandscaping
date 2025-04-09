// components/ui/Counter.ts
"use client";
import CountUp from "react-countup";
import useIntersection from "@/lib/hooks/use-intersection";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

export default function Counter({
  end,
  suffix = "",
  duration = 2,
}: Readonly<CounterProps>) {
  const { ref, inView } = useIntersection({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <CountUp
          className='counter'
          start={0}
          end={end}
          duration={duration}
          suffix={suffix}
        />
      ) : (
        `0${suffix}`
      )}
    </div>
  );
}
