import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/lightTheme.svg';
import DarkIcon from 'shared/assets/icons/darkTheme.svg';
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    return (
        <Button
            theme={ThemeButton.CLEAR}
            onClick={toggleTheme}
            className={classNames(cls.ThemeSwitcher, {}, [className ?? ''])}
        >
            {theme === Theme.DARK
                ? <DarkIcon width={30} height={30} />
                : <LightIcon width={30} height={30} viewBox="0 0 24 24" />}
        </Button>
    );
};
