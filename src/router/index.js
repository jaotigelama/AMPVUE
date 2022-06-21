
const {
  createRouter,
  createMemoryHistory,
  createWebHistory,
} = require('vue-router');

const isServer = typeof window === 'undefined';

const _importPages = file => () => import('../components/pages/' + file + '.vue');

let history = isServer ? createMemoryHistory() : createWebHistory();

const routes = [
  { name: 'home', path: '/', component: _importPages('Home') },
  { name: 'AMPValid', path: '/amp-valid', component: _importPages('AMPValid') },
  { name: 'AMPNotValid', path: '/not-amp-valid', component: _importPages('AMPNotValid') },
  { name: 'AMPList', path: '/amp-list', component: _importPages('AMPList') },
];

export function _createRouter() {
  return createRouter({ routes, history });
}
