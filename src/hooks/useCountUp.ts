import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  decimals?: number;
}

export const useCountUp = ({ 
  end, 
  duration = 2000, 
  delay = 0,
  suffix = '',
  decimals = 0 
}: UseCountUpOptions) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const frameRef = useRef<number>();

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setHasStarted(true);
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Ease out cubic for smooth deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentCount = easeOut * end;
        
        setCount(currentCount);
        
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        }
      };
      
      frameRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(delayTimeout);
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, delay]);

  const displayValue = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toString();

  return { value: displayValue + suffix, hasStarted };
};
