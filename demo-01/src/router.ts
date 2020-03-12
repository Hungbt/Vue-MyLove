import Vue from 'vue';
import Router from 'vue-router';
import HomeComponent from './components/home/home.component';
import Random_eatingComponent from './components/random_eating/random_eating.component';
Vue.use(Router);

const routes = [
  { path: '/', component: Random_eatingComponent },
  { path: '/admin', component: HomeComponent },
];

export default new Router({
  mode: 'history',
  fallback: true,
  base: '/',
  linkActiveClass: 'active',
  routes,
});
