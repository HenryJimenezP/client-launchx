import { createWebHistory, createRouter } from "vue-router";
const routes =  [
  {
    path: "/",
    alias: "/explorers",
    name: "explorers",
    component: () => import("./components/ExplorersList")
  },
  {
    path: "/explorer/:id",
    name: "explorer-details",
    component: () => import("./components/Explorer")
  },
  {
    path: "/add",
    name: "add-explorer",
    component: () => import("./components/AddExplorer")
  },
  {
    alias: "/mission",
    name: "mission",
    component: () => import("./components/MissionList")
  },
  {
    path: "/mission/:id",
    name: "mission-details",
    component: () => import("./components/Mission")
  },
  {
    path: "/addmission",
    name: "add-mission",
    component: () => import("./components/AddMission")
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
