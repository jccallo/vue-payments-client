// vue
import Vue from "vue";

// import vue-router
import VueRouter from "vue-router";

// vue-router loaded for the application
Vue.use(VueRouter);

// components
import Index from "./components/client/Index.vue";
import Edit from "./components/client/Edit.vue";
import Create from "./components/client/Create.vue";

// routes
const routes = [
   {
      path: "/",
      name: "index",
      component: Index,
   },  
   {
      path: "/edit/:id",
      name: "edit",
      component: Edit,
   },
   {
      path: "/create",
      name: "create",
      component: Create,
   },
];

// router instance
const router = new VueRouter({
   mode: "history",
   routes,
});

// export router instance
export default router;
