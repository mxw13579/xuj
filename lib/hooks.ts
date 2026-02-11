'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import { breakpoints } from './consts';

function useBreakpoint() {
    const [breakpoint, setBreakpoint] = useState<string>('lg');

    useEffect(() => {
        const orderedBreakpoints = Object.entries(breakpoints).sort(
            (first, second) => second[1] - first[1]
        );

        const handleResize = () => {
            const width = window.innerWidth;
            const newBreakpoint =
                orderedBreakpoints.find(([, value]) => width >= value)?.[0] ??
                'sm';
            setBreakpoint(newBreakpoint);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { breakpoint, setBreakpoint };
}

function useMounted(delay: number = 0) {
    const [isMounted, setIsMounted] = useState(false);

    useLayoutEffect(() => {
        const timer = window.setTimeout(() => {
            setIsMounted(true);
        }, delay);

        return () => window.clearTimeout(timer);
    }, [delay]);

    return isMounted;
}

export { useBreakpoint, useMounted };
