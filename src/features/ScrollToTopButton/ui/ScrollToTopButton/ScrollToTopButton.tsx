import {memo, useCallback, useEffect, useState} from 'react';
import { bem } from '@/shared/lib/bem';
import styles from './ScrollToTopButton.module.scss';
import { Icon } from '@/shared/ui/Icon';
import CircleIcon from '@/shared/icons/circle-up.svg';

const b = bem('', styles);

interface ScrollToTopButtonProps {
  className?: string;
  classNameIcon?: string;
}

export const ScrollToTopButton = memo((props: ScrollToTopButtonProps) => {
  const { className, classNameIcon } = props;

  const [isVisible, setIsVisible] = useState(false);
  const handleScroll = useCallback(() => {
    window.requestAnimationFrame(() => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);


  const onCLick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Icon
      Svg={CircleIcon as React.FC<React.SVGProps<SVGSVGElement>>}
      clickable
      onClick={onCLick}
      width={32}
      height={32}
      className={b(styles.ScrollToTopButton, {}, [
        className,
        isVisible ? styles.ScrollToTopButton_visible : ''
      ])}
      classNameIcon={b(b(styles.Icon, {}, [classNameIcon]))}
    />
  );
});
