import Overview from "../components/Overview";
import Detail from "../components/Detail";

export default [
    { path: '/', component: Overview, name: 'home' },
    { path: '/movie', component: Detail, name: 'movie' },
    { path: '*', redirect: { name: 'home' } }
];