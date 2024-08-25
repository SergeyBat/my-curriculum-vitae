import React, { memo } from 'react';
import { bem } from '@/shared/lib/bem';
import styles from './Icon.module.scss';

const b = bem('', styles);

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
  clickable?: false;
  classNameIcon?: string;
}

interface ClickableBaseProps extends IconBaseProps {
  clickable: true;
  classNameIcon?: string
  onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableBaseProps;

export const Icon = memo((props: IconProps) => {
  const {
    className,
    Svg,
    width = 32,
    height = 32,
    clickable,
    classNameIcon,
    ...otherProps
  } = props;

  const icon = (
    <Svg
      className={b(styles.Icon, {}, [clickable ? classNameIcon : className])}
      width={width}
      height={height}
      {...otherProps}
      onClick={undefined}
    />
  );

  if (clickable) {
    return (
      <button
        type="button"
        className={b(styles.Icon, {}, [className])}
        onClick={props.onClick}
        style={{ height, width }}
      >
        {icon}
      </button>
    );
  }

  return icon;
});
