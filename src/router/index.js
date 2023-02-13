import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import McdoView from "../views/McdoView.vue";
import KfcView from "../views/KfcView.vue";
import BurgerKingView from "../views/BurgerKingView.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView
    },
    {
        path: "/menu-mc-burger",
        name: "mcdo",
        component: McdoView
    },
    {
        path: "/menu-kfc-burger",
        name: "kfc",
        component: KfcView
    },
    {
        path: "/menu-bk-burger",
        name: "bking",
        component: BurgerKingView
    },
    {
        path: "/menu/:id",
        name: "menu",
        component: () => import('../views/MenuView.vue') // permet de charger le js uniquemement a celui la, permet de charger plus rapidement les pages
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: "lien-actif", // Ajoute la classe lien-actif sur les liens pour permettre d'ajouter du style sur chaque lien actif (cliqué)
});

export default router;