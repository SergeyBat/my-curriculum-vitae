import {bem} from "@/shared/lib/bem";
import styles from "./MainPage.module.scss";
import {AboutMeBlock} from "@/features/AboutMeBlock/ui/AboutMeBlock";

const b = bem('main', styles)

const MainPage = () => {
  return (
    <div className={b('')}>
      <AboutMeBlock />
    </div>
  );
};

export default MainPage;
