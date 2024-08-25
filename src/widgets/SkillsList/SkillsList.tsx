import {FC} from 'react'
import {bem} from "@/shared/lib/bem";
import styles from './SkillsList.module.scss';
import {SKILLS_LIST} from "@/widgets/SkillsList/assets/skills-list";
import {SkillCard} from "@/shared/ui/SkillCard";

const b = bem('skills-list', styles);

export interface ISkillsListProps {
  className?: string;
}

export const SkillsList: FC<ISkillsListProps> = (props) => {
  const {
    className,
  } = props;

  return (
    <ul className={b('', {}, [className])}>
      {SKILLS_LIST.map((item) => (
        <li key={item.caption}>
          <SkillCard
            className={b('skill')}
            {...item}
          />
        </li>
      ))}
    </ul>
  )
}
