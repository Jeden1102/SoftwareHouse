import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutUs from '../views/AboutUs.vue'
import Solutions from '../views/Solutions.vue'
import Jobs from '../views/Jobs.vue'
import Job from '../views/Job.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'AboutUs',
        component: AboutUs
    },
    {
        path: '/solutions',
        name: 'Solutions',
        component: Solutions
    },
    {
        path: '/jobs',
        name: 'Jobs',
        component: Jobs
    },
    {
        path: '/jobs/:id',
        name: 'Job',
        component: Job,
        props: true
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router