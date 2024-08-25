import { LinkProps, NavLink } from 'react-router-dom';
import {FC, memo, ReactNode} from 'react';
import styles from './AppLink.module.scss';
import { bem } from '@/shared/lib/bem';

const b = bem('app-link' ,styles);

export type AppLinkVariant = 'primary' | 'secondary';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  activeClassName?: string;
  withoutActive?: boolean;
}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    variant = 'primary',
    activeClassName = '',
    withoutActive = false,
    ...otherProps
  } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        b('', { active: isActive && !withoutActive, [variant]: true, }, [
          className,
          isActive && !withoutActive ? activeClassName: '',
        ])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});

AppLink.displayName = 'AppLink';
