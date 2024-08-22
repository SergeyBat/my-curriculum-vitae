import { LinkProps, NavLink } from 'react-router-dom';
import {FC, memo, ReactNode} from 'react';
import styles from './AppLink.module.scss';
import { bem } from '@/shared/lib/bem';

const b = bem('app-link' ,styles);

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children?: ReactNode;
  activeClassName?: string;
}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    children,
    variant = 'primary',
    activeClassName = '',
    ...otherProps
  } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        b('', { [activeClassName]: isActive, variant }, [
          className,
        ])
      }
      {...otherProps}
    >
      {children}
    </NavLink>
  );
});

AppLink.displayName = 'AppLink';
