import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { SkillsPage } from '@/pages/SkillsPage';

export enum AppRoutes {
    MAIN = 'main',
    PROJECTS = 'projects',
    SKILLS = 'skills',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PROJECTS]: '/projects',
  [AppRoutes.SKILLS]: '/skills',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.PROJECTS]: {
    path: RoutePath.projects,
    element: <ProjectsPage />,
  },  [AppRoutes.SKILLS]: {
    path: RoutePath.skills,
    element: <SkillsPage />,
  },
};
