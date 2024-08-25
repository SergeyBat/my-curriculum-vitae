import {FC} from 'react'
import {bem} from "@/shared/lib/bem";
import styles from './MySkillsBlock.module.scss';
import {SkillsList} from "@/widgets/SkillsList/SkillsList";

const b = bem('my-skills-block', styles);

export interface IMySkillsBlockProps {
  className?: string;
}

export const MySkillsBlock: FC<IMySkillsBlockProps> = (props) => {
  const {
    className,
  } = props;

  return (
    <article
      className={b('', {}, [className])}
    >
      <div className={b('content')}>
        <header className={b('header')}>
          <h2 className={b('title')}>Мои навыки</h2>
          <p className={b('subtitle')}>На данный момент я знаю и активно использую:</p>
        </header>
        <article>
          <SkillsList
            className={b('skills-list')}
          />
        </article>
      </div>
    </article>
  )
}
