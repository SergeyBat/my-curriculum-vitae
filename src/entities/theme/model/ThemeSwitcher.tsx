import {useTheme} from "@/shared/lib/hooks/useTheme/useTheme";
import {Theme} from "@/shared/const/theme";
import LightThemeIcon, {ILightThemeIconProps} from "@/entities/theme/ui/LightThemeIcon";
import DarkThemeIcon, {IDarkThemeIconProps} from "@/entities/theme/ui/DarkThemeIcon";
import {bem} from "@/shared/lib/bem";
import styles from './ThemeSwitcher.module.scss'
import {FC} from "react";

const b = bem('theme-switcher', styles)
interface IThemeSwitcherProps extends IDarkThemeIconProps, ILightThemeIconProps {
  classNames?: string;
  classNamesIcon?: string;
}

export const ThemeSwitcher: FC<IThemeSwitcherProps> = ({
  classNames,
  ...otherProps
}) => {
  const {theme, toggleTheme} = useTheme();

  return (
    <button
      className={b('', {}, [classNames])}
      onClick={() => toggleTheme()}
    >
      {theme === Theme.DARK ? (
        <LightThemeIcon
          {...otherProps}
        />
      ) : (
        <DarkThemeIcon
          {...otherProps}
        />
      )}
    </button>
  )
}


