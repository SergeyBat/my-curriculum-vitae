import {bem} from "@//shared/lib/bem";
import styles from './Navbar.module.scss';
import {FC, memo} from "react";
import AppLogo from "@/shared/ui/AppLogo/AppLogo";
import { ThemeSwitcher } from "@/entities/theme";
import {AppLink} from "@/shared/ui/AppLink";
import {getRouteMain, getRouteProjects, getRouteSkills} from "@/shared/const/router";
import {useLocation} from "react-router-dom";
const b = bem('navbar', styles);

interface NavbarProps {
  className?: string;
}

const navList = [
  {
    link: getRouteMain(),
    title: 'Обо мне',
  },
  {
    link: getRouteProjects(),
    title: 'Мои навыки',
  },
  {
    link: getRouteSkills(),
    title: 'Мои проекты',
  },
]

export const Navbar: FC<NavbarProps> = memo((props: NavbarProps) => {
  const {
    className
  } = props;
  const {
    pathname,
    ...location
  } = useLocation();
  console.log('=>(Navbar.tsx:23) location', location);

  return (
    <header className={b('', {}, [className])}>
      <div className={b('container')}>
        <AppLogo
          className={b('logo')}
        />
        <a
          href="mailto:sergey.bat2001@yandex.ru"
          className={b('my-email')}
        >
          sergey.bat2001@yandex.ru
        </a>
        <nav>
          <ul className={b('link-list')}>
            {navList.map(({link, title}) => (
              <li key={link}>
                <AppLink
                  className={b('link')}
                  to={link}
                  activeClassName={b('active')}
                >
                  {title}
                </AppLink>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeSwitcher
          classNames={b('theme-switcher')}
        />
      </div>
    </header>
  )
});

Navbar.displayName = 'Navbar';
