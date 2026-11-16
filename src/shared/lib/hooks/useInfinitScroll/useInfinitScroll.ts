import { MutableRefObject, useEffect } from 'react';

export interface useInfinitScrollOptions {
    callback?: () => void;
    triggerRef: MutableRefObject<HTMLDivElement>
    wrapperRef: MutableRefObject<HTMLDivElement>
}

export function useInfinitScroll({
    callback,
    triggerRef,
    wrapperRef,
}: useInfinitScrollOptions) {
    useEffect(() => {
        let observer: IntersectionObserver | null;
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;
        if (callback) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0,
            };
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);
            observer.observe(triggerElement);

            return () => {
                if (observer && triggerElement) {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    observer.unobserve(triggerElement);
                }
            };
        }
        return undefined;
    }, [callback, triggerRef, wrapperRef]);
}
