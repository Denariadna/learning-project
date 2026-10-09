import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { Suspense } from "react"
import { Route, Routes } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"

export const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            {element}
                        </Suspense>
                    }
                    path={path}
                />
            ))}
        </Routes>
    )
}