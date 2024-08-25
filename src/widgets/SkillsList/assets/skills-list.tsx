import {
  ISkillCardProps,
} from "@/shared/ui/SkillCard";

import html5Icon from '@/widgets/SkillsList/assets/icons/html5.svg'
import css3Icon from '@/widgets/SkillsList/assets/icons/css3.svg'
import sassIcon from '@/widgets/SkillsList/assets/icons/sass.svg'
import jsIcon from '@/widgets/SkillsList/assets/icons/js.svg'
import typeScriptIcon from '@/widgets/SkillsList/assets/icons/typescript.svg'
import reactIcon from '@/widgets/SkillsList/assets/icons/react.png'
import nextJsIcon from '@/widgets/SkillsList/assets/icons/nextjs.svg'
import vueJsIcon from '@/widgets/SkillsList/assets/icons/vue-js.svg'
import gitIcon from '@/widgets/SkillsList/assets/icons/git.png'
import figmaIcon from '@/widgets/SkillsList/assets/icons/figma.svg'
import webpackIcon from '@/widgets/SkillsList/assets/icons/webpack.png'

export const SKILLS_LIST: ISkillCardProps[] = [
  {
    caption: 'HTML5',
    levelPercentage: 80,
    withChildren: true,
    Svg: html5Icon,
    alt: 'Иконка html5',
  },
  {
    caption: 'CSS3',
    levelPercentage: 70,
    withChildren: true,
    Svg: css3Icon,
    alt: 'Иконка css3',
  },
  {
    caption: 'SASS/SCSS',
    levelPercentage: 70,
    withChildren: true,
    Svg: sassIcon,
    alt: 'Иконка sass/scss',
  },
  {
    caption: 'JavaScript',
    levelPercentage: 90,
    withChildren: true,
    Svg: jsIcon,
    alt: 'Иконка js',
  },
  {
    caption: 'TypeScript',
    levelPercentage: 80,
    withChildren: true,
    Svg: typeScriptIcon,
    alt: 'Иконка typescript',
  },
  {
    caption: 'React',
    levelPercentage: 80,
    withChildren: false,
    src: reactIcon,
    alt: 'Иконка react',
  },
  {
    caption: 'Next.js',
    levelPercentage: 80,
    withChildren: true,
    Svg: nextJsIcon,
    alt: 'Иконка nextjs',
  },
  {
    caption: 'Vue.js',
    levelPercentage: 50,
    withChildren: true,
    Svg: vueJsIcon,
    alt: 'Иконка vue.js',
  },
  {
    caption: 'Git',
    levelPercentage: 70,
    withChildren: false,
    src: gitIcon,
    alt: 'Иконка git',
  },
  {
    caption: 'Figma',
    withChildren: true,
    Svg: figmaIcon,
    alt: 'Иконка figma',
  },
  {
    caption: 'Webpack',
    withChildren: false,
    src: webpackIcon,
    alt: 'Иконка webpack',
  },
]
