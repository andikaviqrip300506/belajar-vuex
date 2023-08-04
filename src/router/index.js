import { createWebHistory, createRouter } from "vue-router";
import Counter from '../components/Counter.vue'
import Todolist from '../components/Todolist.vue'

const routes = [
       {
         path: "/",
         name: "Counter",
         component: Counter,
        },
        {
         path: "/todos",
         name: "Todolist",
         component: Todolist,
           },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  
  
  export default router;