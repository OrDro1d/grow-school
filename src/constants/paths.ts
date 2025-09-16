interface IPath {
  URL: string;
  pathname: string;
}

const PATHS: Record<string, IPath> = {
  HOME: { URL: '/', pathname: 'Домой' },
  MAIN_COURSES: { URL: '#main-courses', pathname: 'Популярные курсы' },
  RECOMMENDED_COURSES: {
    URL: '#recommended-courses',
    pathname: 'Рекомендуемые',
  },
  ALL_COURSES: { URL: '#all-courses', pathname: 'Все курсы' },
  NEW_COURSE: { URL: '/course/new', pathname: 'Создать курс' },
  ABOUT: { URL: '/about', pathname: 'О нас' },
  SIGN_IN: { URL: '/auth/signin', pathname: 'Войти' },
  SIGN_UP: { URL: '/auth/signup', pathname: 'Зарегистрироваться' },
};

export default PATHS;

export type PathKey = keyof typeof PATHS;
