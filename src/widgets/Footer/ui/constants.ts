import {getRouteMain, getRouteProjects, getRouteSkills} from "@/shared/const/router";
import githubIcon from "@/shared/icons/github.png";
import telegrammIcon from "@/shared/icons/telegramm.png";
import vkIcon from "@/shared/icons/vk.png";
import setkaIcon from "@/shared/icons/setka.png";
import hhIcon from "@/shared/icons/hh.png";
import {Theme} from "@/shared/const/theme";

interface INavItem {
  link: string;
  title: string;
  subList?: INavItem[];
}

interface IMyLinksItem {
  link: string;
  src: string;
  alt: string;
  withInverted?: boolean;
  themeInverted?: string;
}
export const NAV_LIST: INavItem[]= [
  {
    link: getRouteMain(),
    title: 'Обо мне',
    subList: [
      {
        link: `${getRouteMain()}/?my-skills`,
        title: 'Мои навыки',
      }
    ]
  },
  {
    link: getRouteProjects(),
    title: 'Мои навыки',
  },
  {
    link: getRouteSkills(),
    title: 'Мои проекты',
  },
]

export const MY_LINKS: IMyLinksItem[] = [
  {
    src: githubIcon,
    link: 'https://github.com/SergeyBat',
    alt: "Иконка с ссылкой на github.com",
    withInverted: true,
    themeInverted: Theme.DARK,
  },
  {
    src: telegrammIcon,
    link: 'https://t.me/sbatagov',
    alt: "Иконка с ссылкой на github.com",
  },
  {
    src: vkIcon,
    link: 'https://vk.com/sbatagov03',
    alt: "Иконка с ссылкой на vk.com",
  },
  {
    link: 'https://setka.ru/accounts/45340',
    src: setkaIcon,
    alt: "Иконка с ссылкой на hi.setka.ru",
    withInverted: true,
    themeInverted: Theme.LIGHT,
  },
  {
    link: 'https://taganrog.hh.ru/resume/f3e2f39fff0ceb11900039ed1f69576b56306b',
    src: hhIcon,
    alt: "Иконка с ссылкой на hh.ru",
  },
]


export const GET_AGE = (): number => {
  const today = new Date();
  const birth = new Date('2001-09-03');
  let age: number = today.getFullYear() - birth.getFullYear();
  const monthDifference: number = today.getMonth() - birth.getMonth();
  const dayDifference: number = today.getDate() - birth.getDate();
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }
  return age;
}
