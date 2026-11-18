import { classNames } from 'shared/lib/classNames/classNames';
import {
    memo, MutableRefObject, ReactNode, UIEvent, useLayoutEffect, useRef,
} from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useLocation } from 'react-router-dom';
import { useStore } from 'react-redux';
import { StateSchema } from 'app/providers/StoreProvider';
import { getScrollByPath, scrollActions } from 'features/scroll';
import { useInfiniteScroll } from 'shared/lib/hooks/useHover/useInfiniteScroll';
import cls from './Page.module.scss';

interface PageProps {
    className?: string;
    children: ReactNode;
    onScrollEnd?: () => void;
}

export const Page = memo((props: PageProps) => {
    const { className, children, onScrollEnd } = props;
    const wrapperRef = useRef() as MutableRefObject<HTMLElement>;
    const contentRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const restoreObserver = useRef<ResizeObserver | null>(null);
    const store = useStore<StateSchema>();
    const dispatch = useAppDispatch();
    const { pathname } = useLocation();

    useInfiniteScroll({
        triggerRef,
        wrapperRef,
        callback: onScrollEnd,
    });

    useLayoutEffect(() => {
        const wrapper = wrapperRef.current;
        const position = getScrollByPath(store.getState(), pathname);
        const restoreScroll = () => {
            if (position > wrapper.scrollHeight - wrapper.clientHeight) {
                return false;
            }

            wrapper.scrollTop = position;
            return true;
        };

        if (restoreScroll()) {
            return undefined;
        }

        wrapper.scrollTop = 0;
        const observer = new ResizeObserver(() => {
            if (restoreObserver.current === observer && restoreScroll()) {
                observer.disconnect();
                restoreObserver.current = null;
            }
        });
        restoreObserver.current = observer;
        observer.observe(wrapper);
        observer.observe(contentRef.current);

        return () => {
            observer.disconnect();
            restoreObserver.current = null;
        };
    }, [pathname, store]);

    const onScroll = (event: UIEvent<HTMLElement>) => {
        const { scrollTop } = event.currentTarget;
        if (restoreObserver.current) {
            if (scrollTop === 0) {
                return;
            }

            restoreObserver.current.disconnect();
            restoreObserver.current = null;
        }

        dispatch(scrollActions.setScrollPosition({
            position: scrollTop,
            path: pathname,
        }));
    };

    return (
        <section
            ref={wrapperRef}
            className={classNames(cls.Page, {}, [className])}
            onScroll={onScroll}
        >
            <div ref={contentRef}>
                {children}
                <div ref={triggerRef} />
            </div>
        </section>
    );
});
