import {bem} from "@//shared/lib/bem";
import styles from './Navbar.module.scss';
import {FC, memo} from "react";
import AppLogo from "@/shared/ui/AppLogo/AppLogo";
import { ThemeSwitcher } from "@/entities/theme";
import {AppLink} from "@/shared/ui/AppLink";
import {getRouteMain, getRouteProjects, getRouteSkills} from "@/shared/const/router";
const b = bem('navbar', styles);

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = memo((props: NavbarProps) => {
  const {
    className
  } = props;

  return (
    <header className={b('', {}, [className])}>
      <div className={b('container')}>
        <AppLogo
          className={b('logo')}
        />
        <a
          href="mailto:sergey.bat2001@yandex.com"
          className={b('my-email')}
        >
          sergey.bat2001@yandex.com
        </a>
        <ul className={b('link-list')}>
          <li>
            <AppLink
              className={b('link')}
              to={getRouteMain()}
            >
              Обо мне
            </AppLink>
          </li>
          <li>
            <AppLink
              className={b('link')}
              to={getRouteProjects()}
            >
              Мои навыки
            </AppLink>
          </li>
          <li>
            <AppLink
              className={b('link')}
              to={getRouteSkills()}
            >
              Мои проекты
            </AppLink>
          </li>
        </ul>
        <ThemeSwitcher
          classNames={b('theme-switcher')}
        />
      </div>
    </header>
  )
});

Navbar.displayName = 'Navbar';
