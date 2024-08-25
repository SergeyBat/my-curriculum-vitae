import {bem} from "@/shared/lib/bem";
import styles from "./MainPage.module.scss";
import {AboutMeBlock} from "@/features/AboutMeBlock/ui/AboutMeBlock";
import { MySkillsBlock } from "@/features/MySkillsBlock/ui/MySkillsBlock";

const b = bem('main-page', styles)

const MainPage = () => {
  return (
    <main className={b('')}>
      <AboutMeBlock
        className={b('about-me')}
      />
      <MySkillsBlock
        className={b('my-skills')}
      />
    </main>
  );
};

export default MainPage;
