import {FC} from 'react'
import {bem} from "@/shared/lib/bem";
import styles from './MySkillsBlock.module.scss';

const b = bem('my-skills-block', styles);

export interface IMySkillsBlockProps {
  className?: string;
}

export const MySkillsBlock: FC<IMySkillsBlockProps> = (props) => {
  const {
    className,
  } = props;

  return (
    <div className={b('', {}, [className])}>

    </div>
  )
}

export default MySkillsBlock;
