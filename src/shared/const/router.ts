export enum AppRoutes {
    MAIN = 'main',
    PROJECTS = 'projects',
    SKILLS = 'skills',
    // last
    NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteProjects = () => '/projects';
export const getRouteSkills = () => '/skills';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRouteProjects()]: AppRoutes.PROJECTS,
  [getRouteSkills()]: AppRoutes.SKILLS,
};
