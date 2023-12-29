import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersList from './components/users/UsersList.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes : [
        { path: '/', redirect: '/teams' },
        { 
            name: 'teams', path: '/teams',
            meta: {
                needsAuth: true
            },
            components: {
                default : TeamsList,
                footer : TeamsFooter,
            }, 
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },
            ]
        },
        { 
            path: '/users', 
            components: {
                default : UsersList,
                footer : UsersFooter,
            },
            beforeEnter(to, from, next){
                next();
            }
        },
        { path: '/:notFound(.*)', redirect: '/teams' },
    ],
    linkActiveClass:'active',
    scrollBehavior (to, from, savedPosition) {
        console.log(to, from)
        if (savedPosition) return savedPosition;
        return { left : 0, top : 0 };
    }
});

router.beforeEach(function(to, from, next){
    if (to.meta.needsAuth) console.log('needsAuth')
    // console.log(to, from)
    // if (to.name === 'team-members') {
    //     next();
    // } else {
    //     next({name: 'team-members', params: { teamId: 't2' }});
    // }
    next();
});

router.afterEach(function(to, from){
    console.log(to, from)
});

const app = createApp(App);

app.use(router);

app.mount('#app');
 