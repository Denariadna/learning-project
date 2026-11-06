import {
    memo, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(() => {
    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                <div className="page-wrapper">
                    {route.element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                element={route.authOnly
                    ? (
                        <RequireAuth>
                            {element}
                        </RequireAuth>
                    )
                    : element}
                path={route.path}
            />
        );
    }, []);
    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
            {/* {routes.map(({ element, path }) => (
                <Route
                    key={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">
                                {element}
                            </div>
                        </Suspense>
                    )}
                    path={path}
                />
            ))} */}
        </Routes>
    );
});
