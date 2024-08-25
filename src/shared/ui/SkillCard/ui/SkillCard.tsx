import {FC, ReactNode, SVGProps} from 'react'
import {bem} from "@/shared/lib/bem";
import styles from './SkillCard.module.scss';

const b = bem('skill-card', styles);

export interface ISkillCardBasedProps {
  className?: string;
  levelPercentage?: number;
  caption?: string;
}

export interface INonImageProps extends ISkillCardBasedProps {
  withChildren: true;
  children: ReactNode;
  Svg?: never;
  src?: never;
  alt?: never;
}

export interface INonImageSVGProps extends ISkillCardBasedProps {
  withChildren: true;
  Svg: FC<SVGProps<SVGSVGElement>> | string;
  children?: never;
  src?: never;
  alt: string;
}

export interface IImageProps extends ISkillCardBasedProps {
  withChildren: false;
  children?: never;
  Svg?: never;
  src: string;
  alt: string;
}

export type ISkillCardProps = INonImageProps | INonImageSVGProps | IImageProps;

export const SkillCard: FC<ISkillCardProps> = (props) => {
  const {
    className,
    src,
    alt,
    levelPercentage,
    caption,
    withChildren,
    children,
    Svg,
  } = props;

  return (
    <article className={b('', {}, [className])}>
      <section className={b('card-wrapper')}>
        {withChildren
          ? (
            <div className={b('skill-element-wrapper')}>
              {!children && Svg
                ? (
                  <Svg
                    className={b('skill-svg')}
                    aria-label={alt!}
                  />
                )
                : (
                  children
                )}
            </div>
          ) : (
            <figure className={b('skill-image-wrapper')}>
              <img
                className={b('skill-image')}
                src={src!}
                alt={alt!}
              />
            </figure>
          )}
        {levelPercentage && (
          <span className={b('level-percentage')}>
            {levelPercentage}%
          </span>
        )}
      </section>
      {caption && (
        <section className={b('card-caption')}>
          <span className={b('caption')}>{caption}</span>
        </section>
      )}
    </article>
  );
}
