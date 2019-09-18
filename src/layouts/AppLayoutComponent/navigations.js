// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

// const decoded = jwt_decode(localStorage.jwtoken);
const decoded = jwt_decode(localStorage.token);
const userId = decoded.id;
export default [
  {
    link: '/app/for-you',
    svgClass: 'for-you',
    svgIcon: 'icons.svg#for-you',
    name: 'For you',
    navDesc: 'For You',
    id: 0,
  },
  {
    link: '/app/for-you',
    svgClass: 'icon-22',
    svgIcon: 'icons.svg#discover',
    name: 'Discover',
    navDesc: 'Discover',
    id: 1,
  },
  {
    link: '/app/for-you',
    svgClass: 'icon-22',
    svgIcon: 'icons.svg#discuss',
    name: 'Discuss',
    navDesc: 'Discuss',
    id: 2,
  },
  {
    link: `/app/learners-profile/${userId}`,
    svgClass: 'icon-22',
    svgIcon: 'icons.svg#profile',
    name: 'Profile',
    navDesc: 'Profile',
    id: 3,
  },
];
