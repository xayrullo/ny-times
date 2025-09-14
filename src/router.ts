import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/index.vue"),
    children: [],
  },
  {
    path: "/news",
    name: "news",
    component: () => import("./views/news.vue"),
    children: [
      {
        path: "/news/ocean-vuong-family-brother",
        name: "ocean-vuong-family-brother",
        component: () => import("./views/news/ocean-vuong.vue"),
      },
    ],
  },
  {
    path: "/404",
    name: "404",
    component: () => import("./views/errors/404.vue"),
    meta: {
      pageTitle: "Error 404",
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 80,
        behavior: "smooth",
      };
    } else {
      return {
        top: 0,
        left: 0,
        behavior: "smooth",
      };
    }
  },
});

export default router;
