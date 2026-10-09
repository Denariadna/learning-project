import { Suspense, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import './styles/index.scss'
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Theme, ThemeContext } from "./theme/ThemeContext";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

export const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Routes>
                <Route
                    path={'/'}
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <MainPageAsync />
                        </Suspense>
                    }
                />
                <Route
                    path={'/about'}
                    element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <AboutPageAsync />
                        </Suspense>
                    }
                />
            </Routes>
        </div>
    )
}