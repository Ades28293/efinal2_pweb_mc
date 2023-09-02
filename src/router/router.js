import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
    {
      path: "/",
      component: () => import("../modules/inscripción/pages/BienvenidaPage"),
    },
    {
        path: "/guardar",
        component: () => import("../modules/inscripción/pages/GuardarEstudiante"),
      },
      {
        path: "/clave",
        component: () => import("../modules/inscripción/pages/GuardarToken"),
      },
  ];
  
  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });
  
  export default router;
  