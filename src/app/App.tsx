import { AboutPageAsync } from "pages/AboutPage/ui/AboutPage.async";
import { MainPageAsync } from "pages/MainPage/ui/MainPage.async";
import { Suspense, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";
import './styles/index.scss'

export const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter />
        </div>
    )
}